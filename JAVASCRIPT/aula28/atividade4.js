// 1. Função de Soma
// Crie uma função chamada `soma` que recebe dois parâmetros `a` e `b`.
// Dentro da função, declare uma variável chamada `resultado` que armazene a soma de `a` e `b`.
// Retorne `resultado` e armazene-o dentro de uma variavel chamada `somaResultado`, e imprima-a no console.
function soma (a,b){
    return a+b
}
console.log(soma(7 ,10))


// 2. Concatenação de Strings
// Escreva uma função chamada `concatenaNomes` que recebe dois parâmetros `nome` e `sobrenome`.
// Retorne uma string que concatene `nome` e `sobrenome`, separando-os por um espaço e armazene-a em uma variavel chamada "nomeCompleto". Imprima-a no terminal.
function  concatenaNomes(nome, sobrenome){

console.log(`${nome} ${sobrenome}`)
}
concatenaNomes("arthur","luis")
// 3. Maiúsculas
// Crie uma função chamada `maiuscula` que recebe uma string `texto`.
// Dentro da função, utilize o método `toUpperCase()` para converter `texto` em letras maiúsculas.
// Imprima o resultado no console.
function maiuscula(texto){
    console.log(texto.toUpperCase())

}
maiuscula("athur")
// 4. Número de Caracteres
// Escreva uma função chamada `contarCaracteres` que recebe uma string `texto`.
// Declare uma variável chamada `quantidade` que armazene o comprimento da string usando `length`.
// Retorne `quantidade` e armazene o retorno em uma variável de escopo global. Imprima esta variavel no terminal.
function contarCaracteres(texto) {

     let quantidade = (texto.length)

    return quantidade
}
 let resposta1 = contarCaracteres("japa") 
let  resposta2 = contarCaracteres("luis")
console.log(resposta1, resposta2)
// 5. Último Elemento de um Array
// Crie uma função chamada `ultimoElemento` que recebe um arrayC
// Declare uma variável chamada `ultimo` que armazene o último elemento do array usando `array[array.length - 1]`.
// Retorne `ultimo`.
function ultimoElemento(carro) {

    let ultimo = `array[carro.length - 1]`
return ultimo 
}
let carro = ["honda", "chevrolet","ford"]
console.log(ultimoElemento(carro))

// 6. Remover Último Elemento de um Array
// Escreva uma função chamada `removeUltimo` que recebe um array `array`.
// Utilize o método `slice()` para retornar um novo array sem o último elemento.
function removeUltimo(fruta){
        return fruta.slice(0, -1)
}
let fruta= ["banana","melao","abacaxi"]
console.log(removeUltimo(fruta))