var React = require('react');
var ProfileBlock = require('./profile');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      loaderLoadClass: ''
    }
  },

  render: function(){
      return (
        <div className="widget-wrap">
          <div className="widget-header"></div>
          <div className="widget-body">
            <div className="row">
              <div className="col-sm-4">
                <ProfileBlock userData={this.props.userData} changeTab={this.handleTabChange} />
              </div>
              <div className="col-sm-4 widget-section">

              </div>
              <div className="col-sm-4 widget-section">
                3
              </div>
            </div>
          </div>
        </div>
      );
  },
  handleTabChange: function(type){
    console.log('tab changed - '+type);
    return
  }

});
