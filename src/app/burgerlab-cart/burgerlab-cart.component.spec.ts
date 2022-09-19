import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerlabCartComponent } from './burgerlab-cart.component';

describe('BurgerlabCartComponent', () => {
  let component: BurgerlabCartComponent;
  let fixture: ComponentFixture<BurgerlabCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurgerlabCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerlabCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
