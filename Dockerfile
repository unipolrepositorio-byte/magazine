FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM nginx:stable-alpine
WORKDIR /build
COPY --from=0 /app/build /usr/share/nginx/html
COPY ./nginx-conf/base-nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]