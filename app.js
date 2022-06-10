switch (document.readyState) {
  case "loading":
    let loadingProgress = document.createElement('div');
    let loadingBar = document.createElement('div');
    loadingProgress.setAttribute('id', 'loadingProgress');
    loadingBar.setAttribute('id', 'loadingBar');
}

let circle = document.createElement('div')
circle.setAttribute('id', 'loadingProgress');
document.getElementById('app').appendChild(circle);