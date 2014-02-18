"use strict";
module.exports = function (grunt) {
	var wintersmithConfig = grunt.file.readJSON("config.json");
	var wintersmith = require("wintersmith");
	var environment = wintersmith(wintersmithConfig);

	// Start w/ a clean slate
	grunt.initConfig({});

	// Wintersmith preview
	grunt.registerTask("preview", "Live preview of the site", function () {
		this.async();
		environment.preview(function (error) {
			if (error) {
				throw error;
			}
		});
	});

	// Wintersmith build
	grunt.registerTask("build", "Build out a static site", function () {
		var done = this.async();
		grunt.file.delete(wintersmithConfig.output);
		environment.build(function (error) {
			if (error) {
				throw error;
				done(false);
			}
			done(true);
		});
	});

	// Default task
	grunt.registerTask("default", "Does nothing", function () { /* Does nothing */ });
};
