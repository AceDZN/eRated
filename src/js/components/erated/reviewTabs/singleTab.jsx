var React = require('react');
var Loader = require('../../loader');
var SVGLoader = require('../../svgLoader');

module.exports = React.createClass({

  render: function(){
    if(this.props.provider){
      return (
        <div className={this.props.className+" "+(this.props.activeTab == this.props.provider.name ? 'active':'')}>
          <div className="inner">
            {this.renderRating()}
              TAB CONTENT
          </div>
        </div>
      )
    } else {
      return(
        <Loader className="inner" loaded={false} />
      )
    }
  },
  renderRating: function(){
    var rating = ((this.props.provider.score / 100) * 5).toFixed(1);
    var stars =[];
    for(var i=1; i<=5;i++){
      if(i<=Math.floor(rating)){
        var star = (<SVGLoader width="35" height="35" svg="star" key={i+'star_key_svg'} fill="#f5b000" />);
        stars.push(star);
      } else {
        var star = (<SVGLoader width="35" height="35" svg="star" key={i+'star_key_svg'} fill="#d1d1d1" />);
        stars.push(star);
      }
    }
    return (
      <div className="rate-wrap">
        <h1 className="rating-sum col-xs-4">
          {rating}
        </h1>
        <div className="rating-stars col-xs-8">
          {stars}
        </div>
      </div>
    );
  },
  handleClick: function(type){
    this.props.changeTab(type);
  }
});
