import express from 'express';
import bodyParser from 'body-parser';
//import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import fs from 'fs';
// import rfs from 'rotating-file-stream';
import routes from './routes';

const app = express();

//app.use(cors());

app.use(function (req, res, next) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next()
});

//-- 로깅
var baseDir = path.resolve('.');

// const logDirectory = path.join(baseDir, '/log')
// fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
// var accessLogStream = rfs('access.log', {
//   interval: '1d', // 매일 매일 로그 파일 생성
//   path: logDirectory
// })
// app.use(morgan('combined', {stream: accessLogStream}))

app.set('port', (process.env.PORT || 8000));

app.use(express.static(baseDir + '/public'));
app.set('views', baseDir + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function (req, res, next) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next()
});

routes(app);

const server = app.listen(app.get('port'), function() {
    console.log("할일 목록 서비스가 " + app.get('port') + "번 포트에서 시작되었습니다!");
});
