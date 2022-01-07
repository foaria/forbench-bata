var score={};
var time = Math.floor(new Date()/1000);
for(var i=0; Math.floor(new Date()/1000)-time <3; i++){
}
score['plus']=Math.floor(Math.floor(i / 3)/100);

time = Math.floor(new Date()/1000);
for(var i=0; Math.floor(new Date()/1000)-time <3; i++){
  Math.random();
}
score['random']=Math.floor(Math.floor(i / 3)/100);

time = Math.floor(new Date()/1000);
for(var i=0; Math.floor(new Date()/1000)-time <3; i++){
  JSON.parse('{"forbenchmark":"test"}')
}
score['JSON Parse']=Math.floor(Math.floor(i / 3)/100);

time = Math.floor(new Date()/1000);
for(var i=0; Math.floor(new Date()/1000)-time <3; i++){
  JSON.stringify({"forbenchmark":"test"})
}
score['JSON Stringify']=Math.floor(Math.floor(i / 3)/100);

time = Math.floor(new Date()/1000);
for(var i=0; Math.floor(new Date()/1000)-time <3; i++){
  2n**65536n;
}
score['BigInt Exponentiation']=Math.floor(Math.floor(i / 3)/100);

time = Math.floor(new Date()/1000);
for(var i=0; Math.floor(new Date()/1000)-time <3; i++){
  encodeURIComponent("ｆｏｒbenｃhmａｒk");
}
score['encode URI']=Math.floor(Math.floor(i / 3)/100);

time = Math.floor(new Date()/1000);
for(var i=0; Math.floor(new Date()/1000)-time <3; i++){
  decodeURIComponent('%EF%BD%86%EF%BD%8F%EF%BD%92ben%EF%BD%83hm%EF%BD%81%EF%BD%92k');
}
score['decode URI']=Math.floor(Math.floor(i / 4)/100);

time = Math.floor(new Date()/1000);
for(var i=0; Math.floor(new Date()/1000)-time <3; i++){
  Math.floor(3109.32514);
}
score['floor']=Math.floor(Math.floor(i / 3)/100);

time = Math.floor(new Date()/1000);
for(var i=0; Math.floor(new Date()/1000)-time <3; i++){
  78437964534n/325463445n
}
score['BigInt division']=Math.floor(Math.floor(i / 3)/100);

//result output
process.send(score);
