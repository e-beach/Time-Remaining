import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './app/app.component';
import { DeadlineComponent }  from './deadline/deadline.component';
import { DeadlineListComponent }  from './deadlineList/deadlineList.component';
import { DeadlinesService } from './deadlineService/deadline.service'
import { CreateFormComponent } from './createForm/createForm.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { routing } from './app.routes';

@NgModule({
  imports:      [ BrowserModule, NgbModule.forRoot(), FormsModule, routing],
  declarations: [ AppComponent, DeadlineComponent, DeadlineListComponent, 
  				  CreateFormComponent, HomeComponent, AboutComponent],
  providers : [DeadlinesService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
