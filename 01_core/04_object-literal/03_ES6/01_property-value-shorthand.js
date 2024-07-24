// 프로퍼티 값 단축 구문

var id = 'p-0001';
var price = 30000;

var product = {
    id : id,
    price : price,
};

console.log(product);

var product2 = {id, price};
console.log(product2);

