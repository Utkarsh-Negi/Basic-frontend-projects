const box = document.querySelector('.box');
box.addEventListener('click', () => {
  if (box.classList.contains('boxclicked')) {
    box.classList.remove('boxclicked');
  } else {
    box.classList.add('boxclicked');
  }
});
