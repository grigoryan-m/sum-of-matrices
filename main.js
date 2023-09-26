"use strict";

document.addEventListener("DOMContentLoaded", ()=>{
	const fieldA = document.getElementById("fieldA")
	,     fieldB = document.getElementById("fieldB")
	,     calculateButton = document.getElementById("calculate");

	calculateButton.addEventListener("click", ()=>{
		let matrixA = fieldA.value.trim().replace(/\n/g, "-").split("-");

		for(let i = 0; i < matrixA.length; i++){
			matrixA[i] = matrixA[i].split(" ");
		}
		
		let matrixB = fieldB.value.trim().replace(/\n/g, "-").split("-");

		for(let i = 0; i < matrixB.length; i++){
			matrixB[i] = matrixB[i].split(" ");
		}


		if(matrixA.length != matrixB.length){
			alert('error');
			return;
		}else{
			let lineLength;
			for(let i = 0; i < matrixA.length; i++){
				lineLength = matrixA[0].length;
				if(matrixA[i].length != lineLength){
					alert('error');
					return;
				}
			}
			for(let i = 0; i < matrixB.length; i++){
				if(matrixB[i].length != lineLength){
					alert('error');
					return;
				}
			}

			let calculatedMatrix = new Array(matrixA.length);

			for (let i = 0; i < matrixA.length; i++) {
				calculatedMatrix[i] = new Array(lineLength);
				for (let j = 0; j < lineLength; j++) {
				  calculatedMatrix[i][j] = +matrixA[i][j] + +matrixB[i][j];
				}
			  }

			for(let i = 0; i < matrixA.length; i++){
				for(let j = 0; j < lineLength; j++){
					calculatedMatrix[i][j] = +matrixA[i][j] + +matrixB[i][j];	
				}
			}
			let output = "";
			for(let line of calculatedMatrix){
				output += line + "\n";
			}
			alert(output);
		}

	});
});
