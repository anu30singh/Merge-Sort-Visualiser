// Canvas variables - canvas element is created and its width and height is set to 1000
// Canvas element is used for creating graphics, on the fly, via JavaScript.

const canvas = document.getElementById("Canvas")
canvas.width = 1000
canvas.height = 500
const ctrl = canvas.getContext("2d")

// Populating the arrays
const length = 40;
let original = [], intermediate = [], visited = [];

for (let i = 0; i < length; i++) {
	original.push(Math.round(Math.random() * 250))
	intermediate.push(0)
	visited.push(0)
}

// Merge Sorting
const mergeSort = async (start, end) => {
	if (start < end) {
		let mid = parseInt((start + end) >> 1)
		await mergeSort(start, mid)
		await mergeSort(mid + 1, end)
		await mergeArray(start, end)
		await drawBars(start, end)
		await timeout(600)
	}
}
const timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms));
function mergeArray(start, end) {

    // Declarations
    let mid = parseInt((start + end) >> 1);
    let start1 = start, start2 = mid + 1
    let end1 = mid, end2 = end
    let index = start

    // Comparison
    while (start1 <= end1 && start2 <= end2) {
        if (original [start1] <= original [start2]) intermediate[index++] = original [start1++]
        if (original [start1] > original [start2]) intermediate[index++] = original [start2++]
    }

    // Filling up remaining
    while (start1 <= end1) intermediate[index++] = original [start1++]
    while (start2 <= end2) intermediate[index++] = original [start2++]

    // Copying to Original
    index = start
    while (index <= end) original [index] = intermediate[index++]

}

// Using fillReact us used to make great bars
function drawBars(start, end) {

    ctrl.clearRect(0, 0, 1000, 1500)
    for (let i = 0; i < length; i++) {

        ctrl.fillStyle = "black"
        ctrl.shadowOffsetX = 2
        ctrl.shadowColor = "chocolate";
        ctrl.shadowBlur = 3;
        ctrl.shadowOffsetY = 5;

        ctrl.fillRect(25 * i, 300 - original [i], 20, original [i])

        if (visited[i]) {
            ctrl.fillStyle = "#006d13"
            ctrl.fillRect(25 * i, 300 - original [i], 20, original [i])
            ctrl.shadowOffsetX = 2
        }
    }

    for (let i = start; i <= end; i++) {
        ctrl.fillStyle = "orange"
        ctrl.fillRect(25 * i, 300 - original [i], 18, original [i])
        ctrl.fillStyle = "#cdff6c"
        ctrl.fillRect(25 * i, 300, 18, original [i])
        visited[i] = 1
    }
}

// Running the Code
const performer = async () => {
	await mergeSort(0, length - 1)
	await drawBars()
}
performer().then(r => {
	const titleChanger = document.querySelector(".title1")
	titleChanger.innerText = "Array is completely sorted"
})



