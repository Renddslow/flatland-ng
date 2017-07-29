import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MarkdownModule } from 'angular2-markdown';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderLoginComponent } from './header-login/header-login.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HeaderMobileMenuComponent } from './header-mobile-menu/header-mobile-menu.component';
import { HeaderMobileHamburgerComponent } from './header-mobile-hamburger/header-mobile-hamburger.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PageComponent } from './page/page.component';
import { FooterComponent } from './footer/footer.component';
import { FooterSocialComponent } from './footer-social/footer-social.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { PageStackComponent } from './page-stack/page-stack.component';
import { PageLocationComponent } from './page-location/page-location.component';
import { PageListComponent } from './page-list/page-list.component';
import { PageMarkdownComponent } from './page-markdown/page-markdown.component';
import { PageFormComponent } from './page-form/page-form.component';
import { PageImageCardComponent } from './page-image-card/page-image-card.component';
import { PostComponent } from './post/post.component';

const appRoutes: Routes = [
	{ path: '', component: HomepageComponent },
	{ path: 'enjoy/:permalink', component: PostComponent },
	{ path: 'blog/:permalink', component: PostComponent },
	{ path: ':permalink', component: PageComponent },
	{ path: ':parent/:permalink', component: PageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderLoginComponent,
    HeaderLogoComponent,
    HeaderNavComponent,
    HeaderMobileMenuComponent,
    HeaderMobileHamburgerComponent,
    HomepageComponent,
    PageComponent,
    FooterComponent,
    FooterSocialComponent,
    FooterNavComponent,
    PageStackComponent,
    PageLocationComponent,
    PageListComponent,
    PageMarkdownComponent,
    PageFormComponent,
    PageImageCardComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
		RouterModule.forRoot(
      appRoutes
		),
		HttpModule,
		MarkdownModule.forRoot(),
		FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
