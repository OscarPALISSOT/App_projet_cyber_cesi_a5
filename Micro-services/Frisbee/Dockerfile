FROM node:18
# Create app directory
WORKDIR /frisbeeApp

COPY package*.json ./
COPY prisma ./prisma/
RUN npm install


COPY . .

EXPOSE 3001

CMD npm run start:prod
