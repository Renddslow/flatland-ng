import { Injectable } from '@angular/core';
import { AUTH_CONFIG } from './auth0-variables';
import { Router, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/filter';
import Auth0Lock from 'auth0-lock';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {

  lock = new Auth0Lock(AUTH_CONFIG.clientID, AUTH_CONFIG.domain, {
    oidcConformant: true,
    autoclose: true,
    auth: {
      redirectUrl: AUTH_CONFIG.callbackURL,
      responseType: 'token id_token',
      audience: `https://${AUTH_CONFIG.domain}/userinfo`,
      params: {
        scope: 'openid profile'
      },
		},
		theme: {
			logo: "http://i.imgur.com/kH3suRo.png",
			primaryColor: "#acc35b"
		},
		languageDictionary: {
			title: 'Login to Flatland Church'
		}
  });

	auth0 = new auth0.WebAuth({
    clientID: AUTH_CONFIG.clientID,
    domain: AUTH_CONFIG.domain,
    responseType: 'token id_token',
    audience: `https://${AUTH_CONFIG.domain}/userinfo`,
    redirectUri: AUTH_CONFIG.callbackURL,
    scope: 'openid profile'
  });

	userProfile: any;

  constructor(public router: Router) {}

  public login(): void {
    this.lock.show();
  }

  public handleAuthentication(): void {
    this.lock.on('authenticated', (authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.router.navigate(['/give']);
      }
    });
    this.lock.on('authorization_error', (err) => {
      this.router.navigate(['/give']);
      console.log(err);
      alert(`Error: ${err.error}. Check the console for further details.`);
    });
  }

  private setSession(authResult): void {
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.router.navigate(['/give']);
  }

  public isAuthenticated(): boolean {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

	public getProfile(cb): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
			return;
    }

    const self = this;
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        self.userProfile = profile;
      }
      cb(err, profile);
    });
  }

}
