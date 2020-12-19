const urlParams = new URLSearchParams(window.location.search);
const question = atob(urlParams.get("question"));
const category = atob(urlParams.get("cat"));
const questionArray = [...question];

const questionWrap = document.getElementById("questionWrap");
const categoryWrap = document.getElementById("categoryWrap");

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
  if (box === "_") {
    boxButton.classList.add("blank");
    boxButton.addEventListener("click", (e) =>
      e.target.classList.remove("blank")
    );
  }

  if (box !== "xxx" && box !== "_") {
    if (Math.random() < 0.3) {
      boxButton.innerHTML = box;
    } else {
      boxButton.innerHTML = box;

      boxButton.classList.add("blank");
      boxButton.addEventListener("click", (e) =>
        e.target.classList.remove("blank")
      );
    }
  }
  questionWrap.appendChild(boxButton);
});
