interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '0434f58nOgWvjftgQHdXSkfBwZ6FzViL',
  domain: 'movetothecenter.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
