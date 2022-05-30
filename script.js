let image = document.getElementById('imge');
let images = ['/Imagens/imagemcasa1.png', '/Imagens/imagemcasa2.jpeg', '/Imagens/imagemcasa3.jpeg']
setInterval(function(){
  let random = Math.floor(Math.random() * 3);
  image.src = images[random];
}, 1600);