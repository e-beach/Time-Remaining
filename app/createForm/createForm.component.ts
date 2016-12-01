import { Component } from '@angular/core';
import { Deadline }  from '../deadlineService/deadline.model';
import { DeadlinesService }  from '../deadlineService/deadline.service';
import { DatePickerIonicComponent, DatePickerModule } from 'ng2-datepicker';


@Component({
  moduleId: module.id,
  selector: 'create-form',
  templateUrl: 'createForm.component.html',
  styles: [`
  .ng-valid[required], .ng-valid.required  {
  border-left: 5px solid #42A948; /* green */
}

.ng-invalid:not(form)  {
  border-left: 5px solid #a94442; /* red */
}`],
})

export class CreateFormComponent {

  model :Deadline = new Deadline("", "", false, new Date());
  submitted :boolean = false;

  constructor(private _deadlinesService:DeadlinesService){}

  onSubmit() { 
    this.submitted = true; 
    console.log('submitted');
    this._deadlinesService.addDeadLine(this.model);
    // copy to new reference
    this.model = new Deadline(this.model.name, this.model.description, this.model.completed, this.model.dueDate);
  }
}