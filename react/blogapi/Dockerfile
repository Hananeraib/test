FROM node:14-alpine
WORKDIR /react
COPY package*.json ./
RUN npm install
RUN npm install --save-dev @babel/plugin-proposal-private-property-in-object
RUN npm install axios
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
