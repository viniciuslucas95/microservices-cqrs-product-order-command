#!/bin/bash
export PGPASSWORD='admin'

psql -U 'admin' <<- EOSQL
    CREATE DATABASE dev;
    CREATE USER rep_admin REPLICATION LOGIN ENCRYPTED PASSWORD 'rep_admin';
EOSQL

psql -U 'admin' -d 'dev' <<- EOSQL
	CREATE TABLE "product_orders" (
        id UUID PRIMARY KEY,
        product_id UUID NOT NULL,
        user_id UUID NOT NULL,
        date TIMESTAMP WITH TIME ZONE NOT NULL,
        status VARCHAR(9) NOT NULL
    );
EOSQL

psql -U 'admin' -d 'dev' -c "SELECT pg_create_physical_replication_slot('rep_slot');"

pg_ctl stop -D /var/lib/postgresql/data -m fast

cp /docker-entrypoint-initdb.d/pg_hba.conf /var/lib/postgresql/data/
cp /docker-entrypoint-initdb.d/postgresql.conf /var/lib/postgresql/data/

/usr/local/bin/docker-entrypoint.sh postgres
