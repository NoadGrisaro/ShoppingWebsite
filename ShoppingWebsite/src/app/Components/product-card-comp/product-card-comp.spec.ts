import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardComp } from './product-card-comp';

describe('ProductCardComp', () => {
  let component: ProductCardComp;
  let fixture: ComponentFixture<ProductCardComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
