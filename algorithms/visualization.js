var speed = 100;

var delayTime = 10000 / (Math.floor(barCountValue / 10) * speed); //how many milliseconds delay between each display of bars
var totalDelay = 0; //Total delay
var elapsedTime = 0;
let temp = 0;

var isPaused = true;

barSortSpeed.addEventListener("input", visualizationSpeed);
barSortPlay.addEventListener("click", toggleAnimation);


function visualizationSpeed() {
  var sortingSpeed = barSortSpeed.value;

  switch (parseInt(sortingSpeed)) {
    case 1:
      speed = 2;
      break;
    case 2:
      speed = 10;
      break;
    case 3:
      speed = 25;
      break;
    case 4:
      speed = 50;
      break;
    case 5:
      speed = 100;
      break;
    case 6:
      speed = 200;
      break;
    case 7:
      speed = 400;
      break;
    case 8:
      speed = 600;
      break;
    case 9:
      speed = 800;
      break;
    case 10:
      speed = 1000;
      break;
    case 11:
      speed = 5000;
      break;
    case 12:
      speed = 10000;
      break;
  }

  delayTime = 10000 / (Math.floor(barCountValue / 10) * speed); 
}

function toggleAnimation(){
  isPaused = !isPaused;
  barSortPlay.innerText = isPaused ? "PLAY" : "PAUSE";
}

function visualizationAnimate(barContainer, height, color) {

  setTimeout(function () {
      barContainer.style =
        "margin-right:5px; width:100%; height:" +
        height +
        "%; background-color:" +
        color +
        "; align-self: flex-end;";
    }
  , (totalDelay += delayTime));
}


