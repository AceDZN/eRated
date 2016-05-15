var React = require('react');
var Tab = require('./singleTab');
var Loader = require('../../loader');
var SVGLoader = require('../../svgLoader');
module.exports = React.createClass({
  getInitialState: function(){
    return ({
      activeTab: this.props.activeTab
    })
  },
  render: function(){
    if(this.props.reputation){
      return (
          <div className="review-tabs">
            {this.renderReviewTabs()}
          </div>
      )
    } else {
      return(
        <Loader className="inner" loaded={false} />
      )
    }
  },
  renderReviewTabs: function(){

    var tabsHeader = []; var tabsContent = [];
    for(var i=0;i<this.props.reputation.length;i++){
      var rep_provider = this.props.reputation[i];
      var header = (
        <li className={"col-xs-4 text-center "+ (this.props.activeTab == rep_provider.name ? 'active':'')} key={rep_provider.name+"_head_key"} onClick={this.handleTabChange.bind(this,rep_provider)}>
          <SVGLoader width="80%" height="100%" svg={rep_provider.name+(this.props.activeTab==rep_provider.name ? 'Active':'')} key={this.props.type+'_key_svg'} fill="#d0d0d0" />
        </li>
      );
      var content = <Tab className="content" activeTab={this.props.activeTab} provider={rep_provider} key={rep_provider.name+"_content_key"} />;
      tabsHeader.push(header);
      tabsContent.push(content);
    }
    return (
      <div>
        <ul className="tabs-header">
          {tabsHeader}
        </ul>
        <div className="tabs-content">
          {tabsContent}
        </div>
      </div>
    )
  },
  handleTabChange: function(type){
    this.props.changeTab(type);
  }
});
