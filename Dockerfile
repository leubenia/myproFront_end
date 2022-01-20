FROM node:latest
WORKDIR /app
RUN npm i express
COPY ./ /app/
CMD ["node", "app"]
