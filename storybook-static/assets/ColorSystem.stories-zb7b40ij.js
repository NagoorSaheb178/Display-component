import{j as r}from"./jsx-runtime-CGpYA4L6.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";const d={title:"Design System/Color System",parameters:{docs:{description:{component:"Token-based color system supporting light/dark themes and WCAG-compliant contrast ratios."}}}},e=()=>r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:16},children:[r.jsx(a,{name:"Primary",variable:"--color-primary-600"}),r.jsx(a,{name:"Secondary",variable:"--color-secondary-600"}),r.jsx(a,{name:"Accent",variable:"--color-accent-600"}),r.jsx(a,{name:"Success",variable:"--color-success-600"}),r.jsx(a,{name:"Warning",variable:"--color-warning-600"}),r.jsx(a,{name:"Error",variable:"--color-error-600"}),r.jsx(a,{name:"Info",variable:"--color-info-600"}),r.jsx(a,{name:"Neutral 100",variable:"--color-neutral-100"}),r.jsx(a,{name:"Neutral 900",variable:"--color-neutral-900"})]});function a({name:o,variable:c}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[r.jsx("div",{style:{background:`var(${c})`,width:40,height:40,borderRadius:6,border:"1px solid #ccc"},"aria-label":`${o} color swatch`,role:"img"}),r.jsx("span",{style:{marginTop:4,fontSize:12},children:o})]})}e.storyName="All Color Tokens";var l,n,s;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexWrap: 'wrap',
  gap: 16
}}>\r
    <ColorSwatch name="Primary" variable="--color-primary-600" />\r
    <ColorSwatch name="Secondary" variable="--color-secondary-600" />\r
    <ColorSwatch name="Accent" variable="--color-accent-600" />\r
    <ColorSwatch name="Success" variable="--color-success-600" />\r
    <ColorSwatch name="Warning" variable="--color-warning-600" />\r
    <ColorSwatch name="Error" variable="--color-error-600" />\r
    <ColorSwatch name="Info" variable="--color-info-600" />\r
    <ColorSwatch name="Neutral 100" variable="--color-neutral-100" />\r
    <ColorSwatch name="Neutral 900" variable="--color-neutral-900" />\r
    {/* Add more swatches as needed */}\r
  </div>`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const p=["AllTokens"];export{e as AllTokens,p as __namedExportsOrder,d as default};
