var I=Object.defineProperty;var w=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var x=(o,a,l)=>a in o?I(o,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[a]=l,h=(o,a)=>{for(var l in a||(a={}))b.call(a,l)&&x(o,l,a[l]);if(w)for(var l of w(a))z.call(a,l)&&x(o,l,a[l]);return o};import{i as D}from"./index.8afb9f94.js";import{o as k}from"./data.82a82b1d.js";import{_ as A,a1 as L,H as g,R as M,a2 as O,r as T,o as G,c as R,a as c,d as W,w as j,t as u,F as H,$ as U,a0 as $}from"./app.0e5d7884.js";const v=o=>(U("data-v-582297e5"),o=o(),$(),o),q=v(()=>c("p",{class:"title"},"\u6C14\u5473\uFF08odor\uFF09\uFF1A",-1)),J={class:"text"},K={class:"text"},P=v(()=>c("p",null,null,-1)),Q=v(()=>c("p",{class:"title"},"\u98CE\u5473\uFF08flavor\uFF09\uFF1A",-1)),X={class:"text"},Y={class:"text"},Z={name:"chemical-substance-flavor-wheel",props:{lang:{type:String,default:"EN"}},emits:["change"],setup(o,{emit:a}){const l=o,_=L({tablet:640,laptop:1024,desktop:1280}),V=_.between("tablet","laptop");_.between("laptop","desktop");const f=g(0),d=g(!1),n=g(null),r={Alliaceous:"#6a4b8f",Animalic:"#015392",Buttery:"#4099be",Cocoa:"#036644",Earthy:"#70a954",Floral:"#f7a718",Fruity:"#de7510",Green:"#c75735","Meat/Savoury":"#ac2e6e",Musty:"#753f77",Nutty:"#a85095",Roasted:"#5c595c",Smoke:"#44778f",Sour:"#a76b53",Spicy:"#3773bc",Sweet:"#34783e",Vanilla:"#b16081",Vegetative:"#095fa1"},y=t=>({group:t["\u7EC4\u522B-ENG"],chemical:t.\u5316\u5B66\u540D,odor:t["odor(\u6C14\u5473)"],flavor:t["flavor\uFF08\u98CE\u5473\uFF09"],groupCN:t["\u7EC4\u522B-CN"],chemicalCN:t.\u4E2D\u6587\u7FFB\u8BD1,odorCN:t.\u5907\u6CE81,flavorCN:t.\u5907\u6CE82}),E=k.map(y).reduce((t,e)=>{const s={isChildren:!0,name:e.chemicalCN,data:e,lineStyle:{color:r[e.group]},itemStyle:{color:r[e.group]},label:{color:r[e.group]}};return t[e.group]?t[e.group].children.push(s):t[e.group]={name:e.groupCN,children:[s],lineStyle:{color:r[e.group]},itemStyle:{color:r[e.group]},label:{color:r[e.group]}},t},{}),F=k.map(y).reduce((t,e)=>{const s={isChildren:!0,name:e.chemical,data:e,lineStyle:{color:r[e.group]},itemStyle:{color:r[e.group]},label:{color:r[e.group]}};return t[e.group]?t[e.group].children.push(s):t[e.group]={name:e.group,children:[s],lineStyle:{color:r[e.group]},itemStyle:{color:r[e.group]},label:{color:r[e.group]}},t},{}),p={};p.radial={type:"tree",layout:"radial",top:"16%",right:"16%",bottom:"16%",left:"16%",label:{fontSize:10}},p.orthogonal={type:"tree",layout:"orthogonal",edgeShape:"polyline",initialTreeDepth:1,right:"50%",labelLayout:t=>({align:"left",verticalAlign:"middle",x:t.rect.x+20,y:t.rect.y+t.rect.height/2})};const B=({layout:t="radial",lang:e="CN"})=>({series:[h({data:[{children:Object.values(e==="CN"?E:F)}]},p[t])]});return M(()=>{const t=D(f.value);t.setOption(B({layout:"radial",lang:l.lang})),t.on("click",e=>{e.data.isChildren&&(V.value?(n.value=h({label:e.data.name},e.data.data),d.value=!0):a("change",e.data.data))}),O(window,"resize",()=>t.resize())}),(t,e)=>{var m;const s=T("el-drawer");return G(),R(H,null,[c("div",{ref_key:"canvas",ref:f,class:"canvas"},null,512),W(s,{modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=i=>d.value=i),direction:"btt",size:"80%",title:((m=n.value)==null?void 0:m.label)||""},{default:j(()=>{var i,S,C,N;return[q,c("p",J,u(((i=n.value)==null?void 0:i.odorCN)||"-"),1),c("p",K,u(((S=n.value)==null?void 0:S.odor)||"-"),1),P,Q,c("p",X,u(((C=n.value)==null?void 0:C.flavorCN)||"-"),1),c("p",Y,u(((N=n.value)==null?void 0:N.flavor)||"-"),1)]}),_:1},8,["modelValue","title"])],64)}}};var le=A(Z,[["__scopeId","data-v-582297e5"],["__file","chemical-substance-flavor-wheel.vue"]]);export{le as default};
