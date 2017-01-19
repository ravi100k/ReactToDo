var React = require('react');

var TodoAdd = React.createClass({

  handleSubmit: function(e){
    e.preventDefault();
    var todotext= this.refs.todotext.value;
    if(todotext.length>0){
      this.refs.todotext.value='';
      this.props.onAddTodo(todotext);
    }
    else
    {
      this.refs.todotext.focus();
    }
  },
  render : function(){
    return(
      <div className="container__footer">
        <form onSubmit={this.handleSubmit} >
          <input type='text' placeholder="Add Todo..." ref='todotext'/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});
module.exports= TodoAdd;
