Ext.define('AllClasses.Application', {
	extend: 'Ext.app.Application',
	name: 'AllClasses',

	launch: function () {
		this.getServerData()
		.then(function(response) {


		}, function(e) {
		console.log(e);
		})
	},

	getServerData: function () {
		return new Ext.Promise(function (resolve, reject) {
			try {
				Ext.Ajax.request({
					url: 'resources/modern-all-classes-flatten.json',
					success: function(response, opts) {
						var data = Ext.decode(response.responseText);
						resolve({ data: data });
					},
					failure: function(response, opts) {
						return reject ('server-side failure with status code ' + response.status);
					}
				});
			}
			catch(err) {
				return reject(err);
			}
		});
	},

	onAppUpdate: function () {
			Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
					function (choice) {
							if (choice === 'yes') {
									window.location.reload();
							}
					}
			);
	}
});
