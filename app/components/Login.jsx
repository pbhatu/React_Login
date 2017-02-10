var React = require('react');
var LoginForm = require('./LoginForm.jsx');
var Login = React.createClass({
  getInitialState () {
    return {
      mode:0
    };
  },

  render : function(){
    return(
   <div>
     <h2 className="text-center page-title">Login Component</h2>
    <LoginForm/>
   </div>
  );
  }
});
module.exports = Login;
