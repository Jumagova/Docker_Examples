FROM node:18.14.0

WORKDIR /app

COPY app /app


RUN cd /app && npm install http

EXPOSE 8000

# CMD ["bash"]
CMD ["node", "index.js"]