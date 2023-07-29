#!/bin/bash
export PGPASSWORD='admin'
psql -U 'admin' <<- EOSQL
    CREATE DATABASE dev;
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
