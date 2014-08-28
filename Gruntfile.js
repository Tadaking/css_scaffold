module.exports = function(grunt) {
  grunt.initConfig({
    slim: {
      dist: {
        files: {
          'dist/style_guide.html': 'src/slim/style_guide.slim'
        }
      }
    },

    stylus: {
      app: {
        src : ['src/stylus/*.styl'],
        dest: 'dist/css/application.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-slim');

  grunt.registerTask('default', 'slim');
};
