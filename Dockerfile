FROM node:18-alpine

WORKDIR /app

# Copia os arquivos do projeto
COPY package*.json ./
COPY . .

# Instala dependências
RUN npm install

# Compila o projeto
RUN npm run build

# Expõe a porta
EXPOSE 8080

CMD ["npm", "run", "start:prod"]
