import{i as t}from"./index.8afb9f94.js";import{d as r}from"./data-sca-flavor-wheel.30ffadcc.js";import{_ as o,H as l,R as i,o as n,c}from"./app.0e5d7884.js";const _={name:"sca-flavor-wheel",setup(d){const a=l(0),s={series:{type:"sunburst",data:r,radius:[0,"95%"],sort:void 0,emphasis:{focus:"ancestor"},levels:[{},{r0:"15%",r:"35%",itemStyle:{borderWidth:2},label:{rotate:"tangential"}},{r0:"35%",r:"70%",label:{align:"right"}},{r0:"70%",r:"72%",label:{position:"outside",padding:3,silent:!1},itemStyle:{borderWidth:3}}]}};return i(()=>{const e=t(a.value);e.setOption(s),window.onresize=()=>{e.resize()}}),(e,p)=>(n(),c("div",{ref_key:"canvas",ref:a,class:"canvas"},null,512))}};var m=o(_,[["__scopeId","data-v-498df5d6"],["__file","sca-flavor-wheel.vue"]]);export{m as default};
