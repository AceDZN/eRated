var React = require('react');
var Tab = require('./singleTab');
var Loader = require('../../loader');
module.exports = React.createClass({

  render: function(){
    if(this.props.userData && this.props.userData.social_information){
      return (
          <div className="social-tabs">
            {this.renderSocialTabs()}
          </div>
      )
    }
    return
  },
  renderSocialTabs: function(){
    if(this.props.userData.social_information){
      return(
        <div className="tabs-wrap">
            <Tab {...this.props} changeSection={this.handleTabChange} type="facebook"  />
            <Tab {...this.props} changeSection={this.handleTabChange} type="linkedin" className="middle-tab" />
            <Tab {...this.props} changeSection={this.handleTabChange} type="twitter" />
          <div className="clear"></div>
        </div>
      )
    } else {
      return(
        <Loader className="inner" loaded={false} />
      )
    }
  },
  handleTabChange: function(type){
    this.props.changeSection(type);
  }
});
