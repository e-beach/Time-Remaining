import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './components/app/app.component';
import { DeadlineComponent }  from './components/deadline/deadline.component';

@NgModule({
  imports:      [ BrowserModule, NgbModule.forRoot() ],
  declarations: [ AppComponent, DeadlineComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
