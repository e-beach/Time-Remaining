import { Component } from '@angular/core';
import { Deadline } from '../deadlineService/deadline.model'
import {NgFor} from '@angular/common';


const MessageList:string[] = ["End of Semester", "Physics Class", "Christmas"]

@Component({
    selector: 'deadline-list',
    template: `
    <deadline *ngFor="let d of deadlines" [deadline]="d">
    </deadline>
    `,
})
export class DeadlineListComponent { 
	deadlines: Deadline[] = [
	{name:"Semester", description:"Complete this deadline now!", completed: false}
	]
}