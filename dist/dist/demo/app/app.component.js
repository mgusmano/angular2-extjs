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
var AppComponent = (function () {
    function AppComponent() {
        this.gridcolumns = [
            { text: 'Name', width: 100, dataIndex: 'name' },
            { text: 'Email Address', flex: 1, dataIndex: 'email' },
            { text: 'Phone Number', width: 150, dataIndex: 'phone' }
        ];
        this.gridstore = {
            fields: ['name', 'email', 'phone'],
            data: [
                { name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
                { name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
                { name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
                { name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
            ]
        };
        this.gridconfig = { width: '600px', height: '200px' };
    }
    AppComponent.prototype.onGridSelect = function (event) {
        alert(event.record.data.name);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: "\n\t\t<div style=\"margin: 0 auto; width: 700px; padding: 10px; \">\n\t\t\t<h1>Ext JS Bridge for Angular2</h1>\n\t\t\t<ext-grid\n\t\t\t\t[columns]= \"gridcolumns\" \n\t\t\t\t[store]=\"gridstore\"\n\t\t\t\t[config]=\"gridconfig\"\n\t\t\t\t(select)=\"onGridSelect($event)\"\n\t\t\t></ext-grid>\n\t\t</div>\n\t",
            styles: ['']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
