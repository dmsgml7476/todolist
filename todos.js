form.addEventListener("submit", (event) => {
  event.preventDefault();

  const todo = input.value;

  store(todo)
    .then((response) => {
      console.log(response);
      alert("할일을 추가했습니다.");
      input.value = "";
      input.focus();
    })
    .catch((error) => {
      console.log(error);
      alert(error.message);
      input.focus();
    })
    .then(() => {
      fetchTodos()
        .then((response) => {
          console.log(response);
          const todos = response;
          console.log(todos);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  console.log("todo added!");
});
