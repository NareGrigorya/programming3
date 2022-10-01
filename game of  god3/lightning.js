let LivingCreature = require("./LivingCreature")
module.exports  = class Lightning  extends LivingCreature{
    constructor(x, y) {
        super(x,y);
        this.x = x;
        this.y = y;
        this.energy = 10;
        this.multiply = 0
        this.directions = []; 
    }
    }