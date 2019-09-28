/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Sequence Sum']=Kx(

detail('求和公式',Table([ZLR('名称 前n项求和 记法 结果 证明')],[
	ZLR('等差\n公差$d$____a+'+ZLR3('(a+',ZLR(' 2 ⋯ (n-1)'),'d)','+')+'________'+Eq([frac('(a + a_n)n',2,''),'na + '+frac('n(n-1)',2,'')+'d'])+'____数列逆序，分别相加','','____'),
	ZLR('等比\n公比$q≠1$____'+ZLR3('a',ZLR(' q q ⋯ q'),ZLR('  ^2  ^{n-1}'),'+')+'________'+Eq([frac('a - a_nq','1-q',''),frac('a(1-q^n)','1-q','')])+'____数列×q，错位相减','','____'),
	ZLR('____'+zlr('','1 2 3 ⋯ n','+')+'____'+sum('i',1,'n','i','','')+'____'+frac(1,2,'')+'n(n+1)','','____'),
	ZLR('____'+ZLR3('',ZLR('1 2 3 ⋯ n'),'^2','+')+'____'+sum('i',1,'n','i^2','','')+'____'+Eq([frac(1,6,'')+'n(n+1)(2n+1)',
		frac(1,3,'')+'n(n+1)(n+'+frac(1,2,'')+')']),'','____'),
	ZLR('____'+ZLR3('',ZLR('1 2 3 ⋯ n'),'^3','+')+'____'+sum('i',1,'n','i^3','','')+'____'+frac(1,4,'')+'n^2(n+1)^2','','____'),
	ZLR('____'+ZLR3('',ZLR('1 2 3 ⋯ n'),'^4','+')+'____'+sum('i',1,'n','i^4','','')+'____'+Eq([frac(1,30,'')+'n(n+1)(2n+1)(3n^2+3n-1)',
		frac(1,5,'')+'n(n+1)(n+'+frac(1,2,'')+')(n^2+n-'+frac(1,3,'')+')']),'','____'),
	ZLR('____'+ZLR3('',ZLR('1 2 3 ⋯ n'),'^5','+')+'____'+sum('i',1,'n','i^5','','')+'____'+Eq([frac(1,12,'')+'n^2(n+1)^2(2n^2+2n-1)',
		frac(1,6,'')+'n^2(n+1)^2(n^2+n-'+frac(1,2,'')+')']),'','____'),
	ZLR('____'+ZLR3('',ZLR('1 2 3 ⋯ n'),'^6','+')+'____'+sum('i',1,'n','i^6','','')+'____'+Eq([frac(1,42,'')+'n(n+1)(2n+1)(3n^4+6n^3-3n+1)',
		frac(1,7,'')+'n(n+1)(n+'+frac(1,2,'')+')(n^4+2n^3-n+'+frac(1,3,'')+')']),'','____'),
	ZLR('____'+ZLR3('',ZLR('1 2 3 ⋯ n'),'^7','+')+'____'+sum('i',1,'n','i^7','','')+'____'+Eq([frac(1,24,'')+'n^2(n+1)^2(3n^4+6n^3-n^2-4n+2)',
		frac(1,8,'')+'n^2(n+1)^2(n^4+2n^3-'+frac(1,3,'')+'n^2-'+frac(4,3,'')+'n+'+frac(2,3,'')+')']),'','____'),
	ZLR('____'+ZLR3('',ZLR('1 2 3 ⋯ n'),'^8','+')+'____'+sum('i',1,'n','i^8','','')+'____'+Eq([frac(1,90,'')+'n(n+1)(2n+1)(5n^6+15n^5+5n^4-15n^3-n^2+9n-3)',
		frac(1,9,'')+'n(n+1)(n+'+frac(1,2,'')+')(n^6+3n^5+n^4-3n^3-'+frac(1,5,'')+'n^2+'+frac(9,5,'')+'n-'+frac(3,5,'')+')']),'','____'),
	ZLR('____'+ZLR3('',ZLR('1 2 3 ⋯ n'),'^9','+')+'____'+sum('i',1,'n','i^9','','')+'____'+Eq([frac(1,20,'')+'n^2(n+1)^2(n^2+n-1)(2n^4+4n^3-n^2-3n+3)',
		frac(1,10,'')+'n^2(n+1)^2(n^2+n-1)(n^4+2n^3-'+frac(1,2,'')+'n^2-'+frac(3,2,'')+'n+'+frac(3,2,'')+')']),'','____'),
	ZLR('____'+ZLR3('',ZLR('1 2 3 ⋯ n'),'^{10}','+')+'____'+sum('i',1,'n','i^{10}','','')+'____'+Eq([frac(1,66,'')+'n(n+1)(2n+1)(n^2+n-1)(3n^6+9n^5+2n^4-11n^3+3n^2+10n-5)',
		frac(1,11,'')+'n(n+1)(n+'+frac(1,2,'')+')(n^2+n-1)(n^6+3n^5+'+frac(2,3,'')+'n^4-'+frac(11,3,'')+'n^3+n^2+'+frac(10,3,'')+'n-'+frac(5,3,'')+')']),'','____'),
	ZLR('____...____...____','','____'),
	ZLR('____'+ZLR3('',ZLR('1 2 3 ⋯ n'),'^m','+')+'____'+sum('i',1,'n','i^m','','')+'____'+Eq([frac(1,'m+1','')+'n^2(n+1)^2(2n^2+2n-1)',frac(1,6,'')+'n^2(n+1)^2(n^2+n-'+frac(1,2,'')+')']),'','____'),



	ZLR('____'+zlr('','1 3 5 ⋯ (2n-1)','+')+'____'+khrA([sum('i',1,'n','(2i-1)','',''),sum('i',1,'2n','i','','')+'-'+sum('i',1,'n','2i','','')])+'____n^2','','____'),

	ZLR('____'+ZLR3('',ZLR('1 3 5 ⋯ (2n-1)'),'^2','+')+'____'+Eq([sum('i',1,'n','(2i-1)^2','',''),
		sum('i',1,'2n','i^2','','')+'-'+sum('i',1,'n','(2i)^2','','')])+'____'+
		frac(1,3,'')+'n(2n-1)(2n+1) = '+frac(1,3,'')+'n(4n^2-1)','','____'),
	ZLR('____'+ZLR3('',ZLR('1 3 5 ⋯ (2n-1)'),'^3','+')+'____'+sum('i',1,'n','(2i-1)^3','','')+'____'+frac(1,3,'')+'n^2(2n^2-1)','','____'),
	ZLR('____'+ZLR3('',ZLR('1 3 5 ⋯ (2n-1)'),'^4','+')+'____'+sum('i',1,'n','(2i-1)^4','','')+'____','','____'),
	ZLR('____'+ZLR3('',ZLR('1 3 5 ⋯ (2n-1)'),'^5','+')+'____'+sum('i',1,'n','(2i-1)^5','','')+'____','','____'),

	ZLR('____'+zlr('','1⋅2 2⋅3 3⋅4 ⋯ n(n+1)','+')+'____'+sum('i',1,'n','i(i+1)','','')+'____'+frac(1,3,'')+'n(n+1)(n+2)','','____'),
	ZLR('____'+zlr('','1⋅2⋅3 2⋅3⋅4 3⋅4⋅5 ⋯ n(n+1)(n+2)','+')+'____'+sum('i',1,'n','i(i+1)(i+2)','','')+'____'+frac(1,4,'')+'n(n+1)(n+2)(n+3)','','____'),
	ZLR('____'+zlr('','1⋅2⋅3⋅4 2⋅3⋅4⋅5 ⋯ n(n+1)(n+2)(n+3)','+')+'____'+sum('i',1,'n','i(i+1)(i+2)(i+3)','','')+'____'+frac(1,5,'')+'n(n+1)(n+2)(n+3)(n+4)','','____'),
	ZLR('____'+zlr('','1⋅2⋅3⋯k 2⋅3⋅4⋯(k+1) ⋯ n(n+1)(n+2)⋯(n+k-1)','+')+'____'+Eq([sum('i',1,'n','i(i+1)(i+2)⋯(i+k-1)','',''),sum('i',1,'n',prod('j',0,'k-1','(i+j)','',''),'','')])+
		'____'+Eq([frac(1,'k+1','')+'n(n+1)(n+2)(n+3)⋯(n+k)',frac(1,'k+1','')+prod('i',0,'k','(n+i)','','')]),'','____')
],'wiki').replace(/\n/g,br))



);