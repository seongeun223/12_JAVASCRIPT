// 객체 구조 분해 할당

let pants = {
    productName : '배기팬츠',
    color : '검정색',
    price : 30000,
}

let {productName, color, price} = pants

console.log(productName);
console.log(color);
console.log(price);

// {객체 프로퍼티 : 목표 변수} 형식으로 작성 가능

let {color: co, productName:pn, price:pr} = pants;
console.log(pn);
console.log(co);
console.log(pr);





