// 계산된 프로퍼티 이름
var prefix = 'key'
var index = 0;

var obj = {};

// ES5
// 객체 리터럴 외부에서 대괄호 표기법을 사용해야 한다.
obj[prefix + '_' + index] = index++;
obj[prefix + '_' + index] = index++;
obj[prefix + '_' + index] = index++;

console.log(obj);

// ES6
// 객체 리터럴 내부에서도 계산된 프로퍼티 이름으로 동적 생성할 수 있다.
var obj2 = {
    [`${prefix}-${index}`] : index++,
    [`${prefix}-${index}`] : index++,
    [`${prefix}-${index}`] : index++,
};

console.log(obj2);


