import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStackComponent } from './page-stack.component';

describe('PageStackComponent', () => {
  let component: PageStackComponent;
  let fixture: ComponentFixture<PageStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
