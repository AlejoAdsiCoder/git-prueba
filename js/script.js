var col_final = 3;
var bel_final = 2;

function Calcular() {
	var col = parseInt(document.getElementById('col').value);
	var bel = parseInt(document.getElementById('bel').value);
	if(((col == col_final) && (bel != bel_final)) || ((bel == bel_final) && (col != col_final))) {
		alert("El marcador es parcial. Puntos: " + 5);
	}
	if((col == col_final) && (bel == bel_final)) {
		alert("Ha logrado un marcador exacto!. Puntos: " + 10);
	}
	else if(col != col_final && bel != bel_final ) {
		alert("vuelve a intentarlo. Puntos: " + 0);
	}
}

function Mostrar() {
	var col = parseInt(document.getElementById('col').value);
	var bel = parseInt(document.getElementById('bel').value);
	var show = document.getElementById("show");

	if(((col == col_final) && (bel != bel_final)) || ((bel == bel_final) && (col != col_final))) {
		show.style.display = "block";
		show.innerHTML = "El marcador es parcial. Puntos: " + 5;
	}
	if((col == col_final) && (bel == bel_final)) {
		show.style.display = "block";
		show.innerHTML = "Ha logrado un marcador exacto!. Puntos: " + 10;
	}
	else if(col != col_final && bel != bel_final ) {
		show.style.display = "block";
		show.innerHTML = "vuelve a intentarlo. Puntos: " + 0;
	}
}