
// GLOBAL VARS & TYPES
let numberOfShapesControl: p5.Element;
let numberOfShapesControlValue: p5.Element;
const canvasSizeX = 800;
const canvasSizeY = 800;


const numQuads = 4;
const iterations = 4;
function setup() {
  console.log("🚀 - Setup initialized - P5 is running");

  createCanvas(canvasSizeX, canvasSizeY)
  rectMode(CENTER).noFill()

  // Sliders
  // create a text object to display the slider value
  numberOfShapesControlValue = createDiv();
  numberOfShapesControl = createSlider(1, 30, 15, 1).position(10,10).style("width", "100px");
  numberOfShapesControl.mouseReleased(drawRect)

}

// p5 WILL HANDLE REQUESTING ANIMATION FRAMES FROM THE BROWSER AND WIL RUN DRAW() EACH ANIMATION FROME
function draw() {


  // CENTER OF SCREEN
  translate(width / 2, height / 2);

  drawRect();


  noLoop();
}

function drawRect() {
  // CLEAR BACKGROUND
  background(0);

  const numberOfShapes = <number>numberOfShapesControl.value();
  const colors = ColorHelper.getRandomPasteleColorsPalette(numberOfShapes);

  console.log({ numberOfShapes, colors: colors.length });
  console.log(colors);

  // CONSISTENT SPEED REGARDLESS OF FRAMERATE
  const speed = (frameCount / (numberOfShapes * 30)) * 2;

  // DRAW ALL SHAPES
  for (var i = 0; i < numberOfShapes; i++) {
    push();
    const lineWidth = 8;
    const spin = speed * (numberOfShapes - i);
    const numberOfSides = 3 + i;
    const width = 40 * i;
    strokeWeight(lineWidth);
    stroke(colors[i]);
    rotate(spin);
    PolygonHelper.draw(numberOfSides, width);
    pop();
  }
  // display the slider value
  numberOfShapesControlValue.html("Slider value: " + numberOfShapesControl.value());
  
}
