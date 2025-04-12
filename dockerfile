# Dockerfile
FROM node:14-alpine
WORKDIR /app
COPY . .
# Install dependencies
RUN npm install
EXPOSE 80
CMD ["npm", "start"]
