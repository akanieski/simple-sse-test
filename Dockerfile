from node:latest

COPY . .

ENTRYPOINT ['node', 'server.js']