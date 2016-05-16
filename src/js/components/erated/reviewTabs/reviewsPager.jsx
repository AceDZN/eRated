var React = require('react');
var Loader = require('../../loader');
var SVGLoader = require('../../svgLoader');

module.exports = React.createClass({
  getInitialState: function(){
    return({
      activePage: 0
    })
  },
  render: function(){
    if(this.props.provider){
      return (
        <div className={this.props.className+" "+(this.props.activeTab == this.props.provider.name ? 'active':'')}>
          <div className="inner nptb">
            {this.renderReviewsPager()}
          </div>
        </div>
      )
    } else {
      return(
        <Loader className="inner" loaded={false} />
      )
    }
  },
  renderReviewsPager: function(){
    if(this.props.provider.reviews && this.props.provider.reviews.length > 0){
      return this.renderPager();
    } else {
      return this.renderEmptyReviews()
    }
  },
  renderPager: function(){
    return(
      <div className="pager-wrap">
        <h1>Reviews <span>({this.props.provider.reviews.length}+)</span></h1>
        <div className="reviews-pager">
          {this.renderReviews()}
        </div>
        {this.renderBullets()}
      </div>
    )
  },
  renderBullets: function(){
    var bullets = [];
    for(var i=0; i<(this.props.provider.reviews.length/3); i++){
      var b = (
        <span onClick={this.handleBulletClick.bind(this,i)} className={"bullet "+ (this.state.activePage == i ? 'active': '')} key={this.props.provider.name+"_bullet_"+i} ></span>
      );
      bullets.push(b);
    }
    var bulletWrap = (
      <div className="bullets-wrap">
        {bullets}
      </div>
    );
    return bulletWrap;
  },
  renderReviews: function(){
    var pager = [];
    var count = 0;
    for(var i=0; i<(this.props.provider.reviews.length/3); i++){
      var reviews = [];
      for(var k=0; k<3;k++){
        if(this.props.provider.reviews[count]){
          var review = (
            <div key={this.props.provider.name+"_review_"+k} className={"review-item "+this.props.provider.reviews[count].review_type}>
              {this.props.provider.reviews[count].review_content}
            </div>
          );
          count++;
          reviews.push(review);
        }
      }
      var reviewsPage = (
        <div key={this.props.provider.name+"_page_"+i} className={"review-page "+ (this.state.activePage == i ? 'active': '')}>
          {reviews}
        </div>
      );
      pager.push(reviewsPage);
    }
    return pager;
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
  handleBulletClick: function(page){
    this.setState({
      activePage: page
    })
  }

});
