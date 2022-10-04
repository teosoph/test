FROM atools/chrome-headless:java11-node14-latest
#thease should only change when repo updates.
RUN apt-get update -y
#chrome
RUN apt-get install -y google-chrome-stable
RUN google-chrome --version
#firefox
RUN apt-get install -y firefox-esr
RUN firefox -v
#these change rarely, as they depend on our tests
COPY config/ ./tests/config
COPY test/ ./tests/test
COPY package.json ./tests/package.json
WORKDIR ./tests
#these depend on files above, especialy package.json
RUN npm i -g npm@latest
RUN npm i npm@latest
RUN npm install
RUN npm run test:firefox:headless
