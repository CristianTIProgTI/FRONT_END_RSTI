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
/* const listaDeNomes=['Mika','Paula','Vitor']
const copiaListaDeNomes=[...listaDeNomes]
console.log(copiaListaDeNomes); */

//aula 7 ex 4
//aula 7 ex2 (cópia)
/* var pessoa={
    nome: 'Cristian',
    idade:46,
    genMus:'Heavy Metal'
}
//console.log(`O nome da pessoa é ${pessoa.nome}, ele(a) tem ${pessoa.idade} anos e gosta muito de ${pessoa.genMus}.`); 

function novaPessoa()
            {
              const pessoa2={...pessoa, 
              comidas:['Churasco','Pizza','Cheeseburguer']  ,
              amigo:{nomeAmigo:'Anselmo',idadeAmigo:40}
            }
            console.log(`O nome da pessoa é ${pessoa2.nome} e suas comidas preferidas são ${pessoa2.comidas[0]}, ${pessoa2.comidas[1]} e ${pessoa2.comidas[2]}. Seu melhor amigo se chama ${pessoa2.amigo.nomeAmigo} e tem ${pessoa2.amigo.idadeAmigo} anos.`);   
        }
novaPessoa() */

//aula 8 (EM CASA)--------------------------------------------------------------------
//aula 8 ex 1
/* function compara (num1,num2){
var num1=prompt("Digite o 1º número para comparação");
var num2=prompt("Digite o 2º número para comparação");
if(num1===num2){console.log('OS NÚMEROS SÃO IGUAIS!')};
if(num1!==num2){console.log('OS NÚMEROS SÃO DIFERENTES!')};
console.log(num1, 'e', num2) 
}
compara(); */

//aula 8 ex1.1
/* function cnh (){
        var nome=prompt("Digite seu nome");
    var idade=prompt("Digite sua idade");  
    if(idade>=18){console.log(nome,', você PODE dirigir')};
    if(idade<18){console.log(nome,', você NÃO pode dirigir!')};
    
}
cnh()  */
//chame a função dentro de um console.log ...???

//aula 8 ex 2
/* function compara (num1,num2){
    var num1=prompt("Digite o 1º número para comparação");
    var num2=prompt("Digite o 2º número para comparação");
    if(num1===num2){console.log('OS NÚMEROS SÃO IGUAIS!')} //não pode ter ";" (ponto e vírgula) aqui entre o if e o else
    else{console.log('OS NÚMEROS SÃO DIFERENTES!')};
    console.log(num1, 'e', num2) 
    }
    compara(); */

//aula 8 ex 3
 /*    function compara (num1,num2){
        var num1=prompt("Digite o 1º número para comparação");
        var num2=prompt("Digite o 2º número para comparação");
        
        if(num1===num2){console.log('OS NÚMEROS SÃO IGUAIS!')} //não pode ter ";" (ponto e vírgula) aqui entre o if e o else
        else if(num1>num2){console.log('O PRIMEIRO NÚMERO É MAIOR QUE O SEGUNDO NÚMERO!')}
        else{console.log('O SEGUNDO NÚMERO É MAIOR QUE O PRIMEIRO NÚMERO!')};
        console.log(num1, 'e', num2) 
        }
        compara(); */

//aula 8 ex 4 (switch case)
/* var pokemon=prompt('DIGITE O NOME DE UM POKEMON: Bulbasauro, Charmander ou Squirtle, PARA SABER O SEU TIPO:')
switch (pokemon) {
    case 'Bulbasauro':console.log('Planta e veneno') 
    break
    case 'Charmander':console.log('Fogo') 
    break
    case 'Squirtle':console.log('Água') 
    break
    default: console.log('Pokemon não encontrado')
} */

//aula 8 ex 5 (operadores lógicos)
/* function faculdade (){
var ensMed=prompt('Você concluiu o ensino médio? Digite S para sim ou N para não!');
var idade=prompt('Qual é a sua idade?');
var facul=prompt('Você está cursando alguma faculdade no momento? Digite S para sim ou N para não!');
if(ensMed==='S' && idade>=18 && facul==='N'){console.log('Você PODE estudar nesta faculdade')}
else{console.log('Você NÃO pode estudar nesta faculdade')}
}
faculdade(); */

//AULA 8 EX COMPLEMENTAR 1 CALCULADORA SIMPLES
/* function calculadora (){
    var num1=prompt("Digite o 1º número");
    var oper=prompt('Digite a operação:+ ou - ou * ou /')
    var num2=prompt("Digite o 2º número"); 
    var num1=Number(num1)
    var num2=Number(num2)
    var soma=num1+num2
    var sub=num1-num2
    var mult=num1*num2
    var div=num1/num2
    if(oper==='+') {console.log(soma)}
    else if(oper==='-') {console.log(sub)}
    else if(oper==='*') {console.log(mult)}
    else if(oper==='/') {console.log(div)}
    else{console.log('ERRO')}
}
calculadora() */

//AULA 8 EX COMPLEMENTAR 2 MÉDIA DE NOTAS
/* function calcularMedia(){
    var notaGeo=prompt('Digite a nota de Geografia') 
    notaGeo=Number(notaGeo);
    var notaHist=prompt('Digite a nota de História') 
    notaHist=Number(notaHist);
    var notaMat=prompt('Digite a nota de Matemática') 
    notaMat=Number(notaMat);
    var notas=[notaGeo,notaHist,notaMat]
    media=(notas[0]+notas[1]+notas[2])/notas.length

    console.log('A média do aluno é ',media)
}
calcularMedia(); */

//AULA 8 EX COMPLEMENTAR 3 VERIFICADOR DE PALÍNDROMOS
/* function verifPalin() {
    var palavra=prompt('Digite uma palavra para verificar se esta é um palíndromo');
    console.log(palavra);
    palavra = palavra.toLowerCase().replace(/\s/g, ''); //utilizando ChatGpt para solução
    console.log(palavra);
    var palInver = palavra.split('').reverse().join(''); //utilizando ChatGpt para solução
    //var palInvInv=palInver.split('').reverse().join('');
    console.log(palInver);
    //console.log(palInvInv);
    if(palavra===palInver){console.log(`A palavra ${palavra} é um palíndromo pois seu inverso é ${palInver}-`,true)}
    else{console.log(`A palavra ${palavra} NÃO é um palíndromo pois seu inverso é ${palInver}-`,false)}
    ///CONCLUIR!!!
    
}
verifPalin()  */


//aula 9 ex 1 NÃO CONSEGUI!!!!!!!!!!!!----------------------------------------------------------------------------
/* var num=1
var soma=0
while (num!==0) {
    num=prompt('Digite um número');
    num1=Number(num);
    soma=soma+num1;
};
console.log(num1);
console.log(soma) ; */

//for
/* const numeros=[14,67,89,15,23]
for (let i=0;i<5;i++){
    const elemento=numeros[i]
    console.log(elemento)
} */

//AULA 9 EX 2 também não funcionou!?--------------
/* const array=[11,15,18,14,12,13]
//var i=0
//var numAt=0
function DevMaiorNum(array)
{
    let maiorNum=0
    for(let i=0;i<=array.lenght;i++)
        {
        let numAt=array[i]
        if(numAt>=maiorNum) {maiorNum=numAt}
        }
console.log(`O maior número do array é ${maiorNum}`)
}
DevMaiorNum(array) */

//aula 9 ex 2 usando ChatGPT
/* function maiorNumero(array) {
    // Verifique se o array está vazio
    if (array.length === 0) {
        return "O array está vazio.";
    }
    // Inicialize o maior número com o primeiro elemento do array
    let maior = array[0];
    // Percorra o array para encontrar o maior número
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }
    return maior;
}
// Exemplo de uso:
const numeros = [10, 5, 20, 8, 15];
console.log("O maior número é:", maiorNumero(numeros)); // Saída: O maior número é: 20 */

//for of
/* const numeros=[14,67,89,15,23]
for(let numero of numeros){console.log(numero)} */

//aula 9 ex 2
var array=['Olá','amigo,','como','você','está?']
//for(let mens of array){console.log(mens)}
for(let i=0;i<=array.length;i++){
    var pal=array[i]
    console.log(pal)
}