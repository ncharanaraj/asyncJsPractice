/**Use this URL - https://example.com/api/chat to make a fake fetch call and handle errors if any.
Show a proper message to the user on the DOM, as per the status and message received from
the server. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla
template in CodeSandbox for this question. */

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/chat") {
        reject({
          status: 503,
          message: "Service Unavailable",
        });
      } else {
        resolve({
          status: 200,
          data: {
            message: "Success",
          },
        });
      }
    }, 2000);
  });
};

const displayOutput = document.querySelector("h3");

fakeFetch("https://example.com/api/chat")
  .then((response) => console.log(response))
  .catch((error) => {
    if (error.status === 503) {
      displayOutput.innerText =
        "We are facing high demand at the moment. Please check back later in sometime.";
    }
  });
