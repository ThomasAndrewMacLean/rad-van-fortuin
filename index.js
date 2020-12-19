const urlParams = new URLSearchParams(window.location.search);
const question = urlParams.get("question");
const questionArray = [...question];

const questionWrap = document.getElementById("questionWrap");

const boxes = Array(52).fill("xxx");
console.log(boxes);

let beginIndex = Math.floor(52 / 2 - questionArray.length / 2);
if (questionArray.length < 13) {
  beginIndex = 13 + questionArray.length / 2;
}

questionArray.forEach((letter, index) => {
  boxes[beginIndex + index] = letter;
});

boxes.forEach((box) => {
  const boxButton = document.createElement("button");
  if (box === "xxx") {
    boxButton.classList.add("empty");
  }
  if (box === "_") {
    boxButton.classList.add("blank");
  }

  if (box !== "xxx" && box !== "_") {
    boxButton.innerHTML = box;
  }
  questionWrap.appendChild(boxButton);
});
