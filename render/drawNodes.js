let drawCount = 0; //remove when removing debug elements

function drawNodes(){
	if(debug) drawCount++;
	if(((rows-1)*side)+(gridRowNum*((side*rows)+verGridDist)) >= canvasHeight) {
		drawCount--;
		return;
	}
	if(maxGridsInRow === gridColNum){
		gridColNum = 0;
		gridRowNum++;
	} 
	for(var i = 0; i < rows; i++){
		for(var j = 0; j < cols; j++){
			rect((j*side)+(gridColNum*((side*cols)+hozGridDist)), (i*side)+(gridRowNum*((side*rows)+verGridDist)), side, side);
		}
	}
	gridColNum++;
}

