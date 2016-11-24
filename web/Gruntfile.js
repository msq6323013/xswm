module.exports = function (grunt){
    var TRIGGER = grunt.option('TRIGGER') || false;
    // terminal: grunt --TRIGGER=true --force
//    if(TRIGGER === false){
//        //grunt.initConfig()
//    }else if(TRIGGER === true){
//        //grunt.initConfig()
//    }
    
    //Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify :{
            build :{
                files :[{
                    expand :true,//表示下面文件名的占位符（即*号）都要扩展成具体的文件名
                    cwd : 'webpage/src',
                    src : ['**/*.js','!**/tests/**/*.js'],
                    dest : 'target/src'
                }]
                //src : 'webpage/src/**/*.js',
                //dest : 'target'
            }
        },
        cssmin: {
            minify: {
                expand: true,
                cwd: 'webpage/src',
                src: ['**/*.css', '!**/*.min.css'],
                dest: 'target/src'
                //ext: '.min.css'
            }
        },
        jshint : {
            all: [
                'Gruntfile.js',
                'webpage/src/**/*.js',
                '!webpage/src/**/tests/**/*.js'
                //'spec/**/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        clean: {
            build: {
                src: ['target']
            }
        },
        htmlmin: {
            dist:{
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeEmptyAttributes: true,
                    removeCommentsFromCDATA:true,
                    removeRedundantAttributes: true,
                    collapseBooleanAttributes:true
                },
                files: [{
                    expand: true,
                    cwd: 'webpage',
                    src: ['views/**/*.html', 'index.html'],
                    dest: 'target'
                }]
            }
        },
        copy: {
            main: {
                expand : true,
                cwd: 'webpage/',
                src: '*.png',
                dest: 'target',
                filter : 'isFile'
            },
            img : {
                expand :true,
                cwd : 'webpage/src/',
                src : '**/img/**',
                dest : 'target/src/'
            }
        },
	exec: {
            phantomjs:'phantomjs lib/run_jasmine_test.coffee webpage/tests/runner.html'
        }
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-exec');
    
    grunt.registerTask('default',['exec','jshint','clean','uglify','cssmin:minify','htmlmin','copy']);
};