module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 8000,
                    protocol: 'http',
                    hostname: 'localhost',
                    base: '../web/'
                }
            }
        },

        requirejs: {
            compile: {
                options: {
                    baseUrl: "js",
                    wrap: true,
                    name: 'vendor/almond',
                    preserveLicenseComments: false,
                    optimize: 'none',
                    mainConfigFile: 'js/config/config.js',
                    include: ['main'],
                    out: '../web/js/main.min.js'
                }
            }
        },

        compass: {
            compile: {
                options: {
                    sassDir: 'sass',
                    cssDir: '../web/css',
                    imagesDir: 'img',
                    fontsDir: 'fonts',
                    generatedImagesDir: '../web/img'
                }
            }
        },

        copy: {
            html: {
                expand: true,
                cwd: '',
                src: '*.html',
                dest: '../web/'
            },
            img: {
                expand: true,
                cwd: 'img/',
                src: '*',
                dest: '../img/'
            }
        },

        watch: {
            options: {
                livereload: true
            },

            scripts: {
                files: ['js/**/*.js', 'js/**/*.html'],
                tasks: ['requirejs'],
                options: {
                    interrupt: true
                }
            },

            compass: {
                files: ['sass/**/*.scss'],
                tasks: ['compass'],
                options: {
                    interrupt: true
                }
            },

            // To let things stay simple
            html: {
                files: ['*.html'],
                tasks: ['copy:html'],
                options: {
                    interrupt: true
                }
            },

            img: {
                files: ['img/*'],
                tasks: ['copy:img'],
                options: {
                    interrupt: true
                }
            }
        }
    });

    grunt.registerTask('default', ['connect', 'watch']);

};
