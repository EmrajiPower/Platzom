/*REGLAS
1. Si la palabra terminar en "ar" se le quitan esas 2 letras.
2. Si la palabra inicia con "z" se le añade "pe" al final.
3. Si la palabra traducida tiene 10 o más letras, se debe partir
   en dos por la mitad y unir con un guión medio.
4. Si la palabra original es un palíndromo, ninguna regla anterior
   cuenta y se devuelve la misma palabra pero intercalando letras
   mayúsculas y minúscullas*/

export function platzom (string){
  let traduccion = string
  if (string.toLowerCase().endsWith('ar')){
    traduccion = string.slice(0,-2)
  }

  if (string.toLowerCase().startsWith('z')){
    traduccion = traduccion + 'pe'
  }

  if (traduccion.length >= 10){
    const firstHalf = traduccion.slice(0,Math.round(traduccion.length/2))
    const secondHalf = traduccion.slice(Math.round(traduccion.length/2))
    traduccion = `${firstHalf}-${secondHalf}`
  }

  let invertir = (string) => string.split('').reverse().join('')
  function mayusculas_minusculas(string){
    const tamano = string.length
    let traduccion = ''
    let capitalize = true
    for (let i = 0; i < tamano; i++) {
      const char = string.charAt(i)
      traduccion = traduccion + (capitalize ? char.toUpperCase() : char.toLowerCase())
      capitalize = !capitalize;
    }
    return traduccion
  }

  if (string == invertir(string)){
    return mayusculas_minusculas(string)
  }
  return traduccion
}

alert(platzon('azucar'))
alert(platzon('zorro'))
alert(platzon('zarpar'))
alert(platzon('esternocleidomastoideo'))
alert(platzon('abecedario'))
alert(platzon('sometemos'))
