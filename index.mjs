// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-next-grapheme-cluster-break@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-num-grapheme-clusters@esm/index.mjs";function e(e,s){var n,i,m;if(0===s)return e;if(n=t(e),""===e||n<s)return"";for(m=0,i=0;i<n-s;)m=r(e,m),i+=1;return e.substring(0,m)}export{e as default};
//# sourceMappingURL=index.mjs.map
