var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

var users = ['019a9a16bc2fa50aaa005bbb9c16447d2b32de1d','bf2ec2098ca8bc146be3eb3fcaab5b53b69075cf','cc87162430f15560ac9e06792fde384f0f1e2042','6b33bfcb6db8091ba96d129327c6b7780129ee1e']

module.exports = Reflux.createStore({
  listenables: [Actions],
  getMerchantData: function(){
    return Api.get(users[0],{
      jsonpCallback: 'callback'
    })
      .then(function(json){

        console.log(json,"json");
        this.merchantData = json;
        this.triggerChange();
      }.bind(this));
  },
  triggerChange: function(){
    this.trigger('change', this.merchantData);
  }
});
