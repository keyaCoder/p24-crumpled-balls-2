class Paper {
    constructor(x, y, width) {
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.4,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, width/3, options);
        this.width = width;
        this.image = loadImage("paper.png")
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        fill('blue');
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.width)
        pop();
    }
}