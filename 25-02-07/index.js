const form = document.querySelector("form");
const input = document.getElementById("input");
const btn = document.querySelector("main>form>button");

let todos = ["공부하기", "청소하기", "운동하기"];

const database = localStorage;

const store = (todo) =>
  new Promise((resolve, reject) => {
    if (todo.length <= 0) {
      return reject({ message: "길이가 너무 짧다" });
    }

    // const newTodo = Number(todo);
    // if (newTodo === "NaN" || !newTodo) {
    //   return reject({ massage: "숫자가 아닙니다." });
    // }

    // todos.push(newTodo);

    database.setItem("todos", JSON.stringify(todos));

    return resolve({ message: "입력되었습니다." });
  });

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const todo = input.value;

  //1. 할일이 입력되지 않았을 때

  if (todo.length === 0) {
    alert("할 일을 입력하세요");
    input.focus();
    return;
  }

  //2. 할일이 1글자일때 예외처리

  if (todo.length === 1) {
    alert("한글자 이상 입력하세요");
    input.focus();
    return;
  }

  //3. console.log(todo)

  console.log(todo);

  //4. alert로 축하메세지 전달

  store(todo)
    .then((responce) => {
      alert(Response.message);
      render;
    })
    .catch((error) => alert(error.message));

  //   alert(`할 일에 ${todo}가 추가되었습니다.`);
  //5. todo 값 리셋하기

  //   input.value = "";
  form.reset;

  //6. 입력창으로 focus
  input.focus();
});

const ul = document.querySelector("ul");

const render = () => {
  console.log(todos);
  const data = database.getItem("todos");
  const todos = JSON.parse(data);

  const newData = JSON.parse(data);

  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];

    const li = document.createElement("li");
    const div = document.createElement("div");
    const p = document.createElement("p");
    const btn = document.createElement("button");

    p.innerText = todo; // <p></p>
    btn.innerText = "삭제"; // <button></button>
    div.appendChild(p); // <div><p></p></div>
    div.appendChild(btn); // <div><p></p><button></button></div>
    li.appendChild(div); // <li><div><p></p><button></button></div></li>

    ul.appendChild(li);
  }
};

render();

// const ul = document.querySelector("ul");
// ul.style.border = "1px solid";

// ul.innerHTML = `
//   <li>
//     <div>
//       <p>오늘 진짜 공부함. 6시 30분까지 들어오셈!</p>
//     </div>
//   </li>
// `;
