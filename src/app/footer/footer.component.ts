import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

	footer = {
		navigation: [
			{
				uri: "/watch",
				label: "Watch"
			},
			{
				uri: "/visit",
				label: "Visit"
			},
			{
				uri: "/enjoy",
				label: "Enjoy"
			},
			{
				uri: "/move",
				label: "Move"
			},
			{
				uri: "/give",
				label: "Give"
			},
			{
				uri: "/blog",
				label: "Blog"
			},
			{
				uri: "/radio",
				label: "Radio"
			}
		],
		social: [
			{
				uri: "https://www.facebook.com/flatlandchurchomaha",
				icon: "fa-facebook-official"
			},
			{
				uri: "https://twitter.com/FlatlandChurch",
				icon: "fa-twitter"
			},
			{
				uri: "https://www.instagram.com/flatlandchurch/",
				icon: "fa-instagram"
			}
		]
	}

  constructor() { }

  ngOnInit() {
  }

}
