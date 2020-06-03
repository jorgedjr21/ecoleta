FROM node:lts-alpine

WORKDIR /ecoleta-server
COPY server/ /ecoleta-server
RUN apk update && npm install

CMD ["npm", "run", "dev"]