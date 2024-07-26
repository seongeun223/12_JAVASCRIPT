// global object
/* 
전역 객체는 코드가 실행되기 전 이전 단계에 자바스크립트 엔진에 의해
어떤 객체보다도 먼저 생성되는 특수한 객체
어떤 객체에도 속하지 않은 최상위 객체

Node Js 환경에서는 global 전역 객체
브라우저 환경에서는 window가 전역 객체
- 전역 객체 자신은 어떤 객체의 프로퍼티도 아니며
-객체의 계층적 구조상 표준 빌트인 객체와 호스트 객체를 프로퍼티로 소유한다는 것을 의미.

-> 프로토 타입 상속 관계의 최상위 객체라는 의미가 아니다.
*/

// 빌트인 전역 프로퍼티

console.log('============= Infinity ==============');

// Infinity : 무한대를 나타내는 숫자 값

// 전역 프로퍼티는 global 생략하고 참조할 수 있다.
console.log(global.Infinity === Infinity);
// 양의 무한대
console.log(10/0);

// 음의무한대
console.log(-10/0);
console.log(typeof Infinity); // number

console.log('============= NaN ==============');

// NaN : (Not a Number) 숫자가 아님을 의미하는 숫자 값
console.log(Number.NaN);
console.log(global.NaN); // Number.NaN 프로퍼티와 같다.
console.log(Number('abc'));
console.log(10 * 'abcd');
console.log(typeof NaN); // number

console.log('============= undefined ==============');

// undefined : 원시 타입 undefined
console.log(global.undefined);;
let nothing;
console.log(nothing);
console.log(typeof undefined); // undefined










