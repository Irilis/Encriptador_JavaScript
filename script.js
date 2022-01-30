var llave = ['ai','enter','imes','ober','ufat'];

//Funcion conectada al evento onclick 'ENCRIPTANDO', reemplaza los valores de la variable obtenida por las llaves que guardamos previamente en 'llave'
function encriptando() {
    var usuario = document.getElementById('textoUsuario').value; 
    var cambiando = usuario.replace(/[eèêëé]/gi,llave[1]).replace(/[iíìîï]/gi,llave[2]).replace(/[oóòôõö]/gi,llave[3]).replace(/[aáàâãä]/gi,llave[0]).replace(/[uùûüú]/gi,llave[4]);

    document.getElementById('textoEncriptado').value = cambiando;

    if (usuario == "") {  //COMPRUEBA CAMPOS VACIOS
        alert("\uD83D\uDE25 nada para encriptar");
        return true;
    }
}
//Funcion conectada al evento onclick 'DESENCRIPTANDO', regresa los valores a su introduccion original
function desencriptando() {
    var usuario = document.getElementById('textoUsuario').value;
    var desencriptando = usuario.replace(/ai/g,'a').replace(/enter/g,'e').replace(/imes/g,'i').replace(/ober/g,'o').replace(/ufat/g,'u');

    document.getElementById('textoEncriptado').value = desencriptando;
    
}

// funcion conectada al evento onclick 'COPIANDO', copia al portapapeles lo que hay en la caja 'TEXTO_ENCRIPTADO'
function copiando() {
    var contenido = document.getElementById('textoEncriptado');

    contenido.select();
    document.execCommand('copy');
    alert('Copiado');
}



