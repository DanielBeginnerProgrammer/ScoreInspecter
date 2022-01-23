var marks = [0,0,0,0,0];
var MARK0;
var MARK1;
var MARK2;
var MARK3;
var MARK4;

function score_average(num0,num1,num2,num3,num4,media,aluno) {
MARK0=num0;
MARK1=num1;
MARK2=num2;
MARK3=num3;
MARK4=num4;
marks[0]=MARK0;
marks[1]=MARK1;
marks[2]=MARK2;
marks[3]=MARK3;
marks[4]=MARK4;
var MarksSum = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];
var avg = MarksSum / marks.length;
console.log(avg);
if (avg<media) {
  console.log(aluno+" não passou.");
} else {
  console.log(aluno+" passou.");
}
}

function setup() {
  createCanvas(400, 400);
  //use "score_average" para calcular notas
  //use "score_average" to calculate score
  score_average(70,70,70,50,100,70,"Daniel");
  score_average(39,30,90,55,59,60,"Arthur");
}

function draw() {

  background(255);

}
