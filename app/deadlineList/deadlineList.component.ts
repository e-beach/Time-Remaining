import { Component, OnInit } from '@angular/core';
import { Deadline } from '../deadlineService/deadline.model'
import { DeadlinesService } from '../deadlineService/deadline.service'
import {AppState, DataListener} from '../deadlineService/dataListener'
import {NgFor} from '@angular/common';

@Component({
    selector: 'deadline-list',
    template: `
    <deadline *ngFor="let d of deadlines" [deadline]="d">
    </deadline>
    `,
})
export class DeadlineListComponent implements OnInit, DataListener { 
	deadlines: Deadline[];

	constructor(private _deadlinesService:DeadlinesService){}

	ngOnInit() {
		this._deadlinesService.addListener(this);
    	this.update();
 	}

 	update(){
 		this.deadlines = this._deadlinesService.getDeadlines();
 	}
}