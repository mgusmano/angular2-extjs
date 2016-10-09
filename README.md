angular2-extjs

ExtJS Bridge for Angular2
=======

Works with Sencha Ext JS 6.2 modern toolkit

to try:

Install Angular-CLI  (instructions at: https://github.com/angular/angular-cli)

Create a folder called angular2-extjs and cd to this folder

in the angular2-extjs folder
	create new project using command prompt (this will take a while):
		ng new ExtTest

Run the following commands on the command line:

	cd ExtTest
	npm install angular2-extjs --save
	cp -r node_modules/angular2-extjs/demo/ src/
	replace styles and scripts in angular-cli.json with src/misc/angular-cli.json.txt

To create a theme for the application:

in the angular2-extjs folder

	Create an empty ExtJS application called Theme:

		sencha -sdk {path-to-ext-js-6.2} generate app -starter=false -modern Theme ./Theme
		cp ../ExtTest/app/misc/app.js to Theme/app.js
		cd Theme

build Ext JS application

	sencha app build testing

Copy build folder of Ext JS app to app folder of Angular2 app

	cp -r build/ ../ExtTest/app/build

Run the application

	ng serve

In the browser, go to http://localhost:4200

Open ExtTest project in an editor to review the application

Demo at http://se.sencha.com/ExtTest
