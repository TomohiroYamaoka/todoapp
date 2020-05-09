import React from 'react';
import Add from './Components/Add';
import List from './Components/List';
import './App.css'
 
 
class App extends React.Component {
 
  constructor() {
    super();
    this.state = {
      todolist: [],//初回は空白にしておく。
    }
  }
 
  //eでinputで受け取ったvalueを受け取る。
  handleSubmit(e) {
    e.preventDefault();//preventDefault初回、画面が更新されないようにする。
    
    //Addで受け取った[e]を。
    //e.target.〇〇(属性).valueで〇〇の中身を取り出す。
    const title = e.target.title.value;
    const content = e.target.content.value;
    const todolist = this.state.todolist.slice();//定義したthis.stateのtodolistを新しい配列として

    //todolistにプッシュをする。
    todolist.push({
      title: title,
      content: content,
      done: false,
    });

    //新しいtodolistを更新させる。
    this.setState({ todolist });
 
    e.target.title.value = '';
    e.target.content.value = '';
  }
 


  setTodoStatus(clickTodo) {
    const todolist = this.state.todolist.slice();
    const todo = todolist[clickTodo.index];
    todo.done = !todo.done;
    todolist[clickTodo] = todo;
 
    this.setState({ todolist });
  }
 
  deleteTodoState(clickTodo) {
    const todolist = this.state.todolist.slice();
    todolist.splice(clickTodo.index, 1);
    this.setState({ todolist });
  }
 
  render() {
    let undoneNum = 0;
 
    this.state.todolist.forEach((todo) => {
      if (todo.done === false) {
        undoneNum++;
      }
    });
 
    return (
       
<div className="app" class="app-area">
         
<h1 class="title">TodoList</h1>
 
        <Add onSubmit={this.handleSubmit.bind(this)} />
        {/*Listで定義した関数を*/}
        <List todolist={this.state.todolist}
        　　　 setTodoStatus={this.setTodoStatus.bind(this)} 
              deleteTodoState={this.deleteTodoState.bind(this)} />
      </div>
 
    );
  }
}
 
export default App;


//Add.jsで作成した入力フォームを表示させる
//「投稿」ボタンを押すとAdd.jsのonSubmitが起動する。
//App.jsで起動したものは、App.jsでの[this.handlsesubmit]が起動するようになる。
//Add.jsで書いたinput部分で入力されたvalueを
//App.jsに常時されているボタンを押す
//e.target.〇〇(属性).valueで〇〇の中身を取り出す。
//App.jsのtodolistを更新させる。
//App.jsでListを表示させる。
//