function setup() {
 	createCanvas(canvasWidth, canvasHeight);
	if(debug){
		console.log("there are " + debugRoute(rows, cols, 0, 0, 0, true, true) + " routes for the " + rows + "x" + cols + " grid");
		console.log(drawCount + " grids were drawn");
	}
	else evaluateAll(rows, cols)
}

document.getElementById("status").innerHTML = "Completed"
