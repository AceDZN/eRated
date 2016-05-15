var React = require('react');
var Reflux = require('reflux');
var MerchantStore = require('../stores/merchant-store');
var Actions = require('../actions');

var Loader = require('./loader');

var Widget = require('./erated/widget');

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(MerchantStore,'onChange')
  ],
  getInitialState : function(){
    return {
      loaded: false,
      userData: []
    }
  },
  componentWillMount: function(){
    Actions.getMerchantData();
  },
  render: function() {
    return <div>
      <Loader loaded={this.state.loaded} />
      <Widget userData={this.state.userData} />
    </div>
  },
  setLoadClass: function(){
    if(this.state.userData && Object.keys(this.state.userData).length === 0){
      return
    } else {
      this.setState({
        loaded: true
      })
    }
    return
  },
  onChange: function(event,data){
    this.setState({
      userData: data
    },function(){
      this.setLoadClass();
    });

  }
});
