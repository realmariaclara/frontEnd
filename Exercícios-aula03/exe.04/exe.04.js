canvas = document.querySelector('canvas');
canvas.width = 800;
canvas.height = 600;
c = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height / 2;
var quadrado = 50;

desenhar()

function desenhar() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.fillRect(x, y, quadrado, quadrado);
}

document.addEventListener('keydown', (event) => {
    if (event.key === "a" || event.key === "A")
    {
        x -= 10;
        desenhar();
    }
    else if(event.key === "d" || event.key === "D")
    {
        x += 10;
        desenhar();
    }
     (event.key === "w" || event.key === "W")
    {
        y -= 10;
        desenhar();
    }
    (event.key === "s" || event.key === "S")
    {
        y += 10;
        desenhar();
    }
})


