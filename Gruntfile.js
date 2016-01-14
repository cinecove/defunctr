module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        dirs: {
            output: 'build',
            dist: 'dist',
            source: 'src',
            release: 'release'
        },
        banner: '/*!\r\n' +
        ' * <%= pkg.title %> <%= build_tag %>\r\n' +
        ' * <%= pkg.homepage %>\r\n' +
        ' *\r\n' +
        ' * Copyright 2012 - <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\r\n' +
        ' * Released under the <%= pkg.license %> license\r\n' +
        ' * <%= pkg.licenseUrl %>\r\n' +
        ' *\r\n' +
        ' * Build Date: <%= grunt.template.today("isoDateTime") %>\r\n' +
        ' */\r\n'
    });

    grunt.config("env", grunt.option("env") || process.env.GRUNT_ENV || 'dev');
    grunt.config("bump_type", (grunt.option("bumptype") || process.env.GRUNT_BUMPTYPE || 'patch').toLowerCase()); // patch, minor, major, prerelease, preminor, premajor
    grunt.config("build_label", grunt.config("env").toLowerCase() === 'production' ? '' : '-' + grunt.config("env").toLowerCase());
    grunt.config("build_tag", grunt.config("pkg").version + grunt.config("build_label"));

    grunt.registerTask("refresh-config", "", function() {
        grunt.config("pkg", grunt.file.readJSON('package.json'));
        grunt.config("build_label", grunt.config("env").toLowerCase() === 'production' ? '' : '-' + grunt.config("env").toLowerCase());
        grunt.config("build_tag", grunt.config("pkg").version + grunt.config("build_label"));
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.config('copy', {
        scripts: {
            src: '<%= dirs.source %>/defunctr.js',
            dest: '<%= dirs.output %>/<%= pkg.name %>-<%= build_tag %>.js'
        },
        build: {
            expand: true,
            cwd: '<%= dirs.output %>/',
            src: '**',
            dest: '<%= dirs.release %>/',
            flatten: true,
            filter: 'isFile'
        },
        dist: {
            expand: true,
            cwd: '<%= dirs.output %>/',
            src: '**',
            dest: '<%= dirs.dist %>/',
            flatten: true,
            filter: 'isFile',
            rename: function (dest, src) {
                var ver = grunt.config("build_tag");
                return dest + src.replace('-' + ver, '');
            }
        },
		working: {
			expand: true,
			cwd: '<%= dirs.output %>/',
			src: '**',
			dest: '<%= dirs.release %>/',
			flatten: true,
			filter: 'isFile',
			rename: function (dest, src) {
				var ver = grunt.config("build_tag");
				return dest + src.replace('-' + ver, '');
			}
		}
    });

    grunt.loadNpmTasks('grunt-banner');
    grunt.config('usebanner', {
        build: {
            options: {
                position: 'top',
                banner: '<%= banner %>'
            },
            files: {
                src: [
                    '<%= dirs.output %>/*.js'
                ]
            }
        },
        dist: {
            options: {
                position: 'top',
                banner: '<%= banner %>'
            },
            files: {
                src: [
                    '<%= dirs.output %>/*.js'
                ]
            }
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
                sourceMapName: '<%= dirs.output %>/<%= pkg.name %>-<%= build_tag %>.map'
            },
            files: {
                '<%= dirs.output %>/<%= pkg.name %>-<%= build_tag %>.min.js': ['<%= dirs.output %>/<%= pkg.name %>-<%= build_tag %>.js']
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
        build: {
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
        },
        dist: {
            options: {
                force: true
            },
            src: [ '<%= dirs.dist %>']
        }
    });

    grunt.loadNpmTasks('grunt-replace');
    grunt.config('replace', {
        build: {
            options: {
                patterns: [
                    {
                        match: 'version',
                        replacement: '<%= build_tag %>'
                    }
                ]
            },
            files: [
                {
                    src: ['<%= dirs.source %>/defunctr.js'],
                    dest: '<%= dirs.output %>/<%= pkg.name %>-<%= build_tag %>.js'
                }
            ]
        },
        nuget: {
            options: {
                patterns: [
                    {
                        match: 'version',
                        replacement: '<%= build_tag %>'
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

    grunt.loadNpmTasks('grunt-bump');
    grunt.config('bump', {
        files: ['package.json', 'bower.json'],
        updateConfigs: [],
        commit: false,
        createTag: false,
        push: false
    });

	grunt.loadNpmTasks('grunt-git');
	grunt.config('gitadd', {
		task: {
			options: {
				force: true
			},
			files: {
				src: [
					'<%= dirs.dist %>/*.*'
				]
			}
		}
	});

    grunt.registerTask('build', [
        'clean:build',
        'replace:build',
        'uglify:min',
        'usebanner:build',
        'contributors:master',
        'contributors:f1',
        'contributors:f2',
        'clean:temp'
    ]);
    grunt.registerTask('default', [
        'build',
        'copy:build',
		'copy:working',
        'clean:build'
    ]);
    grunt.registerTask('nuget', [
        'replace:nuget',
        'nugetpack:dist'
    ]);

    grunt.registerTask('release', [
        'bump-only:' + grunt.config("bump_type"),
        'refresh-config',
        'build',
        'clean:dist',
        'copy:dist',
        'copy:build',
		'copy:working',
        'clean:build',
		'gitadd'
    ]);
};
