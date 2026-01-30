import storage  from './../scripts/storage';

export const sampleTodoListData = [
  { id: 'todo_id-1', title: 'Hello World!', completed: false },
  { id: 'todo_id-2', title: 'Get some water!', completed: false },
  { id: 'todo_id-3', title: 'Eat some donuts', completed: false },
  { id: 'todo_id-4', title: 'Delete some files.asd asd sad sad adadasd asd sa das das dasd asd', completed: false },
  { id: 'todo_id-5', title: 'To Do 2', completed: true },
];

// console.log(storage.getAll());
// console.log(storage.getLength());
// console.log(storage.getAllActive());
// console.log(storage.getAllCompleted());

const Todo = {
  // addTodo : storage.addTodo,
  storage: storage
};

export default Todo;
