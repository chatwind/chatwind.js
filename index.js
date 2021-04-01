// packages
const fetch = require('node-fetch');
const http = require("http");

let baseURL = "https://api.chatwindapp.com";

// Module.Exports
module.exports = {

/**
 * Get a user's details
 *
 * @param {string} username - The username of the user
 * @returns {Promise} - A json of the data recieved from the API
*/
user: function(username) {
  if (typeof username !== 'string') throw new TypeError('Username must be a string');
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(baseURL+`/users/${username}`, {method: 'GET'});
      const json = await response.json();
      resolve(json);
    } catch (err) {
      reject(new Error(err));
    }
  });
},
/**
 * Get a custom meeting's details
 *
 * @param {string} code - The code for the meeting
 * @returns {Promise} - A json of the data recieved from the API
*/
customcode: function(code) {
  if (typeof code !== 'string') throw new TypeError('Code must be a string');
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(baseURL+`/meetings/${code}`, {method: 'GET'});
      const json = await response.json();
      resolve(json);
    } catch (err) {
      reject(new Error(err));
    }
  });
},
/**
 * Get Chatwind's statistics
 *
 * @returns {Promise} - A json of the data recieved from the API
*/
stats: function() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(baseURL+`/info/stats`, {method: 'GET'});
      const json = await response.json();
      resolve(json);
    } catch (err) {
      reject(new Error(err));
    }
  });
},
/**
 * Use any method in the API that is not prebuilt into this package
 *
 * @returns {Promise} - A json of the data recieved from the API
*/
api: function(path, method) {
  return new Promise(async (resolve, reject) => {
    try {
      if (!path) throw new TypeError('Path is not specified');
      if (!method) throw new TypeError('Method is not specified');
      let methodsArray = http.METHODS;
      if (methodsArray.includes(method.toUpperCase()) !== true) throw new TypeError('Method must be a valid HTTP method');
      const response = await fetch(baseURL+`/${path}`, {method: method.toUpperCase()});
      const json = await response.json();
      resolve(json);
    } catch (err) {
      reject(new Error(err));
    }
  });
}

}
