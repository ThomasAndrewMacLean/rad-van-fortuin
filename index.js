const urlParams = new URLSearchParams(window.location.search);
const question = atob(urlParams.get("question"));
const category = atob(urlParams.get("cat"));
const questionArray = [...question];

const questionWrap = document.getElementById("questionWrap");
const categoryWrap = document.getElementById("categoryWrap");
const createButton = document.getElementById("create");

categoryWrap.innerHTML = category;
const boxes = Array(52).fill("xxx");

let beginIndex = Math.floor(52 / 2 - questionArray.length / 2);
if (questionArray.length < 13) {
  beginIndex = 13 + 6 - questionArray.length / 2;
}

questionArray.forEach((letter, index) => {
  boxes[beginIndex + index] = letter;
});

boxes.forEach((box) => {
  const boxButton = document.createElement("button");
  if (box === "xxx") {
    boxButton.classList.add("empty");
  }
  if (box === " ") {
    boxButton.classList.add("empty");
  }

  if (box !== "xxx" && box !== " ") {
    if (Math.random() < 0.3) {
      boxButton.innerHTML = box;
      boxButton.classList.add("letter");
    } else {
      boxButton.innerHTML = box;

      boxButton.classList.add("blank");
      boxButton.classList.add("letter");
      boxButton.addEventListener("click", (e) =>
        e.target.classList.remove("blank")
      );
    }
  }
  questionWrap.appendChild(boxButton);
});

const createNew = () => {
  const newName = prompt("Geef het antwoord in: ");
  urlParams.set("question", btoa(newName));

  const newCat = prompt("Geef een categorie in: ");
  urlParams.set("cat", btoa(newCat));

  window.location.search = urlParams.toString();
};
createButton.addEventListener("click", createNew);
