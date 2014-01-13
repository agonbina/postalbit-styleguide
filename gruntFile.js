module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            build: {
                options: {
                    require: ['susy'],
                    sassDir: 'sass',
                    cssDir: 'css',
                    fontsDir: 'fonts',
                    imagesDir: "images",
                    environment: 'development'
                }
            }
        },

        watch: {
            source: {
                files: ['sass/**/*.scss'],
                tasks: ['compass:build']
            },
            styles: {
                files: ['css/*.css'],
                options: {
                    livereload: true
                }
            }
        },

        browser_sync: {
            dev: {
                bsFiles: {
                    src: ['css/styles.css', 'landing.html', 'index.html']
                },
                options: {
                    server: {
                        baseDir: '.',
                        ghostMode: {
                            clicks: true,
                            scroll: true,
                            links: true,
                            forms: true
                        }
                    },
                    watchTask: true
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
    //grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-browser-sync');

    // Default task(s)
    grunt.registerTask('default', ['browser_sync', 'watch:source']);

};