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
    },
    watch: {
      slim: {
        files: ['src/slim/style_guide.slim'],
        tasks: ['slim']
      },
      stylus: {
        files: ['src/stylus/*.styl'],
        tasks: ['stylus']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-slim');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['slim', 'stylus', 'watch']);
};
