//Variables
var ball = document.getElementById("new-element");
var renew = document.getElementById("button1");
let color= ball.style;


//img pictures
let green = "https://i.ebayimg.com/images/i/371655816684-0-1/s-l1000.jpg";
let reg = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Circle_-_black_simple.svg/1200px-Circle_-_black_simple.svg.png";
//functions
function clear(){ball.style.height = "250px";ball.style.width = '250px';color.backgroundColor = '';}
function bigger(){ball.style.width = '350px';	ball.style.height= '350px';}
function smaller(){ball.style.width = '150px';	ball.style.height= '150px';}

ball.onclick = ()=>{
	if(ball.style.width==='250px'){
		let randomColor = '#'+Math.floor(Math.random()* 16777215).toString(16);
		console.log(randomColor);
		color.backgroundColor = randomColor;
		bigger();
	}
	else{
		
		clear()
	}
};
renew.onclick=()=>{
	if(ball.style.width==='350px'||ball.style.width==='250px'){
		let randomColor2 = '#'+Math.floor(Math.random()* 16777215).toString(16);
		console.log(randomColor2);
		color.backgroundColor = randomColor2;
		smaller();
	}
	else{
		
		clear()
		}
};


