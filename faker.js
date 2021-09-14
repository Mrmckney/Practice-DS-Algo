const faker  = require('faker')
faker 
let orders = []
for(let i = 0; i < 100; i++) {
  const fakeDateTime = faker.date.past().toISOString()
  const fakeDate = fakeDateTime.substr(0,10)
  const fakeTime = fakeDateTime.substr(11,8)
  orders.push({
    customerName: faker.name.findName(),
    orderDate: fakeDate,
    orderTime: fakeTime,
    orderTotal: Number(faker.commerce.price())
  })
}
console.log(orders)