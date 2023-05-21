FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM nginx:stable-alpine AS nginx_conf
COPY --from=0 /app/build /usr/share/nginx/html

COPY --from=nginx_conf /build/nginx-conf/base-nginx.conf /etc/nginx/base-nginx.conf.template
COPY --from=nginx_conf /build/nginx-conf/prerender-nginx.conf /etc/nginx/prerender-nginx.conf.template

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]