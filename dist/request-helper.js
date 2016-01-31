"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var u=t[n];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(e,u.key,u)}}return function(t,n,u){return n&&e(t.prototype,n),u&&e(t,u),t}}(),_request=require("request"),_request2=_interopRequireDefault(_request),RequestHelper=function(){function e(t){_classCallCheck(this,e),this.headers={authorization:"Bearer "+t,content_type:"application/json"},this.apiUrl="https://api.digitalocean.com/v2/"}return _createClass(e,[{key:"request",value:function(e,t){e.includeAll?this.getAllPages(e.key,e,t):this.submitRequest(e,t)}},{key:"submitRequest",value:function(e,t){var n=this.requestBuilder(e);(0,_request2["default"])(n,function(e,n,u){e?t(e):t(null,n,u)})}},{key:"getAllPages",value:function(e,t,n){var u=[],r=0,a=0,s=1;t.qs.page=1,this.submitRequest(t,function(i,l,o){return i&&n(i),r=o.meta.total,u=u.concat(o[e]),a=r/(t.qs.per_page||25),u.length>=r?n(null,l,u):void this.getRemainingPages(t,2,a,function(t,r,i){t&&n(t),s++,u=u.concat(i[e]),s===a&&n(null,r,u)})}.bind(this))}},{key:"getRemainingPages",value:function(e,t,n,u){for(var r=t;n>=r;r++)e.qs.page=r,this.submitRequest(e,u)}},{key:"requestBuilder",value:function(e){return{uri:this.apiUrl+e.actionPath,method:e.method||"GET",headers:e.headers||this.headers,body:e.body||{},strictSSL:!0,json:!0,qs:e.qs||{}}}}]),e}();exports["default"]=RequestHelper,module.exports=exports["default"];