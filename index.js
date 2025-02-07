// querySelector = HTML의 모든 것을 선택할 수 있음: 태그 이름, 클래스명,
// 아이디명 모두 선택가능 선택할 때 css 규칙을 따라서 작성함

// 예) class= "newClass" => ".newClass"
// id = "newId" => "#newId"
// ul div => 'ul div'
// ul div.newClass => 'ul div.newClass'
// const baby = document.querySelector("baby")
// body.style.backgroundColor ='coral'
// const h1 = document.querySelector("h1")
// item.style.boder = "1px solid"

// 예) id = "item"
// 자식요소는 태그를 문자열에 담아서 사용해도 되지만, 변수를 같이 사용하려면 `` 사용해서 하면 개꿀

let list = ["우유", "계란", "유부초밥", "한우++"];

const rendering = () => {
  const ul = document.querySelector("ul");

  ul.innerHTML = null;

  for (
    let i = 0;
    i < list.length;
    i = i + 1 // i+=1 //i++
  ) {
    const button = document.createElement("button");

    button.innerText = "삭제";
    button.onclick = () => {
      console.log("hello its ms", list[i]);

      list.splice(i, 1);
      console.log(list);

      rendering();
    };

    const p = document.createElement("p");
    p.innerText = list[i];

    const div = document.createElement("div");

    const li = document.createElement("li");
    li.append(div);

    div.append(p, button);

    ul.append(li);

    //   const tag = `
    //     <li>
    //         <div>
    //             <p>${list[i]}</p>
    //             ${button}
    //         </div>
    //     </li>

    //   `;

    //   text = text + list[i];
    //   console.log(text);
    //   li = `${li}${tag}`

    //   li += tag;
  }

  // ul.innerHTML = li;

  // console.log(li);
};

rendering();

const form = document.querySelector("form");
const input = document.getElementById("item");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const item = input.value;
  if (item.length === 0) {
    alert("장 볼 물건을 입력해주세요.");
    return input.focus();
  }

  list.unshift(item);

  rendering();

  input.value = "";

  //form.reset();
});
