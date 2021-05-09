!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Nabla=e():t.Nabla=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e),n.d(e,"Canvas",(function(){return d})),n.d(e,"Canvas2D",(function(){return w})),n.d(e,"ImageIO",(function(){return i})),n.d(e,"Stream",(function(){return A})),n.d(e,"ArrayUtils",(function(){return E})),n.d(e,"Sort",(function(){return P})),n.d(e,"EditDistance",(function(){return N})),n.d(e,"Vector",(function(){return Q})),n.d(e,"Pair",(function(){return rt})),n.d(e,"List",(function(){return pt}));var r={getImageCanvas:function(t){var e=document.createElement("canvas");e.width=t.width,e.height=t.height;var n=e.getContext("2d");return n.fillStyle="rgba(0, 0, 0, 0)",n.globalCompositeOperation="source-over",n.fillRect(0,0,e.width,e.height),n.drawImage(t,0,0),e},getDataFromImage:function(t){return canvas=r.getImageCanvas(t),canvas.getContext("2d").getImageData(0,0,t.width,t.height)},loadImage:function(t){var e=new Image;return e.src=t,e.isReady=!1,e.onload=function(){return e.isReady=!0},e},generateImageReadyPredicate:function(t){return function(){return t.isReady}}},i=r;function a(t,e){var n=[];return n[0]=t[0]+e[0],n[1]=t[1]+e[1],n}function o(t){var e=[];return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e}function u(t,e){var n=[];return n[0]=t[0]-e[0],n[1]=t[1]-e[1],n}function c(t,e){return t[0]*e[0]+t[1]*e[1]}function f(t){return c(t,t)}function s(t){return Math.sqrt(c(t,t))}function h(t,e){var n=[];return n[0]=Math.min(t[0],e[0]),n[1]=Math.min(t[1],e[1]),n}function l(t,e){var n=[];return n[0]=Math.max(t[0],e[0]),n[1]=Math.max(t[1],e[1]),n}function p(t,e,n){var r=n[1]/t[1];return[r,(-t[0]*r+n[0])/e]}function v(t,e,n){var r=n[0]/t[0];return[r,(-t[1]*r+n[1])/e]}var g,y=function(t){this.canvas=t,this.ctx=t.getContext("2d"),this.image=this.ctx.getImageData(0,0,t.width,t.height),this.imageData=this.image.data};y.prototype.getSize=function(){return[this.canvas.height,this.canvas.width]},y.prototype.paintImage=function(){this.ctx.putImageData(this.image,0,0)},y.prototype.getCanvas=function(){return this.canvas},y.prototype.clearImage=function(t){this.useCanvasCtx((function(e){var n=e.getSize();e.ctx.fillStyle="rgba("+t[0]+","+t[1]+","+t[2]+","+t[3]+")",e.ctx.globalCompositeOperation="source-over",e.ctx.fillRect(0,0,n[1],n[0])}),!0)},y.prototype.useCanvasCtx=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e||this.ctx.putImageData(this.image,0,0),t(this),this.image=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height),this.imageData=this.image.data},y.prototype.getImageIndex=function(t){return 4*(this.canvas.width*t[0]+t[1])},y.prototype.getPxl=function(t){var e=this.getImageIndex(t);return[this.imageData[e],this.imageData[e+1],this.imageData[e+2],this.imageData[e+3]]},y.prototype.drawPxl=function(t,e){var n=this.getImageIndex(t);this.imageData[n]=e[0],this.imageData[n+1]=e[1],this.imageData[n+2]=e[2],this.imageData[n+3]=e[3]},y.prototype.drawLine=function(t,e,n){n.points=[t,e];var r=[];r.push(t),r.push(e);for(var i=[],a=[],o=0;o<r.length;o++){0<=(l=r[o])[0]&&l[0]<this.canvas.height&&0<=l[1]&&l[1]<this.canvas.width?i.push(l):a.push(l)}if(2!=i.length){var f=[],s=[e[0]-t[0],e[1]-t[1]];f.push(p(s,-(this.canvas.height-1),[-t[0],-t[1]])),f.push(v(s,-(this.canvas.width-1),[this.canvas.height-1-t[0],-t[1]])),f.push(p(s,this.canvas.height-1,[this.canvas.height-1-t[0],this.canvas.width-1-t[1]])),f.push(v(s,this.canvas.width-1,[-t[0],this.canvas.width-1-t[1]]));var h=[];for(o=0;o<f.length;o++){var l;0<=(l=f[o])[0]&&l[0]<=1&&0<=l[1]&&l[1]<=1&&h.push(l)}if(0!=h.length)if(i.length>0){var g=[t[0]+h[0][0]*s[0],t[1]+h[0][0]*s[1]];this.drawLineInt(i.pop(),g,n)}else{var y=[t[0]+h[0][0]*s[0],t[1]+h[0][0]*s[1]];for(o=1;o<h.length;o++){if(c(s=u(g=[t[0]+h[o][0]*s[0],t[1]+h[o][0]*s[1]],y),s)>.001)return void this.drawLineInt(y,g,n)}this.drawLineInt(y,y,n)}}else this.drawLineInt(i[0],i[1],n)},y.prototype.drawLineInt=function(t,e,n){t=o(t),e=o(e);var r=[-1,0,1],i=r.length,f=i*i,s=[];s[0]=t[0],s[1]=t[1];var h=u(e,t),l=[];for(l[0]=-h[1],l[1]=h[0],n(s,n.points,this);s[0]!==e[0]||s[1]!==e[1];){for(var p=Number.MAX_VALUE,v=[],g=0;g<f;g++){var y=r[g%i],d=r[Math.floor(g/i)],m=u(a(s,[y,d]),t),w=Math.abs(c(m,l))-c(m,h);p>w&&(p=w,v=[y,d])}n(s=a(s,v),n.points,this)}n(s,n.points,this)},y.prototype.drawPolygon=function(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y.isInsidePolygon,r=[[Number.MAX_VALUE,Number.MAX_VALUE],[Number.MIN_VALUE,Number.MIN_VALUE]],i=0;i<t.length;i++)r[0]=h(t[i],r[0]),r[1]=l(t[i],r[1]);var a=this.getSize(),c=u(a,[1,1]),f=[0,0];r[0]=o(h(c,l(f,r[0]))),r[1]=o(h(c,l(f,r[1])));for(var s=r[0][0];s<r[1][0];s++)for(var p=r[0][1];p<r[1][1];p++){var v=[s,p];n(v,t)&&e(v,t,this)}},y.prototype.drawTriangle=function(t,e,n,r){var i=[t,e,n];this.drawPolygon(i,r,y.isInsideConvex)},y.prototype.drawQuad=function(t,e,n,r,i){this.drawPolygon([t,e,n,r],i)},y.prototype.drawImage=function(t,e){"isReady"in t&&!t.isReady||this.useCanvasCtx((function(n){return n.ctx.drawImage(t,e[1],e[0])}))},y.prototype.drawCircle=function(t,e,n){var r=function(t,e){var n=[];return n[0]=t[0]*e,n[1]=t[1]*e,n}([1,1],e),i=[u(t,r),a(t,r)],c=this.getSize();i[0]=o(h(u(c,[1,1]),l([0,0],i[0]))),i[1]=o(h(u(c,[1,1]),l([0,0],i[1])));for(var f=i[0][0];f<=i[1][0];f++)for(var s=i[0][1];s<=i[1][1];s++){var p=[f,s];this.isInsideCircle(p,t,e)&&n(p,[t,e],this)}},y.prototype.isInsideCircle=function(t,e,n){return f(u(t,e))<=n*n},y.prototype.addEventListener=function(t,e,n){this.canvas.addEventListener(t,e,n)},y.prototype.drawString=function(t,e,n){this.useCanvasCtx((function(r){n(r.ctx),r.ctx.fillText(e,t[1],t[0])}))},y.isInsidePolygon=function(t,e){for(var n=[],r=0,i=e.length,a=0;a<i;a++)n[0]=u(e[(a+1)%i],t),n[1]=u(e[a],t),r+=Math.acos(c(n[0],n[1])/(s(n[0])*s(n[1])));return Math.abs(r-2*Math.PI)<.001},y.isInsideConvex=function(t,e){for(var n=e.length,r=[],i=[],a=0;a<n;a++){r[a]=u(e[(a+1)%n],e[a]);var o=[-r[a][1],r[a][0]],f=u(t,e[a]);i[a]=c(f,o)}var s=r[0][0]*r[1][1]-r[0][1]*r[1][0]>0?1:-1;for(a=0;a<n;a++){if(i[a]*s<0)return!1}return!0},y.simpleShader=function(t){return function(e,n,r){return r.drawPxl(e,t)}},y.colorShader=function(t){return y.interpolateTriangleShader((function(e,n,r,i){for(var a=[0,0,0,0],o=0;o<n.length;o++)a[0]=a[0]+t[o][0]*i[o],a[1]=a[1]+t[o][1]*i[o],a[2]=a[2]+t[o][2]*i[o],a[3]=a[3]+t[o][3]*i[o];r.drawPxl(e,a)}))},y.interpolateQuadShader=function(t){return function(e,n,r){var i=[n[0],n[1],n[2]],a=[n[2],n[3],n[0]],o=y.triangleBaryCoord(e,i);o[0]>0&&o[1]>0&&o[2]>0&&Math.abs(o[0]+o[1]+o[2]-1)<1e-10?t(e,n,r,[o[0],o[1],o[2],0]):(o=y.triangleBaryCoord(e,a),t(e,n,r,[o[2],0,o[0],o[1]]))}},y.interpolateTriangleShader=function(t){return function(e,n,r){alpha=y.triangleBaryCoord(e,n),t(e,n,r,alpha)}},y.interpolateLineShader=function(t){return function(e,n,r){var i=u(n[1],n[0]),a=u(e,n[0]),o=f(i),s=c(a,i);t(e,n,r,0==o?0:s/o)}},y.quadTextureShader=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y.bilinearInterpolation,r=null,c=function(c,f,s,p){t.isReady&&null!=r||(r=new y(i.getImageCanvas(t)));for(var v=r,g=v.getSize(),d=[0,0],m=0;m<e.length;m++)d[0]=d[0]+e[m][0]*p[m],d[1]=d[1]+e[m][1]*p[m];var w=[(1-d[1])*(g[1]-1),(g[0]-1)*d[0]],b=o(w=l([0,0],h(u([g[0],g[1]],[1,1]),w))),S=[v.getPxl(b),v.getPxl(a(b,[1,0])),v.getPxl(a(b,[1,1])),v.getPxl(a(b,[0,1]))],x=n(S,u(w,b));s.drawPxl(c,x)};return y.interpolateQuadShader(c)},y.triangleCache=(g=[],{constains:function(t){return null!=g[t%3]},get:function(t){return g[t%3]},set:function(t,e){return g[t%3]=e}}),y.triangleHash=function(t){return[t[0][0],t[1][0],t[2][0],t[0][1],t[1][1],t[2][1]].reduce((function(t,e){return 31*t+e}),1)},y.triangleBaryCoord=function(t,e){var n=y.triangleHash(e),r=[t[0]-e[0][0],t[1]-e[0][1]];if(!y.triangleCache.constains(n)){var i=[e[1][0]-e[0][0],e[1][1]-e[0][1]],a=[e[2][0]-e[0][0],e[2][1]-e[0][1]],o=i[0]*a[1]-i[1]*a[0];y.triangleCache.set(n,{triangle:e,u:i.map((function(t){return t/o})),v:a.map((function(t){return t/o})),det:o,hash:n})}var u=y.triangleCache.get(n),c=u.u,f=u.v;if(0==u.det)return[0,0,0];var s=[f[1]*r[0]-f[0]*r[1],c[0]*r[1]-c[1]*r[0]];return[1-s[0]-s[1],s[0],s[1]]},y.bilinearInterpolation=function(t,e){for(var n=[],r=0;r<t.length;r++){var i=t[0][r]+(t[3][r]-t[0][r])*e[1],a=i+(t[1][r]+(t[2][r]-t[1][r])*e[1]-i)*e[0];n.push(a)}return n},y.createCanvas=function(t,e){var n=document.createElement("canvas");return n.setAttribute("width",t[0]),n.setAttribute("height",t[1]),document.getElementById(e).appendChild(n),n};var d=y,m=function(t,e){if(d.call(this,t),2!=e.length||2!=e[0].length&&2!=e[1].length)throw"camera space must be 2-dim array with 2-dim arrays representing an interval";this.cameraSpace=e};(m.prototype=Object.create(d.prototype)).constructor=m,m.prototype.integerTransform=function(t){return[-(this.canvas.height-1)/(this.cameraSpace[1][1]-this.cameraSpace[1][0])*(t[1]-this.cameraSpace[1][1]),(this.canvas.width-1)/(this.cameraSpace[0][1]-this.cameraSpace[0][0])*(t[0]-this.cameraSpace[0][0])]},m.prototype.inverseTransform=function(t){return[this.cameraSpace[0][0]+(this.cameraSpace[0][1]-this.cameraSpace[0][0])/(this.canvas.width-1)*t[1],this.cameraSpace[1][1]-(this.cameraSpace[1][1]-this.cameraSpace[1][0])/(this.canvas.height-1)*t[0]]},m.prototype.drawLine=function(t,e,n){var r=this.integerTransform(t),i=this.integerTransform(e);d.prototype.drawLine.call(this,r,i,n)},m.prototype.drawTriangle=function(t,e,n,r){var i=this.integerTransform(t),a=this.integerTransform(e),o=this.integerTransform(n);d.prototype.drawTriangle.call(this,i,a,o,r)},m.prototype.drawQuad=function(t,e,n,r,i){var a=this.integerTransform(t),o=this.integerTransform(e),u=this.integerTransform(n),c=this.integerTransform(r);d.prototype.drawQuad.call(this,a,o,u,c,i)},m.prototype.drawCircle=function(t,e,n){var r=this.integerTransform(t),i=this.integerTransform([e,0])[1]-this.integerTransform([0,0])[1];d.prototype.drawCircle.call(this,r,i,n)},m.prototype.drawImage=function(t,e){d.prototype.drawImage.call(this,t,this.integerTransform(e))},m.prototype.drawString=function(t,e,n){var r=this.integerTransform(t);d.prototype.drawString.call(this,r,e,n)},m.prototype.setCamera=function(t){if(2!=t.length||2!=t[0].length&&2!=t[1].length)throw"camera space must be 2-dim array with 2-dim arrays representing an interval";this.cameraSpace=t};var w=m,b=function(t){this.f=t};b.prototype.compose=function(t){var e=this;return new b((function(n){return e.f(t(n))}))},b.prototype.leftCompose=function(t){var e=this;return new b((function(n){return t(e.f(n))}))},b.prototype.apply=function(t){return this.f(t)},b.prototype.get=function(){return this.f},b.of=function(t){return new b(t)};var S=b,x=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(t){return t},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return!0};this.gen=t,this.mapFunction=e,this.filterPredicate=n};x.prototype.state=function(){return this.gen.state},x.prototype.hasNext=function(){return this.gen.hasNext(this.filteredState())},x.prototype.filteredState=function(){for(var t=this.state();this.gen.hasNext(t)&&!this.filterPredicate(this.gen.peek(t));)t=this.gen.next(t);return t},x.prototype.head=function(){var t=this.filteredState();if(this.gen.hasNext(t))return this.gen.peek(t);throw"No head element exception"},x.prototype.tail=function(){return new x(x.generatorOf(this.gen.next(this.filteredState()),this.gen.next,this.gen.peek,this.gen.hasNext),this.mapFunction,this.filterPredicate)},x.prototype.map=function(t){return new x(this.gen,S.of(t).compose(this.mapFunction).get(),this.filterPredicate)},x.prototype.reduce=function(t,e){for(var n=this;n.hasNext();){var r=n.head();t=e(t,n.mapFunction(r)),n=n.tail()}return t},x.prototype.forEach=function(t){for(var e=this;e.hasNext();){var n=e.head();t(e.mapFunction(n)),e=e.tail()}},x.prototype.collect=function(t){return this.reduce(t.identity,t.reduce)},x.prototype.filter=function(t){var e=this;return new x(this.gen,this.mapFunction,(function(n){return e.filterPredicate(n)&&t(n)}))},x.prototype.take=function(t){return new x(x.generatorOf({i:0,stream:this},(function(t){return{i:t.i+1,stream:t.stream.tail()}}),(function(t){return t.stream.head()}),(function(e){return e.stream.hasNext()&&e.i<t})),this.mapFunction,this.filterPredicate).collect(x.Collectors.toArray())},x.prototype.takeWhile=function(t){return new x(x.generatorOf(this,(function(t){return t.tail()}),(function(t){return t.head()}),(function(e){return e.hasNext()&&t(e.head())})),this.mapFunction,this.filterPredicate).collect(x.Collectors.toArray())},x.prototype.zip=function(t){return new x(x.generatorOf([this,t],(function(t){return[t[0].tail(),t[1].tail()]}),(function(t){return[t[0].head(),t[1].head()]}),(function(t){return t[0].hasNext()&&t[1].hasNext()})))},x.prototype.flatMap=function(t){return new x(x.generatorOf({baseStream:this,flatStream:null},(function(e){if(!e.flatStream||!e.flatStream.hasNext()){var n=e.baseStream;return{baseStream:n.tail(),flatStream:t(n.head()).tail()}}return{baseStream:e.baseStream,flatStream:e.flatStream.tail()}}),(function(e){return e.flatStream&&e.flatStream.hasNext()?e.flatStream.head():t(e.baseStream.head()).head()}),(function(e){return e.flatStream?e.baseStream.hasNext()||e.flatStream.hasNext():e.baseStream.hasNext()&&t(e.baseStream.head()).hasNext()})))},x.ofHeadTail=function(t,e){return new x(x.generatorOf({h:t,supplier:e},(function(t){var e=t.supplier();return e.hasNext()?{h:e.head(),supplier:function(){return e.tail()}}:{h:null,supplier:null}}),(function(t){return t.h}),(function(t){return null!=t.h})))},x.of=function(t){for(var e=[{name:"Array",predicate:function(t){return t.constructor===Array}},{name:"Generator",predicate:function(t){return"function"==typeof t.hasNext&&"function"==typeof t.next&&"function"==typeof t.peek}},{name:"Stream",predicate:function(t){return t.__proto__==x.prototype}}],n={Array:function(t){return new x(x.generatorOf({i:0,array:t},(function(t){return{i:t.i+1,array:t.array}}),(function(t){return t.array[t.i]}),(function(t){return t.i<t.array.length})))},Generator:function(t){return new x(t)},Stream:function(t){return new x(t.gen,t.mapFunction,t.filterPredicate)}},r=0;r<e.length;r++)if(e[r].predicate(t))return n[e[r].name](t);throw"Iterable ".concat(t," does not have a stream")},x.range=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return new x(x.generatorOf(t,(function(t){return t+n}),(function(t){return t}),(function(t){return null==e||t<e})))},x.generatorOf=function(t,e,n,r){return new function(){this.state=t,this.next=e,this.peek=n,this.hasNext=r}},x.Collectors={toArray:function(){return new function(){this.identity=[],this.reduce=function(t,e){return t.push(e),t}}}};var A=x;function k(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var T={arrayEquals:function(t,e){if(!(t instanceof Array))return!1;if(!(e instanceof Array))return!1;if(t.length!=e.length)return!1;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0},permute:function(t,e){for(var n=t.slice(),r=Math.min(t.length,e.length),i=0;i<r;i++)n[e[i]]=t[i];return n},shuffle:function(t){for(var e=k(t),n=t.length-1;n>0;n--){var r=Math.floor(Math.random()*(n+1)),i=e[n];e[n]=e[r],e[r]=i}return e},swap:function(t,e,n){var r=k(t),i=r[e];return r[e]=r[n],r[n]=i,r},findJsArrayDim:function(t){return t instanceof Array?T.findJsArrayDim(t[0]).concat([t.length]):[]},unpackJsArray:function(t){if(!(t instanceof Array))return[t];for(var e=[],n=0;n<t.length;n++)e=e.concat(T.unpackJsArray(t[n]));return e},range:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=[];if(t>=e)return r;for(var i=t;i<e;i+=n)r.push(i);return r}}};T.range0=T.range(),T.binaryOp=function(t,e,n){for(var r=t.length<e.length?t.slice():e.slice(),i=0;i<r.length;i++)r[i]=n(t[i],e[i]);return r},T.groupBy=function(t,e){var n={};return t.forEach((function(t){var r=e(t);n[r]||(n[r]=[]),n[r].push(t)})),n};var E=T;function _(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var I={};function O(t,e,n){if(e>=0&&e<t.length&&n>=0&&n<t.length){var r=t[e];t[e]=t[n],t[n]=r}}I.quicksort=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(t,e){return t-e},n=t.length,r=_(t),i=[];for(i.push(0),i.push(n-1);i.length>0;){var a=i.pop(),o=i.pop();if(o<a){var u=o+Math.floor((a-o)*Math.random()),c=r[u];O(r,u,a);for(var f=o,s=o;s<a;s++)e(r[s],c)<=0&&(O(r,s,f),f++);O(r,f,a),i.push(o),i.push(f-1),i.push(f+1),i.push(a)}}return r},I.REVERSE_SORT_COMPARATOR=function(t,e){return e-t};var P=I,C={distanceFactory:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return function(r,i){for(var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){},o=r.length,u=i.length,c=M(o+1,u+1),f=0;f<o+1;f++)c[f][0]=f*e;for(var s=0;s<u+1;s++)c[0][s]=s*n;for(var h=1;h<o+1;h++)for(var l=1;l<u+1;l++){var p=r[h-1]===i[l-1],v=c[h-1][l]+e,g=c[h][l-1]+n,y=c[h-1][l-1]+(p?0:t);c[h][l]=j(v,g,y)}return a(c,r,i),c[o][u]}}};C.distance=C.distanceFactory(),C.printDistanceMatrix=function(t,e,n){var r=[];t.forEach((function(t,e){var n=[];t.forEach((function(t,e){return n.push("".concat(t))})),r.push(n.join(" "))})),console.log("w1: ".concat(e,", w2: ").concat(n,"\n"),r.join("\n"))};var M=function(t,e){return Array.from(Array(t),(function(){return new Array(e)}))},j=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.reduce((function(t,e){return Math.min(t,e)}),Number.MAX_VALUE)},N=C;function R(t){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function L(t,e){return!e||"object"!==R(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function D(t){var e="function"==typeof Map?new Map:void 0;return(D=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return z(t,arguments,q(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),V(r,t)})(t)}function F(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function z(t,e,n){return(z=F()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&V(i,n.prototype),i}).apply(null,arguments)}function V(t,e){return(V=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function q(t){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function U(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function B(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function W(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Q=function(){function t(e){var n=this;U(this,t),W(this,"size",(function(){return n._n})),W(this,"shape",(function(){return[n._n]})),W(this,"fold",this.reduce),W(this,"foldLeft",this.fold),this._vec=X(e.length);for(var r=0;r<e.length;r++){var i=e[r],a=null!==i&void 0!==i&"number"==typeof i;this._vec[r]=a?i:0}this._n=this._vec.length}var e,n,r;return e=t,r=[{key:"fromArray",value:function(e){return new t(e)}},{key:"of",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return new t(n)}}],(n=[{key:"get",value:function(t){return this._vec[t]}},{key:"toArray",value:function(){for(var t=X(this._n),e=0;e<t.length;e++)t[e]=this._vec[e];return t}},{key:"toString",value:function(){return"["+this._vec.join(", ")+"]"}},{key:"add",value:function(t){return this.op(t,(function(t,e){return t+e}))}},{key:"sub",value:function(t){return this.op(t,(function(t,e){return t-e}))}},{key:"mul",value:function(t){return this.op(t,(function(t,e){return t*e}))}},{key:"div",value:function(t){return this.op(t,(function(t,e){return t/e}))}},{key:"dot",value:function(t){for(var e=0,n=0;n<this._n;n++)e+=this._vec[n]*t._vec[n];return e}},{key:"squareLength",value:function(){return this.dot(this)}},{key:"length",value:function(){return Math.sqrt(this.dot(this))}},{key:"normalize",value:function(){return this.scale(1/this.length())}},{key:"scale",value:function(t){return this.map((function(e){return e*t}))}},{key:"map",value:function(e){for(var n=X(this._n),r=0;r<this._n;r++)n[r]=e(this._vec[r],r);return new t(n)}},{key:"op",value:function(e,n){!function(t,e){if(t.n===e.n)return!0;throw new H("Vector must have same size")}(this,e);for(var r=X(this._n),i=0;i<this._n;i++)r[i]=n(this._vec[i],e._vec[i]);return new t(r)}},{key:"reduce",value:function(t,e){for(var n=e,r=0;r<this._n;r++)n=t(n,this._vec[r],r);return n}},{key:"equals",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e-5;return e instanceof t&&this.sub(e).length()<n}},{key:"take",value:function(e){return new t(this._vec.slice(0,e))}},{key:"n",get:function(){return this._n}}])&&B(e.prototype,n),r&&B(e,r),t}();W(Q,"ZERO",(function(t){return new Q(X(t))})),W(Q,"e",(function(t){return function(e){var n=X(t);return e>=0&&e<t&&(n[e]=1),new Q(n)}}));var J={Float32Array:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t){return new Float32Array(t)})),Float64Array:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t){return new Float64Array(t)}))};var X=function(t){return J.Float64Array(t)},H=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&V(t,e)}(n,t);var e=function(t){function e(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var n,r=q(t);if(e()){var i=q(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return L(this,n)}}(n);function n(){return U(this,n),e.apply(this,arguments)}return n}(D(Error));function Y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t))&&"[object Arguments]"!==Object.prototype.toString.call(t))return;var n=[],r=!0,i=!1,a=void 0;try{for(var o,u=t[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(t){i=!0,a=t}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function G(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function K(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function $(t,e){var n=e.get(t);if(!n)throw new TypeError("attempted to get private field on non-instance");return n.get?n.get.call(t):n.value}function tt(t,e,n){var r=e.get(t);if(!r)throw new TypeError("attempted to set private field on non-instance");if(r.set)r.set.call(t,n);else{if(!r.writable)throw new TypeError("attempted to set read only private field");r.value=n}return n}var et=new WeakMap,nt=new WeakMap,rt=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;G(this,t),et.set(this,{writable:!0,value:null}),nt.set(this,{writable:!0,value:null}),K(this,"key",this.left),K(this,"val",this.right),K(this,"first",this.left),K(this,"second",this.right),K(this,"car",this.left),K(this,"cdr",this.right),tt(this,et,e),tt(this,nt,n)}var e,n,r;return e=t,r=[{key:"of",value:function(e,n){return new t(e,n)}},{key:"fromArray",value:function(e){var n=Y(e,2);return new t(n[0],n[1])}}],(n=[{key:"left",value:function(){return $(this,et)}},{key:"right",value:function(){return $(this,nt)}},{key:"map",value:function(e){return t.fromArray([$(this,et),$(this,nt)].map(e))}},{key:"reduce",value:function(t,e){return[$(this,et),$(this,nt)].reduce(t,e)}},{key:"op",value:function(e,n){return t.of(n($(this,et),$(e,et)),n($(this,nt),$(e,nt)))}},{key:"isEmpty",value:function(){return!$(this,et)&&!$(this,nt)}},{key:"toArray",value:function(){return[$(this,et),$(this,nt)]}}])&&Z(e.prototype,n),r&&Z(e,r),t}();function it(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function at(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ot(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function ut(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ct(t,e){var n=e.get(t);if(!n)throw new TypeError("attempted to get private field on non-instance");return n.get?n.get.call(t):n.value}function ft(t,e,n){var r=e.get(t);if(!r)throw new TypeError("attempted to set private field on non-instance");if(r.set)r.set.call(t,n);else{if(!r.writable)throw new TypeError("attempted to set read only private field");r.value=n}return n}K(rt,"cons",rt.of);var st=new WeakMap,ht=new WeakMap,lt=new WeakMap,pt=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.EMPTY_LIST;if(at(this,t),st.set(this,{writable:!0,value:new rt}),ht.set(this,{writable:!0,value:null}),lt.set(this,{writable:!0,value:-1}),ut(this,"sum",this.concat),null==e)return this;ft(this,st,new rt(e,vt(n)?new t:n)),ft(this,ht,this.getLast())}var e,n,r;return e=t,r=[{key:"fromArray",value:function(e){var n=it(e),r=n[0],i=n.slice(1);return r?new t(r,t.fromArray(i)):new t}},{key:"of",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.fromArray(n)}},{key:"rangeTail",value:function(e,n,r,i){return e>=n?i:t.rangeTail(e+r,n,r,i.concat(new t(e)))}}],(n=[{key:"head",value:function(){return ct(this,st).left()}},{key:"tail",value:function(){return ct(this,st).right()}},{key:"concat",value:function(e){return this.isEmpty()?e:new t(this.head(),this.tail().concat(e))}},{key:"concatTail",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this;return this.isEmpty()?t:t.isEmpty()?e:this.concatTail(t.tail(),e.push(t.head()))}},{key:"push",value:function(e){return this.isEmpty()?new t(e):new t(this.head(),this.tail().push(e))}},{key:"map",value:function(t){}},{key:"isEmpty",value:function(){return ct(this,st).isEmpty()}},{key:"length",value:function(){return ct(this,lt)>=0?ct(this,lt):this.isEmpty()?0:(ft(this,lt,1+this.tail().length()),ct(this,lt))}},{key:"getLast",value:function(){return null!==ct(this,ht)?ct(this,ht):this.tail().isEmpty()?this:(ft(this,ht,this.tail().getLast()),ct(this,ht))}},{key:"toArray",value:function(){return this.isEmpty()?[]:[this.head()].concat(this.tail().toArray())}},{key:"toString",value:function(){return this.isEmpty()?"[]":"[".concat(this.toStringRecursive(),"]")}},{key:"toStringRecursive",value:function(){return this.isEmpty()?"":"".concat(this.head(),", ").concat(this.tail().toStringRecursive())}}])&&ot(e.prototype,n),r&&ot(e,r),t}();function vt(t){return!(t&&t instanceof pt)}ut(pt,"EMPTY_LIST",new pt),ut(pt,"range",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return t<e?new pt(t,pt.range(t+n)(e,n)):pt.EMPTY_LIST}})),ut(pt,"range0",pt.range(0)),ut(pt,"rangeR",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return pt.rangeTail(t,e,n,new pt)}}))}])}));