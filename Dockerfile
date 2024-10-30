# Etapa 1: Construcción de la aplicación Angular
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Construir la aplicacion en el puerto 4200
RUN npm run build -- --output-path=./dist/out --configuration production
