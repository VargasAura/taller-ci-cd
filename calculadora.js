function sumar(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a,b){
  if (b === 0) {
    return "Error: división por cero"
  } else {
    return a / b;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { sumar, multiplicar };
}
