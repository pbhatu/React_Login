var React=require('react');
var ReactDOM=require('react-dom');
var {Route,Router,IndexRoute,hashHistory} = require('react-router');
var Main = require('../app/components/Main');
var Weather = require('../app/components/Weather');
var About = require('../app/components/About');
var Examples = require('../app/components/Examples');
var Login = require('../app/components/Login');


require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');



$(document).foundation();
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="login" component={Login}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
