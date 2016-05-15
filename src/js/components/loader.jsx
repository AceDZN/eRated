var React = require('react');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      loaderLoadClass: ''
    }
  },
  getLoadClass: function(){
    if (this.props.loaded){
      this.setState({
        loaderLoadClass: 'loaded'
      });
    } else {
      this.setState({
        loaderLoadClass: ''
      });
    }
  },
  render: function(){
      return (
        <div className={"loader_wrap animate "+ this.state.loaderLoadClass}>

        </div>
      );
  },

});
