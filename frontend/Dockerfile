FROM node
ENV API_URL=http://web-server-container:3000
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build
EXPOSE 8080
CMD npm start -- -p 8080