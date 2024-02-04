function toggleAnswer(questionNumber) {
  var answer = document.getElementById('answer' + questionNumber);
  var toggleButton = document.getElementById('toggleButton' + questionNumber);

  if (answer.style.display === 'none' || answer.style.display === '') {
      answer.style.display = 'block';
      toggleButton.innerHTML = '<i class="fas fa-minus"></i>';
  } else {
      answer.style.display = 'none';
      toggleButton.innerHTML = '<i class="fas fa-plus"></i>';
  }
}