
function cambioDeDiv() {
    document.getElementById('div2').style.display = '';
    document.getElementById('div1').style.display = 'none';

}
function enviarTextoEncriptado() {
    var texto=document.getElementById("textTarea1").value;
    texto= texto.replace(/e/g, 'enter');
    texto= texto.replace(/i/g, 'imes');
    texto= texto.replace(/a/g, 'ai');
    texto= texto.replace(/o/g, 'ober');
    texto= texto.replace(/u/g, 'ufat');

    document.getElementById("textTarea2").value=texto;
    document.getElementById("textTarea1").value= '';
}
function main() {
    cambioDeDiv();
    enviarTextoEncriptado();
}
function desencriptado() {
    var texto=document.getElementById("textTarea1").value;
    texto= texto.replace(/enter/g, 'e');
    texto= texto.replace(/imes/g, 'i');
    texto= texto.replace(/ai/g, 'a');
    texto= texto.replace(/ober/g, 'o');
    texto= texto.replace(/ufat/g, 'u');

    document.getElementById("textTarea2").value= '';
    document.getElementById('div2').style.display = '';
    document.getElementById('div1').style.display = 'none';
    document.getElementById("textTarea2").value=texto;
    document.getElementById("textTarea1").value= '';
}
function copiarPortapapeles(elem) {
    var copyText= elem;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    
}