import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-location',
  templateUrl: './page-location.component.html',
  styleUrls: ['./page-location.component.css']
})
export class PageLocationComponent {
	@Input() timeChange: string;
	scrollTo = (location) => {
		window.scroll(0, document.getElementById(location).offsetTop + 300);
	}
}
