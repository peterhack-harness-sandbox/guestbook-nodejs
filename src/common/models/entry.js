'use strict';
var fs = require('fs');
var debug = require('fs');

module.exports = function(Entry) {

    Entry.greet = function(msg, cb) {

        // console.log("testing " + msg);
        fs.appendFile('logs/debug.txt', "Recevied message: "+ msg +"\n", function (err) {
            if (err) throw err;
            console.log('Debug stagement printed');
        });

        fs.appendFile('data/cache.txt', msg+"\n", function (err) {
            if (err) throw err;
            console.log('Saved in cache!');
        });

        cb(null, 'Greetings... ' + msg);
      }
  
    Entry.remoteMethod('greet', {
        accepts: {arg: 'msg', type: 'string'},
        returns: {arg: 'greeting', type: 'string'}
    });

};
