import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMarkdownComponent } from './page-markdown.component';

describe('PageMarkdownComponent', () => {
  let component: PageMarkdownComponent;
  let fixture: ComponentFixture<PageMarkdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMarkdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
