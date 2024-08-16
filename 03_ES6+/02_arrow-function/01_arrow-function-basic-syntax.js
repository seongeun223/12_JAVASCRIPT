// arrow-function (화살표 함수)
// ES6에서 도입된 화살표 함수
// funtion 키워드 대신 화살표를 사용해 좀 더 간략하게 함수 선언이 가능하다.
// 화살표 함수는 항상 익명함수로 정의된다. 본문이 한 줄인 함수를 작성할 때 유용

let message;

// 기존 function 정의 방법
message = function() {
    return "Hello world!"
}

console.log(message());

// 화살표 함수
message = () => {
    return "화살표 함수 Hello world!"
}

console.log(message());

// 명령문이 하나만 있을 때, 중괄호도 생략 가능
// 이 때, 함수 몸체 내부의 문이 값으로 평가될 수 있는 표현식이면
// 암묵적으로 반환되기 때문에 return도 생략 가능
message = () => "화살표 함수 Hello world!";

console.log(message());

// 매개변수가 있는 경우
message = (val1, val2) => "화살표" + val1 + val2;

console.log(message("함수", "편하다!"));

// 매개변수가 하나면 소괄호도 생략가능
message = val1 => "화살표" + val1;

console.log(message('함수 편하죠!!'));

// 객체 리터럴을 반환할 때 함수 몸체 부분을 소괄호로 감싸주어야 한다.
const createUser = (id, name) => ({id, name});

console.log(createUser(1, '이순신'));

// 소괄호로 감싸지 않을 경우
const createUser2 = (id,name) => {id,name};
// 객체로 인식해야 하는 중괄호를 함수 몸체 중괄호로 잘못 인식한다.

console.log(createUser2(1, '이순신'));





