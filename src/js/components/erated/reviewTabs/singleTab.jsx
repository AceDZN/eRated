var React = require('react');
var Loader = require('../../loader');
var SVGLoader = require('../../svgLoader');

module.exports = React.createClass({
  render: function(){
    if(this.props.provider){
      return (
        <div className={this.props.className+" "+(this.props.activeTab == this.props.provider.name ? 'active':'')}>
          <div className="inner">
            {this.renderRateSection()}
          </div>
        </div>
      )
    } else {
      return(
        <Loader className="inner" loaded={false} />
      )
    }
  },
  renderRateSection: function(){
    if(this.props.provider.score && this.props.provider.score > 0 && this.props.provider.total_reviews >0){
      return this.renderRating();
    } else {
      return this.renderEmptyRating()
    }
  },
  renderEmptyRating: function(){
    return (
      <div className="text-center no-results">
        <h5>
          We are still collecting information about {this.props.name}.
        </h5>
        <img src="./images/no-results1.png" className="no-results-img" />
      </div>

  )
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
      <div>
        <div className="rate-wrap">
          <h1 className="rating-sum col-xs-4">
            {rating}
          </h1>
          <div className="rating-stars text-right col-xs-8">
            {stars}
          </div>
          <div className="rating-num small-text col-xs-10 text-left">
            Number of Transactions made:
          </div>
          <div className="rating-num small-text col-xs-2 text-right">
            {this.props.provider.total_reviews}
          </div>
        </div>
        {this.renderStatistics()}

      </div>
    );
  },
  renderStatistics: function(){
    if(this.props.provider.characteristics && this.props.provider.characteristics.length > 1){
      var characteristics = [];
      for(var i=0; i<this.props.provider.characteristics.length; i++){
        var n = this.props.provider.characteristics[i].name;
        var progressStyle = {width: (this.props.provider.characteristics[i].score)+"%"};

        n.split(" ").join("_");
        var character = (
          <div className="characteristic-wrap" key={n+i+"_characteristic_key"}>
            <div className="col-xs-7 small-text">
              {this.props.provider.characteristics[i].name}
            </div>
            <div className="col-xs-5">
              <div className="progress">
                <div className="progress-bar" style={progressStyle}>
                  <span>{this.props.provider.characteristics[i].score+"%"}</span>
                </div>
              </div>
            </div>
          </div>
        );
        characteristics.push(character);
      }
      return characteristics
    }
  },
  handleClick: function(type){
    this.props.changeTab(type);
  }
});
