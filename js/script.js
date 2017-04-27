function tamano(valor) { 
	
	//console.log(valor);

	tam = parseFloat(document.body.style.fontSize); 
	//console.log("Tam -->"+ tam);
	tam += valor; 
	elem = document.getElementsByTagName('*'); 
	for(i=0;ele=elem[i];i++) 
	ele.style.fontSize=tam+'em'; 
} 