/*
Cross Switch Ghana API wrapper
@author Harmony Alabi <@harmonizerblinks>
*/

'use strict';

var
    request = require('request'),
    root = 'https://api.cs-ghana.com',
    Promise = require('promise')
;
// console.log(process.env);

var resources = {
  bank: require('./resources/bank'),
  pension: require('./resources/bank'),
  insurance: require('./resources/bank'),
  pension: require('./resources/bank'),
};

function Cross_Switch(app_id,app_key,school_code,url) {
  if (!(this instanceof Cross_Switch)) {
    return new Cross_Switch(app_id,app_key,school_code,url);
  }
  if(url == null) return "url is required"
  root = url;
  
  // console.log(app_id,app_key,root);

  this.app_id = app_id;
  this.app_key = app_key;
  this.school_code = school_code;
  this.importResources();
}

Cross_Switch.prototype = {

  extend: function(params) {
  	// This looks more sane.
    var self = this;
    // console.log(self);
    return function(){
      // Convert argument to array
      var args = new Array(arguments.length);
      var l = args.length;
      for(var i = 0; i < l; ++i) {
        args[i] = arguments[i];
      }

      // Check for callback & Pull it out from the array
      var callback = l > 0 && typeof args.slice(l-1)[0] === "function" ? args.splice(l-1)[0] : undefined;

      var body, qs;

      // quick fix - method checking
      var method = params.method in {"get":'', "post":'', "put":''}
                 ? params.method
                 : (function () { throw new Error("Method not Allowed! - Resource declaration error") })()
      var endpoint = [root, params.endpoint].join('');
      // Checking for required params;
      if(params.params) {
        var paramList = params.params;

        // Pull body passed
        var body = args.length === 2 ? args[1] : args[0];
        paramList.filter((item, index, array)=> {
          if(item.indexOf("*") === -1) {
            // Not required
            return;
          }
          item = item.replace("*", "");

          if(!(item in body)) {
            throw new Error("Required Parameters Ommited - " + item);
          }
          return;

        });
      }

      // Get arguments in endpoint e.g {id} in customer/{id} and pull
      // out from array
      var argsInEndpoint = endpoint.match(/{[^}]+}/g);
      if (argsInEndpoint) {
        l = argsInEndpoint.length;

        // Do we have one or more?
        if (l > 0) {
          // Confirm resource declaration good
          if (!Array.isArray(params.args)) {
            // error
            throw new Error('Resource declaration error');
          }

          // Confirm user passed the argument to method
          // and replace in endpoint

          var match, index;
          for (var i=0;i<l;i++) {
            match = argsInEndpoint[i].replace(/\W/g, '');
            index = params.args.indexOf(match);
            if (index != -1) {
              if (!args[index]) {
                // error
                throw new Error('Resource declaration error');
              }

              // todo: args[index] must be string or int
              endpoint = endpoint.replace(new RegExp(argsInEndpoint[i]), args[index]);
              args.splice(index, 1);
            }
          }
        }
      }

      // Add post/put/[delete?] body
      if (args[0]) {
        if (method == 'post' || method == 'put') {
          // Body
          body = args[0];
          if(args[1]) qs = args[1];
          // console.log(self.app_id, self.app_key);
          body.app_id = self.app_id;
          body.app_key = self.app_key;
          body.school_code = self.school_code;
        }
        else if (method == 'get') {
          qs = args[0];
          // console.log(args[0])
        }
      }

      // Make request
      var options = {
        url: endpoint,
        json: true,
        method: method.toUpperCase(),
        headers: {
          'Accept': ['Bearer '],
          'Authorization': ['Bearer ', self.app_id+'|'+self.app_key].join('')
        }
      }

      if (body){
        options.body = body;
      }
      if (qs)
        options.qs = qs;

        // console.log(body, qs);

      return new Promise((fulfill, reject)=>{
        request(options, (error, response, body)=> {
          // return body
          if (error){
            reject(error);
          }
          else if(!body.status){
          
            // Error from API??
            error = body;
            body = null;
            reject(error);
          }
          else{
            fulfill(body);
          }
        });
      }).then((value)=> {
      	if(callback) {
      		return callback(null, value);
      	}
      	return value;
      }).catch((reason)=> {
      	if(callback) {
      		return callback(reason, null);
      	}
      	return reason;
      });
    }
  },

  importResources: function() {
    var anon;
    // Looping over all resources
    for (var j in resources) {
      // Creating a surrogate function
      anon = function(){};
      // Looping over the properties of each resource
      for(var i in resources[j]) {
        // console.log(i);
        anon.prototype[i] = this.extend(resources[j][i]);
      }
      Cross_Switch.prototype[j] = new anon();
    }
  }
};


module.exports = Cross_Switch;
