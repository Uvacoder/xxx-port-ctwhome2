function k(){}function w(t,n){for(const e in n)t[e]=n[e];return t}function j(t){return t()}function D(){return Object.create(null)}function E(t){t.forEach(j)}function F(t){return typeof t=="function"}function P(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let i;function S(t,n){return t===n?!0:(i||(i=document.createElement("a")),i.href=n,t===i.href)}function U(t){return Object.keys(t).length===0}function q(t,...n){if(t==null){for(const r of n)r(void 0);return k}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function A(t,n,e){t.$$.on_destroy.push(q(n,e))}function B(t,n,e,r){if(t){const o=m(t,n,e,r);return t[0](o)}}function m(t,n,e,r){return t[1]&&r?w(e.ctx.slice(),t[1](r(n))):e.ctx}function C(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const l=[],_=Math.max(n.dirty.length,o.length);for(let s=0;s<_;s+=1)l[s]=n.dirty[s]|o[s];return l}return n.dirty|o}return n.dirty}function G(t,n,e,r,o,l){if(o){const _=m(n,e,r,l);t.p(_,o)}}function H(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}let f;function h(t){f=t}function b(){if(!f)throw new Error("Function called outside component initialization");return f}function I(t){b().$$.on_mount.push(t)}function J(t){b().$$.after_update.push(t)}function K(t){b().$$.on_destroy.push(t)}const a=[],g=[];let u=[];const y=[],x=Promise.resolve();let p=!1;function v(){p||(p=!0,x.then(M))}function L(){return v(),x}function O(t){u.push(t)}const d=new Set;let c=0;function M(){if(c!==0)return;const t=f;do{try{for(;c<a.length;){const n=a[c];c++,h(n),z(n.$$)}}catch(n){throw a.length=0,c=0,n}for(h(null),a.length=0,c=0;g.length;)g.pop()();for(let n=0;n<u.length;n+=1){const e=u[n];d.has(e)||(d.add(e),e())}u.length=0}while(a.length);for(;y.length;)y.pop()();p=!1,d.clear(),h(t)}function z(t){if(t.fragment!==null){t.update(),E(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function N(t){const n=[],e=[];u.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),u=n}export{J as a,g as b,S as c,B as d,C as e,A as f,H as g,K as h,D as i,M as j,F as k,U as l,O as m,k as n,I as o,N as p,f as q,E as r,P as s,L as t,G as u,h as v,j as w,a as x,v as y};
