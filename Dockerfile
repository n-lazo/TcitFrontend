# Etapa 1: Construcción de la aplicación Angular
FROM node:alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
RUN npm install -g @angular/cli
COPY . .

# Construir la aplicación
RUN npm run build --configuration=production

# Etapa 2: Servir la aplicación con NGINX
FROM nginx:latest

# Copiar la configuración de NGINX
COPY ./nginx.conf /etc/nginx/nginx.conf

# Copiar los archivos de construcción al directorio de NGINX
COPY --from=build /app/dist/posts-app/browser /usr/share/nginx/html

# Exponer el puerto 80 para NGINX
EXPOSE 80
