import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComp1Component } from './new-comp1.component';

describe('NewComp1Component', () => {
  let component: NewComp1Component;
  let fixture: ComponentFixture<NewComp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewComp1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
