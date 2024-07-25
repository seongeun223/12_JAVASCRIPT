// [[Prototype]]

const user = {
    activate : true,
    login : function() {
        console.log('로그인이 되었습니다.');
        
    }
}

const student = {
    passion : true
}

// .__proto__ : [[Prototype]]의 getter, setter이다.
// 요즘에는 함수 Object.getPrototypeOf or Object.setPrototypeOf
// 이 두 메소드를 통해서 get, set 한다.
student.__proto__ = user;

console.log(student.activate);

student.login();

console.log(student.passion);

