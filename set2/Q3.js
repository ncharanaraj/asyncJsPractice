/**Use this URL - https://example.com/login to make a fake fetch call and show the status like it is
authenticated or not with a message in the DOM. Use HTML, CSS & JS template in REPL or
Vanilla template in CodeSandbox for this question. */

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/login") {
        resolve({
          status: 200,
          data: {
            auth: true,
          },
        });
      } else {
        reject({
          status: 404,
          message: "Status not found",
        });
      }
    }, 2000);
  });
};

const output = document.querySelector("div");

fakeFetch("https://example.com/login")
  .then(({ status, data: { auth } }) => {
    if (status === 200 && auth === true) {
      output.innerText = "Verified!";
    }
  })
  .catch(({ status, message }) => {
    if (status === 404) {
      output.innerText = message;
    }
  });
