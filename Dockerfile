FROM node:16-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM nginx:stable-alpine
RUN mkdir -p /etc/nginx/ssl
RUN apk add --no-cache openssl && \
    openssl dhparam -out /etc/nginx/ssl/dhparam.pem 2048
WORKDIR /build
COPY --from=build /app/build /usr/share/nginx/html
COPY ./nginx-conf/base-nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]