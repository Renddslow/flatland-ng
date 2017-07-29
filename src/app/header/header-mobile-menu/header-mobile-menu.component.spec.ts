import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMobileMenuComponent } from './header-mobile-menu.component';

describe('HeaderMobileMenuComponent', () => {
  let component: HeaderMobileMenuComponent;
  let fixture: ComponentFixture<HeaderMobileMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderMobileMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMobileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
