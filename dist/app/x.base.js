"use strict";
var core_1 = require('@angular/core');
var xbase = (function () {
    function xbase(myElement, componentFactoryResolver, viewContainerRef, metaData) {
        var _this = this;
        this.myElement = myElement;
        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainerRef = viewContainerRef;
        this.metaData = metaData;
        this.listeners = {};
        this.xtype = metaData.XTYPE;
        this.inputs = metaData.INPUTNAMES;
        this.rootElement = myElement.nativeElement;
        var me = this;
        this['ready'] = new core_1.EventEmitter();
        metaData.OUTPUTS.forEach(function (event, n) {
            _this[event.name] = new core_1.EventEmitter();
        });
    }
    xbase.prototype.AfterContentInit = function (ExtJSBaseRef) {
        var extJSRootComponentRef = ExtJSBaseRef.first;
        var firstExtJS = extJSRootComponentRef.extjsObject;
        firstExtJS.setRenderTo(this.myElement.nativeElement);
        var ExtJSComponentRefArray = ExtJSBaseRef.toArray();
        var arrayLength = ExtJSComponentRefArray.length;
        for (var i = 1; i < arrayLength; i++) {
            var obj = ExtJSComponentRefArray[i].extjsObject;
            if (obj.config.docked != null) {
                firstExtJS.insert(0, obj);
            }
            else {
                firstExtJS.add(obj);
            }
        }
    };
    xbase.prototype.OnInit = function (dynamicTarget, metadata) {
        var me = this;
        var o = {};
        o.listeners = {};
        var eventtasks = this.myElement.nativeElement.__zone_symbol__eventTasks;
        if (eventtasks != undefined) {
            eventtasks.forEach(function (eventtask, index, array) {
                var eventIndex = metadata.OUTPUTNAMES.indexOf(eventtask.data.eventName);
                if (eventIndex != -1) {
                    var eventname = eventtask.data.eventName;
                    var eventparameters = metadata.OUTPUTS[eventIndex].parameters;
                    o.listeners[eventname] = function () {
                        var parameters = eventparameters;
                        var parms = parameters.split(',');
                        var args = Array.prototype.slice.call(arguments);
                        var o = {};
                        for (var i_1 = 0, j = parms.length; i_1 < j; i_1++) {
                            o[parms[i_1]] = args[i_1];
                        }
                        me[eventname].next(o);
                    };
                }
            });
        }
        o.xtype = me.xtype;
        if (me.xtype != '') {
            o.xtype = me.xtype;
        }
        for (var i = 0; i < me.metaData.INPUTNAMES.length; i++) {
            var prop = me.metaData.INPUTNAMES[i];
            if (me[prop] != undefined &&
                prop != 'listeners' &&
                prop != 'config' &&
                prop != 'fitToParent') {
                o[prop] = me[prop];
            }
            ;
        }
        if ('true' == me.fitToParent) {
            o.top = 0,
                o.left = 0,
                o.width = '100%',
                o.height = '100%';
        }
        if (me.config !== {}) {
            Ext.apply(o, me.config);
        }
        ;
        me.extjsObject = Ext.create(o);
        me.ext = me.extjsObject;
        me.x = me.extjsObject;
        var componentFactory;
        var type;
        if (me.component != undefined) {
            type = me.component;
            componentFactory = me.componentFactoryResolver.resolveComponentFactory(type);
            me.componentRef = dynamicTarget.createComponent(componentFactory);
            var node = me.extjsObject.innerElement.dom;
            node.appendChild(me.componentRef['_hostElement'].nativeElement);
        }
        if (me.parent != undefined) {
            me.parent.insert(0, me.extjsObject);
        }
        me.ready.next(me);
    };
    return xbase;
}());
exports.xbase = xbase;
