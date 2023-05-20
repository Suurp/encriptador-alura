const textArea = document.querySelector(".text-area");
const mensaje = document.getElementById("mensajeFinal");
const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-desencriptar")
const btnCopiar = document.querySelector(".copiar");
const muneco = document.querySelector(".muneco");
const msg2 = document.querySelector(".msg2");
const right = document.querySelector(".right");
const aviso = document.querySelector(".aviso");

function encriptar(stringEncriptada) {

    let matrizCodigo =
        [["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }

    return stringEncriptada;



}

function desencriptar(stringDesencriptada) {

    let matrizCodigo =
        [["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }

    }

    return stringDesencriptada;
}


btnEncriptar.addEventListener("click", () => {
    validarCampo();

});

btnDesencriptar.addEventListener("click", () => {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    
});

function validarCampo() {
    const textoEncriptado = encriptar(textArea.value);
    var regex = /^[a-z\s]+$/;
    if (!regex.test(textArea.value)) {
        new Toast({
            message: 'Solo se aceptan letras en minúscula y sin acento',
            type: 'danger'
          });
      textArea.focus();
      muneco.style.display = "none";
      msg2.style.display = "none";
      mensaje.value = "";
      btnCopiar.style.display = "none";
      aviso.style.color = "red";
    } 
    else {
        mensaje.value = textoEncriptado;
        muneco.style.display = "none";
        textArea.value = "";
        msg2.style.display = "none";
        btnCopiar.style.display = "block";
        right.classList.add("ajustar")
        aviso.style.color = "";
    }
    
    
  }

btnCopiar.addEventListener("click", () => {
    
    var copiarTexto = mensaje;
   
    navigator.clipboard.writeText(copiarTexto.value);
    new Toast({
        message: 'Texto copiado correctamente',
        type: 'success',
    });
});

