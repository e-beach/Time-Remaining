import { Component } from '@angular/core';
import { DeadlineComponent } from '../deadline/deadline.component'
import {NgFor} from '@angular/common';


const MessageList:string[] = ["End of Semester", "Physics Class", "Christmas"]

@Component({
    selector: 'deadline-list',
    template: `
    <deadline *ngFor="let msg of messages" [description]="msg">
    </deadline>
    `,
})
export class DeadlineListComponent { 
	messages : string[] = MessageList
}