/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[16],{394:function(ia,da,f){function ba(e,f,h){f.endsWith("/")||(f+="/");h=h||{};var n=h.disableWebsockets||!1;this.gW=h.singleServerMode||!1;null!=h.customQueryParameters&&Object(x.b)("wvsQueryParameters",h.customQueryParameters);f.endsWith("blackbox/")||(f+="blackbox/");this.rn=h.uploadData||null;this.gx=h.uriData||null;this.QO=h.cacheKey||null;this.lT=h.officeLocale||null;this.wu=Object(r.a)(f,null,n);this.df=f;this.VF=e;this.uf=
null;this.Hj=aa();this.qm=aa();this.Fz=!1;this.lg=this.Ud=this.ne=this.cf=null;this.yf=[];this.pA=[];this.cache={};this.timeStamp=0;this.Vf=[];this.oh=[];this.tG=null;this.MF=!1;this.YJ=this.id=null;this.vI=this.KR=ha;this.xC=0;this.xH=!1;this.gT=1;this.ki={};this.Fq=0;this.ps=ea();this.Sp(!0)}function ea(){var e={Fr:{},Eb:[],pop:function(){var f=e.Eb.pop();e.Fr[f.key]=void 0;return f},push:function(f,h){h={key:f,data:h};e.Eb.push(h);e.Fr[f]=h.data},contains:function(f){return!!e.Fr[f]},get:function(f){return e.Fr[f]},
set:function(f,h){e.Fr[f]=h;e.Eb.forEach(function(h,n){h.key==f&&(e.Eb[n]=h)})},remove:function(f){e.Fr[f]=void 0;e.Eb.forEach(function(h,n){h.key==f&&e.Eb.splice(n,1)})},length:function(){return e.Eb.length}};return e}function aa(){var e={promise:null,resolve:null,reject:null,state:0,result:null,request:null,Qr:function(){return 1===(e.state&1)},H$:function(){return 2===(e.state&2)},hi:function(){return!e.H$()&&!e.Qr()},k$:function(){return 4===(e.state&4)},BV:function(){e.state|=4}};e.promise=new Promise(function(f,
h){e.resolve=function(){if(0===e.state||4===e.state)e.state=1,e.result=arguments[0],f.apply(null,arguments)};e.reject=function(){if(0===e.state||4===e.state)e.state=2,h.apply(null,arguments)}});return e}function ha(){return!1}function ca(e,f,h){if(!(f in ma))return!0;f=ma[f];for(var n=0;n<f.length;n++){var r=e;var w=f[n];var x=h;if(w.name in r){var y="",aa=!1;r=r[w.name];switch(w.type){case "s":y="String";aa=Object(z.isString)(r);break;case "a":y="Array";aa=Object(z.isArray)(r);break;case "n":y="Number";
aa=Object(z.isNumber)(r)&&Object(z.isFinite)(r);break;case "o":y="Object",aa=Object(z.isObject)(r)&&!Object(z.isArray)(r)}aa||x.reject('Expected response field "'+w.name+'" to have type '+y);w=aa}else x.reject('Response missing field "'+w.name+'"'),w=!1;if(!w)return!1}return!0}f.r(da);var z=f(0);f.n(z);var w=f(2);ia=f(48);var y=f(29),r=f(411),h=f(88),n=f(351),e=f(108),x=f(42),fa=f(158),ma={pages:[{name:"pages",type:"a"}],pdf:[{name:"url",type:"s"}],docmod:[{name:"url",type:"s"},{name:"rID",type:"s"}],
health:[],tiles:[{name:"z",type:"n"},{name:"rID",type:"n"},{name:"tiles",type:"a"},{name:"size",type:"n"}],annots:[{name:"url",type:"s"},{name:"name",type:"s"}],image:[{name:"url",type:"s"},{name:"name",type:"s"},{name:"p",type:"n"}],text:[{name:"url",type:"s"},{name:"name",type:"s"},{name:"p",type:"n"}],ApString2Xod:[{name:"url",type:"s"},{name:"rID",type:"s"}]};ba.prototype=Object(z.extend)(ba.prototype,{M3:function(){var e=this;return new Promise(function(f,h){var n=new XMLHttpRequest;n.open("GET",
e.df+"ck");n.withCredentials=e.Nk();n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&(200===n.status?f():h())};n.send()})},gfa:function(e,f){this.KR=e||ha;this.vI=f||ha},fP:function(){var e=this;this.qm=aa();this.Hj=aa();return this.wu.iG().then(function(){e.Fz=!1;e.id=null;e.MF=!1;return e.M3()})},IJ:function(){this.KR();this.QH();this.cf&&(this.cf.hi()?this.Lg(this.cf.request):this.cf.Qr()&&this.vI(this.cf.result.url,"pdf")&&(this.cf=null,this.$U()));this.lg&&this.lg.hi()&&this.Lg(this.lg.request);
this.ne&&this.ne.hi()?this.Lg(this.ne.request):this.Ud&&this.Ud.hi()&&this.zR(this.Ud.request);var e;for(e=0;e<this.Vf.length;e++)this.Vf[e]&&this.Vf[e]&&(this.Vf[e].hi()?this.Lg(this.Vf[e].request):this.Vf[e].Qr()&&this.vI(this.Vf[e].result.url,"image")&&(this.Vf[e]=null,this.uC(Object(z.uniqueId)(),e)));for(e=0;e<this.oh.length;e++)this.oh[e]&&this.oh[e]&&this.oh[e].hi()&&!this.oh[e].k$()&&this.Lg(this.oh[e].request);for(e=0;e<this.yf.length;e++)this.yf[e]&&this.yf[e].hi()&&this.Lg(this.yf[e].request)},
QH:function(f){var h=this;this.Fz||(this.timeStamp=Date.now(),this.wu.HK(function(e){h.Uaa(e)},function(){return null},function(){return null},!0).then(function(){clearInterval(h.mC);h.mC=null},function(n){h.Fz=!1;if(!h.mC){var r=0;h.MF=!0;h.YJ=0;h.mC=setInterval(function(){2>r++?h.IJ():(clearInterval(h.mC),f&&f.reject(e.a),Object(w.f)("WebViewerServer connection failed:"+n))},5E3)}}),this.Fz=!0)},xha:function(){var e=this,f=createPromiseCapability();if(this.rn){var h=new FormData;h.append("file",
this.rn.fileHandle,this.rn.fileHandle.name);var n=this.rn.loadCallback;var r="upload";var w=this.rn.extension}else if(this.gx){h={uri:this.gx.uri,wla:this.gx.shareId};h=Object.keys(h).map(function(e){return e+"="+(h[e]?encodeURIComponent(h[e]):"")}).join("&");var x="application/x-www-form-urlencoded; charset=UTF-8";n=this.gx.loadCallback;r="url";w=this.gx.extension}else return Promise.resolve();var z=new XMLHttpRequest,aa=Object(y.j)(e.df,"AuxUpload");aa=Object(fa.a)(aa)+"&type="+r+"&ext="+w;z.open("POST",
aa);z.withCredentials=this.Nk();x&&z.setRequestHeader("Content-Type",x);z.addEventListener("load",function(){if(z.readyState===z.DONE&&200===z.status){var h=JSON.parse(z.response);e.VF=h.uri;n(h);f.resolve(h)}});z.addEventListener("error",function(){f.reject(z.statusText+" "+JSON.stringify(z))});this.rn&&null!=this.rn.onProgress&&(z.upload.onprogress=function(f){e.rn.onProgress(f)});z.send(h);return f.promise},Kda:function(e){this.password=e||null;this.Hj.Qr()||(this.Hj=aa(),this.Lg({t:"pages"}));
return this.Hj.promise},vw:function(e){this.tG=e||null;this.Hj.Qr()||(this.QH(this.Hj),this.Lg({t:"pages"}));return this.Hj.promise},vu:function(e){e=Object.assign(e,{uri:encodeURIComponent(this.VF)});this.tG&&(e.ext=this.tG);this.uf&&(e.c=this.uf);this.password&&(e.pswd=this.password);this.QO&&(e.cacheKey=this.QO);this.lT&&(e.locale=this.lT);return e},nea:function(){0<this.ps.length()&&10>=this.Fq&&this.oea(this.ps.pop().data)},Z1:function(e){return 0<this.ps.length()&&this.ps.contains(e)?(this.ps.remove(e),
!0):!1},Lg:function(e){e=this.vu(e);this.wu.send(e)},qV:function(e,f){10<this.Fq?this.ps.push(e,f):(this.Fq++,e=this.vu(f),this.wu.send(e))},oea:function(e){this.Fq++;e=this.vu(e);this.wu.send(e)},zk:function(e){return e},Uaa:function(e){var f=this,n=e.data,r=e.err,y=e.t;switch(y){case "upload":r?f.yha.reject(r):f.yha.resolve("Success");break;case "pages":r?f.Hj.reject(r):ca(n,y,f.Hj)&&f.Hj.resolve(n);break;case "config":if(r)f.qm.reject(r);else if(ca(n,y,f.qm)){n.id&&(f.id=n.id);if(n.auth){var z=
Object(x.a)("wvsQueryParameters");z.auth=n.auth;Object(x.b)("wvsQueryParameters",z)}n.serverVersion&&(f.qX=n.serverVersion,Object(w.g)("[WebViewer Server] server version: "+f.qX));n.serverID?(f.xC=n.serverID===f.YJ&&f.xH?f.xC+1:0,f.YJ=n.serverID):f.xC=0;f.xH=!1;f.qm.resolve(n)}break;case "health":r?f.qm.reject(r):ca(n,y,f.qm)&&(n=n.unhealthy,f.gW&&n?Object(w.i)("Server failed health check. Single server mode ignoring check."):!f.Mja&&n&&1>=f.xC&&(f.xH=!0,f.fP().then(function(){f.IJ()},function(){f.IJ()})));
break;case "pdf":n.url=Object(fa.a)(f.df+"../"+encodeURI(n.url));r?f.cf.reject(r):ca(n,y,f.cf)&&f.cf.resolve(n);break;case "ApString2Xod":n.url=Object(fa.a)(f.df+"../data/"+encodeURI(n.url));r?f.ki[n.rID].reject(r):ca(n,y,f.ki[n.rID])&&f.ki[n.rID].resolve(n);break;case "docmod":n.url=Object(fa.a)(f.df+"../"+encodeURI(n.url));r?f.ki[n.rID].reject(r):ca(n,y,f.cf)&&f.ki[n.rID].resolve(n);break;case "xod":if(r)this.ne&&this.ne.hi()&&this.ne.reject(r),this.Ud&&this.Ud.hi()&&this.Ud.reject(r);else if(n.notFound)n.noCreate||
this.ne&&this.ne.hi()&&this.ne.resolve(n),this.Ud&&this.Ud.hi()&&this.Ud.resolve(n);else{n.url&&(n.url=Object(fa.a)(f.df+"../"+encodeURI(n.url)));if(!this.Ud||this.Ud.Qr())this.Ud=aa(),this.Ud.request={t:"xod",noCreate:!0};this.ne||(this.ne=aa(),this.ne.request={t:"xod"});this.Ud.resolve(n);this.ne.resolve(n)}break;case "annots":if(r)f.lg.reject(r);else if(ca(n,y,f.lg)){f.lg.BV();var ba=new XMLHttpRequest;z=f.df+"../"+encodeURI(n.url);var ea=n.hasAppearance?Object(fa.a)(z+".xodapp"):null;ba.open("GET",
Object(fa.a)(z));ba.responseType="text";ba.withCredentials=this.Nk();ba.addEventListener("load",function(){ba.readyState===ba.DONE&&200===ba.status&&f.lg.resolve({cL:ba.response,iz:ea})});ba.addEventListener("error",function(){f.lg.reject(ba.statusText+" "+JSON.stringify(ba))});ba.send()}break;case "image":f.Fq--;var da=this.Vf[n.p];r?da.promise.reject(r):ca(n,y,da)&&(da.result=n,da.result.url=Object(fa.a)(f.df+"../"+encodeURI(da.result.url)),da.resolve(da.result));break;case "tiles":f.Fq--;da=n.rID;
z=this.yf[da];this.yf[da]=null;this.pA.push(da);if(r)z.reject(r);else if(ca(n,y,z)){for(r=0;r<n.tiles.length;r++)n.tiles[r]=Object(fa.a)(f.df+"../"+encodeURI(n.tiles[r]));z.resolve(n)}break;case "text":da=this.oh[n.p];if(r)da.reject(r);else if(ca(n,y,da)){da.BV();var ha=new XMLHttpRequest;n=Object(fa.a)(f.df+"../"+encodeURI(n.url));ha.open("GET",n);ha.withCredentials=this.Nk();ha.addEventListener("load",function(){ha.readyState===ha.DONE&&200===ha.status&&(da.result=JSON.parse(ha.response),da.resolve(da.result))});
ha.addEventListener("error",function(e){da.reject(ha.statusText+" "+JSON.stringify(e))});ha.send()}break;case "progress":"loading"===n.t&&f.trigger(h.a.Events.DOCUMENT_LOADING_PROGRESS,[n.bytes,n.total])}this.nea();!y&&e.echo&&e&&"apstring2xod"==e.echo.t&&(e=e.echo.reqID)&&(2<=parseInt(f.qX)?f.ki[e].reject("Message unhandled by server"):f.ki[e].reject())},GQ:function(){this.QH(this.qm);return this.qm.promise},f7:function(e){for(var f=this,h=new XMLHttpRequest,n=Object(fa.a)(this.df+"aul")+"&id="+
this.id,r=new FormData,w={},x=0;x<e.body.length;x++){var y=e.body[x];w[y.id]=y.bF.w+";"+y.bF.h;r.append(y.id,y.bF.dataString)}e={t:"apstring2xod",reqID:this.gT++,parts:w};var z=this.vu(e);r.append("msg",JSON.stringify(z));f.ki[z.reqID]=aa();h.open("POST",n);h.withCredentials=f.Nk;n=new Promise(function(e,f){h.onreadystatechange=function(){4===h.readyState&&(200===h.status?e():f("An error occurred while sending down appearance strings to the server"))}});h.send(r);return n.then(function(){return f.ki[z.reqID].promise})},
e7:function(){this.lg||(this.lg=aa(),this.lg.request={t:"annots"},this.Lg(this.lg.request));return this.lg.promise},uC:function(e,f){this.Vf[f]||(this.Vf[f]=aa(),this.Vf[f].request={t:"image",p:f},this.qV(e,this.Vf[f].request));return this.Vf[f].promise},Lda:function(e){this.oh[e]||(this.oh[e]=aa(),this.oh[e].request={t:"text",p:e},this.Lg(this.oh[e].request));return this.oh[e].promise},Mda:function(e,f,h,n,r){var w=this.yf.length;this.pA.length&&(w=this.pA.pop());this.yf[w]=aa();this.yf[w].request=
{t:"tiles",p:f,z:h,r:n,size:r,rID:w};this.qV(e,this.yf[w].request);return this.yf[w].promise},$U:function(){this.cf||(this.cf=aa(),this.cf.request={t:"pdf"},this.MF?this.cf.resolve({url:this.VF}):this.Lg(this.cf.request));return this.cf.promise},YQ:function(e){var f=this,h=new XMLHttpRequest,n=Object(fa.a)(this.df+"aul")+"&id="+this.id,r=new FormData,w={};e.annots&&(w.annots="xfdf");e.watermark&&(w.watermark="png");e.redactions&&(w.redactions="redact");w={t:"docmod",reqID:this.gT++,parts:w};e.print&&
(w.print=!0);var x=this.vu(w);r.append("msg",JSON.stringify(x));return Promise.all([e.annots,e.watermark,e.redactions].map(function(e){return Promise.resolve(e)})).then(function(e){var w=e[0],y=e[1],z=e[2];w&&r.append("annots",w);y&&r.append("watermark",e.watermark);z&&r.append("redactions",z);f.ki[x.reqID]=aa();h.open("POST",n);h.withCredentials=f.Nk;e=new Promise(function(e,f){h.onreadystatechange=function(){4===h.readyState&&(200===h.status?e():f("An error occurred while sending down annotation data to the server"))}});
h.send(r);return e.then(function(){return f.ki[x.reqID].promise})})},zR:function(){this.Ud||(this.Ud=aa(),this.Ud.request={t:"xod",noCreate:!0},this.Lg(this.Ud.request));return this.Ud.promise},Nda:function(){this.ne||(this.ne=aa(),this.ne.request={t:"xod"},this.Lg(this.ne.request));return this.ne.promise},bn:function(){return!0},request:function(){},xU:function(){},abort:function(){for(var e=0;e<this.yf.length;e++)this.yf[e]&&(this.yf[e].resolve(null),this.yf[e]=null,this.pA.push(e));this.close()},
GC:function(e){this.uf=this.uf||{};this.uf.headers=e},kka:function(){return this.uf?Object(z.omit)(this.uf.headers,["Cookie","cookie"]):null},Sp:function(e){this.uf=this.uf||{};this.uf.internal=this.uf.internal||{};this.uf.internal.withCredentials=e},Nk:function(){return this.uf&&this.uf.internal?this.uf.internal.withCredentials:null},getFileData:function(){return Promise.reject()}});Object(ia.a)(ba);Object(n.a)(ba);Object(n.b)(ba);da["default"]=ba},411:function(ia,da,f){function ba(f,w,y){function r(f,
e){function h(e){r().then(function(f){da&&!ia?setTimeout(function(){h(e)},1):f.send(JSON.stringify(e))})}function n(e,f,n,r){var x=window.createPromiseCapability(),fa=!1,ja=x;z=e;ba=f;ea=n;y=null;r&&(e=Object(ha.a)("wvsQueryParameters"),e.bcid=Object(aa.k)(8),Object(ha.b)("wvsQueryParameters",e));try{e=Ea?ua+"/"+Ea:ua+"/ws";e=Object(ca.a)(e);var ka=new WebSocket(e);ka.onopen=function(){x.resolve();fa=!0;x=null;da=!1;w.resolve(ka);ba&&ba()};ka.onerror=function(e){da=ia=!0;x&&x.reject(e);y&&y.reject()};
ka.onclose=function(){w=window.createPromiseCapability();da=!0;y||(y=window.createPromiseCapability());y.resolve();ea&&ea();z&&fa&&z({t:"health",data:{unhealthy:!0,isDead:!0}})};ka.onmessage=function(e){e&&e.data&&(e=JSON.parse(e.data),e.hb?h({hb:!0}):e.end?close():z(e))}}catch(Ga){x.reject(Ga),x=null}return ja.promise}function r(){da&&z&&n(z);return w.promise}var w=window.createPromiseCapability(),y=null,z,ba,ea=null,da=!1,ia=!1,Ea=e,ua=function(e){var f=e.indexOf("://"),h="ws://";0>f?f=0:(5===f&&
(h="wss://"),f+=3);var n=e.lastIndexOf("/");0>n&&(n=e.length);return h+e.slice(f,n)}(f);return{send:h,HK:n,iG:function(){return y?y.promise:r().then(function(e){y=window.createPromiseCapability();z=null;e.close();return y.promise})}}}function h(f){var e=f.lastIndexOf("/");0>e&&(e=f.length);return f.slice(0,e)}return window.WebSocket&&!y?r(f,w):function(f,e){function n(e){(da?da.promise:Promise.resolve(ba)).then(function(f){var h=new XMLHttpRequest,n=aa?z+"/"+aa+"pf":z+"/pf";n=Object(ca.a)(n)+"&id="+
f;f=new FormData;f.append("data",JSON.stringify(e));h.open("POST",n);h.withCredentials=!0;h.send(f)})}function r(){ba=0;da||(da=window.createPromiseCapability())}function w(){y=new XMLHttpRequest;var e=z+"/pf";e+=0!==ba?"?id="+ba+"&uc="+ua:"?uc="+ua;ua++;y.open("GET",e,!0);y.withCredentials=!0;y.setRequestHeader("Cache-Control","no-cache");y.setRequestHeader("X-Requested-With","XMLHttpRequest");var f=y,h=!1;y.onreadystatechange=function(){a:if(3<=f.readyState&&!h){try{var e=f.responseText.length}catch(Fa){Object(ea.g)("caught exception");
break a}if(0<e)try{var x=f.responseText.split("\n");for(x[x.length-1]&&x.pop();0<x.length&&3>x[x.length-1].length;)"]"===x.pop()&&r();0<x.length&&3>x[0].length&&x.shift();for(e=0;e<x.length;++e)x[e].endsWith(",")&&(x[e]=x[e].substr(0,x[e].length-1));0===ba&&0<x.length&&(ba=JSON.parse(x.shift()).id,e=da,da=null,e.resolve(ba));var y;for(e=0;e<x.length;++e)(y=JSON.parse(x[e]))&&y.end?close():y&&y.hb&&y.id===ba?n({hb:!0}):Ea(y)}catch(Fa){}ha||(h=!0,w())}};y.send()}var y,z=h(f),aa=e,ba=0,da=window.createPromiseCapability(),
ha=!1,ia=null,Ea=null,ua=0;return{send:n,HK:function(e,f,h){Ea=e;ia=h;ha=!1;r();w();f&&f();return Promise.resolve()},iG:function(){r();Ea=null;ha=!0;ia&&ia();y.abort();return Promise.resolve()}}}(f,w)}f.d(da,"a",function(){return ba});var ea=f(2),aa=f(29),ha=f(42),ca=f(158)}}]);}).call(this || window)