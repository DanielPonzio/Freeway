//variaveis imagens
let imagemEstrada;
let imagemPersonagem;

//sons do jogo
let somTrilha;
let somColisao;
let somPonto;


function preload(){
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemPersonagem = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3];
  
  somTrilha = loadSound("sons/trilha.mp3");
  somColisao = loadSound("sons/colidiu.mp3");
  somPonto = loadSound("sons/pontos.wav");
}