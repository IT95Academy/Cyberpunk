const inputFile = document.querySelector('.input-file input[type=file]');

inputFile.addEventListener('change', () => {
  const file = inputFile.files[0];
  const fileNameElement = inputFile.nextElementSibling;
  fileNameElement.textContent = file.name;
});
