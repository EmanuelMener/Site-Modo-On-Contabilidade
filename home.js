//variaveis para a barra de pesquisa

//const form = document.querySelector('form');
//const input = document.querySelector('input[type="text"]');
//const button = document.querySelector('button[type="submit"]');

// Barra de progresso
function progressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }
  
  window.onscroll = function() {progressBar()};
  
/// função para pesquisar na barra de pesquisa
  //button.addEventListener('click', (event) => {
    //event.preventDefault();
    //form.submit();
  //});