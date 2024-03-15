import{d as I,h as Z,an as $e,X as Se,F as B,O as Be,_ as Te,s as p,f as b,a6 as Pe,ao as ee,R as ke,e as y,a8 as l,aa as A,ap as Re,g as oe,S as _e,i as He,l as R,j as Ie,aq as Ee,ar as Oe,aj as r,as as _,p as je,at as U,au as Fe,av as De,aw as Ne,ax as Ke,ae as Me}from"./index-25faecfe.js";import{i as Ge,a as Ve,u as We}from"./browser-24b16e0b.js";function J(e){return e.replace(/#|\(|\)|,|\s|\./g,"_")}const qe=I("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),Qe=Z({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){$e("-base-wave",qe,Se(e,"clsPrefix"));const f=B(null),h=B(!1);let d=null;return Be(()=>{d!==null&&window.clearTimeout(d)}),{active:h,selfRef:f,play(){d!==null&&(window.clearTimeout(d),h.value=!1,d=null),Te(()=>{var v;(v=f.value)===null||v===void 0||v.offsetHeight,h.value=!0,d=window.setTimeout(()=>{h.value=!1,d=null},1e3)})}}},render(){const{clsPrefix:e}=this;return p("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),{cubicBezierEaseInOut:C}=Pe;function Xe({duration:e=".2s",delay:f=".1s"}={}){return[b("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),b("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),b("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${C},
 max-width ${e} ${C} ${f},
 margin-left ${e} ${C} ${f},
 margin-right ${e} ${C} ${f};
 `),b("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${C} ${f},
 max-width ${e} ${C},
 margin-left ${e} ${C},
 margin-right ${e} ${C};
 `)]}function $(e){return ee(e,[255,255,255,.16])}function H(e){return ee(e,[0,0,0,.12])}const Le=ke("n-button-group"),Ye=b([I("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[y("color",[l("border",{borderColor:"var(--n-border-color)"}),y("disabled",[l("border",{borderColor:"var(--n-border-color-disabled)"})]),A("disabled",[b("&:focus",[l("state-border",{borderColor:"var(--n-border-color-focus)"})]),b("&:hover",[l("state-border",{borderColor:"var(--n-border-color-hover)"})]),b("&:active",[l("state-border",{borderColor:"var(--n-border-color-pressed)"})]),y("pressed",[l("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),y("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[l("border",{border:"var(--n-border-disabled)"})]),A("disabled",[b("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[l("state-border",{border:"var(--n-border-focus)"})]),b("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[l("state-border",{border:"var(--n-border-hover)"})]),b("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[l("state-border",{border:"var(--n-border-pressed)"})]),y("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[l("state-border",{border:"var(--n-border-pressed)"})])]),y("loading","cursor: wait;"),I("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[y("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),Ge&&"MozBoxSizing"in document.createElement("div").style?b("&::moz-focus-inner",{border:0}):null,l("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),l("border",{border:"var(--n-border)"}),l("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),l("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[I("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[Re({top:"50%",originalTransform:"translateY(-50%)"})]),Xe()]),l("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[b("~",[l("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),y("block",`
 display: flex;
 width: 100%;
 `),y("dashed",[l("border, state-border",{borderStyle:"dashed !important"})]),y("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),b("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),b("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),Ae=Object.assign(Object.assign({},oe.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!Ve}}),re=Z({name:"Button",props:Ae,setup(e){const f=B(null),h=B(null),d=B(!1),v=_e(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),te=He(Le,{}),{mergedSizeRef:E}=We({},{defaultSize:"medium",mergedSize:t=>{const{size:c}=e;if(c)return c;const{size:g}=te;if(g)return g;const{mergedSize:o}=t||{};return o?o.value:"medium"}}),O=R(()=>e.focusable&&!e.disabled),ne=t=>{var c;O.value||t.preventDefault(),!e.nativeFocusBehavior&&(t.preventDefault(),!e.disabled&&O.value&&((c=f.value)===null||c===void 0||c.focus({preventScroll:!0})))},ae=t=>{var c;if(!e.disabled&&!e.loading){const{onClick:g}=e;g&&Me(g,t),e.text||(c=h.value)===null||c===void 0||c.play()}},ie=t=>{switch(t.key){case"Enter":if(!e.keyboard)return;d.value=!1}},se=t=>{switch(t.key){case"Enter":if(!e.keyboard||e.loading){t.preventDefault();return}d.value=!0}},le=()=>{d.value=!1},{inlineThemeDisabled:q,mergedClsPrefixRef:j,mergedRtlRef:de}=Ie(e),ce=oe("Button","-button",Ye,Ee,e,j),ue=Oe("Button",de,j),Q=R(()=>{const t=ce.value,{common:{cubicBezierEaseInOut:c,cubicBezierEaseOut:g},self:o}=t,{rippleDuration:F,opacityDisabled:T,fontWeight:D,fontWeightStrong:N}=o,x=E.value,{dashed:K,type:w,ghost:M,text:m,color:a,round:X,circle:G,textColor:z,secondary:be,tertiary:L,quaternary:fe,strong:he}=e,ve={"font-weight":he?N:D};let i={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const P=w==="tertiary",Y=w==="default",n=P?"default":w;if(m){const s=z||a;i={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":s||o[r("textColorText",n)],"--n-text-color-hover":s?$(s):o[r("textColorTextHover",n)],"--n-text-color-pressed":s?H(s):o[r("textColorTextPressed",n)],"--n-text-color-focus":s?$(s):o[r("textColorTextHover",n)],"--n-text-color-disabled":s||o[r("textColorTextDisabled",n)]}}else if(M||K){const s=z||a;i={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":a||o[r("rippleColor",n)],"--n-text-color":s||o[r("textColorGhost",n)],"--n-text-color-hover":s?$(s):o[r("textColorGhostHover",n)],"--n-text-color-pressed":s?H(s):o[r("textColorGhostPressed",n)],"--n-text-color-focus":s?$(s):o[r("textColorGhostHover",n)],"--n-text-color-disabled":s||o[r("textColorGhostDisabled",n)]}}else if(be){const s=Y?o.textColor:P?o.textColorTertiary:o[r("color",n)],u=a||s,k=w!=="default"&&w!=="tertiary";i={"--n-color":k?_(u,{alpha:Number(o.colorOpacitySecondary)}):o.colorSecondary,"--n-color-hover":k?_(u,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-pressed":k?_(u,{alpha:Number(o.colorOpacitySecondaryPressed)}):o.colorSecondaryPressed,"--n-color-focus":k?_(u,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-disabled":o.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":u,"--n-text-color-hover":u,"--n-text-color-pressed":u,"--n-text-color-focus":u,"--n-text-color-disabled":u}}else if(L||fe){const s=Y?o.textColor:P?o.textColorTertiary:o[r("color",n)],u=a||s;L?(i["--n-color"]=o.colorTertiary,i["--n-color-hover"]=o.colorTertiaryHover,i["--n-color-pressed"]=o.colorTertiaryPressed,i["--n-color-focus"]=o.colorSecondaryHover,i["--n-color-disabled"]=o.colorTertiary):(i["--n-color"]=o.colorQuaternary,i["--n-color-hover"]=o.colorQuaternaryHover,i["--n-color-pressed"]=o.colorQuaternaryPressed,i["--n-color-focus"]=o.colorQuaternaryHover,i["--n-color-disabled"]=o.colorQuaternary),i["--n-ripple-color"]="#0000",i["--n-text-color"]=u,i["--n-text-color-hover"]=u,i["--n-text-color-pressed"]=u,i["--n-text-color-focus"]=u,i["--n-text-color-disabled"]=u}else i={"--n-color":a||o[r("color",n)],"--n-color-hover":a?$(a):o[r("colorHover",n)],"--n-color-pressed":a?H(a):o[r("colorPressed",n)],"--n-color-focus":a?$(a):o[r("colorFocus",n)],"--n-color-disabled":a||o[r("colorDisabled",n)],"--n-ripple-color":a||o[r("rippleColor",n)],"--n-text-color":z||(a?o.textColorPrimary:P?o.textColorTertiary:o[r("textColor",n)]),"--n-text-color-hover":z||(a?o.textColorHoverPrimary:o[r("textColorHover",n)]),"--n-text-color-pressed":z||(a?o.textColorPressedPrimary:o[r("textColorPressed",n)]),"--n-text-color-focus":z||(a?o.textColorFocusPrimary:o[r("textColorFocus",n)]),"--n-text-color-disabled":z||(a?o.textColorDisabledPrimary:o[r("textColorDisabled",n)])};let V={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};m?V={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:V={"--n-border":o[r("border",n)],"--n-border-hover":o[r("borderHover",n)],"--n-border-pressed":o[r("borderPressed",n)],"--n-border-focus":o[r("borderFocus",n)],"--n-border-disabled":o[r("borderDisabled",n)]};const{[r("height",x)]:W,[r("fontSize",x)]:pe,[r("padding",x)]:xe,[r("paddingRound",x)]:ye,[r("iconSize",x)]:ge,[r("borderRadius",x)]:me,[r("iconMargin",x)]:Ce,waveOpacity:we}=o,ze={"--n-width":G&&!m?W:"initial","--n-height":m?"initial":W,"--n-font-size":pe,"--n-padding":G||m?"initial":X?ye:xe,"--n-icon-size":ge,"--n-icon-margin":Ce,"--n-border-radius":m?"initial":G||X?W:me};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":c,"--n-bezier-ease-out":g,"--n-ripple-duration":F,"--n-opacity-disabled":T,"--n-wave-opacity":we},ve),i),V),ze)}),S=q?je("button",R(()=>{let t="";const{dashed:c,type:g,ghost:o,text:F,color:T,round:D,circle:N,textColor:x,secondary:K,tertiary:w,quaternary:M,strong:m}=e;c&&(t+="a"),o&&(t+="b"),F&&(t+="c"),D&&(t+="d"),N&&(t+="e"),K&&(t+="f"),w&&(t+="g"),M&&(t+="h"),m&&(t+="i"),T&&(t+="j"+J(T)),x&&(t+="k"+J(x));const{value:a}=E;return t+="l"+a[0],t+="m"+g[0],t}),Q,e):void 0;return{selfElRef:f,waveElRef:h,mergedClsPrefix:j,mergedFocusable:O,mergedSize:E,showBorder:v,enterPressed:d,rtlEnabled:ue,handleMousedown:ne,handleKeydown:se,handleBlur:le,handleKeyup:ie,handleClick:ae,customColorCssVars:R(()=>{const{color:t}=e;if(!t)return null;const c=$(t);return{"--n-border-color":t,"--n-border-color-hover":c,"--n-border-color-pressed":H(t),"--n-border-color-focus":c,"--n-border-color-disabled":t}}),cssVars:q?void 0:Q,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender}},render(){const{mergedClsPrefix:e,tag:f,onRender:h}=this;h==null||h();const d=U(this.$slots.default,v=>v&&p("span",{class:`${e}-button__content`},v));return p(f,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&d,p(Fe,{width:!0},{default:()=>U(this.$slots.icon,v=>(this.loading||this.renderIcon||v)&&p("span",{class:`${e}-button__icon`,style:{margin:De(this.$slots.default)?"0":""}},p(Ne,null,{default:()=>this.loading?p(Ke,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):p("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():v)})))}),this.iconPlacement==="left"&&d,this.text?null:p(Qe,{ref:"waveElRef",clsPrefix:e}),this.showBorder?p("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?p("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),Ze=re,eo=re,oo=(e,f)=>{const h=e.__vccOpts||e;for(const[d,v]of f)h[d]=v;return h};export{eo as X,oo as _,Ze as a};
