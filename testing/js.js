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
const download = document.getElementById('download');
download.addEventListener('click', function (e) {
    const link = document.createElement('a');
    link.download = 'download.png';
    link.href = can.toDataURL();
    link.click();
    link.delete;
  });