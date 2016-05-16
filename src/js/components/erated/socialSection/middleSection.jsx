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
          n = <div key="facebook_wrapper">{this.renderFacebookWork()}</div>;
          break;
        case "linkedin":
          n = <div key="linkedin_wrapper">{this.renderLinkedinResume()}</div>;
          break;
        case "twitter":
          n = (
            <div key="twitter_wrapper" className={"content "+(network == this.props.provider ? 'active' : '')}>
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
  renderFacebookWork: function(){
    if(this.props.social['facebook'].positions){
      var position_icon = (<SVGLoader width="30" height="30" svg="work" fill="#C6C6C6" />);
      var positions = [];
      for(var i=0;i<this.props.social['facebook'].positions.length; i++){
        var img = false;
        if (this.props.social['facebook'].positions[i].company_logo){
          img = <img src={this.props.social['facebook'].positions[i].company_logo} onError={this.handleImgError} />;
        };
        var p = (
          <li key={"facebook_positions_"+i}>
              {position_icon}
              {this.props.social['facebook'].positions[i].title} at {this.props.social['facebook'].positions[i].company_name}
              {img}
          </li>
        );
        positions.push(p);
      }
      return(
        <div className={"content bigger "+('facebook' == this.props.provider ? 'active' : '')}>
          <div className="inner">
            <div className="social-wrap">
              <h1>Work</h1>
              <ul className="social-list">
                {positions}
              </ul>
            </div>
          </div>
        </div>
      );
    }
  },
  renderLinkedinResume: function(){
    if(this.props.social['linkedin'].positions || this.props.social['linkedin'].education){
      var position_icon = (<SVGLoader width="30" height="30" svg="work" fill="#C6C6C6" />);
      var edu_icon = (<SVGLoader width="30" height="30" svg="education" fill="#C6C6C6" />);
      var positions = [];
      var education = [];
      for(var i=0;i<this.props.social['linkedin'].positions.length; i++){
        var startyear = parseInt(this.props.social['linkedin'].positions[i].start_date);
        var endyear = 'present';
        if(this.props.social['linkedin'].positions[i].end_date){
          endyear = this.props.social['linkedin'].positions[i].end_date;
        }
        var sentence = 'Worked';
        if(endyear == 'present'){
          sentence = 'Work'
        }
        var p = (
          <li key={"linkedin_position_"+i}>
              {position_icon}
              {this.props.social['linkedin'].positions[i].title} at {this.props.social['linkedin'].positions[i].company_name}
              <h6>
              {sentence} there from {startyear} until {endyear}
              </h6>
          </li>
        );
        positions.push(p);
      }
      for(var i=0;i<this.props.social['linkedin'].education.length; i++){
        var e = (
          <li key={"linkedin_edu_"+i}>
              {edu_icon}
              {this.props.social['linkedin'].education[i].school_type} at {this.props.social['linkedin'].education[i].school}
          </li>
        );
        education.push(e);
      }
      var educationWrap,positionsWrap;
      if(education.length > 0){
        educationWrap = (
          <div>
            <h3>Education</h3>
            <ul className="social-list">
              {education}
            </ul>
          </div>
        )
      }
      if(positions.length > 0){
        positionsWrap = (
          <div>
            <h3>Experience</h3>
            <ul className="social-list">
              {positions}
            </ul>
          </div>
        )
      }
      return(
        <div className={"content bigger "+('linkedin' == this.props.provider ? 'active' : '')}>
          <div className="inner">
            <div className="social-wrap">
              {positionsWrap}
              {educationWrap}
            </div>
          </div>
        </div>
      );
    }
  },
  handleImgError: function(event) {
    event.currentTarget.src = "images/spacer.png";
  },
});
