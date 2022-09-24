function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw () {
	const s = windowHeight/12;
	const origin = {
		x: windowWidth/2,
		y: windowHeight/2,
	};
	const color = [200,100,80];
const p = [
	[-1,-3],[ 1,-3],
	[-1,-1],[ 1,-1],
	[-1, 1],[ 1, 1],
	[-1, 3],[ 1, 3]
    ];
    background(0, 50);
    noFill();
    stroke(color);
    textSize(32);
    textAlign(CENTER);
    let inputs = Bela.data.buffers[0];
    for (var i = 0; i < p.length; i++) {
	const x = origin.x + p[i][0] * s;
	const y = origin.y + p[i][1] * s;
        const size = s * inputs[i];
        ellipse(x, y, size, size);
	text(i+1, x-20, y-20, 50);
    }
}

