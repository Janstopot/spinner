class Obstacles{
    constructor(ctx, X, Y, side, rotation, magnetic, visited, fallSpeed){
        this.ctx = ctx
        this.X = X
        this.Y = Y
        this.side = side
        this.rotation = rotation
        this.magnetic = magnetic
        this.visited = visited
        this.fallSpeed = fallSpeed


        this.velocity = 0
  
        this.cx = X + this.side/2
        this.cy = Y + this.side/2
  
    }
  
    draw(){
        if(this.magnetic === true) this.velocity = 1.5
        else this.velocity = 0

        this.ctx.save()
        this.ctx.translate(this.cx, this.cy);              //translate to center of shape
        this.ctx.rotate((Math.PI / 180) * this.rotation); //rotate specified angle
        this.ctx.translate(-this.cx, -this.cy)      
        this.ctx.fillRect(this.X, this.Y, this.side, this.side);
        this.rotation -= this.velocity
            
            
            // line
        this.cx = this.X + this.side/2
        this.cy = this.Y + this.side/2
  
        this.ctx.beginPath();
        this.ctx.moveTo(this.cx, this.cy);
        this.ctx.strokeStyle = "red"
        this.ctx.lineWidth = 10;
        this.ctx.lineTo(this.cx + 200, this.cy);
        this.ctx.stroke();
            
  
        //this.Y += this.velocity
        this.Y += this.fallSpeed
        this.ctx.restore()

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

      
      crashWith(player) {
        return !(this.bottom() < player.top() || this.top() > player.bottom() || this.right() < player.left() || this.left() > player.right());
      }
    
  } 