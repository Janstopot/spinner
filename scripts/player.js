class Player{
    constructor(ctx, side, rotation, velocityX, velocityY, launch, fallSpeed){
      this.ctx = ctx
      this.X = 110
      this.Y = 515
      this.side = side
      this.rotation = rotation
      this.velocityX = velocityX
      this.velocityY = velocityY
      this.launch = launch
      this.fallSpeed = fallSpeed
      this.update = false
      this.angularSpeed = 1.5


      this.image = new Image();
      this.image.src = "images/froggy.png";

      
    }

    draw(){
        this.ctx.save()
        this.rotation -= this.angularSpeed
        //this.ctx.fillStyle = "blue";
        this.ctx.drawImage(this.image, this.X, this.Y, this.side, this.side);
        this.angleY = Math.sin((Math.PI / 180) * this.rotation)
        this.angleX = Math.cos((Math.PI / 180) *  -this.rotation)
        this.Y += this.fallSpeed
        this.ctx.restore()
            
        }

    launchDirection(){

        if(this.launch === true){

            this.X += this.velocityX * this.angleX
            this.Y += this.velocityY * this.angleY
            }
        }
    

    left() {
        return this.X;
      }
    right() {
        return this.X + this.side;
      }
    top() {
        return this.Y;
      }
    bottom() {
        return this.Y + this.side;
      }

}