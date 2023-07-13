FROM node 

WORKDIR /server

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .