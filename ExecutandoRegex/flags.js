/* g - global
 * Busque as ocorrências de forma global e não pare no primeiro retorno.
 */

/* i - ignore case
 * Não diferenciar maiúsculo de minúsculo.
 */ 

const texto = "Carlos assinou o abaixo-assinado.";

/* Veja abaixo que não usei nenhuma flag em minha expressão regular (nem 'g' e nem 'i').
 * Como não colocamos a flag global, assim que ele acha o primeiro caso, ele irá encerrar o processo.
 */
console.log(texto.match(/C|ab/)); //[ 'C', index: 0, input: 'Carlos assinou o abaixo-assinado.' ]

/* Agora vamos fazer o mesmo exemplo, porém passando a flag global.
 */
console.log(texto.match(/C|ab/g)); //[ 'C', 'ab' ]

/* Agora veja o caso abaixo, vou colocar a flag 'i' para não diferenciar letra maiúscula de letra
 * minúscula.
 */
console.log(texto.match(/c|ab/i)); //Veja que o retorno foi o mesmo, que o primeiro exemplo.

/*Agora vamos aplicar a duas flags*/
console.log(texto.match(/ab|c/gi)); //[ 'C', 'ab' ]