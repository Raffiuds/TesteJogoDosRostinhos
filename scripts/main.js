/**
 * Created by jpiagetprogramacao on 20/02/18.
 *
 */

function start(){
    canvas = document.getElementById("jogoTeste");
    context = canvas.getContext("2d");
    context.fillStyle="#FFFFFF";
    context.fillRect(0, 0, 800, 600);

    canvas.addEventListener ("mousedown",function(){
        onMouseDown({x:event.clientX, y:event.clientY})
    });
    canvas.addEventListener ("mouseup",function(){
        onMouseUp({x:event.clientX, y:event.clientY})
    });

    bg = new Image();
    bg.src = "images/Fundo.png";

    // Testando a criação de uma carta...
    // Adaptar essa estrutura para permitir a criação de várias cartas de uma forma escalável...
    carta = new Image();
    carta.src = "images/CartaVirada.png";
    carta.position = {x:5, y:10};

    // Apenas testando um play em um Audio...
    playEffect("acerto");
}

/**
 * Atualiza o jogo.
 */
function update() {
    draw(); // desenha a cena de jogo...
    setTimeout(update,1); // chama o update novamente após 1 milisegundo.
}

/**
 * Desenha os objetos do jogo.
 */
function draw() {
    context.clearRect(0, 0, 1024, 768); // limpa o canvas...
    context.drawImage(bg, 0, 0); // desenha o background, na posição {0, 0}

    // Testando o desenho da carta criada...
    context.drawImage(carta, carta.position.x, carta.position.y);

}

/**
 * Manipula eventos de mouse down.
 * @param event - coordenadas do evento (event.x,event.y).
 */
function onMouseDown(event){
    console.log("COORDENADAS DO CLIQUE: " + event.x + ", " + event.y);
}

/**
 * Manipula eventos de mouse up.
 * @param event - coordenadas do evento (event.x,event.y).
 */
function onMouseUp(event){
    console.log(event.x + ", " + event.y);
}

/**
 * Cria um áudio e toca-o.
 * @param name {String} - o nome do áudio.
 *
 * Hardcode - otimizar se desejado.
 * Dica: concatenação de string.
 */
function playEffect(name) {
    if(name == "acerto")
        var snd = new Audio("sounds/acerto.mp3");
    if(name == "erro")
        snd = new Audio("sounds/erro.mp3");
    if(name == "vira")
        snd = new Audio("sounds/vira.mp3");


    snd.play();
}

