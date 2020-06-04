FROM node:lts-alpine

WORKDIR /ecoleta-web
COPY web/ /ecoleta-web
RUN apk update
RUN npm install --loglevel=error

CMD ["npm", "run", "start"]