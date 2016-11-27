import { Component } from '@angular/core';
import { Deadline }  from '../deadlineService/deadline.model';
import { DeadlinesService }  from '../deadlineService/deadline.service';

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

  constructor(private _deadlinesService:DeadlinesService){}

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model :Deadline = new Deadline("Semester", "End of Semester Fall 2016", false, new Date());
  submitted = false;
  onSubmit() { 
    this.submitted = true; 
    console.log('submitted');
    this._deadlinesService.addDeadLine(this.model);
  }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}