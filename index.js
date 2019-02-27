const xCount = 20;
const yCount = 30;
function createBoard(xCount, yCount) {
	for (let  i = 0; i < xCount * yCount; i ++) {
			let divSquare = document.createElement('div');
			mainContainer.appendChild(divSquare);
			divSquare.classList.add ('squareItem')
	}
}

createBoard(xCount, yCount);

let parentDivChildren = document.getElementById('mainContainer').children;
let temp = 'firstRotate';
let mapResultArr = [];
let temporaryArr= [];
let cordinatsItem = [];
let everytimeArr = [];
let moved = false;
let points = 0;
let line = 0;
let counterForLosing = true;
let intervalId;
let stateGame = 'start';
let speedDown = 0;
let musicPlay = false;



let moveUp = function (e) {
	
	if (e.keyCode === 38 ){
		cordinatsItem.sort((a, b) => a - b);
		if (cordinatsItem[3] > 39 && stateGame !== 'continue') {
			document.getElementById('alarm').src = 'audio/click2.mp3';
		}
		if (stateGame !== 'continue') {
			switch( cordinatsItem[4]) {
				case 'O':
					return 0;
				case 'I': {
					
					if (temp === 'firstRotate') {
						let temporaryArr = [];
						let originRotateFigure = cordinatsItem[2];
						let counter = 0;
						temporaryArr.push(
							originRotateFigure-20,
							originRotateFigure,
							originRotateFigure + 20,
							originRotateFigure + 40
						);
						
						for (let i = 0; i < 4; i ++) {
							
							if ((temporaryArr[i] < 600 && mapResultArr.indexOf( temporaryArr[i]) === -1) && (temporaryArr[i]> -1)) {
								counter += 1;
							}
							else {
								return 0;
							}
						}
							
						for (let i = 3; i >= 0; i --) {
							parentDivChildren[cordinatsItem[i]].classList.remove('addColor');
							cordinatsItem [i] = temporaryArr[i];
							parentDivChildren[cordinatsItem[i]].classList.add('addColor');
						}
						
						temp = 'secondRotate';
						return 0;
					}	
					
					else if (temp === 'secondRotate') {
						let moved  = false;
						let originRotateFigure = cordinatsItem[1];
						if (cordinatsItem[1] % 20 === 19) {
							originRotateFigure -= 1;
						}
						if (cordinatsItem[1] % 20 === 0){
							originRotateFigure += 2;
							 moved = true;
						}
						if (cordinatsItem[1] % 20 === 1) {
							originRotateFigure += 1;
						}
						let temporaryArr = [];
						temporaryArr.push(
							originRotateFigure - 2,
							originRotateFigure - 1,
							originRotateFigure,
							originRotateFigure + 1
						);
						if (moved) {temporaryArr.sort((a, b) => b - a);
							moved = false;
						}
						for (let i = 0; i < 4; i ++) {
							
							if (mapResultArr.indexOf(temporaryArr[i]) === -1){
								continue;
							}
							else {
								return 0;
							}
						}
						
						for (let i = 0; i < 4; i ++) {
							parentDivChildren[cordinatsItem[i]].classList.remove('addColor');
							cordinatsItem[i] = temporaryArr[i];
							parentDivChildren[cordinatsItem[i]].classList.add('addColor');
						}
						temp = 'firstRotate'
						return 0;
					}
					
				}
				case 'S' : {
				
					if (temp === 'firstRotate') {
						let originRotateFigure = cordinatsItem[0];
						let temporaryArr = [];
						let counter = 0;
						temporaryArr.push(
							originRotateFigure - 20,
							originRotateFigure,
							originRotateFigure + 1,
							originRotateFigure + 21
						);
						
						for (let i = 0; i < 4; i ++) {
							if (mapResultArr.indexOf(temporaryArr[i]) === -1 && temporaryArr[i] > -1) {
								counter += 1;
							}
							else {
								return 0;
							}
						}
							
						for (let i = 0; i < 4; i ++) {
							parentDivChildren[cordinatsItem[i]].classList.remove('addColor');
							cordinatsItem[i] = temporaryArr [i];
							parentDivChildren[cordinatsItem[i]].classList.add('addColor');
						}
						temp = 'secondRotate';
						return 0;
					}
					else if (temp === 'secondRotate') {
						let originRotateFigure = cordinatsItem[1];
						if (cordinatsItem[1] % 20 === 0) {
							originRotateFigure += 1;
						}
						let temporaryArr = [];
						let counter = 0;
						temporaryArr.push(
							originRotateFigure,
							originRotateFigure + 1,
							originRotateFigure + 19,
							originRotateFigure + 20
						);
						
						for (let i = 0; i < 4; i ++) {
							
							if (mapResultArr.indexOf(temporaryArr[i]) === -1) {
								counter += 1;
							}
							else {return 0;}
						}
						
						for (let i = 3; i >=0 ; i --) {
							parentDivChildren[cordinatsItem[i]].classList.remove('addColor');
							cordinatsItem[i] = temporaryArr[i];
							parentDivChildren[cordinatsItem[i]].classList.add('addColor');
						}
						temp = 'firstRotate';
						return 0;
					}
					
				}
				case 'Z' : {
					
					if (temp === 'firstRotate') {
						let originRotateFigure = cordinatsItem[1];
						let temporaryArr = [];
						let counter;
						temporaryArr.push (
							originRotateFigure - 19,
							originRotateFigure,
							originRotateFigure + 1,
							originRotateFigure + 20
						);
						
						for (let  i = 0; i < 4; i ++) {
							
							if (mapResultArr.indexOf(temporaryArr[i]) === -1 && temporaryArr[i] > -1) {
								counter += 1;
							}
							else {return 0;}
						}
						
						for (let i = 0; i < 4; i ++) {
							parentDivChildren[cordinatsItem[i]].classList.remove('addColor');
							cordinatsItem[i] = temporaryArr[i];
							parentDivChildren[cordinatsItem[i]].classList.add('addColor');	
						} 
						temp = 'secondRotate';
						return 0;
					}
					else if (temp === 'secondRotate') {
						let originRotateFigure = cordinatsItem[1];
						
						if (originRotateFigure % 20 === 0) {
							originRotateFigure += 1;
						}
						let temporaryArr = [];
						let counter = 0;
						temporaryArr.push(
							originRotateFigure + 21,
							originRotateFigure + 20,
							originRotateFigure ,
							originRotateFigure - 1,
						);
						for (let i = 0; i < 4; i ++) {
							
							if (mapResultArr.indexOf(temporaryArr[i]) === -1) {
								counter += 1;
							}
							else {return 0;}
						}
						for (let i = 3; i >= 0; i --) {
							parentDivChildren[cordinatsItem[i]].classList.remove('addColor');
							cordinatsItem[i] = temporaryArr[3-i];
							parentDivChildren[cordinatsItem[i]].classList.add('addColor');	
						} 
						temp = 'firstRotate';
						return 0;
					}
					
				}
				case 'L' : {
				
					if (temp === 'firstRotate') {
						let originRotateFigure = cordinatsItem[1];
						let temporaryArr = [];
						let counter = 0;
						temporaryArr.push(
							originRotateFigure - 21,
							originRotateFigure - 20,
							originRotateFigure ,
							originRotateFigure + 20
						)
						for (let  i = 0; i < 4; i ++) {
							
							if (mapResultArr.indexOf(temporaryArr[i]) === -1 && temporaryArr[i] > -1) {
								counter += 1;
							}
							else {return 0;}
						}
						for (let i = 0; i < 4; i ++) {
							parentDivChildren[cordinatsItem[i]].classList.remove('addColor');
							cordinatsItem[i] = temporaryArr[i];
							parentDivChildren[cordinatsItem[i]].classList.add('addColor');
						}
						temp = 'secondRotate';
						return 0;
					}
					if (temp === 'secondRotate') {
						let originRotateFigure = cordinatsItem[2];
						if (originRotateFigure % 20 === 19) {
							originRotateFigure -= 1;
						}
						let temporaryArr = [];
						temporaryArr.push (
							originRotateFigure - 19,
							originRotateFigure - 1,
							originRotateFigure,
							originRotateFigure + 1
						)
						for (let i = 0; i < 4; i ++) {
							
							if (mapResultArr.indexOf(temporaryArr[i]) ===  -1) {
								continue;
							}
							else {
								return 0;
							}
						}
						for (let i = 0; i < 4; i ++) {
							parentDivChildren[cordinatsItem[i]].classList.remove('addColor');
							cordinatsItem[i] = temporaryArr[i];
							parentDivChildren[cordinatsItem[i]].classList.add('addColor');
						}
						temp = 'thirtyRotate';
						return 0;
					}
					if (temp === 'thirtyRotate') {
						let originRotateFigure = cordinatsItem[2];
						let temporaryArr = [];
						temporaryArr.push(
							 originRotateFigure + 21,
							 originRotateFigure + 20,
							 originRotateFigure - 20,
							 originRotateFigure
						);
						for (let i = 0; i < 4; i ++) {
							
							if (mapResultArr.indexOf(temporaryArr[i]) === -1 && temporaryArr[i] < 600) {
								continue;
							}
							else {
								return 0;
							}
						}
						for (let i = 0; i < 4; i ++) {
							parentDivChildren[cordinatsItem[i]].classList.remove('addColor');
							cordinatsItem[i] = temporaryArr[i];
							parentDivChildren[cordinatsItem[i]].classList.add('addColor');
						}
						temp = 'fortyRotate';
						return 0;
					}
					if (temp === 'fortyRotate') {
						let originRotateFigure = cordinatsItem[1];
						let temporaryArr = [];
						if (originRotateFigure % 20 === 0) {
							originRotateFigure += 1;
						}
						temporaryArr .push(
							originRotateFigure + 1,
							originRotateFigure ,
							originRotateFigure + 19,
							originRotateFigure - 1 ,
						);
						
						for (let  i = 0; i < 4; i ++) {
							
							if (mapResultArr.indexOf(temporaryArr[i]) === -1 && temporaryArr[i] < 600) {
								continue;
							}  
							else {
								return 0;
							}
						}
						for (let i = 0; i < 4; i ++) {
							parentDivChildren[cordinatsItem[i]].classList.remove('addColor');
							cordinatsItem[i] = temporaryArr[i];
							parentDivChildren[cordinatsItem[i]].classList.add('addColor');
						}
						temp = 'firstRotate';
						return 0;
					}
				}
				case 'J' : {
					
					if (temp === 'firstRotate') {
						let originRotateFigure = cordinatsItem[1];
						let temporaryArr = [];
						temporaryArr.push(
							originRotateFigure - 20,
							originRotateFigure,
							originRotateFigure + 19,
							originRotateFigure + 20
						)
						for (let i = 0; i < 4; i ++) {
							if (mapResultArr.indexOf(temporaryArr[i]) === -1 && temporaryArr[i] > -1) {
								continue;
							}
							else {
								return 0;
							}
						}
						for (let i = 0; i < 4; i ++) {
							parentDivChildren[cordinatsItem[i]].classList.remove('addColor');
							cordinatsItem[i] = temporaryArr[i];
							parentDivChildren[cordinatsItem[i]].classList.add('addColor');
						}
						temp = 'secondRotate';
						return 0;
					}
					if (temp === 'secondRotate') {
						let originRotateFigure = cordinatsItem[1];
						let temporaryArr = [];
						if (originRotateFigure % 20 === 19) {
							originRotateFigure -= 1;
						}
						temporaryArr.push(
							originRotateFigure - 21,
							originRotateFigure - 1,
							originRotateFigure,
							originRotateFigure + 1
						);
						
						for (let i = 0; i < 4 ; i ++) {
							if (mapResultArr.indexOf(temporaryArr[i]) === -1) {
								continue;
							}
							else {
								return 0;
							}
						}
						for (let i = 0; i < 4; i ++) {
							parentDivChildren[cordinatsItem[i]].classList.remove('addColor');
							cordinatsItem[i] = temporaryArr[i];
							parentDivChildren[cordinatsItem[i]].classList.add('addColor');
						}
						temp = 'thirtyRotate';
						return 0;
					}
					if (temp === 'thirtyRotate') {
						let originRotateFigure = cordinatsItem[2];
						let temporaryArr = [];
						temporaryArr.push (
							originRotateFigure - 20,
							originRotateFigure - 19,
							originRotateFigure,
							originRotateFigure + 20
						)
						
						for (let  i = 0; i < 4; i ++) {
							
							if (mapResultArr.indexOf(temporaryArr[i]) === -1 && temporaryArr[i] < 600) {
								continue;
							}
							else {
								return 0;
							}
						}
						for (let  i = 0; i < 4; i ++) {
							parentDivChildren[cordinatsItem[i]].classList.remove('addColor');
							cordinatsItem[i] = temporaryArr[i];
							parentDivChildren[cordinatsItem[i]].classList.add('addColor');
						}
						temp = 'fortyRotate';
						return 0;
					}
					if (temp === 'fortyRotate') {
						let originRotateFigure = cordinatsItem[2];
						let temporaryArr = [];
						if (originRotateFigure % 20 === 0) {
							originRotateFigure += 1;
						}
						temporaryArr.push(
							originRotateFigure + 21,
							originRotateFigure + 1,
							originRotateFigure,
							originRotateFigure - 1,
						)
						
						for (let i = 0; i < 4; i ++) {
							if (mapResultArr.indexOf(temporaryArr[i]) === -1) {
								continue;
							}
							else {
								return 0;
							}
						}
						
						for (let i = 0; i < 4; i ++) {
							parentDivChildren[cordinatsItem[i]].classList.remove('addColor');
							cordinatsItem[i] = temporaryArr[i];
							parentDivChildren[cordinatsItem[i]].classList.add('addColor');
						}
						temp = 'firstRotate';
						return 0;
					}
				}
				case 'T' : {
					
					if (temp === 'firstRotate') {
						let originRotateFigure = cordinatsItem[1];
						let temporaryArr = [];
						temporaryArr.push(
							originRotateFigure - 20,
							originRotateFigure - 1,
							originRotateFigure,
							originRotateFigure + 20
						);
						
						for (let i = 0; i < 4; i ++) {
							
							if (mapResultArr.indexOf(temporaryArr[i]) === -1 && temporaryArr[i] > -1) {
								continue;
							}
							else {
								return 0;
							}
						}
						for (let i = 0; i < 4; i ++) {
							parentDivChildren[cordinatsItem[i]].classList.remove('addColor');
							cordinatsItem[i] = temporaryArr[i];
							parentDivChildren[cordinatsItem[i]].classList.add('addColor');
						}
						temp = 'secondRotate';
						return 0;
					}
					if (temp === 'secondRotate') {
						let originRotateFigure = cordinatsItem[2];
						let temporaryArr = [];
						
						if (originRotateFigure % 20 === 19) {
							originRotateFigure -= 1;
						}
						temporaryArr.push(
							originRotateFigure - 20,
							originRotateFigure - 1,
							originRotateFigure,
							originRotateFigure + 1
						)
						
						for (let i = 0; i < 4; i ++) {
							
							if (mapResultArr.indexOf(temporaryArr[i]) === -1) {
								continue;
							}
							else {
								return 0;
							}
						}
						for (let i = 0; i < 4; i ++) {
							parentDivChildren[cordinatsItem[i]].classList.remove('addColor');
							cordinatsItem[i] = temporaryArr[i];
							parentDivChildren[cordinatsItem[i]].classList.add('addColor');
						}
						temp = 'thirtyRotate';
						return 0;
					}
					if (temp === 'thirtyRotate') {
						let originRotateFigure = cordinatsItem[2];
						let temporaryArr = [];
						temporaryArr.push(
							originRotateFigure + 20,
							originRotateFigure - 20,
							originRotateFigure,
							originRotateFigure + 1
						)
									
						for (let i = 0; i < 4; i ++) {
							
							if (mapResultArr.indexOf(temporaryArr[i]) === -1 && temporaryArr[i] < 600) {
								continue;
							}
							else {return 0;}
						}
						
						for (let i = 0; i < 4; i ++) {
							parentDivChildren[cordinatsItem[i]].classList.remove('addColor');
							cordinatsItem[i] = temporaryArr[i];
							parentDivChildren[cordinatsItem[i]].classList.add('addColor');
						}
						temp = 'fortyRotate';
						return 0;
					}
					if (temp === 'fortyRotate') {
						let originRotateFigure = cordinatsItem[1];
						let temporaryArr = [];
						if (originRotateFigure % 20 === 0) {
							originRotateFigure += 1;
						}
						temporaryArr.push (
							originRotateFigure - 1,
							originRotateFigure,
							originRotateFigure + 1,
							originRotateFigure + 20,	
						)
						for (let i = 0; i < 4; i ++) {
							
							if (mapResultArr.indexOf(temporaryArr[i]) === -1) {
								continue;
							}
							else {
								return 0;
							}
						}
						
						for (let i = 3; i >= 0; i --) {
							parentDivChildren[cordinatsItem[i]].classList.remove('addColor');
							cordinatsItem[i] = temporaryArr[i];
							parentDivChildren[cordinatsItem[i]].classList.add('addColor');
						}
						temp = 'firstRotate';
						return 0;
					}
				}
				
			}
		}
		else {
			return;
		}
	} 
	else {return};
	}
	
document.body.addEventListener("keydown", moveUp);

let moveDown = function (e){
		cordinatsItem.sort((a,b) => b - a);
		
		if (!e || e.keyCode === 40 && moved && stateGame !== 'continue'){
			
			
			
			
			for (let i = 0; i < 4; i ++) {
				let temp = cordinatsItem[i] + 20;
				
				if (temp < 600 && mapResultArr.indexOf(temp) === -1) {
					continue;
				}
				else {
					for (let i = 0; i < 4; i ++){
						mapResultArr.push(cordinatsItem[i]);
					}
					paint();
					document.getElementById('alarm').src = 'audio/click.mp3';
					getRandomItem();
					clearArr();
					addPoints();
					counterForLosing = true;
					
					
				}
			}
			if (counterForLosing) {
				
				for (let i = 0; i < 4; i ++) {
				
					if (mapResultArr.indexOf(cordinatsItem[i]) === -1) {
						continue;
					}
					else {
						gameOver();
						return;
					}
					
				}
				counterForLosing = false;
			}
			for (let i = 0; i < 4; i ++) {
				parentDivChildren[cordinatsItem[i]].classList.remove('addColor');
				cordinatsItem[i] = cordinatsItem[i] + 20;
				parentDivChildren[cordinatsItem[i]].classList.add('addColor');
			}
		}
	return;	
}
document.body.addEventListener("keydown",moveDown);
	
let toLeft = function (e) {
	
	if (e.keyCode === 37 ){
		cordinatsItem.sort((a, b) => a - b);
		
		if (cordinatsItem[3] > 39 && stateGame !== 'continue') {
			let moved = cordinatsItem.find( a => a % 20 === 0);
		
			if (moved) {	
				return;
			}
			let temporaryArr = [];
			for (let i = 0; i < 4; i ++) {
					
				if (mapResultArr.indexOf(cordinatsItem[i] - 1) === -1) {
					continue;
				}
				else { 
					return 0;
				}
			}
			
			for (let i = 0; i < 4; i ++) {
				parentDivChildren[cordinatsItem[i]].classList.remove('addColor');
				cordinatsItem[i] -= 1;
				parentDivChildren[cordinatsItem[i]].classList.add('addColor');
			}
		}
	}
	return;
}	
document.body.addEventListener("keydown", toLeft);

let toRight = function (e) {
	
	
	if (e.keyCode === 39){
		cordinatsItem.sort((a, b) => b - a);
		if (cordinatsItem[3] > 39 && stateGame !== 'continue') {
			let moved = cordinatsItem.find( a => a % 20 === 19);
			
			if (moved) {
				return 0;
			}
			let temporaryArr = [];
			let counter = 0;
			
			for (let i = 0; i < 4; i ++) {
					
				if (mapResultArr.indexOf(cordinatsItem[i] + 1) === -1) {
					continue;
				}
				else { 
					return 0;
				}
			}
			
			for (let i = 0; i < 4; i ++) {
				parentDivChildren[cordinatsItem[i]].classList.remove('addColor');
				cordinatsItem[i] += 1;
				parentDivChildren[cordinatsItem[i]].classList.add('addColor');	
			}
		}
	}
	return;
}


document.body.addEventListener("keydown", toRight);
	

function  getRandomItem(x = 10) {
	let allItems = [
		[x, x + 20, x + 19, x - 1 , 'O'],
		[x, x - 2 , x - 3 , x - 1 , 'I'],
		[x, x + 20, x + 19, x + 1 , 'S'],
		[x, x + 20, x + 21, x - 1 , 'Z'],
		[x, x + 19, x + 1 , x - 1 , 'L'],
		[x, x + 21, x + 1 , x - 1 , 'J'],
		[x, x + 20, x + 1 , x - 1 , 'T']	
	];
	temp = 'firstRotate';
	let currentItem = Math.floor(Math.random()*7);
	return cordinatsItem = allItems[currentItem];
}

function paint() {
	for (let i = 0; i < mapResultArr.length; i ++) {
		parentDivChildren[mapResultArr[i]].classList.remove('addColor');	
		parentDivChildren[mapResultArr[i]].classList.add('paint');	
	}
}

function clearArr (){
	mapResultArr.sort((a, b) => b-a);
	let endLineIndex = [
		599, 579, 559, 539, 519, 499, 479, 459, 439, 419,
		399, 379, 359, 339, 319, 299, 279, 259, 239, 219,
		199, 179, 159, 139, 119, 99, 79, 59
	];
	
	
	if (mapResultArr.length >= 20 ) {
		
		for (let i = 0; i < endLineIndex.length; i ++) {
			
			if (endLineIndex[i] > mapResultArr[mapResultArr.length - 1]) {
				
				if (mapResultArr.indexOf(endLineIndex[i]) !== -1) {
					let temp = mapResultArr.indexOf(endLineIndex[i]);
					
					if (mapResultArr[temp] - mapResultArr[temp + 19] === 19) {
						let markTheBeginning = mapResultArr[temp + 20];
						let temporaryArr = mapResultArr.splice(temp, 20);
						markTheBeginning = mapResultArr.indexOf(markTheBeginning);
						for (let i = 0; i < temporaryArr.length; i ++) {
							parentDivChildren[temporaryArr[i]].classList.remove('paint');
						}
						document.getElementById('alarm').src = 'audio/click4.mp3';
						for (let i = markTheBeginning; i < mapResultArr.length; i ++) {
							parentDivChildren[mapResultArr[i]].classList.remove('paint');
							mapResultArr[i] += 20;
							parentDivChildren[mapResultArr[i]].classList.add('paint');	
						}
						addLine();
						i -= 1;
					} 
				}
				else {
					continue ;
				}
			}
			else {
				break;
			}
		}
	}
	else {
		return;
	}
}

function playGame() {
	
	if (mapResultArr.length) {
		
		for (let i = 0; i <  mapResultArr.length; i ++) {
			parentDivChildren[mapResultArr[i]].classList.remove('paint');
		}
		mapResultArr.splice(0,);
	
		if (document.getElementById('toShowLose').style.display === 'block') {
			document.getElementById('toShowLose').style.display = 'none';
			document.body.addEventListener('keydown',moveDown);
		}
	}
	
	getRandomItem();
	moved = true;
	playMusic();
	
	let selectValue = document.getElementById('selectLevel').value;
		document.getElementById('toPlay').style.display = 'none';
		document.getElementById('pause').style.left = '125px';
		document.getElementById('pause').style.display = 'block';
		document.getElementById('toShowLose').style.display = 'none';
		
		if (selectValue === '1') {
			speedDown = 300;
			intervalId = setInterval (moveDown, 300);
		}
		if (selectValue === '2') {
			speedDown = 350;
			intervalId = setInterval(moveDown, 350);
		}
		if (selectValue === '3') {
			speedDown = 400;
			intervalId = setInterval(moveDown, 400);
		}
	stateGame = 'pause'	;
	document.getElementById('selectLevel').disabled = true;
	document.getElementById('playMusic').style.display = 'block';
	
		document.getElementById('playingGameAlarm').src = 'audio/minus.mp3';
	
}
function pauseGame () {
	
	if (stateGame === 'pause') {
		document.getElementById('toShowLose').style.display = 'block';
		document.getElementById('h1_pause').style.display = 'block';
		document.getElementById('h1_pause').innerHTML = "PAUSED..."
		document.getElementById('pause').innerHTML = "CONTINUE";
		document.getElementById('pause').style.left = '111px';
		stateGame = 'continue';
		clearInterval(intervalId);
		return;
	}
	if (stateGame === 'continue') {
		intervalId = setInterval(moveDown, speedDown);
		document.getElementById('toShowLose').style.display = 'none';
		document.getElementById('pause').innerHTML = "PAUSE";
		document.getElementById('pause').style.left = '121px';
		document.getElementById('h1_pause').display = 'block';
		stateGame = 'pause';
		return;
	}
}
let escDown = function (e) {
	
	if (e.keyCode === 27) {
		pauseGame();	
	}
	else {
		return;
	}
}
document.body.addEventListener('keydown', escDown);

function addPoints(){
	points += 17;
	document.getElementById('score').innerText =  points;
	
}
function addLine() {
	line += 1;
	document.getElementById('line').innerText =  line;
}
function gameOver(){
	document.getElementById('toShowLose').style.display = 'block';
	clearInterval(intervalId);
	document.getElementById('pause').style.display = 'none';
	document.getElementById('toPlay').style.display = 'block';
	document.getElementById('h1_pause').innerHTML = 'Game Over';
	document.body.removeEventListener('keydown',moveDown);
	document.getElementById('alarm').src = 'audio/gameOver.mp3';
	document.getElementById('playingGameAlarm').src = '';
	document.getElementById('playMusic').style.display = 'none';
	stateGame = 'start';
}
function playMusic() { 
	if (!musicPlay) {
		document.getElementById('playingGameAlarm').src = 'audio/minus.mp3';
		document.getElementById('playMusic').innerHTML = '<i class="fa fa-volume-off" aria-hidden="true"></i>';
		musicPlay = true;
	}
	else {
		document.getElementById('playingGameAlarm').src = '';
		document.getElementById('playMusic').innerHTML = '<i class="fa fa-volume-down" aria-hidden="true"></i>';
		musicPlay = false;
	}
}