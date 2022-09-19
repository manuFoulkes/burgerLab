import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerlabBurgersComponent } from './burgerlab-burgers.component';

describe('BurgerlabBurgersComponent', () => {
  let component: BurgerlabBurgersComponent;
  let fixture: ComponentFixture<BurgerlabBurgersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurgerlabBurgersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerlabBurgersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
