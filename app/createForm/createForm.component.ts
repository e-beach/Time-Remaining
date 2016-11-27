import { Component } from '@angular/core';
import { Deadline }  from '../deadlineService/deadline.model';

@Component({
  moduleId: module.id,
  selector: 'create-form',
  templateUrl: 'createForm.component.html'
})

export class CreateFormComponent {
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model = new Deadline("Semester", "End of Semester Fall 2016", false, new Date());
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}