var React = require('react');
require('style-loader!css-loader!../Styles/app.css');
var axios= require('axios');
var LoginForm = React.createClass({
  getInitialState () {
    return {
      mode:0
    };
  },

   onFormSubmit: function(e){
     e.preventDefault();
     var u=this.refs.uname.value;
     var p=this.refs.pass.value;
     let encodedCreds = btoa(`${u}:${p}`);
     alert(encodedCreds);
     var options= {
     'Accept' : 'application/json',
     'Content-Type': 'application/json',
     'Authorization': `Basic ${encodedCreds}`,
     'X-Procurement': true,
     'SECRET-TOKEN': '362ca5f6f3a63640747770c5f4df228d966d7dac3b14a14018d3b8aabdb00f76ffb61fd1fbd58e8f00c613acbd7e077f050a9295cbaba45fb749533497a067f9'
   }
   var data = {
     headers:options
   }
   axios.post('http://indopus.in/api/admin/auth',{},data)
     .then(function (response) {
       console.log('response of login call',response);
       //JSON.stringify(data);
       this.setState({mode:1})
       console.log(response.data.auth_token);
     })
     .catch(function (error) {
       console.log('error of login call',error);
       console.log("hdghsd");
     });
    },


    render : function() {
      if(this.state.mode=1){
        return(
          <h1> Hey</h1>
        );
      }
    return (
      <div >

        <form onSubmit={this.onFormSubmit}>
          <div className="container">
            <label><b>UserName</b></label>
            <input type="text" placeholder="Enter Username" ref="uname" required/>
            <label><b>Password</b></label>
            <input type="password" placeholder="Enter Password" ref="pass"/>
            <button className="button expanded hollow" type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }
});
module.exports = LoginForm;
/*let encodedCreds = btoa(`${email}:${password}`);
{
'Accept': 'application/json',
'Content-Type': 'application/json',
'Authorization': `Basic ${encodedCreds}`,
'X-Procurement': true,
'SECRET-TOKEN': '362ca5f6f3a63640747770c5f4df228d966d7dac3b14a14018d3b8aabdb00f76ffb61fd1fbd58e8f00c613acbd7e077f050a9295cbaba45fb749533497a067f9'
};*/
