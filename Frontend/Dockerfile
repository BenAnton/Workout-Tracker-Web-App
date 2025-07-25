FROM node:18 AS builder
WORKDIR /app

ARG VITE_API_URL=https://workout-backend-697o.onrender.com
ENV VITE_API_URL=$VITE_API_URL

COPY package*.json ./
RUN npm install
COPY . ./

RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]