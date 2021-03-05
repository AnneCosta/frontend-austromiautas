FROM node:14.15.4
WORKDIR /usr/app
COPY . .
RUN yarn install --silent
CMD ["./docker/entrypoint.sh"]