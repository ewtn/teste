module.exports = function(grunt) 
{
	var sourcePath = 'src';
	
	var config = {};
	
	config.pkg = grunt.file.readJSON('package.JSON');
	
	config.watch = 
	{
		files : [
			sourcePath + '/**'
		],
		options: { livereload : true }
	};
	
	config.connect = 
	{
		server: {
			options: {
                port: 9000,
                base: sourcePath,
                hostname: 'localhost',
                livereload: true,
                open: true
			}
		}
	};
	
	grunt.initConfig(config);
	
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    
    grunt.registerTask('default', ['connect', 'watch']);
    
};