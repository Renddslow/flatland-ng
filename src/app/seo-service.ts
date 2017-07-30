import { Injectable } from '@angular/core';

@Injectable()
export class SeoService {
	tags: [HTMLElement];

	constructor(public image: string, public permalink: string, public canonical: string, public description: string, public title: string, public sermonData?: object) {
		let tagNeeds = this.getTagNeeds(this.permalink);

		this.tags = [this.createTag(TagType.Name, 'robots', 'index, follow')];

		for (let tag in tagNeeds) {
			if (tagNeeds[tag]['default']) {
				this.tags.push(this.createTag(tagNeeds[tag]['type'], tagNeeds[tag]['name'], tagNeeds[tag]['default']));
			}
			if (tagNeeds[tag]['name'].includes('description')) {
				this.tags.push(this.createTag(tagNeeds[tag]['type'], tagNeeds[tag]['name'], this.description));
			}
			if (tagNeeds[tag]['name'].includes('title')) {
				this.tags.push(this.createTag(tagNeeds[tag]['type'], tagNeeds[tag]['name'], this.title));
			}
			if (tagNeeds[tag]['name'].includes('image')) {
				this.tags.push(this.createTag(tagNeeds[tag]['type'], tagNeeds[tag]['name'], this.image));
			}
		}
	}

	private getTagNeeds = (permalink: string): [object] => {
		var tags: [{}] = [
			{ type: TagType.Name, name: "description"},
			{ type: TagType.Name, name: "author", default: "Flatland Church" },
			{ type: TagType.Title, name: "title" },
			{ type: TagType.Property, name: "og:title" },
			{ type: TagType.Property, name: "og:image" },
			{ type: TagType.Property, name: "og:url" },
			{ type: TagType.Name, name: "twitter:card", default: "app"},
			{ type: TagType.Name, name: "twitter:site", default: "@flatlandchurch"},
			{ type: TagType.Name, name: "twitter:app:name:iphone", default: "Flatland Church"},
			{ type: TagType.Name, name: "twitter:app:id:iphone", default: "785117875"},
			{ type: TagType.Name, name: "twitter:app:name:googleplay", default: "Flatland Church"},
			{ type: TagType.Name, name: "twitter:app:id:googleplay", default: "com.subsplash.thechurchapp.s_5J962F"},
		];
		switch(permalink) {
			case "visit":
				tags.push({ type: TagType.Property, name: "og:title" });
				tags.push({ type: TagType.Property, name: "place:location:longitude", default: "41.2991369" });
				tags.push({ type: TagType.Property, name: "place:location:latitude", default: "-96.1471382" });
				return tags;
		}
		return tags;
	};

	private createTag = (type: TagType, tagName: string, tagContent?: string): HTMLElement => {
		let element: HTMLElement;
		let firstProp: Attr;
		let secondProp: Attr;
		switch (type) {
			case TagType.Property:
				element = document.createElement("meta");
				firstProp = document.createAttribute("property");
				firstProp.value = tagName;
				secondProp = document.createAttribute("content");
				secondProp.value = tagContent;
				element.setAttributeNode(firstProp);
				element.setAttributeNode(secondProp);
				return element;
			case TagType.Name:
				element = document.createElement("meta");
				firstProp = document.createAttribute("name");
				firstProp.value = tagName;
				secondProp = document.createAttribute("content");
				secondProp.value = tagContent;
				element.setAttributeNode(firstProp);
				element.setAttributeNode(secondProp);
				return element;
			case TagType.Title:
				element = document.createElement("title");
				element.innerText = tagName;
				return element;
			case TagType.Canonical:
				element = document.createElement("link");
				firstProp = document.createAttribute("rel");
				firstProp.value = "canonical";
				secondProp = document.createAttribute("href");
				secondProp.value = tagName;
				element.setAttributeNode(firstProp);
				element.setAttributeNode(secondProp);
				return element;
		}
	};

	public applyTags = (tags: [HTMLElement]) => {
		for (var i = 0; i < tags.length; i++) {
			var head = document.head;
			head.appendChild(tags[i]);
		}
	};

}

enum TagType {
	Property,
	Name,
	Title,
	Canonical
}
