import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProcessorsComponent } from './table-processors.component';

describe('TableProcessorsComponent', () => {
  let component: TableProcessorsComponent;
  let fixture: ComponentFixture<TableProcessorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableProcessorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableProcessorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
