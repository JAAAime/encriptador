const textArea = document.querySelector(".textarea");
const mensaje = document.querySelector(".mensaje");

//'La letra "a" cambiar por "ai"'
//'La letra "e" cambiar por "enter"'
//'La letra "i" cambiar por "imes"'
//'La letra "o" cambiar por "ober"'
//'La letra "u" cambiar por "ufat"'
function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
     stringEncriptada = stringEncriptada.toLowerCase()

   for(let i=0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
        
    }
    return stringEncriptada
}


function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
     stringDesencriptada = stringDesencriptada.toLowerCase()

   for(let i=0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][0])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
        
    }
    return stringDesencriptada
}


document.getElementById("copy").onclick = function() {
    var copyTextarea = document.createElement("textarea");
    copyTextarea.textContent = document.getElementById("mensaj").value;
 
    document.body.appendChild(copyTextarea);
    copyTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(copyTextarea);
}
document.getElementById("areadetexto").addEventListener("input", (e) => {
    let value = e.target.value;
    e.target.value = value.replace(/[º*ª"·$%&/()=Ç`>;+¨^:_´}{]/g, " ").replace(/[¬÷“”≠´‚|@#¢∞œæ€®†¥øπå∫∂ƒ™¶§ ~≤ω∑©√ßµ„…!?¡¿ω«]/g, " ").replace(/í/g, "i").replace(/á/g, "a").replace(/é/g, "e").replace(/ó/g, "o").replace(/ú/g, "u");
  });
  function colocarFocus(){
    document.getElementById("areadetexto").focus();
}

colocarFocus();