// packages
const fetch = require('node-fetch');

let baseURL = "https://api.chatwindapp.com/v1";

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
      const response = await fetch(baseURL+`/user?username=${username}`, {method: 'GET'});
      const json = await response.json();
      resolve(json);
    } catch (err) {
      reject(new Error(err));
    }
  });
},
/**
 * Get a list of the servers
 *
 * @returns {Promise} - A json of the data recieved from the API
*/
servers: function() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(baseURL+`/servers.json`, {method: 'GET'});
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
      const response = await fetch(baseURL+`/customcode?code=${code}`, {method: 'GET'});
      const json = await response.json();
      resolve(json);
    } catch (err) {
      reject(new Error(err));
    }
  });
}

}
