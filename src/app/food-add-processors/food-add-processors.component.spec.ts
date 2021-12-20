import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAddProcessorsComponent } from './food-add-processors.component';

describe('FoodAddProcessorsComponent', () => {
  let component: FoodAddProcessorsComponent;
  let fixture: ComponentFixture<FoodAddProcessorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodAddProcessorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodAddProcessorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
