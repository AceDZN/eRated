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
          <div className="">
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
    for(var i=0;i<3;i++){
      if(this.props.reputation[i]){
        var rep_provider = this.props.reputation[i];
        var header = (
          <li className={"col-xs-4 text-center "+ (this.props.activeTab == rep_provider.name ? 'active':'')} key={rep_provider.name+"_head_key"} onClick={this.handleTabChange.bind(this,rep_provider)}>
            <SVGLoader width="80%" height="100%" svg={rep_provider.name+(this.props.activeTab==rep_provider.name ? 'Active':'')} key={this.props.type+'_key_svg'} fill="#d0d0d0" />
          </li>
        );
        var content = <Tab className="content" name={this.props.userName} activeTab={this.props.activeTab} provider={rep_provider} key={rep_provider.name+"_content_key"} />;
        tabsHeader.push(header);
        tabsContent.push(content);
      } else {
        var header = (
          <li className="col-xs-4 text-center " key={i+"_empty_head_key"}></li>
        );
        tabsHeader.push(header);
      }
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
