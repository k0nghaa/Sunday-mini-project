const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
  const note = document.createElement("div");
  const inputBox = document.createElement("p");
  const img = document.createElement("img");

  note.className = "note";
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/can.png";
  img.alt = "휴지통 아이콘";

  note.append(inputBox, img);
  notesContainer.append(note);
  updateStorage();
});

notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.closest(".note").remove();
    updateStorage();
  } else if (e.target.classList.contains("input-box")) {
    const note = e.target;
    note.onkeyup = () => updateStorage();
  }
});
