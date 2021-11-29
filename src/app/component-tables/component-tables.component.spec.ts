import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTablesComponent } from './component-tables.component';

describe('ComponentTablesComponent', () => {
  let component: ComponentTablesComponent;
  let fixture: ComponentFixture<ComponentTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentTablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
