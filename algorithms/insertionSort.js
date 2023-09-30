function InsertionSort() {
  totalDelay = 0;

  for (var j = 0; j < barCountValue; j++) {
    visualizationAnimate(bars[j], barHeight[j], "yellow");

    var key = barHeight[j];
    var i = j - 1;
    while (i >= 0 && barHeight[i] > key) {
      visualizationAnimate(bars[i], barHeight[i], "red");
      visualizationAnimate(bars[i + 1], barHeight[i + 1], "red");

      var temp = barHeight[i];
      barHeight[i] = barHeight[i + 1];
      barHeight[i + 1] = temp;

      visualizationAnimate(bars[i], barHeight[i], "red");
      visualizationAnimate(bars[i + 1], barHeight[i + 1], "red");

      visualizationAnimate(bars[i], barHeight[i], "#5131ce"); 
      
      if (i == j - 1) {
        visualizationAnimate(bars[i + 1], barHeight[i + 1], "yellow");
      } else {
        visualizationAnimate(bars[i + 1], barHeight[i + 1], "#5131ce");
      }
      i -= 1;
    }
    barHeight[i + 1] = key;

    for (var t = 0; t < j; t++) {
      visualizationAnimate(bars[t], barHeight[t], "green");
    }
  }
  visualizationAnimate(bars[j - 1], barHeight[j - 1], "green");

  enableButtons();
}
