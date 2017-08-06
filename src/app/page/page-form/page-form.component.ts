import { Component, Input, AfterViewInit, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'page-form',
  templateUrl: './page-form.component.html',
  styleUrls: ['./page-form.component.css']
})
export class PageFormComponent implements AfterViewInit, OnInit {
	@Input() title: string;
	@Input() name: string;

	profile: any;

	constructor(public auth: AuthService) { }

	ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
			this.giving.user['id'] = this.profile.sub;
			this.giving.user['email'] = this.profile.email ? this.profile.email : null;
			this.giving.user['name'] = this.profile.name ? this.profile.name : null;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
				this.giving.user['id'] = this.profile.sub;
				this.giving.user['email'] = this.profile.email ? this.profile.email : null;
				this.giving.user['name'] = this.profile.name ? this.profile.name : null;
				console.log(this.giving);
      });
    }
  }

	ngAfterViewInit() {
		if (this.name == 'give') {
			var stripe = (<any>window).Stripe('pk_test_Mxyh3oAiLIvNCLJ0AAaVjAPN');

			let card = this.setupForm(stripe);

			this.handleForm(card, stripe, this.handleStripeToken);
		}
	}

	setupForm = (stripe) => {
		var elements = stripe.elements();

		let style = {
			base: {
				color: '#32325d',
				lineHeight: '24px',
				fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
				fontSmoothing: 'antialiased',
				fontSize: '16px',
				'::placeholder': {
					color: '#aab7c4'
				}
			},
			invalid: {
				color: '#fa755a',
				iconColor: '#fa755a'
			}
		};

		var card = elements.create('card', {style: style});

		card.mount('#card-element');

		card.addEventListener('change', function(event) {
			var displayError = document.getElementById('card-errors');
			if (event.error) {
				displayError.textContent = event.error.message;
			} else {
				displayError.textContent = '';
			}
		});
		return card;
	};

	giving = {
		message: "Give Now",
		user: {},
		recurring: {},
		isRecurring: false
	};

	visitor: Visitor = {
		firstName: null,
		lastName: null,
		email: null,
		phone: null,
		spouseCount: 0,
	};

	dates = [
		{
			friendly: 'This Sunday',
			short: 'Jul 16',
			value: '2017-07-16'
		},
		{
			friendly: 'Next Sunday',
			short: 'Jul 16',
			value: '2017-07-16'
		},
		{
			friendly: 'Next Next Sunday',
			short: 'Jul 16',
			value: '2017-07-16'
		}
	];

	addSpouse = () => {
		this.visitor.spouseCount = 1;
		this.visitor.spouse = { name: null };
	};

	addChild = () => {
		if (!this.visitor.children) {
			this.visitor.children = [
				{
						name: null,
						dob: null
				}
			];
		} else {
			this.visitor.children.push({
				name: null,
				dob: null
			});
		}
	}

	handleForm = (card, stripe, callback) => {
		var form = document.getElementById('payment-form');
		form.addEventListener('submit', function(event) {
			event.preventDefault();

			stripe.createToken(card).then(function(result) {
				if (result.error) {
					var errorElement = document.getElementById('card-errors');
					errorElement.textContent = result.error.message;
				} else {
					callback(result.token.id);
				}
			});
		});
	}

	handleStripeToken = (token) => {
		this.giving['token'] = token;
		console.log(this.giving);
	}

}

class Visitor {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	spouseCount: number = 0;
	children?: [Child];
	spouse?: Spouse;
}

class Child {
	name: string;
	dob: string;
}

class Spouse {
	name: string;
}
