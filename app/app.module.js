"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var app_component_1 = require('./app/app.component');
var deadline_component_1 = require('./deadline/deadline.component');
var deadlineList_component_1 = require('./deadlineList/deadlineList.component');
var deadline_service_1 = require('./deadlineService/deadline.service');
var createForm_component_1 = require('./createForm/createForm.component');
var home_component_1 = require('./home/home.component');
var about_component_1 = require('./about/about.component');
var app_routes_1 = require('./app.routes');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, ng_bootstrap_1.NgbModule.forRoot(), forms_1.FormsModule, app_routes_1.routing],
            declarations: [app_component_1.AppComponent, deadline_component_1.DeadlineComponent, deadlineList_component_1.DeadlineListComponent,
                createForm_component_1.CreateFormComponent, home_component_1.HomeComponent, about_component_1.AboutComponent],
            providers: [deadline_service_1.DeadlinesService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map