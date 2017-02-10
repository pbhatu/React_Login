var React = require('react');
var Nav = require('./Nav.jsx');
var Main = React.createClass({
  render: function() {
    return (
      <div>

        <div className="row">
          <div className="colums medium-10 large-4 small-centered">
          
            {this.props.children}

          </div>
        </div>

      </div>
    );
  }
});
module.exports = Main;
