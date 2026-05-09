// class Amimal {
//     name:string;
//     species:string;
//     sound:string;

//     constructor (name:string, species:string, sound:string) {
//         this.name = name;
//         this.species = species;
//         this.sound = sound;
//     }

//     makeSound() {
//         console.log(`${this.name} animal making sound ${this.sound}`)
//     }

// }


class Amimal {

    constructor ( public name:string, public species:string, public sound:string) {
     
    }

    makeSound() {
        console.log(`${this.name} animal making sound ${this.sound}`)
    }

}

const dog = new Amimal ("dogeee vaiya", "dog" , "ghew gheew ")
dog.makeSound()

 