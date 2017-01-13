var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var mui= require('material-ui');
var TodoApp = require('TodoApp');
//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//app css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <div>
    <h1>React Todo App</h1>
    <TodoApp/>

</div>,
  document.getElementById('app')
);
