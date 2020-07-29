const input = document.querySelector(".number");
const button = document.querySelector(".btn");
const answer = document.querySelector(".answer");

const changeNumber = () => {
  const result = input.value * 2;
  answer.textContent = result;
};
button.addEventListener("click", changeNumber);
