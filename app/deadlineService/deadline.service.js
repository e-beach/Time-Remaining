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
var dl_count = 0;
function fillerDeadline() {
    dl_count++;
    return { name: "Deadline " + dl_count, description: 'This is a Deadline.', completed: false, dueDate: new Date() };
}
var DeadlinesService = (function () {
    function DeadlinesService() {
        this.listeners = [];
        this.Deadlines = [
            fillerDeadline(), fillerDeadline()
        ];
        if (localStorage.getItem('deadLines')) {
            this.Deadlines = JSON.parse(localStorage.getItem('deadLines'));
        }
    }
    DeadlinesService.prototype.getDeadlines = function () {
        return this.Deadlines;
    };
    ;
    DeadlinesService.prototype.deleteDeadline = function (deadline) {
        this.Deadlines = this.Deadlines.filter(function (dl) { return dl !== deadline; });
        this.update();
    };
    DeadlinesService.prototype.addDeadLine = function (deadline) {
        this.Deadlines.push(deadline);
        this.update();
    };
    // I only have one listener, so update() and addListener() methods could be simplified.
    DeadlinesService.prototype.update = function () {
        for (var _i = 0, _a = this.listeners; _i < _a.length; _i++) {
            var listener = _a[_i];
            listener.update();
        }
        localStorage.setItem('deadLines', JSON.stringify(this.Deadlines));
    };
    DeadlinesService.prototype.addListener = function (dl) {
        this.listeners.push(dl);
    };
    DeadlinesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DeadlinesService);
    return DeadlinesService;
}());
exports.DeadlinesService = DeadlinesService;
//# sourceMappingURL=deadline.service.js.map