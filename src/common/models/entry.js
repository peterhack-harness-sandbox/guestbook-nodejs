'use strict';
var fs = require('fs');
var debug = require('fs');

module.exports = function(Entry) {

    Entry.greet = function(msg, cb) {

        // console.log("testing " + msg);
        fs.appendFile('logs/debug.txt', "Recevied message: "+ msg +"\n", function (err) {
            console.log('Debug stagement printed');
        });

        fs.appendFile('data/cache.txt', msg+"\n", function (err) {
            console.log('Saved in cache!');

            fs.readFile('data/cache.txt','utf8', (err, data) => {

                var list = [];

                if (data) {
                    list = data.split("\n");
                    list.pop();
                }
                
    
                cb(null, list);
    
            });

        });

    }

    Entry.read = function(cb) {

        var list = [];

        fs.readFile('data/cache.txt','utf8', (err, data) => {

            if (data) {
                list = data.split("\n");
                list.pop();
            }
            

            cb(null, list);

        });
    }
  
    Entry.remoteMethod('greet', {
        accepts: {arg: 'msg', type: 'string'},
        returns: {arg: 'list', type: 'array'}
    });
    Entry.remoteMethod('read', {
        returns: {arg: 'list', type: 'array'},
        http: {verb: 'get', status: 200}
    });

};
