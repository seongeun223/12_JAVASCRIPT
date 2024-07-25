// 인스턴스 생성과정

function Student(name, age) {

    // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩 되는 과정이
    // 런타임 이전에 실행된다.
    console.log(this);

    // 2. this에 바인딩 되어있는 인스턴스를 초기화한다.
    this.name = name;
    this.age = age;
    this.getInfo = function() {
        return `${this.name}(은)는 ${this.age}세 입니다.`
    }

    // 3. 완성된 인스턴스가 바인딩 된 this 암묵적으로 반환
    // 생성자 내부에서 return은 생략하는 것이 기본

    // return {}; // 명시적으로 객체를 반환하면 암묵적인 this반환이 무시된다.
    return 1;

}

const student = new Student('홍길동', 20);
console.log(student);
