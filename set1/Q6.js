/**Use this URL - https://example.com/api/itemlist to make a fake fetch call and handle errors if
any. Show a proper message to the user on the DOM, as per the status and message received
from the server. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or
Vanilla template in CodeSandbox for this question. */

const displayOutput = document.querySelector("h3");

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/itemlist") {
        reject({
          status: 404,
          message: "Items list not found",
        });
      } else {
        resolve({
          status: 200,
          data: {
            message: "Success",
            data: [
              { itemName: "Bread", price: 30 },
              { itemName: "Water Bottle", price: 50 },
              { itemName: "Dairy Milk", price: 20 },
            ],
          },
        });
      }
    }, 2000);
  });
};

fakeFetch("https://example.com/api/itemlist")
  .then((response) => console.log(response))
  .catch(({ status }) => {
    if (status === 404) {
      displayOutput.innerText = "The data you are looking for, does not exist";
    }
  });
