var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var w = canvas.width;
var h = canvas.height;
var score=0;
var degree=0;
var x, width , gap, minW, maxW, minG, maxG,y1,y2,d;
x = w;
y1=0;
d=Math.floor(Math.random()*(200-100+1)+100);
y2=y1+d;
y3=Math.floor(Math.random()*(150-10+1)+10);
minW = 30;
maxW = 200;
width = Math.floor(Math.random()*(maxW-minW+1)+minW);
minG=80;
maxG = 100;
gap =Math.floor(Math.random()*(maxG-minG+1)+minG);
var collision;
var myObstacles = [];

function startGame() {
  
    myGameArea.start();
}

var myGameArea = {
    canvas : document.getElementById("canvas"),
    start : function() {
        this.canvas.width = 400;
        this.canvas.height = 600;
        this.context = this.canvas.getContext("2d");
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 50);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

function component(width, height, color, x, y) {
    this.width = width;
   
    this.height = height;   
    this.x = x;
    this.y = y;    
    this.update = function() {
         ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
       
        
    }
}
   /*var crash=function(circle,rect){
        var distX = Math.abs(circle.x - rect.x-rect.width/2);
        var distY = Math.abs(circle.y - rect.y-rect.height/2);
        var crash=true;
         if ((distX > (rect.width/2 + circle.r)) || (distY > (rect.height/2 + circle.r)))
         {crash=false;}
            return crash;
    }*/
        
    
function crash(){
    ctx.isPointInpath(myObstacles[i],)
}

function updateGameArea() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
    /*for(i=0;i<myObstacles.length;i+=1){
        if(crash(blueC,myObstacles[i])){
            myGameArea.stop();
            
            return;
        }
    }*/
   
ctx.beginPath();
ctx.fillStyle="rgb(0,0,0)";
ctx.fillRect(0,0,400,600);
ctx.closePath();
    myGameArea.clear();
    myGameArea.frameNo += 1;
    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        x = myGameArea.canvas.width;
        d=Math.floor(Math.random()*(200-100+1)+100);
        y1=0;
        y2=y1+d;

        minHeight = 30;
        maxHeight = 200;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        minGap = 50;
        maxGap = 100;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
        myObstacles.push(new component(height, 30, "white", 0, y1));
        myObstacles.push(new component(x - height - gap,30 , "white", height + gap,y2));
    }
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].y += 3;
        myObstacles[i].update();
    }
    orbit.draw();
blue.draw(w/2-100,h/1.3,13);
red.draw(w/2+100,h/1.3,13);
dscore();
dlife();
    line();
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}

 /*function blueC (x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
    }
    var blue={
        x:200,
        y:460,
        r:50,
        blueC:function(){
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();}


    }*/


    var orbit ={
        draw:
        function(){
        ctx.beginPath();
        ctx.arc(w/2, h/1.3 , 100, 0, Math.PI * 2);
        ctx.strokeStyle = "rgb(255,255,255)";
        ctx.stroke();
        ctx.closePath();
        }
    };
var red ={  x:w/2+100,
        y:h/1.3,
        r:13,
        draw:
        function(a,b,c){
        ctx.beginPath();
        ctx.arc(a,b,c, 0, Math.PI * 2);
        ctx.fillStyle = "rgb(255,0,0)";
        ctx.fill();
        ctx.closePath();
        }
    };
var blue ={ 
        x:w/2-100,
        y:h/1.3,
        r:13,
        draw:
        function(a,b,c){
        ctx.beginPath();
        ctx.arc(a,b,c, 0, Math.PI * 2);
        ctx.fillStyle = "rgb(0,150,255)";
        ctx.fill();
        ctx.closePath();
        }
    };
var dscore = function(score) {
    ctx.font = "17px Oswald ";
    ctx.fillStyle = "white";
    ctx.fillText("SCORE:10 " + score,10,20);
}
var dlife = function(life) {
    ctx.font = "17px Oswald";
    ctx.fillStyle = "white";
    ctx.fillText("LIFE:10 " + life,200,20);
}

function clear(){
ctx.fillStyle="rgba(255,255,255,0.5)";
ctx.clearRect(0,0,w,h);
}
function line(){
    ctx.beginPath();
    ctx.fillStyle="white";
    ctx.rect(0,28,400,2);
    ctx.fill();
    ctx.closePath();
  }
  
/*function collision(){

t1=false;
t2=false;
t3=false;
t4=false;
ctx.beginPath();
ctx.rect(0,y1-13,width+13,30);
t1=ctx.isPointInPath(blue.x,blue.y)
t2=ctx.isPointInPath(red.x,red.y)
ctx.closePath();

ctx.beginPath();
ctx.rect(height+gap+13,y2-13,x-width-gap+13,30);
t3=ctx.isPointInPath(red.x,red.y)
t4=ctx.isPointInPath(blue.x,blue.y)
ctx.closePath();
if(t1||t2||t3||t4){
   alert("over");
}

}
/*function gameover(){
ctx.fillStyle="rgba(0,0,0,0.5)"
document.getElementById("over").innerHTML="GAME OVER";
dscore(score);



}*/

window.addEventListener("keydown",anti,false);
window.addEventListener("keyup",unanti,true);

window.addEventListener("keydown",clck,false);
window.addEventListener("keyup",unanti,true);
function unanti(e){
    if(e.keyCode=="65"||e.keyCode=="68")
 {
    ;
}}

function clck(e){
if(e.keyCode=="68")
degree+=(Math.PI*2)/50;

 ctx.save();
 ctx.translate(200,460);        
 ctx.rotate(degree);
 red.draw(100,0,13);
 blue.draw(-100,0,13);
 ctx.restore();
}

function anti(e){
if(e.keyCode=="65"){
degree-=(Math.PI*2)/60;
ctx.save();
ctx.translate(w/2,h/1.3);        
ctx.rotate(degree);
red.draw(w/2+100,h/1.3,13);
blue.draw(w/2-100,h/1.3,13);
ctx.restore();

}}


