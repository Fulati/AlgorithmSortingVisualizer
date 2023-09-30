function Heap() {
    totalDelay = 0;
  
    heap_sort();
  
    enableButtons();
  }
  
  function swap(i, j) {
    visualizationAnimate(bars[i], barHeight[i], "red");
    visualizationAnimate(bars[j], barHeight[j], "red");
  
    var temp = barHeight[i];
    barHeight[i] = barHeight[j];
    barHeight[j] = temp;
  
    visualizationAnimate(bars[i], barHeight[i], "red");
    visualizationAnimate(bars[j], barHeight[j], "red");
  
    visualizationAnimate(bars[i], barHeight[i], "#5131ce");
    visualizationAnimate(bars[j], barHeight[j], "#5131ce");
  }
  
  function max_heapify(n, i) {
    var largest = i;
    var l = 2 * i + 1;
    var r = 2 * i + 2;
  
    if (l < n && barHeight[l] > barHeight[largest]) {
      if (largest != i) {
        visualizationAnimate(bars[largest], barHeight[largest], "#5131ce");
      }
  
      largest = l;
  
      visualizationAnimate(bars[largest], barHeight[largest], "red");
    }
  
    if (r < n && barHeight[r] > barHeight[largest]) {
      if (largest != i) {
        visualizationAnimate(bars[largest], barHeight[largest], "#5131ce");
      }
  
      largest = r;
  
      visualizationAnimate(bars[largest], barHeight[largest], "red");
    }
  
    if (largest != i) {
      swap(i, largest);
  
      max_heapify(n, largest);
    }
  }
  
  function heap_sort() {
    for (var i = Math.floor(barCountValue / 2) - 1; i >= 0; i--) {
      max_heapify(barCountValue, i);
    }
  
    for (var i = barCountValue - 1; i > 0; i--) {
      swap(0, i);
      visualizationAnimate(bars[i], barHeight[i], "green");
      visualizationAnimate(bars[i], barHeight[i], "yellow");
  
      max_heapify(i, 0);
  
      visualizationAnimate(bars[i], barHeight[i], "#5131ce");
      visualizationAnimate(bars[i], barHeight[i], "green");
    }
    visualizationAnimate(bars[i], barHeight[i], "green");
  }
  