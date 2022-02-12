var image;

function upload(){
  var canimg = document.getElementById("can");
  var finp= document.getElementById("fin");
  image = new SimpleImage(finp);
  image.drawTo(canimg);
}

function makegray(){
  for(var pixel of image.values() ){
    var avg= (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  var canimg = document.getElementById("can");
  image.drawTo(canimg);
}