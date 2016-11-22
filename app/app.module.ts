import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './app/app.component';
import { DeadlineComponent }  from './deadline/deadline.component';
import { DeadlineListComponent }  from './deadlineList/deadlineList.component';
import { DeadlinesService } from './deadlineService/deadline.service'

@NgModule({
  imports:      [ BrowserModule, NgbModule.forRoot() ],
  declarations: [ AppComponent, DeadlineComponent, DeadlineListComponent],
  providers : [DeadlinesService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
