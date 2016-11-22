import { Component, OnInit } from '@angular/core';
import { Deadline } from '../deadlineService/deadline.model'
import { DeadlinesService } from '../deadlineService/deadline.service'
import {NgFor} from '@angular/common';


const DeadlineList:Deadline[] = [
	{name:"Semester", description:"Complete this deadline now!", completed: false}
	]

@Component({
    selector: 'deadline-list',
    template: `
    <deadline *ngFor="let d of deadlines" [deadline]="d">
    </deadline>
    `,
})
export class DeadlineListComponent implements OnInit { 
	deadlines: Deadline[] = DeadlineList

	constructor(private _deadlinesService:DeadlinesService){}

	ngOnInit() {
    	this.deadlines = this._deadlinesService.getDeadlines();
 	}
}