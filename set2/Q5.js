/**Use this URL - https://example.com/photo to make a fake fetch call and show an image on the
DOM using the photo link received in the response. Use HTML, CSS & JS template in REPL or
Vanilla template in CodeSandbox for this question. */

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/photo") {
        resolve({
          status: 200,
          data: {
            photo: {
              link: "https://rb.gy/j79svk",
              title: "Random Image",
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

const displayImage = document.querySelector("div");

fakeFetch("https://example.com/photo")
  .then(({ status, data: { photo } }) => {
    if (status === 200) {
      const { link, title } = photo;
      const imageContainer = document.createElement("img");
      imageContainer.src = link;
      imageContainer.alt = title;
      displayImage.appendChild(imageContainer);
    }
  })
  .catch(({ status, message }) => {
    if (status === 404) {
      displayImage.innerText = message;
    }
  });
