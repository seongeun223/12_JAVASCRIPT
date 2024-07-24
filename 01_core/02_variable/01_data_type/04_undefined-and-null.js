/* 
undefined 타입
undefined 타입의 값은 -> undefined가 유일하다.
var 키워드로 선언한 변수는 암묵적으로 undefined로 초기화 된다.
따라서 선언 이후 값을 할당하지 않으면 undefined가 반환됨.
*/

var undef;
console.log(undef);

/* 
null 타입
null 타입의 값은 -> null이 유일하다.
변수에 값이 없다는 것을 의도적으로 명시할 때 사용
이전에 할당되어 있던 값에 대한 참조를 명시적으로 제거하지 않는다는 것을 의미
*/

var nullVal = 'something';
nullVal = null;

console.log(nullVal);

