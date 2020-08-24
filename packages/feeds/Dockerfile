FROM node:10.16.3-alpine as feeds

WORKDIR /app
COPY . .

ENV REACT_APP_GA_ID
ENV REACT_APP_INFURA_KEY
ENV NODE_ENV production

RUN yarn install && yarn run build

ENTRYPOINT [ "yarn" ]
CMD ["start" ]
