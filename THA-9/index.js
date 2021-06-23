var container = document.getElementById('seats');
let total = 36;
for (let i = 0; i < 36; i++) {
  let block = document.createElement('div');

  block.className = 'chair';
  container.appendChild(block);
}
