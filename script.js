let image = document.getElementById('imge');
let images = ['imagemcasa1.png', 'imagemcasa2.jpeg', 'imagemcasa3.jpeg']
setInterval(function(){
  let random = Math.floor(Math.random() * 3);
  image.src = images[random];
}, 1600);