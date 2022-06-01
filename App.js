
function computerPlay(){
    let aux1 = Math.floor(Math.random()*2)+1;
    let aux2;
    if(aux1 == 1){
        aux2 = 'pedra';
    }
    else if(aux1 == 2){
        aux2 = 'papel';
    }
    else{
        aux2 = 'tesoura';
    }
    return aux2;
}

function rodada(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == computerSelection){
        return [0, 'Empate'];
    }
    else if(playerSelection == 'pedra' && computerSelection == 'papel'){
        return [2, 'Você perdeu! papel bate pedra'];
    }
    else if(playerSelection == 'pedra' && computerSelection == 'tesoura'){
        return [1, 'Você ganhou! pedra bate tesoura'];
    }
    else if(playerSelection == 'papel' && computerSelection == 'pedra'){
        return [1, 'Você ganhou! papel bate pedra'];
    }
    else if(playerSelection == 'papel' && computerSelection == 'tesoura'){
        return [2, 'Você perdeu! tesoura bate papel'];
    }
    else if(playerSelection == 'tesoura' && computerSelection == 'pedra'){
        return [2, 'Você perdeu! pedra bate tesoura'];
    }
    else if(playerSelection == 'tesoura' && computerSelection == 'papel'){
        return [1, 'Você ganhou! tesoura bate papel'];
    }
}

function game(){
    let playerSelection;
    let computerSelection;
    let pontuacaoc = 0;
    let pontuacaou = 0; 
    for(let i = 1; i <= 5; i++){
        playerSelection = prompt('pedra, papel ou tesoura?');
        computerSelection = computerPlay();
        let resultado = rodada(playerSelection, computerSelection);
        console.log(resultado[1]);
        if(resultado[0] == 1){
            pontuacaou += 1;
        }
        else if(resultado[0] == 2){
            pontuacaoc += 1;
        }
    }
    if(pontuacaoc > pontuacaou){
        console.log('Você perdeu!');
    }
    else if(pontuacaou > pontuacaoc){
        console.log('Você venceu!');
    }
    else{
        console.log('Empate!');
    }
}

game();