//reactライブラリがつけるようにするためのもの。ここでcssをインポートす
import React, { Component } from 'react';


 
class Add extends Component {
 
  render() {
    return (
       
<div className="form">
         
<form name="todoform" onSubmit={this.props.onSubmit}>
           
<div class="todo">
             
<div class="input-area">
               
<div class="button-area">
                <button type="submit" class="form-button">作成</button>
                <button type="reset" class="form-button">キャンセル</button>
              </div>
 
              <label>件名</label>
              <input name="title" type="text" class="title-text"/>
              <label>内容</label>
              <textarea name="content" class="content-text" rows="4" ></textarea>
            </div>
 
          </div>
 
        </form>
 
      </div>
 
    );
  }
};
 
export default Add;
