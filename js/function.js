fx1();

function fx1() {
    console.log("fx1 호출");
}

function fx2(num1, num2) {
    console.log(num1 + num2);
}

function fx2(num1, num2, num3=0) {
    console.log(num1 + (num2 ?? 0) + num3); //연산자 우선순위 있음
}

fx2(10); //오버로딩 개념 없음 오버라이드만 있음 대신 디폴드 값 넣어줌 포인트자료형

const num1 = 10;

function fx3() {
    return num1;
}

console.log(fx3());

function fx4() {
    console.log("fx4 호출");

    function fx5() {
        console.log("fx5 호출");
    }

    fx5();
}

const fx6 = fx4();
// fx6();

function fx11() {
    console.log("fx11 호출");
}

function fx12() {
    console.log("fx12 호출");
}

function fx13() {
    console.log("fx13 호출");
}

const fxArray = [fx11, fx12, fx13];
console.log(fxArray);

for(let fx of fxArray) {
    fx();
}

// callback 함수
function add(n1, n2) {
    return n1 + n2;
}

function sub(n1, n2) {
    return n1 - n2;
}
function run(fx) {
    const result = fx(10, 20);
    console.log(result);
}

run(add);
run(sub);

/**
 * 화살표 함수
 */
function fx(arg1, arg2) {
    return"리턴";
}
fx(1, 2);

const arrowfx = (arg1, arg2) => {
    return "리턴";
}
arrowfx(3, 4);

const arrowfx2 = arg1 => arg1 + 1;
arrowfx2(10);

function run(fx) {
    fx();
}

run(() => console.log("test"));


