import {Injectable} from '@angular/core';
import {Deadline} from './deadline.model';
import {DataListener} from './dataListener'


let dl_count = 0;
function fillerDeadline() :Deadline {
  dl_count++;
  return {name: `Deadline ${dl_count}`, description: 'This is a Deadline.', completed:false, dueDate: new Date()};
}

@Injectable()
export class DeadlinesService {

  private listeners: DataListener[]=[];

  private Deadlines: Deadline[] = [
    fillerDeadline(), fillerDeadline()
  ];


  getDeadlines() :Deadline[] {
    return this.Deadlines;
  };

  deleteDeadline(deadline:Deadline) :void {
  	this.Deadlines = this.Deadlines.filter(dl => dl !== deadline);
  	this.update();
  }

  update(){
  	for (let listener of this.listeners){
  		listener.update();
  	}
  }

  addListener(dl:DataListener) :void{
  	this.listeners.push(dl);
  }


}