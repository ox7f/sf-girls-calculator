FROM node:alpine AS builder
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

FROM nginx:alpine AS prod
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/packages/frontend/dist .
COPY ./default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
