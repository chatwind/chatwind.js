<div align="center">
  <br>

# chatwind.js
<br>
<p>
Official RESTful Node.js API Wrapper to interact with the Chatwind API
</p>
<br>
<p>
<br>
<a href="https://www.npmjs.com/package/chatwind.js"><img src="https://img.shields.io/npm/v/chatwind.js.svg?maxAge=3600" alt="NPM version" /></a>
<a href="https://www.npmjs.com/package/chatwind.js"><img src="https://img.shields.io/npm/dt/chatwind.js.svg?maxAge=3600" alt="NPM downloads" /></a>
<a href="https://david-dm.org/chatwind/chatwind.js"><img src="https://img.shields.io/david/chatwind/chatwind.js.svg?maxAge=3600" alt="Dependencies" /></a>
<a href="https://www.npmjs.com/package/chatwind.js"><img src="https://api.ghprofile.me/view?username=chatwind-chatwind.js&label=repository%20view%20count&style=flat" alt="Repository view count" /></a>
</p>

<br>

<p>
<a href="https://nodei.co/npm/chatwind.js/"><img src="https://nodei.co/npm/chatwind.js.png?downloads=true&stars=true" alt="npm installnfo" /></a>
</p>

</div>

# Usage

## Add the package
To start, you will need to add the package. To do that, simply run `npm i chatwind.js`. In your code, add the following:
```js
const chatwind = require("chatwind.js");
```
Now you can use any of the functions below! All of the function return a Promise (just an FYI).

---

### Getting a user's information
```js
chatwind.user("USERNAME").then(result => console.log(result));
```
The code above should return a 200 OK message. (JSON)

### Check if a custom meeting code is valid
```js
chatwind.customcode("CODE").then(result => console.log(result));
```
The code above should return a 200 OK message. (JSON)

### Get the statistics for Chatwind
```js
chatwind.stats().then(result => console.log(result));
```
The code above should return a 200 OK message. (JSON)

---

## Unmentioned feature
If this package does not have a function for a certain API endpoint, we have a function that lets you easily interact with any endpoint!
```js
chatwind.api("PATH", "METHOD").then(result => console.log(result));
```
This will return a JSON from the endpoint specified.

**Note:** "PATH" is the endpoint (e.g users/milanm), and "METHOD" is the HTTP method (e.g POST).
