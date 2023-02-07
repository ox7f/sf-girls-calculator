FROM node:alpine AS builder
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

FROM nginx:alpine AS prod
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/packages/frontend/dist .
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
