module.exports = function(grunt) {
  grunt.initConfig({
    stylus: {
      app: {
        src : ['src/stylus/*.styl'],
        dest: 'dist/css/application.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-stylus');

  grunt.registerTask('default', 'stylus');
};
