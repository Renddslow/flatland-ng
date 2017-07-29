import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-stack',
  templateUrl: './page-stack.component.html',
  styleUrls: ['./page-stack.component.css']
})
export class PageStackComponent { @Input() stack: [object]; }
