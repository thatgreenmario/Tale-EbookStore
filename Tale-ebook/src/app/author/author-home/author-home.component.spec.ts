import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorHomeComponent } from './author-home.component';

describe('AuthorHomeComponent', () => {
  let component: AuthorHomeComponent;
  let fixture: ComponentFixture<AuthorHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
