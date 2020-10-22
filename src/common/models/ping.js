
module.exports = function(Ping) {

/**
 * Does a ping check to see if the server is up

 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {Ping} result Result object
 */
Ping.getPing = function(callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}




Ping.remoteMethod('getPing',
  {
  isStatic: true,
  accepts: [],
  returns: [
    {
      description: 'Ping Response',
      type: 'Ping',
      arg: 'data',
      root: true
    }
  ],
  http: { verb: 'get', path: '' },
  description: undefined
}
);

}
