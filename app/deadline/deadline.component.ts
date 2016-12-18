import { Component, Input } from '@angular/core';
import { Deadline } from '../deadlineService/deadline.model'
import { DeadlinesService } from '../deadlineService/deadline.service'

import * as moment from 'moment';



@Component({
    selector: 'deadline',
    templateUrl: 'app/deadline/deadline.component.html',
    styles: [`
    :host {
    	color: red;
	}
  `]
})
export class DeadlineComponent { 
	@Input() deadline:Deadline

	constructor(private _deadlinesService:DeadlinesService){}

	delete() {
		this._deadlinesService.deleteDeadline(this.deadline);
	}

	render() {
		return moment(this.deadline.dueDate).fromNow();
	}
}