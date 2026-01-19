let productPrices = [15, 18, 90, 26, 27, 70]
let discountPrices = productPrices.map(price=>price - price/10)
console.log(discountPrices)
let affordableProducts = productPrices.filter(price=>price<50)
console.log(affordableProducts)
let totalSum = affordableProducts.reduce((sum,val) => sum+val, 0)
console.log(totalSum)