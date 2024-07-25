const user = {
    id : 'user',
    login : function() {
        console.log(`${this.id}님 로그인 되었습니다. `);
        
    }
}

// 프로토타입은 프로퍼티를 읽을 때만 사용하며
// 프로퍼티를 추가, 수정, 삭제 하는 연산은 객체에다가 직접 한다.
const student = {
    __proto__ : user
}

/* 
login 메소드 내의 this는 프로토 타입에 영향을 받지 않고,
메소드를 객체에서 호출했던, 프로토타입에서 호출했던 상관없이
this 언제나 . 앞에 있는 객체이다.
*/
student.id = 'user01';
console.log(student);

student.login();

console.log('------------------------');

for(let prop in student) {
    // for in 반복문은 상속 프로퍼티도 순회 대상에 포함시킨다.
    console.log(prop);
    
    /* 
    hasOwnProperty()
    key에 대응하는 프로퍼티가 상속 프로퍼티가 아니고 obj에 직접 구현되어 있는 프로퍼티일 때만
    true를 반환한다.
    */
   let isOwn = student.hasOwnProperty(prop);

   if(isOwn) {
    console.log(`객체 자신의 프로퍼티 ${prop}`);
    
   } else {
    console.log(`상속 프로퍼티 ${prop}`);
    
   }
    
}

