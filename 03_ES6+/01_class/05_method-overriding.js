// 메소드 오버라이딩
// 부모 메소드의 전체를 바꾸지 않고, 일부 기능만 변경하고 싶을 때
// => 부모 메소드의 기능을 확장하고 싶을 때 사용한다.
class Animal {

    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    // 먹으면 살찌는
    eat(foodWeight) {
        this.weight += foodWeight;
        console.log(`${this.name}는/은 ${foodWeight}kg의 식사를 하고 ${this.weight}kg이 되었습니다.`);
        
    }

    // 움직여서 살 빼기
    move(lostWeight) {
        if(this.weight > lostWeight)
            this.weight -= lostWeight;
        console.log(`${this.name}는/은 움직임으로 인해 ${lostWeight}kg 감량되어
            ${this.weight}kg이 되었습니다.`);
        
    }
}

class Bear extends Animal {

    attack(target) {
        console.log(`${this.name}은 ${target}을 공격합니다.`);
        
    }

    // Animal의 move를 확장시키는 Bear의 move
    move(target) {

        // super. 부모 클래스의 메소드를 참조
        super.move(0.1);
        this.attack(target)
    }
}
let bear = new Bear("지리산 반달가슴곰", 105);
bear.move("서브웨이 이달의 메뉴");