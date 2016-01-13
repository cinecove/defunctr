module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		dirs: {
			output: 'build',
			dist: 'dist',
			source: 'src'
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.config('copy', {
		scripts: {
			src: '<%= dirs.source %>/module.js',
			dest: '<%= dirs.output %>/<%= pkg.name %>.js'
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
			' * Copyright 2013 - <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\r\n' +
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
				sourceMapName: '<%= dirs.output %>/<%= pkg.name %>.map'
			},
			files: {
				'<%= dirs.output %>/<%= pkg.name %>.min.js': ['<%= dirs.output %>/<%= pkg.name %>.js']
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

	grunt.loadNpmTasks('grunt-git-deploy');
	grunt.config('git_deploy', {
		release: {
			options: {
				url: 'https://github.com/cinecove/defunctr.git',
				message: 'autocommit deploy version <%= pkg.version %>',
				tag: false,
				branch: 'dist'
			},
			src: '<%= dirs.output %>'
		}
	});


	grunt.registerTask('default', ['copy:scripts', 'uglify:min', 'usebanner']);
	grunt.registerTask('deploy', ['copy:scripts', 'uglify:min', 'usebanner', 'git_deploy:release']);
};
