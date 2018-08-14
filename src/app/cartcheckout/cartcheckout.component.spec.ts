import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartcheckoutComponent } from './cartcheckout.component';

describe('CartcheckoutComponent', () => {
  let component: CartcheckoutComponent;
  let fixture: ComponentFixture<CartcheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartcheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartcheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
