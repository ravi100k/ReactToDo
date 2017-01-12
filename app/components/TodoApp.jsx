var React = require('react');
var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');
var TodoSearch = require('TodoSearch');
//import FlatButton from 'material-ui/FlatButton';
var TodoApp = React.createClass({
  getInitialState: function () {
    return{
      showCompleted:false,
      searchText: '',
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
  handleSearch: function(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
render: function(){
  var {todos} =  this.state;
  return(
    <div>
      <TodoSearch onSearch={this.handleSearch}/>
      <TodoList todos={todos}/>
      <TodoAdd onAddTodo={this.handleTodoAdd}/>
    </div>
  );
}
});
module.exports= TodoApp;
