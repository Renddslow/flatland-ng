import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'page-image-card',
  templateUrl: './page-image-card.component.html',
  styleUrls: ['./page-image-card.component.css']
})
export class PageImageCardComponent implements OnInit {

	@Input() type: string;

	sermons = [];
	events = [];
	posts = [];

	page: number = 0;

  constructor(private http: Http) { }

  ngOnInit() {
		if (this.type.includes("watch")) {
			this.http.request(`https://api.flatlandchurch.com/v1/watch/sermons?page=${this.page}`)
				.subscribe((res: Response) => {
					this.sermons.concat(res.json()['sermons']);
					console.log(this.sermons);
				});
		} else if (this.type.includes("enjoy")) {
			this.http.request(`https://api.flatlandchurch.com/v1/events/`)
				.subscribe((res: Response) => {
					this.events = this.events.concat(res.json()['events']);
				});
		} else if (this.type.includes("blog")) {
			console.log("stuff")
			this.getBlogPosts();
		}
  }

	loadMore = (event, type) => {
		event.preventDefault();
		switch(type) {
			case "blog":
				this.getBlogPosts();
				history.pushState(null, null, `/blog?page=${this.page + 1}`);
		}
	}

	getBlogPosts = () => {
		this.http.request(`https://api.flatlandchurch.com/v1/blog/posts?page=${this.page}`)
			.subscribe((res: Response) => {
				this.posts = this.posts.concat(res.json());
				console.log(this.posts)
				this.page += 1;
			});
	};

}
