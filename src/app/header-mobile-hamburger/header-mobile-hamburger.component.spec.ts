import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMobileHamburgerComponent } from './header-mobile-hamburger.component';

describe('HeaderMobileHamburgerComponent', () => {
  let component: HeaderMobileHamburgerComponent;
  let fixture: ComponentFixture<HeaderMobileHamburgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderMobileHamburgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMobileHamburgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
