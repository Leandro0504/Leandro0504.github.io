//Variaveis para as imagens
let imgEstrada;
let imgVaca;
let imgCarro = [];

//Variaveis da Tela

let alturaTela = 400;
let larguraTela = 600;
let metadeTela = larguraTela/2;

//Variaveis de movimento

let xCarro = [605, 605, 605, -55, -55, -55];
let yCarro = [45, 105, 155, 215, 270, 325];
let velocidadeCarro = [8, 5, 8, 8, 5, 8];

let yUrso = 368;
let yPanda = 368;

let xUrso = 150;
let xPanda = 400;

//Placar

let placarPanda = 0;
let placarUrso =0;

function preload(){
  imgEstrada = loadImage('imagens/estrada.png');
  imgUrso = loadImage('imagens/ator-1.png');
  imgPanda = loadImage('imagens/ator-2.png');
  imgInicial = loadImage('imagens/logo.png');
  
  imgCarro[0] = loadImage('imagens/carro-1.png');
  imgCarro[1] = loadImage('imagens/carro-2.png');
  imgCarro[2] = loadImage('imagens/carro-3.png');
  
  imgCarro[3]= loadImage('imagens/carro-4.png');
  imgCarro[4] = loadImage('imagens/carro-5.png');
  imgCarro[5] = loadImage('imagens/carro-6.png');
  
  somPonto = loadSound("sons/pontos.wav");
  somTrilha = loadSound("sons/trilha.mp3");
  somAtropela = loadSound("sons/colidiu.mp3");
}

