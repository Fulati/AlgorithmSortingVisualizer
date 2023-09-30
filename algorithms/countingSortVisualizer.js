var inputArrays = [];
var countArrays = [];
var outputArrays = [];
var inputHeight = []; 
var countHeight = []; 
var outputHeight = []; 

var arrayMargin; //represent space between bars

var inputArray = document.getElementById('inputArray');
var countArray = document.getElementById('countArray');
var outputArray = document.getElementById('outputArray');
var numText = document.getElementById('numText');

var countSortSize = document.getElementById("CountSortSize");
var countSortSizeValue = countSortSize.value;

barRandomize.addEventListener("click", resetCountSort);
countSortSize.addEventListener("input", changeNumArrays);

function changeNumArrays() {
    countSortSizeValue = countSortSize.value;
    generateInputArray();
}

onload = () => {
    changeNumArrays()
    generateCountArray();
    generateOutputArray();
}

function resetCountSort() {
    // Reset all variables and containers to their initial state
    countSortSizeValue = countSortSize.value;
    inputArrays = [];
    countArrays = [];
    outputArrays = [];

    inputHeight = [];
    countHeight = []; 
    outputHeight = []; 

    arrayMargin = 0.1;
    inputArray.innerHTML = "";
    countArray.innerHTML = "";
    outputArray.innerHTML = "";
    totalDelay = 0;
    selectedSortButton = null;
  
    // Enable buttons and set initial display
    enableButtons();
    generateInputArray();
    generateCountArray()
    generateOutputArray()
    handleBarContainerVisibility();
  }

  
//Create the bars for the CountingSort
function generateInputArray() {
    inputArray.innerHTML = "";
  
    for (var i = 0; i < countSortSizeValue; i++) {
        inputHeight[i] =
        Math.floor(Math.random() * 10) + 1;

        inputArrays[i] = document.createElement("div");
        inputArray.appendChild(inputArrays[i]);
  
      arrayMargin = 0.1;
      inputArrays[i].style =
        "margin-right:5px; width:100%; height: " + 
        (inputHeight[i] * 6) +
        "%; background-color:#5131ce;" +
        "align-self: flex-end;";
    }
}


//Create the bars for the Count
function generateCountArray() {
    countArray.innerHTML = "";
    numText.innerHTML = "";

    countHeight = Array(11).fill(0);
  
    for (var i = 1; i < countHeight.length; i++) {
        //countHeight[i] = i * 10;  used while testing

        countArrays[i] = document.createElement("div");
        countArray.appendChild(countArrays[i]);

        arrayMargin = 0.1;

        countArrays[i].style =
            "margin-right:5px; width:100%; height: " +
            countHeight[i]+
            "%; background-color:#717f8e;" +
            "align-self: flex-end;";

        // Create a span element for the text
        var textElement = document.createElement("div");
        textElement.innerHTML = i; // Set the text content
        numText.appendChild(textElement); // Append to countArrays[i]
        textElement.style = 
        "margin-left: auto;";
    }
}

//Create the bars for the output from the sorting
function generateOutputArray() {
    outputArray.innerHTML = "";
  
    for (var i = 0; i < countSortSizeValue; i++) {
        outputArrays[i] = document.createElement("div");
        outputArray.appendChild(outputArrays[i]);
  
      arrayMargin = 0.1;
      outputArrays[i].style =
        "margin-right:5px; width:100%; height: " +
        (outputHeight[i] * 6) +
        "%; background-color: #0000ff;" +
        "align-self: flex-end;";
    }
}

//Counting Sort Animation
function countingSortAnimation(barContainer, height, color) {
    setTimeout(function () {
        barContainer.style =
          "margin-right:5px; width:100%; height:" +
          (height * 6) +
          "%; background-color:" +
          color +
          "; align-self: flex-end;";
      }
    , (totalDelay += delayTime));
  }