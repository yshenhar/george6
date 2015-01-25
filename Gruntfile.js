module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: ['./output'],

    connect: {
      server: {
        options: {
          port: 3001
        }
      }
    },

    browserify: {
      options: {
        browserifyOptions: {
          debug: true,
          insertGlobals: true
        }
      },
      client: {
        options: {
          transform: [ require('grunt-react').browserify ],
          preBundleCB: function (b) {
            b.require('./src/client/entry-point.js', {expose: 'app'});
          }
        },
        src: './src/client/app.js',
        dest: './output/static/app-bundle.js'
      },
      clientTests: {
        src: ['./src/tests/client/**/*-spec.js'],
        dest: './output/static/test-bundle.js'
      }
    },

    copy: {
      server: {
        expand: true,
        cwd: './src/server/',
        src: '**',
        dest: './output/'
      }
    },

    run: {
      george6: {
        cmd: 'node',
        args: [
          './bin/www'
        ]
      }
    },

    jasmine: {
      spec: {
        options: {
          specs: './output/static/test-bundle.js',
          outfile: './output/static/SpecRunner.html',
          host: 'http://127.0.0.1:3001',
          keepRunner: true
        }
      }
    },

    open: {
      dev: {
        path: './output/static/SpecRunner.html'
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-run');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', [
    'clean',
    'copy:server',
    'browserify',
    'connect',
    'jasmine:spec:run',
    'run:george6']);

  grunt.registerTask('clientTDD', [
    'clean',
    'copy:server',
    'browserify',
    'jasmine:spec:build',
    'open:dev']);
};
