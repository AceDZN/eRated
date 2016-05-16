var React = require('react');
var Loader = require('../../loader');
var SVGLoader = require('../../svgLoader');

module.exports = React.createClass({
  render: function(){
    if(this.props.social){
      return (
          <div className="tabs-content">
            {this.renderSocialSection()}
          </div>
      )
    } else {
      return(
        <Loader className="inner" loaded={false} />
      )
    }
  },
  renderSocialSection: function(){
    var networks = [];
    for ( network in this.props.social ) {
      var n;
      switch(network){
        case "facebook":
          n = <div key="facebook_wrapper">{this.renderFacebookEducation()}</div>;
          break;
        case "linkedin":
          n = <div key="linkedin_wrapper">{this.renderLinkedinRecommendations()}</div>;
          break;
        case "twitter":
          n = (
            <div key="twitter_wrapper" className={"content bigger"+(network == this.props.provider ? 'active' : '')}>
              TWITTER - {this.props.provider} - {network}
            </div>
          );
          break;
        default:
          n=null
      }
      if(n!=null){
        networks.push(n);
      }
    }

    return (
      <div>
        {networks}
      </div>
    )
  },
  renderFacebookEducation: function(){
    if(this.props.social['facebook'].education){
      var edu_icon = (<SVGLoader width="30" height="30" svg="education" fill="#C6C6C6" />);
      var education = [];
      for(var i=0;i<this.props.social['facebook'].education.length; i++){
        var img = false;
        if (this.props.social['facebook'].education[i].school_logo){
          img = <img src={this.props.social['facebook'].education[i].school_logo} onError={this.handleImgError} />;
        };
        var e = (
          <li key={"facebook_edu_"+i}>
              {edu_icon}
              {this.props.social['facebook'].education[i].school_type} at {this.props.social['facebook'].education[i].school}
              {img}
          </li>
        );
        education.push(e);
      }
      return(
        <div className={"content bigger "+('facebook' == this.props.provider ? 'active' : '')}>
          <div className="inner">
            <div className="social-wrap">
              <h1>Education</h1>
              <ul className="social-list">
                {education}
              </ul>
            </div>
          </div>
        </div>
      );
    }
  },
  renderLinkedinRecommendations: function(){
    if(this.props.social['linkedin'].recommendations && this.props.social['linkedin'].recommendations.length>0){
      var recommendations = [];
      for(var i=0;i<this.props.social['linkedin'].recommendations.length; i++){
        var img;
        if(this.props.social['linkedin'].recommendations[i].picture_url){
          img = <img src={this.props.social['linkedin'].recommendations[i].picture_url} />;
        }
        var d = new Date(this.props.social['linkedin'].recommendations[i].date_recommended);
        var date = d.getFullYear()+"/"+d.getMonth()+"/"+d.getDate()
        var r = (
          <li key={"rec_owner_"+this.props.social['linkedin'].recommendations[i].reviewer_id}>
            <div className="col-xs-2">
              {img}
            </div>
            <div className="col-xs-10">
              <h4>{this.props.social['linkedin'].recommendations[i].recommender_name}</h4>
              "{this.props.social['linkedin'].recommendations[i].content}"
            </div>

            <div className="text-right date">
              {date}
            </div>
          </li>
        );
        recommendations.push(r);
      }
      return(
        <div className={"content bigger "+('linkedin' == this.props.provider ? 'active' : '')}>
          <div className="social-wrap">
            <ul className="recomendation-list">
              {recommendations}
            </ul>
          </div>
        </div>
      );
    } else {
      return(
        <div className={"content bigger "+('linkedin' == this.props.provider ? 'active' : '')}>
          {this.renderEmptyReviews()}
        </div>
      );
    }
  },
  renderEmptyReviews: function(){
    return (
      <div className="text-center no-results">
        <SVGLoader width="100%" height="100" svg="reviewStar" key="review_star_key_svg" fill="#DEE2ED" />
        <h3>
          Your reviews will appear here
        </h3>
      </div>
    )
  },
  handleImgError: function(event) {
    event.currentTarget.src = "images/spacer.png";
  },
});
