FROM node:16-alpine AS node_build
WORKDIR /app
COPY package*.json ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM nginx:stable-alpine AS nginx_conf
WORKDIR /build
COPY --from=node_build /app/build /usr/share/nginx/html
COPY ./nginx-conf/base-nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]