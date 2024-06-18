/** Use this URL - https://example.com/winner-team to make a fake fetch call to the get names of
winner group members and show a nice message on the DOM congratulating all of them. Use
HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question. */

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/winner-team") {
        resolve({
          status: 200,
          data: {
            message: "Success",
            data: ["Jhon", "Raju", "Anjali", "Sakshi"],
          },
        });
      } else {
        reject({
          status: 404,
          message: "No Users found.",
        });
      }
    }, 2000);
  });
};

const output = document.querySelector("div");

fakeFetch("https://example.com/winner-team")
  .then(({ status, data: { data } }) => {
    if (status === 200) {
      output.innerText = `Congratulations! to the members of winning team ${data.join(
        ", "
      )}, great work!`;
    }
  })
  .catch((error) => console.error(error));
