const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const canvasWidth = canvas.width= 800;
const canvasLength = canvas.height = 600;


// -------CLASSES
//------------------------ ctx, rotation, velocityX, velocityY, launch, fallSpeed
const player = new Player(ctx, 50, 0, 0, 0, false, 0)

const obstacle1 = new Obstacles(ctx, 100, 500, 100, 0, true, true, 0)

const obstacle = new Obstacles(ctx, 100, 500, 100, 0, true, true, 0)

const game = new Game(ctx, player, obstacle1, obstacle)

// -------------------- START NEW GAME

const startButton = document.getElementById("startButton")

startButton.onclick = ()=>{
    canvas.classList.remove("start");
    canvas.classList.add("game");
    startButton.remove()
    game.start()

}
const restart = document.getElementById("restartButton")

restart.onclick = ()=>{
    canvas.classList.remove("game");
    canvas.classList.add("start");
    startButton.add()
    game.init()
}



document.addEventListener('keypress', event => {
    
    if (event.code === 'Space') {

            obstacle1.fallSpeed = 1
            player.launch = !player.launch

            player.velocityX = 5
            player.velocityY = 5
            obstacle1.magnetic = !obstacle1.magnetic
            player.angularSpeed = 0
            player.fallSpeed = 1

    }
})
