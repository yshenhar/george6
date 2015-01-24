module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      react: {
        files: 'client/*.js',
        tasks: ['browserify']
      }
    },

    browserify: {
      options: {
        transform: [ require('grunt-react').browserify ]
      },
      client: {
        src: ['src/client/**/*.js'],
        dest: 'src/server/static/app-bundle.js'
      },
      clientTests: {
        src: ['src/tests/client/**/*-spec.js'],
        dest: 'src/tests/client/test-bundle.js'
      }
    },

    run: {
      george6: {
        cmd: 'node',
        args: [
          'bin/www'
        ]
      }
    },

    mocha: {
      options: {
        run: true
      },
      clientTests: {
        src: ['src/tests/client/**/*.html']
      }

    }

  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-run');
  grunt.loadNpmTasks('grunt-mocha');

  grunt.registerTask('clientTests', ['browserify', 'mocha:clientTests']);
  grunt.registerTask('default', ['browserify', 'run:george6']);
};
