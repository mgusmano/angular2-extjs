import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
		<div style="margin: 0 auto; width: 700px; padding: 10px; ">
			<h1>Ext JS Bridge for Angular2</h1>
			<ext-grid
				[columns]= "gridcolumns" 
				[store]="gridstore"
				[config]="gridconfig"
				(select)="onGridSelect($event)"
			></ext-grid>
		</div>
	`,
	styles: ['']
})
export class AppComponent {
	gridcolumns: Array<any> = [
		{ text: 'Name', width: 100, dataIndex: 'name' },
		{ text: 'Email Address', flex: 1, dataIndex: 'email' },
		{ text: 'Phone Number', width: 150, dataIndex: 'phone' }
	];
	gridstore: any = {
		fields: [ 'name', 'email', 'phone' ],
		data: [
			{ name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
			{ name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
			{ name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
			{ name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
		]
	};
	gridconfig:Object = { width: '600px', height: '200px' };

	private onGridSelect(event) {
		alert(event.record.data.name);
	}
}
