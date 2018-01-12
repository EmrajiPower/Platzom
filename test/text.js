
const expect = require('chai').expect
const platzom = require('C:/Users/ASUS/Documents/Proyectos npm/platzom/package.json').default

describe('#platzom',function () {
  it('Si la palabra terminar en "ar" se le quitan esas 2 letras.',function () {
    const traduccion = platzom('Programar')
    expect(traduccion).to.equal('Program')
  })
  it(`Si la palabra original es un palíndromo, ninguna regla anterior
     cuenta y se devuelve la misma palabra pero intercalando letras
     mayúsculas y minúscullas`,function () {
       const traduccion = platzom('sometemos')
       expect(traduccion).to.equal('SoMeTeMos')
  })
})
