const user1 = {
    username: "aaa",
    password: "1234",
}
const user2 = {
    username: "bbb",
    password: "1234",
}
const user3 = {
    username: "ccc",
    password: "1234",
}

const users = [user1, user2, user3];
const userInfoString = users.map(user => `사용자명: ${user.username} 비밀번호: ${user.password}`);
const userComponents = users.map(user => 
    `
        <label>사용자이름</label>
        <div> ${user.username}</div>
        <label>비밀번호</label>
        <div> ${user.password}</div>
    `
).join("");
console.log(userComponents);

const users2 = users.filter(user => user.username !== "ccc")
.map(user => user.username === "bbb" ? `사용자명: ${"ddd"} 비밀번호: ${user.password}` 
    : `사용자명: ${user.username} 비밀번호: ${user.password}`);

console.log(users2);
//===================================================================================
const users3 = users.map(user => {
    if(user.username === "bbb") {
        return {
            ...user,
            username: "ddd",
        }
    }
    return user;
}).filter(user => user.username !== "ccc");

console.log(users3);


const nums = [1, 2, 3, 4, 5];
const nums2 = nums.map(num => num * 2);
console.log(nums2);

