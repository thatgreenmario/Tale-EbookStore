import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishBookComponent } from './publish-book.component';

describe('PublishBookComponent', () => {
  let component: PublishBookComponent;
  let fixture: ComponentFixture<PublishBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
