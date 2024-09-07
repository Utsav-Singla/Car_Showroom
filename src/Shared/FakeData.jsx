import {faker} from '@faker-js/faker'

function createRcl(){
  return {
    name: faker.vehicle.vehicle(),
    fueltype : faker.vehicle.fuel(),
    model:faker.vehicle.model(),
    type:faker.vehicle.type(),
    image:'/bmw.jpeg',
    miles:10000,
    geartype:'Automatic',
    price:faker.finance.amount({min:$4000,max:$20000})
  };
}
const carList = faker.helpers.multiple(createRcl,{
  count:7
})

export default{
  carList
}