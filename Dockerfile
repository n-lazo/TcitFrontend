# Etapa 1: Construcción de la aplicación Angular
FROM node:alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Construir la aplicación
RUN npm run build

# Ejecutamos la aplicacion y la exposamos en el puerto 4200 para que docker compose pueda acceder a ella y montarla en el contenedor de nginx
CMD ["npm", "start"]
EXPOSE 4200

