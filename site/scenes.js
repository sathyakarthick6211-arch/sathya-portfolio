(()=>{
const CDN='https://unpkg.com/lucide-static@0.400.0/icons/';
const K=(n,dl,du,st='',cls='')=>`class="a k k-${n} ${cls}" style="--dl:${dl}s;--du:${du}s;${st}"`;
const Ki=(n,dl,du,st='',cls='')=>`class="k k-${n} ${cls}" style="--dl:${dl}s;--du:${du}s;${st}"`;
const A=(st,cls='')=>`class="a ${cls}" style="${st}"`;
const si=(n,st='')=>`<span class="si" aria-hidden="true" style="--i:url(${CDN}${n}.svg);${st}"></span>`;
const ln=(h,dl,du,ind=0)=>`<span class="ln">${' '.repeat(ind)}${h}<i class="cv k k-wipe" style="--dl:${dl}s;--du:${du}s;--ef:steps(9,end)"></i></span>`;
const t=(c,s)=>`<span class="${c}">${s}</span>`;
const tag=s=>t('tm','&lt;'+s+'&gt;');
const fx=(h,st='')=>`<div class="fx" style="${st}">${h}</div>`;
const S={};
S.html=()=>{const L=[['html',0],['header',2],['nav',2],['main',2],['section',4],['/main',2],['footer',2]];
return `<div ${A('left:14px;top:12px')}>${L.map((l,i)=>ln(tag(l[0]),i*.4,6.5,l[1])).join('')}</div>
<div ${A('right:14px;top:14px;bottom:14px;width:36%;padding:6px;display:flex;flex-direction:column;gap:5px','bx')}>
<i ${Ki('gyt',.4,6.5,'display:block;height:12px;border-radius:3px;background:#F4B323')}></i>
<i ${Ki('gx',.8,6.5,'display:block;height:6px;width:70%;border-radius:3px;background:#C9D6CE')}></i>
<i ${Ki('gyt',1.2,6.5,'display:block;flex:1;border-radius:3px;background:#22553F;padding:5px')}><b ${Ki('pop',1.6,6.5,'display:block;height:60%;border-radius:2px;background:#E8D7B8;opacity:.5')}></b></i>
<i ${Ki('gy',2.4,6.5,'display:block;height:9px;border-radius:3px;background:#7E998B')}></i></div>`};
S.css=()=>fx(`<div ${K('csbox',0,6,'left:16px;top:22px;width:76px;height:76px')}>
<i ${K('third',0,6,'inset:0;background:#F4B323;border-radius:6px')}></i><i ${K('third',-4,6,'inset:0;background:#FBF3E4;border-radius:50%')}></i><i ${K('third',-2,6,'inset:0;background:#C9D6CE;border-radius:24px 4px')}></i></div>
<div ${A('left:110px;top:18px;font-size:10px')}>${t('tc','.box {')}
<span class="st3">  <span ${Ki('third',0,6)}>${t('tg','radius: ')}${t('tm','6px;')}</span><span ${Ki('third',-4,6)}>${t('tg','radius: ')}${t('tm','50%;')}</span><span ${Ki('third',-2,6)}>${t('tg','radius: ')}${t('tm','24px 4px;')}</span></span>
<span class="st3">  <span ${Ki('third',0,6)}>${t('tg','bg: ')}${t('tm','#F4B323;')}</span><span ${Ki('third',-4,6)}>${t('tg','bg: ')}${t('tc','#FBF3E4;')}</span><span ${Ki('third',-2,6)}>${t('tg','bg: ')}${t('tg','#C9D6CE;')}</span></span>
<span class="st3">  <span ${Ki('third',0,6)}>${t('tg','display: ')}${t('tc','grid;')}</span><span ${Ki('third',-4,6)}>${t('tg','scale: ')}${t('tc','.8;')}</span><span ${Ki('third',-2,6)}>${t('tg','rotate: ')}${t('tc','45deg;')}</span></span>
${t('tc','}')}</div>`,'white-space:pre');
S.js=()=>`<div ${A('left:0;right:0;top:0;height:22px;display:flex;align-items:center;gap:12px;padding:0 12px;background:rgba(255,255,255,.06);font-size:10px')}>${t('tc','Console')}${t('td','Network')}${t('td','Sources')}</div>
<div ${A('left:12px;top:30px;font-size:10.5px')}>${ln(t('tm','&gt; ')+t('tc','await fetch(')+t('tm',"'/api/orders'")+t('tc',')'),.2,7)}
<span ${Ki('pop',1.4,7,'display:block')}>${t('td','&lt; Response { status: ')}${t('tm','200')}${t('td',' }')}</span>
${ln(t('tm','&gt; ')+t('tc','orders.filter(o =&gt; o.paid)'),2.1,7)}
<span ${Ki('pop',3.3,7,'display:block')}>${t('td','&lt; Array(42) [ {…}, {…}, … ]')}</span>
<span ${Ki('pop',3.8,7,'display:block')}>${t('tm','&gt; ')}<i ${Ki('blink',0,1,'display:inline-block;width:6px;height:12px;background:#FBF3E4;vertical-align:-2px','')}></i></span></div>`;
S.ts=()=>`<div ${A('left:14px;top:14px;font-size:10.5px;white-space:pre')}>${t('tm','interface ')}${t('tc','User {')}
${t('tg','  id: ')}${t('tm','number')}${t('tg',';')}
${t('tg','  name: ')}${t('tm','string')}${t('tg',';')}
${t('tc','}')}
${t('tm','const ')}${t('tc','u: User = { id: ')}<span style="position:relative;display:inline-block"><span ${Ki('early',0,6,'display:inline-block')}>${t('tr','"7"')}</span><span ${K('late',0,6,'left:0;top:0')}>${t('tm','7')}</span><i ${K('mid',0,6,'left:-1px;right:-1px;bottom:-1px;border-bottom:2px dotted #F59A80')}></i></span>${t('tc',' }')}</div>
<div ${K('mid',0,6,'left:14px;bottom:12px;padding:5px 9px;border-radius:6px;background:#22553F;border:1px solid #F59A80;font-size:9.5px;color:#FBF3E4')}>TS2322: Type 'string' is not assignable to 'number'</div>
<div ${K('late',0,6,'right:12px;bottom:12px;display:flex;align-items:center;gap:6px;padding:4px 10px;border-radius:999px;background:#F4B323;color:#0F2E22;font-size:10px;font-weight:600')}>${si('check')}0 errors</div>`;
S.react=()=>{const N=[['&lt;App/&gt;',120,14,0,1],['&lt;Header/&gt;',60,54,.45],['&lt;Feed/&gt;',180,54,.45],['&lt;Nav/&gt;',28,96,.95],['&lt;Logo/&gt;',88,96,1.1],['&lt;Card/&gt;',152,96,1.25],['&lt;Card/&gt;',212,96,1.4]];
const E=[[120,14,60,54,.3],[120,14,180,54,.3],[60,54,28,96,.8],[60,54,88,96,.8],[180,54,152,96,.8],[180,54,212,96,.8]];
return fx(`<svg class="a" style="left:0;top:0" width="240" height="120" viewBox="0 0 240 120" aria-hidden="true">${E.map(e=>`<line x1="${e[0]}" y1="${e[1]}" x2="${e[2]}" y2="${e[3]}" stroke="rgba(201,214,206,.4)" stroke-width="1.5" ${Ki('pop',e[4],6)}></line>`).join('')}</svg>
${N.map(n=>`<div ${A(`left:${n[1]}px;top:${n[2]}px;transform:translate(-50%,-50%)`)}><span ${Ki('in',n[3],6,'',n[4]?'nd hl':'nd')}>${n[0]}</span></div>`).join('')}
<div ${A('left:152px;top:96px;width:0;height:0')}><i ${K('re',0,6,'left:-30px;top:-14px;width:60px;height:28px;border-radius:999px;border:2px solid #F4B323')}></i></div>
<span ${K('late',0,6,'left:166px;top:0;font-size:9px','tm')}>state → render</span>`)};
S.next=()=>{const pg=(h)=>`<div style="flex:0 0 33.333%;padding:8px;display:flex;flex-direction:column;gap:5px">${h}</div>`;const b=(w,h,c)=>`<i style="display:block;width:${w};height:${h}px;border-radius:3px;background:${c}"></i>`;
return `<div ${A('inset:12px;border-radius:6px;background:#173E2E;overflow:hidden')}>
<div ${A('left:0;right:0;top:0;height:20px;display:flex;align-items:center;gap:6px;padding:0 8px;background:rgba(255,255,255,.06);font-size:9.5px')}>${t('td','sathya.dev')}<span style="position:relative;width:40px;height:14px"><span ${K('third',0,6,'left:0;top:0','tc')}>/</span><span ${K('third',-4,6,'left:0;top:0','tc')}>/blog</span><span ${K('third',-2,6,'left:0;top:0','tc')}>/shop</span></span>
<span style="position:relative;margin-left:auto;width:30px;height:14px">${['SSG','ISR','SSR'].map((x,i)=>`<span ${K('third',[0,-4,-2][i],6,'right:0;top:0;padding:0 5px;border-radius:4px;background:#F4B323;color:#0F2E22;font-weight:700;font-size:8.5px;line-height:14px')}>${x}</span>`).join('')}</span></div>
<div ${A('left:0;right:0;top:20px;bottom:0;overflow:hidden')}><div ${K('slide3',0,6,'left:0;top:0;bottom:0;width:300%;display:flex','')}>
${pg(b('100%',34,'#F4B323')+b('70%',6,'#C9D6CE')+b('50%',6,'#7E998B'))}${pg([1,2,3].map(()=>`<div style="display:flex;gap:6px">${b('28px',20,'#22553F')}<div style="flex:1;display:flex;flex-direction:column;gap:4px;padding-top:3px">${b('80%',5,'#C9D6CE')}${b('50%',5,'#7E998B')}</div></div>`).join(''))}
${pg(`<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:5px">${[0,1,2,3,4,5].map(i=>b('100%',30,i%2?'#E8D7B8':'#22553F')).join('')}</div>`)}</div></div></div>`};
S.node=()=>fx(`<div ${A('left:0;top:28px;width:58px;height:64px;display:grid;place-items:center;font-size:9.5px','bx')}>${si('monitor','width:18px;height:18px;color:#FBF3E4')}<span style="position:absolute;bottom:4px">client</span></div>
<div ${A('right:0;top:28px;width:58px;height:64px;display:grid;place-items:center;font-size:9.5px;border-color:#F4B323','bx')}>${t('tm','node')}<span style="position:absolute;bottom:4px">:3000</span><i ${K('flash',.9,2.4,'inset:-1px;border-radius:6px;background:rgba(244,179,35,.18)')}></i></div>
<i ${A('left:62px;right:62px;top:46px;border-top:1.5px dashed rgba(201,214,206,.3)')}></i><i ${A('left:62px;right:62px;top:74px;border-top:1.5px dashed rgba(201,214,206,.3)')}></i>
${[0,1.2].map(d=>`<div ${A('left:62px;width:82px;top:39px;height:14px')}><div ${K('mx',d,2.4,'inset:0','')}><span ${A('left:0;top:0;padding:0 6px;border-radius:7px;background:#F4B323;color:#0F2E22;font-weight:700;font-size:8.5px;line-height:14px')}>GET</span></div></div>`).join('')}
${[.9,2.1].map(d=>`<div ${A('left:62px;width:84px;top:67px;height:14px')}><div ${K('mxr',d,2.4,'inset:0','')}><span ${A('left:0;top:0;padding:0 6px;border-radius:7px;background:#FBF3E4;color:#0F2E22;font-weight:700;font-size:8.5px;line-height:14px')}>200</span></div></div>`).join('')}
<span ${A('left:62px;top:22px;font-size:9px','td')}>req</span><span ${A('left:62px;top:84px;font-size:9px','td')}>res</span>`);
S.express=()=>{const st=['cors','auth','parse','route'],dl=[.05,1.07,2.13,3.1];
return fx(`<span ${A('left:0;top:2px;font-size:10px','tc')}>app.use(...middleware)</span><i ${A('left:20px;right:20px;top:50px;border-top:1.5px dashed rgba(201,214,206,.3)')}></i>
${st.map((s,i)=>`<div ${A(`left:${30+i*60-26}px;top:37px;width:52px;height:26px;display:grid;place-items:center;background:#173E2E;font-size:9.5px`,'bx')}>${s}<i ${K('flash',dl[i],4,'inset:-1.5px;border-radius:6px;background:#F4B323;mix-blend-mode:normal;opacity:0')}></i><span ${K('flash',dl[i],4,'inset:0;opacity:0;display:grid;place-items:center;color:#0F2E22;font-weight:700')}>${s}</span></div>`).join('')}
<div ${A('left:24px;width:180px;top:72px;height:10px')}><div ${K('mx',0,4,'inset:0;--ef:linear')}><i ${A('left:0;top:0;width:10px;height:10px;border-radius:50%;background:#F4B323')}></i></div></div>
<span ${K('late',0,4,'left:0;top:96px;font-size:10px')}>${t('tm','res')}${t('tc','.json({ ok: true })')}</span>`)};
S.mongo=()=>fx(`<div ${A('left:0;top:0;font-size:10px')}>${ln(t('tc','db.orders.insertOne(doc)'),.2,6)}</div>
<div ${A('left:0;top:28px;font-size:9.5px;white-space:pre','td')}>{\n  item: ${t('tm','"saree"')},\n  qty: ${t('tm','2')},\n  paid: ${t('tm','true')}\n}</div>
<div ${A('left:108px;top:26px;width:132px;height:90px;border-style:dashed;border-color:rgba(244,179,35,.5)','bx')}><span ${A('right:6px;bottom:3px;font-size:9px','tm')}>orders</span></div>
${[0,1,2].map(i=>`<div ${K('drop',.8+i*.8,6,`left:116px;top:${32+i*24}px;width:116px;height:20px;border-radius:4px;background:${i==2?'#F4B323':'#22553F'};color:${i==2?'#0F2E22':'#FBF3E4'};font-size:9px;line-height:20px;padding:0 6px;white-space:nowrap`)}>{ _id: ${101+i}, qty: ${[2,1,3][i]} }</div>`).join('')}
<span ${K('late',0,6,'left:0;top:104px;font-size:9.5px','tm')}>acknowledged: true</span>`);
S.pg=()=>{const R=[['101','Kavya','840'],['102','Arun','1250'],['103','Divya','560'],['104','Rahul','2100']];const row=(c,st)=>`<div style="display:grid;grid-template-columns:36px 1fr 50px;height:18px;align-items:center;${st}">${c.map(x=>`<span>${x}</span>`).join('')}</div>`;
return `<div ${A('left:12px;top:10px;font-size:10px')}>${ln(t('tm','SELECT')+t('tc',' * ')+t('tm','FROM')+t('tc',' orders;'),.1,7)}</div>
<div ${A('left:12px;right:12px;top:34px;font-size:10px')}>${row(['id','customer','total'],'color:#F4B323;border-bottom:1px solid rgba(201,214,206,.25);margin-bottom:2px')}
<div style="position:relative">${R.map((r,i)=>`<div ${Ki('pop',.8+i*.35,7)}>${row(r,'color:#FBF3E4;padding:0 0')}</div>`).join('')}
<i ${K('late',0,7,'left:-6px;right:-6px;top:54px;height:18px;border-radius:4px;background:rgba(244,179,35,.18);border:1px solid #F4B323')}></i>
<i ${K('pop',2.6,7,'left:-6px;right:-6px;top:0;height:18px;border-radius:4px;background:rgba(201,214,206,.08)')}></i></div></div>`};
S.git=()=>fx(`<svg class="a" style="left:0;top:0" width="240" height="120" viewBox="0 0 240 120" aria-hidden="true">
<line x1="8" y1="40" x2="232" y2="40" stroke="#C9D6CE" stroke-width="2"></line>
<polyline points="60,40 86,82 160,82" fill="none" stroke="#F4B323" stroke-width="2" ${Ki('pop',.6,6)}></polyline>
<polyline points="160,82 186,40" fill="none" stroke="#F4B323" stroke-width="2" ${Ki('pop',2,6)}></polyline>
${[[30,40,0,'#C9D6CE'],[60,40,.3,'#C9D6CE'],[104,82,.9,'#F4B323'],[124,40,1.2,'#C9D6CE'],[146,82,1.5,'#F4B323'],[216,40,2.7,'#C9D6CE']].map(c=>`<circle cx="${c[0]}" cy="${c[1]}" r="6" fill="${c[3]}" stroke="#0F2E22" stroke-width="2" ${Ki('in',c[2],6)}></circle>`).join('')}
<circle cx="186" cy="40" r="8" fill="#F4B323" stroke="#FBF3E4" stroke-width="2" ${Ki('in',2.3,6)}></circle></svg>
<i ${K('re',.35,6,'left:174px;top:28px;width:24px;height:24px;border-radius:50%;border:2px solid #F4B323')}></i>
<span ${A('left:8px;top:20px;font-size:9.5px','tc')}>main</span><span ${K('pop',.9,6,'left:96px;top:92px;font-size:9.5px','tm')}>feature/cart</span>
<span ${K('late',0,6,'left:150px;top:6px;font-size:9.5px','tm')}>merge #214</span>`);
S.docker=()=>fx(`<div ${A('left:0;top:0;font-size:10px')}>${ln(t('tm','$ ')+t('tc','docker compose up -d'),.1,6)}</div>
<div ${A('left:30px;right:30px;top:102px;height:8px;border-radius:4px;background:#22553F')}></div><span ${A('left:30px;top:110px;font-size:8.5px','td')}>host</span>
${[['db',44,52,1.4],['cache',122,52,1.8],['web',44,77,.6],['api',122,77,1]].map(c=>`<div ${K('drop',c[3],6,`left:${c[1]}px;top:${c[2]}px;width:74px;height:22px;border-radius:4px;background:#173E2E;border:1.5px solid ${c[0]=='web'?'#F4B323':'rgba(201,214,206,.4)'};display:flex;align-items:center;gap:6px;padding:0 7px;font-size:9.5px;color:#FBF3E4`)}><i style="width:6px;height:6px;border-radius:50%;background:#7FD69E"></i>${c[0]}</div>`).join('')}
<span ${K('late',0,6,'left:150px;top:18px;font-size:9px','tm')}>4 running</span>`);
S.ci=()=>{const st=['install','lint','test','deploy'];
return fx(`<span ${A('left:0;top:0;font-size:9.5px','td')}>deploy.yml · on: push</span>
${[0,1,2].map(i=>`<i ${A(`left:${34+i*66}px;top:46px;width:38px;height:2px;background:rgba(201,214,206,.25)`)}></i><i ${K('gx',.5+i*.6,6,`left:${34+i*66}px;top:46px;width:38px;height:2px;background:#F4B323`)}></i>`).join('')}
${st.map((s,i)=>`<div ${A(`left:${6+i*66}px;top:33px;width:28px;height:28px;border-radius:50%;border:2px solid rgba(201,214,206,.4)`)}></div><div ${K('in',.2+i*.6,6,`left:${6+i*66}px;top:33px;width:28px;height:28px;border-radius:50%;background:#F4B323;color:#0F2E22;display:grid;place-items:center`)}>${si('check','width:14px;height:14px')}</div><span ${A(`left:${20+i*66}px;top:66px;transform:translateX(-50%);font-size:9.5px`,'tc')}>${s}</span>`).join('')}
<span ${K('late',0,6,'left:0;top:98px;font-size:10px','tm')}>Deployed to production · 1m 42s</span>`)};
S.jest=()=>{const T=['adds item to cart','applies coupon code','calculates GST','handles empty cart'];
return `<div ${A('left:14px;top:12px;font-size:10px')}>${t('td','$ npm test -- cart')}</div><span ${K('late',0,6,'right:12px;top:10px;padding:1px 7px;border-radius:4px;background:#F4B323;color:#0F2E22;font-weight:700;font-size:9.5px')}>PASS</span>
<div ${A('left:14px;top:34px;font-size:10px;display:grid;gap:4px')}>${T.map((x,i)=>`<div style="display:flex;align-items:center;gap:8px"><span style="position:relative;width:10px;height:10px"><i class="a cd" style="inset:0;opacity:.3"></i><i ${K('in',.5+i*.45,6,'inset:0;border-radius:50%;background:#7FD69E')}></i></span><span class="tc">${x}</span><span ${Ki('pop',.5+i*.45,6,'','td')}>${[3,1,4,2][i]}ms</span></div>`).join('')}</div>
<div ${K('late',0,6,'left:14px;bottom:12px;font-size:10px')}>${t('tg','Tests: ')}${t('tm','24 passed')}${t('tg',', 24 total')}</div>`};
S.figma=()=>`<div ${A('inset:10px;border-radius:6px;background:#FBF3E4;overflow:hidden')}>${fx(`<span ${A('left:0;top:2px;font-size:9px;color:#5E6B63')}>Home / Desktop</span>
<div ${K('rect',0,6,'left:60px;top:32px;width:80px;height:54px;background:#FCEFCC;border:1.5px solid #DA9C0E')}><i ${A('left:-4px;top:-4px;width:6px;height:6px;background:#fff;border:1.5px solid #DA9C0E')}></i><i ${A('right:-4px;bottom:-4px;width:6px;height:6px;background:#fff;border:1.5px solid #DA9C0E')}></i></div>
<span ${K('late',0,6,'left:78px;top:90px;padding:1px 6px;border-radius:3px;background:#DA9C0E;color:#fff;font-size:8.5px')}>80 × 54</span>
<div ${K('cur',0,6,'left:24px;top:24px;color:#0F2E22;--ef:cubic-bezier(.45,0,.25,1)')}>${si('mouse-pointer-2','width:16px;height:16px')}</div>
<div ${K('drift',0,5,'left:176px;top:70px;color:#B57F05;--ef:ease-in-out')}>${si('mouse-pointer-2','width:14px;height:14px')}<span style="position:absolute;left:12px;top:12px;padding:1px 6px;border-radius:4px;background:#F4B323;color:#0F2E22;font:600 8.5px var(--font-display);white-space:nowrap">Priya</span></div>`,'margin-top:-62px')}</div>`;
S.a11y=()=>fx(`${['Home','Shop','Cart'].map((b,i)=>`<span ${A(`left:${8+i*76}px;top:14px;width:66px;height:26px;border-radius:999px;background:#22553F;color:#FBF3E4;display:grid;place-items:center;font:600 10px var(--font-display)`)}>${b}</span>`).join('')}
<i ${K('focus3',0,6,'left:4px;top:10px;width:74px;height:34px;border-radius:999px;border:2.5px solid #F4B323;--st:76px;--ef:cubic-bezier(.65,0,.35,1)')}></i>
<span ${A('left:8px;top:56px;font-size:9.5px','td')}>Screen reader:</span>
<span ${A('left:8px;top:70px;height:16px;width:220px;font-size:10px')}>${['"Home, link"','"Shop, link"','"Cart, 3 items, button"'].map((x,i)=>`<span ${K('third',[0,-4,-2][i],6,'left:0;top:0','tc')}>${x}</span>`).join('')}</span>
<span ${A('left:8px;top:96px;display:flex;gap:6px;align-items:center;font-size:9.5px','tg')}>Contrast 7.4:1 <b style="padding:1px 6px;border-radius:4px;background:#F4B323;color:#0F2E22">AAA</b></span>`);
/* projects */
const P={};
P.streamline=()=>{const C=['#F4B323','#22553F','#C9D6CE','#173E2E','#F7C553','#E8D7B8','#2F6A4F','#FBE0A0'];const row=(top,lab,du,dir,off)=>{const tiles=[...Array(8)].map((_,i)=>`<i style="flex:none;width:58px;height:34px;border-radius:4px;background:${C[(i+off)%8]};${i%3==1?'box-shadow:inset 0 -4px 0 #F4B323':''}"></i>`).join('');
return `<span ${A(`left:12px;top:${top}px;font:600 9px var(--font-display);color:#FBF3E4`)}>${lab}</span><div ${K(dir,0,du,`left:12px;top:${top+14}px;display:flex;gap:6px;--ef:linear`)}>${tiles}${tiles}</div>`};
return `<div class="tb"><i></i><i></i><i></i><span>streamline.app/browse</span></div>${row(30,'Trending Now',16,'scroll',0)}${row(82,'Because you watched Kaithi',22,'scrollr',3)}${row(134,'Tamil Cinema Classics',13,'scroll',5)}`};
P.kadai=()=>{const card=(bg,i,nm,pr)=>`<div style="background:#fff;border:1px solid #EFE4D0;border-radius:8px;padding:6px;display:flex;flex-direction:column;gap:5px"><i style="display:block;height:66px;border-radius:5px;background:${bg}"></i><b style="font:600 9px/6px var(--font-display);color:#0F2E22;height:6px;white-space:nowrap;overflow:hidden">${nm}</b><span style="font:700 10px/12px var(--font-display);color:#0F2E22">${pr}</span><span class="${i==1?'k k-tap':''}" style="--dl:0s;--du:5s;display:block;height:18px;border-radius:9px;background:#0F2E22;color:#F4B323;font:600 8.5px/18px var(--font-display);text-align:center">Add to cart</span></div>`;
return `<div class="tb"><i></i><i></i><i></i><span>kadai.store</span></div>
<span ${A('left:12px;top:24px;font:700 19px/1 var(--font-script);color:#0F2E22')}>Kadai</span>
<div ${A('left:72px;top:32px;display:flex;gap:8px')}><i style="width:26px;height:5px;border-radius:3px;background:#E8D7B8"></i><i style="width:20px;height:5px;border-radius:3px;background:#E8D7B8"></i><i style="width:30px;height:5px;border-radius:3px;background:#E8D7B8"></i></div>
<div ${A('right:12px;top:26px;width:20px;height:20px;color:#0F2E22')}>${si('shopping-bag','width:18px;height:18px')}<span ${K('bump',0,5,'right:-6px;top:-5px;width:13px;height:13px;border-radius:50%;background:#F4B323;font:700 8px/13px var(--font-display);text-align:center;color:#0F2E22')}><span ${K('swa',0,5,'inset:0')}>2</span><span ${K('swb',0,5,'inset:0')}>3</span></span></div>
<div ${A('left:12px;right:12px;top:54px;display:grid;grid-template-columns:repeat(3,1fr);gap:10px')}>${card('#FBE0A0',0,'Kanchi silk saree','₹4,890')}${card('#C9D6CE',1,'Handloom kurta','₹1,240')}${card('#F5E9D4',2,'Brass diya set','₹860')}</div>
<div ${K('flyk',0,5,'inset:0;--tx:calc(50% - 22px);--ty:-132px')}><i ${A('left:50%;top:163px;width:10px;height:10px;margin-left:-5px;border-radius:50%;background:#F4B323;box-shadow:0 0 0 3px rgba(244,179,35,.3)')}></i></div>`};
P.pulse=()=>{const M=[['Standup in 5?','l'],['On my way!','r'],['Pushed the hotfix to staging','l'],['Deploying now','r']];
return `<div class="tb"><i></i><i></i><i></i><span>pulse.chat/design-team</span></div>
<div ${A('left:0;top:20px;bottom:0;width:30%;background:#F5E9D4;padding:10px 8px;display:flex;flex-direction:column;gap:8px')}>${['#F4B323','#22553F','#C9D6CE','#DA9C0E'].map((c,i)=>`<div style="display:flex;align-items:center;gap:6px;padding:4px;border-radius:6px;${i==0?'background:#fff':''}"><i style="flex:none;width:16px;height:16px;border-radius:50%;background:${c}"></i><i style="flex:1;height:5px;border-radius:3px;background:#E8D7B8"></i></div>`).join('')}</div>
<div ${A('left:30%;right:0;top:20px;bottom:0;padding:9px 12px;display:flex;flex-direction:column;gap:6px')}><div style="display:flex;align-items:baseline;gap:6px;font:600 10px var(--font-display);color:#0F2E22">Design Team <span style="font:500 8.5px var(--font-body);color:#2F9E5B">4 online</span></div>
${M.map((m,i)=>`<div ${Ki('pop',i*.9,7,`align-self:${m[1]=='l'?'flex-start':'flex-end'};padding:4px 9px;border-radius:10px;font:500 9.5px/1.3 var(--font-body);${m[1]=='l'?'background:#fff;border:1px solid #EFE4D0;color:#0F2E22':'background:#0F2E22;color:#FBF3E4'}`)}>${m[0]}</div>`).join('')}
<div ${Ki('late',0,7,'align-self:flex-start;display:flex;gap:3px;padding:7px 9px;border-radius:10px;background:#fff;border:1px solid #EFE4D0')}>${[0,.15,.3].map(d=>`<i ${Ki('bob',d,.9,'width:5px;height:5px;border-radius:50%;background:#5E6B63;display:block;--ef:ease-in-out')}></i>`).join('')}</div></div>`};
P.skycast=()=>{const H=[.55,.7,.85,1,.9,.75,.6,.45];
return `<div class="tb"><i></i><i></i><i></i><span>skycast.dev</span></div>
<span ${A('left:16px;top:30px;font:800 42px/1 var(--font-display);color:#FBF3E4;letter-spacing:-.04em')}>31°</span><span ${A('left:16px;top:76px;font:500 10px var(--font-display);color:#C9D6CE')}>Bengaluru · Sunny · H 33° L 21°</span>
<i ${K('spin',0,18,'right:22px;top:26px;width:62px;height:62px;border-radius:50%;border:2.5px dashed #F4B323;--ef:linear')}></i><i ${A('right:33px;top:37px;width:40px;height:40px;border-radius:50%;background:#F4B323')}></i>
<div ${K('drift',0,6,'right:44px;top:60px;width:56px;height:22px;--ef:ease-in-out')}><i ${A('left:0;bottom:0;width:56px;height:14px;border-radius:7px;background:#FBF3E4')}></i><i ${A('left:10px;bottom:6px;width:22px;height:22px;border-radius:50%;background:#FBF3E4')}></i><i ${A('left:26px;bottom:4px;width:18px;height:18px;border-radius:50%;background:#FBF3E4')}></i></div>
<div ${A('left:16px;right:16px;bottom:10px;height:72px;display:flex;gap:8px;align-items:flex-end')}>${H.map((h,i)=>`<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;height:100%;justify-content:flex-end"><i ${Ki('gy',i*.12,6,`display:block;width:100%;height:${h*46}px;border-radius:4px 4px 2px 2px;background:${i==3?'#F4B323':'#22553F'}`)}></i><span style="font-size:8px;color:#7E998B">${['9a','10a','11a','12p','1p','2p','3p','4p'][i]}</span></div>`).join('')}</div>`};
P.flowboard=()=>{const col=(h,n,cards)=>`<div style="padding:0 4px"><div style="background:#F5E9D4;border-radius:8px;padding:6px;height:100%;display:flex;flex-direction:column;gap:6px"><div style="display:flex;justify-content:space-between;font:600 9px/14px var(--font-display);color:#0F2E22">${h}<span style="color:#5E6B63">${n}</span></div>${cards}</div></div>`;
const cd=(c,l)=>`<div style="height:30px;border-radius:6px;background:#fff;border:1px solid #EFE4D0;padding:5px 7px;display:flex;flex-direction:column;justify-content:space-between"><i style="height:5px;width:${l}%;border-radius:3px;background:#E8D7B8"></i><i style="width:10px;height:10px;border-radius:50%;background:${c}"></i></div>`;
return `<div class="tb"><i></i><i></i><i></i><span>flowboard.app/sprint-24</span></div>
<div ${A('left:10px;right:10px;top:28px;bottom:10px;display:grid;grid-template-columns:repeat(3,1fr)')}>${col('To do','4',cd('#22553F',70)+cd('#DA9C0E',50)+'<div style="height:30px"></div>'+cd('#C9D6CE',60))}${col('In progress','2',cd('#F4B323',80))}${col('Done','7',cd('#2F9E5B',55)+'<div style="height:30px"></div>'+cd('#22553F',40))}</div>
<div ${K('col3',0,6,'left:10px;right:10px;top:126px;height:30px;--ef:cubic-bezier(.65,0,.35,1)')}><div style="width:33.333%;height:100%;padding:0 10px"><div style="height:100%;border-radius:6px;background:#FCEFCC;border:1.5px solid #F4B323;padding:4px 7px;font:600 8.5px/1.2 var(--font-display);color:#0F2E22;box-shadow:0 6px 14px rgba(15,46,34,.15)">Fix checkout bug<br><span style="font-weight:500;color:#5E6B63">FB-112</span></div></div></div>`};
P.ledgerly=()=>{const B=[.45,.7,.5,.85,.6,1,.75];
return `<div class="tb"><i></i><i></i><i></i><span>ledgerly.in/overview</span></div>
<span ${A('left:14px;top:30px;font-size:9px','td')}>Balance</span><span ${A('left:14px;top:42px;font:700 22px/1 var(--font-display);color:#FBF3E4;letter-spacing:-.02em')}>₹1,24,560</span><span ${A('left:14px;top:68px;font:600 9.5px var(--font-display)','tm')}>+12.4% this month</span>
<div ${A('left:14px;bottom:14px;width:52%;height:86px;display:flex;gap:6px;align-items:flex-end;border-bottom:1px solid rgba(201,214,206,.25)')}>${B.map((h,i)=>`<i ${Ki('gy',i*.15,6,`display:block;flex:1;height:${h*100}%;border-radius:3px 3px 0 0;background:${i==5?'#F4B323':'#22553F'}`)}></i>`).join('')}</div>
<div ${A('right:14px;top:30px;width:38%;display:flex;flex-direction:column;gap:7px')}>${[['Groceries','−₹1,240','tc'],['Salary','+₹85,000','tm'],['Rent','−₹22,000','tc'],['SIP · Index fund','−₹10,000','tc']].map((r,i)=>`<div ${Ki('pop',.6+i*.5,6,'display:flex;justify-content:space-between;gap:6px;padding:6px 8px;border-radius:6px;background:#173E2E;font-size:9px')}><span class="tg" style="white-space:nowrap;overflow:hidden">${r[0]}</span><span class="${r[2]}">${r[1]}</span></div>`).join('')}</div>`};
P.inkwell=()=>`<div class="tb"><i></i><i></i><i></i><span>inkwell.io/editor</span></div>
<div ${A('left:0;top:20px;bottom:0;width:22%;background:#0F2E22;padding:10px;display:flex;flex-direction:column;gap:8px')}><b style="font:700 15px/1 var(--font-script);color:#F4B323">Inkwell</b>${[80,60,70,50].map((w,i)=>`<i style="height:5px;width:${w}%;border-radius:3px;background:${i==1?'#F4B323':'rgba(201,214,206,.3)'}"></i>`).join('')}</div>
<div ${A('left:22%;right:0;top:20px;bottom:0;padding:10px 14px;display:flex;flex-direction:column;gap:7px')}><div style="display:flex;gap:5px;align-items:center">${['B','I','H1','“'].map(x=>`<span style="width:16px;height:16px;border-radius:4px;border:1px solid #E8D7B8;font:700 8px/14px var(--font-display);text-align:center;color:#33443B">${x}</span>`).join('')}<span ${Ki('tap',3.2,7,'margin-left:auto;padding:3px 10px;border-radius:999px;background:#0F2E22;color:#F4B323;font:600 9px var(--font-display)')}>Publish</span></div>
<div style="font:700 14px/1.2 var(--font-display);color:#0F2E22">${ln('Shipping a design system',.2,7)}</div>
${[96,88,92,60].map((w,i)=>`<i ${Ki('gx',1+i*.3,7,`display:block;height:5px;width:${w}%;border-radius:3px;background:#E8D7B8`)}></i>`).join('')}
<i ${Ki('pop',2.4,7,'display:block;height:42px;border-radius:6px;background:#FBE0A0')}></i></div>
<div ${K('late',0,7,'right:12px;bottom:12px;display:flex;align-items:center;gap:6px;padding:6px 10px;border-radius:8px;background:#0F2E22;color:#FBF3E4;font:600 9px var(--font-display)')}>${si('check','width:11px;height:11px;color:#F4B323')}Published</div>`;
P.raaga=()=>`<div class="tb"><i></i><i></i><i></i><span>raaga.fm/now-playing</span></div>
<div ${K('spin',0,4,'left:52px;top:40px;width:116px;height:116px;border-radius:50%;background:#06170F;box-shadow:inset 0 0 0 10px #0A2218,inset 0 0 0 11px rgba(201,214,206,.2),inset 0 0 0 24px #0A2218,inset 0 0 0 25px rgba(201,214,206,.2);--ef:linear')}><i ${A('left:44px;top:44px;width:28px;height:28px;border-radius:50%;background:#F4B323')}></i><i ${A('left:56px;top:8px;width:4px;height:16px;border-radius:2px;background:rgba(251,243,228,.4)')}></i></div>
<div ${A('left:16px;top:44px;width:108px;height:108px;border-radius:8px;background:#F7C553;display:grid;place-items:center;box-shadow:0 10px 24px rgba(0,0,0,.3)')}><span style="font:700 46px/1 var(--font-script);color:#0F2E22">R.</span></div>
<div ${A('left:56%;right:14px;top:44px;display:flex;flex-direction:column;gap:6px')}><b style="font:600 13px/1.2 var(--font-display);color:#FBF3E4">Monsoon Letters</b><span style="font-size:9.5px;color:#C9D6CE">Lo-fi Chennai · Mix 04</span>
<div style="display:flex;gap:3px;align-items:flex-end;height:18px">${[.8,1.1,.9,1.3,1,.7].map((d,i)=>`<i ${Ki('bar',-i*.2,d,'display:block;width:4px;height:18px;border-radius:2px;background:#F4B323;--ef:ease-in-out')}></i>`).join('')}</div>
<div style="position:relative;height:4px;border-radius:2px;background:rgba(201,214,206,.2);margin-top:8px;overflow:hidden"><i ${K('prog',0,12,'inset:0;background:#F4B323;--ef:linear')}></i></div>
<div style="display:flex;justify-content:space-between;font-size:8.5px;color:#7E998B"><span>1:12</span><span>3:40</span></div>
<div style="display:flex;gap:14px;align-items:center;color:#FBF3E4">${si('skip-back','width:14px;height:14px')}<span style="width:28px;height:28px;border-radius:50%;background:#F4B323;color:#0F2E22;display:grid;place-items:center">${si('pause','width:13px;height:13px')}</span>${si('skip-forward','width:14px;height:14px')}</div></div>`;
/* hobbies */
const H={};
H.photo=()=>`<i ${K('shot',0,3,'inset:0;background:#FBF3E4;z-index:3;--ef:ease-out')}></i>`+fx(`<div ${A('left:86px;top:20px;width:34px;height:14px;border-radius:4px;background:#22553F')}></div><i ${K('press',1.8,3,'left:146px;top:22px;width:16px;height:8px;border-radius:3px;background:#F4B323')}></i>
<div ${A('left:66px;top:30px;width:108px;height:68px;border-radius:12px;background:#22553F')}></div><i ${A('left:76px;top:38px;width:12px;height:7px;border-radius:2px;background:#C9D6CE')}></i>
<div ${A('left:94px;top:38px;width:52px;height:52px;border-radius:50%;background:#0A2218;border:4px solid #FBF3E4')}></div><i ${K('shut',0,3,'left:104px;top:48px;width:32px;height:32px;border-radius:50%;background:#F4B323')}></i>
<span ${A('left:66px;top:104px;font-size:9.5px','tg')}>1/250 · f/2.8 · ISO 200</span>`);
H.cricket=()=>fx(`<i ${A('left:0;right:0;top:104px;border-top:1.5px dashed rgba(201,214,206,.35)')}></i>${[20,28,36].map(x=>`<i ${A(`left:${x}px;top:60px;width:4px;height:44px;border-radius:2px;background:#FBF3E4`)}></i>`).join('')}<i ${A('left:18px;top:57px;width:24px;height:3px;border-radius:2px;background:#F4B323')}></i>
<i ${K('swing',0,2.8,'left:56px;top:48px;width:9px;height:54px;border-radius:4px 4px 3px 3px;background:#E8D7B8;--ef:cubic-bezier(.5,0,.3,1)')}></i>
<i ${K('ball',0,2.8,'left:216px;top:76px;width:11px;height:11px;border-radius:50%;background:#F4B323;--bx:-148px;--by:4px;--hx:-30px;--hy:-78px;--ef:linear')}></i>
<span ${K('late',0,2.8,'left:150px;top:6px;font:700 12px var(--font-display)','tm')}>FOUR!</span>`);
H.gaming=()=>fx(`<div ${A('left:40px;top:26px;width:160px;height:76px;border-radius:38px;background:#22553F')}></div><i ${A('left:62px;top:59px;width:30px;height:10px;border-radius:2px;background:#C9D6CE')}></i><i ${A('left:72px;top:49px;width:10px;height:30px;border-radius:2px;background:#C9D6CE')}></i>
${[[156,40,'#F4B323'],[140,56,'#FBF3E4'],[172,56,'#C9D6CE'],[156,72,'#F7C553']].map((b,i)=>`<i ${K('press',i*.6,2.4,`left:${b[0]}px;top:${b[1]}px;width:14px;height:14px;border-radius:50%;background:${b[2]}`)}></i>`).join('')}
<span ${K('popup',0,2.4,'left:176px;top:16px;font:700 11px var(--font-display)','tm')}>+100</span><span ${A('left:96px;top:88px;font-size:9px','td')}>P1 · LVL 12</span>`);
H.music=()=>fx(`${si('music','position:absolute;left:4px;top:44px;width:24px;height:24px;color:#F4B323')}${[...Array(11)].map((_,i)=>`<i ${K('bar',-i*.13,.8+(i*7%5)*.15,`left:${44+i*16}px;top:18px;width:9px;height:86px;border-radius:4px;background:${i%2?'#FBF3E4':'#F4B323'};--ef:ease-in-out`)}></i>`).join('')}`);
H.travel=()=>fx(`<i ${A('left:30px;top:30px;width:180px;height:180px;border-radius:50%;border:2px dashed rgba(201,214,206,.4)')}></i>
<div ${K('plane',0,4,'left:120px;top:120px;width:0;height:0;--ef:cubic-bezier(.45,0,.3,1)')}><span ${A('left:-11px;top:-101px;color:#F4B323;transform:rotate(45deg)')}>${si('plane','width:22px;height:22px')}</span></div>
${[[28,'Bengaluru',0],[194,'Hampi',.1]].map(p=>`<span ${A(`left:${p[0]}px;top:70px;color:#FBF3E4`)}>${si('map-pin','width:18px;height:18px')}</span><span ${A(`left:${p[0]-14}px;top:92px;width:46px;text-align:center;font-size:9px`,'tg')}>${p[1]}</span>`).join('')}`);
H.oss=()=>{let g='';for(let i=0;i<70;i++){const b=[.15,.35,.6,1][(i*7+3)%4];g+=`<i ${Ki('glow',-((i*37)%23)/5,3+((i*11)%5)*.6,`display:block;width:10px;height:10px;border-radius:2px;background:#F4B323;opacity:${b};--ef:ease-in-out`)}></i>`}
return fx(`<div ${A('left:30px;top:10px;display:grid;grid-template-columns:repeat(14,10px);gap:3px')}>${g}</div>
<div ${K('late',0,5,'left:30px;top:90px;display:flex;align-items:center;gap:6px;padding:3px 9px;border-radius:999px;background:#22553F;color:#FBF3E4;font-size:9.5px')}>${si('git-pull-request','width:11px;height:11px;color:#F4B323')}#482 merged · react-aria</div>`)};
/* hero screen panels */
const HP=[
{k:'skills',l:'Skills',s:'16 technologies',h:`<div class="sp-grid" style="grid-template-columns:repeat(4,minmax(0,1fr))">${[['HTML',.95],['CSS',.92],['JavaScript',.93],['React',.92],['TypeScript',.86],['Node.js',.85],['Next.js',.84],['Git',.9]].map((x,i)=>`<div class="sp-chip pi" style="--k:${i}">${x[0]}<div class="sp-bar"><i style="--v:${x[1]}"></i></div></div>`).join('')}</div>`},
{k:'projects',l:'Projects',s:'8 case studies',h:`<div class="sp-grid" style="grid-template-columns:repeat(3,minmax(0,1fr))">${[['Streamline','#0F2E22'],['Kadai','#FBE0A0'],['Pulse Chat','#C9D6CE'],['Skycast','#22553F'],['Flowboard','#F5E9D4'],['Ledgerly','#F4B323']].map((x,i)=>`<div class="sp-tile pi" style="--k:${i}"><i style="background:${x[1]}"></i><b>${x[0]}</b></div>`).join('')}</div>`},
{k:'experience',l:'Experience',s:'4+ years',h:`<div class="sp-tl">${[['Frontend Engineer II · Zentrix','Mar 2025 – Present'],['Full-stack Developer · Kovai Labs','Jul 2023 – Feb 2025'],['Junior Web Developer · Brightloop','Jul 2022 – Jun 2023']].map((x,i)=>`<div class="pi" style="--k:${i}"><b>${x[0]}</b><span>${x[1]}</span></div>`).join('')}</div>`},
{k:'internships',l:'Internships',s:'2 teams',h:`<div class="sp-grid" style="grid-template-columns:1fr 1fr">${[['Nila Health','Web Dev Intern · 2022'],['Tessel Software','Frontend Intern · 2021']].map((x,i)=>`<div class="sp-card pi" style="--k:${i}"><b>${x[0]}</b><span>${x[1]}</span><i class="sp-line" style="width:90%"></i><i class="sp-line" style="width:70%"></i><i class="sp-line" style="width:80%"></i></div>`).join('')}</div>`},
{k:'certifications',l:'Certifications',s:'6 verified',h:`<div class="sp-grid" style="grid-template-columns:repeat(3,minmax(0,1fr))">${[['M','Meta Front-End'],['AWS','Cloud Practitioner'],['MDB','MongoDB Dev'],['GH','GitHub Foundations'],['G','Google UX'],['fCC','JS Algorithms']].map((x,i)=>`<div class="sp-cert pi" style="--k:${i}"><i>${x[0]}</i><b>${x[1]}</b></div>`).join('')}</div>`},
{k:'hobbies',l:'Hobbies',s:'off the clock',h:`<div class="sp-grid" style="grid-template-columns:repeat(3,minmax(0,1fr))">${[['camera','Photography'],['trophy','Cricket'],['gamepad-2','Gaming'],['music','Music'],['plane','Travel'],['git-pull-request','Open source']].map((x,i)=>`<div class="sp-hob pi" style="--k:${i}"><span class="ic" style="--i:url(${CDN}${x[0]}.svg)"></span>${x[1]}</div>`).join('')}</div>`}];
window.SCENES={skill:S,project:P,hobby:H,heroPanels:HP,icon:si};
})();
