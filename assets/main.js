//

var vaciosLength=document.getElementsByClassName('vacio').length;
var bombas=document.getElementsByClassName('bomb');
var num=document.getElementsByClassName('num').length;
var tabla = document.getElementById('tabla');
var arreglo = [];
//eventos


for(var i =0; i<vaciosLength;i++){
	arreglo[i] = document.getElementsByClassName('vacio')[i];
}
for ( var i = 0; i<vaciosLength; i++){
	arreglo[i].addEventListener("click", color)
}
function color(){	
		this.className = "apretado";
		this.style.backgroundColor = "white";
}
	for ( var i = 0; i<bombas.length; i++){
		bombas[i].addEventListener("click", bomba);
	}
	for ( var i = 0; i<num.length; i++){
		num[i].addEventListener("click", color)
	}
function bomba(){
	for (var i=0; i<bombas.length;i++){
		bombas[i].style.background = "red";
	}
	alert("GAME OVER")
}

/*
vacios[0].addEventListener("click", color);
vacios[1].addEventListener("click", color);
vacios[2].addEventListener("click", color);
vacios[3].addEventListener("click", color);
vacios[4].addEventListener("click", color);
vacios[5].addEventListener("click", color);

*/