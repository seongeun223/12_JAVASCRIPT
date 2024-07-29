// 변화 상황

// 1. 일반 함수의 this

(function() {

    'use strict'

    function test() {
        console.log(this);
        
    }

    test(); // undefined

    new test(); // test {}
}());