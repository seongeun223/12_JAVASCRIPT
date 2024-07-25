/* 
02. 문자열 타입
문자열 타입은 텍스트 데이터를 나타내는데 사용된다.
문자열은 작은 따옴표(''), 큰따옴표(""), 또는 백틱(``)으로 텍스트를 감싼다.
자바에서는 String -> 객체, 자바스크립트에서는 String -> 원시타입
*/

var string;
string = 'javaScript';
string = "javaScript";
string = `javaScript`; // 백틱(ES6)

string = '작은 따옴표로 감싼 문자열 내의 "큰 따옴표"는 문자열로 인식';
string = "큰 따옴표로 감싼 문자열 내의 '작은 따옴표'는 문자열로 인식";

/* 
템플릿 리터럴
-> 멀티라인 문자열, 표현식 삽입 등의 편리한 문자열 처리 기능을 제공하는 문자열 표기법
*/

// var str = '안녕하세요.
// 반갑습니다';

// 큰따옴표, 작은따옴표에서는 이스케이프 시퀀스를 사용해야 줄바꿈을 할 수 있다.
var str = '안녕하세요. \n반갑습니다';
console.log(str);

var multiline = `안녕하세요.
반갑습니다.`
console.log(multiline);

var lastName = '홍';
var firstName = '길동';

console.log('제 이름은 ' + lastName + firstName + '입니다.');

// 표현식 삽입 -> 무조건 백틱 내에서 사용해야 한다.
console.log(`제 이름은 ${lastName}${firstName}입니다.`);



