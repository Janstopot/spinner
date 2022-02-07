const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const canvasWidth = canvas.width= 800;
const canvasLength = canvas.height = 600;


// -------CLASSES
//------------------------ ctx, rotation, velocityX, velocityY, launch, fallSpeed
const player = new Player(ctx, 75, 0, 0, 0, false, 0)

const obstacle1 = new Obstacles(ctx, 100, 500, 100, 0, true, true, 0)

const obstacle = new Obstacles(ctx, 100, 500, 100, 0, true, true, 0)

const game = new Game(ctx, player, obstacle1, obstacle)


// ---------------- sounds

const jumpSound = new Audio("sounds/jump.wav")
const landSound = new Audio("sounds/click.wav")
const overSound = new Audio("sounds/powerUp.wav")
const startSound = new Audio("sounds/blipSelect.wav")

// ------------------ TITLE

ctx.save()
ctx.rotate((Math.PI / 180) * 0.5)
ctx.font = "75px Arial";
ctx.fillText("SPINNER", 50, 100);
ctx.restore()

// -------------------- START NEW GAME

const startButton = document.getElementById("startButton")

startButton.onclick = ()=>{
    startSound.play()
    canvas.classList.remove("start");
    canvas.classList.add("game");
    startButton.style.display = "none"
    game.start()

}

//// ------ back to menu
const restart = document.getElementById("restartButton")

restart.onclick = ()=>{
    
    ctx.clearRect(0,0, canvas.width, canvas.height)
    canvas.classList.remove("game");
    canvas.classList.add("start");
    startButton.style.display = "block"
    restartButton.style.display = "none"

    game.init()
}

// -------- action

document.addEventListener('keypress', event => {
    
    if (event.code === 'Space') {
            jumpSound.play()
            obstacle1.fallSpeed = 1
            player.launch = !player.launch

            player.velocityX = 5
            player.velocityY = 5
            obstacle1.magnetic = !obstacle1.magnetic
            player.angularSpeed = 0
            player.fallSpeed = 1

    }
})
