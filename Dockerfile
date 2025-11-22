FROM node:18

# Clona a Evolution real
RUN git clone https://github.com/EvolutionAPI/evolution-api /app

WORKDIR /app

RUN npm install

EXPOSE 8080

CMD ["npm", "run", "start"]
