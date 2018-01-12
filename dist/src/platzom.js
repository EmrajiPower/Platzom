'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.platzom = platzom;
/*REGLAS
1. Si la palabra terminar en "ar" se le quitan esas 2 letras.
2. Si la palabra inicia con "z" se le añade "pe" al final.
3. Si la palabra traducida tiene 10 o más letras, se debe partir
   en dos por la mitad y unir con un guión medio.
4. Si la palabra original es un palíndromo, ninguna regla anterior
   cuenta y se devuelve la misma palabra pero intercalando letras
   mayúsculas y minúscullas*/

function platzom(string) {
  var traduccion = string;
  if (string.toLowerCase().endsWith('ar')) {
    traduccion = string.slice(0, -2);
  }

  if (string.toLowerCase().startsWith('z')) {
    traduccion = traduccion + 'pe';
  }

  if (traduccion.length >= 10) {
    var firstHalf = traduccion.slice(0, Math.round(traduccion.length / 2));
    var secondHalf = traduccion.slice(Math.round(traduccion.length / 2));
    traduccion = firstHalf + '-' + secondHalf;
  }

  var invertir = function invertir(string) {
    return string.split('').reverse().join('');
  };
  function mayusculas_minusculas(string) {
    var tamano = string.length;
    var traduccion = '';
    var capitalize = true;
    for (var i = 0; i < tamano; i++) {
      var char = string.charAt(i);
      traduccion = traduccion + (capitalize ? char.toUpperCase() : char.toLowerCase());
      capitalize = !capitalize;
    }
    return traduccion;
  }

  if (string == invertir(string)) {
    return mayusculas_minusculas(string);
  }
  return traduccion;
}

alert(platzom('Programar'));
alert(platzom('sometemos'));
