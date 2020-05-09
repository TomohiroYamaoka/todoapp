import React, { Component } from 'react';


class Todo extends Component {
 
  render() {
      //clssNameはdoneのtrue/falseに合わせて切り替わるように、三項演算子で
    const className = this.props.done? 'done' : 'undone';
    const status = this.props.done? 'まだそのまま' : '完了';
    const todoDelete = this.props.done? '削除する' : '';
    

    return(
    <div className={className} class="">
        
        <div class="Todo">
            <div class="status">
                {/*アロー関数で、onClick時に、setTodoStatusが発火するようにする。*/}
                {/**/}
                <a href="" onClick={(e) => { e.preventDefault(); this.props.setTodoStatus(this.props)}}>{status}にする</a>　　
                <a href="" onClick={(e) => { e.preventDefault(); this.props.deleteTodoState(this.props)}}>{todoDelete}</a>
                </div>
                <table>
                    <tr>
                        <th>件名：</th>
                        <td>{this.props.title}</td>
                    </tr>
                    <tr>
                        <th>内容：</th>
                        <td>{this.props.content}</td>
                    </tr>
                </table>
            </div>
        </div>
 
    );
  }
 
};

export default Todo;
