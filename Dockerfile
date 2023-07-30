FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY src ./src
COPY tsconfig.json ./
COPY swagger.js ./

CMD npm run build && npm start
