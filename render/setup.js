//user defined
const rows = 3; 
const cols = 3;
const debug = true;
const defaultSide = 25; //pretty much ideal side length; 
let hozGridDist = 50; //horizontal distance between each drawn grid 
let verGridDist = 100; //vertical distance between each drawn grid
canvasWidth = window.innerWidth;
canvasHeight = window.innerHeight;

//calculated based on input
if(rows > 3 || cols > 3) console.log("note you have chosen a large grid, all solution grids may not be shown");
const side = (cols*defaultSide < window.innerWidth)? defaultSide: window.innerWidth/cols;  //decides if ideal length is usable or not ig
let maxGridsInRow = Math.floor(window.innerWidth/((cols*side)+hozGridDist)); //max number of grids that can be in one row when drawing
let gridRowNum = 0; //current grid row number to draw from 
let gridColNum = 0; //current grid column number to draw from

//debug details
if(debug){ 
	console.log("Finding all routes for a " + rows + "x" + cols + " grid");  
	console.log("the side lengths are " + side); 
	console.log("There will be a max of " + maxGridsInRow + " grids in a row");
}



/*bugs:
	screen overflow when drawing
*/