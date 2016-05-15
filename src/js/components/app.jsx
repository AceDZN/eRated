var React = require('react');
var Loader = require('./loader');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      loaded: false
    }
  },
  render: function() {
    return <div>
      <Loader loaded={this.state.loaded} />
      APP
    </div>
  }
});
