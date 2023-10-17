FROM node:18
# Create app directory
WORKDIR /frisbeeApp

COPY package*.json ./
RUN npm install
COPY push-and-start.sh .
RUN chmod +x push-and-start.sh


COPY . .

EXPOSE 3001

CMD ["./push-and-start.sh"]