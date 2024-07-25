// 함수의 프로토 타입

// 생성자 함수의 프로토타입
// new 연산자를 사용해서 만든 객체는
// 생성자 함수의 프로토타입 정보를 사용해 [[Prototype]]을 설정한다.
const user = {
    activate : true,
    login : function() {
        console.log('로그인 되었습니다.');
        
    }
};

function Student(name) {
    this.name = name;
}

// 여기서 프로토 타입은 앞에서 배운 내용과 이름만 같을 뿐
// 실질적으로는 일반적인 프로퍼티를 생성한 것
Student.prototype = user;

let student = new Student("홍길동");

console.log(student.activate);
console.log(student);
