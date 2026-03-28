class MergeSortVisualizer {
  constructor(canvasId, size = 40) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");

    this.canvas.width = 1000;
    this.canvas.height = 500;

    this.size = size;
    this.array = this.generateArray();
    this.temp = new Array(size).fill(0);
    this.visited = new Array(size).fill(false);

    this.delay = 200;
  }

  generateArray() {
    return Array.from({ length: this.size }, () =>
      Math.floor(Math.random() * 250)
    );
  }

  sleep(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }

  draw(activeRange = []) {
    const { ctx, array, visited } = this;

    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    array.forEach((value, i) => {
      let color = "black";

      if (visited[i]) color = "#006d13";
      if (activeRange.includes(i)) color = "orange";

      ctx.fillStyle = color;
      ctx.fillRect(25 * i, 300 - value, 20, value);
    });
  }

  async mergeSort(start, end) {
    if (start >= end) return;

    const mid = Math.floor((start + end) / 2);

    await this.mergeSort(start, mid);
    await this.mergeSort(mid + 1, end);

    await this.merge(start, mid, end);

    for (let i = start; i <= end; i++) {
      this.visited[i] = true;
    }

    this.draw(this.range(start, end));
    await this.sleep(this.delay);
  }

  async merge(start, mid, end) {
    let i = start;
    let j = mid + 1;
    let k = start;

    while (i <= mid && j <= end) {
      if (this.array[i] <= this.array[j]) {
        this.temp[k++] = this.array[i++];
      } else {
        this.temp[k++] = this.array[j++];
      }
    }

    while (i <= mid) this.temp[k++] = this.array[i++];
    while (j <= end) this.temp[k++] = this.array[j++];

    for (let x = start; x <= end; x++) {
      this.array[x] = this.temp[x];
    }
  }

  range(start, end) {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  async start() {
    await this.mergeSort(0, this.size - 1);
    this.draw();
    document.querySelector(".title1").innerText =
      "Array is completely sorted";
  }
}

// Run it
const visualizer = new MergeSortVisualizer("Canvas", 40);
visualizer.start();
