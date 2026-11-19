(()=>{
const D=window.SATHYA,SC=window.SCENES,CDN='https://unpkg.com/lucide-static@0.400.0/icons/';
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const ic=(n,c='')=>`<span class="ic ${c}" aria-hidden="true" style="--i:url(${CDN}${n}.svg)"></span>`;
const root=document.documentElement;
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const FINE=matchMedia('(hover:hover) and (pointer:fine)').matches;
if(RM)root.classList.add('rm');
const lvl=v=>v>=90?'Expert':v>=80?'Advanced':'Proficient';
const yrs=y=>(y%1?y:y)+' yrs';

/* ---------- render ---------- */
$$('[data-ic]').forEach(e=>{e.classList.add('ic');e.setAttribute('aria-hidden','true');e.style.setProperty('--i',`url(${CDN}${e.dataset.ic}.svg)`)});
$('#scrTrack').innerHTML=SC.heroPanels.map((p,i)=>`<div class="scr-panel" style="--i:${i}" aria-hidden="${i?'true':'false'}"><div class="sp-h"><b>${p.l}</b><span>${p.s}</span></div>${p.h}</div>`).join('');
$('#scrDots').innerHTML=SC.heroPanels.map((p,i)=>`<button type="button" aria-label="Show ${p.l} preview" aria-current="${!i}"></button>`).join('');

const groups=['Frontend','Backend','Tools / DevOps','Design'];
$('#skillGroups').innerHTML=groups.map(g=>{const L=D.skills.filter(s=>s.group===g);
return `<div class="sg"><div class="sg-h rv"><h3>${g}</h3><span>${L.length} skills</span></div><div class="grid-skills" data-stagger>${L.map(s=>`<article class="card skill rv">
<div class="scene" role="img" aria-label="${s.alt}">${SC.skill[s.id]()}</div>
<div class="skill-body"><div class="skill-top"><h4>${s.name}</h4><span>${yrs(s.years)}</span></div>
<div class="lvl"><div class="lvl-row"><span>${lvl(s.level)}</span><span>${s.level}%</span></div><div class="lvl-bar" role="progressbar" aria-label="${s.name} proficiency" aria-valuenow="${s.level}" aria-valuemin="0" aria-valuemax="100"><i style="--v:${s.level/100}"></i></div></div>
<p class="skill-proj">${ic('folder-open')}Used in ${s.projects} projects</p>
<ul class="tags" aria-label="Key libraries">${s.subs.map(x=>`<li>${x}</li>`).join('')}</ul></div></article>`).join('')}</div></div>`}).join('');

const cats=['All','Frontend','Full-stack','UI Clone','Tools'];
$('#filters').innerHTML=cats.map(c=>`<button type="button" class="filter" aria-pressed="${c==='All'}" data-f="${c}">${c}<sup>${c==='All'?D.projects.length:D.projects.filter(p=>p.cats.includes(c)).length}</sup></button>`).join('')+'<p class="proj-count" id="projCount" aria-live="polite"></p>';
const thumb=(p,cls='')=>`<div class="scene thumb ${['kadai','pulse','flowboard','inkwell'].includes(p.id)?'light':''} ${cls}" role="img" aria-label="Animated preview of ${p.title}">${SC.project[p.id]()}</div>`;
$('#projGrid').innerHTML=D.projects.map(p=>`<article class="card proj rv" data-cats="${p.cats.join('|')}">
<div class="proj-thumb">${thumb(p)}<span class="pill">${p.cats[0]}</span></div>
<div class="proj-body"><div class="proj-meta"><span>${p.role}</span><i></i><span>${p.year}</span></div>
<h3><button type="button" class="proj-open" data-id="${p.id}" aria-haspopup="dialog">${p.title}</button></h3><p>${p.summary}</p>
<ul class="tags" aria-label="Tech stack">${p.stack.map(t=>`<li>${t}</li>`).join('')}</ul>
<div class="proj-links"><a class="lnk" href="https://${p.id}.sathya.dev" target="_blank" rel="noopener">${ic('external-link')}Live Demo</a><a class="lnk" href="https://github.com/sathya-dev/${p.id}" target="_blank" rel="noopener">${ic('github')}GitHub</a><span class="proj-more" aria-hidden="true">Case study${ic('arrow-right')}</span></div></div></article>`).join('');
$('#projGrid').setAttribute('data-stagger','');

$('#timeline').innerHTML='<i class="tl-fill" id="tlFill" aria-hidden="true"></i>'+D.experience.map((e,i)=>`<li class="tl-item rv ${i%2?'rv-r':'rv-l'}"><span class="tl-dot" aria-hidden="true"></span><article class="card tl-card">
<span class="pill">${ic('calendar')}${e.dates}</span><h3>${e.title}</h3><div class="tl-co"><span>${ic('building-2')}${e.company}</span><span>${ic('map-pin')}${e.loc}</span></div>
<ul class="ach">${e.ach.map(a=>`<li>${a}</li>`).join('')}</ul><ul class="tags" aria-label="Tech used">${e.tech.map(t=>`<li>${t}</li>`).join('')}</ul></article></li>`).join('');

$('#internGrid').innerHTML=D.internships.map(n=>`<article class="card intern rv"><div class="intern-h"><span class="mono" aria-hidden="true">${n.mono}</span><div><h3>${n.role}</h3><p>${n.company} · ${n.loc}</p></div></div>
<dl class="meta"><dt>Duration</dt><dd>${n.dur}</dd><dt>Team</dt><dd>${n.team}</dd><dt>Mentor</dt><dd>${n.mentor}</dd></dl>
<div><h4>${ic('hammer')}What I built</h4><ul class="ach">${n.built.map(x=>`<li>${x}</li>`).join('')}</ul></div>
<div><h4>${ic('lightbulb')}What I learned</h4><ul class="ach">${n.learned.map(x=>`<li>${x}</li>`).join('')}</ul></div></article>`).join('');
$('#internGrid').setAttribute('data-stagger','');

const E=D.education;
$('#eduCard').innerHTML=`<div><span class="pill">${ic('calendar')}${E.years}</span><h3>${E.degree}</h3><p class="edu-inst">${E.inst}</p><div class="gpa"><b data-count="${E.gpa}" data-dec="2">${E.gpa}</b><span>/ 10 CGPA</span></div>
<h4>Achievements</h4><ul class="ach">${E.ach.map(a=>`<li>${a}</li>`).join('')}</ul></div>
<div><h4>Relevant coursework</h4><ul class="tags">${E.course.map(c=>`<li>${c}</li>`).join('')}</ul></div>`;
$('#school').innerHTML=E.school.map(s=>`<div class="card rv">${ic('school')}<div><b>${s[0]}</b><span>${s[1]}</span></div><strong>${s[2]}</strong></div>`).join('');

$('#certGrid').innerHTML=D.certs.map((c,i)=>`<div class="cert rv" tabindex="0" aria-label="${c.title}, ${c.issuer}. Press Enter for details.">
<div class="cert-in"><div class="cert-f"><span class="mono" aria-hidden="true">${c.mono}</span><h3>${c.title}</h3><p>${c.issuer} · ${c.date}</p><span class="hint">${ic('rotate-cw')}<span class="hint-t">Hover for details</span></span></div>
<div class="cert-b"><dl><dt>Credential ID</dt><dd>${c.id}</dd><dt>Issued</dt><dd>${c.date} · ${c.issuer}</dd></dl><p>${c.detail}</p><a class="lnk" href="${c.url}" target="_blank" rel="noopener">${ic('badge-check')}Verify credential</a></div></div></div>`).join('');
$('#certGrid').setAttribute('data-stagger','');
if(!FINE)$$('.hint-t').forEach(h=>h.textContent='Tap for details');

$('#hobGrid').innerHTML=D.hobbies.map(h=>`<article class="card hob rv"><div class="scene hob" role="img" aria-label="${h.alt}">${SC.hobby[h.id]()}</div><div class="hob-body"><h3>${h.name}</h3><p>${h.text}</p></div></article>`).join('');
$('#hobGrid').setAttribute('data-stagger','');

$('#qTrack').innerHTML=D.quotes.map((q,i)=>`<figure class="q-slide" role="group" aria-roledescription="slide" aria-label="${i+1} of ${D.quotes.length}" style="margin:0">${ic('quote','qm')}<blockquote>${q.q}</blockquote><figcaption class="q-who"><span class="mono" aria-hidden="true">${q.mono}</span><span><b>${q.name}</b><span>${q.role}</span></span></figcaption></figure>`).join('');
$('#qDots').innerHTML=D.quotes.map((q,i)=>`<button type="button" aria-label="Show testimonial ${i+1}" aria-current="${!i}"></button>`).join('');

/* stagger indexes */
$$('[data-stagger]').forEach(g=>[...g.children].forEach((c,i)=>c.style.setProperty('--d',i%4)));
$$('.hero .rv').forEach((c,i)=>c.style.setProperty('--d',i));

/* ---------- theme ---------- */
const tBtn=$('#themeBtn');
const syncTheme=()=>{const d=root.dataset.theme==='dark';tBtn.setAttribute('aria-pressed',d);tBtn.setAttribute('aria-label',d?'Switch to light mode':'Switch to dark mode')};
syncTheme();
tBtn.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem('sathya-theme',root.dataset.theme)}catch(e){}syncTheme()});

/* ---------- mobile nav ---------- */
const burger=$('#burger'),mnav=$('#mnav');
const setMenu=o=>{burger.setAttribute('aria-expanded',o);burger.setAttribute('aria-label',o?'Close menu':'Open menu');mnav.classList.toggle('open',o);mnav.inert=!o;if(o)setTimeout(()=>$('a',mnav).focus(),50)};
mnav.inert=true;
burger.addEventListener('click',()=>setMenu(burger.getAttribute('aria-expanded')!=='true'));
$$('a',mnav).forEach(a=>a.addEventListener('click',()=>setMenu(false)));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&mnav.classList.contains('open')){setMenu(false);burger.focus()}});
matchMedia('(min-width:1025px)').addEventListener('change',e=>e.matches&&setMenu(false));
$$('li',mnav).forEach((l,i)=>l.style.setProperty('--k',i));

/* ---------- visibility sweep (rect-based, works in throttled/embedded frames) ---------- */
const V={hero:true,q:false},pend=new Set(),counts=new Set($$('[data-count]')),scenes=$$('.scene'),secs=$$('main section[id]'),navLinks=$$('[data-link]');
const inView=(el,m=0)=>{const r=el.getBoundingClientRect();return r.width>0&&r.bottom>-m&&r.top<innerHeight+m};
const doReveal=el=>{pend.delete(el);el.classList.add('in','seen');const d=(parseFloat(el.style.getPropertyValue('--d'))||0)*90;setTimeout(()=>el.classList.remove('rv','rv-l','rv-r'),1000+d)};
const setActive=id=>navLinks.forEach(a=>{const on=a.dataset.link===id;a.classList.toggle('active',on);on?a.setAttribute('aria-current','true'):a.removeAttribute('aria-current')});
const fmt=(v,dec)=>dec?v.toFixed(dec):Math.round(v).toLocaleString('en-IN');
const runCount=el=>{const to=parseFloat(el.dataset.count),dec=+el.dataset.dec||0,suf=el.dataset.suf||'',fin=()=>el.textContent=fmt(to,dec)+suf;if(RM)return fin();
const t0=performance.now(),dur=1600;const step=t=>{const p=Math.min(1,(t-t0)/dur);el.textContent=fmt(to*(1-Math.pow(1-p,3)),dec)+suf;if(p<1)requestAnimationFrame(step)};requestAnimationFrame(step);setTimeout(fin,dur+300)};
if(!RM)counts.forEach(el=>el.textContent=(el.dataset.dec?'0.00':'0')+(el.dataset.suf||''));
let curSec='';
const sweep=()=>{const H=innerHeight;
pend.forEach(el=>{const r=el.getBoundingClientRect();if(r.width>0&&r.top<H-40&&r.bottom>0)doReveal(el)});
scenes.forEach(sc=>sc.classList.toggle('live',inView(sc,60)));
counts.forEach(el=>{if(inView(el,-60)){counts.delete(el);runCount(el)}});
V.hero=inView($('.screen'));V.q=inView($('.quotes'));
let cur='top';secs.forEach(sc=>{const r=sc.getBoundingClientRect();if(r.top<=H*.45&&r.bottom>H*.45)cur=sc.dataset.nav||sc.id});if(cur!==curSec){curSec=cur;setActive(cur)}};
let lastSw=0;addEventListener('scroll',()=>{const n=Date.now();if(n-lastSw>80){lastSw=n;sweep()}},{passive:true});addEventListener('resize',sweep);setInterval(sweep,350);

/* ---------- scroll: progress, nav border, timeline fill ---------- */
const bar=$('#progress'),nav=$('#nav'),tl=$('#timeline'),fill=$('#tlFill');let tick=false;
const onScroll=()=>{tick=false;const h=root.scrollHeight-innerHeight,y=scrollY;bar.style.transform=`scaleX(${h>0?y/h:0})`;nav.classList.toggle('scrolled',y>8);
const r=tl.getBoundingClientRect();fill.style.transform=`scaleY(${Math.max(0,Math.min(1,(innerHeight*.6-r.top)/r.height))})`};
addEventListener('scroll',()=>{if(!tick){tick=true;requestAnimationFrame(onScroll)}},{passive:true});onScroll();

/* ---------- hero screen ---------- */
const panels=$$('.scr-panel'),track=$('#scrTrack'),dots=$$('#scrDots button'),url=$('#scrUrl');let si=0,heroHold=false;
const showPanel=i=>{si=i;if(!RM)track.style.transform=`translateY(${-i*100}%)`;panels.forEach((p,k)=>{p.classList.toggle('on',k===i);p.setAttribute('aria-hidden',k!==i)});dots.forEach((d,k)=>d.setAttribute('aria-current',k===i));url.innerHTML='sathya.dev/<b>#'+SC.heroPanels[i].k+'</b>'};
dots.forEach((d,k)=>d.addEventListener('click',()=>showPanel(k)));
$('.screen').addEventListener('mouseenter',()=>heroHold=true);$('.screen').addEventListener('mouseleave',()=>heroHold=false);
$('.screen').addEventListener('focusin',()=>heroHold=true);$('.screen').addEventListener('focusout',()=>heroHold=false);
setInterval(()=>{if(V.hero&&!heroHold&&!document.hidden)showPanel((si+1)%panels.length)},3400);

/* ---------- projects: filter + modal + tilt ---------- */
const cards=$$('.proj'),count=$('#projCount');
const applyFilter=f=>{let n=0;cards.forEach(c=>{const ok=f==='All'||c.dataset.cats.split('|').includes(f);c.classList.remove('rv','rv-l','rv-r');
if(ok){n++;if(c.hidden){c.hidden=false;c.classList.add('fout');requestAnimationFrame(()=>requestAnimationFrame(()=>c.classList.remove('fout')))}else c.classList.remove('fout')}
else{c.classList.add('fout');setTimeout(()=>{if(c.classList.contains('fout'))c.hidden=true},RM?0:220)}});count.textContent=`Showing ${n} project${n===1?'':'s'}`};
$$('.filter').forEach(b=>b.addEventListener('click',()=>{$$('.filter').forEach(x=>x.setAttribute('aria-pressed',x===b));applyFilter(b.dataset.f)}));
count.textContent=`Showing ${cards.length} projects`;

const dlg=$('#projModal'),mBody=$('#pmBody');let opener=null;
const openProject=(id,from)=>{const p=D.projects.find(x=>x.id===id);opener=from;
mBody.innerHTML=`${thumb(p,'live')}<div class="m-body"><div class="m-head"><div class="proj-meta"><span>${p.cats.join(' · ')}</span><i></i><span>${p.role}</span><i></i><span>${p.year}</span></div><h2 id="pmTitle">${p.title}</h2><p>${p.summary}</p><ul class="tags">${p.stack.map(t=>`<li>${t}</li>`).join('')}</ul></div>
<div class="m-cols"><div class="m-block"><h3>${ic('target')}The problem</h3><p>${p.problem}</p></div><div class="m-block"><h3>${ic('lightbulb')}The solution</h3><p>${p.solution}</p></div></div>
<div class="m-block"><h3>${ic('sparkles')}Key features</h3><ul class="m-feat">${p.features.map(f=>`<li>${ic('check')}${f}</li>`).join('')}</ul></div>
<div><h3 style="margin:0 0 12px;font-size:15px;font-weight:600">Results</h3><div class="m-res">${p.results.map(r=>`<div><b>${r[0]}</b>${r[1]}</div>`).join('')}</div></div>
<div class="m-foot"><a class="btn btn-accent" href="https://${p.id}.sathya.dev" target="_blank" rel="noopener">Live Demo${ic('external-link','ic-r')}</a><a class="btn btn-outline" href="https://github.com/sathya-dev/${p.id}" target="_blank" rel="noopener">${ic('github')}View on GitHub</a></div></div>`;
dlg.showModal();root.classList.add('locked');dlg.scrollTop=0;requestAnimationFrame(()=>requestAnimationFrame(()=>dlg.classList.add('show')));$('.modal-x').focus()};
const closeModal=()=>{if(!dlg.open)return;dlg.classList.remove('show');setTimeout(()=>{dlg.close();root.classList.remove('locked');opener&&opener.focus()},RM?0:260)};
dlg.addEventListener('cancel',e=>{e.preventDefault();closeModal()});
$('.modal-x').addEventListener('click',closeModal);$('.modal-bg').addEventListener('click',closeModal);
dlg.addEventListener('click',e=>{if(e.target===dlg)closeModal()});
$$('.proj').forEach(c=>{const b=$('.proj-open',c);c.addEventListener('click',e=>{if(e.target.closest('a'))return;openProject(b.dataset.id,b)});
if(FINE&&!RM){c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(900px) translateY(-6px) rotateX(${-y*6}deg) rotateY(${x*7}deg)`});
c.addEventListener('pointerleave',()=>c.style.transform='')}});

/* ---------- certs: tap/keyboard flip ---------- */
$$('.cert').forEach(c=>{c.addEventListener('click',e=>{if(e.target.closest('a'))return;c.classList.toggle('flip')});
c.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target===c){e.preventDefault();c.classList.toggle('flip')}});
c.addEventListener('focusout',e=>{if(!c.contains(e.relatedTarget))c.classList.remove('flip')})});

/* ---------- testimonials ---------- */
const qT=$('#qTrack'),qD=$$('#qDots button'),qBox=$('.quotes');let qi=0,qHold=false;
const goQ=(i,user)=>{qi=(i+D.quotes.length)%D.quotes.length;qT.style.transform=`translateX(${-qi*100}%)`;qD.forEach((d,k)=>d.setAttribute('aria-current',k===qi));$$('.q-slide').forEach((s,k)=>s.setAttribute('aria-hidden',k!==qi));$('.q-view').setAttribute('aria-live',user?'polite':'off')};
qD.forEach((d,k)=>d.addEventListener('click',()=>goQ(k,1)));$('#qPrev').addEventListener('click',()=>goQ(qi-1,1));$('#qNext').addEventListener('click',()=>goQ(qi+1,1));
qBox.addEventListener('mouseenter',()=>qHold=true);qBox.addEventListener('mouseleave',()=>qHold=false);qBox.addEventListener('focusin',()=>qHold=true);qBox.addEventListener('focusout',()=>qHold=false);
setInterval(()=>{if(V.q&&!qHold&&!document.hidden)goQ(qi+1)},6000);goQ(0);
let sx=null;qBox.addEventListener('touchstart',e=>sx=e.touches[0].clientX,{passive:true});qBox.addEventListener('touchend',e=>{if(sx==null)return;const dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>40)goQ(qi+(dx<0?1:-1),1);sx=null});

/* ---------- contact form ---------- */
const form=$('#cForm'),wrap=$('.c-form');let tried=false;
const rules={name:v=>v.trim().length<2?'Please enter your name.':'',email:v=>!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())?'Please enter a valid email address.':'',message:v=>v.trim().length<20?`Tell me a little more — at least 20 characters (${v.trim().length}/20).`:''};
const check=f=>{const m=rules[f.name](f.value),err=$('#e-'+f.name);f.setAttribute('aria-invalid',!!m);err.innerHTML=m?ic('info')+m:'';return !m};
$$('input,textarea',form).forEach(f=>{f.addEventListener('blur',()=>tried&&check(f));f.addEventListener('input',()=>tried&&check(f))});
form.addEventListener('submit',e=>{e.preventDefault();tried=true;const fs=$$('input,textarea',form);const ok=fs.map(check).every(Boolean);
if(!ok){fs.find(f=>f.getAttribute('aria-invalid')==='true').focus();return}
form.classList.add('busy');$('.send',form).disabled=true;
setTimeout(()=>{form.classList.remove('busy');$('.send',form).disabled=false;$('#okName').textContent=$('#f-name').value.trim().split(' ')[0];wrap.classList.add('sent');form.reset();tried=false;$('#okAgain').focus()},RM?200:1100)});
$('#okAgain').addEventListener('click',()=>{wrap.classList.remove('sent');setTimeout(()=>$('#f-name').focus(),300)});

/* ---------- back to top ---------- */
$('#toTop').addEventListener('click',()=>{scrollTo({top:0,behavior:RM?'auto':'smooth'});$('.brand').focus({preventScroll:true})});

/* ---------- cursor ---------- */
if(FINE&&!RM){root.classList.add('has-cursor');const cur=$('.cursor'),dot=$('.c-dot'),ring=$('.c-ring');let mx=-100,my=-100,rx=-100,ry=-100,run=false;
const loop=()=>{rx+=(mx-rx)*.2;ry+=(my-ry)*.2;ring.style.transform=`translate(${rx}px,${ry}px)`;if(Math.abs(mx-rx)+Math.abs(my-ry)>.3)requestAnimationFrame(loop);else run=false};
addEventListener('pointermove',e=>{if(e.pointerType!=='mouse')return;mx=e.clientX;my=e.clientY;dot.style.transform=`translate(${mx}px,${my}px)`;if(!run){run=true;requestAnimationFrame(loop)}},{passive:true});
document.addEventListener('pointerover',e=>cur.classList.toggle('big',!!e.target.closest('a,button,.card,.cert,input,textarea,[role="button"]')));
document.addEventListener('mouseleave',()=>{mx=my=-100;dot.style.transform=ring.style.transform='translate(-100px,-100px)'})}

/* ---------- intro + start ---------- */
const start=()=>{$$('.rv,.rv-h').forEach(el=>pend.add(el));showPanel(0);sweep()};
const intro=$('#intro');
if(intro&&!root.classList.contains('seen')){setTimeout(()=>{intro.classList.add('done');try{localStorage.setItem('sathya-intro','1')}catch(e){}start();setTimeout(()=>intro.remove(),700)},RM?300:1700)}
else{intro&&intro.remove();start()}
})();
