module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            dist: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css',
                    environment: 'development'
                }
            }
        },

        watch: {
            source: {
                files: ['sass/**/*.scss'],
                tasks: ['compass'],
                options: {
                    livereload: true // needed to run LiveReload
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');

    // Default task(s)
    grunt.registerTask('default', ['watch']);

};