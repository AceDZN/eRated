var React = require('react');

module.exports = React.createClass({
  getLoadClass: function(){
    if (this.props.loaded){
      return  'loaded'
    }
    return
  },
  render: function(){
      return (
        <div className={"loader_wrap animate "+ this.getLoadClass()}></div>
      );
  },

});
