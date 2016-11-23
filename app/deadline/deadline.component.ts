import { Component, Input, OnInit} from '@angular/core';
import { Deadline } from '../deadlineService/deadline.model'
import { DeadlinesService } from '../deadlineService/deadline.service'


@Component({
    selector: 'deadline',
    templateUrl: 'app/deadline/deadline.component.html',
    styles: [`
    :host {
    	color: red;
	}
  `]
})
export class DeadlineComponent implements OnInit { 
	@Input() deadline:Deadline
	date:Date = new Date()

	constructor(private _deadlinesService:DeadlinesService){}

	delete() {
		this._deadlinesService.deleteDeadline(this.deadline);
	}

	ngOnInit(){}
}