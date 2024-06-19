/** Use this URL - https://example.com/getImage to make a fake fetch call which takes a url and
dimensions for the photo to be displayed. Dimensions should be passed in the
format [width, height]. Show the image provided in the response on DOM. Use HTML, CSS &
JS template in REPL or Vanilla template in CodeSandbox for this question.
Dimensions can be 200/300/100. For example you can pass [200, 200] or [200, 300], etc. */

const fakeFetch = (url, dimensions) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/getImage") {
        resolve({
          status: 200,
          data: {
            image: {
              link: `https://picsum.photos/${dimensions[0]}/${dimensions[1]}`,
              title: "Random Image",
            },
          },
        });
      } else {
        reject({
          status: 404,
          message: "No photo of such dimension found",
        });
      }
    }, 2000);
  });
};

const imageContainer = document.querySelector("div");
const dimensions = [300, 300];

fakeFetch("https://example.com/getImage", dimensions)
  .then(({ status, data: { image } }) => {
    if (status === 200) {
      const { link, title } = image;
      const displayImage = document.createElement("img");
      displayImage.src = link;
      displayImage.alt = title;
      imageContainer.appendChild(displayImage);
    }
  })
  .catch(({ status, message }) => {
    if (status === 404) {
      imageContainer.innerText = message;
    }
  });
