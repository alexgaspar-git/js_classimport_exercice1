import {Humain} from './humain.js'

class Mage extends Humain {
    constructor(age,nom,magie) {
        super(age,nom);
        this.magie = magie;
    }
}

let mage = new Mage(100000,"mario","oui");
console.log(mage);