"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=s(function(c,i){
var v=require('@stdlib/string-next-grapheme-cluster-break/dist'),m=require('@stdlib/string-num-grapheme-clusters/dist');function o(e,r){var t,a,u;if(r===0)return e;if(t=m(e),e===""||t<r)return"";for(u=0,a=0;a<t-r;)u=v(e,u),a+=1;return e.substring(0,u)}i.exports=o
});var l=n();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
