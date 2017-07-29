import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-markdown',
  templateUrl: './page-markdown.component.html',
  styleUrls: ['./page-markdown.component.css']
})
export class PageMarkdownComponent { @Input() content: object;}
