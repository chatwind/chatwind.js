const chatwind = require(__dirname+"/index.js");

(async () => {

/* user (200 OK) */ await chatwind.user("milanm").then(result => console.log(result));

/* customcode (200 OK) */ await chatwind.customcode("chatwind").then(result => console.log(result));

/* stats */ await chatwind.stats().then(result => console.log(result));


})();
