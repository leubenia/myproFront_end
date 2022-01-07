FROM node:latest

WORKDIR /app/src
COPY package*.json ./
RUN npm install --force&& npm cache clean --force
COPY . .
EXPOSE 3000

CMD [ "npm", "start" ]