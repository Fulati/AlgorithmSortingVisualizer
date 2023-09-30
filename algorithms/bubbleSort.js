function BubbleSort() {
  totalDelay = 0;

  for (var i = 0; i < barCountValue - 1; i++) {
    for (var j = 0; j < barCountValue - i - 1; j++) {
      visualizationAnimate(bars[j], barHeight[j], "yellow");

      if (barHeight[j] > barHeight[j + 1]) {
        visualizationAnimate(bars[j], barHeight[j], "red");
        visualizationAnimate(bars[j + 1], barHeight[j + 1], "red");

        var temp = barHeight[j];
        barHeight[j] = barHeight[j + 1];
        barHeight[j + 1] = temp;

        visualizationAnimate(bars[j], barHeight[j], "red"); 
        visualizationAnimate(bars[j + 1], barHeight[j + 1], "red"); 
      }
      visualizationAnimate(bars[j], barHeight[j], "#5131ce");
    }
    visualizationAnimate(bars[j], barHeight[j], "green");
  }
  visualizationAnimate(bars[0], barHeight[0], "green");

  enableButtons();
}
