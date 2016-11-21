import { Component } from '@angular/core';
import { DeadlineComponent } from '../deadline/deadline.component'
import {NgFor} from '@angular/common';

@Component({
    selector: 'deadline-list',
    template: `
    <deadline *ngFor="let dl of deadlines">
    </deadline>
    `,
})
export class DeadlineListComponent { 
	message : string = "Hello World!"
	messages : string[] = ["Hello", "Bonjour"]
	deadlines : DeadlineComponent[]

	constructor () {
		this.deadlines = [ new DeadlineComponent("foo"), new DeadlineComponent("foo"), new DeadlineComponent("foo")]
	}
}