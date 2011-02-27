/*
 Copyright (c) 2009-2010 Petr Vostrel (http://petr.vostrel.cz/)
 Dual licensed under the MIT (MIT-LICENSE.txt)
 and GPL (GPL-LICENSE.txt) licenses.

 jQuery Reel
 http://jquery.vostrel.cz/reel
 Version: 1.1-devel
 Updated: 2011-02-27

 Requires jQuery 1.4.2 or higher
*/
jQuery.reel||function(k,ca,$a,p){function ab(l){return"<"+l+"/>"}function da(l){return"."+l}function ea(l){return"url("+l+")"}function D(l){return+l.toFixed(4)}function Q(l,a,t){return R(l,Da(a,t))}function bb(l){function a(){k.fn[this]||(k.fn[this]=function(){return this})}k.each(l,a)}function fa(l,a){return u(l)*(a?-1:1)}function S(l){return l.originalEvent.touches[0]}k.reel={version:"1.1-devel",def:{footage:6,frame:1,frames:36,hint:"",horizontal:true,hotspot:p,indicator:0,klass:"",loops:true,reversed:p,
spacing:0,stitched:p,suffix:"-reel",tooltip:"",area:p,brake:0.5,clickfree:false,cw:false,delay:-1,directional:false,draggable:true,entry:p,graph:p,image:p,images:[],inversed:false,laziness:8,monitor:p,opening:0,orbital:0,path:"",preloader:4,rebound:0.5,revolution:p,row:1,rows:0,speed:0,step:p,steps:p,tempo:36,timeout:2,throwable:true,vertical:false,wheelable:true}};k.fn.reel=function(l){var a=k.extend({},k.reel.def,l);l=function(g){var e=[];g.filter(cb).each(function(){var c=k(this),r=a.images.length&&
a.images||a.image||c.attr(Ea),m=T(c.css(Fa)),v=T(c.css(Ga));!r||r==Ha||!m||!v||e.push(c)});g.filter(Ia+da(w)).each(function(){e.push(k(this))});return k(e)}(this);var t=[],E=a.tempo/=db?a.laziness:1,F=1E3/E;a.reversed&&(a.cw=true);a.tooltip&&(a.hint=a.tooltip);a.hotspot&&(a.area=a.hotspot);ga=ga||function g(){x.trigger(A);return setTimeout(g,F)}();l.each(function(){var g=k(this),e=function(f,b){g.data(f,b);g.trigger("store",[f,b]);return b},c=function(f){var b=g.data(f);g.trigger("recall",[f,b]);
return b},r={setup:function(f){if(g.hasClass(w))return m.call(f);var b=g.attr(Ea),d=g.attr(eb),h=g.attr("style"),i=a.images,j=a.stitched,n=a.loops,s={x:T(g.css(Fa)),y:T(g.css(Ga))},G=e(Ja,a.orbital&&a.footage||a.rows<=1&&i.length||a.frames),fb=j?1:Ka(G/a.footage),ha={display:"block",width:s.x,height:s.y};d="#"+d+a.suffix;var La=g.attr("className"),ia={position:"relative",width:s.x,height:s.y};ia=k(L,{id:d.substr(1),className:La+U+gb,css:ia});ha=g.wrap(ia).attr({className:w}).css(ha).bind(r);t.push(ha[0]);
e(ja,i.length&&i.length||a.image||b.replace(/^(.*)\.(jpg|jpeg|png|gif)$/,"$1"+a.suffix+".$2"));e(Ma,La);e(B,a.frame);e(Na,a.spacing);e(z,s);e(o,0);e(ka,a.steps||a.frames);e(V,a.revolution||j/2||s.x*2);e(la,fb);e(W,1/(G-(n&&!j?0:1)));e(hb,1/R(G,c(ka)));e(ma,j);e(Oa,j-(n?0:s.x));e(X,d);e(C,e(na,a.speed)<0);e(H,0);e(I,a.vertical);e(y,(a.row-1)/(a.rows-1));e(Y,fa(1,!a.cw&&!j));e(Pa,{src:b,style:h||Ha});ga&&x.bind(A,r.tick);m.call(f);g.trigger("start")},teardown:function(f){g.unbind(q).unbind(r);var b=
g.data("events"),d=g.clone().attr(g.data(Pa)).removeClass(w).addClass(c(Ma));for(var h in b)k.each(b[h],function(i,j){d.bind(h+"."+j.namespace,j.handler,j.data)});k("img:hidden",g.parent()).remove();k(c(X)).before(d).detach();Z();x.unbind(oa).unbind(pa).unbind(A,r.tick).unbind(A,r.opening_tick);m.call(f)},start:function(){var f=c(z),b=c(Ja),d=R(b,c(ka));d=e(o,1/d*((a.step||a.frame)-1));e(B,d*b+1);g.attr("id");b=g.parent();d=k(L,{className:ib,css:{position:$,left:0,top:0,width:f.x,height:f.y,background:qa,
opacity:0}}).appendTo(b);d=e(Qa,k(a.area||d));if(jb){g.css({WebkitUserSelect:"none",WebkitBackgroundSize:a.images.length?"auto":c(ma)&&c(ma)+"px "+f.y+"px"||f.x*a.footage+"px "+f.y*c(la)*(a.rows||1)*(a.directional?2:1)+"px"});d.bind(kb,function(h){g.trigger("down",[S(h).clientX,S(h).clientY,true]);return false}).bind(lb,function(h){g.trigger("slide",[S(h).clientX,S(h).clientY,true]);return false}).bind(mb,function(){g.trigger("up",[true]);return false}).bind(nb,function(){g.trigger("up",[true]);return false})}else d.css({cursor:"url("+
Ra+"), "+ra}).bind(ob,function(h,i){g.trigger("wheel",[i]);return false}).bind(pb,function(){g.trigger("play")}).bind(a.clickfree?qb:rb,function(h){g.trigger("down",[h.clientX,h.clientY]);return false}).bind(a.clickfree?sb:"",function(){g.trigger("up");return false}).disableTextSelect();a.hint&&d.attr(tb,a.hint);a.monitor&&b.append(sa=k(L,{className:ub,css:{position:$,left:0,top:0}}))||(sa=k());a.indicator&&b.append(Sa("x"));a.rows>1&&a.indicator&&b.append(Sa("y"));g.trigger("preload")},preload:function(f){var b=
c(z),d=g.parent(),h=c(ja),i=a.images;h=!i.length?[h]:[].concat(i);var j=g[0];j.frames=h.length;j.preloaded=0;g.trigger("stop");for(d.append(ta=k(L,{className:vb,css:{position:$,left:0,top:b.y-a.preloader,height:a.preloader,backgroundColor:qa}}));h.length;){i=a.path+h.shift();var n=k(new Image).bind("load"+q,function(){j.preloaded++;k(this).unbind(q);ta.css({width:1/j.frames*j.preloaded*b.x});if(j.frames==j.preloaded){ta.remove();g.trigger(a.rows>1&&!a.stitched?"rowChange":"frameChange");g.attr({src:wb}).trigger("loaded");
g.trigger("opening");m.call(f)}});d.append(n.hide().attr({src:i}))}},tick:function(f){var b=c(H);if(M){var d=D(b-xb*M);b=!(b*d<=0||b<u(d))&&e(H,b>u(c(na))?d:(M=v=0))}sa.text(c(a.monitor));b&&M++;v&&v++;Ta(0);slidable=true;if(v&&!b)return m.call(f);if(c(ua))return m.call(f,J());d=c(Y)*fa(1,c(C));var h=(c(va)?b:u(c(na))+b)/a.tempo;b=c(o);d=e(o,b-h*d);m.call(f);d!=b&&g.trigger("fractionChange")},opening:function(){var f=a.entry||a.speed,b=c(o),d=a.opening;e(o,b-f*a.opening);e(wa,d*E);x.bind(A,r.opening_tick)},
opening_tick:function(f){var b=(a.entry||a.speed)/a.tempo*(a.cw?-1:1),d=c(o);e(o,D(d+b));b=e(wa,c(wa)-1);g.trigger("fractionChange");m.call(f);if(!(b>1)){x.unbind(A,r.opening_tick);yb()}},play:function(f){var b=e(xa,true);e(va,!b);Ua();m.call(f)},pause:function(f){e(xa,false);J();m.call(f)},stop:function(f){var b=e(va,true);e(xa,!b);m.call(f)},down:function(f,b,d,h){if(a.draggable){e(ua,true);e(H,0);aa=ba(b,d,c(o),c(V),c(y));J();Z();if(!h){x.css({cursor:ea(zb)+", "+ra}).bind(pa,function(i){g.trigger("slide",
[i.clientX,i.clientY]);m.call(i);return false});a.clickfree||x.bind(oa,function(i){g.trigger("up");m.call(i)})}}m.call(f)},up:function(f,b){if(!a.draggable)return m.call(f);e(ua,false);var d=e(H,!a.throwable?0:u(N[0]+N[1])/60);M=d?1:0;d?Ua():J();Z();!b&&x.unbind(oa).unbind(pa)&&c(Qa).css({cursor:ea(Ra)+", "+ra});m.call(f)},slide:function(f,b,d){if(a.draggable&&slidable){slidable=false;J();var h={x:b-aa.x,y:d-aa.y};if(u(h.x)>0||u(h.y)>0){aa={x:b,y:d};var i=c(V),j=c(Va),n=c(I),s=e(o,Wa(n?d-j.y:b-j.x,
c(ya),i,c(za),c(Aa),c(Y)));(h=Ta(n?h.y:h.x||0))&&e(C,h<0);if(a.orbital&&c(Xa)){e(I,u(d-j.y)>u(b-j.x));j=ba(b,d,s,i,c(y))}if(a.rows>1){h=c(z).y;n=c(Ya);var G=-n*h;e(y,D(k.reel.math.envelope(d-j.y,n,h,G,G+h,-1)))}!(s%1)&&!a.loops&&ba(b,d,s,i,c(y));g.trigger("fractionChange")}}m.call(f)},wheel:function(f,b){if(!a.wheelable)return m.call(f);var d=Ka(Ab(u(b))/2);d=fa(d,b>0);b=0.2*c(V);ba(p,p,c(o),b,c(y));e(o,Wa(d,c(ya),b,c(za),c(Aa),c(Y)));d&&e(C,d<0);e(H,0);J();m.call(f);g.trigger("fractionChange");return false},
fractionChange:function(f,b){b=!b?c(o):e(o,b);b=a.loops?b-O(b):Q(0,1,b);b=e(o,D(b));var d=c(B),h=e(B,1+O(b/c(W))),i=a.orbital;e(Xa,i&&(h<=i||h>=a.footage-i+2));if(!a.loops&&a.rebound){!v&&!(b%1)?Ba++:(Ba=0);Ba>=a.rebound*1E3/a.tempo&&e(C,!c(C))}i=c(z);var j=(c(I)?i.y:i.x)-a.indicator,n=Q(0,j,P(k.reel.math.interpolate(b,-1,j+2)));n=!a.cw||a.stitched?n:j-n;k(da(Ca+".x"),c(X)).css(c(I)?{left:0,top:n}:{left:n,top:i.y-a.indicator});if(a.rows>1){i=c(z).y-a.indicator;i=Q(0,i,P(k.reel.math.interpolate(c(y),
-1,i+2)));k(da(Ca+".y"),c(X)).css({top:i})}if(b&&h==d)return m.call(f);g.trigger(a.rows>1?"rowChange":"frameChange");m.call(f)},rowChange:function(f,b){var d=O(c(o)/c(W))+1;b=e(y,Q(0,1,D(b!=p?(b-1)/(a.rows-1):c(y))));e(B,d+(a.rows<=1?0:P(b*(a.rows-1))*a.frames));m.call(f);g.trigger("frameChange")},frameChange:function(f,b){var d=!b?c(o):e(o,D(c(W)*(b-1)));b=e(B,P(b?b:c(B)));var h=a.images,i=a.footage,j=c(z),n=a.horizontal;if(c(I)){b=a.inversed?i+1-b:b;b+=i}if(h.length){h=h[b-1];g.attr({src:a.path+
h})}else{if(a.stitched)n=[-P(d*c(Oa))+K,0+K];else{d=b%i-1;d=d<0?i-1:d;i=O((b-0.1)/i);i+=a.rows>1?0:c(C)?0:c(la);b=c(Na);i=i*((n?j.y:j.x)+b);j=d*((n?j.x:j.y)+b);n=h.length?[0,0]:n?[-j+K,-i+K]:[-i+K,-j+K]}h=c(ja);g.css({background:ea(a.path+h)+U+n.join(U)})}m.call(f)}},m=function(f){Bb||delete this;return f},v,M=0,Ua=function(){return v=0},J=function(){clearTimeout(Za);x.unbind(A,r.opening_tick);g.trigger("play");return v=-a.timeout*a.tempo},Za,yb=function(){Za=setTimeout(function(){g.trigger("play")},
a.delay*1E3||0)},sa,ta,Sa=function(f){return k(L,{className:[Ca,f].join(U),css:{width:a.indicator,height:a.indicator,top:c(z).y-a.indicator,left:0,position:$,backgroundColor:qa}})},Ba=0,aa={x:0,y:0},Ta=function(f){return N.push(f)&&N.shift()&&f},Z=function(){return N=[0,0]},N=Z(),xb=a.brake/a.tempo,Wa=a.graph||k.reel.math[a.loops?"hatch":"envelope"],ba=function(f,b,d,h,i){e(ya,d);e(Ya,i);e(za,a.loops?0:-d*h);e(Aa,a.loops?h:h-d*h);return f&&e(Va,{x:f,y:b})||p};r.setup()});return k(t)};k.reel.math=
{envelope:function(l,a,t,E,F,g){return a+R(E,Da(F,-l*g))/t},hatch:function(l,a,t,E,F,g){l=(l<E?F:0)+l%F;l=a+-l*g/t;return l-O(l)},interpolate:function(l,a,t){return a+l*(t-a)}};bb("mousewheel disableTextSelect enableTextSelect".split(/ /));var x=k($a);ca=navigator.userAgent;var jb=/iphone|ipod|ipad|android/i.test(ca),db=/iphone|ipod|ipad/i.test(ca),Bb=k.browser.msie,ra="ew-resize",ga,w="jquery-reel",gb=w+"-overlay",Ca=w+"-indicator",vb=w+"-preloader",ub=w+"-monitor",ib=w+"-interface",wb="data:image/gif;base64,R0lGODlhCAAIAIAAAAAAAAAAACH5BAEAAAAALAAAAAAIAAgAAAIHhI+py+1dAAA7",
Ra="data:image/gif;base64,R0lGODlhEAAQAJECAAAAAP///////wAAACH5BAEAAAIALAAAAAAQABAAQAI3lC8AeBDvgosQxQtne7yvLWGStVBelXBKqDJpNzLKq3xWBlU2nUs4C/O8cCvU0EfZGUwt19FYAAA7",zb="data:image/gif;base64,R0lGODlhEAAQAJECAAAAAP///////wAAACH5BAEAAAIALAAAAAAQABAAQAIslI95EB3MHECxNjBVdE/5b2zcRV1QBabqhwltq41St4hj5konmVioZ6OtEgUAOw==",P=Math.round,O=Math.floor,Ka=Math.ceil,Da=Math.min,R=Math.max,u=Math.abs,Ab=Math.sqrt,T=parseInt,Qa="area",Pa="backup",C="backwards",W="bit",Xa="center",Ma="classes",ua="clicked",Va="clicked_location",
ya="clicked_on",Ya="clicked_row",Y="cwish",z="dimensions",o="fraction",B="frame",Ja="frames",Aa="hi",ja="image",wa="opening_ticks",za="lo",xa="playing",V="revolution",y="row",la="rows",Na="spacing",na="speed",X="stage",ka="steps",ma="stitched",Oa="stitched_travel",va="stopped",H="velocity",I="vertical",hb="wheel_step",q=".reel",pb="dblclick"+q,rb="mousedown"+q,qb="mouseenter"+q,sb="mouseleave"+q,pa="mousemove"+q,oa="mouseup"+q,ob="mousewheel"+q,A="tick"+q,nb="touchcancel"+q,mb="touchend"+q,kb="touchstart"+
q,lb="touchmove"+q,Ha="",U=" ",$="absolute",Ia="div",L=ab(Ia),Ga="height",qa="#000",eb="id",cb="img",K="px",Ea="src",tb="title",Fa="width"}(jQuery,window,document);
