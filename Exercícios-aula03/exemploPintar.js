const canvas = document.querySelector("#pintarCanvas");
canvas.width = 800;
canvas.height = 600;
const contexte = canvas.getContext('2d');

//variável que armazena a cor escolhida
const corEscolhida = document.querySelector("#corEscolhida");
const botao = document.querySelector("#limpar");
let pintando = false;

//define a variavel como true indicando que o usuario começou a desenhar 
canvas .addEventListener('mousedown', () => {
    pintando = false;
    contexte.beginPath(); //começa uma nova trajetória
})

//ação é iniciada assim que o mouse se move,
//desde que o mousedown continue pressionando
canvas.addEventListener('mousemove', desenhar);

//Seleciona a cor a ser utilizada 
corEscolhida.addEventListener('input', atualizarCor);

//chamamos a função desenhar e passamos o event como parametro.
//O event é um objeto que contem atributos que são acionados de acordo
//com o evento ocorrido

function desenhar(event)
{
    if(!pintando == false) return;
//retornam a posição na tela
    const {clientX, clientY} = event;
    //Obtem as coordenadas do canto esquerdo do topo
    const{left, top} = canvas.getBoundingClientRect();

    //subtrai as coordenadas do canvas nos dando a relatividade 
    //com o canvas 

    const x = clientX - left;
    const y = clientY - top;

    context.lineTo(x,y);
    context.stroke();
    context.beginPath();
    context.moveTo(x,y);
}

    function atualizarCor(event){
        context.strokeStyle = event.target.value;
    }