var React = require('react');
var Tab = require('./singleTab');
var Loader = require('../../loader');
module.exports = React.createClass({
  render: function(){
    if(this.props.userData && this.props.userData.relevant_reputation){
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
    for(var i=0;i<this.props.userData.relevant_reputation.length;i++){
      var rep_provider = this.props.userData.relevant_reputation[i];
      var header = <div key={rep_provider.name+"_head_key"}>{rep_provider.name}</div>;
      var content = <div key={rep_provider.name+"_content_key"}>CONTENT</div>;
      tabsHeader.push(header);
      tabsContent.push(content);
    }
    return (
      <div>
        {tabsHeader}
        {tabsContent}
      </div>
    )
  },
  handleTabChange: function(type){
    this.props.changeTab(type);
  }
});
