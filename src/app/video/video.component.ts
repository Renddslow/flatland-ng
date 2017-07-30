import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Http, Response } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
	sub: any;
	sermon: object;
	recommended = [];

  constructor(private http: Http, private route: ActivatedRoute, private sanitizer: DomSanitizer, private router: Router) { }

  ngOnInit() {
		this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
		this.sub = this.route.params.subscribe(params => {
			let uri = "https://api.flatlandchurch.com/v1/watch/sermons/";
			this.http.request(`${uri}${params['permalink']}`)
				.subscribe((res: Response) => {
					this.sermon = res.json()['sermon'][0];
					this.sermon['videoURI'] = this.sanitizer.bypassSecurityTrustResourceUrl(`https://player.vimeo.com/video/${this.sermon['video']}`);
				});
		});
  }

}
