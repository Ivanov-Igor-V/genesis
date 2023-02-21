
FROM node:16.15.1-alpine
WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

EXPOSE 8000

CMD ["yarn", "start"]