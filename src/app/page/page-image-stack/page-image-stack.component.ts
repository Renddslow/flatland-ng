import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-image-stack',
  templateUrl: './page-image-stack.component.html',
  styleUrls: ['./page-image-stack.component.css']
})
export class PageImageStackComponent { @Input() stack: [object]; }
