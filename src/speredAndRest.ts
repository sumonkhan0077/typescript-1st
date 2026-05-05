// spread operator
const friend = ["sumon" , "karim", "rahim", "jodu"];

const schoolFriend = ["modu", "kodu", "jabbar"];

const collegeFriend = ["smart", "chorom smart"];
// friend.push(schoolFriend) =>>>> [ 'sumon', 'karim', 'rahim', 'jodu', [ 'modu', 'kodu', 'jabbar' ] ]

friend.push(...schoolFriend, ...collegeFriend)
// console.log(friend) 

// rest operator 

