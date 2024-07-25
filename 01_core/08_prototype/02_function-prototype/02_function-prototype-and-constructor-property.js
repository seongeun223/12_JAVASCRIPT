// 1. 함수의 (디폴트 프로퍼티) 프로토타입과 constructor (생성자) 프로퍼티
// 모든 함수는 기본적으로 prototype 프로퍼티를 갖는다.

function Student() {};

// Student.prototype = { constructor : Student };

// 디폴트 프로퍼티 "prototype"은 constructor 프로퍼티 하나만 있는
// 객체를 가르킨다. 여기서 constructor는 함수 자신을 가르킨다.
console.log(Student.prototype.constructor);

console.log(Student.prototype.constructor === Student); // true

let student = new Student(); // {constructor : Student} 상속받음


// true 라고 나온다는 건 [[Prototype]]을 거쳐서 접근함을 의미하고
// Student를 상속받는다는 것을 확인할 수 있다.
console.log(student.constructor === Student); // true


