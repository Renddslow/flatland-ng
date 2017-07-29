import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
	sub: any;
	permalink: string;
	page: object;
	timeChange: string = null;

  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
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
				});
		});
  }

}
