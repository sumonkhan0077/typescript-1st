// NonPrimitive: array , object 

let list : string[] = ["eggs", "milk", "sugar"];

list.push(true)

let mixedList: (string | number)[] =["eggs", 1,  "milk", "sugar" , 5]

// tuffole 

let sumonNameAndRoll : [string , number] = ["sumon", 4]
// sumonNameAndRoll[0]= 3 {error dibe} and 2 tar beshi valu rakhte o parbo na


// object 
let user: {
    organization: string;
    firstName: string;
    middelName: string;
    lastName: string;
    isMarried: boolean
}= {
    organization:"programing hero",
    firstName: "jhankar",
    lastName: "mahbub",
    isMarried: true
}
user.organization= "aro mela"
console.log(user)