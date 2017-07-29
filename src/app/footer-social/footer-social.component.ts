import { Component, Input } from '@angular/core';

@Component({
  selector: 'footer-social',
  templateUrl: './footer-social.component.html',
  styleUrls: ['./footer-social.component.css']
})
export class FooterSocialComponent { @Input() socialLinks: [object] }
