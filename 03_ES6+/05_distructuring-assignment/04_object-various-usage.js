
let shirts = {
    productName : '베이직셔츠',
};

let {
    productName: productName2 = '어떤 상품',
    color : color2 = '어떤 색상',
    price : price2 = 0,
} = shirts

console.log(`productName2 : ${productName2}`);
