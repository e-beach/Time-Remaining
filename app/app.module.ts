import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './components/app/app.component';
import { DeadlineComponent }  from './components/deadline/deadline.component';
import { DeadlineListComponent }  from './components/deadlineList/deadlineList.component';

@NgModule({
  imports:      [ BrowserModule, NgbModule.forRoot() ],
  declarations: [ AppComponent, DeadlineComponent, DeadlineListComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
