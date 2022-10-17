//variaveis personagem
let yPersonagem = 367;
let xPersonagem = 85;
let colisao = false;
let pontos = 0;

function mostraPersonagem(){
  image(imagemPersonagem, xPersonagem,yPersonagem, 30, 30);
}

function movimentaPersonagem(){
  if (keyIsDown(UP_ARROW)){
    yPersonagem -= 3
  }
  if (keyIsDown(DOWN_ARROW)){
    if(yForaTela()){
    yPersonagem += 3
    }
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i],comprimentoCarro, alturaCarro, xPersonagem, yPersonagem, 15)
    if(colisao){
      somColisao.play();
      voltaPersonagem();
      if(pontosPositivos()){
        pontos -= 1;
        velocidadeAdicionalCarros -= 0.5;
      }
    }
  }  
}

function voltaPersonagem(){
  yPersonagem = 366;
}

function mostraPontos(){
  fill(color(240,255,0));
  textAlign(CENTER);
  textSize(25);
  text(pontos, width / 5, 27);
}

function marcaPontos(){
  if (yPersonagem < 15){
    pontos +=1;
    velocidadeAdicionalCarros += 0.5;
    voltaPersonagem();
    somPonto.play();
  }

}

function pontosPositivos(){
  return pontos > 0;
}

function yForaTela(){
  return yPersonagem < 367;
}
