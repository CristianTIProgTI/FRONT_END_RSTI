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

/*const listaDeCompras = ["Abacate","Banana","Tomate"]
const segundoItem = listaDeCompras[2] // "Tomate"
*/

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
/*function OlaNome (nome)
{
console.log(`Olá ${nome}`) // `${}` substitui fecha aspas e vírgula entre texto e variáveis
}
OlaNome("Cris");
OlaNome("Collet");
OlaNome("Antônio");*/

/*const a=1
function imprimeVariavel () 
    {
    const b=2
    console.log('Variável a', a);
    console.log('Variável b', b);
    }
imprimeVariavel();
console.log('Variável a', a);
console.log('Variável b', b);*/

/*function calculaArea(altura,largura){
    const area=altura*largura
    return area
}
//atribui retorno a uma variável
const areaCalculada=calculaArea(2,3);
//imprime retorno no console
console.log(calculaArea(2,3));*/

//aula 6 ex3
/*function calcSoma(num1,num2){
    const soma=num1+num2
    return soma //ou susbstituir essas 2 linhas por return num1+num2
}
const numSomados=calcSoma(0,0);
console.log(calcSoma(4,5));*/

//aula 6 ex 4
//teste 1 sem função funcionou
/*var array=[11,12,13,14,15,16];
var array2=[array[0],array[array.length-1]]
console.log(array2);
var div1=(array2[0])/2
var div2=(array2[1])/2

console.log(div2);
console.log(div1);*/

//teste 2 com função
/*function divArray (div2,div1){
var array=[11,12,13,14,15,16];
var array2=[array[0],array[array.length-1]]
//console.log(array2);
var div1=(array2[0])/2;
var div2=(array2[1])/2;
return [div2,div1];
}
console.log(divArray());*/

//prof
/*function recebeArray(arrayDeNumeros=[]){
    return[(arrayDeNumeros.lenght)/2 , (arrayDeNumeros[0])/2];

}
console.log(recebeArray([1,2,3,4,5,6,7,8,9]));*/

//aula 6 ex 5.1
/*
const OlaNome=function(nome){
    console.log(`Olá ${nome}`)   
}
const helWo=OlaNome("Cristian");
OlaNome("Collet");*/

//aula 6 ex5.2

/*const calcSoma=(num1,num2)=>{
    const soma=num1+num2
    return soma
}
//const numSomados=calcSoma(0,0);
console.log(calcSoma(4,5));*/


//Alt Shift A para comentar um trecho selecionado
//Aula 7 OBJETOS
/*const professor ={
    nome:'Vitor',
    idade:27,
    tarefas:['Dar aula','Responder dúvidas'],
    contarPiada:function(){
        console.log('É pa vê ou pa comê?')
    }
}
console.log(professor.idade); //notação de ponto (mais comum)
console.log(professor['nome']); //Vitor (notação de colchete)
professor.nome='Cristian';
console.log(professor['nome']); //Cristian
*/

//aula 7 ex 1
/* var filme={
    nome: 'Jurassic Park',
    ano:1993,
    diretor:'Steven Spielberg',
    elenco: ['Sam Neil','Laura Dern','Jeff Goldblum'],
    visto: true
}
console.log('Filme: ',filme.nome);
console.log('Lançamento: ',filme.ano);
console.log('Diretor: ',filme.diretor); //notação de ponto ou...
console.log('Elenco: ',filme['elenco']); //...notação de colchete
console.log('Assistido? ',filme['visto']); 
//aula 7 ex 3
filme.personagens=['Alan Grant','Ellie Sattler','Ian Malcom'];
console.log('Elenco e personagens:')
console.log(filme.elenco[0],'-',filme.personagens[0]); //ctrl D para selecionar o próximo índice igual [0] ao mesmo tempo
console.log(filme.elenco[1],'-',filme.personagens[1]);
console.log(filme.elenco[2],'-',filme.personagens[2]);
filme.elenco[0]='Xuxa';
console.log('Alteração: ',filme.elenco[0]);
console.log(filme); */



//aula 7 ex2
/* var pessoa={
    nome: 'Cristian',
    idade:46,
    genMus:'Heavy Metal'
}
console.log(`O nome da pessoa é ${pessoa.nome}, ele(a) tem ${pessoa.idade} anos e gosta muito de ${pessoa.genMus}.`); */

/* const donoDoPet= //objeto dentro de objeto
    {
    nome: 'Vitor',
    pet:
        {
        nomeDoPet:'Wanda',
        raca:'Vira-lata',
        idade:1
        }
    }
console.log(donoDoPet.pet.nomeDoPet); */

/* const curso={
    nome:'Noturno Frontend',
    linguagens:['JS','CSS','HTML'] //array dentro de objeto
}
console.log(curso.linguagens[0]);
curso.numeroEstudantes=50; //adicionando numeroEstudantes ao curso 
console.log(curso.numeroEstudantes);  */


//Array de objetos (muito utilizado)
/* const professores =[ //objetos dentro de um array
    {nome:'Andrei',modulo:1},
    {nome:'Vitor',modulo:2},
    {nome:'Mina',modulo:3},
    ]
console.log(professores[1].nome); */ //Vitor

//aula 7-espalhamento spread
/* const usuario={
    nome:'Prof',
    idade:25,
    email:'prof@senacrs.com.br',
    cidade:'São Paulo'
}
console.log(usuario);
const novoUsuario={ 
    ...usuario, //criando um novo objeto a partir do anterior e alterando alguns dados
    nome:'João',
    idade:28
}
console.log(novoUsuario); */

//aula 7 copiando array
const listaDeNomes=['Mika','Paula','Vitor']
const copiaListaDeNomes=[...listaDeNomes]
console.log(copiaListaDeNomes);

//aula 7 ex 4
//aula 7 ex2 (cópia)
var pessoa={
    nome: 'Cristian',
    idade:46,
    genMus:'Heavy Metal'
}
console.log(`O nome da pessoa é ${pessoa.nome}, ele(a) tem ${pessoa.idade} anos e gosta muito de ${pessoa.genMus}.`); 

funcao novaPessoa=
            {
              pessoa2=pessoa //ver spread acima
              pessoa2.comidas=['Churasco','Pizza','Cheeseburguer']  
              pessoa2.amigo //continuar...
            }