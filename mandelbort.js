

function setup(){
	createCanvas(500, 500)
	pixelDensity(1)
}

function draw(){

	loadPixels()
	var max_iterations = 1000

	for (var x = 0; x < width; x++){
		for (var y = 0; y < height; y++){

			var a = map(x, 0, width, -2, 2)
			var b = map(y, 0, height, -2, 2)

			var ca = a
			var cb = b

			var n = 0;
			var z = 0

			while (n < max_iterations){
				var aa = a*a - b*b
				var bb = 2*a*b
				a = aa + ca 
				b = bb + cb

				if (abs(a + b) > 16){
					break
				}
				n++
			}

			var bright = map(n, 0, max_iterations, 0, 255)
			bright = map(sqrt(bright), 0, 1, 0, 255)

			if (n === max_iterations){
				bright = 0
			}


			var pix = (x + y * width) * 4
			pixels[pix + 0] = bright
			pixels[pix + 1] = bright
			pixels[pix + 2] = bright
			pixels[pix + 3] = 255
		}
	}
	updatePixels()
}
