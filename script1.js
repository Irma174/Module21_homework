/*
Задание 1.
написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.*/

const btn = document.querySelector(".btn");

const parser = new DOMParser();

const xmlString = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

btn.addEventListener("click", () => {
  const xmlDom = parser.parseFromString(xmlString, "text/html");

  const studentNode = xmlDom.querySelectorAll("student");

  let students = { list: [] };

  for (let i = 0; i < studentNode.length; i++) {
    let student = {};
    let studentName = studentNode[i].querySelector("name");
    let lang = studentName.getAttribute("lang");
    let firstName = studentName.querySelector("first");
    let secondName = studentName.querySelector("second");
    let name = firstName.textContent + " " + secondName.textContent;
    let age = studentNode[i].querySelector("age");
    let prof = studentNode[i].querySelector("prof");

    student.name = name;
    student.age = Number(age.textContent);
    student.prof = prof.textContent;
    student.lang = lang;
    students.list.push(student);
  }
  console.log(students);
});
