/** Make a fake fetch call that takes a message and a boolean value to get data and console the
message received from the server. A fake fetch has been provided. You can practice this
question in any JS editor or your browser console. */

const fakeFetch = (message, shouldSucceed) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) {
        resolve(`Message from server: ${message}`);
      }
      reject(`Error from server: ${message}`);
    }, 3000);
  });
};

fakeFetch("Charan", false)
  .then((response) => console.log(response))
  .catch((err) => console.log(err));
