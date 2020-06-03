FROM node:lts-alpine

WORKDIR /ecoleta-server
COPY server/ /ecoleta-server
RUN apk update && apk add postgresql-client
RUN npm install --loglevel=error

CMD ["npm", "run", "dev"]