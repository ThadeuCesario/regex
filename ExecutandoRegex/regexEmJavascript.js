const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f';

const regexNove = RegExp('9');
console.log("Métodos da RegExp.........................");

/* Veja que utilizando criei uma Regex utilizando o 'RegExp' e agora no método 'test' eu passo um texto para que seja avaliado. Isto é
 * fazer uma validação do texto com a regex criada. Neste caso do 'test', se for encontrado será retornado o valor true, se não
 * será retornado o valor false.
 */
console.log(regexNove.test(texto)); //true

/* No caso do exec, ele irá executar a Regex sobre o texto passado como parâmetro.
 */
console.log(regexNove.exec(texto)); //[ '9', index: 18, input: '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f' ]

const regexLetras = /[a-f]/g //Aqui estou pegando todas as letras entre 'a' e 'f', além disso estou passando a flag global.
console.log("Métodos da string.........................");
/* Agora estamos tratando pela string.
 * O primeiro caso é o match, em que passamos como parâmetro um Regex na qual queremos conflitar com nosso texto. Lembrando que o match é
 * função de uma string.
 */
console.log(texto.match(regexLetras));

/* Nesse caso será retornado o índice do primeiro elemento que bate com o regex passado como parãmetro.*/
console.log(texto.search(regexLetras));

/* No método 'replace' podemos substituir por algum outro texto, um texto que foi identificado na regex.
 */
console.log(texto.replace(regexLetras,"Teste"));

/* Separar um texto e gerar um array.
 */
console.log(texto.split(regexLetras));

