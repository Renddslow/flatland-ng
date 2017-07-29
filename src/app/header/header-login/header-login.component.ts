import { Component, Input } from '@angular/core';

@Component({
  selector: 'header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.css']
})
export class HeaderLoginComponent { @Input() loginLinks: [object] }
