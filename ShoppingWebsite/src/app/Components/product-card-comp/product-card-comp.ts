import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Product } from '../../product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-product-card-comp',
  imports: [CommonModule,FormsModule],
  templateUrl: './product-card-comp.html',
  styleUrl: './product-card-comp.css'
})
export class ProductCardComp {
  @Input() product:Product=new Product(0,"","","",0,0,false);
  @Output() item_selected_event=new EventEmitter<{product: Product, state: boolean}>();
  @Output() amount_changed_event = new EventEmitter<{ id: number, amount: number }>();
  quantity:number=0;

  SendEventSelectedProduct(current_state:boolean){
    this.item_selected_event.emit({ product: this.product, state: current_state });
  }

  SendEventAmountUpdate(){
    this.amount_changed_event.emit({id:this.product.id,amount:this.product.amount})
  }

  ChangedInputValue(event:Event){
    this.SendEventAmountUpdate();
    const input_html=event.target as HTMLInputElement;
    if(Number(input_html.value)>0){
      this.SendEventSelectedProduct(true);
    }
    else{
      this.SendEventSelectedProduct(false);
    }
  }

  

  

  

}
