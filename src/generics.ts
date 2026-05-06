const friend : Array<string> = ["sumon", "khan"];
const rollNumber: Array<number>= [ 2, 23 , 3 ];

type GenericsArray<T> = Array<T>;//ak line a function make

const isPresent : GenericsArray<boolean> = [ true , false , false]
const friends : GenericsArray<string> = ["sumon", "khan"];
const rollNumbers: GenericsArray<number>= [ 2, 23 , 3 ];

type Coordinates<X, Y> = [X, Y];

const coordinates1: Coordinates<number, number> = [20, 30];
const coordinates2: Coordinates<string, string> = ["20", "30"];

const userList: GenericsArray<{name:string; age:number}> = [
    {
        name: "Mr. X",
        age: 42
    },
    {
        name: "y",
        age: 33
    },
]