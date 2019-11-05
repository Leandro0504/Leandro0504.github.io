let larguraTela = 900;
let alturaTela = 550;
let s;
let scl = 25;
let food;
let placar = 0;

function setup(){
  createCanvas(larguraTela, alturaTela);
  s = new cobra();
  // atrasa o movimento do quadrado para o efeito arcade
  frameRate(10);
  localizacao();
}

function localizacao() {
  let cols = floor(width/scl);
  let linhas = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(linhas)));
  food.mult(scl);
}

function draw() {
  if(frameCount <80)
    telaInicial();
  else
    jogar();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.direcao(0, -1);
  } else if (keyCode === DOWN_ARROW){
    s.direcao(0, 1);
  } else if (keyCode === RIGHT_ARROW){
    s.direcao(1, 0);
  } else if (keyCode === LEFT_ARROW){
    s.direcao(-1, 0);
  }
}

function cobra() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.rabo = [];

  this.direcao = function(x, y){
    this.xspeed = x;
    this.yspeed = y;
}
 
this.comer = function(pos) {
  var d = dist(this.x, this.y, pos.x, pos.y);
  if (d < 4) {
    this.total++;
   
    //Placar
    placar +=1;
    somPonto.play();
   
    return true;
  } else {
    return false;
  }
}
 
this.morte = function() {
  for (var i = 0; i < this.rabo.length; i++) {
    var pos = this.rabo[i];
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total = 0;
      this.rabo = [];
      placar = 0;
    }
  }
}
 
this.aumentaCobra = function () {
  for (var i = 0; i < this.rabo.length-1; i++) {
    this.rabo[i] = this.rabo[i+1];
  }
  this.rabo[this.total-1] = createVector(this.x, this.y);
  this.x = this.x + this.xspeed*scl;
  this.y = this.y + this.yspeed*scl;
 
// evita que a cobra saia da tela
  this.x = constrain(this.x, 0, width-scl);
  this.y = constrain(this.y, 0, height-scl);
}
 
// mostra um quadrado a mais atras da cobra
// após comer a fruta
this.mostraCobra = function() {
  fill(0, 0, 0);
  for (var i = 0; i < this.total; i++){
   rect(this.rabo[i].x,this.rabo[i].y, scl, scl);
  }
  rect(this.x, this.y, scl, scl);
}
}

function preload(){
  imgInicial = loadImage('imagens/tela_inicial.png');
  //imgSenai = loadImage('imagens/senai.png');
  imgProf = loadImage('imagens/Capturar.png');
  somPonto = loadSound('sons/pontos.wav');
}

function telaInicial(){
  image(imgInicial, 0, 0, larguraTela, alturaTela);
  //image(imgSenai, 706, 42, 270, 50);
  fill('white');
  textSize(20);
  
}

function jogar(){
  background(195, 250, 140);
  s.morte();
  s.aumentaCobra();
  s.mostraCobra();

  if (s.comer(food)) {
   localizacao();
  }

  // comida
  image(imgProf,food.x, food.y, scl, scl);
 
  //Texto do placar
  fill('grey');
  textSize(30);
  text( +placar, larguraTela/2 , 30);
}