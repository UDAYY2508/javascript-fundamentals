/*class mathUtil{
    static PI = 3.14;

    static area(r){
        return this.PI * r * r;
    }
    static circum(r){
        return 2 * this.PI * r;
    }
}
console.log(mathUtil.area(10));
console.log(mathUtil.circum(10));*/
class User{
    static usercount = 0;
    constructor(uname){
        this.uname = uname;
        User.usercount++;
    }
}
const uname1 = new User("uday");
const uname2 = new User("bobby");
console.log(User.usercount);