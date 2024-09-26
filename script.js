// let lyrics;
// let wordList;
// function preload() {
//   //load our assets
//   lyrics = loadStrings('./assets/lyrics.txt');
//   console.log(lyrics);
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(250);

//   //how do we go from text file to list of words, list of lines to list of words
//   // for each line inside lyrics, run this split code
//   //save tjpse wprds omtp tje wordlist
//   lyrics.forEach((line) => {
//     wordList.push(...line.split(' '));
//   });

//   console.log(wordList);

// }

// function draw() {
//   // let currWord = "hello";
//   // text(currWord, mouseX, mouseY);
//   ellipse(mouseX, mouseY, 50, 50);

// }

let backgroungImg;
let linesList = [];
let wordsList = [];
let stroke_color; 
let fill_color; 

function preload() {
  linesList = loadStrings('./assets/lyrics.txt');
  backgroundImg = loadImage('https://upload.wikimedia.org/wikipedia/en/4/49/Doja_Cat_-_Mooo%21.jpg', "doja cat moo");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250);
  strokeWeight(5);
  stroke_color = color('pink'); 
  fill_color = color('black');

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
  if (frameCount % 10 == 0) {
    curr_word = wordsList[frameCount % wordsList.length];
    textSize(50);
    text(curr_word, mouseX, mouseY);
  }
}