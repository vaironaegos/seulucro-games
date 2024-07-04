let ballRadius = 12;
let pegCount = 30;
let pegSize = 30;
let maximumBalls = 100;
let ballEveryNFrames = 2;

let w = 0;
let h = 0;
let countX = 0;
let countY = 0;
let m;
let girar = true
let txt = ''

const { Bodies, Body, Composite, Engine, Events, World } = Matter;

let canvas;
let engine;

let wheel;
let parts = [];

let color = [
	"white",
	"#440d20",
	"#fff",
	"black"
]
let color_background = true


function windowResized() {
	// const windowWidth = 400
	// const windowHeight = 400
	// resizeCanvas(windowWidth, windowHeight);
	// resizeCanvas(400, 400, [false])
	setup()
}

function setup() {
	
	engine = Engine.create();
	Engine.run(engine);

	var canvas = createCanvas(400, 400, P2D).style('resize', 'none')
	// var canvas = createCanvas(400, 400);
	canvas.parent('globe');
	txt = ''
	girar = true

	m = min(width, height);
	let rat = 1 / 7 * 2;
	let r = m * rat;
	
	for(let i = 0; i < pegCount; i++) {
		let segment = TAU / pegCount;
		let angle = i / pegCount * TAU;
		let angle2 = i / pegCount * TAU + segment / 2;
		let x = cos(angle);
		let y = sin(angle);
		let x2 = cos(angle2);
		let y2 = sin(angle2);
		let cx = x * r;
		let cy = y * r;
		let cx2 = x2 * r;
		let cy2 = y2 * r;
		let circ = addCircle({ x: cx, y: cy, r: pegSize / 1000 * m, options: { isStatic: true} });
		let rect2 = addRect({ x: cx2, y: cy2, w: 100 / 1000 * m, h: 30 / 1000 * m, options: { angle: angle2 + HALF_PI, isStatic: true } });
		parts.push(circ, rect2);
	}
	
  let a = addRect({x:0, y:90, w:15, h:50, options:{isStatic:true}});
  let b = addRect({x:0, y:-90, w:15, h:50, options:{isStatic:true}});
  let c = addRect({x:90, y:0, w:50, h:15, options:{isStatic:true}});
  let d = addRect({x:-90, y:0, w:50, h:15, options:{isStatic:true}});
  let e = addRect({x:0, y:200, w:300, h:15, options:{isStatic:true}});

  parts.push(a);
  parts.push(b);
  parts.push(c);
  parts.push(d);

	wheel = Body.create({ parts, isStatic: true });

  
}

function addBody(...bodies) {
	World.add(engine.world, bodies);
}

function removeBody(...bodies) {
	World.remove(engine.world, bodies);
}

function addRect({ x = 0, y = 0, w = 10, h = 10, options = {} } = {}) {
	let body = Bodies.rectangle(x, y, w, h, options);
	addBody(body);
	return body;
}
function addCircle({ x = 0, y = 0, r = 10, options = {} } = {}) {
	let body = Bodies.circle(x, y, r, options);
	addBody(body);
	return body;
}

function preload() {
	// img = loadImage('./imgs/background_wood_2.png');
  }

function draw() {
	// background("#93b624");
	// background(0);
	// clearRect(0,0,width,height);
  	// image(img, 0, 0);
	// clearRect(0,0,width,height);
	
	if(color_background){
		background(color[3])
	}else{
		clear()
	}
	
	// Body.rotate(wheel, 0.015 + cos(frameCount / 30 + HALF_PI) * 0.055);
  if(girar){
	//   Body.rotate(wheel, 0.015 + cos(frameCount / 60 + HALF_PI) * 0.055);
	//   Body.rotate(wheel, 0.015 + cos(frameCount / 60 + HALF_PI) * 0.01);
	  Body.rotate(wheel, 0.015 + cos(frameCount / 60 + HALF_PI) * 0.055);
	  console.log(frameCount)
  }
	
	let bodies = Composite.allBodies(engine.world);
  	// bodiess = bodies
  

	if(bodies.length < maximumBalls && !(frameCount % ballEveryNFrames)) {


		addCircle({
      x: 0,
      y: 0,
      r: ballRadius / 1000 * m,
      options: {
        restitution: 0.8,
        torque: random(-0.05, 0.05),
        label: 'ball',
        restitution: 1.0,
        friction: 0.001,
        slop: 0.2,
        
      }
    });
	}
	
	translate(width / 2, height / 2);
	// translate(width / 2,0, 500);
	
	if(txt != ''){
		fill('black');
		rect(-15, 160, 30, 50);
		fill('yellow');
		textFont('Segoe UI');
		textSize(20);
		text(txt, -10, 174);
	}

	fill(color[1])
	rect(-12, 110, 25, 30)
	
	bodies.forEach((n, i) => {
		let render = n.render;
		if(!render.visible) {
			return;
		}
		fill(render.fillStyle);
		// stroke(render.strokeStyle);
		stroke(color[0]);
			
		if(render.fillStyle == '#14151f'){
			// fill('#93b624');
			// stroke('#93b624');
			fill(color[1]);
			stroke(color[1]);
		}else{
			fill(color[0])
		}


		strokeWeight(render.lineWidth);
		if(['peg','ball'].includes(n.label)) {
			ellipse(n.position.x, n.position.y, n.circleRadius * 2);
		}
		else {
			beginShape();
			n.vertices.forEach(({ x, y, isInternal }) => vertex(x, y));
			endShape(CLOSE);
		}
		
		if(!n.isStatic && n.position.y > height * 2) {
			removeBody(n);
		}
	});
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function choiceBall(n){
	girar = false
	addCircle({x: 0, y: 150, r: 7})
	txt = n.toString().padStart(2, '0')
}

// girar = false
// addCircle({x: 0, y: 150, r: 7})

// setTimeout(()=>{
  // setup()
// },1000)
// setTimeout(()=>{
//   girar = true  
// },2000)
// setTimeout(()=>{
//   girar = false
// },5000)

// addCircle({x: 0, y: 150, r: 15})
// girar = false
// addCircle({x: 0, y: 150, r: 15})