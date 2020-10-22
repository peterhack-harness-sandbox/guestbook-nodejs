
module.exports = function(Message) {

/**
 * getMessages

 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {Message} result Result object
 */
Message.getMessages = function(callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}


/**
 * addMessage
 * @param {Message} message new Message
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {Message} result Result object
 */
Message.addMessage = function(message, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}




Message.remoteMethod('getMessages',
  {
  isStatic: true,
  produces: [ 'application/json' ],
  accepts: [],
  returns: [
    {
      description: 'Array of Message model instances',
      type: [ 'Message' ],
      arg: 'data',
      root: true
    }
  ],
  http: { verb: 'get', path: '/messages' },
  description: undefined
}
);

Message.remoteMethod('addMessage',
  {
  isStatic: true,
  consumes: [ 'application/json' ],
  produces: [ 'application/json' ],
  accepts: [
    {
      arg: 'message',
      type: 'Message',
      description: 'new Message',
      required: undefined,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      description: 'Message model instance',
      type: 'Message',
      arg: 'data',
      root: true
    }
  ],
  http: { verb: 'post', path: '/messages' },
  description: undefined
}
);

}
