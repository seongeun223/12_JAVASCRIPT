// 1. Number 생성자 함수를 new 연산자 없이 호출
console.log(Number("10"));
console.log(Number("10.01"));
console.log(Number(true));
console.log(Number(false));

console.log('====== parse 이용 ======');

// 2. parseInt, parseFloat 함수 이용 (문자열 -> 숫자)
console.log(parseInt('10'));
console.log(parseFloat('10'));
console.log(parseInt('10.01')); // 10
console.log(parseFloat('10.01'));




