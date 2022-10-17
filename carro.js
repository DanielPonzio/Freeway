//variaveis carro
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [3,2.5, 2, 2.3, 2.6,1.8];
let velocidadeAdicionalCarros = 1;
let xCarros = [600, 600, 600, 600, 600, 600];
let comprimentoCarro = 50;
let alturaCarro = 40;


function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){    
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro ,alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] = xCarros[i] - velocidadeCarros[i] -          velocidadeAdicionalCarros;
  }   

}

function voltaPosicaoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (verificacaoTela(xCarros[i])){
    xCarros[i] = 600;
    }
  }
}

function verificacaoTela(xCarro){
  return xCarro < - 50 ; 
}


