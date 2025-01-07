class Ractangle{
    constructor(width,height){
        this.width = width
        this.height = height
    } 

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;

        }else{
            console.error("width must be a positive no");
        }
    }
    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;

        }else{
            console.error("Height must be a positive no");
        }
    }
    get width(){
        return this._width.toFixed(1);
    }
    get height(){
        return this._height.toFixed(1);
    }
    get area(){
        return (this._height * this._width).toFixed(1);
    }
}


const rectangle = new Ractangle(3,44);
rectangle.height =33;
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);