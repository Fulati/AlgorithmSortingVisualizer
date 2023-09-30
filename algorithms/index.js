var barSortSpeed = document.getElementById("sortSpeed");
var barCount = document.getElementById("sortSize");
var barCountValue = barCount.value;
var barRandomize = document.getElementById("sortRandomize");
var barSortPlay = document.getElementById("sortPlay");

//All the sorting buttons
var sortButtons = document.querySelectorAll(".sorts .btn");

var bars = []; //represent each bars
var barHeight = []; //represent the height of each bars
var barMargin; //represent space between bars
var barContainer = document.getElementById("barContainer"); //container that holds all the bars

barRandomize.addEventListener("click", changeNumBars);
barCount.addEventListener("input", changeNumBars);

//Create the bars
function generateBars() {
  barContainer.innerHTML = "";

  for (var i = 0; i < barCountValue; i++) {
    barHeight[i] =
      Math.floor(Math.random() * 1.5 * (barCount.max - barCount.min)) + 10;
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
  generateBars();
}

onload = changeNumBars();


//Disable the other sorting buttons so you cant switch mid sort
function disableButtons() {
  for (var i = 0; i < sortButtons.length; i++) {
    sortButtons[i].classList = [];
    sortButtons[i].classList.add("lockedButton");

    sortButtons[i].disabled = true;
  }
  barCount.disabled = true;
  barRandomize.disabled = true;
  barSortSpeed.disabled = true;
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
    barSortPlay.innerText = "PLAY";
  }, (totalDelay += delayTime));
}

let selectedSortButton = null;


// Function to show/hide bar containers based on the selected sort algorithm
function handleBarContainerVisibility() {
  
  const containers = document.querySelectorAll(".barContainer, .inputArray, .countArray, .numText, .outputArray");

  if (selectedSortButton) {
    // Show the appropriate bar containers based on the selected sort algorithm
    const selectedAlgorithm = selectedSortButton.innerHTML;

    switch (selectedAlgorithm) {
      case "Counting Sort":
        // Show all four bar containers for Counting Sort
        generateInputArray();
        containers[0].style.display = "none";
        containers[1].style.display = "flex";
        containers[2].style.display = "flex";
        containers[3].style.display = "flex";
        containers[4].style.display = "flex";

        break;
      default:
        // Show only the first bar container for other algorithms
        generateBars();
        containers[0].style.display = "flex";
        containers[1].style.display = "none";
        containers[2].style.display = "none";
        containers[3].style.display = "none";
        containers[4].style.display = "none";
        break;
    }
  }

}


// Add click event listener to each sort button
for (var i = 0; i < sortButtons.length; i++) {
  sortButtons[i].addEventListener("click", function () {
    // Deselect the previously selected button, if any
    if (selectedSortButton) {
      selectedSortButton.classList.remove("selectedButton");
    }

    // Select the clicked button
    this.classList.add("selectedButton");
    selectedSortButton = this;

    // Enable the barSortPlay button
    barSortPlay.disabled = false;

    // Handle bar container visibility
    handleBarContainerVisibility()
  });
}

barSortPlay.addEventListener("click", () => {

  if (selectedSortButton) {
    // Disable buttons during sorting
    disableButtons();

        switch (selectedSortButton.innerHTML) {
            case "Bubble Sort":
              BubbleSort();
              break;
            case "Selection Sort":
              SelectionSort();
              break;
            case "Insertion Sort":
              InsertionSort();
              break;
            case "Merge Sort":
              MergeSort();
              break;
            case "Quick Sort":
              QuickSort();
              break;
            case "Heap Sort":
              HeapSort();
              break;
            case "Counting Sort":
              CountingSort();
              break;
          }

        enableButtons();
    }
  });
