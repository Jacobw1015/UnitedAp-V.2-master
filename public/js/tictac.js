//variables
let squares = document.getElementsByClassName('tic');
let resetButton = document.getElementById('button2');
let button=document.getElementById('button3');
let newArr = ['X','O','&lt;&gt;&lt;'];
let player1 =newArr[0];
let player2 = newArr[1];
	console.log('Player 1 is: '+player1,'\nPlayer 2 is: '+player2)
let player1Turn = true;
let player2Turn = false;
let xS = 0;let oS = 0;
let playerTurn = document.getElementById('player-turn');
let winner = document.getElementById('winner');
let gameStart = true;
let rowArr=['row1','row2','row3','row4','row5'];
let rowCount=0;let p1=0;let p2=0; 

//functions
function isFish(square){
		if(square.innerHTML===newArr[2]){
			return true;
		}else{
			return false;
		}
		}
	

function setFish(){
	let fishNum=5;
		while(fishNum!==0){
			let random = Math.floor(Math.random()*25);
			squares[random].innerHTML=newArr[2];
			if(squares[random].innerHTML==newArr[2]){
				squares[random].style.backgroundColor='white';
				
				
			}
			fishNum--;
		}
		
	}
	setFish();
function xCount(){
	xS++;
	return xS;
}
playerTurn.onclick=()=>{
	
	let turn = ['Player 1 Turn','Player 2 Turn'];
	let random = Math.floor(Math.random()*3);
	if(gameStart){
	playerTurn.innerHTML = turn[random];
	playersTurn();
gameStart = false;}
	
};
function playersTurn(){
	if(player1Turn){
		player1Turn = false;
		playerTurn.innerHTML = 'Player 1 Turn';		
	}else if(!player1Turn){
		player1Turn = true;
		playerTurn.innerHTML = 'Player 2 Turn';
	}
	
}
function oCount(){
	oS++;
	return oS;
} 
function getIds(){
	
	for(let i=0; i<squares.length;i++){
		
		let isWhite = false;
		squares[i].onclick = ()=>{
			if(!gameStart&&(!isWhite||squares[i].style.backgroundColor=='')){
				squares[i].style.backgroundColor='white';
				
				let random = Math.floor(Math.random()*3);
				//squares[i].innerHTML = newArr[random];
				
				if(playerTurn.innerHTML === 'Player 1 Turn'){
					if(!isFish(squares[i])){
						
					squares[i].innerHTML = newArr[0];
					document.getElementById('playerx').innerHTML = "Player 1's X Counter: "+ xCount();
					playersTurn();}
					if(rowCheck()||colCheck()||diagCheck()){
						playerTurn.innerHTML='Player 1 Wins!';
						gamePoint();
		alert('Player 1 Wins! New Game');
		resetAllButton();
		player1Turn= false;
		
	}
				}else if(playerTurn.innerHTML === 'Player 2 Turn'){
					if(!isFish(squares[i])){
					squares[i].innerHTML = newArr[1];
					document.getElementById('playero').innerHTML = "Player 2's O Counter: "+ oCount();
				playersTurn();}
	       if(rowCheck()||colCheck()||diagCheck()){
			playerTurn.innerHTML='Player 2 Wins!';
			gamePoint()
		alert('Player 2 Wins! New Game');
		resetAllButton();
		player1Turn= true;
	}
				}
			isWhite=true;}
	}
	}
}
	function rowBreak(){
		let arr=[];let newerArr =[];
			for(let i=0;i<squares.length;i++){
				arr.push(squares[i]);
			
			}
			for(let j=0;j<arr.length;j+=5){
					let group =arr.slice(j,j+5);
					newerArr.push(group);
			}
			  
			return newerArr;
			/*converts row id's into nested Array
			after looking at colCheck() function, not sure if this function is neccessary.
			YOLO am I right?*/
	}

	function colCheck(){
		//converts columns class into nested Array.
		let column1=Array.from(document.getElementsByClassName('col1'));
		let column2=Array.from(document.getElementsByClassName('col2'));
		let column3=Array.from(document.getElementsByClassName('col3'));
		let column4=Array.from(document.getElementsByClassName('col4'));
		let column5=Array.from(document.getElementsByClassName('col5'));
		let columns=[column1,column2,column3,column4,column5];
		//iterates through nested Array and completes checks.
		for(let i=0;i<columns.length;i++){
			if((columns[i][0].innerHTML==="O"&&(columns[i][1].innerHTML==="O"&&columns[i][2].innerHTML==="O"))||(columns[i][0].innerHTML==="X"&&(columns[i][1].innerHTML==="X"&&columns[i][2].innerHTML==="X"))){
				return true;
		}else if((columns[i][1].innerHTML==="O"&&(columns[i][2].innerHTML==="O"&&columns[i][3].innerHTML==="O"))||(columns[i][1].innerHTML==="X"&&(columns[i][2].innerHTML==="X"&&columns[i][3].innerHTML==="X"))){
			return true;
		}else if((columns[i][2].innerHTML==="O"&&(columns[i][3].innerHTML==="O"&&columns[i][4].innerHTML==="O"))||(columns[i][2].innerHTML==="X"&&(columns[i][3].innerHTML==="X"&&columns[i][4].innerHTML==="X"))){
			return true;
		}
	}
	}
	function rowCheck(){
		for(let i=0;i<rowBreak().length;i++){
			if((rowBreak()[i][0].innerHTML==="O"&&(rowBreak()[i][1].innerHTML==="O"&&rowBreak()[i][2].innerHTML==="O"))||(rowBreak()[i][0].innerHTML==="X"&&(rowBreak()[i][1].innerHTML==="X"&&rowBreak()[i][2].innerHTML==="X"))){
				return true;
			}else if((rowBreak()[i][1].innerHTML==="O"&&(rowBreak()[i][3].innerHTML==="O"&&rowBreak()[i][2].innerHTML==="O"))||(rowBreak()[i][1].innerHTML==="X"&&(rowBreak()[i][3].innerHTML==="X"&&rowBreak()[i][2].innerHTML==="X"))){
				return true;
			}else if((rowBreak()[i][4].innerHTML==="O"&&(rowBreak()[i][3].innerHTML==="O"&&rowBreak()[i][2].innerHTML==="O"))||(rowBreak()[i][2].innerHTML==="X"&&(rowBreak()[i][3].innerHTML==="X"&&rowBreak()[i][4].innerHTML==="X"))){
				return true;
			}
			
		}
	}
	function diagCheck(){
		
		let dia1 = Array.from(document.getElementsByClassName('dia1'));
		let dia2 = Array.from(document.getElementsByClassName('dia2'));
		let dia3 = Array.from(document.getElementsByClassName('dia3'));
		let dia4 = Array.from(document.getElementsByClassName('dia4'));
		let dia5 = Array.from(document.getElementsByClassName('dia5'));
		let dia6 = Array.from(document.getElementsByClassName('dia6'));
		let dia7 = Array.from(document.getElementsByClassName('dia7'));
		let dia8 = Array.from(document.getElementsByClassName('dia8'));
		let dia9 = Array.from(document.getElementsByClassName('dia9'));
		let dia10 = Array.from(document.getElementsByClassName('dia10'));
		let duo = [dia1,dia2];
		let dias = [dia3,dia4,dia5,dia6,dia7,dia8,dia9,dia10];
		for(let q=0;q<dias.length;q++){
			if(dias[q].length===4){
				if((dias[q][0].innerHTML==='X'&&dias[q][1].innerHTML==='X'&&dias[q][2].innerHTML==='X')||(dias[q][1].innerHTML==='X'&&dias[q][2].innerHTML==='X'&&dias[q][3].innerHTML==='X')){
					return true;
				}else if((dias[q][0].innerHTML==='O'&&dias[q][1].innerHTML==='O'&&dias[q][2].innerHTML==='O')||(dias[q][1].innerHTML==='O'&&dias[q][2].innerHTML==='O'&&dias[q][3].innerHTML==='O')){
					return true;
				}
			}else if(dias[q].length===3){
					if((dias[q][0].innerHTML==='X'&&dias[q][1].innerHTML==='X'&&dias[q][2].innerHTML==='X')){
						return true;
					}else if((dias[q][0].innerHTML==='O'&&dias[q][1].innerHTML==='O'&&dias[q][2].innerHTML==='O')){
						return true;
					}
			}
			
		}
		for(let i =0;i<duo.length;i++){
		 if((duo[i][0].innerHTML==='X'&&duo[i][1].innerHTML==='X'&&duo[i][2].innerHTML==='X')||(duo[i][1].innerHTML==='X'&&duo[i][2].innerHTML==='X'&&duo[i][3].innerHTML==='X')||(duo[i][3].innerHTML==='X'&&duo[i][2].innerHTML==='X'&&duo[i][4].innerHTML==='X')){
			return true;
		}else if((duo[i][0].innerHTML==='O'&&duo[i][1].innerHTML==='O'&&duo[i][2].innerHTML==='O')||(duo[i][1].innerHTML==='O'&&duo[i][2].innerHTML==='O'&&duo[i][3].innerHTML==='O')||(duo[i][3].innerHTML==='O'&&duo[i][2].innerHTML==='O'&&duo[i][4].innerHTML==='O')){
			return true;
		}
		}
	}
	function gamePoint(){
		
		if(playerTurn.innerHTML==='Player 2 Wins!'){
			 document.getElementById('playero1').innerHTML=`Player 2's Game Counter: ${++p2}`;
		}else if(playerTurn.innerHTML==='Player 1 Wins!'){
			document.getElementById('playerx1').innerHTML=`Player 1's Game Counter: ${++p1}`;
		}
		
	}
	function resetGamePoints(){
		document.getElementById('playero1').innerHTML=`Player 2's Game Counter: ${p2=0}`;
		document.getElementById('playerx1').innerHTML=`Player 1's Game Counter: ${p1=0}`;
	}

function resetAllButton(){
		for(let i=0;i<squares.length;i++){
			squares[i].style.backgroundColor='';squares[i].innerHTML='';
		}
		playerTurn.innerHTML='Start Game';
		
		document.getElementById('playerx').innerHTML = "Player 1's X Counter: "+0;
		document.getElementById('playero').innerHTML = "Player 2's O Counter: "+0;
		gameStart = true;
		fishCount=0;
		oS=0;xS=0;
		setFish();
	}
resetButton.addEventListener('click',resetAllButton);button.addEventListener('click',resetGamePoints);	
getIds();


	

		