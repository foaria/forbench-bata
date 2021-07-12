/*
©foaria
Created by Gensokyo-Kenken
*/
var score={};
var time = Math.floor(new Date()/1000);
for(var i=0; Math.floor(new Date()/1000)-time <4; i++){
  }
console.log(Math.floor(i / 4 *100)/100+'loop/s');
score['plus']=Math.floor(Math.floor(i / 4)/100);

time = Math.floor(new Date()/1000);
for(var i=0; Math.floor(new Date()/1000)-time <4; i++){
  Math.random();
}
console.log(Math.floor(i / 4 *100)/100+'loop/s');
score['random']=Math.floor(Math.floor(i / 4)/100);

time = Math.floor(new Date()/1000);
for(var i=0; Math.floor(new Date()/1000)-time <4; i++){
  JSON.parse('{"forbenchmark":"test"}')
}
console.log(Math.floor(i / 4 *100)/100+'loop/s');
score['JSON Parse']=Math.floor(Math.floor(i / 4)/100);

time = Math.floor(new Date()/1000);
for(var i=0; Math.floor(new Date()/1000)-time <4; i++){
  JSON.stringify({"forbenchmark":"test"})
}
console.log(Math.floor(i / 4 *100)/100+'loop/s');
score['JSON Stringify']=Math.floor(Math.floor(i / 4)/100);

time = Math.floor(new Date()/1000);
for(var i=0; Math.floor(new Date()/1000)-time <4; i++){
  2n**65536n;
}
console.log(Math.floor(i / 4 *100)/100+'loop/s');
score['BigInt Exponentiation']=Math.floor(Math.floor(i / 4)/100);

time = Math.floor(new Date()/1000);
for(var i=0; Math.floor(new Date()/1000)-time <4; i++){
  encodeURIComponent("ｆｏｒbenｃhmａｒk");
}
console.log(Math.floor(i / 4 *100)/100+'loop/s');
score['encode URI']=Math.floor(Math.floor(i / 4)/100);

time = Math.floor(new Date()/1000);
for(var i=0; Math.floor(new Date()/1000)-time <4; i++){
  decodeURIComponent('%EF%BD%86%EF%BD%8F%EF%BD%92ben%EF%BD%83hm%EF%BD%81%EF%BD%92k');
}
console.log(Math.floor(i / 4 *100)/100+'loop/s');
score['decode URI']=Math.floor(Math.floor(i / 4)/100);

time = Math.floor(new Date()/1000);
for(var i=0; Math.floor(new Date()/1000)-time <4; i++){
  Math.floor(3109.32514);
}
console.log(Math.floor(i / 4 *100)/100+'loop/s');
score['floor']=Math.floor(Math.floor(i / 4)/100);

//result output
console.table(score);
console.log('total: '+((result)=>{
  let score=0;
  for(const property in result){
    score+=result[property];
  }
  return Math.floor(score/10);
})(score)+'pt');
