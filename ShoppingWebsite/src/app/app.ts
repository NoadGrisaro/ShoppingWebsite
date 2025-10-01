import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Product } from './product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeadFooterComp } from './Components/head-footer-comp/head-footer-comp';
import { ProductCardComp } from './Components/product-card-comp/product-card-comp';

@Component({
  selector: 'app-root',
  imports: [CommonModule,HeadFooterComp,FormsModule,ProductCardComp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  products:Product[]=[
    new Product(0,"Cucumber","https://st1.foodsd.co.il/Images/Articles/xxl/5xocq218ys83hs1x.jpg","Vegetable",3,0,false),
    new Product(1,"Tomato","https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bright_red_tomato_and_cross_section02.jpg/1200px-Bright_red_tomato_and_cross_section02.jpg","Vegetable",4,0,false),
    new Product(2,"Potato","https://bostan-dan.co.il/wp-content/uploads/2023/09/AdobeStock_83331898-1-scaled.jpeg","Vegetable",3,0,false),
    new Product(3,"Onion","https://st1.foodsd.co.il/Images/Products/large/q1d6MHVa3laEbw7i.jpg","Vegetable",2,0,false),
    new Product(4,"Carrot","https://market50.b-cdn.net/refresh/products/%D7%92%D7%96%D7%A8-%D7%A9%D7%9C%D7%99%D7%98-%D7%90%D7%A8%D7%95%D7%96-2140211551.jpg","Vegetable",4,0,false),
    new Product(5,"Apple","https://zanzuri.co.il/wp-content/uploads/2023/05/0000325_-.jpeg","Fruit",6,0,false),
    new Product(6,"Banana","https://ahitari.com/wp-content/uploads/2025/03/829fbb_aa18d79afe9143bcab081d47a185ccccmv2.png","Fruit",5,0,false),
    new Product(7,"Orange","https://king-solomon.co.il/wp-content/uploads/2021/07/shukshlomo-orange.png","Fruit",4,0,false),
    new Product(8,"Grapes","https://www.carmella.co.il/wp-content/uploads/2018/10/%D7%A2%D7%A0%D7%91%D7%99%D7%9D_%D7%99%D7%A8%D7%95%D7%A7%D7%99%D7%9D.jpg","Fruit",7,0,false),
    new Product(9,"Watermelon","https://cdn.cashcow.co.il/images/6a8bd1f5-58c7-443f-b1d5-af33545e9161.jpg","Fruit",10,0,false),
    new Product(10,"Bread","https://boker.co.il/userfiles/web_pages/picture_99.webp","Bakery",8,0,false),
    new Product(11,"Milk","https://lh3.googleusercontent.com/proxy/MnKw86WJ2PGAW2Lt2USe2i12He5K4W7GpMXKjWSY6_CCHSFnn9Ayu0MBS_6RxDcChm0PmfisPvaRgxJbBGqvGY62HQvN5zZtRwkkmtkD","Dairy",6,0,false),
    new Product(12,"Cheese","https://d3o5sihylz93ps.cloudfront.net/wp-content/uploads/2023/05/14170316/shutterstock_330914774-Medium.jpg","Dairy",12,0,false),
    new Product(13,"Eggs","https://www.rami-levy.co.il/_ipx/w_366,f_webp/https://img.rami-levy.co.il/product/7290001201510/369561/medium.jpg","Dairy",9,0,false),
    new Product(14,"Butter","https://chen-chesed.com/wp-content/uploads/2020/12/%D7%97%D7%9E%D7%90%D7%94-%D7%AA%D7%A0%D7%95%D7%91%D7%94.jpg","Dairy",7,0,false),
    new Product(15,"Chicken Breast","https://s3.eu-central-1.amazonaws.com/images-il.rexail.com/images/products/d8c10e655eeedccc611b93477691119f.jpg","Meat",20,0,false),
    new Product(16,"Beef","https://cdn11.bigcommerce.com/s-qieb3njg5z/images/stencil/1280x1280/products/252/2818/IMG_3668__35620.1741628121.jpg?c=1","Meat",30,0,false),
    new Product(17,"Fish","https://www.udifish.co.il/images/itempics/100012_27032019150321.jpg","Meat",18,0,false),
    new Product(18,"Rice","https://s3.eu-central-1.amazonaws.com/images-il.rexail.com/images/products/359d89e03b2de645ba1a50858069c73d.jpg","Grain",12,0,false),
    new Product(19,"Pasta","https://sk-m.co.il/wp-content/uploads/2024/10/%D7%A4%D7%A1%D7%98%D7%94-%D7%A6%D7%93%D7%A4%D7%99%D7%9D-%D7%A7%D7%98%D7%A0%D7%99%D7%9F.png","Grain",10,0,false)
  ];
  the_total_price:number=0;
  products_selected:number=0;
  products_unselected:number=20;
  categories_selected:string[]=[];
  categories_unselected: string[] = ["Vegetable","Fruit","Bakery","Dairy","Meat","Grain"];



  UpdateHeader() {
    this.the_total_price = 0;
    this.products_selected = 0;
    this.products_unselected = 20;
    this.categories_selected = [];
    this.categories_unselected = ["Vegetable","Fruit","Bakery","Dairy","Meat","Grain"];
    for (let product of this.products) {
      if (product.selected) {
        this.products_selected++;
        if (!this.categories_selected.includes(product.category)) {
          this.categories_selected.push(product.category);
          this.categories_unselected = this.categories_unselected.filter(
            category => category !== product.category
          );
        }
        this.the_total_price += (product.price*product.amount);
      } 
    }
    this.products_unselected=20-this.products_selected;
  }


  GetSelectedProductEvent(event:{product:Product,state:boolean}){
    this.products[event.product.id].selected=event.state;
    this.UpdateHeader();
    
  }
  GetSAmountChangedEvent(event:{id:number,amount:number}){
    this.products[event.id].amount=event.amount;
    this.UpdateHeader();
  }
  
}
