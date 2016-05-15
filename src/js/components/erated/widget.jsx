var React = require('react');

var Reflux = require('reflux');
var MerchantStore = require('../../stores/merchant-store');
var ProfileBlock = require('./profile');
var ReviewTabs = require('./reviewTabs/tabs');

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(MerchantStore,'onChange')
  ],
  getInitialState: function(){
    var active ='';
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
            <div className="">
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
        <ReviewTabs reputation={this.props.userData.relevant_reputation} activeTab={this.state.activeTab} changeTab={this.handleTabChange}  />
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
  handleTabChange: function(tabContent){
    console.log('tab:',tabContent);
    this.setState({
      activeTab:tabContent.name
    });
    return
  },
  onChange: function(event,data){
    if(data.relevant_reputation){
      this.setState({
        activeTab: data.relevant_reputation[0].name
      });
    }
  }
});
