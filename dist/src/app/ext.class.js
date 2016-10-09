"use strict";
var extclass = (function () {
    function extclass(className, extend, defineConfig, createConfig) {
        if (!Ext.ClassManager.isCreated(className)) {
            Ext.apply(defineConfig, { extend: extend });
            Ext.define(className, defineConfig);
        }
        this.className = className;
        this.extend = extend;
        this.defineConfig = defineConfig;
        this.createConfig = createConfig;
        this.extjsObject = Ext.create(className, createConfig);
    }
    return extclass;
}());
exports.extclass = extclass;
