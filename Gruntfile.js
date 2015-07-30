module.exports = function(grunt) {

  grunt.initConfig({
   
    pkg: grunt.file.readJSON('package.json'),
    karma: {
      options: {
       configFile: 'karma.conf.js' 
      },
      unit: {        
			 singleRun: true
      }
	 }
  });

  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('default', ['karma']);
  grunt.registerTask('test', ['karma']);

};