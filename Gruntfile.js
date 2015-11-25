// Generated on 2015-05-22 using generator-angular 0.11.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	// Define the configuration for all the tasks
	grunt.initConfig({

		// Configurable paths for the application
		cfg: {
			src: 'app',
			dist: 'dist'
		},
		// Watches files for changes and runs tasks based on the changed files
		watch: {
			injectJS: {
				files: [
					'<%= cfg.src %>/**/**/*.js',
					'!<%= cfg.src %>/bower_components/**/*.js',
					'!<%= cfg.src %>/test/**/*.spec.js',
					'!<%= cfg.src %>/**/**/*.mock.js',
					'!<%= cfg.src %>/scripts/app.js'
				],
				tasks: ['injector:scripts']
			},
			injectCss: {
				files: [
					'<%= cfg.src %>/**/*.css'
				],
				tasks: ['injector:css']
			},
			bower: {
				files: ['bower.json'],
				tasks: ['wiredep']
			},
			js: {
				files: ['<%= cfg.src %>/{,**/}*.js', '!<%= cfg.src %>/**/*.spec.js'],
				tasks: ['newer:jshint:all'],
				options: {
					livereload: '<%= connect.options.livereload %>'
				}
			},
			jsTest: {
				files: ['<%= cfg.src %>/**/*.spec.js'],
				tasks: ['newer:jshint:test', 'karma']
			},
			styles: {
				files: ['<%= cfg.src %>/{styles,components,pages}/{,**/}*.css'],
				tasks: ['newer:copy:styles', 'autoprefixer'],
				options: {
					livereload: '<%= connect.options.livereload %>'
				}
			},
			gruntfile: {
				files: ['Gruntfile.js']
			},
			livereload: {
				options: {
					livereload: '<%= connect.options.livereload %>'
				},
				files: [
					'<%= cfg.src %>/{,**/}*.html',
					'<%= cfg.src %>/{,**/}*.js',
					'<%= cfg.src %>/{,**/}*.css',
					'.tmp/{,*/}*.css',
					'<%= cfg.src %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
					'!<%= cfg.src %>/{,**/}*.{mock, spec}.js'
				]
			}
		},


		// The actual grunt server settings
		connect: {
			options: {
				port: 9000,
				// Change this to '0.0.0.0' to access the server from outside.
				hostname: '0.0.0.0',
				livereload: 35729,
				middleware: function (connect, options, middlewares) {
					return middlewares;
				}
			},
			livereload: {
				options: {
					open: true,
					base: ['.tmp', 'bower_components', 'app/styles', 'app'],
					middleware: function (connect, options, middlewares) {
						return middlewares;
					}
				}
			},
			test: {
				options: {
					port: 9001,
					base: ['.tmp', '/bower_components', 'app'],
					middleware: function (connect, options, middlewares) {
						return middlewares;
					}
				}
			},
			dist: {
				options: {
					open: true,
					base: '<%= cfg.dist %>'
				}
			}
		},

		// Make sure code styles are up to par and there are no obvious mistakes
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			},
			all: {
				src: [
					'Gruntfile.js',
					'<%= cfg.app %>/scripts/{,*/}*.js'
				]
			},
			test: {
				options: {
					jshintrc: 'test/.jshintrc'
				},
				src: ['test/spec/{,*/}*.js']
			}
		},

		// Empties folders to start fresh
		clean: {
			dist: {
				files: [{
					dot: true,
					src: [
						'.tmp',
						'<%= cfg.dist %>/{,*/}*',
						'!<%= cfg.dist %>/.git{,*/}*'
					]
				}]
			},
			server: '.tmp'
		},

		// Add vendor prefixed styles
		autoprefixer: {
			options: {
				browsers: ['last 1 version']
			},
			server: {
				options: {
					map: true
				},
				files: [{
					expand: true,
					cwd: '.tmp/styles/',
					src: '{,*/}*.css',
					dest: '.tmp/styles/'
				}]
			},
			dist: {
				files: [{
					expand: true,
					cwd: '.tmp/styles/',
					src: '{,*/}*.css',
					dest: '.tmp/styles/'
				}]
			}
		},

		// Automatically inject Bower components into the app
		// Automatically inject Bower components into the app
		wiredep: {
			target: {
				src: '<%= cfg.src %>/index.html',
				ignorePath: '<%= cfg.src %>/',
				exclude: [/bootstrap-sass-official/, '/json3/', '/es5-shim/']
			}
		},

		// Renames files for browser caching purposes
		filerev: {
			dist: {
				src: [
					'<%= cfg.dist %>/scripts/{,*/}*.js',
					'<%= cfg.dist %>/styles/{,*/}*.css',
					'<%= cfg.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
					'<%= cfg.dist %>/styles/fonts/*'
				]
			}
		},

		// Reads HTML for usemin blocks to enable smart builds that automatically
		// concat, minify and revision files. Creates configurations in memory so
		// additional tasks can operate on them
		useminPrepare: {
			html: '<%= cfg.src %>/index.html',
			options: {
				dest: '<%= cfg.dist %>',
				flow: {
					html: {
						steps: {
							js: ['concat', 'uglifyjs'],
							css: ['cssmin']
						},
						post: {}
					}
				}
			}
		},

		// Performs rewrites based on filerev and the useminPrepare configuration
		usemin: {
			html: ['<%= cfg.dist %>/{,*/}*.html'],
			css: ['<%= cfg.dist %>/styles/{,*/}*.css'],
			options: {
				assetsDirs: [
					'<%= cfg.dist %>',
					'<%= cfg.dist %>/images',
					'<%= cfg.dist %>/styles'
				]
			}
		},

		// The following *-min tasks will produce minified files in the dist folder
		// By default, your `index.html`'s <!-- Usemin block --> will take care of
		// minification. These next options are pre-configured if you do not wish
		// to use the Usemin blocks.
		// cssmin: {
		//   dist: {
		//     files: {
		//       '<%= cfg.dist %>/styles/main.css': [
		//         '.tmp/styles/{,*/}*.css'
		//       ]
		//     }
		//   }
		// },
		// uglify: {
		//   dist: {
		//     files: {
		//       '<%= cfg.dist %>/scripts/scripts.js': [
		//         '<%= cfg.dist %>/scripts/scripts.js'
		//       ]
		//     }
		//   }
		// },
		// concat: {
		//   dist: {}
		// },

		imagemin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= cfg.app %>/images',
					src: '{,*/}*.{png,jpg,jpeg,gif}',
					dest: '<%= cfg.dist %>/images'
				}]
			}
		},

		svgmin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= cfg.app %>/images',
					src: '{,*/}*.svg',
					dest: '<%= cfg.dist %>/images'
				}]
			}
		},

		htmlmin: {
			dist: {
				options: {
					collapseWhitespace: true,
					conservativeCollapse: true,
					collapseBooleanAttributes: true,
					removeCommentsFromCDATA: true,
					removeOptionalTags: true
				},
				files: [{
					expand: true,
					cwd: '<%= cfg.dist %>',
					src: ['*.html', 'views/{,*/}*.html'],
					dest: '<%= cfg.dist %>'
				}]
			}
		},

		// ng-annotate tries to make the code safe for minification automatically
		// by using the Angular long form for dependency injection.
		ngAnnotate: {
			dist: {
				files: [{
					expand: true,
					cwd: '.tmp/concat/scripts',
					src: '*.js',
					dest: '.tmp/concat/scripts'
				}]
			}
		},

		// Replace Google CDN references
		cdnify: {
			dist: {
				html: ['<%= cfg.dist %>/*.html']
			}
		},

		// Copies remaining files to places other tasks can use
		copy: {
			dist: {
				files: [{
					expand: true,
					dot: true,
					cwd: '<%= cfg.app %>',
					dest: '<%= cfg.dist %>',
					src: [
						'*.{ico,png,txt}',
						'.htaccess',
						'*.html',
						'views/{,*/}*.html',
						'images/{,*/}*.{webp}',
						'styles/fonts/{,*/}*.*'
					]
				}, {
					expand: true,
					cwd: '.tmp/images',
					dest: '<%= cfg.dist %>/images',
					src: ['generated/*']
				}, {
					expand: true,
					cwd: 'bower_components/bootstrap/dist',
					src: 'fonts/*',
					dest: '<%= cfg.dist %>'
				}]
			},
			styles: {
				expand: true,
				cwd: '<%= cfg.app %>/styles',
				dest: '.tmp/styles/',
				src: '{,*/}*.css'
			}
		},

		// Run some tasks in parallel to speed up the build process
		concurrent: {
			server: [
				'copy:styles'
			],
			test: [
				'copy:styles'
			],
			dist: [
				'copy:styles',
				'imagemin',
				'svgmin'
			]
		},

		// inject js and css
		injector: {
			options: {},
			// Inject application script files into index.html (doesn't include bower and pages except .main.js)
			scripts: {
				options: {
					transform: function (filePath) {
						filePath = filePath.replace('/app/', '');
						filePath = filePath.replace('/.tmp/', '');
						return '<script src="' + filePath + '"></script>';
					},
					starttag: '<!-- injector:js -->',
					endtag: '<!-- endinjector -->'
				},
				files: {
					'<%= cfg.src %>/index.html': [
						[
							'{.tmp,<%= cfg.src %>}/**/*.js',
							'!<%= cfg.src %>/bower_components/**/*.js',
							'!{.tmp,<%= cfg.src %>}/**/app.js',
							'!{.tmp,<%= cfg.src %>}/test/**/*.js',
							'!{.tmp,<%= cfg.src %>}/mock/**/*.js'
						]
					]
				}
			},

			// Inject component css into index.html
			css: {
				options: {
					transform: function (filePath) {
						filePath = filePath.replace('/app/', '');
						filePath = filePath.replace('/.tmp/', '');
						return '<link rel="stylesheet" href="' + filePath + '">';
					},
					starttag: '<!-- injector:css -->',
					endtag: '<!-- endinjector -->'
				},
				files: {
					'<%= cfg.src %>/index.html': [
						'<%= cfg.src %>/styles/*.css'
					]
				}
			}

		},

		// Test settings
		karma: {
			unit: {
				configFile: 'karma.conf.js',
				singleRun: true
			}
		}
	});


	grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
		if (target === 'dist') {
			return grunt.task.run(['build', 'connect:dist:keepalive']);
		}

		grunt.task.run([
			'clean:server',
			'injector',
			'wiredep',
			'concurrent:server',
			'autoprefixer:server',
			'connect:livereload',
			'watch'
		]);
	});

	grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
		grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
		grunt.task.run(['serve:' + target]);
	});

	grunt.registerTask('test', [
		'clean:server',
		'wiredep',
		'concurrent:test',
		'autoprefixer',
		'connect:test',
		'karma'
	]);

	grunt.registerTask('build', [
		'clean:dist',
		'wiredep',
		'useminPrepare',
		'concurrent:dist',
		'autoprefixer',
		'concat',
		'ngAnnotate',
		'copy:dist',
		'cdnify',
		'cssmin',
		'uglify',
		'filerev',
		'usemin',
		'htmlmin'
	]);

	grunt.registerTask('default', [
		'newer:jshint',
		'test',
		'build'
	]);
};
