class Dustbin{
    constructor(x, y, width, height){
        var options = {
            'isStatic':true
        }
        this.image = loadImage("dustbingreen.png");
        this.width = width;
        this.height = height;
        this.leftBody = Bodies.rectangle(x - 110, y , 20, 100, options);
        this.rightBody = Bodies.rectangle(x + 110, y, 20, 100, options);
        this.bottomBody = Bodies.rectangle(x - 90, y + 40, 200, 20, options);
    
        World.add(world, this.leftBody);
        World.add(world, this.rightBody);
        World.add(world, this.bottomBody);
    }

    display() {
        var posLeft = this.leftBody.position;
        var posRight = this.rightBody.position;
        var posBottom = this.bottomBody.position;
        push();
        imageMode(CENTER);
        rect(posLeft.x, posLeft.y, 20, 100);
        rect(posRight.x, posRight.y, 20, 100);
        rect(posBottom.x, posBottom.y, 200, 20);
        image(this.image, 600, 510, this.width*2.6, this.height*15);
        pop();
    }
}