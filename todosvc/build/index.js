"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import cors from 'cors';
// import rfs from 'rotating-file-stream';
var app = (0, _express["default"])(); //app.use(cors());

app.use(function (req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
}); //-- 로깅

var baseDir = _path["default"].resolve('.'); // const logDirectory = path.join(baseDir, '/log')
// fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
// var accessLogStream = rfs('access.log', {
//   interval: '1d', // 매일 매일 로그 파일 생성
//   path: logDirectory
// })
// app.use(morgan('combined', {stream: accessLogStream}))


app.set('port', process.env.PORT || 8000);
app.use(_express["default"]["static"](baseDir + '/public'));
app.set('views', baseDir + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(function (req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
});
(0, _routes["default"])(app);
var server = app.listen(app.get('port'), function () {
  console.log("할일 목록 서비스가 " + app.get('port') + "번 포트에서 시작되었습니다!");
});