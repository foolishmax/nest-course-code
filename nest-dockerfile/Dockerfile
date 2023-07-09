# build stage
# FROM继承镜像的时候给当前镜像指定一个名字
# alpine版本是linux发行版，体积小
FROM node:18.0-alpine3.14 as build-stage

WORKDIR /app

COPY package.json .

RUN npm config set registry https://registry.npmmirror.com/

RUN npm install

COPY . .

RUN npm run build

# multi-stage build多阶段构建 + alpine基础镜像
# production stage
FROM node:18.0-alpine3.14 as production-stage

COPY --from=build-stage /app/dist /app
COPY --from=build-stage /app/package.json /app/package.json

WORKDIR /app

RUN npm install --production

RUN npm install pm2 -g

EXPOSE 3000

CMD [ "pm2-runtime", "/app/main.js" ]