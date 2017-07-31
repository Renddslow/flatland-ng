import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {
	@Input() sermonData: object;
	@Input() modalOpen = false;

	socialLinks: [{}];

	copyText = "Copy";

  constructor() {
	}

  ngOnInit() {
		this.socialLinks = [
			{ url: this.buildFacebookURL(this.sermonData), icon: 'fa-facebook-official' },
			{ url: this.buildTwitterURL(this.sermonData), icon: 'fa-twitter'},
			{ url: this.buildEmailURL(this.sermonData), icon: 'fa-envelope' }
		];
  }

	buildFacebookURL = (data: {}): string => {
		var url: string = `https://www.facebook.com/dialog/feed?app_id=&`
		url += `picture=${data['image']}&display=popup`;
		url += `caption=https%3A%2F%2Fflatlandchurch.com%2Fwatch%2F${data['permalink']}&`;
		url += 'redirect_uri=https%3A%2F%2Fflatlandchurch.com&link=https%3A%2F%2Fflatlandchurch.com&';
		url += `name=${data['title']}&description=${data['description']}`;
		return url;
	};

	buildTwitterURL = (data: {}): string => {
		var url: string = 'https://twitter.com/intent/tweet?';
		url += `text=Check out this week's sermon from Flatland Church: ${data['title']}&`;
		url += `url=https%3A%2F%2Fflatlandchurch.com%2Fwatch%2F${data['permalink']}`;
		return url;
	};

	buildEmailURL = (data: {}): string => {
		var url: string = 'mailto:?subject=Watch this sermon from Flatland Church&';
		url += `body=https%3A%2F%2Fflatlandchurch.com%2Fwatch%2F${data['permalink']}`
		return url;
	};

	copyLink = (event) => {
		event.preventDefault();
		let element = document.getElementById("fc-share-link");
		(<HTMLInputElement>element).select();
		document.execCommand('copy');
		this.copyText = "Copied";
	};

	openLink = (link) => {
		window.open(link,
			'',
			'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
		return false;
	};

	closeModal = () => {
		this.modalOpen = false;
	}

}
