import { Component, Input } from '@angular/core';

@Component({
  selector: 'header-mobile-menu',
  templateUrl: './header-mobile-menu.component.html',
  styleUrls: ['./header-mobile-menu.component.css']
})
export class HeaderMobileMenuComponent { @Input() navigation: [object] }
