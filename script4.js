const btn = document.querySelector(".btn");

let number;

btn.addEventListener("click", () => {
  //Генератор случайного числа от 1 до 100
  function setNumber() {
    number = Math.ceil(Math.random() * 100);
  }

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(setNumber(), 3000);
    if (number % 2 == 0) {
      resolve(`Завершено успешно. Сгенерированное число — ${number}`);
    } else {
      reject(`Завершено с ошибкой. Сгенерированное число — ${number}`);
    }
  });

  myPromise
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});
