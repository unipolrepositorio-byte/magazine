FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN yarn install --frozen-lockfile
ENV NODE_ENV=production
COPY . .
RUN yarn build

FROM nginx:stable-alpine
RUN mkdir -p /etc/nginx/ssl
RUN apk add --no-cache openssl && \
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout /etc/nginx/ssl/dummy.key -out /etc/nginx/ssl/dummy.crt \
    -subj "/CN=localhost"
WORKDIR /build
COPY --from=build /app/build /usr/share/nginx/html

# Copiar ambas configuraciones de nginx
COPY ./nginx-conf/base-nginx.conf /etc/nginx/conf.d/base-nginx.conf
COPY ./nginx-conf/base-nginx-no-ssl.conf /etc/nginx/conf.d/base-nginx-no-ssl.conf

# Copiar script de configuración
COPY ./scripts/configure-nginx.sh /usr/local/bin/configure-nginx.sh
RUN chmod +x /usr/local/bin/configure-nginx.sh

# Crear directorio para certbot
RUN mkdir -p /var/www/certbot/.well-known/acme-challenge

EXPOSE 80 443

CMD ["/usr/local/bin/configure-nginx.sh"]