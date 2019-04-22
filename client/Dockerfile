FROM node:8.14.0-alpine

WORKDIR /home/app

COPY package.json /home/app/package.json

RUN npm install

COPY . .

EXPOSE 8001

CMD ["npm", "start"]