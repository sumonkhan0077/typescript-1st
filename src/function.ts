// normal function 
 function addNumber(num1: number, num2: number): 
    number {
         return num1 + num2;
        };

const arrowFunction = (num1: number, num2: number):
    number  => num1+ num2
    arrowFunction(2 ,4 );

//  function object 

const poorUser = {
    balance: 0,
    addBalance(value: number): number {
        const totalBalance = this.balance + value;
        return totalBalance
    }
}
poorUser.addBalance(100)


// callback array function 

const arr: number[]= [1 , 2, 3];

const sqrArry = arr.map((elem:number): number => elem * elem)




