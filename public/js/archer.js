import {Humain} from './humain.js'

class Archer extends Humain {
    constructor(age,nom,fleches) {
        super(age,nom);
        this.fleches = fleches;
    }
}

let archer = new Archer(20, "archie", 10);

console.log(archer);