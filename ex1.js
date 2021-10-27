/* Professor, você irá notar que nos meus códigos não utilizei o return, mas gostaria de entender se estou correto ao fazer isso,
e entender melhor a finalidade do return, já que o console.log já retornar também o que eu preciso. Obrigado */

/* Crie uma função que converta polegadas em centímetros.
Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros. 

    let y = 2.54;
        function polegadascm (x, y) {
        console.log ('A conversão de polegadas para centímetros é:', x)
    }
    polegadascm(10 * y)
/*

/* Crie uma função que receba uma string e a converta em um URL.
ex: "funcaojs" é retornado como "http://www.funcaojs.com.br" */
   /* --->>  Com variáveis
   let y = 'http://www.'
   let z = '.com.br'
        function convertTXT (x) {
        console.log (x)
    }
    convertTXT(y + 'oi'+ z)
*/
    /* --->>  SEM VARIÁVEIS 
        function convertTXT (x) {
        console.log (x)
    }
    convertTXT('http://www.' + x + '.com.br')
    */
   /* Crie uma função que recebe uma string e retorna a mesma frase, mas com o
    caracter de exclamação ( ! ).  
   
    let z = '!'
    let x = 'Olá mundo'
        function convertTXT (x) {
        console.log ('O texto agora é:', x)
    }
    convertTXT(x + z)
*/
/* Crie uma função que calcule a idade dos cachorros, considerando que 1 ano
humano, equivale a 7 anos para eles. 
    let idadehumano = 2
    let idadecao = idadehumano * 7
        function calculaidade(idadecao) {
        console.log ('A idade do cachorro é:', idadecao)
    
}
    calculaidade(idadecao)
*/

/* Crie uma função que calcule o valor da sua hora de trabalho, tendo como
parâmetro o seu salário mensal.   
    let salariomes = 1500
    let horastrabalhadas = 160
        function valorhora() {
        const valorhora = (salariomes / horastrabalhadas);
        console.log(valorhora)
 }
    valorhora()
*/
/* Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em
centímetros e o peso em quilogramas. Em seguida, execute a função, testando
diferentes valores.
*IMC, significa Índice de Massa Corporal e é um parâmetro utilizado para saber se o peso está
de acordo com a altura. */
/* IMC = Peso ÷ (Altura × Altura) */
/* FIQUEI NA DÚVIDA SE PRECISARIA ARREDONDAR :O */
   /*
    let altura = 1.85
    let pesokg = 85.00
        function imc() {
        const imc = (pesokg / (altura * altura));
        console.log('Seu peso ideal é de: ', imc , 'Kg')
}
    imc()
    */

/* Crie uma função que receba uma string em minúsculas, converta-a em
maiúsculas e as retorne.
Investigue o que o método de .toUpperCase() faz 
Site oficial consultado para investigação do método: https://www.w3schools.com/js/js_string_methods.asp

    let texto = "Texto definido!";
    let upper = texto.toUpperCase();
        function maiuscula() {
        console.log('Agora o texto estará em maiúsculo:' , upper)
} 
maiuscula()
*/

/* Crie uma função pela qual passamos o raio de um círculo e ela retorna a
circunferência.
Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi. 
Math.sqrt(16)

function circuferencia() {
    var raio = Math.PI
    var raiodefinido = 5
    var raio2 = raio * raiodefinido
        console.log('A circufêrencia de um raio de:', raiodefinido , 'é:' , raio2 );
}
circuferencia()
*/