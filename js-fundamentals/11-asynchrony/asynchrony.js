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
});

const isServerUp = true;

(async function () {
  // Pretend I'm actually sending a message
  function sendMessage(message) {
    return new Promise((resolve, reject) => {
      console.log(`Sending: ${message}`);

      setTimeout(function () {
        if (!isServerUp) {
          reject(new Error("ulul"));
        }
        resolve(message);
      }, 2000);
    });
  }
  try {
    const value = await sendMessage("awaited spam");
    console.log(`Sent: ${value}`);
    const psvalue = await setTimeout(function () {
      resolve("But wait theres more");
    }, 2000);
    console.log(`PS: ${value}`);
  } catch (e) {
    console.error(e.message);
  }

  // sendMessage("promised spam")
  //   .then((value) => {
  //     console.log(`Sent: ${value}`);
  //     return new Promise((resolve) => {
  //       setTimeout(function () {
  //         resolve("But wait, there's more!");
  //       }, 2000);
  //     });
  //   })
  //   .then((value) => {
  //     console.log(`PS: ${value}`);
  //     return new Promise((resolve) => {
  //       setTimeout(function () {
  //         resolve("But Hang on, Hang on");
  //       }, 2000);
  //     });
  //   })
  //   .then((value) => {
  //     console.log(value);
  //   })
  //   .catch((e) => {
  //     console.error(e.message);
  //   });
})();
