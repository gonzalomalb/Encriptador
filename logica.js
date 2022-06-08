

const windowInput = document.querySelector(".input");
const windowOutput = document.querySelector(".output");
let letras = [];
let resultado = "";

function validarTexto(text) {
    const permitido = /[a-z ]/y;
    for (var i = 0; i < text.length; i++) {
        if (!permitido.test(text)) {
            windowOutput.value = "\n\n     --- Character inválido ---   ";
            break;
        }
    }
    return i == text.length;
}

function encriptar(string) {     
    for (i = 0; i < string.length; i++) {
        if (string[i] == "a") {
            letras.push("ai");
        }

        else if (string[i] == "e") {
            letras.push("enter");
        }

        else if (string[i] == "i") {
            letras.push("imes");
        }

        else if (string[i] == "o") {
            letras.push("ober");
        }

        else if (string[i] == "u") {
            letras.push("ufat");
        }

        else {
            letras.push(string[i])
        }
    }
    console.log(letras, letras.length);
    
}

function desencriptar(string) {
    let i = 0
    while (i < string.length) {
        if (string[i] == "a") {
            letras.push("a");
            i = i + 2;
        }

        else if (string[i] == "e") {
            letras.push("e");
            i = i + 5;
        }

        else if (string[i] == "i") {
            letras.push("i");
            i = i + 4;
        }

        else if (string[i] == "o") {
            letras.push("o");
            i = i + 4;
        }

        else if (string[i] == "u") {
            letras.push("u");
            i = i + 4;
        }

        else {
            letras.push(string[i]);
            i = i + 1
        }
    }
    console.log(letras, letras.length);
}

function generarEncriptado() {
    let string = windowInput.value;
    if (validarTexto(string) == true){
        let i = 0;
        encriptar(string);
        while (i < letras.length) {
            resultado = resultado + letras[i];
            i++;
        }
        windowOutput.value = resultado;
        string = "";
        letras = [];
        resultado = "";
    }   
}

function generarDesencriptado() {
    let string = windowInput.value;
    if (validarTexto(string) == true){
        let i = 0;
        desencriptar(string);
        while (i < letras.length) {
            resultado = resultado + letras[i];
            i++;
        }
        windowOutput.value = resultado;
        string = "";
        letras = [];
        resultado = "";
        return false
    }   
}

function copiar(){
    let copiarTexto = windowOutput;
    copiarTexto.select();
    document.execCommand("copy");
}

function borrar(){
    windowInput.value = "";
    windowOutput.value = "";
}

windowInput.focus();