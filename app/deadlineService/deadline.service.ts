import {Injectable} from '@angular/core';
import {Deadline} from './deadline.model';
import {DataListener} from './dataListener'

@Injectable()
export class DeadlinesService {

  private listeners: DataListener[]=[];

  private Deadlines: Deadline[] = [
    {name: 'Deadline 1', description: 'This is an Deadline', completed:false},
    {name: 'Deadline 2', description: 'This is an Deadline', completed:false},
    {name: 'Deadline 3', description: 'This is an Deadline', completed:false},
    {name: 'Deadline 4', description: 'This is an Deadline', completed:false}
  ];

  getDeadlines(): Deadline[] {
    return this.Deadlines;
  };

  deleteDeadline(deadline:Deadline) :void {
  	console.log("filtered!");
  	console.log(this.Deadlines.length);
  	// this does not change the pointer we returned to ng
  	this.Deadlines = this.Deadlines.filter(dl => dl !== deadline);
  	for (let listener of this.listeners){
  		listener.update();
  	}
  }

  addListener(dl:DataListener) :void{
  	this.listeners.push(dl);
  }


}