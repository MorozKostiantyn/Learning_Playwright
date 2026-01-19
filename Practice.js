var expenses = [25, 14, 30, 40, 26]
var sum = 0

for(let i=0;i<expenses.length;i++)
    {
        sum = sum + expenses[i]
    }
console.log(sum)

console.log(expenses.reduce((sum,val)=>sum+val,0))

let min = expenses[0]
for (let expense of expenses) {
    if (expense < min){
        min = expense
    }
}
console.log(min)

console.log(Math.min(...expenses))

console.log(Math.max(...expenses))

