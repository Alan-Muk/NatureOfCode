let drops = []

function setup() {
	createCanvas(800, 800);
	for (let i = 0; i < 10; i++) {
		addInk(400, 400, 50)
	}

}

function tineLine(xl, z, c){
	for (let drop of drops) {
		drop.tine(xl, z, c)
	}
}

function addInk(x, y, r) {
	let drop = new Drop(x, y, 50);
	for (let other of drops) {
		other.marble(drop);
	}
	drops.push(drop);
}

function draw() {

	// let x = random(width)
	// let y = random(height)
	// let r = random(10, 20)
	// addInk(x, y, r)
	if (mouseIsPressed) {
		tineLine(400, 1, 9);
	}

	background(220);

	for (let drop of drops) {
		drop.show();
	}
}