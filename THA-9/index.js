var container = document.getElementById('seats');
let total = 108;
for (let i = 0; i < 108; i++) {
  let block = document.createElement('div');

  block.className = 'chair';
  container.appendChild(block);
}
var kursi = document.querySelectorAll('.chair');

kursi.forEach((i) => {
  i.addEventListener('click', () => {
    i.classList.toggle('select');
    if (i.classList.contains('select')) {
      total -= 1;
      booked.innerHTML = `Seats left:${total}`;
    } else {
      total += 1;
      booked.innerHTML = `Seats left:${total}`;
    }
  });
});
