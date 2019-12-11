// let userData = {
//   user: 'Mohammed',
//   items: [{action: 'Buy flowers', done: false},
//     {action: 'Get shoes', done: false},
//     {action: 'Collect tickets', done: true},
//     {action: 'Call Joe', done: false}]
// };

export class Model {
  user;
  items;

  constructor() {
    this.user = 'Mohammed';
    this.items = [
      new TodoItem('Buy flowers', false),
      new TodoItem('Get shoes', false),
      new TodoItem('Collect tickets', true),
      new TodoItem('Call Joe', false)];
  }
}

export class TodoItem {
  action;
  done;

  constructor(action, done) {
    this.action = action;
    this.done = done;
  }
}
