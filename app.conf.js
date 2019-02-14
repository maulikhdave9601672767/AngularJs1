/* Application Configuration */

module.exports = {
	// CMDB deployment properties
	// See https://thehub.thomsonreuters.com/docs/DOC-907313
	deployment: {
		cmdbName: 'UKAccountsApplication', // no spaces
		f5Partition: 'accounts'
	},

	// Build options
	options: {
		useCoffeeScript: false,
		useTypeScript: false
	},

	banner: '/*! <%= bowerCfg.name %> - v<%= bowerCfg.version %> - ' +
	'<%= grunt.template.today("yyyy-mm-dd") %> - ' +
	'<%= bowerCfg.license %> */',

	paths: {
		webroot: 'app',
		webrootSubdirsNoBower: 'app/!(bower_components)', // used for faster file resolves
		webrootSubdirsNoNodeModules: 'app/!(node_modules)',
		bowercomps: 'app/bower_components',
		generated: 'app/generated',
		dist: 'dist',
		export: 'export',
		analysis: 'analysis',
		coverage: 'coverage',
		wijmo: 'app/wijmo-angular',
		scan: 'app/scan-resources/12.3.0',
		nodeModules: 'app/node_modules'
	},

	// Data made available at runtime as Angular constants
	constants: {
		// available while running 'grunt serve'
		local: {
			translationLoadPath: 'generated/i18n'
		},
		// available in distributable code
		dist: {
			translationLoadPath: 'i18n'
		}
	},

	// Local proxy settings for each environment
	proxy: {
		ci: {
			headers: {},
			forward: {
				'/login/': 'https://ci.onvio.co.uk',
				'/staff/': 'https://ci.onvio.co.uk',
				'/client/': 'https://ci.onvio.co.uk',
				'/.co.uktax/': 'https://ci.int.onvio.co.uk',
				'/fixedassets/': 'https://ci.onvio.co.uk',
				'/workpapers/': 'https://ci.onvio.co.uk',
				'/tax/center/': 'https://ci.onvio.co.uk',
				'/billing/': 'https://ci.onvio.co.uk',
				'/time-and-expense/': 'https://ci.onvio.co.uk',
				"/api/auth/": "https://ci.auth.onvio.co.uk",
				'/api/': 'https://ci.onvio.co.uk',
				'/ua/': 'https://ci.onvio.co.uk'
			}
		},
		demo: {
			headers: {},
			forward: {
				'/login/': 'https://demo.onvio.co.uk',
				'/staff/': 'https://demo.onvio.co.uk',
				'/client/': 'https://demo.onvio.co.uk',
				'/ustax/': 'https://demo.int.onvio.co.uk',
				'/fixedassets/': 'https://demo.onvio.co.uk',
				'/workpapers/': 'https://demo.onvio.co.uk',
				'/tax/center/': 'https://demo.onvio.co.uk',
				'/billing/': 'https://demo.onvio.co.uk',
				'/time-and-expense/': 'https://demo.onvio.co.uk',
				"/api/auth/": "https://demo.auth.onvio.us",
				'/api/': 'https://demo.onvio.co.uk',
				'/ua/': 'https://demo.onvio.co.uk'
			}
		},
		qed: {
			headers: {},
			forward: {
				'/login/': 'https://qed.onvio.co.uk',
				'/staff/': 'https://qed.onvio.co.uk',
				'/client/': 'https://qed.onvio.co.uk',
				'/ustax/': 'https://qed.int.onvio.co.uk',
				'/fixedassets/': 'https://qed.onvio.co.uk',
				'/workpapers/': 'https://qed.onvio.co.uk',
				'/tax/center/': 'https://qed.onvio.co.uk',
				'/billing/': 'https://qed.onvio.co.uk',
				'/time-and-expense/': 'https://qed.onvio.co.uk',
				'/api/': 'https://qed.onvio.co.uk',
				'/ua/': 'https://qed.onvio.co.uk'
			}
		},
		prod: {
			headers: {},
			forward: {
				'/login/': 'https://onvio.co.uk',
				'/staff/': 'https://onvio.co.uk',
				'/client/': 'https://onvio.co.uk',
				'/ustax/': 'https://int.onvio.co.uk',
				'/fixedassets/': 'https://onvio.co.uk',
				'/workpapers/': 'https://onvio.co.uk',
				'/tax/center/': 'https://onvio.co.uk',
				'/billing/': 'https://onvio.co.uk',
				'/time-and-expense/': 'https://onvio.co.uk',
				'/api/': 'https://onvio.co.uk',
				'/ua/': 'https://onvio.co.uk'
			}
		}
	}
};
