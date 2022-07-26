function convertir(){
 let valore = parseInt(document.getElementById("valor").value);
 let resultado = 0;
 let dolar = 4.11;
 let euro = 4.85;
 if (document.getElementById("uno").checked){
    resultado = valore / dolar;
    alert("El cambio de peso argentino a Dolares es: $" + resultado.toFixed(2));
}
else if (document.getElementById("dos").checked){
    resultado = valore / euro;
    alert("El cambio de peso Argentino a Euros es: $" + resultado.toFixed(2));
}
  else{
    alert("Tienes que completar todos los requerimeintos")
  }
}
