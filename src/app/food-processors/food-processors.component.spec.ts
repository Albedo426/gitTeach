import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodProcessorsComponent } from './food-processors.component';

describe('FoodProcessorsComponent', () => {
  let component: FoodProcessorsComponent;
  let fixture: ComponentFixture<FoodProcessorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodProcessorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodProcessorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
