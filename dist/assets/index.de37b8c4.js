(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function x(){}function G(e){return e()}function B(){return Object.create(null)}function A(e){e.forEach(G)}function K(e){return typeof e=="function"}function z(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let w;function D(e,t){return w||(w=document.createElement("a")),w.href=t,e===w.href}function J(e){return Object.keys(e).length===0}function c(e,t){e.appendChild(t)}function Q(e,t,n){e.insertBefore(t,n||null)}function T(e){e.parentNode.removeChild(e)}function u(e){return document.createElement(e)}function R(e){return document.createTextNode(e)}function y(){return R(" ")}function f(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function U(e){return Array.from(e.childNodes)}let j;function v(e){j=e}const b=[],I=[],E=[],P=[],V=Promise.resolve();let N=!1;function W(){N||(N=!0,V.then(F))}function O(e){E.push(e)}const L=new Set;let C=0;function F(){const e=j;do{for(;C<b.length;){const t=b[C];C++,v(t),X(t.$$)}for(v(null),b.length=0,C=0;I.length;)I.pop()();for(let t=0;t<E.length;t+=1){const n=E[t];L.has(n)||(L.add(n),n())}E.length=0}while(b.length);for(;P.length;)P.pop()();N=!1,L.clear(),v(e)}function X(e){if(e.fragment!==null){e.update(),A(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(O)}}const Y=new Set;function Z(e,t){e&&e.i&&(Y.delete(e),e.i(t))}function ee(e,t,n,s){const{fragment:r,on_mount:i,on_destroy:o,after_update:m}=e.$$;r&&r.m(t,n),s||O(()=>{const a=i.map(G).filter(K);o?o.push(...a):A(a),e.$$.on_mount=[]}),m.forEach(O)}function te(e,t){const n=e.$$;n.fragment!==null&&(A(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ne(e,t){e.$$.dirty[0]===-1&&(b.push(e),W(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function re(e,t,n,s,r,i,o,m=[-1]){const a=j;v(e);const l=e.$$={fragment:null,ctx:null,props:i,update:x,not_equal:r,bound:B(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:B(),dirty:m,skip_bound:!1,root:t.target||a.$$.root};o&&o(l.root);let g=!1;if(l.ctx=n?n(e,t.props||{},(d,h,..._)=>{const p=_.length?_[0]:h;return l.ctx&&r(l.ctx[d],l.ctx[d]=p)&&(!l.skip_bound&&l.bound[d]&&l.bound[d](p),g&&ne(e,d)),h}):[],l.update(),g=!0,A(l.before_update),l.fragment=s?s(l.ctx):!1,t.target){if(t.hydrate){const d=U(t.target);l.fragment&&l.fragment.l(d),d.forEach(T)}else l.fragment&&l.fragment.c();t.intro&&Z(e.$$.fragment),ee(e,t.target,t.anchor,t.customElement),F()}v(a)}class oe{$destroy(){te(this,1),this.$destroy=x}$on(t,n){const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(t){this.$$set&&!J(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const le="/assets/halo.807decaa.png";function ie(e){let t,n,s,r,i,o,m,a,l,g,d,h,_,p,M,$,q,k;return{c(){t=u("main"),n=u("div"),s=u("div"),r=y(),i=u("div"),o=u("div"),m=u("div"),a=u("div"),l=u("img"),d=y(),h=u("h1"),h.textContent="Michael Saffold",_=y(),p=u("p"),p.textContent="AS Computer Network Engineering \u2022 SBCC 2017",M=y(),$=u("p"),$.textContent="\u{1F34B} Goleta, CA",q=y(),k=u("div"),k.innerHTML=`<a class="btn btn-primary my-2" href="https://www.linkedin.com/in/michaelsaffold/">LinkedIn</a> 
          <a class="btn btn-primary my-2" href="https://github.com/MichaelSaffold">Github</a>`,f(s,"class","hero-overlay bg-opacity-60"),f(l,"alt","me"),D(l.src,g=le)||f(l,"src",g),f(a,"class","w-32 p-4 rounded-full ring ring-primary ring-offset-blue-300 ring-offset-2"),f(m,"class","avatar"),f(h,"class","mb-2 text-5xl font-bold"),f(p,"class","mb-1"),f($,"class","mb-2"),f(k,"class","justify-center"),f(o,"class","max-w-md"),f(i,"class","hero-content text-center text-neutral-content"),f(n,"class","hero min-h-screen bg-gradient-to-b from-blue-500 to-blue-300")},m(S,H){Q(S,t,H),c(t,n),c(n,s),c(n,r),c(n,i),c(i,o),c(o,m),c(m,a),c(a,l),c(o,d),c(o,h),c(o,_),c(o,p),c(o,M),c(o,$),c(o,q),c(o,k)},p:x,i:x,o:x,d(S){S&&T(t)}}}class ce extends oe{constructor(t){super(),re(this,t,null,ie,z,{})}}new ce({target:document.getElementById("app")});
