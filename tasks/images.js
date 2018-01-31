import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';
import cache from 'gulp-cache'
import imagemin from 'gulp-imagemin';
import config from './util/config';
let out;
!args.out? out = config.imagesremote : out = config.imagesoutremote;
gulp.task('images', ()=>{
	return gulp.src('app/images/**/*')
    .pipe(imagemin(cache({
        optimizationLevel: 3,
        progressive: true,
        interlaced: true
    })))
	.pipe(gulp.dest(out))
});