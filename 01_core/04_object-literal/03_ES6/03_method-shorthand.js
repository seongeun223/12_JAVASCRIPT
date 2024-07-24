// 메소드 단축

// ES5에서 메소드를 정의하는 방법 (프로퍼티 값으로 함수 할당)
var dog = {
    name : '구찌',

    eat : function(food) {
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요.`);
        
    }
}
dog.eat('고구마');

var dog2 = {
    name : '구찌',

    // 메소드 축약 표현
    eat(food) {
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요.`);
        
    }
}
dog.eat('고구마');