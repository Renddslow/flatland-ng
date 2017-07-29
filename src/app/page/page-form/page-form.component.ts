import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-form',
  templateUrl: './page-form.component.html',
  styleUrls: ['./page-form.component.css']
})
export class PageFormComponent {
	@Input() title: string;
	@Input() name: string;

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

	onBlur = () => {
		console.log(this.visitor);
	};

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
