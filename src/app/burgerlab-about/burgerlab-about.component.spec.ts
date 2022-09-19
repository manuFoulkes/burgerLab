import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerlabAboutComponent } from './burgerlab-about.component';

describe('BurgerlabAboutComponent', () => {
  let component: BurgerlabAboutComponent;
  let fixture: ComponentFixture<BurgerlabAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurgerlabAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerlabAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
