function Bubble() {
  totalDelay = 0;

  for (var i = 0; i < barCountValue - 1; i++) {
    for (var j = 0; j < barCountValue - i - 1; j++) {
      visualizationAnimate(bars[j], barHeight[j], "yellow"); //Color update

      if (barHeight[j] > barHeight[j + 1]) {
        visualizationAnimate(bars[j], barHeight[j], "red"); //Color update
        visualizationAnimate(bars[j + 1], barHeight[j + 1], "red"); //Color update

        var temp = barHeight[j];
        barHeight[j] = barHeight[j + 1];
        barHeight[j + 1] = temp;

        visualizationAnimate(bars[j], barHeight[j], "red"); //Height update
        visualizationAnimate(bars[j + 1], barHeight[j + 1], "red"); //Height update
      }
      visualizationAnimate(bars[j], barHeight[j], "#5131ce"); //Color update
    }
    visualizationAnimate(bars[j], barHeight[j], "green"); //Color update
  }
  visualizationAnimate(bars[0], barHeight[0], "green"); //Color update

  enableButtons();
}
