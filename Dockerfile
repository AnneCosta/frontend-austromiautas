FROM node:14.15.4-alpine
WORKDIR /usr/app
COPY . .
RUN yarn install --silent
CMD ["./docker/entrypoint.sh"]