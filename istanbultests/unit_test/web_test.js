
var __cov_pCquKbSNoPgTOCnZ6B7thw = (Function('return this'))();
if (!__cov_pCquKbSNoPgTOCnZ6B7thw.__coverage__) { __cov_pCquKbSNoPgTOCnZ6B7thw.__coverage__ = {}; }
__cov_pCquKbSNoPgTOCnZ6B7thw = __cov_pCquKbSNoPgTOCnZ6B7thw.__coverage__;
if (!(__cov_pCquKbSNoPgTOCnZ6B7thw['/Users/Work/www/Projects/nlp_compromise/test/unit_test/web_test.js'])) {
   __cov_pCquKbSNoPgTOCnZ6B7thw['/Users/Work/www/Projects/nlp_compromise/test/unit_test/web_test.js'] = {"path":"/Users/Work/www/Projects/nlp_compromise/test/unit_test/web_test.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0},"b":{},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0},"fnMap":{"1":{"name":"(anonymous_1)","line":5,"loc":{"start":{"line":5,"column":26},"end":{"line":5,"column":38}}},"2":{"name":"(anonymous_2)","line":7,"loc":{"start":{"line":7,"column":22},"end":{"line":7,"column":34}}},"3":{"name":"(anonymous_3)","line":20,"loc":{"start":{"line":20,"column":14},"end":{"line":20,"column":27}}},"4":{"name":"(anonymous_4)","line":28,"loc":{"start":{"line":28,"column":24},"end":{"line":28,"column":36}}},"5":{"name":"(anonymous_5)","line":37,"loc":{"start":{"line":37,"column":14},"end":{"line":37,"column":27}}},"6":{"name":"(anonymous_6)","line":45,"loc":{"start":{"line":45,"column":20},"end":{"line":45,"column":32}}},"7":{"name":"(anonymous_7)","line":64,"loc":{"start":{"line":64,"column":14},"end":{"line":64,"column":27}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":27}},"2":{"start":{"line":2,"column":0},"end":{"line":2,"column":31}},"3":{"start":{"line":3,"column":0},"end":{"line":3,"column":45}},"4":{"start":{"line":5,"column":0},"end":{"line":72,"column":3}},"5":{"start":{"line":7,"column":2},"end":{"line":26,"column":5}},"6":{"start":{"line":8,"column":4},"end":{"line":24,"column":7}},"7":{"start":{"line":21,"column":6},"end":{"line":21,"column":45}},"8":{"start":{"line":22,"column":6},"end":{"line":22,"column":44}},"9":{"start":{"line":23,"column":6},"end":{"line":23,"column":44}},"10":{"start":{"line":25,"column":4},"end":{"line":25,"column":12}},"11":{"start":{"line":28,"column":2},"end":{"line":43,"column":5}},"12":{"start":{"line":29,"column":4},"end":{"line":41,"column":7}},"13":{"start":{"line":38,"column":6},"end":{"line":38,"column":45}},"14":{"start":{"line":39,"column":6},"end":{"line":39,"column":46}},"15":{"start":{"line":40,"column":6},"end":{"line":40,"column":46}},"16":{"start":{"line":42,"column":4},"end":{"line":42,"column":12}},"17":{"start":{"line":45,"column":2},"end":{"line":70,"column":5}},"18":{"start":{"line":46,"column":4},"end":{"line":68,"column":7}},"19":{"start":{"line":65,"column":6},"end":{"line":65,"column":45}},"20":{"start":{"line":66,"column":6},"end":{"line":66,"column":42}},"21":{"start":{"line":67,"column":6},"end":{"line":67,"column":42}},"22":{"start":{"line":69,"column":4},"end":{"line":69,"column":12}}},"branchMap":{}};
}
__cov_pCquKbSNoPgTOCnZ6B7thw = __cov_pCquKbSNoPgTOCnZ6B7thw['/Users/Work/www/Projects/nlp_compromise/test/unit_test/web_test.js'];
__cov_pCquKbSNoPgTOCnZ6B7thw.s['1']++;var test=require('tape');__cov_pCquKbSNoPgTOCnZ6B7thw.s['2']++;var nlp=require('./lib/nlp');__cov_pCquKbSNoPgTOCnZ6B7thw.s['3']++;var str_test=require('./lib/fns').str_test;__cov_pCquKbSNoPgTOCnZ6B7thw.s['4']++;test('=Web Terminology=',function(T){__cov_pCquKbSNoPgTOCnZ6B7thw.f['1']++;__cov_pCquKbSNoPgTOCnZ6B7thw.s['5']++;T.test('is-email:',function(t){__cov_pCquKbSNoPgTOCnZ6B7thw.f['2']++;__cov_pCquKbSNoPgTOCnZ6B7thw.s['6']++;[[`s@s.com`,true],[`sasdf@sasdf.com`,true],[`sasdf@sasdf.ti`,true],[`sasdf@sasdf.t`],[`sasdf@sasdft`],[`sasdfsasdft.com`],[`@sasdft.com`],[`_@_.com`,true],[`_@_._`],[`sas df@sasdf.com`],[`sasdf@sa sdf.com`]].forEach(function(a){__cov_pCquKbSNoPgTOCnZ6B7thw.f['3']++;__cov_pCquKbSNoPgTOCnZ6B7thw.s['7']++;var term=nlp.sentence(a[0]).terms[0];__cov_pCquKbSNoPgTOCnZ6B7thw.s['8']++;var msg=a[0]+' is email: '+a[1];__cov_pCquKbSNoPgTOCnZ6B7thw.s['9']++;t.equal(term.pos['Email'],a[1],msg);});__cov_pCquKbSNoPgTOCnZ6B7thw.s['10']++;t.end();});__cov_pCquKbSNoPgTOCnZ6B7thw.s['11']++;T.test('is-hashtag:',function(t){__cov_pCquKbSNoPgTOCnZ6B7thw.f['4']++;__cov_pCquKbSNoPgTOCnZ6B7thw.s['12']++;[[`#lkjsdf`,true],[`#ll`,true],[`#22ll`,true],[`#_22ll`,true],[`#l`],[`# l`],[`l#l`]].forEach(function(a){__cov_pCquKbSNoPgTOCnZ6B7thw.f['5']++;__cov_pCquKbSNoPgTOCnZ6B7thw.s['13']++;var term=nlp.sentence(a[0]).terms[0];__cov_pCquKbSNoPgTOCnZ6B7thw.s['14']++;var msg=a[0]+' is hashtag: '+a[1];__cov_pCquKbSNoPgTOCnZ6B7thw.s['15']++;t.equal(term.pos['HashTag'],a[1],msg);});__cov_pCquKbSNoPgTOCnZ6B7thw.s['16']++;t.end();});__cov_pCquKbSNoPgTOCnZ6B7thw.s['17']++;T.test('is-url:',function(t){__cov_pCquKbSNoPgTOCnZ6B7thw.f['6']++;__cov_pCquKbSNoPgTOCnZ6B7thw.s['18']++;[[`http://cool.com/fun`,true],[`https://cool.com`,true],[`https://cool.com/`,true],[`https://www.cool.com/`,true],[`http://subdomain.cool.com/`,true],[`www.fun.com/`,true],[`www.fun.com`,true],[`www.fun.com/foobar/fun`,true],[`www.subdomain.cool.com/`,true],[`wwwsubdomain.cool.com/`,true],[`woo.br`,true],[`woohoo.biz`,true],[`woop.org/news`,true],[`http://woop.org/news?foo=bar`,true],[`http:subdomain.cool.com/`],[`coolcom`]].forEach(function(a){__cov_pCquKbSNoPgTOCnZ6B7thw.f['7']++;__cov_pCquKbSNoPgTOCnZ6B7thw.s['19']++;var term=nlp.sentence(a[0]).terms[0];__cov_pCquKbSNoPgTOCnZ6B7thw.s['20']++;var msg=a[0]+' is url: '+a[1];__cov_pCquKbSNoPgTOCnZ6B7thw.s['21']++;t.equal(term.pos['Url'],a[1],msg);});__cov_pCquKbSNoPgTOCnZ6B7thw.s['22']++;t.end();});});
