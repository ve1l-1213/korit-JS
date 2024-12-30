/**
 * 연산자
 * 
 * 산술연산자
 * + - * / % **(제곱)
 * 
 */
console.log(5 ** 2);
console.log(5 << 2);
/**
 * 증감
 * ++ --
 */

/**
 * 비교
 * 
 * < <= > >= == != === !==
 * 
 * javascript의 특징은 기본적을 변수의 타입이 정해지지 않음
 * 
 * == != 타입검사 없음 === !== 타입검사 있음
 */

console.log(1 == 1); // true;
console.log(1 == "1"); // true; 
console.log(1 === "1"); // false;


/**
 * 논리
 * 
 * && ||
 * 
 * 단축평가
 * 
 * || 단축평가
 * 
 * 논리 자료 값 || anything
 * 논리 자료 값이 === true 면 -> true;
 * 논리 자료 값이 === false 면 -> anything;
 * 
 * 논리 자료 값 && anything
 * 논리 자료 값이 === true 면 -> anything;
 * 논리 자료 값이 === false 면 -> false;
 * 
 * null 병합 연산
 * 
 * anything1 ?? anything2
 * 좌항(anything) === null || 좌항(anything) === undefined => 우항(anything2)
 * 좌항(anything) !== null || 좌항(anything) !== undefined => 좌항(anything1)
 * 
*/
console.log(1 === 1 || "김준일");
console.log(1 !== 1 || "김준일");
console.log(1 === 1 && "김준일");
console.log(1 !== 1 && "김준일");

console.log(null ?? "leeminwoo");
console.log("leeminwoo1" ?? "leeminwoo2");

/**
 * Not 연산
 * 
 * !, !!
 * 
 */

console.log("============ Not 연산 ============");
console.log(!"");
console.log(!0);
console.log(!null);
console.log(!undefined);
console.log(![]); // 배열은 내부에 값이 없더라도 배열의 주소는 존하기 때문에 true
console.log(typeof []); // 주소 있음 = 객체
console.log(![].length); // 배열이 비어 있다면 true

var name = "김준일";
if(!name) {
    console.log("이름이 비어 있습니다.");
}

if(!!name) {
    console.log ("이름이 비어있지 않습니다.")
}



