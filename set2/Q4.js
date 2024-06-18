/**Use this URL - https://example.com/order/status/OR00A12 to make a fake fetch call and show
the order status using the user name on the DOM. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question. */

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/order/status/OR00A12") {
        resolve({
          status: 200,
          data: {
            order: {
              orderId: "OR00A12",
              status: "delivery pending",
              userName: "Kajal Kumari",
            },
          },
        });
      } else {
        reject({
          status: 404,
          message: "No order found",
        });
      }
    }, 2000);
  });
};

const notifyOrder = document.querySelector("div");

fakeFetch("https://example.com/order/status/OR00A12")
  .then(({ status, data: { order } }) => {
    if (status === 200) {
      const { status, userName } = order;
      notifyOrder.innerText = `Hello ${userName} your order status is ${status}.`;
    }
  })
  .catch(({ status, message }) => {
    if (status === 404) {
      notifyOrder.innerText = message;
    }
  });
