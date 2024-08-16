class Product {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    get name() {
        console.log(`get name 동작...`);
        return this._name;  
    }

    get price() {
        console.log("get price 동작...");
        return this._price;  
    }

    set name(value) {
        console.log(`set name 동작...`);
        this._name = value;    
    }

    set price(value) {
        console.log(`set price 동작...`);
        if(value <= 0) {
            console.log('가격은 0보다 같거나 작을 수 없습니다.');
            this._price = 0;
            return
            
        }
        this._price = value;
    }
}
// _의 의미
// 내부 프로퍼티를 하나 만들고, getter와 setter는 내부 프로퍼티를 사용하게 하여
// 무한루프를 피해갈 수 있도록 하기 위함.
// 내부프로퍼티는 외부에서 접근이 불가능.

let phone = new Product('전화기', 23000);
console.log(phone.name + ', ' + phone.price);

// 직접 참조해서 사용할 수 있는데 왜 getter랑 setter를 사용할까?
// getter & setter
// 데이터를 꺼내거나 수정할 때 편리함.

// let computer = new Product('컴퓨터', -150000);
// console.log(computer.name + "," + computer.price);
