let store1 = [
  {
    name: "Apple",
    qty: 500,
    price: 50,
  },
  {
    name: "Orange",
    qty: 100,
    price: 40,
  },
  {
    name: "Mango",
    qty: 200,
    price: 100,
  },
];
let store2 = [
  {
    name: "Apple",
    qty: 500,
    price: 10,
  },
  {
    name: "Orange",
    qty: 100,
    price: 20,
  },
  {
    name: "Mango",
    qty: 200,
    price: 70,
  },
];
let store3 = [
  {
    name: "Apple",
    qty: 2,
    price: 30,
  },
  {
    name: "Orange",
    qty: 34,
    price: 20,
  },
  {
    name: "Mango",
    qty: 23,
    price: 50,
  },
];

let store1_total = 0;
let store2_total = 0;
let store3_total = 0;

const calc_stock = (store_obj) => {
  let total_stock = 0;
  store_obj.forEach((products) => {
    total_stock += products.qty * products.price;
  });
  return total_stock;
};
store1_total = calc_stock(store1);
store2_total = calc_stock(store2);
store3_total = calc_stock(store3);

let total_cost = {
  store1: store1_total,
  store2: store2_total,
  store3: store3_total,
};
console.log(total_cost);
