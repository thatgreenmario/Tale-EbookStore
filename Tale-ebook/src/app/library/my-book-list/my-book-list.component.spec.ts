import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBookListComponent } from './my-book-list.component';

describe('MyBookListComponent', () => {
  let component: MyBookListComponent;
  let fixture: ComponentFixture<MyBookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBookListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
