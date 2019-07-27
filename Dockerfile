FROM node:8-alpine

COPY data ./data
COPY api ./api
COPY server.js ./
COPY passport.config.js ./
COPY package*.json ./
RUN npm install

CMD ["node", "server.js"]
EXPOSE 3000
