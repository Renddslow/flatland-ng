import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

	page = 0;

	latestSermon: object = {};
	navigation = [
		{
			label: 'Sermons',
			uri: ['/watch']
		},
		{
			label: 'Series',
			uri: ['/watch', 'series']
		}
	];

  constructor(private http: Http) { }

  ngOnInit() {
		this.http.request(`https://api.flatlandchurch.com/v1/watch/sermons?page=${this.page}`)
			.subscribe((res: Response) => {
				this.latestSermon = res.json()['sermons'][0];
			});
  }

}
