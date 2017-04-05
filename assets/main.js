//Botones: recargar y crear tabla
var recargar =document.getElementById('reiniciar');
var disena = document.getElementById('diseña');
//Bombas, numeros y casillas vacias
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
		bombas[i].style.background = "red";
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

function borrarTabla(){
	var tabla=document.getElementById("tabla");
	var body=document.body;
	body.removeChild(tabla);
}
function crearTabla(){
	borrarTabla();
	var numColumnas=parseInt(prompt('escribe un numero de columnas'));
	var numFilas=parseInt(prompt('escribe un número de filas'));
	var numCasillass=numFilas*numColumnas;
	var bombas=parseInt(prompt('escribe el número de bombas'));

		var tablaNueva=document.createElement("table");
    tablaNueva.border="2";
    tablaNueva.align="center";
    tablaNueva.id="tabla";
    var tr=document.createElement("tr");
    var td=document.createElement("td");
    td.innerText="0";
    td.colspan="4";
    td.align="center";

    tr.appendChild(td);
    tablaNueva.appendChild(tr);
    document.body.appendChild(tablaNueva);

    for (var i=0; i<numFilas;i++){
        var tr=document.createElement("tr");
        for (var j=0; j<numColumnas;j++){
            var td=document.createElement("td");
            var boton=document.createElement("input");
            boton.type="button";
            boton.value="";
            td.appendChild(boton);
            tr.appendChild(td);
    
            
        }
        tablaNueva.appendChild(tr);
    }
    
    body.appendChild(tablaNueva);


}
function alerta(){
	alert("Regresa al juego");
}

function stop(e){
	e.stopPropagation();
}
recargar.addEventListener("click", reiniciar)
disena.addEventListener("click", crearTabla)
document.addEventListener("click", alerta)
tabla.addEventListener("click", stop)
