var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");

var posXY = [[0,0],[83,25],[140,25],[170,10],[230,10],[293,10],[356,10],[0,88],[0,85],[0,265]]
var index = 0;

ctx.beginPath();
ctx.fillStyle='red'
ctx.rect(posXY[index][0],posXY[index][1],50,50)
ctx.fill()
ctx.closePath();

index++ ;

ctx.beginPath();
ctx.fillStyle='red'
ctx.arc(posXY[index][0],posXY[index][1],25,0, 2*Math.PI)
ctx.fill()
ctx.closePath();

index++ ;

ctx.beginPath();
ctx.fillStyle='blue'
ctx.arc(posXY[index][0],posXY[index][1],22,0, 2*Math.PI)
ctx.strokeStyle = "blue"
ctx.lineWidth = 5;
ctx.stroke()
ctx.closePath();

index++ ;

ctx.beginPath();
ctx.fillStyle='red';
ctx.moveTo(posXY[index][0],posXY[index][1])
ctx.lineTo(posXY[index][0]+25,posXY[index][1]+35)
ctx.lineTo(posXY[index][0]+50,posXY[index][1])
ctx.fill();
ctx.closePath();

index++ ;

ctx.beginPath();
ctx.strokeStyle='red';
ctx.lineWidth=3
ctx.moveTo(posXY[index][0],posXY[index][1])
ctx.lineTo(posXY[index][0]+25,posXY[index][1]+35)
ctx.lineTo(posXY[index][0]+50,posXY[index][1])
ctx.stroke();
ctx.closePath();

index++ ;

var grd = ctx.createLinearGradient(posXY[index][0],posXY[index][1],
posXY[index][0]+50,posXY[index][1]);
grd.addColorStop(0, "red");
grd.addColorStop(1, "blue");

ctx.beginPath();
ctx.fillStyle=grd
ctx.fillRect(posXY[index][0],posXY[index][1],50,40)
ctx.closePath();

index++ ;

var grd = ctx.createLinearGradient(posXY[index][0],posXY[index][1],
posXY[index][0]+50,posXY[index][1]);
grd.addColorStop(0, "orange");
grd.addColorStop(1, "aqua");

ctx.beginPath();
ctx.strokeStyle=grd
ctx.strokeRect(posXY[index][0],posXY[index][1],50,40)
ctx.closePath();

index++ ;

var textGrd = ctx.createLinearGradient(posXY[index][0]+180,posXY[index][1],posXY[index][0]+270,posXY[index][1])
textGrd.addColorStop(0,'purple');
textGrd.addColorStop(1,'orange');

ctx.beginPath();
ctx.strokeStyle='green'
ctx.lineWidth=1
ctx.font='32px Arial';
ctx.strokeText('Hello',posXY[index][0],posXY[index][1])
ctx.fillStyle="orange"
ctx.fillText('Hello',posXY[index][0]+90,posXY[index][1])
ctx.fillStyle=textGrd
ctx.fillText('Hello',posXY[index][0]+180,posXY[index][1])
ctx.closePath();

index++ ;

var image = document.getElementById('source');

ctx.beginPath();
// смещение по x,y , размеры , позиция , размеры
ctx.drawImage(image,posXY[index][0]+30,posXY[index][1]+0,570,350,0,105,250,150)
ctx.closePath();

index++ ;

var grd = ctx.createRadialGradient(posXY[index][0],posXY[index][1], 5,
posXY[index][0],posXY[index][1], 100 , 5);
grd.addColorStop(0, "orange");
grd.addColorStop(1, "red");

ctx.beginPath();
ctx.fillStyle = grd;
ctx.fillRect(posXY[index][0],posXY[index][1],200,120)
ctx.closePath();

var ctx = document.getElementById('animations').getContext('2d');

function draw(){

	ctx.fillStyle="blue";
	ctx.clearRect(0,0,400,400)

	ctx.save();

	ctx.translate(200,200);

	var time = new Date();

	ctx.beginPath();
	ctx.strokeStyle="black"
	ctx.arc(0,0,125,0,25*Math.PI*2);
	ctx.stroke();
	ctx.closePath();

	ctx.rotate(((2*Math.PI)/60)*time.getSeconds()+((2*Math.PI)/60000)*time.getMilliseconds())
	ctx.translate(125,0);

	ctx.beginPath();
	ctx.fillStyle="red";
	ctx.fillRect(-25,-25,50,50);
	ctx.closePath();

	ctx.rotate(15*(((2*Math.PI)/60)*time.getSeconds()+((2*Math.PI)/60000)*time.getMilliseconds()))
	ctx.translate(25,0);
  
	ctx.beginPath();
	ctx.fillStyle="blue";
	ctx.fillRect(0,0,25,25);
	ctx.closePath();

	ctx.restore();
	window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);