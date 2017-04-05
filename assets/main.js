//
var recargar =document.getElementById('reiniciar');
var vaciosLength=document.getElementsByClassName('vacio').length;
var bombas=document.getElementsByClassName('bomb');
var tabla = document.getElementById('tabla');
var num1=document.getElementsByClassName('num1');
var num2=document.getElementsByClassName('num2');
var num3=document.getElementsByClassName('num3');
var arreglo = [];
var numi1=[];
var numi2=[];
//Class num1
for(var i =0; i<num1.length;i++){
	numi1[i] = num1[i];
}
for ( var i = 0; i<num1.length; i++){
	numi1[i].addEventListener("click", uno);
}
function uno (){
	this.setAttribute("value", 1);
	this.style.backgroundColor = "#A6ACAF"
	this.className = "apretado";
}
//Class Num2
for(var i =0; i<num2.length;i++){
	numi2[i] = num2[i];
}
for ( var i = 0; i<num2.length; i++){
	numi2[i].addEventListener("click", dos);
}
function dos (){
	this.setAttribute("value", 2);
	this.style.backgroundColor = "#A6ACAF"
	this.className = "apretado";
}
//Class Num3
num3[0].addEventListener("click", tres);
function tres(){
	this.setAttribute("value", 3);
	this.style.backgroundColor = "#A6ACAF"
	this.className = "apretado";
}

//Class Vacios
for(var i =0; i<vaciosLength;i++){
	arreglo[i] = document.getElementsByClassName('vacio')[i];
}
for ( var i = 0; i<vaciosLength; i++){
	arreglo[i].addEventListener("click", color)
}
function color(){
		this.className = "apretado";
		this.style.backgroundColor = "#A6ACAF";
}
//Class Bombas
	for ( var i = 0; i<bombas.length; i++){
		bombas[i].addEventListener("click", bomba);
	}

function bomba(){
	for (var i=0; i<bombas.length;i++){
		bombas[i].style.background = "";
		bombas[i].value = "💣";
	}
	perdiste();
}

function perdiste(){
	var status = document.getElementById('status');
	status.innerText = "GAME OVER";
	deshabilitar();
}

function deshabilitar(){
	var botones = document.getElementsByTagName('input');
	for (var i=0;botones.length;i++){
		botones[i].disabled = "true";
	}
}

function reiniciar(){
	location.reload();
}

recargar.addEventListener("click", reiniciar)
