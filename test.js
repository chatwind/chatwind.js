const chatwind = require(__dirname+"/index.js");

(async () => {

/* user (200 OK) */ await chatwind.user("test").then(result => console.log(result));

/* servers (200 OK) */ await chatwind.servers().then(result => console.log(result));

/* customcode (200 OK) */ await chatwind.customcode("test").then(result => console.log(result));

/* stats */ await chatwind.stats().then(result => console.log(result));


})();
