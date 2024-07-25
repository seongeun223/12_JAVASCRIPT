
const num = new Number(100);

// num은 Number.prototype을 상속받았는가?
console.log(num.__proto__ === Number.prototype);

// num은 Object.protorype을 상속받았는가?
console.log(num.__proto__.__proto__.__proto__ === Object.prototype);

// 체인 맨 위에는 null이 있다.__proto__ null
console.log(num.__proto__.__proto__.__proto__ === null);


// 참고

// 내장 프로초타입은 수정이 가능하다.

String.prototype.hello = function() {
    console.log(`hello, ${this}`);
    
}

"JavaScript".hello();

// 내장 프로토타입의 메소드를 빌려서 새로운 메소드를 만드는 것 가능
const obj = {
    0 : "Hello",
    1 : "JavaScript",
    length: 2,
}

obj.join = Array.prototype.join;

console.log(obj.join(','));

