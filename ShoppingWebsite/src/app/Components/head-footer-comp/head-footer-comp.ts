import { Component,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-head-footer-comp',
  imports: [FormsModule],
  templateUrl: './head-footer-comp.html',
  styleUrl: './head-footer-comp.css'
})
export class HeadFooterComp {
  @Input() total_price:number=0;
  @Input() selected_products_amount:number=0;
  @Input() unselected_products_amount:number=0;
  @Input() selected_categories:string[]=[];
  @Input() unselected_categories:string[]=[];

}
