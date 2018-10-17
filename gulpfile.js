var gulp = require('gulp'),  //引入gulp 
    rev = require('gulp-rev'), //生成版本号
    revCollector = require('gulp-rev-collector'), //替换版本号
    clean = require('gulp-clean'),
    runSequence=require('gulp-sequence'); //清空文件夹
    
    var revConfig=require('./revConfig');
    
//css文件生成版本号，并将所有的带版本号的文件名统一放入json文件中。
gulp.task('rev',function(){  //gulp.task--定义一个gulp任务；revCSS--定义该任务的名称，起任何名称都可以
	//console.log(1);
   	return gulp.src(revConfig.src)
	.pipe(rev())
	.pipe(rev.manifest())
	.pipe(gulp.dest(revConfig.dest))
})

gulp.task('revProduct',function(){   
	//console.log(2);
    return gulp.src([revConfig.revJson,revConfig.HTMLSrc])
    .pipe(revCollector())
    .pipe(gulp.dest(revConfig.dest)) //html更换css,js文件版本，更改完成之后保存的地址
})

gulp.task('revClean',function(){
	//console.log(3);
	return gulp.src(revConfig.HTMLDest)
    .pipe(clean())//html更换css,js文件版本，更改完成之后保存的地址
   })

//gulp.task('default',['revClean','rev','revProduct'])
gulp.task('default',runSequence('revClean','rev','revProduct'))
