"use strict";
var __cov_eSgC8rHiV5zqqt5mowSqZw = (Function('return this'))();
if (!__cov_eSgC8rHiV5zqqt5mowSqZw.__coverage__) { __cov_eSgC8rHiV5zqqt5mowSqZw.__coverage__ = {}; }
__cov_eSgC8rHiV5zqqt5mowSqZw = __cov_eSgC8rHiV5zqqt5mowSqZw.__coverage__;
if (!(__cov_eSgC8rHiV5zqqt5mowSqZw['/Users/Work/www/Projects/nlp_compromise/test/perf_tests/pos_test/analysis.js'])) {
   __cov_eSgC8rHiV5zqqt5mowSqZw['/Users/Work/www/Projects/nlp_compromise/test/perf_tests/pos_test/analysis.js'] = {"path":"/Users/Work/www/Projects/nlp_compromise/test/perf_tests/pos_test/analysis.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0},"b":{},"f":{"1":0},"fnMap":{"1":{"name":"(anonymous_1)","line":8,"loc":{"start":{"line":8,"column":17},"end":{"line":8,"column":28}}}},"statementMap":{"1":{"start":{"line":2,"column":0},"end":{"line":2,"column":46}},"2":{"start":{"line":3,"column":0},"end":{"line":3,"column":45}},"3":{"start":{"line":4,"column":0},"end":{"line":4,"column":41}},"4":{"start":{"line":5,"column":0},"end":{"line":5,"column":39}},"5":{"start":{"line":8,"column":0},"end":{"line":19,"column":2}},"6":{"start":{"line":9,"column":2},"end":{"line":9,"column":32}},"7":{"start":{"line":10,"column":2},"end":{"line":10,"column":24}},"8":{"start":{"line":11,"column":2},"end":{"line":11,"column":27}},"9":{"start":{"line":12,"column":2},"end":{"line":12,"column":27}},"10":{"start":{"line":13,"column":2},"end":{"line":13,"column":52}},"11":{"start":{"line":14,"column":2},"end":{"line":14,"column":34}},"12":{"start":{"line":15,"column":2},"end":{"line":15,"column":33}},"13":{"start":{"line":16,"column":2},"end":{"line":16,"column":23}},"14":{"start":{"line":17,"column":2},"end":{"line":17,"column":25}},"15":{"start":{"line":18,"column":2},"end":{"line":18,"column":9}},"16":{"start":{"line":21,"column":0},"end":{"line":21,"column":26}},"17":{"start":{"line":23,"column":0},"end":{"line":23,"column":11}}},"branchMap":{}};
}
__cov_eSgC8rHiV5zqqt5mowSqZw = __cov_eSgC8rHiV5zqqt5mowSqZw['/Users/Work/www/Projects/nlp_compromise/test/perf_tests/pos_test/analysis.js'];
__cov_eSgC8rHiV5zqqt5mowSqZw.s['1']++;const corpus=require('nlp-corpus/index.js');__cov_eSgC8rHiV5zqqt5mowSqZw.s['2']++;const nlp=require('../../../src/index.js');__cov_eSgC8rHiV5zqqt5mowSqZw.s['3']++;const findReasons=require('./reasons');__cov_eSgC8rHiV5zqqt5mowSqZw.s['4']++;const fallback=require('./fallback');__cov_eSgC8rHiV5zqqt5mowSqZw.s['5']++;const analysis=function(){__cov_eSgC8rHiV5zqqt5mowSqZw.f['1']++;__cov_eSgC8rHiV5zqqt5mowSqZw.s['6']++;const str=corpus.text.sms();__cov_eSgC8rHiV5zqqt5mowSqZw.s['7']++;console.time('parse');__cov_eSgC8rHiV5zqqt5mowSqZw.s['8']++;let text=nlp.text(str);__cov_eSgC8rHiV5zqqt5mowSqZw.s['9']++;console.timeEnd('parse');__cov_eSgC8rHiV5zqqt5mowSqZw.s['10']++;console.log(text.sentences.length+' sentences');__cov_eSgC8rHiV5zqqt5mowSqZw.s['11']++;let reasons=findReasons(text);__cov_eSgC8rHiV5zqqt5mowSqZw.s['12']++;let fallbacks=fallback(text);__cov_eSgC8rHiV5zqqt5mowSqZw.s['13']++;console.log(reasons);__cov_eSgC8rHiV5zqqt5mowSqZw.s['14']++;console.log(fallbacks);__cov_eSgC8rHiV5zqqt5mowSqZw.s['15']++;return;};__cov_eSgC8rHiV5zqqt5mowSqZw.s['16']++;module.exports=analysis;__cov_eSgC8rHiV5zqqt5mowSqZw.s['17']++;analysis();
