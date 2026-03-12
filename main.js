let jogador = "X";

function marcar(botao){

    if(botao.innerHTML !== ""){
        return;
    }

    botao.innerHTML = jogador;

    if(jogador === "X"){
        botao.classList.add("x");
        jogador = "O";
    }else{
        botao.classList.add("o");
        jogador = "X";
    }
}

function limpar(){

    let botoes = document.querySelectorAll(".btn");

    botoes.forEach(function(botao){
        botao.innerHTML = "";
        botao.classList.remove("x");
        botao.classList.remove("o");
    });

    jogador = "X";
}

function ganhar() {
    const p1 = document.getElementById("1").innerHTML;
    const p2 = document.getElementById("2").innerHTML;
    const p3 = document.getElementById("3").innerHTML;
    const p4 = document.getElementById("4").innerHTML;
    const p5 = document.getElementById("5").innerHTML;
    const p6 = document.getElementById("6").innerHTML;
    const p7 = document.getElementById("7").innerHTML;
    const p8 = document.getElementById("8").innerHTML;
    const p9 = document.getElementById("9").innerHTML;

    if (p1 !== "" && p1 === p2 && p2 === p3) {
        alert("Jogador " + p1 + " ganhou !" );
    }

}