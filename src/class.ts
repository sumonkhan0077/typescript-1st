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


class Student {
  id: number;
  name: string;
  marks: number[];

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.marks = [];
  }

  addMarks(mark: number): void {
    this.marks.push(mark);
  }

  getTotalMarks(): number {
    return this.marks.reduce((total, mark) => total + mark, 0);
  }

  getAverage(): number {
    const total = this.getTotalMarks();

    return total / this.marks.length;
  }
}

const student1 = new Student(1, "Sumon");

student1.addMarks(80);
student1.addMarks(90);
student1.addMarks(70);

console.log(student1.getTotalMarks());
console.log(student1.getAverage());
 