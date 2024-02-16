/*var nome=prompt("Escreva seu nome:");
var cor=prompt("escreva sua cor favorita:");

var frase="A cor favorita de " + nome + " é " + cor + "."
console.log (frase);*/

//aula 5 ex 2
/*var frase2=prompt("Escreva uma frase");
console.log(frase2); //=escreva do portugol
const fraseMaiuscula = frase2.toUpperCase(); //console.log(frase2.toUpperCase()) [outra forma]
console.log(fraseMaiuscula);
const fraseI = fraseMaiuscula.replaceAll("O","I"); //console.log(frase2.replaceAll("O","I"))
console.log(fraseI);
console.log(fraseI.length);*/

const listaDeCompras = ["Abacate","Banana","Tomate"]
const segundoItem = listaDeCompras[2] // "Tomate"

//aula 5 ex 2
/*var i=prompt("Escolha uma raça entre 0 e 4");
const racaCao=["0-Caramelo", "1-Golden", "2-Dálmata", "3-Doberman", "4-Pinsher"];
var racaEscol=racaCao[i];
console.log (racaEscol);*/
// do prof 1:
/*var cach=["r1", "r2", "r3","r4", "r5"];
var escol=prompt("Escolha de 0 a 4");
console.log(cach[escol]);*/
// do prof 2:
/*var cach=["r1", "r2", "r3","r4", "r5"];
console.log(cach[prompt("digite de 0 a 4")]);*/

/*var array=["a","b","c","d","e","f","g","h"];
//          0   1   2   3   4   5   6   7
array.splice(3,3); //retira a partir do item 3, 3 itens
console.log(array);*/

//aula 5 ex 4
/*var array = [1,2,3,4,5,6];
console.log(array);
console.log(array.length);
array.push(7);
console.log(array);
console.log(array.length);
array.splice(3,2);
console.log(array);
console.log(array.length);*/

//aula 6
/*const altura=2
const largura=3
const area=altura*largura
console.log(area) //console é uma classe e log é uma função

function calculaArea(altura,largura)
    {
    const area = altura*largura
    console.log (area)
    }
calculaArea(2,3)*/

/*function imprimirOlaMundo(){console.log("Olá Mundo!")} //criando a função
imprimirOlaMundo(); //chamando a função */

//aula 6 ex 2
function OlaNome (nome)
{
console.log(`Olá ${nome}`) // `${}` substitui fecha aspas e vírgula
}
OlaNome("Cris");
OlaNome("Collet");
OlaNome("Antônio");