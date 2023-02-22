import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPopulateComponent } from './cart-populate.component';

describe('CartPopulateComponent', () => {
  let component: CartPopulateComponent;
  let fixture: ComponentFixture<CartPopulateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartPopulateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartPopulateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
