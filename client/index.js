/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa;if(void 0!==this)aa=this;else if("undefined"!=typeof global)aa=global;else{if("undefined"==typeof self)throw new Error("Can't find global scope");aa=self};function k(a,b){function c(){}c.prototype=b.prototype;a.Fa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ma=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}};function l(a,b){null!=a&&this.append.apply(this,arguments)}l.prototype.g="";l.prototype.set=function(a){this.g=""+a};l.prototype.append=function(a,b,c){this.g+=String(a);if(null!=b)for(var d=1;d<arguments.length;d++)this.g+=arguments[d];return this};l.prototype.clear=function(){this.g=""};l.prototype.toString=function(){return this.g};var n=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ba=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];b.call(void 0,h,
g,a)&&(d[e++]=h)}return d};function ca(a,b){a.sort(b||da)}function da(a,b){return a>b?1:a<b?-1:0};function ea(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};function fa(a,b){this.o=a;this.ma=!!b.ka;this.$=b.a;this.wa=b.type;this.ra=!1;switch(this.$){case ha:case ia:case ja:case ka:case la:case ma:case na:this.ra=!0}this.ha=b.defaultValue}var na=1,ma=2,ha=3,ia=4,ja=6,ka=16,la=18;function oa(a,b){this.Ca=a;this.v={};for(var c=0;c<b.length;c++){var d=b[c];this.v[d.o]=d}}function pa(a){a=ea(a.v);ca(a,function(b,c){return b.o-c.o});return a};function p(){this.j={};this.v=this.f().v;this.h=this.va=null}p.prototype.has=function(a){return q(this,a.o)};p.prototype.get=function(a,b){return r(this,a.o,b)};p.prototype.set=function(a,b){t(this,a.o,b)};p.prototype.add=function(a,b){qa(this,a.o,b)};p.prototype.clear=function(a){a=a.o;delete this.j[a];this.h&&delete this.h[a]};
function ra(a,b){for(var c=pa(a.f()),d=0;d<c.length;d++){var e=c[d],f=e.o;if(q(b,f)){a.h&&delete a.h[e.o];var g=11==e.$||10==e.$;if(e.ma){e=u(b,f);for(var h=0;h<e.length;h++)qa(a,f,g?e[h].clone():e[h])}else e=v(b,f),g?(g=v(a,f))?ra(g,e):t(a,f,e.clone()):t(a,f,e)}}}p.prototype.clone=function(){var a=new this.constructor;a!=this&&(a.j={},a.h&&(a.h={}),ra(a,this));return a};function q(a,b){return null!=a.j[b]}
function v(a,b){var c=a.j[b];if(null==c)return null;if(a.va){if(!(b in a.h)){var d=a.va,e=a.v[b];if(null!=c)if(e.ma){for(var f=[],g=0;g<c.length;g++)f[g]=d.la(e,c[g]);c=f}else c=d.la(e,c);return a.h[b]=c}return a.h[b]}return c}function r(a,b,c){var d=v(a,b);return a.v[b].ma?d[c||0]:d}function w(a,b){if(q(a,b))var c=r(a,b,void 0);else a:{c=a.v[b];if(void 0===c.ha){var d=c.wa;if(d===Boolean)c.ha=!1;else if(d===Number)c.ha=0;else if(d===String)c.ha=c.ra?"0":"";else{c=new d;break a}}c=c.ha}return c}
function u(a,b){return v(a,b)||[]}function x(a,b){return a.v[b].ma?q(a,b)?a.j[b].length:0:q(a,b)?1:0}function t(a,b,c){a.j[b]=c;a.h&&(a.h[b]=c)}function qa(a,b,c){a.j[b]||(a.j[b]=[]);a.j[b].push(c);a.h&&delete a.h[b]}function z(a,b){var c=[],d;for(d in b)0!=d&&c.push(new fa(d,b[d]));return new oa(a,c)};function A(){}A.prototype.ia=function(a){new a.Ca;throw Error("Unimplemented");};A.prototype.la=function(a,b){if(11==a.$||10==a.$)return b instanceof p?b:this.ia(a.wa.prototype.f(),b);if(14==a.$){if("string"===typeof b&&sa.test(b)){var c=Number(b);if(0<c)return c}return b}if(!a.ra)return b;c=a.wa;if(c===String){if("number"===typeof b)return String(b)}else if(c===Number&&"string"===typeof b&&("Infinity"===b||"-Infinity"===b||"NaN"===b||sa.test(b)))return Number(b);return b};var sa=/^-?[0-9]+$/;function ta(){}k(ta,A);ta.prototype.ia=function(a,b){var c=new a.Ca;c.va=this;c.j=b;c.h={};return c};function B(){}k(B,ta);B.prototype.Ga=!1;B.prototype.la=function(a,b){return 8==a.$?!!b:A.prototype.la.apply(this,arguments)};B.prototype.ia=function(a,b){var c=b;if(this.Ga){c=[];for(var d in b)c[parseInt(d,10)+1]=b[d]}return B.Fa.ia.call(this,a,c)};/*

 Protocol Buffer 2 Copyright 2008 Google Inc.
 All other code copyright its respective owners.
 Copyright (C) 2010 The Libphonenumber Authors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function C(){p.call(this)}k(C,p);var ua=null;function D(){p.call(this)}k(D,p);var va=null;D.prototype.Aa=function(){return r(this,6)};function E(){p.call(this)}k(E,p);var wa=null;E.prototype.za=function(){return r(this,10)};E.prototype.ba=function(){return w(this,10)};E.prototype.fa=function(a){t(this,10,a)};
C.prototype.f=function(){var a=ua;a||(ua=a=z(C,{0:{name:"NumberFormat",sa:"i18n.phonenumbers.NumberFormat"},1:{name:"pattern",required:!0,a:9,type:String},2:{name:"format",required:!0,a:9,type:String},3:{name:"leading_digits_pattern",ka:!0,a:9,type:String},4:{name:"national_prefix_formatting_rule",a:9,type:String},6:{name:"national_prefix_optional_when_formatting",a:8,defaultValue:!1,type:Boolean},5:{name:"domestic_carrier_code_formatting_rule",a:9,type:String}}));return a};C.f=C.prototype.f;
D.prototype.f=function(){var a=va;a||(va=a=z(D,{0:{name:"PhoneNumberDesc",sa:"i18n.phonenumbers.PhoneNumberDesc"},2:{name:"national_number_pattern",a:9,type:String},9:{name:"possible_length",ka:!0,a:5,type:Number},10:{name:"possible_length_local_only",ka:!0,a:5,type:Number},6:{name:"example_number",a:9,type:String}}));return a};D.f=D.prototype.f;
E.prototype.f=function(){var a=wa;a||(wa=a=z(E,{0:{name:"PhoneMetadata",sa:"i18n.phonenumbers.PhoneMetadata"},1:{name:"general_desc",a:11,type:D},2:{name:"fixed_line",a:11,type:D},3:{name:"mobile",a:11,type:D},4:{name:"toll_free",a:11,type:D},5:{name:"premium_rate",a:11,type:D},6:{name:"shared_cost",a:11,type:D},7:{name:"personal_number",a:11,type:D},8:{name:"voip",a:11,type:D},21:{name:"pager",a:11,type:D},25:{name:"uan",a:11,type:D},27:{name:"emergency",a:11,type:D},28:{name:"voicemail",a:11,type:D},
29:{name:"short_code",a:11,type:D},30:{name:"standard_rate",a:11,type:D},31:{name:"carrier_specific",a:11,type:D},33:{name:"sms_services",a:11,type:D},24:{name:"no_international_dialling",a:11,type:D},9:{name:"id",required:!0,a:9,type:String},10:{name:"country_code",a:5,type:Number},11:{name:"international_prefix",a:9,type:String},17:{name:"preferred_international_prefix",a:9,type:String},12:{name:"national_prefix",a:9,type:String},13:{name:"preferred_extn_prefix",a:9,type:String},15:{name:"national_prefix_for_parsing",
a:9,type:String},16:{name:"national_prefix_transform_rule",a:9,type:String},18:{name:"same_mobile_and_fixed_line_pattern",a:8,defaultValue:!1,type:Boolean},19:{name:"number_format",ka:!0,a:11,type:C},20:{name:"intl_number_format",ka:!0,a:11,type:C},22:{name:"main_country_for_code",a:8,defaultValue:!1,type:Boolean},23:{name:"leading_digits",a:9,type:String},26:{name:"leading_zero_possible",a:8,defaultValue:!1,type:Boolean}}));return a};E.f=E.prototype.f;function F(){p.call(this)}k(F,p);var xa=null;F.prototype.za=function(){return r(this,1)};F.prototype.ba=function(){return w(this,1)};F.prototype.fa=function(a){t(this,1,a)};F.prototype.getExtension=function(){return r(this,3)};var ya={La:0,Ka:1,Ja:5,Ia:10,Ha:20};
F.prototype.f=function(){var a=xa;a||(xa=a=z(F,{0:{name:"PhoneNumber",sa:"i18n.phonenumbers.PhoneNumber"},1:{name:"country_code",required:!0,a:5,type:Number},2:{name:"national_number",required:!0,a:4,type:Number},3:{name:"extension",a:9,type:String},4:{name:"italian_leading_zero",a:8,type:Boolean},8:{name:"number_of_leading_zeros",a:5,defaultValue:1,type:Number},5:{name:"raw_input",a:9,type:String},6:{name:"country_code_source",a:14,defaultValue:0,type:ya},7:{name:"preferred_domestic_carrier_code",
a:9,type:String}}));return a};F.ctor=F;F.ctor.f=F.prototype.f;var G,H;function I(a){G=a.countryCodeToRegionCodeMap;H=a.countryToMetadata};/*

 Copyright (C) 2010 The Libphonenumber Authors.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function J(){this.Da={}}J.ua=void 0;J.Ba=function(){return J.ua?J.ua:J.ua=new J};
var za={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9"},Aa={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",
7:"7",8:"8",9:"9","+":"+","*":"*","#":"#"},Ba={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9",A:"2",
B:"2",C:"2",D:"3",E:"3",F:"3",G:"4",H:"4",I:"4",J:"5",K:"5",L:"5",M:"6",N:"6",O:"6",P:"7",Q:"7",R:"7",S:"7",T:"8",U:"8",V:"8",W:"9",X:"9",Y:"9",Z:"9"},Ca=RegExp("[+\uff0b]+"),K=RegExp("^[+\uff0b]+"),Da=RegExp("([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9])"),Ea=RegExp("[+\uff0b0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]"),Fa=/[\\\/] *x/,Ga=RegExp("[^0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9A-Za-z#]+$"),Ha=/(?:.*?[A-Za-z]){3}.*/,Ia=RegExp("(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|\u0434\u043e\u0431|[;,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\\.\uff0e]?[ \u00a0\\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)$",
"i"),Ja=RegExp("^[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{2}$|^[+\uff0b]*(?:[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e*]*[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]){3,}[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e*A-Za-z0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]*(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|\u0434\u043e\u0431|[;,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\\.\uff0e]?[ \u00a0\\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)?$",
"i"),Ka=/(\$\d)/,La=/^\(?\$1\)?$/;function Ma(a){var b=a.search(Ea);0<=b?(a=a.substring(b),a=a.replace(Ga,""),b=a.search(Fa),0<=b&&(a=a.substring(0,b))):a="";return a}function Na(a){return 2>a.length?!1:L(Ja,a)}function Oa(a){return L(Ha,a)?M(a,Ba):M(a,za)}function Pa(a){var b=Oa(a.toString());a.clear();a.append(b)}function Qa(){return ba(Object.keys(H),function(a){return isNaN(a)})}function Ra(a){return null!=a&&(1!=x(a,9)||-1!=u(a,9)[0])}
function M(a,b){for(var c=new l,d,e=a.length,f=0;f<e;++f)d=a.charAt(f),d=b[d.toUpperCase()],null!=d&&c.append(d);return c.toString()}function Sa(a){return 0==a.length||La.test(a)}function N(a){return null!=a&&isNaN(a)&&a.toUpperCase()in H}
J.prototype.format=function(a,b){if(0==r(a,2)&&q(a,5)){var c=w(a,5);if(0<c.length)return c}c=a.ba();var d=Ta(a);if(0==b)return Ua(c,0,d,"");if(!(c in G))return d;var e=O(this,c,P(c));var f=q(a,3)&&0!=a.getExtension().length?3==b?";ext="+a.getExtension():q(e,13)?r(e,13)+w(a,3):" ext. "+w(a,3):"";a:{e=0==u(e,20).length||2==b?u(e,19):u(e,20);for(var g,h=e.length,m=0;m<h;++m){g=e[m];var y=x(g,3);if(0==y||0==d.search(r(g,3,y-1)))if(y=new RegExp(r(g,1)),L(y,d)){e=g;break a}}e=null}null!=e&&(h=e,e=w(h,2),
g=new RegExp(r(h,1)),w(h,5),h=w(h,4),d=2==b&&null!=h&&0<h.length?d.replace(g,e.replace(Ka,h)):d.replace(g,e),3==b&&(d=d.replace(RegExp("^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]+"),""),d=d.replace(RegExp("[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]+","g"),"-")));return Ua(c,b,d,f)};
function O(a,b,c){return"001"==c?Q(a,""+b):Q(a,c)}function Ta(a){if(!q(a,2))return"";var b=""+r(a,2);return q(a,4)&&r(a,4)&&0<w(a,8)?Array(w(a,8)+1).join("0")+b:b}function Ua(a,b,c,d){switch(b){case 0:return"+"+a+c+d;case 1:return"+"+a+" "+c+d;case 3:return"tel:+"+a+"-"+c+d;default:return c+d}}J.prototype.Aa=function(){return Va(this,void 0,0)};function Va(a,b,c){if(!N(b))return null;c=R(Q(a,b),c);try{if(q(c,6))return a.parse(c.Aa(),b)}catch(d){}return null}
function R(a,b){switch(b){case 4:return r(a,5);case 3:return r(a,4);case 1:return r(a,3);case 0:case 2:return r(a,2);case 5:return r(a,6);case 6:return r(a,8);case 7:return r(a,7);case 8:return r(a,21);case 9:return r(a,25);case 10:return r(a,28);default:return r(a,1)}}function Q(a,b){if(null==b)return null;b=b.toUpperCase();var c=a.Da[b];if(null==c){c=H[b];if(null==c)return null;c=(new B).ia(E.f(),c);a.Da[b]=c}return c}
function S(a,b){var c=a.length;return 0<x(b,9)&&-1==n(u(b,9),c)?!1:L(w(b,2),a)}function P(a){a=G[a];return null==a?"ZZ":a[0]}function Wa(a,b){var c=Q(a,b);if(null==c)throw Error("Invalid region code: "+b);return c.ba()}
function T(a,b,c,d){var e=R(c,d),f=0==x(e,9)?u(r(c,1),9):u(e,9);e=u(e,10);if(2==d)if(Ra(R(c,0)))a=R(c,1),Ra(a)&&(f=f.concat(0==x(a,9)?u(r(c,1),9):u(a,9)),ca(f),0==e.length?e=u(a,10):(e=e.concat(u(a,10)),ca(e)));else return T(a,b,c,1);if(-1==f[0])return 5;b=b.length;if(-1<n(e,b))return 4;c=f[0];return c==b?0:c>b?2:f[f.length-1]<b?3:-1<n(f,b,1)?0:5}
function Xa(a,b){var c=a.toString();if(0==c.length||"0"==c.charAt(0))return 0;for(var d,e=c.length,f=1;3>=f&&f<=e;++f)if(d=parseInt(c.substring(0,f),10),d in G)return b.append(c.substring(f)),d;return 0}
function Ya(a,b,c,d,e){if(0==b.length)return 0;b=new l(b);var f;null!=c&&(f=r(c,11));null==f&&(f="NonMatch");var g=b.toString();if(0==g.length)f=20;else if(K.test(g))g=g.replace(K,""),b.clear(),b.append(Oa(g)),f=1;else{g=new RegExp(f);Pa(b);f=b.toString();if(0==f.search(g)){g=f.match(g)[0].length;var h=f.substring(g).match(Da);h&&null!=h[1]&&0<h[1].length&&"0"==M(h[1],za)?f=!1:(b.clear(),b.append(f.substring(g)),f=!0)}else f=!1;f=f?5:20}if(20!=f){if(2>=b.g.length)throw Error("Phone number too short after IDD");
a=Xa(b,d);if(0!=a)return e.fa(a),a;throw Error("Invalid country calling code");}if(null!=c&&(f=c.ba(),g=""+f,h=b.toString(),0==h.lastIndexOf(g,0)&&(g=new l(h.substring(g.length)),h=r(c,1),h=new RegExp(w(h,2)),Za(g,c,null),g=g.toString(),!L(h,b.toString())&&L(h,g)||3==T(a,b.toString(),c,-1))))return d.append(g),e.fa(f),f;e.fa(0);return 0}
function Za(a,b,c){var d=a.toString(),e=d.length,f=r(b,15);if(0!=e&&null!=f&&0!=f.length){var g=new RegExp("^(?:"+f+")");if(e=g.exec(d)){f=new RegExp(w(r(b,1),2));var h=L(f,d),m=e.length-1;b=r(b,16);if(null==b||0==b.length||null==e[m]||0==e[m].length){if(!h||L(f,d.substring(e[0].length)))null!=c&&0<m&&null!=e[m]&&c.append(e[1]),a.set(d.substring(e[0].length))}else if(d=d.replace(g,b),!h||L(f,d))null!=c&&0<m&&c.append(e[1]),a.set(d)}}}
J.prototype.parse=function(a,b){if(null==a)throw Error("The string supplied did not seem to be a phone number");if(250<a.length)throw Error("The string supplied is too long to be a phone number");var c=new l,d=a.indexOf(";phone-context=");if(0<=d){var e=d+15;if("+"==a.charAt(e)){var f=a.indexOf(";",e);0<f?c.append(a.substring(e,f)):c.append(a.substring(e))}e=a.indexOf("tel:");c.append(a.substring(0<=e?e+4:0,d))}else c.append(Ma(a));d=c.toString();e=d.indexOf(";isub=");0<e&&(c.clear(),c.append(d.substring(0,
e)));if(!Na(c.toString()))throw Error("The string supplied did not seem to be a phone number");d=c.toString();if(!(N(b)||null!=d&&0<d.length&&K.test(d)))throw Error("Invalid country calling code");d=new F;a:{e=c.toString();f=e.search(Ia);if(0<=f&&Na(e.substring(0,f)))for(var g=e.match(Ia),h=g.length,m=1;m<h;++m)if(null!=g[m]&&0<g[m].length){c.clear();c.append(e.substring(0,f));e=g[m];break a}e=""}0<e.length&&t(d,3,e);f=Q(this,b);e=new l;g=0;h=c.toString();try{g=Ya(this,h,f,e,d)}catch(y){if("Invalid country calling code"==
y.message&&K.test(h)){if(h=h.replace(K,""),g=Ya(this,h,f,e,d),0==g)throw y;}else throw y;}0!=g?(c=P(g),c!=b&&(f=O(this,g,c))):(Pa(c),e.append(c.toString()),null!=b&&(g=f.ba(),d.fa(g)));if(2>e.g.length)throw Error("The string supplied is too short to be a phone number");null!=f&&(g=new l,c=new l(e.toString()),Za(c,f,g),f=T(this,c.toString(),f,-1),2!=f&&4!=f&&5!=f&&(e=c));c=e.toString();e=c.length;if(2>e)throw Error("The string supplied is too short to be a phone number");if(17<e)throw Error("The string supplied is too long to be a phone number");
if(1<c.length&&"0"==c.charAt(0)){t(d,4,!0);for(e=1;e<c.length-1&&"0"==c.charAt(e);)e++;1!=e&&t(d,8,e)}t(d,2,parseInt(c,10));return d};function L(a,b){var c="string"==typeof a?b.match("^(?:"+a+")$"):b.match(a);return c&&c[0].length==b.length?!0:!1};function $a(a){this.ya="\u2008";this.oa=new RegExp(this.ya);this.pa="";this.aa=new l;this.ga="";this.s=new l;this.ca=new l;this.u=!0;this.ja=this.da=this.ta=!1;this.xa=J.Ba();this.ea=0;this.c=new l;this.na=!1;this.m="";this.b=new l;this.i=[];this.qa=a;this.Ea=this.l=ab(this,this.qa)}var bb=new E;t(bb,11,"NA");
var cb=RegExp("^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]*(\\$\\d[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]*)+$"),db=/[- ]/;function ab(a,b){var c=a.xa;c=N(b)?Wa(c,b):0;c=Q(a.xa,P(c));return null!=c?c:bb}
function eb(a){for(var b=a.i.length,c=0;c<b;++c){var d=a.i[c],e=w(d,1);if(a.ga==e)return!1;var f=a;var g=d,h=w(g,1);f.aa.clear();var m=f;g=w(g,2);var y="999999999999999".match(h)[0];y.length<m.b.g.length?m="":(h=y.replace(new RegExp(h,"g"),g),m=h=h.replace(RegExp("9","g"),m.ya));0<m.length?(f.aa.append(m),f=!0):f=!1;if(f)return a.ga=e,a.na=db.test(r(d,4)),a.ea=0,!0}return a.u=!1}
function fb(a,b){for(var c=[],d=b.length-3,e=a.i.length,f=0;f<e;++f){var g=a.i[f];0==x(g,3)?c.push(a.i[f]):(g=r(g,3,Math.min(d,x(g,3)-1)),0==b.search(g)&&c.push(a.i[f]))}a.i=c}$a.prototype.clear=function(){this.pa="";this.s.clear();this.ca.clear();this.aa.clear();this.ea=0;this.ga="";this.c.clear();this.m="";this.b.clear();this.u=!0;this.ja=this.da=this.ta=!1;this.i=[];this.na=!1;this.l!=this.Ea&&(this.l=ab(this,this.qa))};
function gb(a,b){a.s.append(b);var c=b;if(Da.test(c)||1==a.s.g.length&&Ca.test(c)){c=b;if("+"==c){var d=c;a.ca.append(c)}else d=za[c],a.ca.append(d),a.b.append(d);b=d}else a.u=!1,a.ta=!0;if(!a.u){if(!a.ta)if(hb(a)){if(ib(a))return jb(a)}else if(0<a.m.length&&(c=a.b.toString(),a.b.clear(),a.b.append(a.m),a.b.append(c),c=a.c.toString(),d=c.lastIndexOf(a.m),a.c.clear(),a.c.append(c.substring(0,d))),a.m!=kb(a))return a.c.append(" "),jb(a);return a.s.toString()}switch(a.ca.g.length){case 0:case 1:case 2:return a.s.toString();
case 3:if(hb(a))a.ja=!0;else return a.m=kb(a),lb(a);default:if(a.ja)return ib(a)&&(a.ja=!1),a.c.toString()+a.b.toString();if(0<a.i.length){c=mb(a,b);d=nb(a);if(0<d.length)return d;fb(a,a.b.toString());return eb(a)?ob(a):a.u?U(a,c):a.s.toString()}return lb(a)}}function jb(a){a.u=!0;a.ja=!1;a.i=[];a.ea=0;a.aa.clear();a.ga="";return lb(a)}
function nb(a){for(var b=a.b.toString(),c=a.i.length,d=0;d<c;++d){var e=a.i[d],f=w(e,1);if((new RegExp("^(?:"+f+")$")).test(b)&&(a.na=db.test(r(e,4)),e=b.replace(new RegExp(f,"g"),r(e,2)),e=U(a,e),M(e,Aa)==a.ca))return e}return""}function U(a,b){var c=a.c.g.length;return a.na&&0<c&&" "!=a.c.toString().charAt(c-1)?a.c+" "+b:a.c+b}
function lb(a){var b=a.b.toString();if(3<=b.length){for(var c=a.da&&0==a.m.length&&0<x(a.l,20)?u(a.l,20):u(a.l,19),d=c.length,e=0;e<d;++e){var f=c[e];0<a.m.length&&Sa(w(f,4))&&!r(f,6)&&!q(f,5)||(0!=a.m.length||a.da||Sa(w(f,4))||r(f,6))&&cb.test(w(f,2))&&a.i.push(f)}fb(a,b);b=nb(a);return 0<b.length?b:eb(a)?ob(a):a.s.toString()}return U(a,b)}function ob(a){var b=a.b.toString(),c=b.length;if(0<c){for(var d="",e=0;e<c;e++)d=mb(a,b.charAt(e));return a.u?U(a,d):a.s.toString()}return a.c.toString()}
function kb(a){var b=a.b.toString(),c=0;if(1!=a.l.za())var d=!1;else d=a.b.toString(),d="1"==d.charAt(0)&&"0"!=d.charAt(1)&&"1"!=d.charAt(1);d?(c=1,a.c.append("1").append(" "),a.da=!0):q(a.l,15)&&(d=new RegExp("^(?:"+r(a.l,15)+")"),d=b.match(d),null!=d&&null!=d[0]&&0<d[0].length&&(a.da=!0,c=d[0].length,a.c.append(b.substring(0,c))));a.b.clear();a.b.append(b.substring(c));return b.substring(0,c)}
function hb(a){var b=a.ca.toString(),c=new RegExp("^(?:\\+|"+r(a.l,11)+")");c=b.match(c);return null!=c&&null!=c[0]&&0<c[0].length?(a.da=!0,c=c[0].length,a.b.clear(),a.b.append(b.substring(c)),a.c.clear(),a.c.append(b.substring(0,c)),"+"!=b.charAt(0)&&a.c.append(" "),!0):!1}function ib(a){if(0==a.b.g.length)return!1;var b=new l,c=Xa(a.b,b);if(0==c)return!1;a.b.clear();a.b.append(b.toString());b=P(c);"001"==b?a.l=Q(a.xa,""+c):b!=a.qa&&(a.l=ab(a,b));a.c.append(""+c).append(" ");a.m="";return!0}
function mb(a,b){var c=a.aa.toString();if(0<=c.substring(a.ea).search(a.oa)){var d=c.search(a.oa);c=c.replace(a.oa,b);a.aa.clear();a.aa.append(c);a.ea=d;return c.substring(0,a.ea+1)}1==a.i.length&&(a.u=!1);a.ga="";return a.s.toString()};var V=J.Ba(),pb={e164:0,international:1,national:2,rfc3966:3},qb={FIXED_LINE:0,MOBILE:1,FIXED_LINE_OR_MOBILE:2,TOLL_FREE:3,PREMIUM_RATE:4,SHARED_COST:5,VOIP:6,PERSONAL_NUMBER:7,PAGER:8,UAN:9,VOICEMAIL:10},rb={"Invalid country calling code":"PHONE_INVALID_COUNTRY_CODE","The string supplied is too short to be a phone number":"PHONE_NUMBER_TOO_SHORT","The string supplied is too long to be a phone number":"PHONE_NUMBER_TOO_LONG","The string supplied did not seem to be a phone number":"PHONE_NOT_A_NUMBER",
"Phone number too short after IDD":"PHONE_TOO_SHORT_AFTER_IDD"};function sb(a){if(!tb(a))throw Error("Invalid metadata");var b=a.regionCodes;if(!b||!Array.isArray(b)||!b.length)throw Error("Invalid metadata");if(!tb(a.countryCodeToRegionCodeMap)||!tb(a.countryToMetadata))throw Error("Invalid metadata");}function tb(a){return null!==a&&"[object Object]"===""+a&&a.constructor===Object}function W(a,b){if(-1===b.regionCodes.indexOf(a))throw Error("Metadata not loaded for region: "+a);}
function ub(a){if(null===a)return null;var b={countryCode:a.j[1].toString(),nationalNumber:a.j[2].toString()};if(q(a,4))for(var c=w(a,8),d=0;d<c;d++)b.nationalNumber="0"+b.nationalNumber;void 0!==a.j[3]&&(b.extension=a.j[3]);return b}
function vb(a){var b=new F,c=!1;b.fa(Number(a.countryCode));var d=a.nationalNumber;if("string"===typeof d){for(var e=0;"0"===d.charAt(e);)c=!0,e++;c&&(t(b,4,!0),t(b,8,e));d=Number(d)}t(b,2,d);void 0!==a.extension&&null!==a.extension&&(a=a.extension.toString(),t(b,3,a));return b}
function wb(a){sb(a);return{getSupportedRegions:function(){I(a);return Qa()},getCountryCodeForRegion:function(b){I(a);W(b,a);return N(b)?Wa(V,b):0},countryCodeToRegionCodeMap:function(){I(a);return G},formatPhoneNumber:function(b,c){I(a);try{var d=vb(b)}catch(f){throw Error("Phone object conversion failed: "+f.message);}c=c||{};var e=pb[c.style];if(void 0===e)throw Error("Invalid style property: "+c.style);return V.format(d,e).toString()},validatePhoneNumber:function(b,c){I(a);W(c,a);try{var d=vb(b)}catch(h){throw Error("Phone object conversion failed: "+
h.message);}var e=d,f=e.ba();var g=O(V,f,c);null==g||"001"!=c&&f!=Wa(V,c)?g=!1:(e=Ta(e),g=-1!=(S(e,r(g,1))?S(e,r(g,5))?4:S(e,r(g,4))?3:S(e,r(g,6))?5:S(e,r(g,8))?6:S(e,r(g,7))?7:S(e,r(g,21))?8:S(e,r(g,25))?9:S(e,r(g,28))?10:S(e,r(g,2))?r(g,18)||S(e,r(g,3))?2:0:!r(g,18)&&S(e,r(g,3))?1:-1:-1));if(g)return!0;g=d;d=Ta(g);g=g.ba();g in G?(g=O(V,g,P(g)),d=T(V,d,g,-1)):d=1;switch(d){case 1:d="PHONE_INVALID_COUNTRY_CODE";break;case 2:d="PHONE_NUMBER_TOO_SHORT";break;case 3:d="PHONE_NUMBER_TOO_LONG";break;
case 5:d="PHONE_NUMBER_INVALID_LENGTH";break;default:d="PHONE_INVALID_FOR_REGION"}return Error(d)},parsePhoneNumber:function(b,c){I(a);W(c,a);try{var d=V.parse(b,c)}catch(e){return Error(rb[e.message])}return ub(d)},getExampleNumberForType:function(b,c){I(a);W(c,a);var d=qb[b];void 0===d&&(d=-1);return ub(Va(V,c,d))},getAsYouTypeFormatter:function(b){I(a);W(b,a);var c=new $a(b);return{inputDigit:function(d){c.pa=gb(c,d);return c.pa},clear:function(){return c.clear()}}}}}
var X=["createPhoneHandler"],Y=aa;X[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===wb?Y=Y[Z]&&Y[Z]!==Object.prototype[Z]?Y[Z]:Y[Z]={}:Y[Z]=wb;
