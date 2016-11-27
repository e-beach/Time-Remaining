import { Component } from '@angular/core';
import { Deadline } from '../deadlineService/deadline.model'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app/app.component.html'
})
export class AppComponent { 
	newItem:Deadline = new Deadline(null,null,null,null);
}
