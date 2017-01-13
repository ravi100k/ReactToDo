var React = require('react');
var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');
//import FlatButton from 'material-ui/FlatButton';
var TodoApp = React.createClass({
  getInitialState: function () {
    return{
      showCompleted:false,
      searchText: '',
      todos:[
        {
          id: uuid(),
          text: "walk the dog"
        },
        {
          id: uuid(),
          text:"clean the yard"
        }
      ]
    };
  },
  handleTodoAdd: function(text){
    this.setState({
        todos:[
          ...this.state.todos,
          {
            id: uuid(),
            text:text
          }
        ]
    });
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
