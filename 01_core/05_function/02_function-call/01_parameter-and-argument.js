// 매개변수와 인수

function hello(name) {

    // 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
    console.log(name);

    // 모든 인수는 암묵적으로 arguments 객체의 프로퍼티로 보관된다.
    console.log(arguments);

    return `${name}님 안녕하세요!~`;
};

console.log(hello('홍길동'));

var result = hello();
console.log(result);

