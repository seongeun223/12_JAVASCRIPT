
// 1. 변수 중복 선언 허용
var msg = '안녕하세요';
console.log(msg);

// var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언이 허용됨.
var msg = '반갑습니다.';
console.log(msg);

// 초기화문이 없는 변수 선언문은 중복 선언했을 때 무시됨.
var msg;
console.log(msg);

// 2. 함수 레벨 스코프
// 함수 외부에서 var 키워드로 선언한 변수는 코드 블록 내에서 선언해도 모두
// 전역변수 처리가 된다.
var i = 0;
for(var i = 0; i < 10; i++) {}
console.log(i); // 의도치 않게 값이 0에서 10으로 변경됨.

// 3. 변수 호이스팅
// var 키워드로 변수를 선언하면 변수 호이스팅에 의해 변수 선언문이 스코프의 선두로
// 끌어올려진 것처럼 동작한다.
// 변수 선언문 이전에 참조 가능
console.log('------ 변수 호이스팅 ------');

console.log(test);


test = '반갑습니다.';

console.log(test);

var test;





