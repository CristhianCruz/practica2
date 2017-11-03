 function misdatos(){
 	console.log("hola mundo");
 	var nombre=document.getElementById('nombre').value;
 	console.log(nombre);
 	var carrera=document.getElementById('carrera').value;
 	console.log(carrera);
 	var mensaje=document.getElementById('mensaje').value;
 	console.log(mensaje);

 	
 	localStorage.setItem("nombre",nombre);
 	localStorage.setItem("carrera",carrera)
 	localStorage.setItem("mensaje",mensaje)
 	console.log(localStorage.getItem('nombre'));
 	console.log(localStorage.getItem('carrera'));
 	console.log(localStorage.getItem('mensaje'));


 }
 function datos(){
 		var nombrel=localStorage.getItem('nombre');
 		var carreral=localStorage.getItem('carrera');
 		var mensajel=localStorage.getItem('mensaje');
 		document.getElementById('textocarrera').innerHTML=carreral;
 		document.getElementById('textonombre').innerHTML=nombrel;
 		document.getElementById('textomensaje').innerHTML=mensajel;
 	}