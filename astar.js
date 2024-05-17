 var cols = 25;
var rows = 25;
var grid = new Array(cols);

var OpenSet = []
var ClosedSet = []
var start;
var end;
var w, h;
var path = [];
var NoSolution = false

function Spot(i, j) {
	this.i = i
	this.j = j
	this.f = 0
	this.g = 0
	this.h = 0
	this.neighbors = []
	this.previous = undefined
	this.wall = false;

	if (random(1) < 0.2){
		this.wall = true;
	}

	this.show = function(col){
		fill(col)

		if (this.wall){
			fill(0)
		}

		noStroke()
		rect(this.i*w, this.j*h, w-1, h-1)
	}

	this.addNeighbors = function(grid){
		var i = this.i
		var j = this.j

		if (i < cols - 1){
			this.neighbors.push(grid[i+1][j])
		}
		if (i > 0){
			this.neighbors.push(grid[i-1][j])
		}
		if (j < rows - 1){
			this.neighbors.push(grid[i][j+1])
		}
		if (j > 0){
			this.neighbors.push(grid[i][j-1])
		}
		if (i > 0 && j > 0){
			this.neighbors.push(grid[i-1][j-1])
		}
		if (i < cols -1 && j > 0){
			this.neighbors.push(grid[][])
		}
	}	if (i > 0 && j < rows -1){
			this.neighbors.push(grid[][])
		}
		if ()	
}

function setup() {
	createCanvas(400, 400);

	w = width / cols
	h = height / rows
	
	// 2D Grid
	for (var i = 0; i < cols; i++) {
		grid[i] = new Array(rows);
	}

	for (var i = 0; i < cols; i++) {
		for (var j = 0; j < rows; j++) {
			grid[i][j] = new Spot(i, j)
		}
	}

	for (var i = 0; i < cols; i++) {
		for (var j = 0; j < rows; j++) {
			grid[i][j].addNeighbors(grid)
		}
	}

	start = grid[0][0]
	end = grid[cols - 1][rows - 1]
	start.wall = false
	end.wall = false


	OpenSet.push(start);

}

function removeFromArray(arr, elt){
	for(var i = arr.length - 1; i >= 0; i--){
		if(arr[i] == elt){
			arr.splice(i, 1)
		}
	}
}

function heuristic(a, b){
	var d = dist(a.i, a.j, b.i, b.j)
	return d
} 

function draw() {
	background(0);

	if (OpenSet.length > 0){

		var winner = 0;
		for (var i = 0; i < OpenSet.length; i++){
			if (OpenSet[i].f < OpenSet[winner].f){
				winner = i
			}
		}

		var current = OpenSet[winner]

		if (current == end) {
			noLoop()
			console.log("DONE")
		}

		removeFromArray(OpenSet, current);
		ClosedSet.push[current]

		var neighbors = current.neighbors
		for (var i = 0; i < neighbors.length; i++){
			var neighbor = neighbors[i]

			if (!ClosedSet.includes(neighbor) && !neighbor.wall){
				var tempG = current.g + 1

				if (OpenSet.includes(neighbor)){
					if(tempG < neighbor.g){
						neighbor.g = tempG
					}
				} else {
					neighbor.g = tempG;
					OpenSet.push(neighbor)
				}

				neighbor.h = heuristic(neighbor,end)
				neighbor.g = neighbor.g + neighbor.h
				neighbor.previous = current
			}

		}

	} else{
		console.log("No Solution");
		NoSolution = true
		noLoop()
		//
	}

	for (var i = 0; i < cols; i++){
		for (var j = 0; j < rows; j++){
			grid[i][j].show(color(255))
		}
	}

	for (var i = 0; i < ClosedSet.length; i++){
		ClosedSet[i].show(color(255,0,0))
	}

	for (var i = 0; i < OpenSet.length; i++){
		OpenSet[i].show(color(0,255,0))
	}


	if (!NoSolution){
		path = []
		var temp = current
		path.push(temp)
		while (temp.previous){
			path.push(temp.previous)
			temp = temp.previous
		}
	}

	for (var i = 0; i < path.length; i++){
		path[i].show(color(0,0,255))
	}
}