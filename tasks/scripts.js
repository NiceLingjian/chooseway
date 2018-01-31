import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named';
import livereload from 'gulp-livereload';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import {log,colors} from 'gulp-util';
import args from './util/args';
import config from './util/config';
let out;
!args.out? out = config.jsremote : out = config.jsoutremote;
gulp.task('scripts',()=>{
  return gulp.src(['app/js/pages/**/*.js'])
    .pipe(plumber({
      errorHandle:function(){

      }
    }))
    .pipe(named())
    .pipe(gulpWebpack({
      module:{
        loaders:[{
          test:/\.js$/,
          loader:'babel'
        },
        {
          test: require.resolve('zepto'),
          loader: 'exports-loader?window.Zepto!script-loader'
        },
        {
          test: /\.less$/, 
          loaders: ['style', 'css', 'less']}
        ]
      }
    }),null,(err,stats)=>{
      log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
        chunks:false
      }))
    })
    .pipe(gulp.dest(out))
    .pipe(rename({
      extname:'.min.js'
    }))
    .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
    .pipe(gulp.dest(out))
    .pipe(gulpif(args.watch,livereload()))  
})
