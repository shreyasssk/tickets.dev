FROM node:lts-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod

FROM abdennour/nginx-distroless-unprivileged
COPY --from=builder /app/dist/client/ /usr/share/nginx/html 