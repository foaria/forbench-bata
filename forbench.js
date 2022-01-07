/*
©foaria
Created by Gensokyo-Kenken
*/
var score={};
let child_score = undefined;
let child = require('child_process').fork('fork.js')
console.log('plus');
var time = Math.floor(new Date()/1000);
for(var i=0; Math.floor(new Date()/1000)-time <3; i++){
}
console.log(Math.floor(i / 3 *100)/100+'loop/s');
score['plus']=Math.floor(Math.floor(i / 3)/100);

console.log('random');
time = Math.floor(new Date()/1000);
for(var i=0; Math.floor(new Date()/1000)-time <3; i++){
  Math.random();
}
console.log(Math.floor(i / 3 *100)/100+'loop/s');
score['random']=Math.floor(Math.floor(i / 3)/100);

console.log('JSON Parse');
time = Math.floor(new Date()/1000);
for(var i=0; Math.floor(new Date()/1000)-time <3; i++){
  JSON.parse('{"forbenchmark":"test"}')
}
console.log(Math.floor(i / 3 *100)/100+'loop/s');
score['JSON Parse']=Math.floor(Math.floor(i / 3)/100);

console.log('JSON Stringify');
time = Math.floor(new Date()/1000);
for(var i=0; Math.floor(new Date()/1000)-time <3; i++){
  JSON.stringify({"forbenchmark":"test"})
}
console.log(Math.floor(i / 3 *100)/100+'loop/s');
score['JSON Stringify']=Math.floor(Math.floor(i / 3)/100);

console.log('BigInt Exponentiation');
time = Math.floor(new Date()/1000);
for(var i=0; Math.floor(new Date()/1000)-time <3; i++){
  2n**65536n;
}
console.log(Math.floor(i / 3 *100)/100+'loop/s');
score['BigInt Exponentiation']=Math.floor(Math.floor(i / 3)/100);

console.log('encode URI');
time = Math.floor(new Date()/1000);
for(var i=0; Math.floor(new Date()/1000)-time <3; i++){
  encodeURIComponent("ｆｏｒbenｃhmａｒk");
}
console.log(Math.floor(i / 3 *100)/100+'loop/s');
score['encode URI']=Math.floor(Math.floor(i / 3)/100);

console.log('decode URI');
time = Math.floor(new Date()/1000);
for(var i=0; Math.floor(new Date()/1000)-time <3; i++){
  decodeURIComponent('%EF%BD%86%EF%BD%8F%EF%BD%92ben%EF%BD%83hm%EF%BD%81%EF%BD%92k');
}
console.log(Math.floor(i / 3 *100)/100+'loop/s');
score['decode URI']=Math.floor(Math.floor(i / 4)/100);

console.log('floor');
time = Math.floor(new Date()/1000);
for(var i=0; Math.floor(new Date()/1000)-time <3; i++){
  Math.floor(3109.32514);
}
console.log(Math.floor(i / 3 *100)/100+'loop/s');
score['floor']=Math.floor(Math.floor(i / 3)/100);

console.log('BigInt division')
time = Math.floor(new Date()/1000);
for(var i=0; Math.floor(new Date()/1000)-time <3; i++){
  78437964534n/325463445n
}
console.log(Math.floor(i / 3 *100)/100+'loop/s');
score['BigInt division']=Math.floor(Math.floor(i / 3)/100);

//Get from fork
child.on("message", function (msg) {
  child_score = msg;
});
while(child_score){
  console.log(child_score)
}
for(const key in score){
  score[key] += score[key];
}
//result output
console.table(score);
console.log('total: '+((result)=>{
  let score=0;
  for(const property in result){
    score+=result[property];
  }
  return Math.floor(score/10)/10;
})(score)+'pt');

