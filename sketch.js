function setup() {
    createCanvas(500, 400);
    somTrilha.loop();
  }
  
  function draw() {
    background(imagemEstrada);
    mostraPersonagem();
    mostraCarro();
    movimentaCarro();
    movimentaPersonagem();
    voltaPosicaoCarro();
    verificaColisao();
    mostraPontos();
    marcaPontos();
    }
  
  
  
  
  