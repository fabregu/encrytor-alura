

function encriptar(){
    var texto = document.querySelector('.inputa').value.toLowerCase();
    var encriptado = texto.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
    minusculas(encriptado);
    document.getElementById('inputb').value = encriptado; 

    ocultar();
    
}

var boton1 = document.querySelector("#btn-encriptar");
boton1.onclick = encriptar;

function desencriptar(){
    var texto = document.querySelector('.inputa').value.toLowerCase();
    var desencriptado = texto.replace(/ai/gi, 'a').replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
    document.getElementById('inputb').value = desencriptado; 

    ocultar();
}
var boton2 = document.querySelector("#btn-desencriptar");
boton2.onclick = desencriptar;

function ocultar(){
    var ocultaIMg = document.getElementById('hideImg');
    var ocultaTexto = document.getElementById('hideTxt');
    var btnCopiar = document.getElementById('btn-copiar');

    btnCopiar.classList.remove('hidden');
    ocultaIMg.classList.add('hidden');
    ocultaTexto.classList.add('hidden');
}

function copiar(){
    var copiarMensaje = document.getElementById("inputb");
    copiarMensaje.focus();
    copiarMensaje = document.execCommand('selectAll');
    document.execCommand("copy");
    alert('Texto copiado');
}
var boton3 = document.querySelector("#btn-copiar");
boton3.onclick = copiar;

function minusculas(texto){
	//Retornar valor convertido a minusculas
	return texto.toLowerCase().value;
}

function filtrarCaracteres(string){
    //solo letras
    var salida = '';
    //Se añaden las letras validas
    var filtro = 'abcdefghijklmnopqrstuvwxyz ';//Caracteres validos
	
    for (var i=0; i<string.length; i++)
        if (filtro.indexOf(string.charAt(i)) != -1) 
       salida += string.charAt(i);          
    return salida;    
                
}