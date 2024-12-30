var name = "이민우";
console.log(name);
console.log(typeof name);
var age = 24;
console.log(age);
console.log(typeof age);
var address; //선언후 대입을 안함 undefined 자바 스크립드는 초기화 시 타입'선택'됨 null 과 다름
console.log(address);
console.log(typeof address);
address = 10;
console.log(address);
console.log(typeof address);
address += "10";
console.log(typeof address);
console.log(address);
address = null;
console.log(address);
console.log(typeof address);
address = {
    si: "부산시",
    gungu: "부산진구",
};
console.log(address);
console.log(typeof address);

/**
 * number 숫자 - 정수 실수;
 * 
 * String 문자열;
 * 
 * boolean 논리 - 참 부;
 * 
 * object (null 도 객체);
 * 
 * undefined = nonetype;
 * 
 * NaN (Not a Number);
 */