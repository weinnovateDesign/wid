import{J as o,c,K as f,D as d,L as v,M as l,N as i,O as h,P as m}from"./oVGpmOzo.js";function U(t,a={}){const e=a.head||o();if(e)return e.ssr?e.push(t,a):p(e,t,a)}function p(t,a,e={}){const s=c(!1),n=c({});f(()=>{n.value=s.value?{}:h(a)});const r=t.push(n.value,e);return d(n,u=>{r.patch(u)}),m()&&(v(()=>{r.dispose()}),l(()=>{s.value=!0}),i(()=>{s.value=!1})),r}export{U as u};
