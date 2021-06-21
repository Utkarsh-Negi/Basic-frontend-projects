var container = document.querySelector('.front');
for (i = 0; i < 400; i++) {
  container.innerHTML += '<div class="box"></div>';
}

var box = document.querySelectorAll('.box');

box.forEach((item) => {
  item.addEventListener('click', (event) => {
    if (item.classList.contains('boxclicked')) {
      item.classList.remove('boxclicked');
    } else {
      item.classList.add('boxclicked');
    }
  });
});
