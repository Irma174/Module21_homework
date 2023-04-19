const btn = document.querySelector(".btn-6");
const page = document.querySelector("#page");
const limit = document.querySelector("#limit");
const resultNode = document.querySelector(".j-result");

if (localStorage.getItem("data")) {
  data = JSON.parse(localStorage.getItem("data"));
  drawingImages(data);
}

btn.addEventListener("click", () => {
  resultNode.innerHTML = "";
  let pageInput = page.value;
  let limitInput = limit.value;

  if (+pageInput < 1 || +pageInput > 10 || Number.isNaN(+pageInput)) {
    resultNode.innerHTML = "Номер страницы вне диапазона от 1 до 10";
  }
  if (+limitInput < 1 || +limitInput > 10 || Number.isNaN(+limitInput)) {
    resultNode.innerHTML = "Лимит вне диапазона от 1 до 10";
  }
  if (
    (+limitInput < 1 || +limitInput > 10 || Number.isNaN(+limitInput)) &&
    (+pageInput < 1 || +pageInput > 10 || Number.isNaN(+pageInput))
  ) {
    resultNode.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
  }
  if (
    +pageInput >= 1 &&
    +pageInput <= 10 &&
    +limitInput >= 1 &&
    +limitInput <= 10
  ) {
    let url = "https://picsum.photos/v2/list?page=1&limit=10";
    url = url.replace("page=1", `page=${pageInput}`);
    url = url.replace("limit=10", `limit=${limitInput}`);
    fetch(url)
      .then((response) => {
        const result = response.json();
        return result;
      })
      .then((data) => {
        drawingImages(data);
        localStorage.setItem("data", JSON.stringify(data));
      })
      .catch(() => {
        console.log("error");
      });
  }
});

function drawingImages(data) {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
    let div = document.createElement("div");
    resultNode.appendChild(div);
    div.setAttribute("class", "card");
    let img = document.createElement("img");
    img.src = `${data[i].download_url}`;
    div.appendChild(img);
    img.setAttribute("class", "card-image");
    let p = document.createElement("p");
    div.appendChild(p);
    p.innerHTML = `${data[i].author}`;
  }
}
