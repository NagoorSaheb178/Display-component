import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{r as h,R as p}from"./index-CleY8y_P.js";import{c as j}from"./utils-CytzSlOG.js";import{c as O}from"./createLucideIcon-Dw_B_vTG.js";import{S as Z}from"./settings-D45lCp1W.js";import"./_commonjsHelpers-Cpj98o6Y.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=O("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=O("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),y=h.createContext(void 0);function l({children:a,defaultTab:n,onTabChange:d,className:b,...c}){const[i,m]=h.useState(n||"");h.useEffect(()=>{var s,C,g,w,S,_;if(!i&&p.Children.count(a)>0){const A=(_=(S=(w=(g=(C=(s=p.Children.toArray(a).find(u=>p.isValidElement(u)&&u.type===o))==null?void 0:s.props)==null?void 0:C.children)==null?void 0:g.find)==null?void 0:w.call(g,u=>p.isValidElement(u)&&u.type===r))==null?void 0:S.props)==null?void 0:_.id;A&&m(A)}},[i,a]);const k=s=>{m(s),d&&d(s)};return e.jsx(y.Provider,{value:{activeTab:i,setActiveTab:k},children:e.jsx("div",{className:j("space-y-2",b),...c,children:a})})}function o({children:a,orientation:n="horizontal",className:d,...b}){return e.jsx("div",{role:"tablist",className:j("flex border-b border-neutral-200 dark:border-neutral-700",n==="vertical"&&"flex-col border-b-0 border-r",d),"aria-orientation":n,...b,children:a})}function r({children:a,id:n,disabled:d=!1,className:b,...c}){const i=h.useContext(y);if(!i)throw new Error("TabsTrigger must be used within a Tabs component");const{activeTab:m,setActiveTab:k}=i,s=m===n;return e.jsx("button",{role:"tab",type:"button",id:`tab-${n}`,"aria-selected":s,"aria-controls":`tabpanel-${n}`,tabIndex:s?0:-1,disabled:d,onClick:()=>k(n),className:j("inline-flex items-center justify-center whitespace-nowrap px-3 py-2 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",s?"border-b-2 border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400":"text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400",b),...c,children:a})}function t({children:a,id:n,className:d,...b}){const c=h.useContext(y);if(!c)throw new Error("TabsContent must be used within a Tabs component");const{activeTab:i}=c;return i===n?e.jsx("div",{role:"tabpanel",id:`tabpanel-${n}`,"aria-labelledby":`tab-${n}`,className:j("pt-2",d),...b,children:a}):null}try{l.displayName="Tabs",l.__docgenInfo={description:"",displayName:"Tabs",props:{defaultTab:{defaultValue:null,description:"",name:"defaultTab",required:!1,type:{name:"string"}},onTabChange:{defaultValue:null,description:"",name:"onTabChange",required:!1,type:{name:"(id: string) => void"}}}}}catch{}try{o.displayName="TabsList",o.__docgenInfo={description:"",displayName:"TabsList",props:{orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}try{r.displayName="TabsTrigger",r.__docgenInfo={description:"",displayName:"TabsTrigger",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}try{t.displayName="TabsContent",t.__docgenInfo={description:"",displayName:"TabsContent",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}}}}}catch{}const ae={title:"Navigation/Tabs",component:l,parameters:{layout:"padded",docs:{description:{component:"Tabs organize content into multiple sections and allow users to navigate between them."}}},tags:["autodocs"],argTypes:{defaultTab:{control:"text",description:"ID of the tab that should be active by default"},onTabChange:{action:"tab changed"}}},x={render:a=>e.jsxs(l,{className:"w-full max-w-md",...a,children:[e.jsxs(o,{children:[e.jsx(r,{id:"tab1",children:"Account"}),e.jsx(r,{id:"tab2",children:"Profile"}),e.jsx(r,{id:"tab3",children:"Settings"})]}),e.jsx(t,{id:"tab1",children:e.jsxs("div",{className:"p-4 rounded-md border border-neutral-200 dark:border-neutral-700",children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"Account Information"}),e.jsx("p",{className:"text-neutral-600 dark:text-neutral-400",children:"Manage your account details and preferences."})]})}),e.jsx(t,{id:"tab2",children:e.jsxs("div",{className:"p-4 rounded-md border border-neutral-200 dark:border-neutral-700",children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"User Profile"}),e.jsx("p",{className:"text-neutral-600 dark:text-neutral-400",children:"Update your profile information and visibility settings."})]})}),e.jsx(t,{id:"tab3",children:e.jsxs("div",{className:"p-4 rounded-md border border-neutral-200 dark:border-neutral-700",children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"System Settings"}),e.jsx("p",{className:"text-neutral-600 dark:text-neutral-400",children:"Configure application settings and preferences."})]})})]}),args:{defaultTab:"tab1"}},T={render:a=>e.jsxs(l,{className:"w-full max-w-md",...a,children:[e.jsxs(o,{children:[e.jsxs(r,{id:"tab1",className:"gap-2",children:[e.jsx(B,{className:"h-4 w-4"}),e.jsx("span",{children:"Documents"})]}),e.jsxs(r,{id:"tab2",className:"gap-2",children:[e.jsx(G,{className:"h-4 w-4"}),e.jsx("span",{children:"Team"})]}),e.jsxs(r,{id:"tab3",className:"gap-2",children:[e.jsx(Z,{className:"h-4 w-4"}),e.jsx("span",{children:"Settings"})]})]}),e.jsx(t,{id:"tab1",children:e.jsxs("div",{className:"p-4 rounded-md border border-neutral-200 dark:border-neutral-700",children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"Document Management"}),e.jsx("p",{className:"text-neutral-600 dark:text-neutral-400",children:"Access, share, and manage your documents."})]})}),e.jsx(t,{id:"tab2",children:e.jsxs("div",{className:"p-4 rounded-md border border-neutral-200 dark:border-neutral-700",children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"Team Collaboration"}),e.jsx("p",{className:"text-neutral-600 dark:text-neutral-400",children:"Manage team members and collaboration settings."})]})}),e.jsx(t,{id:"tab3",children:e.jsxs("div",{className:"p-4 rounded-md border border-neutral-200 dark:border-neutral-700",children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"Account Settings"}),e.jsx("p",{className:"text-neutral-600 dark:text-neutral-400",children:"Configure your account settings and preferences."})]})})]}),args:{defaultTab:"tab1"}},f={render:a=>e.jsxs(l,{className:"w-full max-w-md",...a,children:[e.jsxs(o,{children:[e.jsx(r,{id:"tab1",children:"Active Tab"}),e.jsx(r,{id:"tab2",disabled:!0,children:"Disabled Tab"}),e.jsx(r,{id:"tab3",children:"Another Tab"})]}),e.jsx(t,{id:"tab1",children:e.jsxs("div",{className:"p-4 rounded-md border border-neutral-200 dark:border-neutral-700",children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"Active Tab Content"}),e.jsx("p",{className:"text-neutral-600 dark:text-neutral-400",children:"This is the content for the active tab. Notice the disabled tab cannot be selected."})]})}),e.jsx(t,{id:"tab2",children:e.jsx("div",{className:"p-4 rounded-md border border-neutral-200 dark:border-neutral-700",children:e.jsx("p",{children:"This content should not be visible because the tab is disabled."})})}),e.jsx(t,{id:"tab3",children:e.jsxs("div",{className:"p-4 rounded-md border border-neutral-200 dark:border-neutral-700",children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"Another Tab Content"}),e.jsx("p",{className:"text-neutral-600 dark:text-neutral-400",children:"This is the content for another available tab."})]})})]}),args:{defaultTab:"tab1"}},N={render:a=>e.jsxs(l,{className:"w-full max-w-md",...a,children:[e.jsxs(o,{className:"w-full",children:[e.jsx(r,{id:"tab1",className:"flex-1",children:"First"}),e.jsx(r,{id:"tab2",className:"flex-1",children:"Second"}),e.jsx(r,{id:"tab3",className:"flex-1",children:"Third"})]}),e.jsx(t,{id:"tab1",children:e.jsxs("div",{className:"p-4 rounded-md border border-neutral-200 dark:border-neutral-700",children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"First Tab Content"}),e.jsx("p",{className:"text-neutral-600 dark:text-neutral-400",children:"Content for the first tab with full-width tab navigation."})]})}),e.jsx(t,{id:"tab2",children:e.jsxs("div",{className:"p-4 rounded-md border border-neutral-200 dark:border-neutral-700",children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"Second Tab Content"}),e.jsx("p",{className:"text-neutral-600 dark:text-neutral-400",children:"Content for the second tab with full-width tab navigation."})]})}),e.jsx(t,{id:"tab3",children:e.jsxs("div",{className:"p-4 rounded-md border border-neutral-200 dark:border-neutral-700",children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"Third Tab Content"}),e.jsx("p",{className:"text-neutral-600 dark:text-neutral-400",children:"Content for the third tab with full-width tab navigation."})]})})]}),args:{defaultTab:"tab1"}},v={render:a=>e.jsxs(l,{className:"w-full max-w-md",...a,children:[e.jsxs(o,{className:"bg-neutral-100 p-1 rounded-t-lg dark:bg-neutral-800",children:[e.jsx(r,{id:"tab1",className:"rounded-md data-[state=active]:bg-white data-[state=active]:shadow dark:data-[state=active]:bg-neutral-900",children:"First"}),e.jsx(r,{id:"tab2",className:"rounded-md data-[state=active]:bg-white data-[state=active]:shadow dark:data-[state=active]:bg-neutral-900",children:"Second"}),e.jsx(r,{id:"tab3",className:"rounded-md data-[state=active]:bg-white data-[state=active]:shadow dark:data-[state=active]:bg-neutral-900",children:"Third"})]}),e.jsxs(t,{id:"tab1",className:"p-4 bg-white rounded-b-lg border border-t-0 border-neutral-200 dark:bg-neutral-900 dark:border-neutral-700",children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"Custom Styled First Tab"}),e.jsx("p",{className:"text-neutral-600 dark:text-neutral-400",children:"This tab has custom styling applied to make it more visually distinct."})]}),e.jsxs(t,{id:"tab2",className:"p-4 bg-white rounded-b-lg border border-t-0 border-neutral-200 dark:bg-neutral-900 dark:border-neutral-700",children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"Custom Styled Second Tab"}),e.jsx("p",{className:"text-neutral-600 dark:text-neutral-400",children:"This tab has custom styling applied to make it more visually distinct."})]}),e.jsxs(t,{id:"tab3",className:"p-4 bg-white rounded-b-lg border border-t-0 border-neutral-200 dark:bg-neutral-900 dark:border-neutral-700",children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"Custom Styled Third Tab"}),e.jsx("p",{className:"text-neutral-600 dark:text-neutral-400",children:"This tab has custom styling applied to make it more visually distinct."})]})]}),args:{defaultTab:"tab1"}};var L,M,F;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <Tabs className="w-full max-w-md" {...args}>\r
      <TabsList>\r
        <TabsTrigger id="tab1">Account</TabsTrigger>\r
        <TabsTrigger id="tab2">Profile</TabsTrigger>\r
        <TabsTrigger id="tab3">Settings</TabsTrigger>\r
      </TabsList>\r
      <TabsContent id="tab1">\r
        <div className="p-4 rounded-md border border-neutral-200 dark:border-neutral-700">\r
          <h3 className="text-lg font-medium mb-2">Account Information</h3>\r
          <p className="text-neutral-600 dark:text-neutral-400">\r
            Manage your account details and preferences.\r
          </p>\r
        </div>\r
      </TabsContent>\r
      <TabsContent id="tab2">\r
        <div className="p-4 rounded-md border border-neutral-200 dark:border-neutral-700">\r
          <h3 className="text-lg font-medium mb-2">User Profile</h3>\r
          <p className="text-neutral-600 dark:text-neutral-400">\r
            Update your profile information and visibility settings.\r
          </p>\r
        </div>\r
      </TabsContent>\r
      <TabsContent id="tab3">\r
        <div className="p-4 rounded-md border border-neutral-200 dark:border-neutral-700">\r
          <h3 className="text-lg font-medium mb-2">System Settings</h3>\r
          <p className="text-neutral-600 dark:text-neutral-400">\r
            Configure application settings and preferences.\r
          </p>\r
        </div>\r
      </TabsContent>\r
    </Tabs>,
  args: {
    defaultTab: 'tab1'
  }
}`,...(F=(M=x.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var I,D,q;T.parameters={...T.parameters,docs:{...(I=T.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <Tabs className="w-full max-w-md" {...args}>\r
      <TabsList>\r
        <TabsTrigger id="tab1" className="gap-2">\r
          <FileText className="h-4 w-4" />\r
          <span>Documents</span>\r
        </TabsTrigger>\r
        <TabsTrigger id="tab2" className="gap-2">\r
          <Users className="h-4 w-4" />\r
          <span>Team</span>\r
        </TabsTrigger>\r
        <TabsTrigger id="tab3" className="gap-2">\r
          <Settings className="h-4 w-4" />\r
          <span>Settings</span>\r
        </TabsTrigger>\r
      </TabsList>\r
      <TabsContent id="tab1">\r
        <div className="p-4 rounded-md border border-neutral-200 dark:border-neutral-700">\r
          <h3 className="text-lg font-medium mb-2">Document Management</h3>\r
          <p className="text-neutral-600 dark:text-neutral-400">\r
            Access, share, and manage your documents.\r
          </p>\r
        </div>\r
      </TabsContent>\r
      <TabsContent id="tab2">\r
        <div className="p-4 rounded-md border border-neutral-200 dark:border-neutral-700">\r
          <h3 className="text-lg font-medium mb-2">Team Collaboration</h3>\r
          <p className="text-neutral-600 dark:text-neutral-400">\r
            Manage team members and collaboration settings.\r
          </p>\r
        </div>\r
      </TabsContent>\r
      <TabsContent id="tab3">\r
        <div className="p-4 rounded-md border border-neutral-200 dark:border-neutral-700">\r
          <h3 className="text-lg font-medium mb-2">Account Settings</h3>\r
          <p className="text-neutral-600 dark:text-neutral-400">\r
            Configure your account settings and preferences.\r
          </p>\r
        </div>\r
      </TabsContent>\r
    </Tabs>,
  args: {
    defaultTab: 'tab1'
  }
}`,...(q=(D=T.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var V,E,U;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <Tabs className="w-full max-w-md" {...args}>\r
      <TabsList>\r
        <TabsTrigger id="tab1">Active Tab</TabsTrigger>\r
        <TabsTrigger id="tab2" disabled>Disabled Tab</TabsTrigger>\r
        <TabsTrigger id="tab3">Another Tab</TabsTrigger>\r
      </TabsList>\r
      <TabsContent id="tab1">\r
        <div className="p-4 rounded-md border border-neutral-200 dark:border-neutral-700">\r
          <h3 className="text-lg font-medium mb-2">Active Tab Content</h3>\r
          <p className="text-neutral-600 dark:text-neutral-400">\r
            This is the content for the active tab. Notice the disabled tab cannot be selected.\r
          </p>\r
        </div>\r
      </TabsContent>\r
      <TabsContent id="tab2">\r
        <div className="p-4 rounded-md border border-neutral-200 dark:border-neutral-700">\r
          <p>This content should not be visible because the tab is disabled.</p>\r
        </div>\r
      </TabsContent>\r
      <TabsContent id="tab3">\r
        <div className="p-4 rounded-md border border-neutral-200 dark:border-neutral-700">\r
          <h3 className="text-lg font-medium mb-2">Another Tab Content</h3>\r
          <p className="text-neutral-600 dark:text-neutral-400">\r
            This is the content for another available tab.\r
          </p>\r
        </div>\r
      </TabsContent>\r
    </Tabs>,
  args: {
    defaultTab: 'tab1'
  }
}`,...(U=(E=f.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};var z,H,P;N.parameters={...N.parameters,docs:{...(z=N.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <Tabs className="w-full max-w-md" {...args}>\r
      <TabsList className="w-full">\r
        <TabsTrigger id="tab1" className="flex-1">First</TabsTrigger>\r
        <TabsTrigger id="tab2" className="flex-1">Second</TabsTrigger>\r
        <TabsTrigger id="tab3" className="flex-1">Third</TabsTrigger>\r
      </TabsList>\r
      <TabsContent id="tab1">\r
        <div className="p-4 rounded-md border border-neutral-200 dark:border-neutral-700">\r
          <h3 className="text-lg font-medium mb-2">First Tab Content</h3>\r
          <p className="text-neutral-600 dark:text-neutral-400">\r
            Content for the first tab with full-width tab navigation.\r
          </p>\r
        </div>\r
      </TabsContent>\r
      <TabsContent id="tab2">\r
        <div className="p-4 rounded-md border border-neutral-200 dark:border-neutral-700">\r
          <h3 className="text-lg font-medium mb-2">Second Tab Content</h3>\r
          <p className="text-neutral-600 dark:text-neutral-400">\r
            Content for the second tab with full-width tab navigation.\r
          </p>\r
        </div>\r
      </TabsContent>\r
      <TabsContent id="tab3">\r
        <div className="p-4 rounded-md border border-neutral-200 dark:border-neutral-700">\r
          <h3 className="text-lg font-medium mb-2">Third Tab Content</h3>\r
          <p className="text-neutral-600 dark:text-neutral-400">\r
            Content for the third tab with full-width tab navigation.\r
          </p>\r
        </div>\r
      </TabsContent>\r
    </Tabs>,
  args: {
    defaultTab: 'tab1'
  }
}`,...(P=(H=N.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var W,$,R;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <Tabs className="w-full max-w-md" {...args}>\r
      <TabsList className="bg-neutral-100 p-1 rounded-t-lg dark:bg-neutral-800">\r
        <TabsTrigger id="tab1" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow dark:data-[state=active]:bg-neutral-900">\r
          First\r
        </TabsTrigger>\r
        <TabsTrigger id="tab2" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow dark:data-[state=active]:bg-neutral-900">\r
          Second\r
        </TabsTrigger>\r
        <TabsTrigger id="tab3" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow dark:data-[state=active]:bg-neutral-900">\r
          Third\r
        </TabsTrigger>\r
      </TabsList>\r
      <TabsContent id="tab1" className="p-4 bg-white rounded-b-lg border border-t-0 border-neutral-200 dark:bg-neutral-900 dark:border-neutral-700">\r
        <h3 className="text-lg font-medium mb-2">Custom Styled First Tab</h3>\r
        <p className="text-neutral-600 dark:text-neutral-400">\r
          This tab has custom styling applied to make it more visually distinct.\r
        </p>\r
      </TabsContent>\r
      <TabsContent id="tab2" className="p-4 bg-white rounded-b-lg border border-t-0 border-neutral-200 dark:bg-neutral-900 dark:border-neutral-700">\r
        <h3 className="text-lg font-medium mb-2">Custom Styled Second Tab</h3>\r
        <p className="text-neutral-600 dark:text-neutral-400">\r
          This tab has custom styling applied to make it more visually distinct.\r
        </p>\r
      </TabsContent>\r
      <TabsContent id="tab3" className="p-4 bg-white rounded-b-lg border border-t-0 border-neutral-200 dark:bg-neutral-900 dark:border-neutral-700">\r
        <h3 className="text-lg font-medium mb-2">Custom Styled Third Tab</h3>\r
        <p className="text-neutral-600 dark:text-neutral-400">\r
          This tab has custom styling applied to make it more visually distinct.\r
        </p>\r
      </TabsContent>\r
    </Tabs>,
  args: {
    defaultTab: 'tab1'
  }
}`,...(R=($=v.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};const re=["Default","WithIcons","DisabledTab","FullWidth","CustomStyles"];export{v as CustomStyles,x as Default,f as DisabledTab,N as FullWidth,T as WithIcons,re as __namedExportsOrder,ae as default};
