class product{
    constructor(productName,price){
        this.productName = productName;
        this.price = price;
    }
    productDisplay(){
        console.log(`the ${this.productName} is of ${this.price.toFixed(2)} price`);
    }
    calclateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.10;

const product1 = new product("coffee",30.99);
const product2 = new product("cookie",50.9);
const product3 = new product("knife",90);
product1.productDisplay();
product2.productDisplay();
product3.productDisplay();

const totalPrice = product3.calclateTotal(salesTax);
console.log(totalPrice);