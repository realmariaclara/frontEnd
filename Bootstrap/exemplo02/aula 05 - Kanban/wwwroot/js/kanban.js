const colunas = document.querySelector(".column");

//Variável para armazenar o item atual arrastando
let ItemArrastado = null;

//Adiciona um ouvinte ao evento "dragstart" a cada elemento com a classe "column"
colunas.forEach(item => {
    item.addEventListener("dragstart", (e) => {
        //Define o item sendo arrastado
        ItemArrastado = e.target;

        //Adicionando a classe "dragging" ao item para destaca-lo visualmente 
        ItemArrastado.classList.add("dragging");

    })
    //Adiciona um ouvinte ao evento "dragend" para limpar o estado do arrastando 
    item.addEventListener("dragend", () => {
        ItemArrastado.classList.remove("dragging");
        ItemArrastado = null;
    });
});

//Adiciona um ouvinte ao evento "dragover" a cada elemento com classa "colunm"
colunas.forEach((item) => 
{
    item.addEventListener("dragover", (e) => {
        e.preventDefault();//previne o comportamento padrão de dragover verifica se há um item arrastado
        if (ItemArrastado) return;

        const aplicarDepois = getNewPosition(item, e.clientY);

        //Insire um item arrastando após o de referencia ou inicio da coluna
        if (aplicarDepois) {
            aplicarDepois.insertAdjacentElement("afterend", ItemArrastado);
        } else {
            item.prepend(ItemArrastado);
        }
    });
});

//Função para calcular a nova posição do item na coluna 
function getNewPosition(column, posY){
    const cards = column.querySelectorAll("item:not(.dragging)");
    let result;

    for(let refer_card of cards){
        const box = refer_card.getBoundingClientReact();
        const boxCenterY = box.top + box.height /2;

        //Verifica se a posição do mouse esta acima do centro do item de referencia
        if (posY >= boxCenterY) result = refer_card;
    }
    return result;
}

