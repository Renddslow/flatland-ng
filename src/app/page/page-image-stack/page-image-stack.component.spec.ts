import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageImageStackComponent } from './page-image-stack.component';

describe('PageImageStackComponent', () => {
  let component: PageImageStackComponent;
  let fixture: ComponentFixture<PageImageStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageImageStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageImageStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
