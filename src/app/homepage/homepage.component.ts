import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
	stuff = "header-nav";
	page = {
		meta: {
			permalink: "/",
			title: "Welcome to Flatland Church",
			description: "Located in Omaha, NE we help you move to the center of God's Kindgom.",
			canonical: "https://flatlandchurch.com/",
			type: "site",
			mainImage: "https://flatlandchurch.com/static/uploads/background.jpg",
			site: "",
			card: "",
			place: {}
		},
		jumbotronImage: "https://flatlandchurch.com/static/uploads/background.jpg",
		callout: "Experience Home",
		callToAction: {
			uri: "/visit",
			label: "Plan a Visit"
		},
		components: [],
		content: "Flatland is all about moving people to the center of God's kingdom. Through creative presentations and messages you will discover what God's kingdom is all about and how being a part of it will transform your life in a powerful way."
	};

  constructor() { }

  ngOnInit() {
  }

}

class PageComponent {
	type: string;
}
