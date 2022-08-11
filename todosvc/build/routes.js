"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _tododao = require("./tododao");

var _sleepPromise = _interopRequireDefault(require("sleep-promise"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(app) {
  app.get("/", function (req, res) {
    console.log("### GET /");
    res.render("index", {
      title: "todolist 서비스 v1.0",
      subtitle: "(node.js + express + lokijs)"
    });
  });
  app.get("/users/:id", function (req, res) {
    console.log("### GET /users/:id");
    var id = req.params.id;
    (0, _sleepPromise["default"])(3000).then(function () {
      res.json({
        id: id,
        userid: "gdhong",
        username: "홍길동"
      });
    });
  });
  app.get("/todolist/:owner/create", function (req, res) {
    console.log("### GET /todolist/:owner/create");
    var owner = req.params.owner;
    var result = (0, _tododao.createNewOwner)({
      owner: owner
    });
    res.json(result);
  });
  app.get("/todolist/:owner", function (req, res) {
    console.log("### GET /todolist/:owner");
    var owner = req.params.owner;
    var todolist = (0, _tododao.getTodoList)({
      owner: owner
    });
    res.json(todolist);
  });
  app.get("/todolist_long/:owner", function (req, res) {
    console.log("### GET /todolist_long/:owner");
    (0, _sleepPromise["default"])(1000).then(function () {
      var owner = req.params.owner;
      var todolist = (0, _tododao.getTodoList)({
        owner: owner
      });
      res.json(todolist);
    });
  });
  app.get("/todolist/:owner/:id", function (req, res) {
    console.log("### GET /todolist/:owner/:id");
    var _req$params = req.params,
        owner = _req$params.owner,
        id = _req$params.id;
    var todoitem = (0, _tododao.getTodoItem)({
      owner: owner,
      id: id
    });
    res.json(todoitem);
  });
  app.get("/todolist_long/:owner/:id", function (req, res) {
    console.log("### GET /todolist_long/:owner/:id");
    (0, _sleepPromise["default"])(1000).then(function () {
      var _req$params2 = req.params,
          owner = _req$params2.owner,
          id = _req$params2.id;
      var todoitem = (0, _tododao.getTodoItem)({
        owner: owner,
        id: id
      });
      res.json(todoitem);
    });
  });
  app.post("/todolist/:owner", function (req, res) {
    console.log("### POST /todolist/:owner");
    var owner = req.params.owner;
    var _req$body = req.body,
        todo = _req$body.todo,
        desc = _req$body.desc;
    var result = (0, _tododao.addTodo)({
      owner: owner,
      todo: todo,
      desc: desc
    });
    res.json(result);
  });
  app.post("/todolist_long/:owner", function (req, res) {
    console.log("### POST /todolist_long/:owner");
    (0, _sleepPromise["default"])(1000).then(function () {
      var owner = req.params.owner;
      var _req$body2 = req.body,
          todo = _req$body2.todo,
          desc = _req$body2.desc;
      var result = (0, _tododao.addTodo)({
        owner: owner,
        todo: todo,
        desc: desc
      });
      res.json(result);
    });
  });
  app.put("/todolist/:owner/:id", function (req, res) {
    console.log("### PUT /todolist/:owner/:id");
    var _req$params3 = req.params,
        owner = _req$params3.owner,
        id = _req$params3.id;
    var _req$body3 = req.body,
        todo = _req$body3.todo,
        done = _req$body3.done,
        desc = _req$body3.desc;
    var result = (0, _tododao.updateTodo)({
      owner: owner,
      id: id,
      todo: todo,
      done: done,
      desc: desc
    });
    res.json(result);
  });
  app.put("/todolist_long/:owner/:id", function (req, res) {
    console.log("### PUT /todolist_long/:owner/:id");
    (0, _sleepPromise["default"])(1000).then(function () {
      var _req$params4 = req.params,
          owner = _req$params4.owner,
          id = _req$params4.id;
      var _req$body4 = req.body,
          todo = _req$body4.todo,
          done = _req$body4.done,
          desc = _req$body4.desc;
      var result = (0, _tododao.updateTodo)({
        owner: owner,
        id: id,
        todo: todo,
        done: done,
        desc: desc
      });
      res.json(result);
    });
  });
  app.put("/todolist/:owner/:id/done", function (req, res) {
    console.log("### PUT /todolist/:owner/:nido/done");
    var _req$params5 = req.params,
        owner = _req$params5.owner,
        id = _req$params5.id;
    var result = (0, _tododao.toggleDone)({
      owner: owner,
      id: id
    });
    res.json(result);
  });
  app.put("/todolist_long/:owner/:id/done", function (req, res) {
    console.log("### PUT /todolist_long/:owner/:id/done");
    (0, _sleepPromise["default"])(1000).then(function () {
      var _req$params6 = req.params,
          owner = _req$params6.owner,
          id = _req$params6.id;
      var result = (0, _tododao.toggleDone)({
        owner: owner,
        id: id
      });
      res.json(result);
    });
  });
  app["delete"]("/todolist/:owner/:id", function (req, res) {
    console.log("### DELETE /todolist/:owner/:id");
    var _req$params7 = req.params,
        owner = _req$params7.owner,
        id = _req$params7.id;
    var result = (0, _tododao.deleteTodo)({
      owner: owner,
      id: id
    });
    res.json(result);
  });
  app["delete"]("/todolist_long/:owner/:id", function (req, res) {
    console.log("### DELETE /todolist_long/:owner/:id");
    (0, _sleepPromise["default"])(1000).then(function () {
      var _req$params8 = req.params,
          owner = _req$params8.owner,
          id = _req$params8.id;
      var result = (0, _tododao.deleteTodo)({
        owner: owner,
        id: id
      });
      res.json(result);
    });
  }); //----에러 처리 시작

  app.get("*", function (req, res, next) {
    var err = new Error();
    err.status = 404;
    next(err);
  });
  app.use(function (err, req, res, next) {
    console.log("### ERROR!!");

    if (err.status === 404) {
      res.status(404).json({
        status: 404,
        message: "잘못된 URI 요청"
      });
    } else if (err.status === 500) {
      res.status(500).json({
        status: 500,
        message: "내부 서버 오류"
      });
    } else {
      res.status(err.status).jsonp({
        status: "fail",
        message: err.message
      });
    }
  });
};

exports["default"] = _default;