module.exports = function(grunt) {
  // Load the various tasks required
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-include-replace');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-parallel');
  grunt.loadNpmTasks('grunt-svgstore');
  grunt.loadNpmTasks('grunt-contrib-concat');


  //Uncommment the line below to add JSHint into the project (Ctrl+f to find all regions needed to be uncommented in order to add in JSHint)
  //grunt.loadNpmTasks('grunt-contrib-jshint');

  //Uncomment the line below to add csslint to the project (Ctrl+f to find all regions needed to be uncommented in order to add in csslint)
  //grunt.loadNpmTasks('grunt-contrib-csslint');


  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    express: {
      all: {
        options: {
          port: 9001,
          hostname: '0.0.0.0',
          bases: ['www-root'],
          livereload: true,
          open: true
        }
      }
    },
  
    
    //Uncomment this region to add in JSHint to the project.
    /*jshint: {
      options: {
        jshintrc : '.jshintrc'
      },//options
      all : ['development/terminalfour/js/*.js']
    },//jshint
    */

    uglify: {
      options: {
        banner: '<%= pkg.warning %>/**\n * Client: <%= pkg.clientName %>\n * Project: <%= pkg.projectName %>\n * Version: <%= pkg.version %>\n * Description: <%= pkg.description %>\n * Copyright <%= grunt.template.today("yyyy") %>\n * Created by <%= pkg.developer %>\n * on behalf of TERMINALFOUR\n * www.terminalfour.com\n */\n',
        preserveComments : 'some',
        mangle : true
      },//options
      build: {
        src: 'development/terminalfour/src/js/*.js',
        dest: 'www-root/style-assets/js/t4-custom.min.js'
      }//build
    }, //uglify
    
    sass: {
      dist: {
        options: {
          style: 'expanded',
          //Uncomment the line below to add Compass into the project
          //compass: true,
        },//options
        files: {
          'www-root/style-assets/css/framework.css': 'development/terminalfour/src/sass/framework.scss',
          'www-root/style-assets/css/style.css': 'development/terminalfour/src/sass/style.scss'
        }//files
      }//dist
    },//sass
    
    //Uncomment this region to add csslint to the project
    /*
    csslint: {
      strict: {
        options: {
          csslintrc: '.csslintrc',
          formatters: [
            {id: 'text', dest: 'report/csslint.txt'}
          ]
        },
        src: ['www-root/style-assets/css/style.css']
      }
    },//csslint
    */

    includereplace: {
      dist: {
        options: {
          includesDir: 'development/terminalfour/src/html/includes'
        },
        files: [
          {src: '**/*.html', dest: 'www-root/', expand: true, cwd: 'development/terminalfour/src/html/'}
        ]
      }
    },//includereplace
    
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'development/lib/', src: ['./**'], dest: 'www-root/style-assets/lib/', filter: 'isFile'},
          {expand: true, cwd: 'development/terminalfour/src', src: ['./media/**'], dest: 'www-root/style-assets/', filter: 'isFile'}
        ]
      }//main
    },//copy
    
    svgstore: {
        options: {
            includeTitleElement: true,
            cleanup: ['fill', 'stroke', 'style'],
            svg: {
                viewBox : '0 0 100 100',
                xmlns: 'http://www.w3.org/2000/svg'
            }
        },
        default: {
            files: {
                'development/terminalfour/src/media/svg-icons/som-icons.svg' : ['development/terminalfour/src/media/icons/*.svg']
            }
        }
    },
    concat: {
        options: {
            banner: '<%= pkg.warning %>/**\n * Client: <%= pkg.clientName %>\n * Project: <%= pkg.projectName %>\n * Version: <%= pkg.version %>\n * Description: <%= pkg.description %>\n * Custom scripts and js libraries\n * Created by <%= pkg.developer %>\n * on behalf of TERMINALFOUR\n * www.terminalfour.com\n */\n',
            footer: '/* End of <%= pkg.projectName %> build scripts T4 */',
            stripBanners: true, 
            separator: ';\n'
        },
        dist: {
         
              src: ['development/lib/**/*.js', 'development/terminalfour/src/js/*.js'],
              dest: 'www-root/style-assets/js/t4-scripts.js'
                  
        }
    },
      
    watch: {
      options: { livereload: true },
      sass: {
        files: ['development/**/**/**/*.scss'],
        
        //Uncomment the line below and delete the other tasks line to add csslint into the project
        //tasks: ['sass:dist','csslint:strict']
        tasks: ['sass:dist', 'copy']

      },//sass
      media: {
        files: ['development/terminalfour/src/media/**'],
        //Uncomment the line below and delete the other tasks line to add csslint into the project
        //tasks: ['sass:dist','csslint:strict']
        tasks: ['copy']
      },

      scripts: {
        files: ['development/terminalfour/src/js/*.js'],
        //Uncomment the line below and delete the other "tasks:['uglify:build'] to add JSHint into the project"
        //tasks: ['jshint','uglify:build']
        tasks: ['concat']
      },//scripts

      htmlcompile: {
        files: ['development/terminalfour/src/html/**/*.html'],
        tasks: ['includereplace', 'copy']
      },//htmlcompile
      svgstore: {
         files: {
            'development/terminalfour/src/media/svg-icons/som-icons.svg' : ['development/terminalfour/src/media/icons/*.svg']
        }          
      }
    }//watch
    
  });

  // Default task(s).
  grunt.registerTask('default', ['server']);

  grunt.registerTask('server', [
    'express',
    'copy',
    'svgstore',
    'watch',
    'express-keepalive'
  ]);

};