let atropelaUrso = false;
let atropelaPanda = false;

function atropelamento (){
  for(let i = 0; i<imgCarro.length; i++){
    
    atropelaUrso = collideRectRect(xUrso, yUrso, 28, 28,xCarro[i], yCarro[i], 50, 30);
    
    if(atropelaUrso){
      //Atropelou o Urso
      yUrso = 368;
      somAtropela.play();
      
      if(placarUrso > 0)
        placarUrso -= 1;
    }
    
    atropelaPanda = collideRectRect(xPanda, yPanda, 37, 37,xCarro[i], yCarro[i], 50, 30);
    
    if(atropelaPanda){
      //Atropelou o Panda
      yPanda = 364;
      
      if(placarPanda > 0)
        placarPanda -= 1;
      
    }//If 
  }//For
}//Atropelamento

