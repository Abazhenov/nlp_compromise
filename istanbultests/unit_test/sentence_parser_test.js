
var __cov_jaZCr1p12q2iANMzeqelUw = (Function('return this'))();
if (!__cov_jaZCr1p12q2iANMzeqelUw.__coverage__) { __cov_jaZCr1p12q2iANMzeqelUw.__coverage__ = {}; }
__cov_jaZCr1p12q2iANMzeqelUw = __cov_jaZCr1p12q2iANMzeqelUw.__coverage__;
if (!(__cov_jaZCr1p12q2iANMzeqelUw['/Users/Work/www/Projects/nlp_compromise/test/unit_test/sentence_parser_test.js'])) {
   __cov_jaZCr1p12q2iANMzeqelUw['/Users/Work/www/Projects/nlp_compromise/test/unit_test/sentence_parser_test.js'] = {"path":"/Users/Work/www/Projects/nlp_compromise/test/unit_test/sentence_parser_test.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},"b":{},"f":{"1":0,"2":0},"fnMap":{"1":{"name":"(anonymous_1)","line":5,"loc":{"start":{"line":5,"column":27},"end":{"line":5,"column":39}}},"2":{"name":"(anonymous_2)","line":32,"loc":{"start":{"line":32,"column":12},"end":{"line":32,"column":25}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":27}},"2":{"start":{"line":2,"column":0},"end":{"line":2,"column":31}},"3":{"start":{"line":3,"column":0},"end":{"line":3,"column":45}},"4":{"start":{"line":5,"column":0},"end":{"line":38,"column":3}},"5":{"start":{"line":6,"column":2},"end":{"line":36,"column":5}},"6":{"start":{"line":33,"column":4},"end":{"line":33,"column":46}},"7":{"start":{"line":34,"column":4},"end":{"line":34,"column":42}},"8":{"start":{"line":35,"column":4},"end":{"line":35,"column":28}},"9":{"start":{"line":37,"column":2},"end":{"line":37,"column":10}}},"branchMap":{}};
}
__cov_jaZCr1p12q2iANMzeqelUw = __cov_jaZCr1p12q2iANMzeqelUw['/Users/Work/www/Projects/nlp_compromise/test/unit_test/sentence_parser_test.js'];
__cov_jaZCr1p12q2iANMzeqelUw.s['1']++;var test=require('tape');__cov_jaZCr1p12q2iANMzeqelUw.s['2']++;var nlp=require('./lib/nlp');__cov_jaZCr1p12q2iANMzeqelUw.s['3']++;var str_test=require('./lib/fns').str_test;__cov_jaZCr1p12q2iANMzeqelUw.s['4']++;test('sentence tokenize:',function(t){__cov_jaZCr1p12q2iANMzeqelUw.f['1']++;__cov_jaZCr1p12q2iANMzeqelUw.s['5']++;[['Tony is nice. He lives in Japan.',2],['I like that Color',1],['Hi there Dr. Joe, the price is 4.59 for N.A.S.A. Ph.Ds. I hope that\'s fine, etc. and you can attend Feb. 8th. Bye',3],['Soviet bonds to be sold in the U.S. market. Everyone wins.',2],['Hi there! Everyone wins!',2],['Hi there!!! Everyone wins.',2],['he bought Yahoo! the company.',1],['he is ill',1],['he is ill.',1],['she is fine. he is ill.',2],['she is fine. he is ill',2],['lkajsdflkjeicclksdfjefifh',1],['i think it is good ie. fantastic.',1],['i think it is good i.e. fantastic.',1],['i think it is good ... or else.',1],['i think it is good ... ',1],['What\'s my age again? What\'s my age again?',2],['the problem, eg. the javascript',1],['Dr. Tony is nice. He lives on Elm St. in Vancouver BC. Canada',2],['I made $5.60 today in 1 hour of work.  The E.M.T.\'s were on time, but only barely.',2],['Hi there.\nEveryone wins.',2],['Hi there!\n\nEveryone wins.',2],['Hi there\nEveryone wins',2],['Hi there.\n Everyone wins',2],['Hi there!!\nEveryone wins\n\n',2]].forEach(function(a){__cov_jaZCr1p12q2iANMzeqelUw.f['2']++;__cov_jaZCr1p12q2iANMzeqelUw.s['6']++;var num=nlp.text(a[0]).sentences.length;__cov_jaZCr1p12q2iANMzeqelUw.s['7']++;var msg='"'+a[0]+'" ->  '+num;__cov_jaZCr1p12q2iANMzeqelUw.s['8']++;t.equal(num,a[1],msg);});__cov_jaZCr1p12q2iANMzeqelUw.s['9']++;t.end();});
