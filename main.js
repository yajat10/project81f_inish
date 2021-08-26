var canvas=document.getElementById("canvas_2");
var ctx=canvas.getContext("2d");
var color1="red"
var color2="blue"
var color3="yellow"
var color4="black"
var color5="green"
var color6="grey";
ctx.beginPath();
ctx.strokeStyle=color6;
ctx.lineWidth=3;
ctx.rect(150,143,430,200);
ctx.stroke()

ctx.beginPath();
ctx.strokeStyle=color2;
ctx.lineWidth=3;
ctx.arc(200,200,40,0,2*Math.PI)
ctx.stroke()

ctx.beginPath();
ctx.strokeStyle=color3;
ctx.lineWidth=3;
ctx.arc(238,250,40,0,2*Math.PI)
ctx.stroke()

ctx.beginPath();
ctx.strokeStyle=color4;
ctx.lineWidth=3;
ctx.arc(290,200,40,0,2*Math.PI)
ctx.stroke()

ctx.beginPath();
ctx.strokeStyle=color5;
ctx.lineWidth=3;
ctx.arc(340,250,40,0,2*Math.PI)
ctx.stroke()

ctx.beginPath();
ctx.strokeStyle=color1;
ctx.lineWidth=3;
ctx.arc(390,200,40,0,2*Math.PI)
ctx.stroke()