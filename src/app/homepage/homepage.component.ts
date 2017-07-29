import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Http, Response } from '@angular/http';

import { Page } from '../page';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
	stuff = "header-nav";
	permalink: string;
	sub: any;
	page: Page;

  constructor(private http: Http, private router: Router, private route: ActivatedRoute) {
		this.page = {
			callout: "",
			components: [{}],
			content: "",
			jumbotronImage: "",
			meta: {}
		}
	}

	ngOnInit() {
		this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
		let pageURI = "https://api.flatlandchurch.com/v2/pages/";
		this.http.request(`${pageURI}home`)
			.subscribe((res: Response) => {
				this.page = res.json();
			});
  }

}
