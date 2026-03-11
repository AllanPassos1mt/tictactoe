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