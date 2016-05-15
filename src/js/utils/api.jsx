var Fetch = require('whatwg-fetch');
var rootUrl = 'http://api.erated.co/v1/users/';
var urlVar = '?partner=12341234&mode=marketplaces';

    function checkStatus(response) {
      if (response.status >= 200 && response.status < 300) {
        return response
      } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
      }
    }

    function parseJSON(response) {
      return response.json()
    }
module.exports = window.api = {

  get: function(userId){
    return fetch(rootUrl + userId +urlVar)
      .then(checkStatus)
      .then(parseJSON)
      .then(function(data) {
        return data.data
      }).catch(function(error) {
        console.log('request failed', error)
      })





  }
};
