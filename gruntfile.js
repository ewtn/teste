module.exports = function(grunt) 
{
	var sourcePath = 'WebContent/src';
	
	var config = {};
	
	config.pkg = grunt.file.readJSON('package.JSON');
	
	config.watch = 
	{
		files : [
			'src/**/**', 
			sourcePath + '/**', 
			sourcePath + '/resources/**/**', 
			sourcePath + '/spas/**', 
			sourcePath + '/spas/**/**'
		],
		options: { livereload : true }
	};
	
	config.connect = 
	{
		server: {
			options: {
                port: 9000,
                base: 'WebContent/',
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