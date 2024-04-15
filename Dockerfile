FROM node:18 as development
COPY .env.dev .env
WORKDIR /usr/src/app
COPY package*.json ./
COPY tsconfig.json ./
RUN npm install
RUN npm install prisma
COPY ./prisma ./prisma
RUN npx prisma generate
COPY ./src ./src
CMD [ "npm", "run", "start:dev" ]

COPY .env.dev .env
RUN npx prisma db push
CMD [ "npm", "run", "seed" ]

#Stage 2
FROM development as builder
WORKDIR /usr/src/app
RUN rm -rf node_modules
RUN npm ci --only=production
CMD [ "npm", "start" ]

#Stage 3
FROM alpine:latest as production
RUN apk --no-cache add nodejs ca-certificates
WORKDIR /root/
COPY --from=builder /usr/src/app ./
CMD [ "node", "src/index.js" ]
