const chatwind = require(__dirname+"/index.js");

(async () => {

/* user Testing */


/* user (200 OK) */ await chatwind.user("milanm").then(result => console.log(result));

/* user (error 400) */ await chatwind.user("NOTANACCOUNT").then(result => console.log(result));

///* user (error "TypeError: User ID must be a string") */ await chatwind.user().then(result => console.log(result));

/* user (error 401) */ await chatwind.user("").then(result => console.log(result));


/* servers Testing */


/* status (200 OK) */ await chatwind.servers().then(result => console.log(result));

})();
