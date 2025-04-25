import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{r as c}from"./index-CleY8y_P.js";import{c as f}from"./utils-CytzSlOG.js";import{B as a}from"./Button-mLHaiUTz.js";import{c as n}from"./createLucideIcon-Dw_B_vTG.js";import{X as F,T as V}from"./Tag-Ca8UibXp.js";import{S as W}from"./settings-D45lCp1W.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BwobEAja.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=n("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=n("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=n("LineChart",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=n("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=n("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=n("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=n("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),O=c.createContext(void 0);function N({children:r,defaultTheme:i="light"}){const[s,o]=c.useState(i);c.useEffect(()=>{const m=window.document.documentElement;m.classList.remove("light","dark"),m.classList.add(s)},[s]);const v=()=>{o(s==="light"?"dark":"light")};return e.jsx(O.Provider,{value:{theme:s,toggleTheme:v},children:r})}const K=()=>{const r=c.useContext(O);if(r===void 0)throw new Error("useTheme must be used within a ThemeProvider");return r};try{N.displayName="ThemeProvider",N.__docgenInfo={description:"",displayName:"ThemeProvider",props:{defaultTheme:{defaultValue:{value:"light"},description:"",name:"defaultTheme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}}}}}catch{}function j(){const{theme:r,toggleTheme:i}=K();return e.jsxs(a,{variant:"outline",size:"icon",onClick:i,className:"rounded-full",children:[r==="dark"?e.jsx(J,{className:"h-5 w-5"}):e.jsx(X,{className:"h-5 w-5"}),e.jsx("span",{className:"sr-only",children:"Toggle theme"})]})}function d({brandName:r,brandLogo:i,items:s,actions:o,className:v,...m}){const[l,y]=c.useState(!1),q=()=>{y(!l)};return e.jsxs("nav",{className:f("bg-white dark:bg-neutral-900 shadow-sm border-b border-neutral-200 dark:border-neutral-800",v),...m,children:[e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between h-16",children:[e.jsxs("div",{className:"flex",children:[e.jsxs("div",{className:"flex-shrink-0 flex items-center",children:[i&&e.jsx("div",{className:"mr-2",children:i}),e.jsx("span",{className:"text-lg font-medium text-neutral-900 dark:text-white",children:r})]}),e.jsx("div",{className:"hidden sm:ml-6 sm:flex sm:space-x-4 sm:items-center",children:s.map((t,g)=>e.jsx("a",{href:t.href,className:f("inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",t.isActive?"text-primary-600 dark:text-primary-400":"text-neutral-600 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400"),"aria-current":t.isActive?"page":void 0,children:t.label},g))})]}),e.jsxs("div",{className:"hidden sm:flex sm:items-center sm:space-x-2",children:[e.jsx(j,{}),o]}),e.jsxs("div",{className:"flex items-center sm:hidden",children:[e.jsx(j,{className:"mr-2"}),e.jsx(a,{variant:"ghost",size:"icon",onClick:q,"aria-expanded":l,"aria-label":l?"Close menu":"Open menu",children:l?e.jsx(F,{className:"h-5 w-5"}):e.jsx(H,{className:"h-5 w-5"})})]})]})}),l&&e.jsxs("div",{className:"sm:hidden",children:[e.jsx("div",{className:"px-2 pt-2 pb-3 space-y-1",children:s.map((t,g)=>e.jsx("a",{href:t.href,className:f("block px-3 py-2 rounded-md text-base font-medium",t.isActive?"bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400":"text-neutral-600 hover:bg-neutral-100 hover:text-primary-600 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-primary-400"),"aria-current":t.isActive?"page":void 0,onClick:()=>y(!1),children:t.label},g))}),o&&e.jsx("div",{className:"px-5 pt-4 pb-3 border-t border-neutral-200 dark:border-neutral-700",children:e.jsx("div",{className:"space-y-2",children:o})})]})]})}try{d.displayName="Navbar",d.__docgenInfo={description:"",displayName:"Navbar",props:{brandName:{defaultValue:null,description:"",name:"brandName",required:!0,type:{name:"string"}},brandLogo:{defaultValue:null,description:"",name:"brandLogo",required:!1,type:{name:"React.ReactNode"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"NavItem[]"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"React.ReactNode"}}}}}catch{}const ie={title:"Navigation/Navbar",component:d,parameters:{layout:"fullscreen",docs:{description:{component:"A responsive navigation bar component for application headers."}}},tags:["autodocs"],argTypes:{brandName:{control:"text",description:"The name of your brand/product displayed in the navbar"},brandLogo:{control:"object",description:"Icon or image component representing your brand"},items:{control:"object",description:"Array of navigation items (label, href, isActive)"},actions:{control:"object",description:"React nodes for action buttons in the navbar"}}},h={args:{brandName:"Enterprise UI",brandLogo:e.jsx(C,{className:"h-6 w-6 text-primary-600 dark:text-primary-400"}),items:[{label:"Dashboard",href:"#",isActive:!0},{label:"Projects",href:"#"},{label:"Reports",href:"#"},{label:"Settings",href:"#"}],actions:e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",size:"sm",children:"Sign In"}),e.jsx(a,{size:"sm",children:"Sign Up"})]})}},p={args:{brandName:"Analytics Pro",brandLogo:e.jsx(Z,{className:"h-6 w-6 text-primary-600 dark:text-primary-400"}),items:[{label:"Overview",href:"#",isActive:!0},{label:"Reports",href:"#"},{label:"Analytics",href:"#"},{label:"Integrations",href:"#"}],actions:e.jsxs(e.Fragment,{children:[e.jsx(V,{variant:"primary",size:"sm",className:"mr-2",children:"New"}),e.jsxs(a,{variant:"outline",size:"sm",className:"relative",children:["Notifications",e.jsx("span",{className:"absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-error-500 text-[10px] text-white",children:"4"})]}),e.jsx(a,{variant:"ghost",size:"icon",children:e.jsx(E,{className:"h-5 w-5"})})]})}},u={render:r=>e.jsx("div",{className:"dark",children:e.jsx(d,{...r})}),args:{brandName:"Night Mode",brandLogo:e.jsx(W,{className:"h-6 w-6 text-primary-400"}),items:[{label:"Dashboard",href:"#",isActive:!0},{label:"Customers",href:"#"},{label:"Products",href:"#"},{label:"Reports",href:"#"}],actions:e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",size:"sm",children:"Account"}),e.jsx(a,{size:"sm",children:"Upgrade"})]})}},x={args:{brandName:"Streamline",brandLogo:e.jsx(G,{className:"h-6 w-6 text-primary-600 dark:text-primary-400"}),items:[{label:"Dashboard",href:"#",isActive:!0},{label:"Analytics",href:"#"},{label:"Settings",href:"#"}],actions:e.jsx(a,{variant:"ghost",size:"icon",children:e.jsx(E,{className:"h-5 w-5"})})}},b={render:()=>e.jsxs("div",{className:"resize-x max-w-[1200px] min-w-[320px] overflow-auto border border-neutral-300 dark:border-neutral-700 mx-auto",children:[e.jsx("div",{className:"p-4 bg-neutral-100 dark:bg-neutral-800 text-center text-sm",children:"↔️ Resize this container to see how the navbar adapts to different screen sizes"}),e.jsx(d,{brandName:"Responsive UI",brandLogo:e.jsx(C,{className:"h-6 w-6 text-primary-600 dark:text-primary-400"}),items:[{label:"Dashboard",href:"#",isActive:!0},{label:"Projects",href:"#"},{label:"Team",href:"#"},{label:"Reports",href:"#"},{label:"Settings",href:"#"}],actions:e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",size:"sm",children:"Account"}),e.jsx(a,{size:"sm",children:"Upgrade"})]})}),e.jsxs("div",{className:"p-8",children:[e.jsx("h1",{className:"text-2xl font-semibold mb-4",children:"Dashboard Overview"}),e.jsx("p",{className:"text-neutral-600 dark:text-neutral-400",children:"Welcome to your dashboard! This is example content to demonstrate the responsive navbar."})]})]})};var k,w,z;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    brandName: 'Enterprise UI',
    brandLogo: <Box className="h-6 w-6 text-primary-600 dark:text-primary-400" />,
    items: [{
      label: 'Dashboard',
      href: '#',
      isActive: true
    }, {
      label: 'Projects',
      href: '#'
    }, {
      label: 'Reports',
      href: '#'
    }, {
      label: 'Settings',
      href: '#'
    }],
    actions: <>\r
        <Button variant="outline" size="sm">Sign In</Button>\r
        <Button size="sm">Sign Up</Button>\r
      </>
  }
}`,...(z=(w=h.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var A,T,B;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    brandName: 'Analytics Pro',
    brandLogo: <LineChart className="h-6 w-6 text-primary-600 dark:text-primary-400" />,
    items: [{
      label: 'Overview',
      href: '#',
      isActive: true
    }, {
      label: 'Reports',
      href: '#'
    }, {
      label: 'Analytics',
      href: '#'
    }, {
      label: 'Integrations',
      href: '#'
    }],
    actions: <>\r
        <Tag variant="primary" size="sm" className="mr-2">New</Tag>\r
        <Button variant="outline" size="sm" className="relative">\r
          Notifications\r
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-error-500 text-[10px] text-white">\r
            4\r
          </span>\r
        </Button>\r
        <Button variant="ghost" size="icon">\r
          <User className="h-5 w-5" />\r
        </Button>\r
      </>
  }
}`,...(B=(T=p.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var S,M,L;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <div className="dark">\r
      <Navbar {...args} />\r
    </div>,
  args: {
    brandName: 'Night Mode',
    brandLogo: <Settings className="h-6 w-6 text-primary-400" />,
    items: [{
      label: 'Dashboard',
      href: '#',
      isActive: true
    }, {
      label: 'Customers',
      href: '#'
    }, {
      label: 'Products',
      href: '#'
    }, {
      label: 'Reports',
      href: '#'
    }],
    actions: <>\r
        <Button variant="outline" size="sm">Account</Button>\r
        <Button size="sm">Upgrade</Button>\r
      </>
  }
}`,...(L=(M=u.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var R,_,I;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    brandName: 'Streamline',
    brandLogo: <LayoutGrid className="h-6 w-6 text-primary-600 dark:text-primary-400" />,
    items: [{
      label: 'Dashboard',
      href: '#',
      isActive: true
    }, {
      label: 'Analytics',
      href: '#'
    }, {
      label: 'Settings',
      href: '#'
    }],
    actions: <Button variant="ghost" size="icon">\r
        <User className="h-5 w-5" />\r
      </Button>
  }
}`,...(I=(_=x.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var D,P,U;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="resize-x max-w-[1200px] min-w-[320px] overflow-auto border border-neutral-300 dark:border-neutral-700 mx-auto">\r
      <div className="p-4 bg-neutral-100 dark:bg-neutral-800 text-center text-sm">\r
        ↔️ Resize this container to see how the navbar adapts to different screen sizes\r
      </div>\r
      <Navbar brandName="Responsive UI" brandLogo={<Box className="h-6 w-6 text-primary-600 dark:text-primary-400" />} items={[{
      label: 'Dashboard',
      href: '#',
      isActive: true
    }, {
      label: 'Projects',
      href: '#'
    }, {
      label: 'Team',
      href: '#'
    }, {
      label: 'Reports',
      href: '#'
    }, {
      label: 'Settings',
      href: '#'
    }]} actions={<>\r
            <Button variant="outline" size="sm">Account</Button>\r
            <Button size="sm">Upgrade</Button>\r
          </>} />\r
      <div className="p-8">\r
        <h1 className="text-2xl font-semibold mb-4">Dashboard Overview</h1>\r
        <p className="text-neutral-600 dark:text-neutral-400">\r
          Welcome to your dashboard! This is example content to demonstrate the responsive navbar.\r
        </p>\r
      </div>\r
    </div>
}`,...(U=(P=b.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};const oe=["Default","WithNotifications","DarkMode","MinimalWithIcons","ResponsiveExample"];export{u as DarkMode,h as Default,x as MinimalWithIcons,b as ResponsiveExample,p as WithNotifications,oe as __namedExportsOrder,ie as default};
