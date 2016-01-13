module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        dirs: {
            output: 'build',
            dist: 'release',
            source: 'src'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.config('copy', {
        scripts: {
            src: '<%= dirs.source %>/defunctr.js',
            dest: '<%= dirs.output %>/<%= pkg.name %>-<%= pkg.version %>.js'
        },
        release: {
            expand: true,
            cwd: '<%= dirs.output %>/',
            src: '**',
            dest: '<%= dirs.dist %>/',
            flatten: true,
            filter: 'isFile'
        }
    });

    grunt.loadNpmTasks('grunt-banner');
    grunt.config('usebanner', {
        options: {
            position: 'top',
            banner: '/*!\r\n' +
            ' * <%= pkg.title %> <%= pkg.version %>\r\n' +
            ' * <%= pkg.homepage %>\r\n' +
            ' *\r\n' +
            ' * Copyright 2012 - <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\r\n' +
            ' * Released under the <%= pkg.license %> license\r\n' +
            ' * <%= pkg.licenseUrl %>\r\n' +
            ' *\r\n' +
            ' * Build Date: <%= grunt.template.today("isoDateTime") %>\r\n' +
            ' */\r\n'
        },
        files: {
            src: [
                '<%= dirs.output %>/*.js'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.config('jshint', {
        files: ['<%= dirs.output %>/*.js'],
        options: {
            globals: {
                jQuery: true,
                Modernizr: true,
                console: true,
                module: true,
                document: true,
                window: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.config('uglify', {
        min: {
            options: {
                sourceMap: true,
                sourceMapName: '<%= dirs.output %>/<%= pkg.name %>-<%= pkg.version %>.map'
            },
            files: {
                '<%= dirs.output %>/<%= pkg.name %>-<%= pkg.version %>.min.js': ['<%= dirs.output %>/<%= pkg.name %>-<%= pkg.version %>.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.config('watch', {
        scripts: {
            files: '<%= dirs.source %>/*.js',
            tasks: ['uglify:min']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.config('clean', {
        release: {
            options: {
                force: true
            },
            src: [ '<%= dirs.output %>' ]
        },
        temp: {
            options: {
                force: true
            },
            src: [ 'tmp' ]
        }
    });

    grunt.loadNpmTasks('grunt-replace');
    grunt.config('replace', {
        build: {
            options: {
                patterns: [
                    {
                        match: 'version',
                        replacement: '<%= pkg.version %>'
                    }
                ]
            },
            files: [
                {
                    src: ['<%= dirs.source %>/defunctr.js'],
                    dest: '<%= dirs.output %>/<%= pkg.name %>-<%= pkg.version %>.js'
                }
            ]
        },
        nuget: {
            options: {
                patterns: [
                    {
                        match: 'version',
                        replacement: '<%= pkg.version %>'
                    },
                    {
                        match: 'projecturl',
                        replacement: '<%= pkg.homepage %>'
                    },
                    {
                        match: 'copyright',
                        replacement: '<%= pkg.author.name %>'
                    },
                    {
                        match: 'year',
                        replacement: '<%= grunt.template.today("yyyy") %>'
                    }
                ]
            },
            files: [
                {
                    src: ['nuget/Defunctr.config'],
                    dest: 'nuget/Defunctr.nuspec'
                }
            ]
        }
    });

    grunt.loadNpmTasks('grunt-git-contributors');
    grunt.config('contributors', {
        master: {
            path: 'AUTHORS.txt',
            branch: 'master',
            chronologically: true
        },
        f1: {
            path: 'AUTHORS.txt',
            branch: 'feature/fix-1x',
            chronologically: true
        },
        f2: {
            path: 'AUTHORS.txt',
            branch: 'legacy-1.x',
            chronologically: true
        }
    });

    grunt.loadNpmTasks('grunt-nuget');
    grunt.config('nugetpack', {
       dist: {
           src: 'nuget/Defunctr.nuspec',
           dest: 'nuget/'
       }
    });

    //   'clean:release'
    grunt.registerTask('default', [
        'clean:release',
        'replace:build',
        'uglify:min',
        'usebanner',
        'copy:release',
        'clean:release',
        'clean:temp',
        'contributors:master',
        'contributors:f1',
        'contributors:f2'
    ]);
    grunt.registerTask('nuget', [
        'default',
        'replace:nuget',
        'nugetpack:dist'
    ]);
};