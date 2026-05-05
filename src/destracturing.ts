const user = {
    id: 123, 
    name: {
        firstName:"sumon",
        lastName: "khan"
    },
    gender:"male",
    favouriteColor:"black"
}

const {favouriteColor: myFavouriteColor , name:{firstName:myname}}= user;
        //    myFavouriteColor is not type define, it is destracturing name; akhaen firstName ar jaigar myname nam disschi r ki , just nam dewa . 

// const {favouriteColor, name:{firstName}}= user; // ay vabe hole simple
console.log(myFavouriteColor, myname )


// array destructuring 
const friend = ["karim" ,"jabbar"]
const [, mybestfriend] = friend
console.log(mybestfriend)