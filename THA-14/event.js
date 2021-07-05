var clicked = document.getElementById('btn');
var focus_check = document.querySelector('.input');
clicked.addEventListener('click', () => {
  console.log('Hi you clicked me🤗');
  alert('Button is clicked');
});

function keyUp() {
  console.log('Key is released');
  alert('Output is logged to console..😎');
}
function keydown() {
  console.log('Key is pressed');
}

focus_check.onfocus = focus;
focus_check.onblur = blurr;

function blurr() {
  focus_check.value = 'Focus has been lost';
}

function focus() {
  focus_check.value = 'Focus is here';
}

function pageLoaded() {
  console.log('Page is loaded or refreshed successfully');
}

function resize() {
  //   let v = 0;
  console.log('Window is resizing');
  //   resize.innerHTML = v + 1;
}

function status() {
  console.log('you are offline right now');
}

val = 0;
window.addEventListener('resize', () => {
  let resize = document.querySelector('.resize');
  val += 1;
  resize.innerHTML = val;
});
