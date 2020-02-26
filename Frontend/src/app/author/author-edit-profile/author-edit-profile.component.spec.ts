import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorEditProfileComponent } from './author-edit-profile.component';

describe('AuthorEditProfileComponent', () => {
  let component: AuthorEditProfileComponent;
  let fixture: ComponentFixture<AuthorEditProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorEditProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
