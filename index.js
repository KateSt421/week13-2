const resultElement = document.getElementById("text");
resultElement.textContent = `До вашего дня рождения осталось...`;

document.getElementById("calculate").addEventListener("click", function () {
  const birthdayInput = document.getElementById("date").value;
  const errorMessage = document.getElementById("error");
  const resultMessage = document.getElementById("result");

  errorMessage.style.display = "none";
  resultMessage.textContent = "";
  resultElement.style.display = "none";
  resultElement.textContent = "";

  if (!birthdayInput) {
    errorMessage.style.display = "block";
    return;
  }

  const today = new Date();
  const birthday = new Date(birthdayInput);

  birthday.setFullYear(today.getFullYear());

  if (birthday < today) {
    birthday.setFullYear(today.getFullYear() + 1);
  }

  const timeDiff = birthday - today;
  const daysUntilBirthday = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  let dayWord;
  if (daysUntilBirthday % 10 === 1 && daysUntilBirthday % 100 !== 11) {
    dayWord = "день";
  } else if (
    [2, 3, 4].includes(daysUntilBirthday % 10) &&
    ![12, 13, 14].includes(daysUntilBirthday % 100)
  ) {
    dayWord = "дня";
  } else {
    dayWord = "дней";
  }

  resultMessage.textContent = `До вашего дня рождения осталось ${daysUntilBirthday} ${dayWord}.`;
});
