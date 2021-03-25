/* esionascimento */
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};
/* 1-Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701". */
const customerInfo = (order) => {
  const aux = `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`;
  return(aux);
}
console.log(`${customerInfo(order)}
`);

/* 2-Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00." */
const orderModifier = (order) => {
  const clone = Object.assign({}, order);
  clone.name = 'Luiz Silva';
  clone.payment.total = 50;
  clone.order.pizza['muzzarella'] = 'muzzarella';
  clone.order.pizza['calabresa'] = 'calabresa';
  const aux = `Olá ${clone.name}, o total do seu pedido de ${clone.order.pizza.muzzarella}, ${clone.order.pizza.calabresa} e ${clone.order.drinks.coke.type} é R$ ${clone.payment.total},00.`;
  return (aux);
}

console.log(`${orderModifier(order)}
`);