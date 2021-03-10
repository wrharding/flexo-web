FROM node:15.4.0 as builder

ARG REACT_APP_DOMAIN=http://localhost:8080

WORKDIR /app
COPY . .
RUN rm -f yarn.lock
RUN yarn install
RUN yarn build


FROM nginx
COPY --from=builder /app/build/ /usr/share/nginx/html
