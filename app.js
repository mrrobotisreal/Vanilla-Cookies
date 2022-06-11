let circle = document.createElement('div');
circle.setAttribute('id', 'loadingProgress');
document.getElementById('app').appendChild(circle);

setTimeout(() => {
  document.getElementById('app').removeChild(circle);
  unchanged = false;
}, 1500);

