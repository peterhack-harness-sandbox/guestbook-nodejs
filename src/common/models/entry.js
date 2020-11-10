'use strict';
var fs = require('fs');

module.exports = function(Entry) {

    Entry.greet = function(msg, cb) {
        console.log("testing " + msg);
        fs.appendFile('data.txt', msg+"\n", function (err) {
            if (err) throw err;
            console.log('Saved!');
        }); 
        cb(null, 'Greetings... ' + msg);
      }
  
    Entry.remoteMethod('greet', {
        accepts: {arg: 'msg', type: 'string'},
        returns: {arg: 'greeting', type: 'string'}
    });

};
