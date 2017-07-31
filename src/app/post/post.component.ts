import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ActivatedRoute, Router, NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

	sub: any;

	pageData = {
		title: null,
		callToAction: {
			label: null,
			uri: null
		},
		content: null,
		metaFields: [],
		jumbotronImage: null
	};

  constructor(private http: Http, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
		this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
		this.sub = this.route.params.subscribe(params => {
			if (this.route.toString().includes("enjoy")) {
				this.http.request(`https://api.flatlandchurch.com/v1/events/${params['permalink']}`)
					.subscribe((res: Response) => {
						let data = res.json();
						// mapping
						this.pageData.title = data.title;
						if (data.link != "") {
							this.pageData.callToAction.label = "Register";
							this.pageData.callToAction.uri = data.link;
						}
						this.pageData.metaFields = [data.location, data.date];
						if (data.price != "Free") {
							this.pageData.metaFields.push(data.price);
						}
						this.pageData.content = data.description;
						this.pageData.jumbotronImage = data.image;
					});
			} else if (this.route.toString().includes("blog")) {
				this.http.request(`https://api.flatlandchurch.com/v1/blog/post/${params['permalink']}`)
					.subscribe((res: Response) => {
						let data = res.json();
						this.pageData.title = data.title;
						this.pageData.jumbotronImage = data.image;
						this.pageData.content = data.text;
						this.pageData.metaFields = [data.author, data.date_published];
					});
			}
		});
  }

}
