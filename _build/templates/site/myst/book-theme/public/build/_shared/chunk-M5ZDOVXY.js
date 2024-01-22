import{a as te}from"/myst_assets_folder/_shared/chunk-RTIGS2T3.js";import{c as E,e as ee}from"/myst_assets_folder/_shared/chunk-2NH4LW52.js";var he=E((Ut,pe)=>{pe.exports={trueFunc:function(){return!0},falseFunc:function(){return!1}}});var H=E(v=>{"use strict";Object.defineProperty(v,"__esModule",{value:!0});function gt(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="-"||e==="_"}v.isIdentStart=gt;function xt(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="-"||e==="_"}v.isIdent=xt;function yt(e){return e>="a"&&e<="f"||e>="A"&&e<="F"||e>="0"&&e<="9"}v.isHex=yt;function wt(e){for(var t=e.length,r="",o=0;o<t;){var n=e.charAt(o);if(v.identSpecialChars[n])r+="\\"+n;else if(n==="_"||n==="-"||n>="A"&&n<="Z"||n>="a"&&n<="z"||o!==0&&n>="0"&&n<="9")r+=n;else{var a=n.charCodeAt(0);if((a&63488)===55296){var s=e.charCodeAt(o++);if((a&64512)!==55296||(s&64512)!==56320)throw Error("UCS-2(decode): illegal sequence");a=((a&1023)<<10)+(s&1023)+65536}r+="\\"+a.toString(16)+" "}o++}return r}v.escapeIdentifier=wt;function bt(e){for(var t=e.length,r="",o=0,n;o<t;){var a=e.charAt(o);a==='"'?a='\\"':a==="\\"?a="\\\\":(n=v.strReplacementsRev[a])!==void 0&&(a=n),r+=a,o++}return'"'+r+'"'}v.escapeStr=bt;v.identSpecialChars={"!":!0,'"':!0,"#":!0,$:!0,"%":!0,"&":!0,"'":!0,"(":!0,")":!0,"*":!0,"+":!0,",":!0,".":!0,"/":!0,";":!0,"<":!0,"=":!0,">":!0,"?":!0,"@":!0,"[":!0,"\\":!0,"]":!0,"^":!0,"`":!0,"{":!0,"|":!0,"}":!0,"~":!0};v.strReplacementsRev={"\n":"\\n","\r":"\\r","	":"\\t","\f":"\\f","\v":"\\v"};v.singleQuoteEscapeChars={n:`
`,r:"\r",t:"	",f:"\f","\\":"\\","'":"'"};v.doubleQuotesEscapeChars={n:`
`,r:"\r",t:"	",f:"\f","\\":"\\",'"':'"'}});var we=E(Q=>{"use strict";Object.defineProperty(Q,"__esModule",{value:!0});var g=H();function Ct(e,t,r,o,n,a){var s=e.length,i="";function f(l,c){var p="";for(t++,i=e.charAt(t);t<s;){if(i===l)return t++,p;if(i==="\\"){t++,i=e.charAt(t);var h=void 0;if(i===l)p+=l;else if((h=c[i])!==void 0)p+=h;else if(g.isHex(i)){var C=i;for(t++,i=e.charAt(t);g.isHex(i);)C+=i,t++,i=e.charAt(t);i===" "&&(t++,i=e.charAt(t)),p+=String.fromCharCode(parseInt(C,16));continue}else p+=i}else p+=i;t++,i=e.charAt(t)}return p}function u(){var l="";for(i=e.charAt(t);t<s;){if(g.isIdent(i))l+=i;else if(i==="\\"){if(t++,t>=s)throw Error("Expected symbol but end of file reached.");if(i=e.charAt(t),g.identSpecialChars[i])l+=i;else if(g.isHex(i)){var c=i;for(t++,i=e.charAt(t);g.isHex(i);)c+=i,t++,i=e.charAt(t);i===" "&&(t++,i=e.charAt(t)),l+=String.fromCharCode(parseInt(c,16));continue}else l+=i}else return l;t++,i=e.charAt(t)}return l}function d(){i=e.charAt(t);for(var l=!1;i===" "||i==="	"||i===`
`||i==="\r"||i==="\f";)l=!0,t++,i=e.charAt(t);return l}function y(){var l=I();if(t<s)throw Error('Rule expected but "'+e.charAt(t)+'" found.');return l}function I(){var l=R();if(!l)return null;var c=l;for(i=e.charAt(t);i===",";){if(t++,d(),c.type!=="selectors"&&(c={type:"selectors",selectors:[l]}),l=R(),!l)throw Error('Rule expected after ",".');c.selectors.push(l)}return c}function R(){d();var l={type:"ruleSet"},c=L();if(!c)return null;for(var p=l;c&&(c.type="rule",p.rule=c,p=c,d(),i=e.charAt(t),!(t>=s||i===","||i===")"));)if(n[i]){var h=i;if(t++,d(),c=L(),!c)throw Error('Rule expected after "'+h+'".');c.nestingOperator=h}else c=L(),c&&(c.nestingOperator=null);return l}function L(){for(var l=null;t<s;)if(i=e.charAt(t),i==="*")t++,(l=l||{}).tagName="*";else if(g.isIdentStart(i)||i==="\\")(l=l||{}).tagName=u();else if(i===".")t++,l=l||{},(l.classNames=l.classNames||[]).push(u());else if(i==="#")t++,(l=l||{}).id=u();else if(i==="["){t++,d();var c={name:u()};if(d(),i==="]")t++;else{var p="";if(o[i]&&(p=i,t++,i=e.charAt(t)),t>=s)throw Error('Expected "=" but end of file reached.');if(i!=="=")throw Error('Expected "=" but "'+i+'" found.');c.operator=p+"=",t++,d();var h="";if(c.valueType="string",i==='"')h=f('"',g.doubleQuotesEscapeChars);else if(i==="'")h=f("'",g.singleQuoteEscapeChars);else if(a&&i==="$")t++,h=u(),c.valueType="substitute";else{for(;t<s&&i!=="]";)h+=i,t++,i=e.charAt(t);h=h.trim()}if(d(),t>=s)throw Error('Expected "]" but end of file reached.');if(i!=="]")throw Error('Expected "]" but "'+i+'" found.');t++,c.value=h}l=l||{},(l.attrs=l.attrs||[]).push(c)}else if(i===":"){t++;var C=u(),A={name:C};if(i==="("){t++;var w="";if(d(),r[C]==="selector")A.valueType="selector",w=I();else{if(A.valueType=r[C]||"string",i==='"')w=f('"',g.doubleQuotesEscapeChars);else if(i==="'")w=f("'",g.singleQuoteEscapeChars);else if(a&&i==="$")t++,w=u(),A.valueType="substitute";else{for(;t<s&&i!==")";)w+=i,t++,i=e.charAt(t);w=w.trim()}d()}if(t>=s)throw Error('Expected ")" but end of file reached.');if(i!==")")throw Error('Expected ")" but "'+i+'" found.');t++,A.value=w}l=l||{},(l.pseudos=l.pseudos||[]).push(A)}else break;return l}return y()}Q.parseCssSelector=Ct});var be=E(Z=>{"use strict";Object.defineProperty(Z,"__esModule",{value:!0});var m=H();function j(e){var t="";switch(e.type){case"ruleSet":for(var r=e.rule,o=[];r;)r.nestingOperator&&o.push(r.nestingOperator),o.push(j(r)),r=r.rule;t=o.join(" ");break;case"selectors":t=e.selectors.map(j).join(", ");break;case"rule":e.tagName&&(e.tagName==="*"?t="*":t=m.escapeIdentifier(e.tagName)),e.id&&(t+="#"+m.escapeIdentifier(e.id)),e.classNames&&(t+=e.classNames.map(function(n){return"."+m.escapeIdentifier(n)}).join("")),e.attrs&&(t+=e.attrs.map(function(n){return"operator"in n?n.valueType==="substitute"?"["+m.escapeIdentifier(n.name)+n.operator+"$"+n.value+"]":"["+m.escapeIdentifier(n.name)+n.operator+m.escapeStr(n.value)+"]":"["+m.escapeIdentifier(n.name)+"]"}).join("")),e.pseudos&&(t+=e.pseudos.map(function(n){return n.valueType?n.valueType==="selector"?":"+m.escapeIdentifier(n.name)+"("+j(n.value)+")":n.valueType==="substitute"?":"+m.escapeIdentifier(n.name)+"($"+n.value+")":n.valueType==="numeric"?":"+m.escapeIdentifier(n.name)+"("+n.value+")":":"+m.escapeIdentifier(n.name)+"("+m.escapeIdentifier(n.value)+")":":"+m.escapeIdentifier(n.name)}).join(""));break;default:throw Error('Unknown entity type: "'+e.type+'".')}return t}Z.renderEntity=j});var Ce=E(W=>{"use strict";Object.defineProperty(W,"__esModule",{value:!0});var St=we(),At=be(),Et=function(){function e(){this.pseudos={},this.attrEqualityMods={},this.ruleNestingOperators={},this.substitutesEnabled=!1}return e.prototype.registerSelectorPseudos=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var o=0,n=t;o<n.length;o++){var a=n[o];this.pseudos[a]="selector"}return this},e.prototype.unregisterSelectorPseudos=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var o=0,n=t;o<n.length;o++){var a=n[o];delete this.pseudos[a]}return this},e.prototype.registerNumericPseudos=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var o=0,n=t;o<n.length;o++){var a=n[o];this.pseudos[a]="numeric"}return this},e.prototype.unregisterNumericPseudos=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var o=0,n=t;o<n.length;o++){var a=n[o];delete this.pseudos[a]}return this},e.prototype.registerNestingOperators=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var o=0,n=t;o<n.length;o++){var a=n[o];this.ruleNestingOperators[a]=!0}return this},e.prototype.unregisterNestingOperators=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var o=0,n=t;o<n.length;o++){var a=n[o];delete this.ruleNestingOperators[a]}return this},e.prototype.registerAttrEqualityMods=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var o=0,n=t;o<n.length;o++){var a=n[o];this.attrEqualityMods[a]=!0}return this},e.prototype.unregisterAttrEqualityMods=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var o=0,n=t;o<n.length;o++){var a=n[o];delete this.attrEqualityMods[a]}return this},e.prototype.enableSubstitutes=function(){return this.substitutesEnabled=!0,this},e.prototype.disableSubstitutes=function(){return this.substitutesEnabled=!1,this},e.prototype.parse=function(t){return St.parseCssSelector(t,0,this.pseudos,this.attrEqualityMods,this.ruleNestingOperators,this.substitutesEnabled)},e.prototype.render=function(t){return At.renderEntity(t).trim()},e}();W.CssSelectorParser=Et});var Oe=e=>crypto.getRandomValues(new Uint8Array(e)),Fe=(e,t,r)=>{let o=(2<<Math.log(e.length-1)/Math.LN2)-1,n=-~(1.6*o*t/e.length);return(a=t)=>{let s="";for(;;){let i=r(n),f=n;for(;f--;)if(s+=e[i[f]&o]||"",s.length===a)return s}}},_=(e,t=21)=>Fe(e,t,Oe);function ne(e,t){return t?.note&&(e.note=t.note),t?.url&&(e.url=t.url),t?.ruleId&&(e.ruleId=t.ruleId),t?.fatal&&(e.fatal=!0),e}function Te(e,t,r){return ne(e.message(t,r?.node,r?.source),{...r,fatal:!0})}function je(e,t,r){return ne(e.message(t,r?.node,r?.source),r)}var re="abcdefghijklmnopqrstuvwxyz",ie=re+re.toUpperCase(),Pe="0123456789",Le=_(ie,1),_e=_(ie+Pe,9);function Me(){return Le()+_e()}function $e(e){if(!e)return;let t=e.replace(/[\t\n\r ]+/g," ").trim().toLowerCase(),r=oe(t);return{identifier:t,label:e,html_id:r}}function oe(e){if(e)return e.toLowerCase().replace(/[^a-z0-9-]/g,"-").replace(/^([0-9-])/,"id-$1").replace(/-[-]+/g,"-").replace(/(?:^[-]+)|(?:[-]+$)/g,"")}function ae(e,t){if(!e.children)return[e];let r=e.children.map(o=>ae(o,t)).flat();return e.type===t?(e&&e.children==null&&delete e.children,r):(e.children=r,[e])}function Ue(e,t){e.children&&(e.children=e.children.map(r=>ae(r,t)).flat())}function ze(e,t){e.children=[{type:"text",value:t}]}function M(e){return e?Array.isArray(e)?e.map(t=>!t||typeof t=="string"?t||"":"value"in t?t.value:"children"in t&&t.children?M(t.children):"").join(""):M([e]):""}function $(e){return JSON.parse(JSON.stringify(e))}function Be(e){return{attention:"Attention",caution:"Caution",danger:"Danger",error:"Error",important:"Important",hint:"Hint",note:"Note",seealso:"See Also",tip:"Tip",warning:"Warning"}[e]||`Unknown Admonition "${e}"`}function De(e,t,r){if(!t||t?.length===0)return"";let o=(r-e.length-4)/2,n="".padEnd(Math.ceil(o),"%"),a="".padEnd(Math.floor(o),"%");return`${`${n}  ${e}  ${a}
`}${t.join(`
`)}
`}var se={}.hasOwnProperty;function N(e,t){let r=t||{};function o(n,...a){let s=o.invalid,i=o.handlers;if(n&&se.call(n,e)){let f=String(n[e]);s=se.call(i,f)?i[f]:o.unknown}if(s)return s.call(this,n,...a)}return o.handlers=r.handlers||{},o.invalid=r.invalid,o.unknown=r.unknown,o}var He=N("operator",{unknown:Ye,invalid:ue,handlers:{"=":Qe,"^=":We,"$=":Ve,"*=":Je,"~=":Ze}});function le(e,t){let r=-1;for(;++r<e.attrs.length;)if(!He(e.attrs[r],t))return!1;return!0}function ue(e,t){return t[e.name]!==null&&t[e.name]!==void 0}function Qe(e,t){return ue(e,t)&&String(t[e.name])===e.value}function Ze(e,t){let r=t[e.name];return r==null?!1:Array.isArray(r)&&r.includes(e.value)?!0:String(r)===e.value}function We(e,t){let r=t[e.name];return Boolean(e.value&&typeof r=="string"&&r.slice(0,e.value.length)===e.value)}function Ve(e,t){let r=t[e.name];return Boolean(e.value&&typeof r=="string"&&r.slice(-e.value.length)===e.value)}function Je(e,t){let r=t[e.name];return Boolean(e.value&&typeof r=="string"&&r.includes(e.value))}function Ye(e){throw new Error("Unknown operator `"+e.operator+"`")}function ce(e,t){return e.tagName==="*"||e.tagName===t.type}var Ge=new Set([9,10,12,13,32]),fe="0".charCodeAt(0),Xe="9".charCodeAt(0);function de(e){if(e=e.trim().toLowerCase(),e==="even")return[2,0];if(e==="odd")return[2,1];let t=0,r=0,o=a(),n=s();if(t<e.length&&e.charAt(t)==="n"&&(t++,r=o*(n??1),i(),t<e.length?(o=a(),i(),n=s()):o=n=0),n===null||t<e.length)throw new Error(`n-th rule couldn't be parsed ('${e}')`);return[r,o*n];function a(){return e.charAt(t)==="-"?(t++,-1):(e.charAt(t)==="+"&&t++,1)}function s(){let f=t,u=0;for(;t<e.length&&e.charCodeAt(t)>=fe&&e.charCodeAt(t)<=Xe;)u=u*10+(e.charCodeAt(t)-fe),t++;return t===f?null:u}function i(){for(;t<e.length&&Ge.has(e.charCodeAt(t));)t++}}var U=ee(he(),1);function ve(e){let t=e[0],r=e[1]-1;if(r<0&&t<=0)return U.default.falseFunc;if(t===-1)return a=>a<=r;if(t===0)return a=>a===r;if(t===1)return r<0?U.default.trueFunc:a=>a>=r;let o=Math.abs(t),n=(r%o+o)%o;return t>1?a=>a>=r&&a%o===n:a=>a<=r&&a%o===n}function O(e){return ve(de(e))}function b(e){return Array.isArray(e.children)}var qe=O.default||O,Ke=N("name",{unknown:pt,invalid:dt,handlers:{any:z,blank:me,empty:me,"first-child":Ie,"first-of-type":Re,has:et,"last-child":tt,"last-of-type":rt,matches:z,not:nt,"nth-child":it,"nth-last-child":ot,"nth-of-type":st,"nth-last-of-type":at,"only-child":lt,"only-of-type":ut,root:ct,scope:ft}});B.needsIndex=["any","first-child","first-of-type","last-child","last-of-type","matches","not","nth-child","nth-last-child","nth-of-type","nth-last-of-type","only-child","only-of-type"];function B(e,t,r,o,n){let a=e.pseudos,s=-1;for(;++s<a.length;)if(!Ke(a[s],t,r,o,n))return!1;return!0}function me(e,t){return b(t)?t.children.length===0:!("value"in t)}function Ie(e,t,r,o,n){return x(n,e),n.nodeIndex===0}function Re(e,t,r,o,n){return x(n,e),n.typeIndex===0}function et(e,t,r,o,n){let a={type:"root",children:b(t)?t.children:[]},s={...n,found:!1,shallow:!1,one:!0,scopeNodes:[t],results:[],rootQuery:k(e.value)};return S(s,a),s.results.length>0}function tt(e,t,r,o,n){return x(n,e),typeof n.nodeCount=="number"&&n.nodeIndex===n.nodeCount-1}function rt(e,t,r,o,n){return x(n,e),typeof n.typeCount=="number"&&n.typeIndex===n.typeCount-1}function z(e,t,r,o,n){let a={...n,found:!1,shallow:!1,one:!0,scopeNodes:[t],results:[],rootQuery:k(e.value)};return S(a,t),a.results[0]===t}function nt(e,t,r,o,n){return!z(e,t,r,o,n)}function it(e,t,r,o,n){let a=F(e);return x(n,e),typeof n.nodeIndex=="number"&&a(n.nodeIndex)}function ot(e,t,r,o,n){let a=F(e);return x(n,e),typeof n.nodeCount=="number"&&typeof n.nodeIndex=="number"&&a(n.nodeCount-n.nodeIndex-1)}function at(e,t,r,o,n){let a=F(e);return x(n,e),typeof n.typeIndex=="number"&&typeof n.typeCount=="number"&&a(n.typeCount-1-n.typeIndex)}function st(e,t,r,o,n){let a=F(e);return x(n,e),typeof n.typeIndex=="number"&&a(n.typeIndex)}function lt(e,t,r,o,n){return x(n,e),n.nodeCount===1}function ut(e,t,r,o,n){return x(n,e),n.typeCount===1}function ct(e,t,r,o){return t&&!o}function ft(e,t,r,o,n){return t&&n.scopeNodes.includes(t)}function dt(){throw new Error("Invalid pseudo-selector")}function pt(e){throw e.name?new Error("Unknown pseudo-selector `"+e.name+"`"):new Error("Unexpected pseudo-element or empty pseudo-class")}function x(e,t){if(e.shallow)throw new Error("Cannot use `:"+t.name+"` without parent")}function F(e){let t=e._cachedFn;return t||(t=qe(e.value),e._cachedFn=t),t}function ge(e,t,r,o,n){if(e.id)throw new Error("Invalid selector: id");if(e.classNames)throw new Error("Invalid selector: class");return Boolean(t&&(!e.tagName||ce(e,t))&&(!e.attrs||le(e,t))&&(!e.pseudos||B(e,t,r,o,n)))}var ht=[];function k(e){return e===null?{type:"selectors",selectors:[]}:e.type==="ruleSet"?{type:"selectors",selectors:[e]}:e}function S(e,t){t&&ye(e,[],t,void 0,void 0)}function ye(e,t,r,o,n){let a={directChild:void 0,descendant:void 0,adjacentSibling:void 0,generalSibling:void 0};return a=mt(e,T(t,e.rootQuery.selectors),r,o,n),b(r)&&!e.shallow&&!(e.one&&e.found)&&vt(e,a,r),a}function vt(e,t,r){let o=T(t.descendant,t.directChild),n,a=-1,s={count:0,types:new Map},i={count:0,types:new Map};for(;++a<r.children.length;)xe(s,r.children[a]);for(a=-1;++a<r.children.length;){let u=r.children[a].type.toUpperCase();e.nodeIndex=i.count,e.typeIndex=i.types.get(u)||0,e.nodeCount=s.count,e.typeCount=s.types.get(u);let d=T(o,n),y=ye(e,d,r.children[a],a,r);if(n=T(y.generalSibling,y.adjacentSibling),e.one&&e.found)break;xe(i,r.children[a])}}function mt(e,t,r,o,n){let a={directChild:void 0,descendant:void 0,adjacentSibling:void 0,generalSibling:void 0},s=-1;for(;++s<t.length;){let i=t[s];if(e.one&&e.found)break;if(e.shallow&&i.rule.rule)throw new Error("Expected selector without nesting");if(ge(i.rule,r,o,n,e)){let f=i.rule.rule;if(f){let u={type:"ruleSet",rule:f},d=f.nestingOperator==="+"?"adjacentSibling":f.nestingOperator==="~"?"generalSibling":f.nestingOperator===">"?"directChild":"descendant";D(a,d,u)}else e.found=!0,e.results.includes(r)||e.results.push(r)}i.rule.nestingOperator===null?D(a,"descendant",i):i.rule.nestingOperator==="~"&&D(a,"generalSibling",i)}return a}function T(e,t){return e&&t&&e.length>0&&t.length>0?[...e,...t]:e&&e.length>0?e:t&&t.length>0?t:ht}function D(e,t,r){let o=e[t];o?o.push(r):e[t]=[r]}function xe(e,t){let r=t.type.toUpperCase(),o=(e.types.get(r)||0)+1;e.count++,e.types.set(r,o)}var Se=ee(Ce(),1),P=new Se.CssSelectorParser;P.registerAttrEqualityMods("~","^","$","*");P.registerSelectorPseudos("any","matches","not","has");P.registerNestingOperators(">","+","~");function Ae(e){if(typeof e!="string")throw new TypeError("Expected `string` as selector, not `"+e+"`");return P.parse(e)}function cr(e,t){let r=ke(e,t);return r.one=!0,S(r,t||void 0),r.results[0]||null}function Ee(e,t){let r=ke(e,t);return S(r,t||void 0),r.results}function ke(e,t){return{rootQuery:k(Ae(e)),results:[],scopeNodes:t?b(t)&&(t.type==="RootNode"||t.type==="root")?t.children:[t]:[],one:!1,shallow:!1,found:!1,typeIndex:void 0,nodeIndex:void 0,typeCount:void 0,nodeCount:void 0}}var kt=[],V=function(e,t,r){let o=te(r||t),n=!t||t.cascade===void 0||t.cascade===null?!0:t.cascade;return a(e);function a(s,i,f){let u=s.children||kt,d=-1,y=0;if(o(s,i,f))return null;if(u.length>0){for(;++d<u.length;)a(u[d],d,s)&&(u[y++]=u[d]);if(n&&!y)return null;u.length=y}return s}};function Ne(e,t){return t?Ee("block",e).filter(o=>(typeof t=="string"?[t]:t).map(a=>{var s,i;return((s=o.data)===null||s===void 0?void 0:s.part)===a||((i=o.data)===null||i===void 0?void 0:i.tags)&&Array.isArray(o.data.tags)&&o.data.tags.includes(a)}).reduce((a,s)=>a||s,!1)):[]}function Nt(e,t,r){let o=typeof t=="string"?[t]:t,n=Ne(e,t);if(n.length===0)return;let s={type:"root",children:$(n).map(i=>{var f;return(f=i.data)!==null&&f!==void 0||(i.data={}),i.data.part=o[0],i.data.tags&&Array.isArray(i.data.tags)&&i.data.tags.reduce((u,d)=>u||o.includes(d),!1)&&(i.data.tags=i.data.tags.filter(u=>!o.includes(u)),i.data.tags.length===0&&delete i.data.tags),r?.removePartData&&delete i.data.part,r?.keepVisibility||delete i.visibility,i})};return n.forEach(i=>{i.type="__delete__"}),V(e,"__delete__"),s}var J;(function(e){e.validConfigStructure="valid-config-structure",e.siteConfigExists="site-config-exists",e.projectConfigExists="project-config-exists",e.validSiteConfig="valid-site-config",e.validProjectConfig="valid-project-config",e.configHasNoDeprecatedFields="config-has-no-deprecated-fields",e.frontmatterIsYaml="frontmatter-is-yaml",e.validPageFrontmatter="valid-page-frontmatter",e.validFrontmatterExportList="valid-frontmatter-export-list",e.docxRenders="docx-renders",e.jatsRenders="jats-renders",e.mdRenders="md-renders",e.mecaIncludesJats="meca-includes-jats",e.mecaExportsBuilt="meca-exports-built",e.mecaFilesCopied="meca-files-copied",e.pdfBuildCommandsAvailable="pdf-build-commands-available",e.pdfBuildsWithoutErrors="pdf-builds-without-errors",e.pdfBuilds="pdf-builds",e.texRenders="tex-renders",e.exportExtensionCorrect="export-extension-correct",e.exportArticleExists="export-article-exists",e.texParses="tex-parses",e.jatsParses="jats-parses",e.mystFileLoads="myst-file-loads",e.selectedFileIsProcessed="selected-file-is-processed",e.directiveRegistered="directive-registered",e.directiveKnown="directive-known",e.directiveArgumentCorrect="directive-argument-correct",e.directiveOptionsCorrect="directive-options-correct",e.directiveBodyCorrect="directive-body-correct",e.roleRegistered="role-registered",e.roleKnown="role-known",e.roleBodyCorrect="role-body-correct",e.tocContentsExist="toc-contents-exist",e.validTocStructure="valid-toc-structure",e.validToc="valid-toc",e.tocWritten="toc-written",e.imageDownloads="image-downloads",e.imageExists="image-exists",e.imageFormatConverts="image-format-converts",e.imageCopied="image-copied",e.imageFormatOptimizes="image-format-optimizes",e.mathLabelLifted="math-label-lifted",e.mathEquationEnvRemoved="math-equation-env-removed",e.mathEqnarrayReplaced="math-eqnarray-replaced",e.mathAlignmentAdjusted="math-alignment-adjusted",e.mathRenders="math-renders",e.referenceTemplateFills="reference-template-fills",e.identifierIsUnique="identifier-is-unique",e.referenceTargetResolves="reference-target-resolves",e.referenceSyntaxValid="reference-syntax-valid",e.referenceTargetExplicit="reference-target-explicit",e.footnoteReferencesDefinition="footnote-references-definition",e.intersphinxReferencesResolve="intersphinx-references-resolve",e.mystLinkValid="myst-link-valid",e.rridLinkValid="rrid-link-valid",e.wikipediaLinkValid="wikipedia-link-valid",e.doiLinkValid="doi-link-valid",e.linkResolves="link-resolves",e.notebookAttachmentsResolve="notebook-attachments-resolve",e.notebookOutputCopied="notebook-output-copied",e.mdastSnippetImports="mdast-snippet-imports",e.includeContentFilters="include-content-filters",e.includeContentLoads="include-content-loads",e.gatedNodesJoin="gated-nodes-join",e.glossaryUsesDefinitionList="glossary-uses-definition-list",e.blockMetadataLoads="block-metadata-loads",e.citationIsUnique="citation-is-unique",e.bibFileExists="bib-file-exists",e.codeMetadataLifted="code-metadata-lifted",e.codeMetatagsValid="code-metatags-valid",e.codeLangDefined="code-lang-defined",e.codeMetadataLoads="code-metadata-loads",e.inlineExpressionRenders="inline-expression-renders",e.staticFileCopied="static-file-copied",e.exportFileCopied="export-file-copied",e.sourceFileCopied="source-file-copied",e.templateFileCopied="template-file-copied",e.staticActionFileCopied="static-action-file-copied",e.pluginLoads="plugin-loads",e.containerChildrenValid="contianer-children-valid"})(J||(J={}));function Ot(e,t){var r;let o=(r=typeof t=="number"?t:Array.isArray(t)?t?.length:Object.keys(t??{}).length)!==null&&r!==void 0?r:0;return e.replace("%s",String(o)).replace(/\((?:([a-z0-9A-Z-]*)\|)?([a-z0-9A-Z-]*)\)/g,o===1?"$1":"$2")}var Y;(function(e){e.content="notebook-content",e.code="notebook-code"})(Y||(Y={}));var G;(function(e){e.removeStderr="remove-stderr",e.removeStdout="remove-stdout",e.hideCell="hide-cell",e.hideInput="hide-input",e.hideOutput="hide-output",e.removeCell="remove-cell",e.removeInput="remove-input",e.removeOutput="remove-output"})(G||(G={}));var X;(function(e){e.string="string",e.number="number",e.boolean="boolean",e.parsed="parsed"})(X||(X={}));var q;(function(e){e.heading="heading",e.equation="equation",e.subequation="subequation",e.figure="figure",e.table="table",e.code="code"})(q||(q={}));var K;(function(e){e.admonition="admonition",e.attention="attention",e.caution="caution",e.danger="danger",e.error="error",e.important="important",e.hint="hint",e.note="note",e.seealso="seealso",e.tip="tip",e.warning="warning"})(K||(K={}));export{Te as a,je as b,Me as c,$e as d,oe as e,Ue as f,ze as g,M as h,$ as i,Be as j,De as k,Ot as l,V as m,N as n,cr as o,Ee as p,Ne as q,Nt as r,J as s,Y as t,X as u,q as v,K as w};
