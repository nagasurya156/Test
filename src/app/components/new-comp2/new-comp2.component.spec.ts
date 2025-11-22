import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComp2Component } from './new-comp2.component';

describe('NewComp2Component', () => {
  let component: NewComp2Component;
  let fixture: ComponentFixture<NewComp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewComp2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
