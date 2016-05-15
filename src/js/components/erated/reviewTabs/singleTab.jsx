var React = require('react');
var Loader = require('../../loader');
var SVGLoader = require('../../svgLoader');

module.exports = React.createClass({
  render: function(){
    if(this.props.userData && this.props.userData.social_information){
      return (
        <div className={"tab "+(this.props.activeTab == this.props.type ? 'active':'')}>
          {this.renderTab()}
        </div>
      )
    } else {
      return(
        <Loader className="inner" loaded={false} />
      )
    }
  },
  handleClick: function(type){
    this.props.changeTab(type);
  }
});
