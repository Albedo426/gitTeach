import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesProcessorsComponent } from './categories-processors.component';

describe('CategoriesProcessorsComponent', () => {
  let component: CategoriesProcessorsComponent;
  let fixture: ComponentFixture<CategoriesProcessorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesProcessorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesProcessorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
