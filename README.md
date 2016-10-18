angular2-extjs

Ext JS Bridge for Angular2 (The Bridge)
=======

The Bridge Works with the Sencha Ext JS 6.2 modern toolkit

To try The Bridge with a test Angular2 application:

Install Angular-CLI  (instructions at: https://github.com/angular/angular-cli)

Create a folder called ExtAngular and cd to this folder

in the ExtAngular folder
	create new project using command prompt (this will take a while):

	ng new ExtTest

When finished, run the following commands on the command line:

	cd ExtTest
	npm install angular2-extjs --save
	cp -r node_modules/angular2-extjs/demo/ src/

Replace styles and scripts section in ExtTest/angular-cli.json 
with what is in src/misc/angular-cli.json.txt

(don't forget to do this...)

To create a theme for the application:

In the ExtAngular folder create an empty ExtJS application called Theme:

	cd ..
	sencha -sdk {path-to-ext-js-6.2} generate app -starter=false -modern Theme ./Theme
	cp ExtTest/src/demo/misc/app.js Theme/app.js
	cd Theme

Change 'requires' in app.json to this:

	"requires": [
		"calendar",
		"charts",
		"d3",
		"ux",
		"pivot",
		"pivot-d3",
		"font-awesome"
	],

Build Ext JS application

	sencha app build testing

Copy build folder of Ext JS app to app folder of Angular2 test app (ExtTest)

	cp -r build/ ../ExtTest/src/app/build/

Run the application

	cd ..
	cd ExtTest
	ng serve

In the browser, go to http://localhost:4200

Open ExtTest project in an editor to review the application

Demo at http://se.sencha.com/ExtTest
