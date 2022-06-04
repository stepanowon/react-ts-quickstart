import loki from "lokijs";
import shortid from "shortid";

let todolist;
let id = new Date().getTime();

// let databaseInitialize= () => {
//     todolist = db.getCollection("todolist");
//     if (todolist === null) {
//         todolist = db.addCollection('todolist', { indices: ['owner','no'] });
//         //샘플 데이터
//         todolist.insert( { owner:'gdhong', no:123456789, todo:"ES6 공부", desc:"ES6공부를 해야 합니다", done:true });
//         todolist.insert( { owner:'gdhong', no:no++, todo:"Vue 학습", desc:"Vue 학습을 해야 합니다", done:false });
//         todolist.insert( { owner:'gdhong', no:no++, todo:"놀기", desc:"노는 것도 중요합니다.", done:true });
//         todolist.insert( { owner:'gdhong', no:no++, todo:"야구장", desc:"프로야구 경기도 봐야합니다.", done:false });

//         todolist.insert( { owner:'mrlee', no:no++, todo:"남원구경", desc:"고향집에 가봐야합니다.", done:true });
//         todolist.insert( { owner:'mrlee', no:no++, todo:"저녁약속(10.11)", desc:"지인과의 중요한 저녁 약속입니다.", done:false });
//         todolist.insert( { owner:'mrlee', no:no++, todo:"AWS 밋업", desc:"AWS 밋업에 반드시 참석해야 합니다.", done:false });
//         todolist.insert( { owner:'mrlee', no:no++, todo:"AAI 모임", desc:"공인강사들 모임이 있습니다.", done:true });
//     }
// }

// var db = new loki('sample.db', {
// 	autoload: true,
// 	autoloadCallback : databaseInitialize,
// 	autosave: true,
// 	autosaveInterval: 60000
// });

let db = new loki();
todolist = db.getCollection("todolist");
if (todolist === null) {
  todolist = db.addCollection("todolist", { indices: ["owner", "id"] });
}
todolist.insert({ owner: "gdhong", id: 123456789, todo: "ES6 공부", desc: "ES6공부를 해야 합니다", done: true });
todolist.insert({ owner: "gdhong", id: ++id, todo: "Vue 학습", desc: "Vue 학습을 해야 합니다", done: false });
todolist.insert({ owner: "gdhong", id: ++id, todo: "놀기", desc: "노는 것도 중요합니다.", done: true });
todolist.insert({ owner: "gdhong", id: ++id, todo: "야구장", desc: "프로야구 경기도 봐야합니다.", done: false });

todolist.insert({ owner: "mrlee", id: ++id, todo: "남원구경", desc: "고향집에 가봐야합니다.", done: true });
todolist.insert({ owner: "mrlee", id: ++id, todo: "저녁약속(10.11)", desc: "지인과의 중요한 저녁 약속입니다.", done: false });
todolist.insert({ owner: "mrlee", id: ++id, todo: "AWS 밋업", desc: "AWS 밋업에 반드시 참석해야 합니다.", done: false });
todolist.insert({ owner: "mrlee", id: ++id, todo: "AAI 모임", desc: "공인강사들 모임이 있습니다.", done: true });

export const createNewOwner = ({ owner }) => {
  try {
    let queryResult = todolist.find({ owner });
    let id = new Date().getTime();
    if (queryResult.length === 0) {
      todolist.insert({ owner, id: id, todo: "ES6 공부", desc: "ES6공부를 해야 합니다", done: true });
      todolist.insert({ owner, id: ++id, todo: "Vue 학습", desc: "React 학습을 해야 합니다", done: false });
      todolist.insert({ owner, id: ++id, todo: "야구장", desc: "프로야구 경기도 봐야합니다.", done: false });
      return { status: "success", message: "샘플 데이터 생성 성공!" };
    } else {
      return { status: "fail", message: "생성 실패 : 이미 존재하는 owner입니다." };
    }
  } catch (ex) {
    return { status: "fail", message: "생성 실패 : " + ex };
  }
};

export const getTodoList = ({ owner }) => {
  try {
    let result = [];
    let queryResult = todolist.chain().find({ owner }).simplesort("id").data();

    for (var i = 0; i < queryResult.length; i++) {
      let item = { ...queryResult[i] };
      delete item.meta;
      delete item["$loki"];
      delete item.owner;
      result.push(item);
    }
    return result;
  } catch (ex) {
    return { status: "fail", message: "조회 실패 : " + ex };
  }
};

export const getTodoItem = ({ owner, id }) => {
  try {
    id = parseInt(id, 10);
    let one = todolist.findOne({ owner, id });
    let item = { ...one };
    delete item.meta;
    delete item["$loki"];
    delete item.owner;
    return item;
  } catch (ex) {
    return { status: "fail", message: "조회 실패 : " + ex };
  }
};

export const addTodo = ({ owner, todo, desc }) => {
  try {
    if (todo === null || todo.trim() === "") {
      throw new Error("할일을 입력하셔야 합니다.");
    }
    let item = { owner: owner, id: new Date().getTime(), todo: todo, desc: desc, done: false };
    todolist.insert(item);
    return { status: "success", message: "추가 성공", item: { id: item.id, todo: item.todo, desc: item.desc } };
  } catch (ex) {
    return { status: "fail", message: "추가 실패 : " + ex };
  }
};

export const deleteTodo = ({ owner, id }) => {
  try {
    id = parseInt(id, 10);
    let one = todolist.findOne({ owner, id });
    if (one !== null) {
      todolist.remove(one);
      return { status: "success", message: "삭제 성공", item: { id: one.id, todo: one.todo } };
    } else {
      return { status: "fail", message: "삭제 실패 : 삭제하려는 데이터가 존재하지 않음" };
    }
  } catch (ex) {
    return { status: "fail", message: "삭제 실패 : " + ex };
  }
};

export const updateTodo = ({ owner, id, todo, desc, done }) => {
  try {
    id = parseInt(id, 10);
    let one = todolist.findOne({ owner, id });
    if (one !== null) {
      one.done = done;
      one.todo = todo;
      one.desc = desc;
      todolist.update(one);
      return { status: "success", message: "할일 변경 성공", item: { id: one.id, todo: one.todo, desc: one.desc, done: one.done } };
    } else {
      return { status: "fail", message: "할일 변경 실패 : 변경하려는 데이터가 존재하지 않음" };
    }
  } catch (ex) {
    return { status: "fail", message: "할일 변경 실패 : " + ex };
  }
};

export const toggleDone = ({ owner, id }) => {
  try {
    id = parseInt(id, 10);
    let one = todolist.findOne({ owner, id });
    if (one !== null) {
      one.done = !one.done;
      todolist.update(one);
      return { status: "success", message: "완료 변경 성공", item: { id: one.id, todo: one.todo, done: one.done } };
    } else {
      return { status: "fail", message: "완료 변경 실패 : 변경하려는 데이터가 존재하지 않음" };
    }
  } catch (ex) {
    return { status: "fail", message: "완료 변경 실패 : " + ex };
  }
};
