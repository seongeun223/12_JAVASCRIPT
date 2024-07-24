// for in 반복문

var student = {
    name : '유관순',
    age : 16,
    getInfo() {
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
};

for (var key in student) {
    console.log(`key : ${key}`);
    console.log(`student[key] : ${student[key]}`);
    
    
}
