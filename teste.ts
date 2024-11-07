const cartas = ["A", "A", "B", "B", "C", "C", "D", "D"];
const numeroDeCartas = cartas.length;
let jogadas = 0;
let paresEncontrados = 0;

// Manter controle das cartas já selecionadas
let cartasSelecionadas = [];

while (paresEncontrados < numeroDeCartas / 2) {
    jogadas++;

    // Escolher a primeira carta
    let posicaoCarta = Math.floor(Math.random() * cartas.length);
    let carta1 = cartas[posicaoCarta];

    // Verificar se a carta já foi selecionada
    if (cartasSelecionadas.includes(posicaoCarta)) {
        continue; // Escolher outra carta
    }

    cartasSelecionadas.push(posicaoCarta);

    // Escolher a segunda carta que ainda não foi selecionada
    let posicaoCarta2;
    do {
        posicaoCarta2 = Math.floor(Math.random() * cartas.length);
    } while (cartasSelecionadas.includes(posicaoCarta2));

    let carta2 = cartas[posicaoCarta2];
    cartasSelecionadas.push(posicaoCarta2);

    // Verificar se as cartas são iguais
    if (carta1 === carta2) {
        console.log(`Par encontrado! (${carta1}, ${carta2})`);
        paresEncontrados++;
    } else {
        console.log("As cartas não são iguais. Tente novamente.");
        cartasSelecionadas.pop(); // Remover a última carta selecionada
        cartasSelecionadas.pop(); // Remover a última carta selecionada
    }
}

console.log(`Jogo finalizado! Você encontrou ${paresEncontrados} pares em ${jogadas} jogadas.`);
