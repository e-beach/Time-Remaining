import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div class="container">
     <nav class="navbar navbar-light bg-faded">
       <div class="container-fluid">
         <div class="navbar-header">
          <a href="#" class="navbar-brand"> Time Remaining</a>
         </div>
       </div>
     </nav>
   </div>
   <div class="input data-provider=datepicker">
   </div>
   <ngb-panel title="panel">
      This app needs two features:
        <ol>
          <li>User can add a deadline and give it a name</li>
          <li>User can view time remaining, in weeks, for deadline</li>
        </ol>
   </ngb-panel>
   `
})
export class AppComponent { }
