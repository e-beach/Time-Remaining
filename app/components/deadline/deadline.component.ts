import { Component } from '@angular/core';

@Component({
    selector: 'deadline',
    templateUrl: 'app/components/deadline/deadline.component.html',
    styles: [`
    :host {
    	color: red;
	}
  `]
})
export class DeadlineComponent { 
	text :string
	constructor(text:string){
		this.text = text;
	}
}