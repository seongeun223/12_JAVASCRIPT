
let student = {
    name : 'bear',
    age : 20,
}

let student2 = {
    name : 'bear',
    age : 20,
}

// Constructor
// 이름 첫번째에 대문자를 사용하는 것이 관례 (일반함수와 구분하기위함)
// function Student() {
//     this.name = 'bear';
//     this.age = 20;
// }

// // 생성자 사용법
// let cStudent1 = new Student();

// console.log(cStudent1);

function Student(name, age) {
    this.name = name;
    this.age = age;
}

let cStudent1 = new Student('연진', 20);
let cStudent2 = new Student('강현', 20);

console.log(cStudent1);
console.log(cStudent2);

// 프로토타입
console.log(Student.prototype);

Student.prototype.gender = '남';

let cStudent3 = new Student('성민', 20);

console.log(cStudent3);

console.log(cStudent3.gender);

console.log(cStudent3.__proto__);