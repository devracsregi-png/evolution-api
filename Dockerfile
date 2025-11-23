FROM node:20

RUN git clone https://github.com/EvolutionAPI/evolution-api /app

WORKDIR /app

RUN npm install

EXPOSE 8080

CMD ["npm", "start"]

