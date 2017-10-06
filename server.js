require('angular2-universal');
const path = require('path');
const express = require('express');

const router = require('@angular/router');
const core = require('@angular/core');
const universal = require('angular2-universal');

const angularApp = require('./src/app');

const app = express();
const ROOT = path.join(path.resolve(__dirname, '..'));

core.enableProdMode();

app.engine('.html', universal.expressEngine);
app.set('views', __dirname);
app.set('view engine', 'html');

function ngApp(req, res) {
	let baseUrl = '/';
	let url = req.originalUrl || '/';

	let config = {
		directives: [angularApp.App],
		platformProviders: [
			{ provide: universal.ORIGIN_URL, useValue: 'http://localhost:4000' },
			{ provide: universal.BASE_URL, useValue: baseUrl }
		],

		providers: [
			{ provide: universal.REQUEST_URL, useValue: url },
			router.provideRouter(angularApp.appRoutes),
			universal.NODE_LOCATION_PROVIDERS,
			universal.NODE_HTTP_PROVIDERS
		],

		async: true,
		preboot: false
	};
	res.render('index', config);
}

app.use(express.static(ROOT, {index: false}));

app.get('/', ngApp);
app.listen(4000, () => {
	console.log('listening on: http://localhost:4000')
});
