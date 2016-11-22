import {Injectable} from '@angular/core';
import {Deadline} from './deadline.model';

@Injectable()
export class DeadlinesService {
  private Deadlines: Deadline[] = [
    {name: 'Deadline 1', description: 'This is an Deadline', completed:false},
    {name: 'Deadline 2', description: 'This is an Deadline', completed:false},
    {name: 'Deadline 3', description: 'This is an Deadline', completed:false},
    {name: 'Deadline 4', description: 'This is an Deadline', completed:false}
  ];

  getDeadlines(): Deadline[] {
    return this.Deadlines;
  };
}