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
var moment = require('moment');
var DeadlineComponent = (function () {
    function DeadlineComponent(_deadlinesService) {
        this._deadlinesService = _deadlinesService;
    }
    DeadlineComponent.prototype.delete = function () {
        this._deadlinesService.deleteDeadline(this.deadline);
    };
    DeadlineComponent.prototype.render = function () {
        return moment(this.deadline.dueDate).fromNow();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', deadline_model_1.Deadline)
    ], DeadlineComponent.prototype, "deadline", void 0);
    DeadlineComponent = __decorate([
        core_1.Component({
            selector: 'deadline',
            templateUrl: 'app/deadline/deadline.component.html',
            styles: ["\n    :host {\n    \tcolor: red;\n\t}\n  "]
        }), 
        __metadata('design:paramtypes', [deadline_service_1.DeadlinesService])
    ], DeadlineComponent);
    return DeadlineComponent;
}());
exports.DeadlineComponent = DeadlineComponent;
//# sourceMappingURL=deadline.component.js.map