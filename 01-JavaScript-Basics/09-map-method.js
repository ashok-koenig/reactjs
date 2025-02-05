const friends = ["John", "Smith", "Peter"]

console.log(friends)

// const convertName = (friend)=>{
//     return friend.toUpperCase()
// }

// const convertName = (friend)=> friend.toUpperCase()

// const newFriends = friends.map(convertName)

const newFriends = friends.map((friend)=> friend.toUpperCase())

console.log(newFriends)

// for(let friend of friends){
//     // console.log(friend.toUpperCase())
//     console.log(convertName(friend))
// }

const prices = [800, 300, 500, 200]

const discount = 10

console.log("Actual Prices: ", prices)

const discountedPrices = prices.map((price)=> price - discount)

console.log("Discounted Price: ", discountedPrices)