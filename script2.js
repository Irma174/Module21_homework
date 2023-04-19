/* создать JS-объект, который при преобразовании в JSON будет возвращать в качестве результата такую же JSON-строку, как в образце. Получившуюся строку вывести в консоль.*/

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let obj = {
    name: "Anton",
    age: 36,
    skills: ["Javascript", "HTML", "CSS"],
    salary: 80000,
  };

  let json = JSON.stringify(obj);

  console.log(json);
});
