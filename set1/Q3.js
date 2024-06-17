/** Write a function ‘delayAlert’ that takes in a message ‘Hello, world!’ and a delay time in
milliseconds, and displays the message in an alert box after the specified delay time using
setTimeout. You can practice this question in any JS editor or your browser console. */

const delayAlert = (message, delay) => {
  setTimeout(() => {
    alert(message);
  }, delay);
};

delayAlert("Hello World!", 2000);
