let backgroungImg;
let linesList = [];
let wordsList = [];
let stroke_color; 
let fill_color; 

function preload() {
  linesList = loadStrings('./assets/heatwaves.txt');
  // backgroundImg = loadImage('https://i1.wp.com/soundigest.com/wp-content/uploads/2020/07/heat-waves-glass-animals.png', "glass animals album");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250);
  strokeWeight(3);
  stroke_color = color('pink'); 
  fill_color = color('white');

  linesList.forEach((line) => { //Student TODO: turn for-loop into forEach loop with arrow function
    let wordsInOneLine = line.split(' ');
    wordsList.push(...wordsInOneLine); //Student TODO: turn wordsList into a set. What difference does it make? 
  });
  // backgroundImg.resize(windowWidth, windowHeight);
}

function draw() {

  // let fill_color = backgroundImg.get(mouseX, mouseY);//Student TODO -- get color from pixel of image 

  fill(fill_color);
  stroke(stroke_color);
  curr_word = wordsList[frameCount % wordsList.length];
  //Student TODO: only print out word if frameCount is a multiple of 5
  textSize(40);
  text(curr_word, mouseX, mouseY);
}

