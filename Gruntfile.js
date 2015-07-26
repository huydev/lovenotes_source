//Wrapper函数
module.exports = function(grunt) {
	
	// 加载任务
	require('load-grunt-tasks')(grunt);
	
	var path = {
		src : 'test',
		dest : 'dist',
		tmp : '.tmp'
	}

	// 配置项目
	grunt.initConfig({
		// 配置任务

		path : path,

		//clean 配置
		clean : ['<%= path.dest %>', '<%= path.tmp %>'],

		//copy 配置
		copy : {
			build : {
				files : [
					{
						expand : true,
						cwd : '<%= path.src %>',
						src : ['index.html'],
						dest : '<%= path.dest %>'
					},
					{
						expand : true,
						cwd : '<%= path.src %>',
						src : ['assets/**'],
						dest : '<%= path.dest %>'
					},
					{
						expand : true,
						cwd : '<%= path.src %>',
						src : ['img/**'],
						dest : '<%= path.dest %>'
					}
				]
			}
		},

		//usemin 配置
		useminPrepare: {
		    html : '<%= path.src %>/index.html',
		    options: {
		    	dest: '<%= path.dest %>'
		    }
	    },
	    usemin : {
	    	html : '<%= path.dest %>/index.html'
	    },

	    //htmlmin 配置
	    htmlmin : {
	    	options : {
	    		removeComments : true,
	    		collapseWhitespace : true,
	    		conservativeCollapse :true,
	    		minifyJS : true
	    	},
	    	build : {
	    		src : '<%= path.dest %>/index.html',
	    		dest : '<%= path.dest %>/index.html'
	    	}
	    }
	});

	// 默认任务.
	grunt.registerTask('default', 'Log some stuff.', function(){
		grunt.log.write('Logging some stuff ...').ok();
	});

	grunt.registerTask('build', [
		'clean',
		'copy',
		'useminPrepare',
		'concat:generated',
		'cssmin:generated',
		'uglify:generated',
		'usemin',
		'htmlmin'
	]);
};