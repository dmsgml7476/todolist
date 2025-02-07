const database = localStorage;
const form = document.querySelector("form");
const input = document.getElementById("input");
const ul = document.querySelector("ul");

let todos = JSON.parse(database.getItem("todos")) ?? [];

const store = (todo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (todo.length === 0) {
        return reject({ message: "할일을 입력해주세요." });
      }
      if (todo.length === 1) {
        return reject({ message: "할일이 너무 짧습니다. 2글자 이상 ㄱㄱ" });
      }
      todos.push(todo);
      database.setItem("todos", JSON.stringify(todos));
      console.log("stored in database");
      return resolve({ message: "할일이 추가되었습니다." });
    }, 1000);
  });
};
const fetchTodos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = database.getItem("todos");
      if (!data || data.length === 0) {
        return reject({ message: "저장된 할일이 없습니다." });
      }
      const newData = JSON.parse(data);
      console.log(newData);
      console.log("todos fetched");
      return resolve(newData);
    }, 1000);
  });
};
