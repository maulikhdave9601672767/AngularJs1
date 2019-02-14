// Generated on 2014-03-12 using generator-angular 0.7.1 (then heavily modified)
'use strict';

module.exports = function (grunt) {

	var appCfg = require('./app.conf.js');

	// Define the configuration for all the tasks
	grunt.initConfig({
		watch: {			
						
			
			livereload: {
				options: {
					livereload: '<%= connect.options.livereload %>'
				}
			}
		}
		//webroot: appCfg.paths.webroot
		//webrootSubdirsNoNodeModules: appCfg.paths.webrootSubdirsNoNodeModules, // used for faster file resolves
		//nodeModules: appCfg.paths.nodeModules,
		//generated: appCfg.paths.generated,
		//dist: appCfg.paths.dist,
		//export: appCfg.paths.export,
		//analysis: appCfg.paths.analysis,
		//f5Partition: appCfg.deployment.f5Partition,
		//cmdbName: appCfg.deployment.cmdbName,
		//wijmo: appCfg.paths.wijmo,
		//scan: appCfg.paths.scan,

		// Bower config properties
		//bowerCfg: grunt.file.readJSON('bower.json'),

		// ptorCfg: {
		// 	suite: '',
		// 	username: '',
		// 	password: '',
		// 	baseurl: 'http://localhost:9002' //Provide a default value
		// },
		// // Watches files for changes and runs tasks based on the changed files.
		// ngconstant: {
		// 	options: {
		// 		dest: '<%= generated %>/config.js',
		// 		name: 'onvio.accounts.config'
		// 	},
		// 	local: {
		// 		constants: {
		// 			bmAppConfig: appCfg.constants.local
		// 		}
		// 	},
		// 	dist: {
		// 		constants: {
		// 			bmAppConfig: appCfg.constants.dist
		// 		}
		// 	}
		// },
		
	});

	function addProxyMiddleware(connect, options, middlewares) {
		middlewares.unshift(
			require('json-proxy').initialize({
				proxy: appCfg.proxy[proxyEnv]
			})
		);
		return middlewares;
	}
	grunt.registerTask('serve', function (target, environment) {
		if (target === 'dist') {
			if (/demo|qed/.test(environment)) {
				proxyEnv = environment;
			}
			grunt.task.run(['build', 'connect:dist:keepalive']);
		} else if (target === 'dist-nobuild') {
			grunt.task.run([
				'connect:dist:keepalive'
			]);
		} else if (target === 'analysis') {
			grunt.task.run([
				'clean:plato',
				'plato',
				'connect:analysis:keepalive'
			]);
		} else if (target === 'coverage') {
			grunt.task.run([
				'clean:coverage',
				'karma:coverage',
				'connect:coverage:keepalive'
			]);
		} else {
			if (/demo|qed/.test(target)) {
				proxyEnv = target;
			}
			grunt.task.run([
				// 'generate:local',
				 //'connect:livereload',
				// 'karma:dev:start',
				'watch'
			]);
			
			grunt.log.writeln('Starting Karma for dev. Attach browsers by navigating to http://localhost:9876.');
		}
	});
}