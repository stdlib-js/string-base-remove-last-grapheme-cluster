"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var n=s(function(c,i){
var v=require('@stdlib/string-next-grapheme-cluster-break/dist'),m=require('@stdlib/string-num-grapheme-clusters/dist');function o(e,r){var u,a,t;if(r===0)return e;if(u=m(e),e===""||u<r)return"";for(t=0,a=0;a<u-r;)t=v(e,t),a+=1;return e.substring(0,t)}i.exports=o
});var l=n();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
