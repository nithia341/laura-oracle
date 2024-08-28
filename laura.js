function encriptarTexto() {
    let texto = document.getElementById("inputTexto").value;
    
    let sustituciones = {
        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat"
    };

    let textoEncriptado = "";
    for (let letra of texto) {
        textoEncriptado += sustituciones[letra] ? sustituciones[letra] : letra;
    }
  

    document.getElementById("textoResultado").textContent = textoEncriptado;
}

function desencriptarTexto() {
    let texto = document.getElementById("inputTexto").value;
    
    let sustituciones = {
        "enter": "e",
        "imes": "i",
        "ai": "a",
        "ober": "o",
        "ufat": "u"
    };

    let textoDesencriptado = texto;
    for (let clave in sustituciones) {
        let regex = new RegExp(clave, "g");
        textoDesencriptado = textoDesencriptado.replace(regex, sustituciones[clave]);
    }

    document.getElementById("textoResultado").textContent = textoDesencriptado;
}
