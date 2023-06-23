/// find sum
let arr = [2,5,-3,25,-78,-39,90]
let sum = arr.filter(item => item > 0).reduce((total,current) => (total+current) , 0)
console.log(sum)

// upper case first letter
let str = "davit tarxan mouravi"
let uppercase = str.split(" ").map(item => item[0].toLocaleUpperCase()).join(" ")

console.log(uppercase)

/// remove last caracter
let Arr = ["saxeli","gvari","misamarti","asaki"]
let newArr = Arr.map(item => item.slice(0, -1)).join(" ")
 
console.log(newArr)
