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
 

class BankAccount {
  accountName: string;
  private balance: number;

  constructor(accountName: string, balance: number) {
    this.accountName = accountName;
    this.balance = balance;
  }

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`${amount} deposited`);
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("Insufficient Balance");
      return;
    }

    this.balance -= amount;
    console.log(`${amount} withdrawn`);
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount("Sumon", 1000);

account.deposit(500);

account.withdraw(300);

console.log(account.getBalance());


type Product = {
  name: string;
  price: number;
  quantity: number;
};

class ShoppingCart {
  products: Product[];

  constructor() {
    this.products = [];
  }

  addProduct(name: string, price: number, quantity: number): void {
    const product: Product = {
      name,
      price,
      quantity,
    };

    this.products.push(product);
  }

  getTotalPrice(): number {
    return this.products.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  }

  showProducts(): void {
    console.log(this.products);
  }
}

const cart = new ShoppingCart();

cart.addProduct("Mouse", 500, 2);
cart.addProduct("Keyboard", 1000, 1);

cart.showProducts();

console.log(cart.getTotalPrice());


type Employee = {
  name: string;
  salary: number;
};

class EmployeeManager {
  employees: Employee[];

  constructor() {
    this.employees = [];
  }

  addEmployee(name: string, salary: number): void {
    this.employees.push({
      name,
      salary,
    });
  }

  getTotalSalary(): number {
    return this.employees.reduce((total, employee) => {
      return total + employee.salary;
    }, 0);
  }

  getHighestSalary(): number {
    return Math.max(
      ...this.employees.map((employee) => employee.salary)
    );
  }

  showEmployees(): void {
    console.log(this.employees);
  }
}

const manager = new EmployeeManager();

manager.addEmployee("Sumon", 50000);
manager.addEmployee("Rahim", 70000);
manager.addEmployee("Karim", 60000);

console.log(manager.getTotalSalary());

console.log(manager.getHighestSalary());

manager.showEmployees();