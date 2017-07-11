
function Log_in()
{
var Spotify = require('machinepack-spotify');

// Get access token to use with requests to Spotify Web API.
Spotify.getAccessToken({
clientId: 'bb843121ea624fb0a2705c84f226bc4a',
clientSecret: '5c7ae70f48fa43a4957e99468fda8901',
}).exec({
// An unexpected error occurred.
error: function (err) {
 console.log("Log_in Error")
},
// OK.
success: function () {
  console.log("Log_in Succsess")
},
});
}
