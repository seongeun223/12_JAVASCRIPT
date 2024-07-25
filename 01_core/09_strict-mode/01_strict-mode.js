// 엄격 모드

function test() {

    x = 10; // 암묵적으로 전역변수가 됨

}

test();

console.log(x);

// ES6에서 도입된 클래스와 모듈 기본적으로 strict mode가 적용된다.
