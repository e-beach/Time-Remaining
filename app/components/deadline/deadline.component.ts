import { Component, Input } from '@angular/core';
import { Deadline } from '../../deadlineService/deadline.model'

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
	@Input() description:string
}