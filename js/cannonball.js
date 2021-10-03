class CannonBall {
    constructor(x, y, radius) {
        var options = {
            isStatic: true
        }
        this.x = x
        this.y = y
        this.radius = radius
        this.body = Bodies.circle(this.x, this.y, this.radius, options)
        this.image = loadImage("assets/cannonball.png")
        World.add(world, this.body)
    }
    display() {
        push()
        imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius)
        pop()
    }
    shoot() {
        var newAngle = cannon.angle
        newAngle = newAngle * (3.14 / 180)
        var velocity = p5.Vector.fromAngle(newAngle)
        Matter.Body.setStatic(this.body, false)
        Matter.Body.setVelocity(this.body, { x: velocity.x * (180 / 3.14), y: velocity.y * (180 / 3.14) })


    }










}
