var body = document.querySelector("body")
var heade = document.querySelector("header")
var elementos = document.body.children;



//Adapta as ondas de acordo com a altura da tela
window.addEventListener("resize",function(){
  adaptarHome()
})

window.addEventListener("DOMContentLoaded",function(){
  adaptarHome()
})


function adaptarHome(){
      //Adaptação do tamanho do home inicial
    var homeInicial = document.querySelector("#home-inicial")
    var animationHome = document.getElementById("animacao-home")
  
    var alturaCliente = window.innerHeight
    if (animationHome != null){
      var alturaHome = alturaCliente - animationHome.offsetHeight - heade.clientHeight

      console.log(alturaCliente,animationHome.offsetHeight,alturaHome)
      homeInicial.style.height = alturaHome+"px"
    }
}

var novoTema = ""

var direcaoTema = ""
var inverterCor = ""
var ativoTema = false


//Todos os elementos com determinadas classes sofreram alterações
function temaClaro(){
    var inverterEscala = document.querySelectorAll(".inverterEscala")
    var verde1 = document.querySelectorAll(".verde-escuro")
    var verde2 = document.querySelectorAll(".verde-claro")
    var bordaPB = document.querySelectorAll(".bordaPB")
    var caixaCinza = document.querySelectorAll(".caixaCinza")
    var caixaModo = document.querySelectorAll(".caixa-modo")
    var cinza1 = document.querySelectorAll(".subtitulos-cinza")
    var verdeT1 = document.querySelectorAll(".verdeT1")
    var verdeT2 = document.querySelectorAll(".verdeT2")
    var tituloCaixas = document.querySelectorAll(".titulo-caixas")
    var iconesCor = document.querySelectorAll(".icones-cor")

    var corBranca = document.querySelectorAll(".branco")
    var corPreta = document.querySelectorAll(".preto")

    var gradienteVerdeTop = document.querySelectorAll(".gradienteVerdeTop")
    var gradienteVerdeLado = document.querySelectorAll(".gradienteVerdeLado")
    verde1.forEach(elemento => {elemento.style.color = "#012200"});
    verde2.forEach(elemento => {elemento.style.color = "#17df0c"});
    bordaPB.forEach(elemento => {elemento.style.borderColor = "#000000"})
    caixaCinza.forEach(elemento => {elemento.style.backgroundColor = "white"})
    caixaModo.forEach(elemento => {elemento.style.borderColor = "white"})
    inverterEscala.forEach(elemento => {elemento.style.filter = "invert(0%)"})
    corPreta.forEach(elemento => {elemento.style.color = "#000000"})
    cinza1.forEach(elemento => {elemento.style.color = "#646464"})
    verdeT1.forEach(elemento => {elemento.style.backgroundColor = "#17df0c"})
    verdeT2.forEach(elemento => {elemento.style.backgroundColor = "#012200"})
    tituloCaixas.forEach(elemento => {elemento.style.color = "#012200"})
    iconesCor.forEach(elemento => {elemento.style.color = "#012200"})

    body.style.backgroundColor = "#eee"
    gradienteVerdeTop.forEach(elemento => {elemento.style.backgroundImage = "linear-gradient(to bottom, #17df0c, #012200)"})
    gradienteVerdeLado.forEach(elemento => {elemento.style.backgroundImage = "linear-gradient(to left, #17df0c, #012200)"})
}

function temaEscuro(){
    var inverterEscala = document.querySelectorAll(".inverterEscala")
    var verde1 = document.querySelectorAll(".verde-escuro")
    var verde2 = document.querySelectorAll(".verde-claro")
    var bordaPB = document.querySelectorAll(".bordaPB")
    var caixaCinza = document.querySelectorAll(".caixaCinza")
    var caixaModo = document.querySelectorAll(".caixa-modo")
    var cinza1 = document.querySelectorAll(".subtitulos-cinza")
    var verdeT1 = document.querySelectorAll(".verdeT1")
    var verdeT2 = document.querySelectorAll(".verdeT2")
    var tituloCaixas = document.querySelectorAll(".titulo-caixas")
    var iconesCor = document.querySelectorAll(".icones-cor")

    var corBranca = document.querySelectorAll(".branco")
    var corPreta = document.querySelectorAll(".preto")

    var gradienteVerdeTop = document.querySelectorAll(".gradienteVerdeTop")
    var gradienteVerdeLado = document.querySelectorAll(".gradienteVerdeLado")
    verde1.forEach(elemento => {elemento.style.color = "#17df0c"});
    verde2.forEach(elemento => {elemento.style.color = "#64da5e"});
    bordaPB.forEach(elemento => {elemento.style.borderColor = "#ffffff"})
    caixaCinza.forEach(elemento => {elemento.style.backgroundColor = "#3d413e"})
    caixaModo.forEach(elemento => {elemento.style.borderColor = "#3d413e"})
    inverterEscala.forEach(elemento => {elemento.style.filter = "invert(100%)"})
    corBranca.forEach(elemento => {elemento.style.color = "#ffffff"})
    cinza1.forEach(elemento => {elemento.style.color = "#dadada"})
    verdeT1.forEach(elemento => {elemento.style.backgroundColor = "#012200"})
    verdeT2.forEach(elemento => {elemento.style.backgroundColor = "#17df0c"})
    tituloCaixas.forEach(elemento => {elemento.style.color = "#17df0c"})
    iconesCor.forEach(elemento => {elemento.style.color = "#17df0c"})

    body.style.backgroundColor = "#272924" 
    gradienteVerdeTop.forEach(elemento => {elemento.style.backgroundImage = "linear-gradient(to top, #17df0c, #012200)"})
    gradienteVerdeLado.forEach(elemento => {elemento.style.backgroundImage = "linear-gradient(to right, #17df0c, #012200)"})
}


//Altera o style e ativa os temas
function alterarTema(divTema){
    var divTemaAtual = divTema.querySelector("#tema-atual")
    var direcaoTemaPixel = divTemaAtual.style.marginLeft

    if(!ativoTema){
        ativoTema = true
        var nomeDaImagem = window.getComputedStyle(divTemaAtual).backgroundImage
        divTemaAtual.style.margin = "0"

        if (nomeDaImagem.includes("sol")){
            direcaoTema= "right"
            novoTema = "lua"
            inverterCor = "100%"
            divTemaAtual.style.marginLeft = "45px"
            temaEscuro()
        }else{
            novoTema = "sol"
            direcaoTema= "left"
            inverterCor = "0%"
            divTemaAtual.style.marginRight = "45px"
            temaClaro()
        }
        divTemaAtual.style.backgroundImage = `url(../imgs/icons/${novoTema}.png)`
        divTema.style.filter = `invert(${inverterCor})`

        setTimeout(function(){
            divTema.style.justifyContent = direcaoTema
            ativoTema = false
        },500)

        //Altera o icone e propriedades da barra do Tema
    }
}

//atualização

(function(document, window, $) {
  $(document).ready(function() {

    $('.core-tabNav li').each(function() {

      $(this).find('a').on('click', function(e) {
        e.preventDefault();

        var paragraphID = $(this).attr('href'),
            paragraph = $(paragraphID);

        // esconde tudo (exemplo)
        $('.tab-content').hide();

        // mostra o selecionado
        paragraph.fadeIn('slow');

        console.log(paragraph);
      });

    });

  });
})(document, window, jQuery);

(function(document, window, $){

  $(document).ready(function(){

    function hideAll(callback){
      var elements = $('.core-p');
      var total = elements.length;
      var count = 0;

      elements.fadeOut(400, function () {
        count++;
        if (count === total && callback) {
          callback();
        }
      });
    }

    $('.core-tabNav li a').on('click', function(e){
      e.preventDefault();

      var paragraphID = $(this).attr('href'),
          paragraph = $(paragraphID);

      hideAll(function () {
        paragraph.fadeIn('slow');
      });
    });

  });

  // animação ao scroll
  $(window).on('scroll', function() {
    $('#object').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();

      if (imagePos < topOfWindow + 1000) {
        $(this).addClass("fadeIn");
      }
    });
  });

})(document, window, jQuery);


// função separada (fora do jQuery)
function mudarTexto(novoTexto, event) {
  event.preventDefault();
  document.getElementById('texto-principal').innerText = novoTexto;
}