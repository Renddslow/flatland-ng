import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MarkdownModule } from 'angular2-markdown';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderLoginComponent } from './header/header-login/header-login.component';
import { HeaderLogoComponent } from './header/header-logo/header-logo.component';
import { HeaderNavComponent } from './header/header-nav/header-nav.component';
import { HeaderMobileMenuComponent } from './header/header-mobile-menu/header-mobile-menu.component';
import { HeaderMobileHamburgerComponent } from './header/header-mobile-hamburger/header-mobile-hamburger.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PageComponent } from './page/page.component';
import { FooterComponent } from './footer/footer.component';
import { FooterSocialComponent } from './footer/footer-social/footer-social.component';
import { FooterNavComponent } from './footer/footer-nav/footer-nav.component';
import { PageStackComponent } from './page/page-stack/page-stack.component';
import { PageLocationComponent } from './page/page-location/page-location.component';
import { PageListComponent } from './page/page-list/page-list.component';
import { PageMarkdownComponent } from './page/page-markdown/page-markdown.component';
import { PageFormComponent } from './page/page-form/page-form.component';
import { PageImageCardComponent } from './page/page-image-card/page-image-card.component';
import { PostComponent } from './post/post.component';
import { BrowseComponent } from './browse/browse.component';
import { VideoComponent } from './video/video.component';
import { ShareComponent } from './video/share/share.component';
import { CallbackComponent } from './callback/callback.component';
import { PageImageStackComponent } from './page/page-image-stack/page-image-stack.component';

const appRoutes: Routes = [
	{ path: '', component: HomepageComponent },
	{ path: 'callback', component: CallbackComponent },
	{ path: 'enjoy/:permalink', component: PostComponent },
	{ path: 'blog/:permalink', component: PostComponent },
	{ path: 'watch', component: BrowseComponent },
	{ path: 'watch/:permalink', component: VideoComponent },
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
    PostComponent,
    BrowseComponent,
    VideoComponent,
    ShareComponent,
    CallbackComponent,
    PageImageStackComponent
  ],
  imports: [
    BrowserModule,
		RouterModule.forRoot(
      appRoutes
		),
		HttpModule,
		MarkdownModule.forRoot(),
		FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
