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
var deadline_model_1 = require('../deadlineService/deadline.model');
var deadline_service_1 = require('../deadlineService/deadline.service');
var CreateFormComponent = (function () {
    function CreateFormComponent(_deadlinesService) {
        this._deadlinesService = _deadlinesService;
        this.model = new deadline_model_1.Deadline("", "", false, new Date());
        this.submitted = false;
    }
    CreateFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log(this.model.dueDate);
        this.model.dueDate = new Date(this.date.year, this.date.month - 1, this.date.day, 0, 0, 0, 0);
        this._deadlinesService.addDeadLine(this.model);
        // copy to new reference
        this.model = new deadline_model_1.Deadline(this.model.name, this.model.description, this.model.completed, this.model.dueDate);
    };
    CreateFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'create-form',
            templateUrl: 'createForm.component.html',
            styles: ["\n  .ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}"],
        }), 
        __metadata('design:paramtypes', [deadline_service_1.DeadlinesService])
    ], CreateFormComponent);
    return CreateFormComponent;
}());
exports.CreateFormComponent = CreateFormComponent;
//# sourceMappingURL=createForm.component.js.map