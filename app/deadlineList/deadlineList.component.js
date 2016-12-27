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
var deadline_service_1 = require('../deadlineService/deadline.service');
var DeadlineListComponent = (function () {
    function DeadlineListComponent(_deadlinesService) {
        this._deadlinesService = _deadlinesService;
    }
    DeadlineListComponent.prototype.ngOnInit = function () {
        this._deadlinesService.addListener(this);
        this.update();
    };
    DeadlineListComponent.prototype.update = function () {
        this.deadlines = this._deadlinesService.getDeadlines();
    };
    DeadlineListComponent = __decorate([
        core_1.Component({
            selector: 'deadline-list',
            template: "\n    <deadline *ngFor=\"let d of deadlines\" [deadline]=\"d\">\n    </deadline>\n    ",
        }), 
        __metadata('design:paramtypes', [deadline_service_1.DeadlinesService])
    ], DeadlineListComponent);
    return DeadlineListComponent;
}());
exports.DeadlineListComponent = DeadlineListComponent;
//# sourceMappingURL=deadlineList.component.js.map