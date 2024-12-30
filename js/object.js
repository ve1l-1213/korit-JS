/**
 * 객체
 */

const obj = {
    name: "이민우",
    age: 25,
    print: () => console.log(`이름: ${obj.naem}, 나이; ${obj.age}`), // 오브젝트 내의 필드값 사용시 . 사용하여 호출해야함
}

obj.print();

const obj2 = {
    name: "이민우",
    age: 25,
    print: () => console.log(`이름: ${obj.naem}, 나이; ${obj.age}`), // 오브젝트 내의 필드값 사용시 . 사용하여 호출해야함
}

console.log(obj === obj2); //false 
console.log(JSON.stringify(obj) === JSON.stringify(obj2));
console.log(typeof JSON.stringify(obj));

/**
 * object -> JSON    JSON.stringfy(object)
 * JSON -> object    JSON.parse(json 문자열)
 * 
 * User 객체 생성
 * username, password, name, email
 */

const user = {
    username: "이민우",
    pssword: 1234,
    name: "민우",
    email: "1111@gmail.com",
    hobby: ["코딩", "코노", "유튜브"],
    address: {
        si: "부산",
        gungu: "연제구",
    },
    printUserInfo: () => console.log("사용자 정보 출력"), //JSON 에서 함수는 변환 안됨 변환 된 후에 돌아오면 함수가 사라져 있음
} 
user.name = "Hysa";
user.username = "Raven";
console.log(user);
console.log(typeof JSON.stringify(user));
console.log(JSON.stringify(user));
console.log(typeof JSON.parse(JSON.stringify(user)));
console.log(JSON.parse(JSON.stringify(user)));

const student = { 
    name: "이민우",
    age: 25,
    address: "부산 연제구",
    name: "이가연",
}

const key = "age";
const value = 32;


const student2 = { // 대괄호 => 배열안 요소 중괄호 => 객체안 요소 
    ...student,
    [key]: value, // 대괄호 없으면 속성(필드)값이 되어 버림
}
console.log(student2);

