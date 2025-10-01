export class Product {
    id:number=0;
    name:string="";
    img:string="";
    category:string="";
    price:number=0;
    amount:number=0;
    selected:boolean=false;
    constructor(id:number,name:string,img:string,category:string,price:number,amount:number,selected:boolean){
        this.id=id;
        this.name=name;
        this.img=img;
        this.category=category;
        this.price=price;
        this.amount=amount;
        this.selected=selected;
    }
}
