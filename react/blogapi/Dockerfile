FROM node:18-alpine
WORKDIR /react
COPY package*.json ./
RUN npm install
RUN npm install -g serve
# RUN npm install --save-dev @babel/plugin-proposal-private-property-in-object
# RUN npm install axios
COPY . .
EXPOSE 3030
RUN npm run build
CMD [ "serve", "-l", "3030", "-s", "build" ]
# CMD ["npm", "start"]
