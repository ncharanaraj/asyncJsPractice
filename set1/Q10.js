/** Use this URL - https://example.com/api/profile to make a fake fetch call and handle errors if
any. Show a proper message to the user on the DOM, as per the status and message received
from the server. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or
Vanilla template in CodeSandbox for this question. */

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/profile") {
        reject({
          status: 401,
          message: "Unauthorized Access",
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

const output = document.querySelector("h3");

fakeFetch("https://example.com/api/profile")
  .then((response) => console.log(response))
  .catch((error) => {
    output.innerText = `${error.message} Looks like you are not logged in. Please, login to see your profile`;
  });
