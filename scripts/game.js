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
        this.init()
        this.play()
    }
    init(){
        this.frames = 0
        this.obstacle.obstacle = []
        this.score = 0        
    }

    play(){
        ctx.clearRect(0,0, canvas.width, canvas.height)
        this.frames += 1
        requestAnimationFrame(this.play.bind(this));

        this.obstacle1.draw()
        this.spawnObstacles()
        this.player.draw()
        this.player.launchDirection()
        this.gameOver()
        
        
        
    }

    gameOver(){
        if(this.player.X > 800 || this.player.X < 0 || this.player.Y < 0 || this.player.Y >600 ){
            console.log("GAME OVER")
            cancelAnimationFrame(this.frames)
        }
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
     
        for(let i = 0; i < this.obstacle.obstacle.length; i++){
            this.obstacle.obstacle[i].draw()
    
            if(this.obstacle.obstacle[i].magnetic === false && this.obstacle.obstacle[i].visited === false){
                if (this.obstacle.obstacle[i].crashWith(this.player) === true){
                    this.player.X = this.obstacle.obstacle[i].X +25
                    this.player.Y = this.obstacle.obstacle[i].Y +25
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