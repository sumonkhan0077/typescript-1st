//key of : type operator

type RisePeoplesVehicle = {
    car: string, 
    bike:string,
    cag: string
}

type MyVehicle = "bike" | "car" | "cng";
type MyVehicle2 = keyof RisePeoplesVehicle;

const myVehicle: MyVehicle2 = "car"


type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};

const user: User = {
  id: 222, // key: value
  name: "Mezba",
  address: {
    city: "ctg",
  },
};

// //const myId = user.id;
// const myId = user["id"];
// const myName = user["name"];
// const address = user["address"];

//console.log({ myId, myName, address });


const getPropertyObject =<X> (obj: X , key: keyof X) => {
    return obj[key]
}
const result1 = getPropertyObject(user, "name");
console.log(result1);

const product = {
  brand: "HP",
};

const student = {
  id: 123,
  class: "four",
};

const result2 = getPropertyObject(product, "brand");
const result3 = getPropertyObject(student, "id");