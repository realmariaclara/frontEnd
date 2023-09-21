function animarBarraProgresso() {
    //Declarando as variáveis e atribuindo os valores através dos elementos da DOM 
    var progresso = 0
    var barra = $(".progress-bar");
    var barraProgresso = $(".progress");

    var intervalo = setInterval(function () {
        if (progresso > 100) {
            clearInterval(intervalo);
            barraProgresso.hide();
            document.body.style.backgroundImage = `url("https://images.pexels.com/photos/18026534/pexels-photo-18026534/free-photo-of-fotografia-animal-fotografia-de-animais-cachorro-cao.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`
        }
        else{
            progresso+= 5;
            barra.css("width", progresso+ "%");
        }
    },150);
}