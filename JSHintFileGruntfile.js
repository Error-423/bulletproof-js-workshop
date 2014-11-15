module.exports = function(grunt) { 
  grunt.initConfig({ 
    pkg: grunt.file.readJSON('package.json') ,
    jshint: {
      files: ['js/**/*.js', 'test/unit/*.js'],
      options: {
        jshintrc: true
        //jshintrc: '../../.jshintrc'
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint']);
};
