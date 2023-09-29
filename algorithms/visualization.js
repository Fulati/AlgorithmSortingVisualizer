var speed = 500;

var delayTime = 10000 / (Math.floor(barCountValue / 10) * speed); //how many milliseconds delay between each display of bars
var totalDelay = 0; //Total delay

//var isPaused = false;
//inp_pause.disabled = true;

barSortSpeed.addEventListener("input", visualizationSpeed);
//inp_pause.addEventListener("click", pauseAnimation);

function visualizationSpeed() {
  var sortingSpeed = barSortSpeed.value;

  switch (parseInt(sortingSpeed)) {
    case 1:
      speed = 1;
      break;
    case 2:
      speed = 10;
      break;
    case 3:
      speed = 100;
      break;
    case 4:
      speed = 1000;
      break;
    case 5:
      speed = 10000;
      break;
  }

  delayTime = 10000 / (Math.floor(barCountValue / 10) * speed); 
}

function visualizationAnimate(barContainer, height, color) {
  setTimeout(function () {
    //if(!isPaused){
    barContainer.style =
      "margin-right:5px; width:100%; height:" +
      height +
      "%; background-color:" +
      color +
      "; align-self: flex-end;";
    //}
  }, (totalDelay += delayTime));
}

function enableButtons() {
  setTimeout(function () {
    for (var i = 0; i < sortButtons.length; i++) {
      sortButtons[i].classList = [];
      sortButtons[i].classList.add("unselectedButton");

      sortButtons[i].disabled = false;
    }
    barCount.disabled = false;
    barRandomize.disabled = false;
    barSortSpeed.disabled = false;
    //inp_pause.disabled = true;
  }, (totalDelay += delayTime));
}

//function pauseAnimation(){
//isPaused = !isPaused;
//inp_pause.innerText = isPaused ? "PLAY" : "PAUSE";
//}
