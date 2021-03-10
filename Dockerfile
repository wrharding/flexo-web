FROM node:15.4.0 as builder

ARG BACKEND_URL=http://localhost:8080

WORKDIR /app
COPY . .
RUN rm -f yarn.lock
RUN yarn install
RUN yarn build


FROM nginx
COPY --from=builder /app/build/ /usr/share/nginx/html
