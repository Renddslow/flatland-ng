import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Http, Response } from '@angular/http';

import { Page } from '../page';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {
	sub: any;
	permalink: string;
	page: Page;
	timeChange: string = null;

  constructor(private http: Http, private route: ActivatedRoute, private router: Router) {
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
		let timeURI = "https://api.flatlandchurch.com/v1/times/changes";
		this.sub = this.route.params.subscribe(params => {
			if (params['parent']) {
				this.permalink = `${params['parent']}/${params['permalink']}`
			} else {
				this.permalink = params['permalink'];
			}
			this.http.request(`${timeURI}`)
				.subscribe((res: Response) => {
					this.timeChange = res.json().message;
				});
			this.http.request(`${pageURI}${this.permalink}`)
				.subscribe((res: Response) => {
					this.page = res.json();
					// this.metaService.setTitle(this.page['meta']['title']);
				});
		});
  }

}
