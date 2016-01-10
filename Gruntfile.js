module.exports = function(grunt) {


grunt.initConfig({
	
  watch: {
    files: ['**/*.js'],
    tasks: ['webpack'],
  }
});
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-exec');
};