FROM node:16-alpine
WORKDIR /usr/src/app
COPY package.json pnpm-lock.yaml ./
COPY ./src ./src

RUN npm install -g pnpm
RUN pnpm install

EXPOSE 3000

CMD ["pnpm", "run", "start"]