// 1) Require http

// 2) Connect to the API URL ( https://api.github.com/users/{username} )

// 3) Print out data if user is found
        // a) profile image
        // b) username
        // c) public repo count
        // d) followers count

// 4) Output the Error if user is not found
var request = require('request');

module.exports.get = get;
  function get(username) {
          var GitUrl = 'http://api.github.com/users/' + username;
                var options = {
                url: GitUrl,
                method: 'GET',
                headers: {"User-Agent": "Request"}
        }
        request(options, function (error, response, body) {

        if (!error && response.statusCode == 200) {
               body = JSON.parse(body);
                console.log("Profile found!");
                console.log("Username: " + body.login);
                console.log("Public repositories: " + body.public_repos);
                console.log("Followers: " + body.followers);
        } else {
                console.log("Profile not found.");
        }
        })
  }
