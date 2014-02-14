"use strict";
module.exports = function (grunt) {

	var wintersmithConfig = grunt.file.readJSON("config.json");
	var wintersmith = require("wintersmith");
	var environment = wintersmith(wintersmithConfig);
	
	grunt.initConfig({});

	/**
	 * Wintersmith preview
	 */
	grunt.registerTask("preview", "Live preview of the site", function () {
		this.async();
		environment.preview(function (error) {
			if (error) {
				throw error;
			}
		});
	});
	
	/**
	 * Does nothing.
	 */
	grunt.registerTask("default", "Does nothing", function () {
		grunt.log.writeln("Doing nothing");
	});

};
