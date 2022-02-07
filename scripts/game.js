class Game{
    constructor(ctx, player, obstacle1, obstacle){
        this.ctx = ctx
        this.player = player
        this.obstacle1 = obstacle1
        this.obstacle = obstacle
        this.frames = null
        this.counter = true
        this.score = 0
    }

    start(){
        this.ctx.font = "75px Arial";
        this.ctx.fillStyle = "black";
        this.ctx.fillText("SPINNER", 50, 100);

        
        this.init()
        this.play()
        
    }
    init(){
        
        this.ctx.font = "75px Arial";
        this.ctx.fillStyle = "black";
        this.ctx.fillText("SPINNER", 50, 100);
        
        
        this.frames = 0
        this.obstacle.obstacle = []
        this.score = 0        
    }

    play(){
        ctx.clearRect(0,0, canvas.width, canvas.height)
        
        this.frames += 1
        requestAnimationFrame(this.play.bind(this));

        this.showScore()
        this.obstacle1.draw()
        this.spawnObstacles()
        this.player.draw()
        this.player.launchDirection()
        this.gameOver()
        console.log(this.score)
        
        
        
    }

    gameOver(){
        if(this.player.X > 800 || this.player.X < 0 || this.player.Y < 0 || this.player.Y >600 ){
            console.log("GAME OVER")
            restart.classList.add("restartButton")
            overSound.play()
            this.ctx.save()
            this.ctx.font = " bold 30px Lucida Console monospace";
            this.ctx.fillStyle = "white";
            this.ctx.fillText(`GAME OVER: ${this.score} jumps`, 250, 300);
            this.ctx.restore()
            
            cancelAnimationFrame(this.frames)
            
        }
    }
    showScore(){
        this.score = this.score
        this.ctx.save()
        this.ctx.font = " bold 30px Lucida Console monospace";
        this.ctx.fillStyle = "white";
        this.ctx.fillText(`JUMPS: ${this.score}`, 550, 550);

    }


    spawnObstacles(){
        if(this.frames === 1 || this.frames % 200 === 0 ){
            if(this.counter === true){
                this.counter = !this.counter
                this.obstacle.obstacle.push(new Obstacles(this.ctx, 550, 0, 100, 0, false, false, 1))
            } 
            
            else{
                this.counter = !this.counter
                this.obstacle.obstacle.push(new Obstacles(this.ctx, 100, 0, 100, 0, false, false, 1))
            }
            
        }
        console.log(obstacle.obstacle.length)
        for(let i = 0; i < this.obstacle.obstacle.length; i++){
            this.obstacle.obstacle[i].draw()
            if(obstacle.obstacle.length > 4 && obstacle.obstacle[i].Y > 200){
                obstacle.obstacle.shift()
                console.log("SPLICE")

            }
            
            
            if(this.obstacle.obstacle[i].magnetic === false && this.obstacle.obstacle[i].visited === false){
                if (this.obstacle.obstacle[i].crashWith(this.player) === true){
                    landSound.play()
                    this.score += 1
                    this.player.X = this.obstacle.obstacle[i].X + 10
                    this.player.Y = this.obstacle.obstacle[i].Y + 10
                    this.player.launch = false
                    this.player.angularSpeed = 1.5
                    this.player.rotation = this.obstacle.obstacle[i].rotation
                    this.player.Y += this.obstacle.obstacle[i].fallSpeed
    
                    this.obstacle.obstacle[i].magnetic = true
                    this.obstacle.obstacle[i].visited = true                
    
                }
                
            }
            if(this.obstacle.obstacle[i].magnetic === true && this.obstacle.obstacle[i].crashWith(this.player) === true && this.obstacle.obstacle[i].visited === true ){
                if (this.player.launch === true) this.obstacle.obstacle[i].magnetic = false
            }
            
        }
    }
}