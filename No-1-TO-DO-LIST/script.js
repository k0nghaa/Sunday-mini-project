const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addBtn = document.getElementById("addTask")

function addTask() {
  if(inputBox.value.trim() === "") { // inputBox에 내용을 적지 않았을 때 & trim메서드로 공백만 입력했을 때도 방지
    alert("할일을 입력하세요!");
  }
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "x"
    li.appendChild(span);
  }
  inputBox.value = ""; // li로 만들어지면 다시 빈칸으로 돌아감
  saveData();
}

addBtn.addEventListener("click", addTask);

inputBox.addEventListener("keydown", function(e){
  if(e.key === "Enter") {
    e.preventDefault(); // 폼 제출이나 새 줄 생성 막음
    addTask()
  }
})

listContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI") {
    e.target.classList.toggle("checked"); // .toggle메서드 => checked 클래스 없으면 추가, 있으면 제거
    saveData();
  } 
  else if(e.target.tagName === "SPAN") {
    e.target.parentElement.remove(); 
    saveData();
  }
}, false); // 세번째 인자(false)는 이벤트 전파 방식을 지정함. 생략 가능


// 현재 상태 저장 및 화면 반영 함수들
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML); // listContainer 안에 있는 HTML을 "data"라는 이름으로 저장
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data"); // 새로고침하거나 페이지 열었을 때, "data" 값 꺼내와서 listContainer에 집어넣음
}

showTask();