var barSortSpeed = document.getElementById("sortSpeed");
var barCount = document.getElementById("sortSize");
var barCountValue = barCount.value;
var barRandomize = document.getElementById("sortRandomize");

//All the sorting buttons
var sortButtons = document.querySelectorAll(".sorts .btn");

var bars = []; //represent each bars
var barHeight = []; //represent the height of each bars
var barMargin; //represent space between bars
var barContainer = document.getElementById("barContainer"); //container that holds all the bars
barContainer.style = "flex-direction.row";

barRandomize.addEventListener("click", changeNumBars);
barCount.addEventListener("input", changeNumBars);

function generateBars() {
  barContainer.innerHTML = "";

  for (var i = 0; i < barCountValue; i++) {
    barHeight[i] =
      Math.floor(Math.random() * 0.5 * (barCount.max - barCount.min)) + 10;
    bars[i] = document.createElement("div");
    barContainer.appendChild(bars[i]);

    barMargin = 0.1;
    bars[i].style =
      "margin-right:5px; width:100%; height: " +
      barHeight[i] +
      "%; background-color:#5131ce;" +
      "align-self: flex-end;";
  }
}

function changeNumBars() {
  barCountValue = barCount.value;
  generateBars();
}

onload = changeNumBars();

//Running the appropriate algorithm.
for (var i = 0; i < sortButtons.length; i++) {
  sortButtons[i].addEventListener("click", runAlgorithm);
}

function disableButtons() {
  for (var i = 0; i < sortButtons.length; i++) {
    sortButtons[i].classList = [];
    sortButtons[i].classList.add("lockedButton");

    sortButtons[i].disabled = true;
  }
  barCount.disabled = true;
  barRandomize.disabled = true;
  barSortSpeed.disabled = true;
  //inp_pause.disabled = false;
}

function runAlgorithm() {
  disableButtons();

  this.classList.add("selectedButton");
  switch (this.innerHTML) {
    case "Bubble Sort":
      Bubble();
      break;
    case "Selection Sort":
      Selection_sort();
      break;
    case "Insertion Sort":
      Insertion();
      break;
    case "Merge Sort":
      Merge();
      break;
    case "Quick Sort":
      Quick();
      break;
    case "Heap Sort":
      Heap();
      break;
  }
}
