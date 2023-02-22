FROM node:16.15.1-alpine
WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

EXPOSE 5173

CMD ["yarn", "dev"]