FROM node:12.13.0

ENV APP_ROOT /app/

WORKDIR $APP_ROOT

COPY package.json ./

RUN npm install

ADD . .

RUN chmod +x entrypoint.sh

ARG APP_VERSION
ENV APP_VERSION $APP_VERSION

ENV NUXT_HOST 0.0.0.0
ENV NUXT_PORT 80
ENV API_PORT 80

EXPOSE 80

ENTRYPOINT ["./entrypoint.sh"]

CMD ["npm", "run", "start"]
