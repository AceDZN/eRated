var React = require('react');
var Tab = require('./singleTab');
module.exports = React.createClass({
  getInitialState: function(){
    return{
      activeTab:''
    }
  },
  render: function(){
    if(this.props.userData && this.props.userData.social_information){
      return (
          <div className="social-tabs">
            {this.renderSocialTabs()}
          </div>
      )
    } else {
      return(
        <Loader loaded={false} />
      )
    }
  },
  renderSocialTabs: function(){
    if(this.props.userData.social_information){
      return(
        <div className="tabs-wrap">
            <Tab {...this.props} activeTab={this.state.activeTab} changeTab={this.handleTabChange} type="facebook"  />
            <Tab {...this.props} activeTab={this.state.activeTab} changeTab={this.handleTabChange} type="linkedin" className="middle-tab" />
            <Tab {...this.props} activeTab={this.state.activeTab} changeTab={this.handleTabChange} type="twitter" />
          <div className="clear"></div>
        </div>
      )
    }
  },
  handleTabChange: function(type){
    this.setState({
      activeTab:type
    },this.props.changeTab(type));

  }
});
