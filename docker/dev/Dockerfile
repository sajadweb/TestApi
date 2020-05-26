FROM node:latest
RUN echo "-------------DEV----------------"
RUN mkdir -p /usr/src/app
RUN chmod -R 777 /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN  npm install
COPY . /usr/src/app
COPY .env /usr/src/app
EXPOSE 7000
CMD  ["npm","start"]
