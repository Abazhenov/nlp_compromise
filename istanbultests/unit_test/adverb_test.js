
var __cov_hsGZTeBx8PxZtopdUYQ0sQ = (Function('return this'))();
if (!__cov_hsGZTeBx8PxZtopdUYQ0sQ.__coverage__) { __cov_hsGZTeBx8PxZtopdUYQ0sQ.__coverage__ = {}; }
__cov_hsGZTeBx8PxZtopdUYQ0sQ = __cov_hsGZTeBx8PxZtopdUYQ0sQ.__coverage__;
if (!(__cov_hsGZTeBx8PxZtopdUYQ0sQ['/Users/Work/www/Projects/nlp_compromise/test/unit_test/adverb_test.js'])) {
   __cov_hsGZTeBx8PxZtopdUYQ0sQ['/Users/Work/www/Projects/nlp_compromise/test/unit_test/adverb_test.js'] = {"path":"/Users/Work/www/Projects/nlp_compromise/test/unit_test/adverb_test.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},"b":{},"f":{"1":0,"2":0,"3":0},"fnMap":{"1":{"name":"(anonymous_1)","line":5,"loc":{"start":{"line":5,"column":19},"end":{"line":5,"column":31}}},"2":{"name":"(anonymous_2)","line":7,"loc":{"start":{"line":7,"column":26},"end":{"line":7,"column":38}}},"3":{"name":"(anonymous_3)","line":61,"loc":{"start":{"line":61,"column":14},"end":{"line":61,"column":27}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":27}},"2":{"start":{"line":2,"column":0},"end":{"line":2,"column":31}},"3":{"start":{"line":3,"column":0},"end":{"line":3,"column":45}},"4":{"start":{"line":5,"column":0},"end":{"line":67,"column":3}},"5":{"start":{"line":7,"column":2},"end":{"line":66,"column":5}},"6":{"start":{"line":8,"column":4},"end":{"line":64,"column":7}},"7":{"start":{"line":62,"column":6},"end":{"line":62,"column":48}},"8":{"start":{"line":63,"column":6},"end":{"line":63,"column":35}},"9":{"start":{"line":65,"column":4},"end":{"line":65,"column":12}}},"branchMap":{}};
}
__cov_hsGZTeBx8PxZtopdUYQ0sQ = __cov_hsGZTeBx8PxZtopdUYQ0sQ['/Users/Work/www/Projects/nlp_compromise/test/unit_test/adverb_test.js'];
__cov_hsGZTeBx8PxZtopdUYQ0sQ.s['1']++;var test=require('tape');__cov_hsGZTeBx8PxZtopdUYQ0sQ.s['2']++;var nlp=require('./lib/nlp');__cov_hsGZTeBx8PxZtopdUYQ0sQ.s['3']++;var str_test=require('./lib/fns').str_test;__cov_hsGZTeBx8PxZtopdUYQ0sQ.s['4']++;test('==Adverb==',function(T){__cov_hsGZTeBx8PxZtopdUYQ0sQ.f['1']++;__cov_hsGZTeBx8PxZtopdUYQ0sQ.s['5']++;T.test('to_adjective:',function(t){__cov_hsGZTeBx8PxZtopdUYQ0sQ.f['2']++;__cov_hsGZTeBx8PxZtopdUYQ0sQ.s['6']++;[['quickly','quick'],['garishly','garish'],['tediously','tedious'],['frightfully','frightful'],['tortuously','tortuous'],['privately','private'],['unambiguously','unambiguous'],['cortically','cortic'],['biradially','biradial'],['meanly','mean'],['raspingly','rasping'],['comprehensively','comprehensive'],['fervently','fervent'],['nationally','national'],['maternally','maternal'],['flashily','flashy'],['only','only'],['narrowly','narrow'],['blasphemously','blasphemous'],['abortively','abortive'],['inoffensively','inoffensive'],['truly','true'],['gently','gent'],['tolerantly','tolerant'],['enchantingly','enchanting'],['unswervingly','unswerving'],['grubbily','grubby'],['longitudinally','longitudinal'],['thermodynamically','thermodynamic'],['mirthfully','mirthful'],['salaciously','salacious'],['dourly','dour'],['credulously','credulous'],['carefully','careful'],['knowingly','knowing'],['geometrically','geometrical'],['unassailably','unassailable'],['antecedently','antecedent'],['adjectively','adjective'],['hebdomadally','hebdomadal'],['dizzily','dizzy'],['obnoxiously','obnoxious'],['thirstily','thirsty'],['biennially','biennial'],['roguishly','roguish'],['mentally','mental'],['incessantly','incessant'],['intelligently','intelligent'],['perseveringly','persevering'],['namely','name'],['formidably','formidable'],['vertically','vertical']].forEach(function(a){__cov_hsGZTeBx8PxZtopdUYQ0sQ.f['3']++;__cov_hsGZTeBx8PxZtopdUYQ0sQ.s['7']++;var str=nlp.adverb(a[0]).to_adjective();__cov_hsGZTeBx8PxZtopdUYQ0sQ.s['8']++;str_test(str,a[0],a[1],t);});__cov_hsGZTeBx8PxZtopdUYQ0sQ.s['9']++;t.end();});});
