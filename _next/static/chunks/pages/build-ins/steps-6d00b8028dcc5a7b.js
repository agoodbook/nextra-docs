(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[279],{6795:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/build-ins/steps",function(){return n(2223)}])},2223:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return a}});var c=n(1527),r=n(4784),l=n(1381),t=n(1182);n(1303);var i=n(987),o=n(2868);let a=[{depth:2,value:"示例",id:"示例"},{depth:3,value:"安装",id:"安装"},{depth:3,value:"添加 Next.js 配置",id:"添加-nextjs-配置"},{depth:3,value:"创建文档主题配置",id:"创建文档主题配置"},{depth:3,value:"启动",id:"启动"},{depth:2,value:"用法",id:"用法"},{depth:3,value:"Step 1",id:"step-1"},{depth:3,value:"Step 2",id:"step-2"}];function _createMdxContent(e){let s=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code",span:"span"},(0,i.a)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.h1,{children:"Steps 组件"}),"\n",(0,c.jsx)(s.p,{children:"将有序列表转换为步骤的可视化表示的内置组件。"}),"\n",(0,c.jsx)(s.h2,{id:"示例",children:"示例"}),"\n",(0,c.jsxs)(o.Rg,{children:[(0,c.jsx)(s.h3,{id:"安装",children:"安装"}),(0,c.jsxs)(o.mQ,{items:["npm","pnpm","yarn","bun"],storageKey:"selectedPackageManager",children:[(0,c.jsx)(o.OK,{children:(0,c.jsx)(s.pre,{"data-language":"sh","data-theme":"default",hasCopyCode:!0,children:(0,c.jsx)(s.code,{"data-language":"sh","data-theme":"default",children:(0,c.jsxs)(s.span,{className:"line",children:[(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"npm"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"i"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"next"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"react"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"react-dom"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"nextra"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"nextra-theme-docs"})]})})})}),(0,c.jsx)(o.OK,{children:(0,c.jsx)(s.pre,{"data-language":"sh","data-theme":"default",hasCopyCode:!0,children:(0,c.jsx)(s.code,{"data-language":"sh","data-theme":"default",children:(0,c.jsxs)(s.span,{className:"line",children:[(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"add"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"next"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"react"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"react-dom"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"nextra"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"nextra-theme-docs"})]})})})}),(0,c.jsx)(o.OK,{children:(0,c.jsx)(s.pre,{"data-language":"sh","data-theme":"default",hasCopyCode:!0,children:(0,c.jsx)(s.code,{"data-language":"sh","data-theme":"default",children:(0,c.jsxs)(s.span,{className:"line",children:[(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"yarn"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"add"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"next"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"react"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"react-dom"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"nextra"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"nextra-theme-docs"})]})})})}),(0,c.jsx)(o.OK,{children:(0,c.jsx)(s.pre,{"data-language":"sh","data-theme":"default",hasCopyCode:!0,children:(0,c.jsx)(s.code,{"data-language":"sh","data-theme":"default",children:(0,c.jsxs)(s.span,{className:"line",children:[(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"bun"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"add"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"next"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"react"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"react-dom"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"nextra"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"nextra-theme-docs"})]})})})})]}),(0,c.jsx)(s.h3,{id:"添加-nextjs-配置",children:"添加 Next.js 配置"}),(0,c.jsxs)(s.p,{children:["在项目的根目录中创建以下",(0,c.jsx)(s.code,{children:"next.config.js"}),"文件："]}),(0,c.jsx)(s.pre,{"data-language":"jsx","data-theme":"default",filename:"next.config.js",hasCopyCode:!0,children:(0,c.jsxs)(s.code,{"data-language":"jsx","data-theme":"default",children:[(0,c.jsxs)(s.span,{className:"line",children:[(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"withNextra"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"require"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'nextra'"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")({"})]}),"\n",(0,c.jsxs)(s.span,{className:"line",children:[(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"theme"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'nextra-theme-docs'"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,c.jsxs)(s.span,{className:"line",children:[(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"themeConfig"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./theme.config.jsx'"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,c.jsx)(s.span,{className:"line",children:(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,c.jsx)(s.span,{className:"line",children:" "}),"\n",(0,c.jsx)(s.span,{className:"line",children:(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// 如果你有其他 Next.js 配置，你可以将它们作为参数传递给 withNextra"})}),"\n",(0,c.jsxs)(s.span,{className:"line",children:[(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"nextConfig"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {};"})]}),"\n",(0,c.jsxs)(s.span,{className:"line",children:[(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"module"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"exports"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"withNextra"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(nextConfig);"})]})]})}),(0,c.jsx)(s.h3,{id:"创建文档主题配置",children:"创建文档主题配置"}),(0,c.jsxs)(s.p,{children:["在项目的根目录中创建主题 ",(0,c.jsx)(s.code,{children:"theme.config.jsx"})," 文件。"]}),(0,c.jsx)(s.pre,{"data-language":"jsx","data-theme":"default",filename:"theme.config.jsx",hasCopyCode:!0,children:(0,c.jsxs)(s.code,{"data-language":"jsx","data-theme":"default",children:[(0,c.jsxs)(s.span,{className:"line",children:[(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,c.jsxs)(s.span,{className:"line",children:[(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"logo"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"span"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">My Nextra Documentation</"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"span"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,c.jsxs)(s.span,{className:"line",children:[(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"project"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,c.jsxs)(s.span,{className:"line",children:[(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"link"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'https://github.com/simplelife/nextra-template'"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,c.jsxs)(s.span,{className:"line",children:[(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,c.jsx)(s.span,{className:"line",children:(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// ... 其他配置选项"})}),"\n",(0,c.jsx)(s.span,{className:"line",children:(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})})]})}),(0,c.jsx)(s.h3,{id:"启动",children:"启动"}),(0,c.jsxs)(s.p,{children:["现在，您可以将您的第一个 MDX 页面创建为",(0,c.jsx)(s.code,{children:"page/index.mdx"}),"："]}),(0,c.jsx)(s.pre,{"data-language":"mdx","data-theme":"default",filename:"page/index.mdx",hasCopyCode:!0,children:(0,c.jsxs)(s.code,{"data-language":"mdx","data-theme":"default",children:[(0,c.jsx)(s.span,{className:"line",children:(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"# Welcome to SimpleLife"})}),"\n",(0,c.jsx)(s.span,{className:"line",children:" "}),"\n",(0,c.jsx)(s.span,{className:"line",children:(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Hello, world!"})})]})}),(0,c.jsxs)(s.p,{children:["在",(0,c.jsx)(s.code,{children:"package.json"}),"配置启动命令，使用",(0,c.jsx)(s.code,{children:"npm run dev"}),"运行你的项目"]}),(0,c.jsx)(s.pre,{"data-language":"json","data-theme":"default",hasCopyCode:!0,children:(0,c.jsxs)(s.code,{"data-language":"json","data-theme":"default",children:[(0,c.jsxs)(s.span,{className:"line",children:[(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"scripts"'}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:": {"})]}),"\n",(0,c.jsxs)(s.span,{className:"line",children:[(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"dev"'}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"next dev"'}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,c.jsx)(s.span,{className:"line",children:(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"},"})})]})})]}),"\n",(0,c.jsx)(s.h2,{id:"用法",children:"用法"}),"\n",(0,c.jsxs)(o.Rg,{children:[(0,c.jsx)(s.h3,{id:"step-1",children:"Step 1"}),(0,c.jsx)(s.p,{children:"步骤 1 的内容。"}),(0,c.jsx)(s.h3,{id:"step-2",children:"Step 2"}),(0,c.jsx)(s.p,{children:"步骤 2 的内容。"})]}),"\n",(0,c.jsx)(s.pre,{"data-language":"js","data-theme":"default",hasCopyCode:!0,children:(0,c.jsxs)(s.code,{"data-language":"js","data-theme":"default",children:[(0,c.jsxs)(s.span,{className:"line",children:[(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { Steps } "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'nextra/components'"})]}),"\n",(0,c.jsx)(s.span,{className:"line",children:(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "})}),"\n",(0,c.jsxs)(s.span,{className:"line",children:[(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Steps"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,c.jsx)(s.span,{className:"line",children:(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"### Step 1"})}),"\n",(0,c.jsx)(s.span,{className:"line",children:(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"步骤 1 的内容。"})}),"\n",(0,c.jsx)(s.span,{className:"line",children:(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "})}),"\n",(0,c.jsx)(s.span,{className:"line",children:(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"### Step 2"})}),"\n",(0,c.jsx)(s.span,{className:"line",children:(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"步骤 2 的内容。"})}),"\n",(0,c.jsxs)(s.span,{className:"line",children:[(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"</"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Steps"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]})]})})]})}let h={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.a)(),e.components);return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"src/pages/build-ins/steps.mdx",route:"/build-ins/steps",pageMap:[{kind:"Meta",data:{"*":{theme:{breadcrumb:!1}},index:{title:"介绍"},theme:{title:"文档主题",theme:{breadcrumb:!0}},"build-ins":{title:"内置组件",theme:{breadcrumb:!0}},deploy:"部署","zero-configuration":"快速上手","message-board":{title:"留言板",type:"page",theme:{sidebar:!1,layout:"full"}}}},{kind:"Folder",name:"build-ins",route:"/build-ins",children:[{kind:"Meta",data:{callout:"标注",tabs:"选项卡",cards:"卡片",steps:"步骤",fileTree:"文件树",bleed:"溢出",image:"图片"}},{kind:"MdxPage",name:"bleed",route:"/build-ins/bleed"},{kind:"MdxPage",name:"callout",route:"/build-ins/callout"},{kind:"MdxPage",name:"cards",route:"/build-ins/cards"},{kind:"MdxPage",name:"fileTree",route:"/build-ins/fileTree"},{kind:"MdxPage",name:"image",route:"/build-ins/image"},{kind:"MdxPage",name:"steps",route:"/build-ins/steps"},{kind:"MdxPage",name:"tabs",route:"/build-ins/tabs"}]},{kind:"MdxPage",name:"deploy",route:"/deploy"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"message-board",route:"/message-board"},{kind:"Folder",name:"theme",route:"/theme",children:[{kind:"Meta",data:{started:"开始使用",page:{title:"页面配置"},configuration:"主题配置"}},{kind:"MdxPage",name:"configuration",route:"/theme/configuration"},{kind:"MdxPage",name:"page",route:"/theme/page"},{kind:"MdxPage",name:"started",route:"/theme/started"}]},{kind:"MdxPage",name:"zero-configuration",route:"/zero-configuration"}],flexsearch:{codeblocks:!0},title:"Steps 组件",headings:a},pageNextRoute:"/build-ins/steps",nextraLayout:l.ZP,themeConfig:t.Z};s.default=(0,r.j)(h)},1182:function(e,s,n){"use strict";n.d(s,{Z:function(){return a}});var c=n(1527),r=n(5726),l=n.n(r),t=n(1436),i=n.n(t),o=n(8012),a={logo:function(){return(0,c.jsxs)("span",{className:i().logo,children:[(0,c.jsx)("svg",{height:"20",viewBox:"0 0 85 70",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{d:"m64.8833 1.81335-2.8464 2.84638C47.1274 19.5692 22.9543 19.5692 8.04485 4.65972L5.19848 1.81335c-.93479-.93478-2.45037-.93478-3.38515 0-.93479.93478-.93478 2.45037 0 3.38515L4.6597 8.04487c14.9095 14.90953 14.9095 39.08263 0 53.99213l-2.84637 2.8463c-.93479.9348-.93479 2.4504 0 3.3852.93478.9348 2.45037.9348 3.38515 0l2.84637-2.8464c14.90955-14.9095 39.08255-14.9095 53.99205 0l2.8464 2.8464c.9348.9348 2.4504.9348 3.3852 0 .9347-.9348.9347-2.4504 0-3.3852l-2.8464-2.8463c-14.9095-14.9095-14.9095-39.0826 0-53.99213l2.8464-2.84637c.9347-.93478.9347-2.45037 0-3.38515-.9348-.93478-2.4504-.93478-3.3852 0Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"2"})}),(0,c.jsx)("svg",{width:"150",height:"35",viewBox:"150 -27 200 120",children:(0,c.jsx)("path",{fill:"currentColor",d:"M35.78,42.34c0,6.12 -5.83,10.51 -5.83,10.51c-5.83,4.39 -13.32,4.39 -13.32,4.39c-7.49,0 -12.06,-3.71 -12.06,-3.71c-4.57,-3.71 -4.57,-7.67 -4.57,-7.67c0,-3.96 2.23,-3.96 2.23,-3.96c1.73,0 3.6,1.73 3.6,1.73c1.87,1.73 4.21,3.46 4.21,3.46c2.34,1.73 5.3,1.73 5.3,1.73c2.95,0 6.69,-2.45 6.69,-2.45c3.75,-2.45 3.75,-4.11 3.75,-4.11c0,-1.65 -4.07,-5.54 -4.07,-5.54c-4.07,-3.89 -8.14,-8.03 -8.14,-8.03c-4.07,-4.14 -4.07,-6.41 -4.07,-6.41c0,-2.26 0.83,-4.93 0.83,-4.93c0.83,-2.66 2.05,-3.67 2.05,-3.67c3.89,-3.82 10.05,-6.59 10.05,-6.59c6.15,-2.77 10.83,-2.77 10.83,-2.77c2.74,0 4.54,2.34 4.54,2.34c1.8,2.34 1.8,4.86 1.8,4.86c0,1.01 -1.62,1.62 -1.62,1.62c-1.62,0.61 -4.68,1.26 -4.68,1.26c-3.06,0.65 -6.23,1.87 -6.23,1.87c-7.34,2.74 -7.34,4.61 -7.34,4.61c0,0.86 2.52,3.13 2.52,3.13c2.52,2.27 5.51,4.75 5.51,4.75c2.98,2.49 5.5,6.27 5.5,6.27c2.52,3.78 2.52,7.31 2.52,7.31zM48.46,11.16v-0.94c0,-0.93 1.69,-2.91 1.69,-2.91c1.69,-1.98 3.31,-1.98 3.31,-1.98c1.62,0 3.85,3.89 3.85,3.89c2.23,3.88 2.23,5.65 2.23,5.65c0,1.76 -1.15,2.7 -1.15,2.7c-1.15,0.93 -2.37,0.93 -2.37,0.93c-2.09,0 -4.83,-2.73 -4.83,-2.73c-2.73,-2.74 -2.73,-4.61 -2.73,-4.61zM49.54,20.16c2.52,0 4.5,2.88 4.5,2.88c1.98,2.88 1.98,5.54 1.98,5.54c0,1.37 -2.49,9.83 -2.49,9.83c-2.48,8.46 -4.93,16.02 -4.93,16.02c-0.86,2.81 -3.53,2.81 -3.53,2.81c-1.58,0 -2.77,-1.19 -2.77,-1.19c-1.19,-1.19 -1.19,-3.09 -1.19,-3.09c0,-1.91 1.84,-9.51 1.84,-9.51c1.83,-7.59 2.81,-12.96 2.81,-12.96c0.97,-5.36 1.8,-7.85 1.8,-7.85c0.82,-2.48 1.98,-2.48 1.98,-2.48zM108.58,20.16c2.8,0 4.68,3.74 4.68,3.74c1.87,3.75 1.87,6.84 1.87,6.84c0,3.1 -1.19,9.18 -1.19,9.18c-1.19,6.09 -3.74,11.74 -3.74,11.74c-2.56,5.65 -5.51,5.65 -5.51,5.65c-2.38,0 -2.38,-3.24 -2.38,-3.24c0,-3.24 1.87,-10.58 1.87,-10.58c1.88,-7.35 1.88,-9.65 1.88,-9.65c0,-2.3 -0.72,-2.3 -0.72,-2.3c-1.52,0 -3.6,3.31 -3.6,3.31c-2.09,3.31 -5.01,8.85 -5.01,8.85c-2.91,5.55 -3.63,7.13 -3.63,7.13c-0.72,1.59 -1.19,2.52 -1.19,2.52c-0.47,0.94 -1.05,1.95 -1.05,1.95c-2.3,3.81 -6.12,0 -6.12,0c-1.94,-1.95 -1.94,-3.53 -1.94,-3.53c0,-0.29 1.19,-5.51 1.19,-5.51c1.19,-5.22 1.19,-11.92 1.19,-11.92c0,-2.8 -0.65,-2.8 -0.65,-2.8c-0.87,0 -2.02,1.72 -2.02,1.72c-1.15,1.73 -3.53,6.27 -3.53,6.27c-2.37,4.53 -4.1,7.49 -4.1,7.49c-6.05,10.29 -9.22,10.29 -9.22,10.29c-1.58,0 -3.92,-2.66 -3.92,-2.66c-2.34,-2.67 -2.34,-4.07 -2.34,-4.07c0,-1.4 1.62,-6.77 1.62,-6.77c1.62,-5.36 2.09,-11.41 2.09,-11.41c0.47,-6.05 0.86,-9.43 0.86,-9.43c0.4,-3.39 1.69,-3.39 1.69,-3.39c2.74,0 5.3,2.27 5.3,2.27c2.55,2.27 2.55,4.14 2.55,4.14c0,4.25 -3.09,14.83 -3.09,14.83c5.04,-12.02 8.49,-16.27 8.49,-16.27c3.67,-4.39 7.06,-4.39 7.06,-4.39c1.87,0 4.64,3.46 4.64,3.46c2.77,3.45 2.77,6.44 2.77,6.44c0,2.99 -0.07,5.22 -0.07,5.22c2.23,-5.62 6.77,-10.37 6.77,-10.37c4.54,-4.75 8.5,-4.75 8.5,-4.75zM145.22,20.23c2.67,0 5.73,4.75 5.73,4.75c3.06,4.76 3.06,9.51 3.06,9.51c0,2.88 -2.45,6.84 -2.45,6.84c-2.45,3.96 -6.16,7.45 -6.16,7.45c-3.7,3.49 -8.56,5.94 -8.56,5.94c-4.86,2.45 -9.26,2.45 -9.26,2.45h-0.86c-4.54,18.86 -6.41,18.86 -6.41,18.86c-1.51,0 -3.2,-2.52 -3.2,-2.52c-1.69,-2.52 -1.69,-4.17 -1.69,-4.17c0,-1.66 2.08,-10.16 2.08,-10.16c6.2,-25.2 6.2,-38.01 6.2,-38.01c0,-2.16 2.08,-2.16 2.08,-2.16c1.73,0 4.4,1.94 4.4,1.94c2.66,1.95 3.31,5.04 3.31,5.04c6.12,-5.76 11.73,-5.76 11.73,-5.76zM139.57,42.41c5.01,-5.11 5.01,-8.86 5.01,-8.86c0,-3.74 -2.09,-3.74 -2.09,-3.74c-3.03,0 -6.41,3.45 -6.41,3.45c-1.37,1.44 -3.02,4.25 -3.02,4.25c-1.66,2.81 -2.88,6.55 -2.88,6.55l-1.23,4.54c5.62,-1.08 10.62,-6.19 10.62,-6.19zM167.98,0c1.72,0 4.46,3.17 4.46,3.17c2.74,3.17 2.74,6.05 2.74,6.05c0,2.88 -0.87,10.26 -0.87,10.26c-0.86,7.38 -1.8,11.77 -1.8,11.77c-5.97,26.06 -8.35,26.06 -8.35,26.06c-1.58,0 -3.92,-2.55 -3.92,-2.55c-2.34,-2.56 -2.34,-4.22 -2.34,-4.22c0,-0.14 1.94,-7.48 1.94,-7.48c1.94,-7.35 3.92,-18.9 3.92,-18.9c1.98,-11.56 1.98,-22.07 1.98,-22.07c0,-2.09 2.24,-2.09 2.24,-2.09zM209.23,33.62c0,3.53 -4.79,6.34 -4.79,6.34c-4.78,2.81 -9.82,2.81 -9.82,2.81c-5.04,0 -8.28,-0.72 -8.28,-0.72c-0.65,1.94 -0.65,3.89 -0.65,3.89c0,1.94 0.65,2.77 0.65,2.77c0.64,0.83 3.24,0.83 3.24,0.83c5.4,0 9.25,-1.01 9.25,-1.01c3.85,-1.01 3.99,-1.01 3.99,-1.01c2.96,0 2.96,1.94 2.96,1.94c0,2.81 -4.65,5.33 -4.65,5.33c-4.64,2.52 -10.73,2.52 -10.73,2.52c-6.08,0 -9.75,-3.81 -9.75,-3.81c-3.67,-3.82 -3.67,-9.04 -3.67,-9.04c0,-5.22 3.06,-10.91 3.06,-10.91c3.06,-5.69 7.66,-9.54 7.66,-9.54c4.61,-3.85 9.18,-3.85 9.18,-3.85c4.58,0 8.46,4.5 8.46,4.5c3.89,4.5 3.89,8.96 3.89,8.96zM199.37,30.38c-1.51,-1.36 -2.85,-1.36 -2.85,-1.36c-1.33,0 -3.42,1.9 -3.42,1.9c-2.08,1.91 -3.96,4.94 -3.96,4.94c0.65,0.07 1.88,0.07 1.88,0.07c9.86,0 9.86,-3.46 9.86,-3.46c0,-0.72 -1.51,-2.09 -1.51,-2.09zM218.23,4.39c5.62,0 12.28,2.31 12.28,2.31c6.66,2.3 12.38,6.04 12.38,6.04c5.73,3.75 9.58,9 9.58,9c3.85,5.26 3.85,10.66 3.85,10.66c0,4.03 -6.52,10.04 -6.52,10.04c-6.51,6.02 -15.08,10.41 -15.08,10.41c-8.57,4.39 -14.04,4.39 -14.04,4.39c-1.22,0 -3.92,-3.2 -3.92,-3.2c-2.7,-3.21 -2.7,-4.72 -2.7,-4.72c0,-2.95 3.92,-16.45 3.92,-16.45c3.92,-13.5 4.86,-18.54 4.86,-18.54c-2.59,-1.73 -4.32,-4.14 -4.32,-4.14c-1.73,-2.41 -1.73,-4.11 -1.73,-4.11c0,-1.69 1.44,-1.69 1.44,-1.69zM241.7,24.3c-4.24,-3.78 -9.86,-6.3 -9.86,-6.3c-0.43,5.4 -6.12,23.11 -6.12,23.11c-0.29,0.94 -0.9,3.06 -0.9,3.06c-0.61,2.13 -0.9,2.85 -0.9,2.85c7.06,-2.38 14.54,-8.03 14.54,-8.03c7.49,-5.65 7.49,-8.61 7.49,-8.61c0,-2.3 -4.25,-6.08 -4.25,-6.08zM276.98,42.98c2.88,-5.25 2.88,-9.86 2.88,-9.86c0,-4.61 -1.29,-6.34 -1.29,-6.34c-3.1,1.8 -6.16,7.56 -6.16,7.56c-3.06,5.76 -3.06,10.12 -3.06,10.12c0,4.36 0.87,5.51 0.87,5.51c3.88,-1.73 6.76,-6.99 6.76,-6.99zM259.7,45.22c0,-9 5.58,-17.07 5.58,-17.07c5.58,-8.06 11.06,-8.06 11.06,-8.06c5.47,0 9.21,3.85 9.21,3.85c3.75,3.85 3.75,9.29 3.75,9.29c0,5.43 -2.6,11.05 -2.6,11.05c-2.59,5.62 -7.27,9.32 -7.27,9.32c-4.68,3.71 -10.01,3.71 -10.01,3.71c-3.96,0 -6.84,-3.53 -6.84,-3.53c-2.88,-3.52 -2.88,-8.56 -2.88,-8.56zM292.9,46.01c0,-5.04 3.16,-11.09 3.16,-11.09c3.17,-6.05 8.32,-10.37 8.32,-10.37c5.15,-4.32 10.12,-4.32 10.12,-4.32c2.52,0 5.18,3.28 5.18,3.28c2.66,3.27 2.66,5.87 2.66,5.87c0,1.87 -1.72,1.87 -1.72,1.87c-0.87,0 -2.38,-0.79 -2.38,-0.79c-1.51,-0.8 -3.1,-0.8 -3.1,-0.8c-1.58,0 -4.5,2.7 -4.5,2.7c-2.91,2.7 -5.18,6.48 -5.18,6.48c-2.27,3.78 -2.27,5.94 -2.27,5.94c0,2.16 0.83,2.81 0.83,2.81c0.83,0.65 4.03,0.65 4.03,0.65c3.21,0 5.83,-0.58 5.83,-0.58c2.63,-0.57 3.89,-1.18 3.89,-1.18c1.26,-0.62 2.27,-0.62 2.27,-0.62c2.02,0 2.02,1.73 2.02,1.73c0,3.17 -5.55,6.45 -5.55,6.45c-5.54,3.27 -11.09,3.27 -11.09,3.27c-3.52,0 -8.02,-3.92 -8.02,-3.92c-4.5,-3.93 -4.5,-7.38 -4.5,-7.38zM351.07,20.23c2.74,0 5.4,3.24 5.4,3.24c2.67,3.24 2.67,5.83 2.67,5.83c0,1.73 -1.52,1.73 -1.52,1.73c-0.86,0 -2.52,-0.68 -2.52,-0.68c-1.65,-0.69 -3.34,-0.69 -3.34,-0.69c-1.7,0 -4.97,1.16 -4.97,1.16c-3.28,1.15 -3.28,3.02 -3.28,3.02c0,0.72 1.95,2.09 1.95,2.09c1.94,1.37 4.24,2.81 4.24,2.81c2.31,1.44 4.25,3.99 4.25,3.99c1.95,2.56 1.95,5.55 1.95,5.55c0,2.98 -4.36,6.01 -4.36,6.01c-4.36,3.02 -10.22,3.02 -10.22,3.02c-5.87,0 -10.05,-2.66 -10.05,-2.66c-4.17,-2.67 -4.17,-5.47 -4.17,-5.47c0,-2.81 2.3,-2.81 2.3,-2.81c0.94,0 2.23,0.72 2.23,0.72c3.6,2.09 8.97,2.09 8.97,2.09c5.36,0 5.36,-1.44 5.36,-1.44c0,-1.44 -2.05,-3.21 -2.05,-3.21c-2.05,-1.76 -4.47,-3.27 -4.47,-3.27c-2.41,-1.52 -4.46,-3.71 -4.46,-3.71c-2.05,-2.2 -2.05,-4.29 -2.05,-4.29c0,-3.88 7.05,-8.46 7.05,-8.46c7.06,-4.57 11.09,-4.57 11.09,-4.57z"})})]})},head:(0,c.jsx)(function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,c.jsx)("meta",{property:"og:title",content:"SimpleLife"}),(0,c.jsx)("meta",{property:"og:description",content:"打造极简的文档主题"})]})},{}),project:{link:"https://github.com/".concat(o.username,"/").concat(o.repository)},sidebar:{toggleButton:!0},search:{emptyResult:(0,c.jsx)("span",{className:"empty-result",children:"找不到结果"}),loading:"加载中",error:"搜索错误",placeholder:"搜索"},toc:{title:"目录",backToTop:!0,float:!0},editLink:{text:"在 GitHub 上编辑此页面 →"},feedback:{content:"问题？给我反馈 →"},navigation:!0,footer:{text:(0,c.jsxs)("div",{className:"sl-footer",children:[(0,c.jsx)("span",{children:"一个简单的人，做一件简单的事\uD83D\uDE00"}),(0,c.jsx)("br",{}),(0,c.jsxs)("span",{children:["Copyright ",new Date().getFullYear()," \xa9 SimpleLife."]})]})},docsRepositoryBase:"https://github.com/".concat(o.username,"/").concat(o.repository,"/tree/main/"),useNextSeoProps:()=>({titleTemplate:"%s – SimpleLife"}),themeSwitch:{useOptions:()=>({light:"白天",dark:"黑夜",system:"系统"})},gitTimestamp:function(e){let{timestamp:s}=e;return"最后更新于 "+l()(s).format("YYYY年M月D日")}}},1436:function(e){e.exports={logo:"Logo_logo__xwnlu"}}},function(e){e.O(0,[539,774,888,179],function(){return e(e.s=6795)}),_N_E=e.O()}]);