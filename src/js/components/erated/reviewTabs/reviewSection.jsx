var React = require('react');
var ReviewsPager = require('./reviewsPager');
var Loader = require('../../loader');

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
            {this.renderReviewSection()}
          </div>
      )
    } else {
      return(
        <Loader className="inner" loaded={false} />
      )
    }
  },
  renderReviewSection: function(){
    var reviewSectionContent = [];
    for(var i=0;i<this.props.reputation.length;i++){
      var rep_provider = this.props.reputation[i];
      var content = <ReviewsPager className="content bigger" name={this.props.userName} activeTab={this.props.activeTab} provider={rep_provider} key={rep_provider.name+"_content_key"} />;
      reviewSectionContent.push(content);
    }
    return (
      <div>
        <div className="tabs-content">
          {reviewSectionContent}
        </div>
      </div>
    )
  },
  handleTabChange: function(type){
    this.props.changeTab(type);
  }
});
