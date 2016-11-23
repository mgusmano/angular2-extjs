var fs = require('fs');
var data = require('./modern-all-classes-flatten.json');  
launch(data);

function launch(data) {
	debugger;
	var items = data.global.items;
	var commaOrBlank = "";
	var prefix = "x";
	var dist = "app/";
	var root = "src/";
	var folder = root + dist;
	var tab = "\t";
	var newLine = "\n";
	var imports = "";
	var exports = "";
	var declarations = "";
	var allClasses = "";
	var o = {};
	for (i = 0; i < items.length; i++) { 
		o = items[i];
//		console.log(o.name);
		// if (o.alias != undefined) {
		// 	console.log(o.alias);
		// }
		if (o.alias != undefined && 
				o.alias.substring(0, 6) == 'widget' && 
				o.alias.substring(7).indexOf('.') == -1 && 
//				o.alias.substring(7).indexOf('-') == -1 && 
//				o.alias.indexOf('calendar-') == -1 && 
				o.alias.indexOf('actionsheet') == -1 && 
				o.alias.indexOf('audio') == -1 && 
				o.alias.indexOf('axis') == -1 && 
				o.alias.indexOf('carouselindicator') == -1 && 
				o.alias.substring(7).indexOf('item') == -1 && 
				o.alias.substring(7).indexOf('cell') == -1 && 
				o.alias.substring(7).indexOf('column') == -1 && 
				o.alias.substring(7).indexOf('row') == -1 && 
				o.alias.substring(7).indexOf('sparkline') == -1 && 
				o.alias.substring(7).indexOf('pivotconfig') == -1 && 
				o.alias.indexOf(',') == -1) 
			{
			if (o.alias.indexOf('calendar-day') != -1) {
//				debugger;
			}



			o.xtype = o.alias.substring(o.alias.indexOf(".") + 1);

			if (o.items != undefined) {
				var sINPUTS = "";
				var sOUTPUTS = "";
				var sOUTPUTNAMES = "";

				var configsArray = o.items.filter(function(obj) {return obj.$type == 'configs';});
				if (configsArray.length == 1) {
					configsArray[0].items.forEach(function (config, index, array) {
						sINPUTS = sINPUTS + tab + tab + "'" + config.name + "'" + "," + newLine;
					});
					sINPUTS = sINPUTS + tab + tab + "'" + "platformConfig"+ "'" + "," + newLine;
					sINPUTS = sINPUTS + tab + tab + "'" + "responsiveConfig"+ "'" + "," + newLine;
					sINPUTS = sINPUTS + tab + tab + "'" + "fittoparent"+ "'" + "," + newLine;
					sINPUTS = sINPUTS + tab + tab + "'" + "config" + "'" + "" + newLine;
				}

				var eventsArray = o.items.filter(function(obj) {return obj.$type == 'events';});
				if (eventsArray.length == 1) {
					eventsArray[0].items.forEach(function (event, index, array) {
						if (event.name == undefined) {
							var s = event.inheritdoc;
							event.name = s.substr(s.indexOf('#') + 1);
						}
						sOUTPUTS = sOUTPUTS + tab + tab + "{name:'" + event.name + "',parameters:'";
						sOUTPUTNAMES = sOUTPUTNAMES + tab + tab + "'" + event.name + "'" + "," + newLine;
						if (event.items != undefined) {
							event.items.forEach(function (parameter, index, array) {
								if (index == array.length-1){commaOrBlank= ''} else {commaOrBlank= ','};
								if (parameter.name == 'this'){ parameter.name = o.xtype };
								sOUTPUTS = sOUTPUTS + "" + parameter.name + commaOrBlank;
							});
						}
						sOUTPUTS = sOUTPUTS + "'}" + "," + newLine;
					})
				}
				sOUTPUTS = sOUTPUTS + tab + tab + "{name:'" + "ready" + "',parameters:''}" + "" + newLine;
				sOUTPUTNAMES = sOUTPUTNAMES + tab + tab + "'" + "ready" + "'" + "" + newLine;
				var className =  o.xtype.replace(/-/g, "_")
				allClasses = allClasses + tab + "'" + o.name + "'," + tab + "// xtype='" + className + "'" + newLine;
				fs.writeFile(folder + prefix + '.' + className + '.ts', doClass(o.xtype, sINPUTS, sOUTPUTS, sOUTPUTNAMES, prefix, o.name, className), 
					function(err) {if(err) { return console.log(err); }
				});

				imports = imports + "import { " + prefix + className + " } from './" + prefix + "." + className + "';" + newLine;
				exports = exports + tab + tab + prefix + className + "," + newLine;
				declarations = declarations + tab + tab + prefix + className + "," + newLine;
			}
		}
	}

	fs.writeFile(folder + prefix + '.' + 'base' + '.ts', doExtBase(prefix), 
		function(err) {if(err){return console.log(err);}
	});
	fs.writeFile(folder + prefix + '.' + 'class' + '.ts', doExtClass(prefix), 
		function(err) {if(err){return console.log(err);}
	});
	fs.writeFile(folder + prefix + '.ts', doExt(prefix), 
		function(err) {if(err){return console.log(err);}
	});
	fs.writeFile(folder + prefix + '.' + 'ngcomponent' + '.ts', doExtNgComponent(prefix), 
		function(err) {if(err){return console.log(err);}
	});
	fs.writeFile('demo/misc/' + 'app' + '.js', doAppJS(allClasses),
		function(err) {if(err){return console.log(err);}
	});
	fs.writeFile(root + 'index' + '.ts', doIndex(dist, prefix),
		function(err) {if(err){return console.log(err);}
	});
	exports = exports.substring(0, exports.length - 2); exports = exports + newLine;
	declarations = declarations.substring(0, declarations.length - 2); declarations = declarations + newLine;
	fs.writeFile(folder + prefix + '.' + 'module' + '.ts', doModule(imports, exports, declarations, prefix), 
		function(err) {if(err) { return console.log(err); }
	});
}

function doClass(xtype, sINPUTS, sOUTPUTS, sOUTPUTNAMES, prefix, name, className) {
return `import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { ${prefix}base } from './${prefix}.base';
// Ext Class - ${name}
class ${prefix}${className}MetaData {
	public static XTYPE: string = '${xtype}';
	public static INPUTNAMES: string[] = [
${sINPUTS}];
	public static OUTPUTS: any[] = [
${sOUTPUTS}];
	public static OUTPUTNAMES: string[] = [
${sOUTPUTNAMES}];
}
@Component({
  selector: '${prefix}-' + ${prefix}${className}MetaData.XTYPE,
	inputs: ${prefix}${className}MetaData.INPUTNAMES,
	outputs: ${prefix}${className}MetaData.OUTPUTNAMES,
	providers: [{provide: ${prefix}base, useExisting: forwardRef(() => ${prefix}${className})}],
	template: '<template #dynamic></template>'
})
export class ${prefix}${className} extends ${prefix}base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,${prefix}${className}MetaData);
	}
	//@ContentChildren(${prefix}base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(${prefix}base,{read: ${prefix}base}) extbaseRef: QueryList<${prefix}base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,${prefix}${className}MetaData);}
}
`;
};

function doAppJS(allClasses) {
	return `Ext.require([
	'plugin.responsive',
	'widget.widgetcell',
	'widget.sparklineline',
	'plugin.grideditable',
	'plugin.gridviewoptions',
	'plugin.pagingtoolbar',
	'plugin.summaryrow',
	'plugin.columnresizing',
	'plugin.pivotconfigurator',
	'axis.numeric',
	'axis.category',
	'Ext.chart.series.Series',
	'series.bar',
	'series.pie',
${allClasses}]);
`
}

function doIndex(dist, prefix) {
return `export * from './${dist}${prefix}.module'
export * from './${dist}${prefix}.class'
`
}


function doModule(imports, exports, declarations, prefix) {
	return `import { NgModule } from "@angular/core";
import { ${prefix} } from './${prefix}';
import { ${prefix}ngcomponent } from './${prefix}.ngcomponent';
import { ${prefix}class } from './${prefix}.class';
${imports}
@NgModule({
	exports: [
		${prefix},
		${prefix}ngcomponent,
${exports} ],
	declarations: [
		${prefix},
		${prefix}ngcomponent,
${declarations} ]
})
export class ${prefix}Module { }
	`
}

function doExtBase(prefix) {
	return `/// <reference path="../../node_modules/retyped-extjs-tsd-ambient/ExtJS.d.ts" />
import {AfterContentInit,AfterViewInit,Attribute,Component,ComponentFactory,ComponentRef,ComponentFactoryResolver,ContentChildren,
	ElementRef,EventEmitter,OnInit,QueryList,Type,ViewChild,ViewContainerRef
} from '@angular/core';

export class ${prefix}base{
	public extjsObject: any;
	private rootElement: any;
	private listeners = {};
	private xtype: string;
	private inputs: any;
	//private nofit: any;

	constructor(
		private myElement: any, 
		private componentFactoryResolver: ComponentFactoryResolver, 
		private viewContainerRef: ViewContainerRef, 
		private metaData: any
		) {
		this.xtype = metaData.XTYPE;
		this.inputs = metaData.INPUTNAMES;
		this.rootElement = myElement.nativeElement;
		this['ready'] = new EventEmitter();
		metaData.OUTPUTS.forEach( (event: any, n: any) => {
			(<any>this)[event.name] = new EventEmitter();
		});
	}

	AfterContentInit(ExtJSBaseRef) {
		//var extJSRootComponentRef : ViewContainerRef = ExtJSBaseRef.first;
		var extJSRootComponentRef : xbase = ExtJSBaseRef.first;
		//var firstExtJS = extJSRootComponentRef['_element'].component.extjsObject;
		var firstExtJS = extJSRootComponentRef.extjsObject;
		firstExtJS.setRenderTo(this.myElement.nativeElement);
		var ExtJSComponentRefArray: any = ExtJSBaseRef.toArray();
		var arrayLength = ExtJSComponentRefArray.length;
		for (var i = 1; i < arrayLength; i++) {
			//var obj = ExtJSComponentRefArray[i]['_element'].component.extjsObject;
			var obj = ExtJSComponentRefArray[i].extjsObject;
			if (obj.config.docked != null) {
				firstExtJS.insert(0, obj);
			}
			else {
				firstExtJS.add(obj);
			}
		}
	}

	OnInit(dynamicTarget,metadata?) {
		let me: any = this;
		let o: any = {};
		o.listeners = {};
		var eventtasks = this.myElement.nativeElement.__zone_symbol__eventTasks;
		if (eventtasks != undefined) {
			eventtasks.forEach(function (eventtask, index, array) {
				var eventIndex = metadata.OUTPUTNAMES.indexOf(eventtask.data.eventName);
				if (eventIndex != -1) {
					var eventname = eventtask.data.eventName;
					var eventparameters = metadata.OUTPUTS[eventIndex].parameters
					o.listeners[eventname] = function() {
							let parameters: any = eventparameters;
							let parms = parameters.split(',');
							let args = Array.prototype.slice.call(arguments);
							let o: any = {};
							for (let i = 0, j = parms.length; i < j; i++ ) {
									o[parms[i]] = args[i];
							}
							me[eventname].next(o);
					};
				}
			});
		}

		o.xtype = me.xtype;
		if (me.xtype != '') { o.xtype = me.xtype; }
		for (var i = 0; i < me.metaData.INPUTNAMES.length; i++) { 
			var prop = me.metaData.INPUTNAMES[i];
			//need to handle listeners coming in here
			if (me[prop] != undefined && 
					prop != 'listeners' && 
					prop != 'config' && 
					prop != 'fittoparent') { 
				o[prop] = me[prop]; 
			};
		}
		if ('true' == me.fittoparent) {
			o.top=0, 
			o.left=0, 
			o.width='100%', 
			o.height='100%'
		}
		if (me.config !== {} ) {
			Ext.apply(o, me.config);
		};
		me.extjsObject = Ext.create(o);
		me.ext = me.extjsObject;
		me.x = me.extjsObject;

		var componentFactory: ComponentFactory<any>;
		var type: Type<any>;

		if (me.component != undefined) {
			type = me.component;
			componentFactory = me.componentFactoryResolver.resolveComponentFactory(type);
			me.componentRef = dynamicTarget.createComponent(componentFactory);
			//me.componentRef.instance['buttontext'] = 'testing';
			var node = me.extjsObject.innerElement.dom;
			node.appendChild(me.componentRef['_hostElement'].nativeElement);
		}
		if (me.parent != undefined) {
			me.parent.insert(0, me.extjsObject);
		}
		me.ready.next(me);
	}
}
`
}


function doExt(prefix) {
	return `import { Component, OnInit, ViewChild, ElementRef, Attribute, ComponentFactory, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren, QueryList, Type } from '@angular/core';
import { ${prefix}base } from './${prefix}.base';
class extMetaData {
	public static XTYPE: string = '';
	public static INPUTNAMES: string[] = ['xtype','fittoparent'];
	public static OUTPUTS: any[] = [ { name: 'click', parameters: 'control,record,eOpts' }];
	public static OUTPUTNAMES: string[] = ['click'];
}
@Component({
  selector: '${prefix}' + extMetaData.XTYPE,
	inputs: extMetaData.INPUTNAMES.concat('config'),
	outputs: extMetaData.OUTPUTNAMES.concat('ready'),
	providers: [{provide: ${prefix}base, useExisting: forwardRef(() => ${prefix})}],
	template: '<template #dynamic></template>'
})
export class ${prefix} extends ${prefix}base implements OnInit {
	constructor(myElement: ElementRef, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef) {
		super(myElement, componentFactoryResolver, viewContainerRef, extMetaData);
	}
	//@ContentChildren(${prefix}base,{read: ViewContainerRef}) extbaseRef: QueryList<ViewContainerRef>;
	@ContentChildren(${prefix}base,{read: ${prefix}base}) extbaseRef: QueryList<${prefix}base>;
	@ViewChild('dynamic',{read: ViewContainerRef}) dynamicRef: ViewContainerRef;
	ngAfterContentInit() { this.AfterContentInit(this.extbaseRef); }
	ngOnInit() { this.OnInit(this.dynamicRef); }
}
`
}

function doExtNgComponent(prefix) {
	return `import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { ${prefix}base } from './${prefix}.base';
class ExtNgComponentMetaData {
	public static XTYPE: string = 'container';
	public static INPUTNAMES: string[] = ['selector','component','selectorParams'];
	public static OUTPUTS: any[] = [];
	public static OUTPUTNAMES: string[] = [];
}
@Component({
  selector: '${prefix}-ngcomponent',
	inputs: ExtNgComponentMetaData.INPUTNAMES.concat('config'),
	outputs: ExtNgComponentMetaData.OUTPUTNAMES.concat('ready'),
	providers: [{provide: ${prefix}base, useExisting: forwardRef(() => ${prefix}ngcomponent)}],
	template: '<template #dynamic></template>'
})
export class ${prefix}ngcomponent  extends ${prefix}base {
	//@ContentChildren(${prefix}base,{read:ViewContainerRef}) extbaseRef: QueryList<ViewContainerRef>;
	@ContentChildren(${prefix}base,{read: ${prefix}base}) extbaseRef: QueryList<${prefix}base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef: ViewContainerRef;
	constructor(myElement: ElementRef, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef) {
		super(myElement, componentFactoryResolver, viewContainerRef, ExtNgComponentMetaData);
	}
	ngAfterContentInit() { this.AfterContentInit(this.extbaseRef); }
	ngOnInit() { this.OnInit(this.dynamicRef); }
}
`
}

function doExtClass(prefix) {
	return `export class ${prefix}class {
	public className: any;
	public extend: any;
	public defineConfig: any;
	public createConfig: any;
	public extjsObject;

	constructor (className: any, extend: string, defineConfig: any, createConfig: any) {
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
}
`
}
