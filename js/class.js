class User {
    userName;
    password;
    name;
    email;

    constructor(userName = null, password = null, name = null, email = null) {
        this.userName = userName;
        this.password = password; 
        this.name = name; 
        this.email = email;
    }

    toString() {
        return `User = {username: ${this.userName}, passwird: ${this.password}}`;
    }
}

const user1 = new User("aaa", "1111");
console.log(user1.toString());