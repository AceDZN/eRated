var React = require('react');
var ProfileBlock = require('./profile');
var ReviewTabs = require('./reviewTabs/tabs');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      loaderLoadClass: '',
      activeSection: 'rep',
      activeTab:''
    }
  },

  render: function(){
      return (
        <div className="widget-wrap">
          <div className="widget-header"></div>
          <div className="widget-body">
            <div className="row">
              <div className="col-sm-4">
                <ProfileBlock userData={this.props.userData} changeSection={this.handleSectionChange} />
              </div>
              <div className="col-sm-4 widget-section">
                {this.renderMiddleSection()}
              </div>
              <div className="col-sm-4 widget-section">
                {this.renderRightSection()}
              </div>
            </div>
          </div>
        </div>
      );
  },
  renderMiddleSection: function(){
    if(this.state.activeSection == 'rep'){
      return (
        <ReviewTabs activeTab={this.state.activeTab} userData={this.props.userData}  />
      )
    }

  },
  renderRightSection: function(){
    if(this.state.activeSection == 'rep'){
      return (
        <div>RIGHT</div>
      )
    }
  },
  handleSectionChange: function(type){
    this.setState({
      activeSection:type
    });
    return
  },
  handleTabChange: function(tab){
    this.setState({
      activeTab:tab
    });
    return
  }

});
