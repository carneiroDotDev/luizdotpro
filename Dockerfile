FROM node:8.11-alpine AS build

WORKDIR /app

ADD src ./src/
ADD package.json yarn.lock .eslintrc .prettierrc jest.config.js tsconfig.json babel.config.js nodemon.json ./

ENV NODE_ENV=development

RUN yarn --no-cache --frozen-lockfile

ENV NODE_ENV=production
RUN yarn build

EXPOSE 80
ENTRYPOINT ["yarn", "start"]
