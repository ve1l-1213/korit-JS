/**
 * 배열
 * 
 */

const numbers = [1,2,3,4,5,6,7,8,9];

for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

for(let num of numbers) {
    console.log(num);
}
numbers.forEach((num) => console.log(num));

numbers.push(10);

console.log(numbers);
console.log(numbers.pop()); // 제일 뒤에서 부터 꺼내버림 (빼버림)
console.log(numbers.includes(5)); // 값을 포함하고 있는지 t/f 
console.log(numbers.indexOf(5));
console.log(numbers.lastIndexOf(4));
console.log(numbers.concat([11, 12, 13, 14, 15]));
console.log(numbers);
const newNumbers = numbers.concat([11, 12, 13, 14, 15]);
console.log(newNumbers);
const newNumbers2 = [...numbers, 11, 12, 13, 14, 15]; //스프레드 ... 안에 들어 있는 값들만 꺼내옴
console.log(newNumbers2);

const newNumbers3 = numbers.slice(5);

console.log (newNumbers3);

// const newNumber4 = newNumbers.slice(0, numbers.indexOf(4)
// .concat(newNumbers.slice(newNumbers.indexOf(4) + 1)));
// console.log(newNumber4);

const newNumber5 = numbers.splice(3, 1);
console.log(newNumber5);
console.log(numbers);

const newNumber6 = numbers.splice(4, 2, 11, 12); // 제거한 위치에 요소 추가 (11, 12)
console.log(newNumber6);
console.log(numbers);

numbers.splice(4, 0, 20, 21);
console.log(numbers);