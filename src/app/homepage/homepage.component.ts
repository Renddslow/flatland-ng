import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
	stuff = "header-nav";
	permalink: string;
	sub: any;
	page: object;

  constructor(private http: Http, private router: Router, private route: ActivatedRoute) {}

	ngOnInit() {
		this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
		let pageURI = "https://api.flatlandchurch.com/v2/pages";
		let params = {
			key: 'pk_e6afff4e5ad186e9ce389cc21c225'
		};
		this.http.request(`${pageURI}/home`, {params})
			.subscribe((res: Response) => {
				this.page = res.json();
			});
  }

}
