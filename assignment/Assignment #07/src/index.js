const numberGenerateInput = document.querySelector("#generate-number");
const numberGuessForm = document.querySelector("#number_guess");
const numberGuessInput = document.querySelector("#number_guess input");

const list_choose = document.querySelector("#list_choose");
const result = document.querySelector("#result");

function updateValue(event) {
  const numberGenerate = numberGenerateInput.value;
  localStorage.setItem("numberGenerate", numberGenerate);
}

function updateGuess(event) {
  event.preventDefault();
  const numberGuess = numberGuessInput.value;
  const numberRandom = Math.round(
    Math.random() * localStorage.getItem("numberGenerate")
  );
  list_choose.innerText = `You chose: ${numberGuess}, the machine chose: ${numberRandom}.`;

  if (parseInt(numberGuess, 10) === numberRandom) {
    result.innerText = "You won!";
  } else {
    result.innerText = "You lost!";
  }
}

numberGenerateInput.addEventListener("change", updateValue);
numberGuessForm.addEventListener("submit", updateGuess);
