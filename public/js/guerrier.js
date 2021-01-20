import {Humain} from './humain.js'

class Guerrier extends Humain {
    constructor(age,nom,force,vie) {
        super(age,nom);
        this.force = force;
        this.vie = vie;
    }
}

let guerrier = new Guerrier(69,"blarg",10000,7);
console.log(guerrier);
