import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'page-form',
  templateUrl: './page-form.component.html',
  styleUrls: ['./page-form.component.css']
})
export class PageFormComponent implements OnInit {
	@Input() title: string;
	@Input() name: string;

	profile: any;

	ngOnInit() {
  }

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
