var React = require('react');
var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');
//import FlatButton from 'material-ui/FlatButton';
var TodoApp = React.createClass({
  getInitialState: function () {
    return{
      todos:[
        {
          id:1,
          text: "walk the dog"
        },
        {
          id:2,
          text:"clean the yard"
        }
      ]
    };
  },
  handleTodoAdd: function(text){
    alert('new todo '+ text);
  },
render: function(){
  var {todos} =  this.state;
  return(
    <div>
      <TodoList todos={todos}/>
      <TodoAdd onAddTodo={this.handleTodoAdd}/>
    </div>
  );
}
});
module.exports= TodoApp;
