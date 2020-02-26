import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescribelistComponent } from './describelist.component';

describe('DescribelistComponent', () => {
  let component: DescribelistComponent;
  let fixture: ComponentFixture<DescribelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescribelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescribelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
