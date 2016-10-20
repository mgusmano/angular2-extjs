"use strict";
var xclass = (function () {
    function xclass(className, extend, defineConfig, createConfig) {
        if (!Ext.ClassManager.isCreated(className)) {
            Ext.apply(defineConfig, { extend: extend });
            Ext.define(className, defineConfig);
        }
        this.className = className;
        this.extend = extend;
        this.defineConfig = defineConfig;
        this.createConfig = createConfig;
        this.extjsObject = Ext.create(className, createConfig);
        this.ext = this.extjsObject;
        this.x = this.extjsObject;
    }
    return xclass;
}());
exports.xclass = xclass;
