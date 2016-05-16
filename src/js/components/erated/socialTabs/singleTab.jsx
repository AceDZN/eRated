var React = require('react');
var SVGLoader = require('../../svgLoader');

module.exports = React.createClass({
  render: function(){
    if(this.props.userData && this.props.userData.social_information){
      return (
        <div className={"tab col-xs-4 "+(this.props.activeTab == this.props.type ? 'active':'')}>
          {this.renderTab()}
        </div>
      )
    }
    return
  },
  getConnectionLabel: function(){
    switch(this.props.type){
      case "facebook":
        return 'Friends'
          break;
      case "linkedin":
        return 'Connections'
          break;
      case "twitter":
        return 'Followers'
          break;
      default:
        return 'Connections'
    }
  },
  renderTab: function(){
    var connections = '---';
    var clickable="";
    if(this.props.userData.social_information[this.props.type]){
      if(this.props.userData.social_information[this.props.type].connections > 1 || this.props.userData.social_information[this.props.type].connections == '500+'){
      clickable=(this.props.type!='twitter' ? "clickable":"");
      connections = this.props.userData.social_information[this.props.type].connections;
      }
    }
    var handleClick = function(){};
    if(clickable == "clickable"){
      handleClick=this.handleClick;
    }

    if(this.props.userData.social_information[this.props.type]){
      return(
          <div className={clickable+" text-center"} onClick={handleClick.bind(this,this.props.type)}>
            <SVGLoader width="20" height="20" svg={this.props.type} key={this.props.type+'_key_svg'} fill="#6C6C6C" />
            <div className={this.props.className}>
              {connections}
              <div className="connections">{this.getConnectionLabel()}</div>
            </div>
          </div>
      )
    }
  },
  handleClick: function(type){
    this.props.changeSection(type);
  }
});
