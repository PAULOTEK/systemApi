# Imagem base
FROM node:14-alpine

# Diretório de trabalho
WORKDIR /app

# Instalação de dependências
COPY package*.json ./
RUN npm install

# Copiar o código-fonte para o contêiner
COPY . .

# Expor a porta da API
EXPOSE 3000

# Comando de inicialização
CMD ["npm", "run", "start"]
