const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let youName = prompt("Добро пожаловать! Назовите, пожалуйста, ваше имя.");

  let date = new Date().toUTCString();

  if (localStorage.getItem(youName)) {
    alert(
      "Добрый день, " +
        youName +
        "! Давно не виделись. В последний раз вы были у нас " +
        localStorage.getItem(youName)
    );
    localStorage.setItem(`${youName}`, new Date().toUTCString());
  } else {
    localStorage.setItem(youName, date);
  }
});
