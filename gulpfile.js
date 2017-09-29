var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')

// 第三方库文件
var thirdFiles = [
  'lib/jquery.js',
  'lib/cornerstone.js',
  'lib/cornerstoneMath.js',
  'lib/cornerstoneTools.js',
  'lib/dicomParser.js',
  'lib/cornerstoneWADOImageLoader.js',
  'lib/marchingSquares.js',
  'lib/jquery.awesome-cursor.js'
]

// 压缩合并第三方库文件，并输出到dist/static目录中
gulp.task('third', function (done) {
  return gulp.src(thirdFiles).pipe(concat('thirds.min.js')).pipe(uglify()).pipe(gulp.dest('./static'))
  // return gulp.src(thirdFiles).pipe(concat('thirds.min.js')).pipe(gulp.dest('./static'))
})
