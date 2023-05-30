(function () {
  // Pretend I'm actually sending a message
  function sendMessage(message, cb) {
    console.log(`Sending: ${message}`);
    setTimeout(function () {
      cb(message);
    }, 2000);
  }

  function afterSending(message) {
    console.log(`Sent: ${message}`);
  }

  sendMessage("spam", afterSending);
})();

(function() {
  // Pretend I'm actually sending a message
  function sendMessage(message) {
    return new Promise((resolve, reject) => {
      console.log(`Sending: ${message}`);
      setTimeout(function() {
        resolve(message);
      }, 2000);
    })
  }

  sendMessage("promised spam").then(value => {
    console.log(`Sent: ${value}`);
  })
})
