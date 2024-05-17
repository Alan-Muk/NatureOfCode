var cols;
var rows;
var openSet = []
var closedSet = []
var start
var end

var grid = new Array(cols)

function Spot(){
	this.f = 0;
	this.g = 0;
	this.h = 0;

}

for (var i = 0; i < cols; i++){
	grid[i] = new Array(rows)
}

for (var i = 0; i < cols; i++){
	for (var j = 0; j < rows; j++) {
		grid[i][j] = new Spot(rows)
	}
}

start = grid[0][0]
end = grid[cols - 1][rows - 1]

openSet.push(start)

while openSet{
	
}