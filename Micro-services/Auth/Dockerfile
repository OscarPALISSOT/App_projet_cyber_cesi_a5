FROM node:18
# Create app directory
WORKDIR /authApp

COPY package*.json ./
COPY prisma ./prisma/
RUN npm install


COPY . .

EXPOSE 3000

CMD npm start
