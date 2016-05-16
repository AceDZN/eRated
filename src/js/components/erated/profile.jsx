var React = require('react');
var Loader = require('../loader');
var SocialTabs = require('./socialTabs/tabs');

module.exports = React.createClass({
  getInitialState: function(){
    return({
      activeTab:this.props.activeTab || ''
    })
  },
  render: function(){
    if(this.props.userData && this.props.userData.uid){
      return (
        <div className="profile-container">
          <div className="widget-section">
            <div className="profile-top">
                <div className="text-center profile-img">
                  {this.renderProfileImage()}
                </div>
                <div className="text-center profile-score">
                  {this.renderProfileRating()}
                </div>
                <div className="text-center profile-badge">
                  {this.renderProfileBadge()}
                </div>
                <div className="clear"></div>
            </div>
            <div className="profile-middle">
              {this.renderUserName()}
              {this.renderProfileRatingLine()}

            </div>
          </div>
          <SocialTabs {...this.props} activeTab={this.state.activeTab} changeSection={this.handleSectionSelect} />
        </div>
      )
    } else {
      return(
        <Loader loaded={false} />
      )
    }
  },
  renderUserName: function(){
    if(this.props.userData.display_name && this.props.userData.display_name != ''){
      return (
        <h3 className="profile-name">{this.props.userData.display_name}{this.renderRepLink()}</h3>
      )
    }
  },
  renderProfileImage: function(){
    if(this.props.userData.widget_settings.profile_image){
      return (
        <img src={this.props.userData.widget_settings.profile_image} />
      )
    }
    if(this.props.userData.profile_image_link && this.props.userData.profile_image_link != ''){
      return (
        <img src={this.props.userData.profile_image_link} />
      )
    } else {
      return (
        <div>
          {this.props.userData.first_name.charAt(0)}{this.props.userData.last_name.charAt(0)}
        </div>
      )
    }
  },
  renderProfileRating: function(){
    var rate = parseFloat((this.props.userData.total_rating).toFixed(1));
    if(this.props.userData.total_rating && this.props.userData.total_rating != ''){
      return (
        <div>
          <div className="num">{rate}%</div>
          <div className="type">Positive</div>
        </div>
      )
    }
    return
  },
  renderProfileRatingLine: function(){
    var rate = parseFloat((this.props.userData.total_rating).toFixed(1));
    if(this.props.userData.total_rating && this.props.userData.total_rating != ''){
      return (
        <p>
          {rate}% positive feedback
        </p>
      )
    }
    return
  },
  renderRepLink: function(){

    if(this.state.activeTab && this.state.activeTab!="" && this.state.activeTab!='rep'){
      return (
        <span className="rep-link" onClick={this.handleRepSelect}>View my reputation</span>
      )
    }
  },
  renderProfileBadge: function(){
    if(this.props.userData.top_rated && this.props.userData.top_rated != false){
      return (<img src="images/top_merchant.png" />)
    }
  },
  handleRepSelect:  function(){
    this.handleSectionSelect('rep');
  },
  handleSectionSelect: function(type){
    this.setState({
      activeTab: type
    },this.props.changeSection(type));

  }

});
