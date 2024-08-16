// iterable 순회가능한

for(var i = 0; i <= 5; i++) {
    console.log(i);
    
}

// forEach
[1,2,3,4,5].forEach(num => console.log(num));

console.log([1,2,3,4,5][Symbol.iterator]());
console.log('안녕하세요'[Symbol.iterator]());

/* 
Object [Array Iterator] {}
Object [String Iterator] {}
이런 식으로 출력결과가 나오면 Iterable한 자료형이다.
Iterable한 자료형에는 for...of 라는 반복문 사용 가능

Array, 문자, arguments, NodeList, Map, Set
*/

let range = {
    from: 1,
    to: 5,
}
// console.log(range[Symbol.iterator]());

range[Symbol.iterator] = function () {

    return {
        current: this.from,
        last: this.to,

        // next()는 값을 객체 {done:..., value:...} 반환해준다.
        // done 반복이 끝났음을 의미
        next() {
            if (this.current <= this.last) {
                return {done: false, value: this.current++};
            } else {
                return {done: true};
            }
        }
    }
}


for (let num of range) {
    console.log(num);
    
}

// 객체 안에 있는 값들을 반복시키고 싶을 때
// => for in 반복문

let student = {
    name: '홍길동',
    age : 16,
    gender: 'M',
}

// 객체 안에 있는 값을 꺼낼 때
for (var key in student) {
    console.log(student[key]);
    
}


