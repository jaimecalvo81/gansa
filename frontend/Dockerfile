FROM node:alpine
RUN mkdir -p /app
COPY ./package.json /app/package.json
WORKDIR /app
RUN npm install
ENTRYPOINT [ "npm", "start" ]