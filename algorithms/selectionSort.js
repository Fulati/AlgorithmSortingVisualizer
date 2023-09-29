function Selection_sort() {
  totalDelay = 0;

  for (var i = 0; i < barCountValue - 1; i++) {
    visualizationAnimate(bars[i], barHeight[i], "red");

    index_min = i;

    for (var j = i + 1; j < barCountValue; j++) {
      visualizationAnimate(bars[j], barHeight[j], "yellow");

      if (barHeight[j] < barHeight[index_min]) {
        if (index_min != i) {
          visualizationAnimate(
            bars[index_min],
            barHeight[index_min],
            "#5131ce"
          );
        }
        index_min = j;
        visualizationAnimate(bars[index_min], barHeight[index_min], "red");
      } else {
        visualizationAnimate(bars[j], barHeight[j], "#5131ce");
      }
    }

    if (index_min != i) {
      var temp = barHeight[index_min];
      barHeight[index_min] = barHeight[i];
      barHeight[i] = temp;

      visualizationAnimate(bars[index_min], barHeight[index_min], "red");
      visualizationAnimate(bars[i], barHeight[i], "red");
      visualizationAnimate(bars[index_min], barHeight[index_min], "#5131ce");
    }
    visualizationAnimate(bars[i], barHeight[i], "green");
  }
  visualizationAnimate(bars[i], barHeight[i], "green");

  enableButtons();
}
