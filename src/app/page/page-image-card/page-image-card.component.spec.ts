import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageImageCardComponent } from './page-image-card.component';

describe('PageImageCardComponent', () => {
  let component: PageImageCardComponent;
  let fixture: ComponentFixture<PageImageCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageImageCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageImageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
