// 1) Observe o trecho de código abaixo:

// int INDICE = 13, SOMA = 0, K = 0;
// enquanto K < INDICE faça
// {
// K = K + 1;
// SOMA = SOMA + K;
// }
// imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?
// R: O valor da soma será = 1+2+3+4...+13 = 91

// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
// IMPORTANTE:
// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

// 3) Descubra a lógica e complete o próximo elemento:
// a) 1, 3, 5, 7, 9
// b) 2, 4, 8, 16, 32, 64, 128
// c) 0, 1, 4, 9, 16, 25, 36, 49
// d) 4, 16, 36, 64, 100
// e) 1, 1, 2, 3, 5, 8, 13
// f) 2,10, 12, 16, 17, 18, 19, 200

// 4 - Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?
// IMPORTANTE:
// a) Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.
// b) Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles e o carro possui tag de pedágio (Sem Parar)
// c) Explique como chegou no resultado.

// 5) Escreva um programa que inverta os caracteres de um string.
// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

// ------------------------------ respostas

// 1) O valor da soma será = 1+2+3+4...+13 = 91

function questionTwo(number: number) {
  let prevNumber = 1;
  let prevNumber2 = 0;
  for (
    let currentNumber = 0;
    currentNumber <= number;
    currentNumber = prevNumber + prevNumber2
  ) {
    prevNumber2 = prevNumber;
    prevNumber = currentNumber;
    if (currentNumber === number) return true;
  }
  return false;
}
console.log([1, 5, 43, 78, 200, 377].map(questionTwo));

// 3) Descubra a lógica e complete o próximo elemento:
// a) 1, 3, 5, 7, 9 --> soma de 2 --> 5+2=7; 7+2=9;
// b) 2, 4, 8, 16, 32, 64, 128 --> potência de base 2
// c) 0, 1, 4, 9, 16, 25, 36, 49 --> acrescenta ímpares consecutivos --> 16+9=25; 25+11=36; 36+13=49
// d) 4, 16, 36, 64, 100 --> soma-se o valor com o produto de 4 e o ímpar consecutivo, partindo do 3 --> 4+4*3=16; 16+4*5=36; 36+4*7=64; 64+4*9=100
// e) 1, 1, 2, 3, 5, 8, 13 --> fibonacci, soma-se os 2 números anteriores --> 1+2=3; 2+3=5; 3+5=8; 5+8=13
// f) 2,10, 12, 16, 17, 18, 19, 200 --> são números que começam com D

// 4)
// velocidade = distância/tempo
// resolvendo para o carro: 110=100/t -> 110t=100 -> t=100/110 = 0,9090... ou 0,91 horas aproximadamente
// resolvendo para o caminhão: 80=100t -> t=100/80 = 1,25 horas + tempo do pedágio -> 1+1/4 + 2*1/12 -> 1+1/4+1/6 = (12+3+2)/12 = 17/12 = 1,4 horas
// Portanto, quando os veículos se encontrarem, o carro terá percorrido 100 km em 54,6 minutos e o caminhão terá percorrido a mesma distância em 85 minutos. Isso significa que o carro estará mais próximo de Ribeirão Preto, já que ele se afasta em uma distância menor em um tempo menor do que o caminhão.

function questionFive(string: string) {
  let reversedString = "";
  for (let index = string.length - 1; index >= 0; index--)
    reversedString += string[index];
  return reversedString;
}

console.log(["banana", "laranja", "natal"].map(questionFive));
