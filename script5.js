const btn = document.querySelector(".btn-5");
const input = document.querySelector("input");
const textTask = document.querySelector("#taskList");

btn.addEventListener("click", () => {
  textTask.innerHTML = "";

  let i = input.value;
  let url = strSplit("https://jsonplaceholder.typicode.com/users/3/todos", "/");
  url[4] = i;
  let newUrl = url.join("/");
  fetch(newUrl)
    .then((response) => {
      const result = response.json();
      return result;
    })
    .then((data) => {
      ul = document.createElement("ol");
      textTask.appendChild(ul);
      for (let i = 0; i < data.length; i++) {
        let li = document.createElement("li");
        ul.appendChild(li);
        li.setAttribute("class", `task-${i}`);
        li.innerHTML = data[i].title;
        let styleTask = document.querySelector(`.task-${i}`);
        if (data[i].completed) {
          styleTask.style.textDecoration = "line-through";
        }
      }
      if (data.length == 0) {
        textTask.innerHTML = "Пользователь с указанным id не найден";
      }
    })
    .catch(() => {
      console.log("error");
    });
});

function strSplit(url, separator) {
  return url.split(separator);
}
