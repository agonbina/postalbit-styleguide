module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            dist: {
                options: {
                    require: 'susy',
                    sassDir: 'sass',
                    cssDir: 'css',
                    environment: 'development'
                }
            }
        },

        watch: {
            source: {
                files: ['sass/**/*.scss'],
                tasks: ['clean', 'compass']
            },
            styles: {
                files: ['css/*.css'],
                options: {
                    livereload: true
                }
            }
        },

        clean: {
            refresh: {
                src: ['css']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compass');

    // Default task(s)
    grunt.registerTask('default', ['watch:source']);

};