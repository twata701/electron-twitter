# Electron-twitter

add tweet.js to app/javascript/renderer/services

```
const Twit = require('twit');

module.exports = new Twit({
  consumer_key: '(consumer_key)',
  consumer_secret: '(consumer_secret)',
  access_token: '(access_token)',
  access_token_secret: '(access_token_secret)'
});
```