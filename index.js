const urlParams = new URLSearchParams(window.location.search);
const question = urlParams.get("question")
  ? atob(urlParams.get("question"))
  : "rad van fortuin";
const category = urlParams.get("cat") ? atob(urlParams.get("cat")) : "spel";
const questionArray = [...question];

const questionWrap = document.getElementById("questionWrap");
const categoryWrap = document.getElementById("categoryWrap");
const createButton = document.getElementById("create");
const inputText = document.getElementById("inp");

categoryWrap.innerHTML = category;
const boxes = Array(52).fill("xxx");

let beginIndex = Math.floor(52 / 2 - questionArray.length / 2);
if (questionArray.length < 13) {
  beginIndex = Math.floor(13 + 6 - questionArray.length / 2);
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
    // if (Math.random() < 0.3) {
    //   boxButton.innerHTML = box;
    //   boxButton.classList.add("letter");
    // } else {
    boxButton.innerHTML = box;

    boxButton.classList.add("blank");
    boxButton.classList.add("letter");
    boxButton.addEventListener("dblclick", (e) =>
      e.target.classList.remove("blank")
    );
    // }
  }
  questionWrap.appendChild(boxButton);
});

const createNew = () => {
  const newName = prompt("Geef het antwoord in: ");
  if (newName) {
    urlParams.set("question", btoa(newName));

    const newCat = prompt("Geef een categorie in: ");
    urlParams.set("cat", btoa(newCat || " "));

    window.location.search = urlParams.toString();
  }
};
createButton.addEventListener("click", createNew);

const checkLetters = (e) => {
  const letter = e.target.value[e.target.value.length - 1];
  document.querySelectorAll(".blank").forEach((box) => {
    if (box.innerHTML.toLowerCase() === letter.toLowerCase()) {
      box.classList.remove("blank");
    }
  });
};

inputText.addEventListener("keyup", checkLetters);
