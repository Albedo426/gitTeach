import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootAddProcessorsComponent } from './foot-add-processors.component';

describe('FootAddProcessorsComponent', () => {
  let component: FootAddProcessorsComponent;
  let fixture: ComponentFixture<FootAddProcessorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootAddProcessorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootAddProcessorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
