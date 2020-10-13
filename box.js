class Box {
    constructor(x, y, width, height) {

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        fill(255, 0, 0);
    }
}
