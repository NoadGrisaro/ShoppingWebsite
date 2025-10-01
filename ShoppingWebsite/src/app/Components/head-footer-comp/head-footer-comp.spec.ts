import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadFooterComp } from './head-footer-comp';

describe('HeadFooterComp', () => {
  let component: HeadFooterComp;
  let fixture: ComponentFixture<HeadFooterComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadFooterComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadFooterComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
