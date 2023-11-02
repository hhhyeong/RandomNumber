// 시작하면 랜덤 번호 한개가 정해진다.
// 1~100까지  숫자 중에 한가지 입력하면 기회가 차감된다.
// 1~100 범위 이외의 숫자를 입력하면 "범위 안의 숫자를 입력하세요"하고, 기회 차감안됨.
// 이미 입력했던 숫자 입력하면 "이미 입력했습니다." 하고, 기회 차감안됨.
// 리셋버튼 누르면 Go버튼 활성화, 기회가 다시 5회로 초기화.
// 기회 5개가 모두 차감되면, Go버튼 disabled로 변함.

const resultArea = document.getElementById("result-area");
const chancesArea = document.getElementById("chances-area");
const inputArea = document.getElementById("input-area");
const startBtn = document.getElementById("start-button");
const resetBtn = document.getElementById("reset-button");
let resultAreaImg = document.querySelector(".main-img");
console.log(resultAreaImg);

let chances = 5;
let ranNumber;
let inputValue;
let history = [];

startBtn.addEventListener("click", start);
resetBtn.addEventListener("click", reset);
inputArea.addEventListener("focus", function () {
  inputArea.value = "";
});

function setRandomNumber() {
  ranNumber = Math.floor(Math.random() * 100);
  console.log("정답 : " + ranNumber);
}

function reset() {
  setRandomNumber();
  chances = 5;
  startBtn.disabled = false;
  chancesArea.textContent = "남은기회 : 5회";
  resultArea.textContent = "죽기 싫다면 맞춰라";
  inputArea.value = "";
  history = [];
  resultAreaImg.src =
    "https://media1.giphy.com/media/9DinPR8bzFsmf74j9W/giphy.gif";
}

function start() {
  inputValue = inputArea.value;
  // console.log("inputValue : " + inputValue);

  if (inputValue < 1 || inputValue > 100) {
    resultArea.textContent = "1~100 사이의 값을 입력하세요.";
    return;
  }

  if (history.includes(inputValue)) {
    console.log("동일한값");
    resultArea.textContent = "이미 입력한 숫자입니다. 다른숫자를 입력해주세요.";
    return;
  }

  history.push(inputValue);
  console.log(history);

  chances--;
  chancesArea.textContent = `남은기회 : ${chances}회`;

  if (chances < 1) {
    startBtn.disabled = true;
  }

  console.log(chances);

  if (inputValue < ranNumber) {
    resultArea.textContent = "UP!!!";
    console.log(resultAreaImg);

    resultAreaImg.src =
      "https://media0.giphy.com/media/3ov9jExd1Qbwecoqsg/200.gif";
  } else if (inputValue > ranNumber) {
    resultArea.textContent = "Down!!!";

    resultAreaImg.src = "https://media.giphy.com/media/r2puuhrnjG7vy/giphy.gif";
  } else if (inputValue == ranNumber) {
    console.log(resultAreaImg);

    resultArea.textContent = "정답입니다!";
    resultAreaImg.src =
      "https://media.tenor.com/images/0a81b89954678ebe228e15e35044f7a5/tenor.gif";
    startBtn.disabled = true;
  }
}

setRandomNumber();
