/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

var toolSwitch=function(x){
	var G='#'+x+'Ground', hasEditorTxt=/show/.test(x);
	$('.ground:not('+G+')').hide();

	$(G).show();

	

	$('#preview.seled').click();

	if(/solve|graphic/.test(x)){
		$('#iTextFold').not('.seled').click()
	}else{
		
		$('#iTextFold.seled').click()
	}
	$('#go').toggle(/solve|graphic|show/.test(x));

	$('#send2textBox,.snippetSend').toggle(hasEditorTxt);

	if($(G).children().eq(0).html()==''){
		$(G).find('.ground0').html(
			jdetail(eval(x+'s')['index']||'')

		);
	}

}, furi=function(o){
	var g=o.parents('.ground');
	
	var turi=[],iuri=[];
	g.find('.level.seled').each(function(){
		var t=$(this);
		turi.push(t.attr('data-i'));
		iuri.push(t.index());
	});
	if(o.is('.task') || o.is('.level:not(.seled)')){
		turi.push(o.attr('data-tool')||o.attr('data-i'));
		iuri.push(o.index());
	}
	return [turi,iuri];
};

$(function(){
	var toolnames=ZLR('solve graphic show wiki teaching academic science technology culture');

	$('#splash').html(DCtv('rem3',gM('zzllrr Mather')));
	$('#zMather').prepend(
		'<div id=nav>'+
		DCtv('opac" id="navhead',
			Arrf(function(i){
				return SCtv('subhead'+(i=='home'?' seled':'')+'" id="'+i+'" title="'+gM(i),itv('',
					{'home':'home',
					'about':'info_outline',

					}[i]))
			},ZLR('home about')).join('')
/*
			+detail(
				'<select id=searchBy>'+optgrp(gM('Search'), Options(ZLR('Concept QuestionType'),1).join(''))+'</select>'+
				'<input type=search id=search list=searchlist />'+
				'<datalist id=searchlist></datalist>',
				'<div id=searchResults></div>',
				'','id=searchTool hidden'
			)
*/
		)+
		'<div id=navbody>'+
			DCtv('pd2" id="toolnav',
				Arrf(function(i){
					return XML.wrapE('label','<input type=radio name=tool value='+i+' id='+i+' hidden /><span>'+gM(i)+sc)
				},toolnames).join('')
			)+

			
			Arrf(function(i){
				return DCtv('ground" id="'+i+'Ground',DCtv('ground0')+DCtv('ground1')+DCtv('ground2')+DCtv('tasks'))
			},toolnames).join('')+
		dc+
	dc);


	
/*
	$('#searchBy').on('change',function(){
		$('#search').change();
	});
*/

	$('.subhead').on('click',function(e){
		var me=$(this),sel=me.is('.seled'), id=this.id,shft=e.shiftKey || $('#Shift').is('.seled');
		me.addClass('seled').siblings('.subhead').removeClass('seled');
		if(id=='home'){
			$('#navbody').show();
			if(shft && sel){
				window.open('index.html');
			}else{
				OH('');
			}
		}else{
			$('#menu > .toggle').click();
			$('#navbody').hide();

			OHiframe(id,{},1);
			
		}

		$('#iContent,#iTextOpt i:not(#oHClear,#launch)').toggle(id=='home');

	});
	

	$('#menu').nextAll().hide();


	$('[tip]').attr('title',function(){return gM($(this).attr('tip'))});
	
/*
	$('#search').attr('placeholder',gM('search')).on('change keyup',function(){
		var by=$('#searchBy').val(), v=$(this).val().trim(), sR=$('#searchResults'), rA=[], u={}, lA=[], hA=[];
	
		if(by=='Concept'){
			ZLR(concept0).forEach(function(x){
				var x1=gM(x), x2=gM(x,'',lang.en), xc=concepts[x];;
				if(!v || v && (x1+x2).indexOf(v)>-1){
					hA.push(SCtv('sechResult" data-i="'+x,x1));
					
					if(xc){
						xc.forEach(function(y){
							if(!/99/.test(y)){
								lA.push('<option value="'+gM(y)+'" label="'+x1+'"></option>');
							}
						});
						
					}else{
						lA.push('<option value="'+x1+'"></option>');
					}
				}else if(v && xc){
					xc.forEach(function(y){
						if(!/99/.test(y)){
							var y1=gM(y), y2=gM(y,'',lang.en);
							if((y1+y2).indexOf(v)>-1){
								lA.push('<option value="'+gM(y)+'" label="'+x1+'"></option>');
								hA.push(SCtv('sechResult" data-i="'+x+'.'+y,x1));
							}
						}
					});
					
				}
				
			});
		}
		if(by=='QuestionType'){
			ZLR(question0).forEach(function(x){
				var x1=gM(x), x2=gM(x,'',lang.en), xc=questions[x];;
				if(!v || v && (x1+x2).indexOf(v)>-1){
					hA.push(SCtv('sechResult" data-i="'+x,x1));
					
					if(xc){
						xc.forEach(function(y){
							if(!/99/.test(y)){
								lA.push('<option value="'+gM(y)+'" label="'+x1+'"></option>');
							}
						});
						
					}else{
						lA.push('<option value="'+x1+'"></option>');
					}
				}else if(v && xc){
					xc.forEach(function(y){
						if(!/99/.test(y)){
							var y1=gM(y), y2=gM(y,'',lang.en);
							if((y1+y2).indexOf(v)>-1){
								lA.push('<option value="'+gM(y)+'" label="'+x1+'"></option>');
								hA.push(SCtv('sechResult" data-i="'+x+'.'+y,x1));
							}
						}
					});
					
				}
				
			});
		}


		$('#searchlist').html(lA.join(''));
		sR.html(hA.join(''));
		if(hA.length==1){
			sR.find('.sechResult').click();
		}
	});

*/


	
	
	$('.ground1').on('change keyup mouseup','.editorText', function(){
		L[$(this).parents('.ground1').prev().children('.level.seled').attr('data-i').toLowerCase()]=$(this).val()

	}).on('click','.editorText + span > .Clear', function(){
		
		$(this).parent().prev().val('')
	});



	/*
		// no browser support resize event of nodes but window 
	$('#input0Preview').resize(
		preDisplay
	);

	*/

	$('body').on('mouseover', '.task',function(e){
		var me=$(this);
		toolTip(me.attr('data-tip')+' | '+gM('tasktip'));


	}).on('click','[name=tool]',function(){
		var x=this.id;
		L.tool=x;
		losh.tool=x;
		toolSwitch(x);

	}).on('click','.ground .level,.task',function(e){

		var me=$(this),mei=me.attr('data-i'),eg=me.attr('data-eg'),tip=me.attr('data-tip'),mtool=me.attr('data-tool'), shft=e.shiftKey || $('#Shift').is('.seled'),
		pa=me.parent(),p=pa.parents('.ground'),
		tool=p.attr('id').split('Ground')[0],tt=tooltip[tool]||{},
		issolve=tool=='solve', isshow=tool=='show', iswiki=tool=='wiki',
		iswikilike=/wiki|teaching|academic|technology|science|culture/.test(tool),
		istask=me.is('.task');

		if(!istask){
			pa.nextAll().add('#oHTML').empty();
		}


		if(me.is('.seled')){
			me.removeClass('seled');
			$('.inputTip[data-uri^="'+muri+'"]').remove();
			
			if(istask){
				var muri=me.attr('data-uri');
				//$('iframe[src="wiki.html?q='+muri).remove();
				$('iframe[src*="q='+muri).remove();
			}
			
		}else{
			me.addClass('seled');
			if(!istask){
				me.siblings().removeClass('seled');
			}
	
			var fm=furi(me), muri=fm[0].join('/'),lvl=fm[0].length, v=issolve?fm[0][0]:'';


			var ttip=tooltip[v],tipOpr=tooltip[v+' Operation'],str='',str2='',
				ev=eval(tool), evs=eval(tool+'s'), eT=eval(tool+'Then'), 
				width=Math.max($('#input0').width(),$('#input0Tool').width())||200,
				height=Math.max($('#input0').height(),$('#input0Tool').height())||200,
				strc='class=inputTip style="max-height:'+height+'px" data-tool="',
				strrem=itv('remove" tip="Remove','remove_circle');
			
			if(ttip && $('#input0Tip .inputTip[data-tool="'+v+'"]').length<1){
				$('#input0Tip').append(detail(gM(v)+strrem, ttip, '', strc+v+'"'));

				if(tipOpr){
					$('#input0Tip').append(detail(gM(v+' Operation')+strrem, tipOpr, '', strc+v+'"'));
				}
			}

			for(var i=0;i<lvl;i++){
				
				var u0=fm[0].slice(0,i+1).join('/'),m0=fm[0][i],tip0=tt[u0],tip1=tt[u0+' Condition'];
//consolelog(u0, tip0);
				if(tip0 && $('#input0Tip .inputTip[data-uri="'+u0+'"][data-tool="'+m0+'"]').length<1){
					$('#input0Tip').append(detail(gM(m0)+strrem, tip0, '', strc+m0+'" data-uri="'+u0+'"'));

					if(tip1){
						$('#input1Tip').append(detail(gM(m0+' Condition')+strrem, tip1, '', strc+m0+'" data-uri="'+u0+'"'))
					}
				}
			}

//consolelog('路径',fm);

			if(isshow){
				if(/Slide|[VA]R/.test(mei) && $('#input0Type').val()!=mei){
					//$('#input0Type').val(mei).change()
				}
				eT(muri);
				return
			}


			var A=evs[fm[0][0]];


			if(A && !istask){
//console.log('A = ',A);
				if(isStr(A)){


				}else{

					if(lvl>1){
						A=A[fm[1][1]];
						if(isObj(A)){
							A=A[fm[0][1]]
						}
//console.log('此时A = ',A);
						if(lvl==3){
							A=A[fm[1][2]];
							if(isObj(A)){
								A=A[fm[0][2]]
							}
						}
						
					}
//console.log('最终A = ',A);
					if(!isStr(A)){
						for(var i=0,l=A.length;i<l;i++){
							if(isStr(A[i])){
//console.log('lvl = ',lvl,A[i]);


								if(issolve){
									str2+=jdetail(A[i],'','task')

								}else if(lvl==3 && iswikilike){
									str2+=jdetail(A[i],'','task',muri+'/'+A[i])

								}else{
									str+=jdetail(A[i])
								}
								
							}else{
								$.each(A[i], function(k,v){
//console.log('A[i]=',k,v);
									if((issolve || iswikilike) && (!isArr(v) || lvl==3)){
										if(isArr(v)){
											str2+=jdetail(A[i],'','task')
										}else{
											str2+=jdetail(k,'','task')
										}
									
									}else if(lvl==3){
										str+=jdetail(k,'','task')
									}else{
										str+=jdetail(k)
									}

								});
							}
						}
//console.log(lvl, str2);
						pa.next().html(str)
					}
				}
//console.log('lvl= ',lvl,str2);
//console.log('A= ',A);

				if(issolve){
					$('#solveGround .tasks').html(str2);

				}else if(str2 && iswikilike && lvl==3){
					$('#'+tool+'Ground .tasks').html(str2);

				}else if(isStr(A) || isArr(A) && A.length<1){

					if(iswikilike){


						OHiframe(tool,{q:muri},1);
						return;
					}
		
					OH(ev[A] || ev[fm[0].slice(-2).join(' ')]  || ev[fm[0].slice(-2).reverse().join(' ')] || ev[fm[0].join(' ')] || ev[muri] )
				}
			}

			var B=eT[muri];
			if(B){B()}
			
			if(iswikilike && istask){
				if($('iframe[src="'+tool+'.html?q='+muri).length<1){
					OHiframe(tool,{q:muri},1);
	
				}

				return;
			}

			if(shft){//(v.trim()?v.trim()+'\n':'')+
				$('#input0').val(eg||$('#input0Tip .eg').not('.eg2').attr('data-eg')||'');
			}
			
			if(issolve && istask && eg && $('#input0Tip .inputTip[data-uri="'+muri+'"]').length<1){
				var hasC=me.children('.katex').length;
				$('#input0Tip').append(detail((hasC?me.html():tip)+strrem, 
					(hasC && mtool!=tip?tip+br:'')+(me.attr('title')?me.attr('title').replace(/\n/g,br)+br:'')+sceg(eg),
					 1, strc+fm[0].slice(-1).join('')+'" data-uri="'+muri+'"'));
			}
			
		}


	}).on('click','.tasknameOff', function(){
		var me=$(this),p=me.parent(),pp=p.parent(),t=p.text();
		if(!p.siblings().length){
			pp.parent().removeAttr('open')
		}
		p.parent().nextAll('.task.seled').filter(function(){return $(this).text()==t}).click();


	});






	var uo=H_o(sch),t=fn1(uo.t||'');

	
	if(!uo.tool){
		uo.tool=L.tool || 'solve'
	}
	
	$('[name=tool][value='+uo.tool+']').click();
	

	if(uo.uri){
		var us=uo.uri.split('.'), usl=us.length, grd=$('#'+uo.tool+'Ground');
		us[0] && grd.find('.ground0').children().eq(+us[0]).click();
		us[1] && grd.find('.ground1').children().eq(+us[1]).click();
		us[2] && grd.find('.ground2').children().eq(+us[2]).click();
		us[3] && grd.find('.tasks').children().filter(function(){return Arrf(Number,us[3].split('+')).indexOf($(this).index())>-1}).click();
	}


	if(t && uo.tool=='show'){
		$('#showGround .editorText').val(t);
	}

	//$('#search').change();
});

