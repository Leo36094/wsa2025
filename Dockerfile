FROM node:20-alpine as build

WORKDIR /usr/src/app

COPY . .
COPY .env .env
RUN yarn install
RUN yarn run build-live

FROM nginx:alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx","-g","daemon off;"]