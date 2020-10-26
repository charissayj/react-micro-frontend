# react-micro-frontend

### To Run the app run the following commands in each project

- `npm run build`
- `npm run start`

#### There are three separate apps in this repo they run on the following ports:
- `"container: localhost:3002"`
- `"header: localhost:3001"`
- `"sidebar: localhost:8080"`


##### These apps (header and container) are hosted on netlify, because of this you will have to update the url in the webpack config for container/public/index.html to be `localhost:3001/remoteEntry.js`

### Deployed urls
- `"container: https://happy-visvesvaraya-a027bd.netlify.app/"`
- `"header: https://clever-babbage-6aabbb.netlify.app/"`
