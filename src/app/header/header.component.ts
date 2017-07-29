import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	navigation = {
		login: [
			{
				uri: "https://my.flatlandchurch.com",
				label: "Sign In"
			}
		],
		navItems: [
			{
				uri: "/watch",
				mainLabel: "Watch",
				subLabel: "Sermons | Videos"
			},
			{
				uri: "/visit",
				mainLabel: "Visit",
				subLabel: "Times | Info"
			},
			{
				uri: "/move",
				mainLabel: "Move",
				subLabel: "Classes | Groups"
			},
			{
				uri: "/enjoy",
				mainLabel: "Enjoy",
				subLabel: "Retreats | Events"
			},
			{
				uri: "/give",
				mainLabel: "Give",
				subLabel: "Serve | Donate"
			}
		]
	};

  constructor() { }

  ngOnInit() {
  }

}
