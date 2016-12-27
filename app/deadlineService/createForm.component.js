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
var deadline_model_1 = require('./deadline.model');
var CreateFormComponent = (function () {
    function CreateFormComponent() {
        this.powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
        this.model = new deadline_model_1.Deadline("Semester", "End of Semester Fall 2016", false, new Date());
        this.submitted = false;
    }
    CreateFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(CreateFormComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    CreateFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'create-form',
            templateUrl: 'createForm.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CreateFormComponent);
    return CreateFormComponent;
}());
exports.CreateFormComponent = CreateFormComponent;
//# sourceMappingURL=createForm.component.js.map