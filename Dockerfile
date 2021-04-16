FROM node:12
WORKDIR /usr/src/app
COPY package*.json ./
# in prod?
# RUN npm ci --only=production
RUN npm install
COPY . /usr/src/app
EXPOSE 3000:3000
CMD [ "npm", "start" ]