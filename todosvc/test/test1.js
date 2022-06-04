import loki from  'lokijs'
import shortid from 'shortid';
import sleep from 'system-sleep';

let todolist;

let databaseInitialize= () => {
    todolist = db.getCollection("todos");
    if (todolist === null) {
        todolist = db.addCollection('todos', { indices: ['owner','id'] });
        todolist.insert( { owner:'gdhong', no:no++, todo:"ES6 공부", done:false });
        todolist.insert( { owner:'gdhong', no:no++, todo:"Vue 학습", done:false });
        todolist.insert( { owner:'gdhong', no:no++, todo:"놀기", done:false });
        todolist.insert( { owner:'gdhong', no:no++, todo:"야구장", done:false });
    
        todolist.insert( { owner:'mrlee', no:no++, todo:"남원구경", done:false });
        todolist.insert( { owner:'mrlee', no:no++, todo:"asdf", done:false });
        todolist.insert( { owner:'mrlee', no:no++, todo:"ghjk", done:false });
        todolist.insert( { owner:'mrlee', no:no++, todo:"zxcv", done:false });
    }
}

var db = new loki('sample.db', {
	autoload: true,
	autoloadCallback : databaseInitialize,
	autosave: true, 
	autosaveInterval: 4000
});

sleep(1000); 

var todosCount = db.getCollection("todos").count();
console.log("number of todos in database : " + todosCount);

db.saveDatabase();
let owner = "gdhong";
let id = "2";
let one = todos.findOne({ owner, id });
console.log(one);
if (one !== null) todos.remove(one);

var result = todos.find();
for (var i=0; i < result.length; i++) {
    delete result[i].meta;
    delete result[i]['$loki'];
} 
console.log(result);


