function getAleatorioComputadorResultado() {
    const escolhas = ["Pedra", "Papel", "Tesoura"];
    const aleatorioIndex = Math.floor(Math.random() * escolhas.length);
    return escolhas[aleatorioIndex];
}

function oJogadorGanhouARodada(jogador, computador) {
    return (
        (jogador == "Pedra" && computador == "Tesoura") ||
        (jogador == "Tesoura" && computador == "Papel") ||
        (jogador == "Papel" && computador == "Pedra")
    );
}

let jogadorPonto = 0;
let computadorPonto = 0;

function getRodadaResultados(userEscolha) { 
    const computadorResultado = getAleatorioComputadorResultado();

    if (oJogadorGanhouARodada(userEscolha, computadorResultado)) {
        jogadorPonto++;
        return `Jogador ganhou! ${userEscolha} vence ${computadorResultado}`;
    } else if (computadorResultado === userEscolha) {
        return `É um empate! Ambos escolheram ${userEscolha}`;
    } else {
        computadorPonto++;
        return `Computador ganhou! ${computadorResultado} vence ${userEscolha}`;
    }
}

const jogadorPontoSpanElement = document.getElementById("jogador-ponto");
const computadorPontoSpanElement = document.getElementById("computador-ponto");
const rodadaResultadoMsg = document.getElementById("resultados-msg");
const ganhadorMsgElement = document.getElementById("vencedor-msg");
const escolhasContainer = document.querySelector(".escolhas-container");
const resetJogoBtn = document.getElementById("reset-jogo-btn");

function showResultados(userEscolha) {
    rodadaResultadoMsg.innerText = getRodadaResultados(userEscolha);
    computadorPontoSpanElement.innerText = computadorPonto;
    jogadorPontoSpanElement.innerText = jogadorPonto;

    if (jogadorPonto === 3 || computadorPonto === 3) {
        ganhadorMsgElement.innerText = `${jogadorPonto === 3 ? "Jogador" : "Computador"} venceu o jogo!`;
        resetJogoBtn.style.display = "block";
        escolhasContainer.style.display = "none";
    }
}

function resetJogo() {
    jogadorPonto = 0;
    computadorPonto = 0;
    jogadorPontoSpanElement.innerText = jogadorPonto;
    computadorPontoSpanElement.innerText = computadorPonto;
    rodadaResultadoMsg.innerText = "";
    ganhadorMsgElement.innerText = "";
    resetJogoBtn.style.display = "none";
    escolhasContainer.style.display = "block";
}

resetJogoBtn.addEventListener("click", resetJogo);

document.getElementById("pedra-btn").addEventListener("click", () => showResultados("Pedra"));
document.getElementById("papel-btn").addEventListener("click", () => showResultados("Papel"));
document.getElementById("tesoura-btn").addEventListener("click", () => showResultados("Tesoura"));
