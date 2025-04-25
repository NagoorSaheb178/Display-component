import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{r as A,R as C}from"./index-CleY8y_P.js";import{c as g}from"./utils-CytzSlOG.js";import{c as L}from"./createLucideIcon-Dw_B_vTG.js";import"./_commonjsHelpers-Cpj98o6Y.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=L("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),T=A.createContext(void 0);function c({children:t,allowMultiple:i=!1,defaultExpanded:s=[],className:l,...d}){const m=s.reduce((u,h)=>({...u,[h]:!0}),{}),[a,w]=A.useState(m),p=u=>{w(h=>i?{...h,[u]:!h[u]}:{[u]:!h[u]})};return e.jsx(T.Provider,{value:{expanded:a,toggle:p,allowMultiple:i},children:e.jsx("div",{className:g("divide-y divide-neutral-200 dark:divide-neutral-700",l),...d,children:t})})}function n({children:t,id:i,disabled:s=!1,className:l,...d}){if(!A.useContext(T))throw new Error("AccordionItem must be used within an Accordion");return e.jsx("div",{className:g("py-2",s&&"opacity-50 cursor-not-allowed",l),...d,children:C.Children.map(t,a=>C.isValidElement(a)?C.cloneElement(a,{id:i,disabled:s}):a)})}function r({children:t,id:i,disabled:s,className:l,...d}){const m=A.useContext(T);if(!m||!i)throw new Error("AccordionTrigger must be used within an AccordionItem with a valid id");const{expanded:a,toggle:w}=m,p=a[i]||!1;return e.jsxs("button",{type:"button",onClick:()=>w(i),"aria-expanded":p,disabled:s,className:g("flex w-full items-center justify-between py-2 text-left text-base font-medium transition-all hover:text-primary-600 dark:hover:text-primary-400",p&&"text-primary-600 dark:text-primary-400",s&&"cursor-not-allowed",l),...d,children:[t,e.jsx(O,{className:g("h-4 w-4 shrink-0 transition-transform duration-200",p&&"rotate-180")})]})}function o({children:t,id:i,className:s,...l}){const d=A.useContext(T);if(!d||!i)throw new Error("AccordionContent must be used within an AccordionItem with a valid id");const{expanded:m}=d;return m[i]||!1?e.jsx("div",{className:g("pt-2 pb-1 text-sm",s),...l,children:t}):null}try{c.displayName="Accordion",c.__docgenInfo={description:"",displayName:"Accordion",props:{allowMultiple:{defaultValue:{value:"false"},description:"",name:"allowMultiple",required:!1,type:{name:"boolean"}},defaultExpanded:{defaultValue:{value:"[]"},description:"",name:"defaultExpanded",required:!1,type:{name:"string[]"}}}}}catch{}try{n.displayName="AccordionItem",n.__docgenInfo={description:"",displayName:"AccordionItem",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}try{r.displayName="AccordionTrigger",r.__docgenInfo={description:"",displayName:"AccordionTrigger",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}try{o.displayName="AccordionContent",o.__docgenInfo={description:"",displayName:"AccordionContent",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const K={title:"Data Display/Accordion",component:c,parameters:{layout:"padded",docs:{description:{component:"Accordions display an expandable/collapsible list of sections."}}},tags:["autodocs"],argTypes:{allowMultiple:{control:"boolean",description:"Allow multiple sections to be expanded at once"},defaultExpanded:{control:"object",description:"Array of IDs for items that should be expanded by default"}}},x={render:t=>e.jsxs(c,{className:"w-full max-w-md",...t,children:[e.jsxs(n,{id:"item-1",children:[e.jsx(r,{children:"What is a design system?"}),e.jsx(o,{children:"A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications. It serves as a single source of truth for an organization."})]}),e.jsxs(n,{id:"item-2",children:[e.jsx(r,{children:"Why use a design system?"}),e.jsx(o,{children:"Design systems help create consistent user experiences across products, speed up development time, promote collaboration between teams, and reduce design and technical debt."})]}),e.jsxs(n,{id:"item-3",children:[e.jsx(r,{children:"Is Storybook required?"}),e.jsx(o,{children:"While not strictly required, Storybook is highly recommended for documenting, testing, and showcasing components in a design system. It helps teams understand how to use components correctly."})]})]}),args:{allowMultiple:!1,defaultExpanded:["item-1"]}},b={render:()=>e.jsxs(c,{allowMultiple:!0,defaultExpanded:["item-1","item-3"],className:"w-full max-w-md",children:[e.jsxs(n,{id:"item-1",children:[e.jsx(r,{children:"Section 1"}),e.jsx(o,{children:"This is the content for section 1. Multiple sections can be expanded simultaneously."})]}),e.jsxs(n,{id:"item-2",children:[e.jsx(r,{children:"Section 2"}),e.jsx(o,{children:"This is the content for section 2. Try clicking another section without closing this one."})]}),e.jsxs(n,{id:"item-3",children:[e.jsx(r,{children:"Section 3"}),e.jsx(o,{children:"This is the content for section 3. Notice how multiple sections can stay open."})]})]})},f={render:()=>e.jsxs(c,{className:"w-full max-w-md",children:[e.jsxs(n,{id:"item-1",children:[e.jsx(r,{children:"Available Section"}),e.jsx(o,{children:"This is a normal section that can be expanded and collapsed."})]}),e.jsxs(n,{id:"item-2",disabled:!0,children:[e.jsx(r,{children:"Disabled Section"}),e.jsx(o,{children:"This content won't be accessible because the section is disabled."})]}),e.jsxs(n,{id:"item-3",children:[e.jsx(r,{children:"Another Available Section"}),e.jsx(o,{children:"This is another normal section that can be expanded and collapsed."})]})]})},y={render:()=>e.jsxs(c,{className:"w-full max-w-md rounded-md border border-neutral-200 dark:border-neutral-700 p-2",children:[e.jsxs(n,{id:"item-1",className:"rounded-md bg-neutral-50 dark:bg-neutral-800 p-2 mb-2",children:[e.jsx(r,{className:"text-lg font-semibold",children:"Custom Styled Accordion"}),e.jsx(o,{className:"bg-white dark:bg-neutral-900 p-3 rounded-md mt-2",children:"This accordion has custom styling applied to it, demonstrating how the component can be visually customized."})]}),e.jsxs(n,{id:"item-2",className:"rounded-md bg-neutral-50 dark:bg-neutral-800 p-2",children:[e.jsx(r,{className:"text-lg font-semibold",children:"Another Custom Section"}),e.jsx(o,{className:"bg-white dark:bg-neutral-900 p-3 rounded-md mt-2",children:"The styling can be customized to match your application's design requirements."})]})]})},j={render:()=>e.jsxs(c,{className:"w-full max-w-md",children:[e.jsxs(n,{id:"parent-1",children:[e.jsx(r,{children:"Parent Section 1"}),e.jsxs(o,{children:[e.jsx("p",{className:"mb-2",children:"This is parent section 1 content."}),e.jsxs(c,{className:"ml-4",children:[e.jsxs(n,{id:"child-1-1",children:[e.jsx(r,{children:"Child Section 1-1"}),e.jsx(o,{children:"This is nested content for child section 1-1."})]}),e.jsxs(n,{id:"child-1-2",children:[e.jsx(r,{children:"Child Section 1-2"}),e.jsx(o,{children:"This is nested content for child section 1-2."})]})]})]})]}),e.jsxs(n,{id:"parent-2",children:[e.jsx(r,{children:"Parent Section 2"}),e.jsxs(o,{children:[e.jsx("p",{className:"mb-2",children:"This is parent section 2 content."}),e.jsx(c,{className:"ml-4",children:e.jsxs(n,{id:"child-2-1",children:[e.jsx(r,{children:"Child Section 2-1"}),e.jsx(o,{children:"This is nested content for child section 2-1."})]})})]})]})]})};var I,N,S;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <Accordion className="w-full max-w-md" {...args}>\r
      <AccordionItem id="item-1">\r
        <AccordionTrigger>What is a design system?</AccordionTrigger>\r
        <AccordionContent>\r
          A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications. It serves as a single source of truth for an organization.\r
        </AccordionContent>\r
      </AccordionItem>\r
      <AccordionItem id="item-2">\r
        <AccordionTrigger>Why use a design system?</AccordionTrigger>\r
        <AccordionContent>\r
          Design systems help create consistent user experiences across products, speed up development time, promote collaboration between teams, and reduce design and technical debt.\r
        </AccordionContent>\r
      </AccordionItem>\r
      <AccordionItem id="item-3">\r
        <AccordionTrigger>Is Storybook required?</AccordionTrigger>\r
        <AccordionContent>\r
          While not strictly required, Storybook is highly recommended for documenting, testing, and showcasing components in a design system. It helps teams understand how to use components correctly.\r
        </AccordionContent>\r
      </AccordionItem>\r
    </Accordion>,
  args: {
    allowMultiple: false,
    defaultExpanded: ['item-1']
  }
}`,...(S=(N=x.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var _,v,k;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Accordion allowMultiple defaultExpanded={['item-1', 'item-3']} className="w-full max-w-md">\r
      <AccordionItem id="item-1">\r
        <AccordionTrigger>Section 1</AccordionTrigger>\r
        <AccordionContent>\r
          This is the content for section 1. Multiple sections can be expanded simultaneously.\r
        </AccordionContent>\r
      </AccordionItem>\r
      <AccordionItem id="item-2">\r
        <AccordionTrigger>Section 2</AccordionTrigger>\r
        <AccordionContent>\r
          This is the content for section 2. Try clicking another section without closing this one.\r
        </AccordionContent>\r
      </AccordionItem>\r
      <AccordionItem id="item-3">\r
        <AccordionTrigger>Section 3</AccordionTrigger>\r
        <AccordionContent>\r
          This is the content for section 3. Notice how multiple sections can stay open.\r
        </AccordionContent>\r
      </AccordionItem>\r
    </Accordion>
}`,...(k=(v=b.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var E,q,D;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Accordion className="w-full max-w-md">\r
      <AccordionItem id="item-1">\r
        <AccordionTrigger>Available Section</AccordionTrigger>\r
        <AccordionContent>\r
          This is a normal section that can be expanded and collapsed.\r
        </AccordionContent>\r
      </AccordionItem>\r
      <AccordionItem id="item-2" disabled>\r
        <AccordionTrigger>Disabled Section</AccordionTrigger>\r
        <AccordionContent>\r
          This content won't be accessible because the section is disabled.\r
        </AccordionContent>\r
      </AccordionItem>\r
      <AccordionItem id="item-3">\r
        <AccordionTrigger>Another Available Section</AccordionTrigger>\r
        <AccordionContent>\r
          This is another normal section that can be expanded and collapsed.\r
        </AccordionContent>\r
      </AccordionItem>\r
    </Accordion>
}`,...(D=(q=f.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var M,V,z;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Accordion className="w-full max-w-md rounded-md border border-neutral-200 dark:border-neutral-700 p-2">\r
      <AccordionItem id="item-1" className="rounded-md bg-neutral-50 dark:bg-neutral-800 p-2 mb-2">\r
        <AccordionTrigger className="text-lg font-semibold">\r
          Custom Styled Accordion\r
        </AccordionTrigger>\r
        <AccordionContent className="bg-white dark:bg-neutral-900 p-3 rounded-md mt-2">\r
          This accordion has custom styling applied to it, demonstrating how the component can be visually customized.\r
        </AccordionContent>\r
      </AccordionItem>\r
      <AccordionItem id="item-2" className="rounded-md bg-neutral-50 dark:bg-neutral-800 p-2">\r
        <AccordionTrigger className="text-lg font-semibold">\r
          Another Custom Section\r
        </AccordionTrigger>\r
        <AccordionContent className="bg-white dark:bg-neutral-900 p-3 rounded-md mt-2">\r
          The styling can be customized to match your application's design requirements.\r
        </AccordionContent>\r
      </AccordionItem>\r
    </Accordion>
}`,...(z=(V=y.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var W,P,R;j.parameters={...j.parameters,docs:{...(W=j.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Accordion className="w-full max-w-md">\r
      <AccordionItem id="parent-1">\r
        <AccordionTrigger>Parent Section 1</AccordionTrigger>\r
        <AccordionContent>\r
          <p className="mb-2">This is parent section 1 content.</p>\r
          <Accordion className="ml-4">\r
            <AccordionItem id="child-1-1">\r
              <AccordionTrigger>Child Section 1-1</AccordionTrigger>\r
              <AccordionContent>\r
                This is nested content for child section 1-1.\r
              </AccordionContent>\r
            </AccordionItem>\r
            <AccordionItem id="child-1-2">\r
              <AccordionTrigger>Child Section 1-2</AccordionTrigger>\r
              <AccordionContent>\r
                This is nested content for child section 1-2.\r
              </AccordionContent>\r
            </AccordionItem>\r
          </Accordion>\r
        </AccordionContent>\r
      </AccordionItem>\r
      <AccordionItem id="parent-2">\r
        <AccordionTrigger>Parent Section 2</AccordionTrigger>\r
        <AccordionContent>\r
          <p className="mb-2">This is parent section 2 content.</p>\r
          <Accordion className="ml-4">\r
            <AccordionItem id="child-2-1">\r
              <AccordionTrigger>Child Section 2-1</AccordionTrigger>\r
              <AccordionContent>\r
                This is nested content for child section 2-1.\r
              </AccordionContent>\r
            </AccordionItem>\r
          </Accordion>\r
        </AccordionContent>\r
      </AccordionItem>\r
    </Accordion>
}`,...(R=(P=j.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};const Q=["Default","MultipleExpanded","DisabledItem","CustomStyling","Nested"];export{y as CustomStyling,x as Default,f as DisabledItem,b as MultipleExpanded,j as Nested,Q as __namedExportsOrder,K as default};
