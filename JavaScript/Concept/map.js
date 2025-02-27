const nums = [1,2,3,4,5,6,7,8,9,10]

const detailsMap = nums.map((num, index, array) => {
    return `Index ${index} : ${num} (from array ${array})`
})

console.log(detailsMap)