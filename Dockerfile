FROM node

WORKDIR /xmltopdf

COPY package.json .

RUN npm i

COPY . .

ARG DEFAULT_API="https://xmltojson.pt02-homelab.net/upload"

ENV VITE_API ${DEFAULT_API}

EXPOSE 9000

CMD ["npm", "run", "dev"]