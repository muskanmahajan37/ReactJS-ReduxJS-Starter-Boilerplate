(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"336r":function(e,t,a){e.exports={login:"antd-pro-pages-user-login-components-login-index-login",getCaptcha:"antd-pro-pages-user-login-components-login-index-getCaptcha",icon:"antd-pro-pages-user-login-components-login-index-icon",other:"antd-pro-pages-user-login-components-login-index-other",register:"antd-pro-pages-user-login-components-login-index-register",prefixIcon:"antd-pro-pages-user-login-components-login-index-prefixIcon",submit:"antd-pro-pages-user-login-components-login-index-submit"}},"3T1H":function(e,t,a){"use strict";var n=a("tAuX"),r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Pwec");var l=r(a("CtXQ"));a("sRBo");var o=r(a("kaz8"));a("fOrg");var u=r(a("+KLJ")),i=r(a("d6i3")),s=r(a("1l/V")),d=r(a("p0pE")),c=r(a("2Taf")),f=r(a("vZ4D")),p=r(a("l4Ni")),m=r(a("ujKo")),g=r(a("MhPg")),h=a("Y2fQ"),v=n(a("q1tI")),b=r(a("wY1l")),y=a("Hg0r"),C=r(a("U2lG")),E=r(a("d40l")),M=function(e,t,a,n){var r,l=arguments.length,o=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,a,n);else for(var u=e.length-1;u>=0;u--)(r=e[u])&&(o=(l<3?r(o):l>3?r(t,a,o):r(t,a))||o);return l>3&&o&&Object.defineProperty(t,a,o),o},w=C.default.Tab,x=C.default.UserName,P=C.default.Password,T=C.default.Mobile,N=C.default.Captcha,S=C.default.Submit,k=function(e){function t(){var e;return(0,c.default)(this,t),e=(0,p.default)(this,(0,m.default)(t).apply(this,arguments)),e.loginForm=void 0,e.state={type:"account",autoLogin:!0},e.changeAutoLogin=function(t){e.setState({autoLogin:t.target.checked})},e.handleSubmit=function(t,a){var n=e.state.type;if(!t){var r=e.props.dispatch;r({type:"login/login",payload:(0,d.default)({},a,{type:n})})}},e.onTabChange=function(t){e.setState({type:t})},e.onGetCaptcha=function(){return new Promise(function(t,a){e.loginForm&&e.loginForm.validateFields(["mobile"],{},function(){var n=(0,s.default)(i.default.mark(function n(r,l){var o,u;return i.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:if(!r){n.next=4;break}a(r),n.next=15;break;case 4:return o=e.props.dispatch,n.prev=5,n.next=8,o({type:"login/getCaptcha",payload:l.mobile});case 8:u=n.sent,t(!!u),n.next=15;break;case 12:n.prev=12,n.t0=n["catch"](5),a(n.t0);case 15:case"end":return n.stop()}},n,null,[[5,12]])}));return function(e,t){return n.apply(this,arguments)}}())})},e.renderMessage=function(e){return v.default.createElement(u.default,{style:{marginBottom:24},message:e,type:"error",showIcon:!0})},e}return(0,g.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.userLogin,n=t.submitting,r=a.status,u=a.type,i=this.state,s=i.type,d=i.autoLogin;return v.default.createElement("div",{className:E.default.main},v.default.createElement(C.default,{defaultActiveKey:s,onTabChange:this.onTabChange,onSubmit:this.handleSubmit,onCreate:function(t){e.loginForm=t}},v.default.createElement(w,{key:"account",tab:(0,h.formatMessage)({id:"user-login.login.tab-login-credentials"})},"error"===r&&"account"===u&&!n&&this.renderMessage((0,h.formatMessage)({id:"user-login.login.message-invalid-credentials"})),v.default.createElement(x,{name:"userName",placeholder:"".concat((0,h.formatMessage)({id:"user-login.login.userName"}),": admin or user"),rules:[{required:!0,message:(0,h.formatMessage)({id:"user-login.userName.required"})}]}),v.default.createElement(P,{name:"password",placeholder:"".concat((0,h.formatMessage)({id:"user-login.login.password"}),": ant.design"),rules:[{required:!0,message:(0,h.formatMessage)({id:"user-login.password.required"})}],onPressEnter:function(t){t.preventDefault(),e.loginForm&&e.loginForm.validateFields(e.handleSubmit)}})),v.default.createElement(w,{key:"mobile",tab:(0,h.formatMessage)({id:"user-login.login.tab-login-mobile"})},"error"===r&&"mobile"===u&&!n&&this.renderMessage((0,h.formatMessage)({id:"user-login.login.message-invalid-verification-code"})),v.default.createElement(T,{name:"mobile",placeholder:(0,h.formatMessage)({id:"user-login.phone-number.placeholder"}),rules:[{required:!0,message:(0,h.formatMessage)({id:"user-login.phone-number.required"})},{pattern:/^1\d{10}$/,message:(0,h.formatMessage)({id:"user-login.phone-number.wrong-format"})}]}),v.default.createElement(N,{name:"captcha",placeholder:(0,h.formatMessage)({id:"user-login.verification-code.placeholder"}),countDown:120,onGetCaptcha:this.onGetCaptcha,getCaptchaButtonText:(0,h.formatMessage)({id:"user-login.form.get-captcha"}),getCaptchaSecondText:(0,h.formatMessage)({id:"user-login.captcha.second"}),rules:[{required:!0,message:(0,h.formatMessage)({id:"user-login.verification-code.required"})}]})),v.default.createElement("div",null,v.default.createElement(o.default,{checked:d,onChange:this.changeAutoLogin},v.default.createElement(h.FormattedMessage,{id:"user-login.login.remember-me"})),v.default.createElement("a",{style:{float:"right"},href:""},v.default.createElement(h.FormattedMessage,{id:"user-login.login.forgot-password"}))),v.default.createElement(S,{loading:n},v.default.createElement(h.FormattedMessage,{id:"user-login.login.login"})),v.default.createElement("div",{className:E.default.other},v.default.createElement(h.FormattedMessage,{id:"user-login.login.sign-in-with"}),v.default.createElement(l.default,{type:"alipay-circle",className:E.default.icon,theme:"outlined"}),v.default.createElement(l.default,{type:"taobao-circle",className:E.default.icon,theme:"outlined"}),v.default.createElement(l.default,{type:"weibo-circle",className:E.default.icon,theme:"outlined"}),v.default.createElement(b.default,{className:E.default.register,to:"/user/register"},v.default.createElement(h.FormattedMessage,{id:"user-login.login.signup"})))))}}]),t}(v.Component);k=M([(0,y.connect)(function(e){var t=e.login,a=e.loading;return{userLogin:t,submitting:a.effects["login/login"]}})],k);var I=k;t.default=I},D4xa:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Pwec");var r=n(a("CtXQ")),l=n(a("q1tI")),o=n(a("336r")),u={UserName:{props:{size:"large",id:"userName",prefix:l.default.createElement(r.default,{type:"user",className:o.default.prefixIcon}),placeholder:"admin"},rules:[{required:!0,message:"Please enter username!"}]},Password:{props:{size:"large",prefix:l.default.createElement(r.default,{type:"lock",className:o.default.prefixIcon}),type:"password",id:"password",placeholder:"888888"},rules:[{required:!0,message:"Please enter password!"}]},Mobile:{props:{size:"large",prefix:l.default.createElement(r.default,{type:"mobile",className:o.default.prefixIcon}),placeholder:"mobile number"},rules:[{required:!0,message:"Please enter mobile number!"},{pattern:/^1\d{10}$/,message:"Wrong mobile number format!"}]},Captcha:{props:{size:"large",prefix:l.default.createElement(r.default,{type:"mail",className:o.default.prefixIcon}),placeholder:"captcha"},rules:[{required:!0,message:"Please enter Captcha!"}]}};t.default=u},KTBR:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+L6B");var r=n(a("2/Rp")),l=n(a("Y/ft"));a("y8nQ");var o=n(a("Vl3Y")),u=n(a("q1tI")),i=n(a("TSYQ")),s=n(a("336r")),d=o.default.Item,c=function(e){var t=e.className,a=(0,l.default)(e,["className"]),n=(0,i.default)(s.default.submit,t);return u.default.createElement(d,null,u.default.createElement(r.default,Object.assign({size:"large",className:n,type:"primary",htmlType:"submit"},a)))},f=c;t.default=f},U2lG:function(e,t,a){"use strict";var n=a("tAuX"),r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Znn+");var l=r(a("ZTPi"));a("y8nQ");var o=r(a("Vl3Y")),u=r(a("p0pE")),i=r(a("gWZ8")),s=r(a("2Taf")),d=r(a("vZ4D")),c=r(a("l4Ni")),f=r(a("ujKo")),p=r(a("MhPg")),m=n(a("q1tI")),g=r(a("TSYQ")),h=r(a("booR")),v=r(a("ana9")),b=r(a("KTBR")),y=r(a("aGQT")),C=r(a("336r")),E=function(e){function t(e){var a;return(0,s.default)(this,t),a=(0,c.default)(this,(0,f.default)(t).call(this,e)),a.onSwitch=function(e){a.setState({type:e},function(){var t=a.props.onTabChange;t&&t(e)})},a.getContext=function(){var e=a.props.form,t=a.state.tabs,n=void 0===t?[]:t;return{tabUtil:{addTab:function(e){a.setState({tabs:[].concat((0,i.default)(n),[e])})},removeTab:function(e){a.setState({tabs:n.filter(function(t){return t!==e})})}},form:(0,u.default)({},e),updateActive:function(e){var t=a.state,n=t.type,r=void 0===n?"":n,l=t.active,o=void 0===l?{}:l;o[r]?o[r].push(e):o[r]=[e],a.setState({active:o})}}},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.active,r=void 0===n?{}:n,l=t.type,o=void 0===l?"":l,u=a.props,i=u.form,s=u.onSubmit,d=r[o]||[];i&&i.validateFields(d,{force:!0},function(e,t){s&&s(e,t)})},a.state={type:e.defaultActiveKey,tabs:[],active:{}},a}return(0,p.default)(t,e),(0,d.default)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.form,a=e.onCreate;a&&a(t)}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.children,n=this.state,r=n.type,u=n.tabs,i=void 0===u?[]:u,s=[],d=[];return m.default.Children.forEach(a,function(e){e&&("LoginTab"===e.type.typeName?s.push(e):d.push(e))}),m.default.createElement(h.default.Provider,{value:this.getContext()},m.default.createElement("div",{className:(0,g.default)(t,C.default.login)},m.default.createElement(o.default,{onSubmit:this.handleSubmit},i.length?m.default.createElement(m.default.Fragment,null,m.default.createElement(l.default,{animated:!1,className:C.default.tabs,activeKey:r,onChange:this.onSwitch},s),d):a)))}}]),t}(m.Component);E.Tab=y.default,E.Submit=b.default,E.defaultProps={className:"",defaultActiveKey:"",onTabChange:function(){},onSubmit:function(){}},Object.keys(v.default).forEach(function(e){E[e]=v.default[e]});var M=o.default.create()(E);t.default=M},aGQT:function(e,t,a){"use strict";var n=a("tAuX"),r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a("2Taf")),o=r(a("vZ4D")),u=r(a("l4Ni")),i=r(a("ujKo")),s=r(a("MhPg"));a("Znn+");var d=r(a("ZTPi")),c=n(a("q1tI")),f=r(a("booR")),p=d.default.TabPane,m=function(){var e=0;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e+=1,"".concat(t).concat(e)}}(),g=function(e){function t(e){var a;return(0,l.default)(this,t),a=(0,u.default)(this,(0,i.default)(t).call(this,e)),a.uniqueId="",a.uniqueId=m("login-tab-"),a}return(0,s.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.tabUtil;e&&e.addTab(this.uniqueId)}},{key:"render",value:function(){var e=this.props.children;return c.default.createElement(p,Object.assign({},this.props),e)}}]),t}(c.Component),h=function(e){return c.default.createElement(f.default.Consumer,null,function(t){return c.default.createElement(g,Object.assign({tabUtil:t.tabUtil},e))})};h.typeName="LoginTab";var v=h;t.default=v},ana9:function(e,t,a){"use strict";var n=a("tAuX"),r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+L6B");var l=r(a("2/Rp"));a("5NDa");var o=r(a("5rEg"));a("jCWc");var u=r(a("kPKH"));a("14J3");var i=r(a("BMrR")),s=r(a("Y/ft")),d=r(a("2Taf")),c=r(a("vZ4D")),f=r(a("l4Ni")),p=r(a("ujKo")),m=r(a("MhPg"));a("y8nQ");var g=r(a("Vl3Y")),h=n(a("q1tI")),v=r(a("BGR+")),b=r(a("D4xa")),y=r(a("booR")),C=r(a("336r")),E=g.default.Item,M=function(e){function t(e){var a;return(0,d.default)(this,t),a=(0,f.default)(this,(0,p.default)(t).call(this,e)),a.interval=void 0,a.onGetCaptcha=function(){var e=a.props.onGetCaptcha,t=e?e():null;!1!==t&&(t instanceof Promise?t.then(a.runGetCaptchaCountDown):a.runGetCaptchaCountDown())},a.getFormItemOptions=function(e){var t=e.onChange,a=e.defaultValue,n=e.customProps,r=void 0===n?{}:n,l=e.rules,o={rules:l||r.rules};return t&&(o.onChange=t),a&&(o.initialValue=a),o},a.runGetCaptchaCountDown=function(){var e=a.props.countDown,t=e||59;a.setState({count:t}),a.interval=window.setInterval(function(){t-=1,a.setState({count:t}),0===t&&clearInterval(a.interval)},1e3)},a.state={count:0},a}return(0,m.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.updateActive,a=e.name,n=void 0===a?"":a;t&&t(n)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state.count,t=this.props,a=(t.onChange,t.customProps),n=(t.defaultValue,t.rules,t.name),r=t.getCaptchaButtonText,d=t.getCaptchaSecondText,c=(t.updateActive,t.type),f=t.form,p=(t.tabUtil,(0,s.default)(t,["onChange","customProps","defaultValue","rules","name","getCaptchaButtonText","getCaptchaSecondText","updateActive","type","form","tabUtil"]));if(!n)return null;if(!f)return null;var m=f.getFieldDecorator,g=this.getFormItemOptions(this.props),b=p||{};if("Captcha"===c){var y=(0,v.default)(b,["onGetCaptcha","countDown"]);return h.default.createElement(E,null,h.default.createElement(i.default,{gutter:8},h.default.createElement(u.default,{span:16},m(n,g)(h.default.createElement(o.default,Object.assign({},a,y)))),h.default.createElement(u.default,{span:8},h.default.createElement(l.default,{disabled:!!e,className:C.default.getCaptcha,size:"large",onClick:this.onGetCaptcha},e?"".concat(e," ").concat(d):r))))}return h.default.createElement(E,null,m(n,g)(h.default.createElement(o.default,Object.assign({},a,b))))}}]),t}(h.Component);M.defaultProps={getCaptchaButtonText:"captcha",getCaptchaSecondText:"second"};var w={};Object.keys(b.default).forEach(function(e){var t=b.default[e];w[e]=function(a){return h.default.createElement(y.default.Consumer,null,function(n){return h.default.createElement(M,Object.assign({customProps:t.props,rules:t.rules},a,{type:e},n,{updateActive:n.updateActive}))})}});var x=w;t.default=x},booR:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("q1tI"),r=(0,n.createContext)({}),l=r;t.default=l},d40l:function(e,t,a){e.exports={main:"antd-pro-pages-user-login-style-main",icon:"antd-pro-pages-user-login-style-icon",other:"antd-pro-pages-user-login-style-other",register:"antd-pro-pages-user-login-style-register"}}}]);