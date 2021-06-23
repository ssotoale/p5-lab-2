let backgroungImg;
let linesList = [];
let wordsList = [];
let stroke_color; 
let fill_color; 

function preload() {
  linesList = loadStrings('./assets/lyrics.txt');
  backgroundImg = loadImage('https://i1.wp.com/soundigest.com/wp-content/uploads/2020/07/heat-waves-glass-animals.png', "glass animals album");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250);
  strokeWeight(3);
  stroke_color = color('pink'); 
  fill_color = color('white');

  linesList.forEach((line) => { 
    let wordsInOneLine = line.split(' ');
    wordsList.push(...wordsInOneLine); 
  });
  backgroundImg.resize(windowWidth, windowHeight);
}

function draw() {

  let fill_color = backgroundImg.get(mouseX, mouseY);
  fill(fill_color);
  stroke(stroke_color);
  if (frameCount % 3 == 0) {
    curr_word = wordsList[frameCount % wordsList.length];
    textSize(40);
    text(curr_word, mouseX, mouseY);
  }
}

