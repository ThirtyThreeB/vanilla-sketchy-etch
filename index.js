/* jshint esversion: 6 */


let addContDiv = () => {
	let newCont = document.createElement('div');
	newCont.setAttribute("id", "container");

	let contToAdd = document.getElementById('boxInput');
	document.body.insertBefore(newCont, boxInput.nextSibling);

};


let makeBoxes = (numberOfBoxes) => {
	addContDiv();
	console.log('num=', numberOfBoxes.value);
	let totalBoxes = Math.pow(numberOfBoxes.value, 2);
	console.log(totalBoxes);
	let sideLength = 500 / numberOfBoxes.value;
	console.log("sideLength=", sideLength, `${sideLength} px`);

	for (var i = 0; i < totalBoxes; i++) {
		let divBox = document.createElement('div');
		divBox.classList.add('boxes');
		divBox.style.width = `${sideLength}px`;
		divBox.style.height = `${sideLength}px`;
		divBox.addEventListener("mouseover", changeBoxColor);

		const container = document.querySelector('#container'); 
		container.appendChild(divBox);  
  }
  document.getElementById("boxMaker").disabled = true;
};


let playGame = () => {
	let boxSide = document.getElementById('boxesPerSide');
	console.log(boxSide.value);
	makeBoxes(boxSide);
};


let reset = () => {	
	document.getElementById("container").remove();
  document.getElementById("boxMaker").disabled = false;
};


let changeBoxColor = (e) => {
	e.target.classList.add('highlight');
console.log(e.propertyName);

};

let boxMaker = document.querySelector('#boxMaker');
boxMaker.addEventListener('click', playGame);

let resetBtn = document.querySelector('#resetBtn');
resetBtn.addEventListener('click', reset);



//document.getElementById("container").addEventListener('onmouseover', changeBoxColor);  //document?


// document.getElementById("demo").addEventListener("mouseover", mouseOver);
// document.getElementById("demo").addEventListener("mouseout", mouseOut);

// let  mouseOver() {
// 	console.log("moo");
//     document.getElementById("demo").style.color = "red";
// }

// function mouseOut() {
//     document.getElementById("demo").style.color = "black";
// }

