(this.webpackJsonpcontest_1=this.webpackJsonpcontest_1||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(8),a=c.n(s),l=(c(14),c(2)),i=c(3),o=c(5),u=c(4),d=(c(7),c(9)),j=c.n(d),h=c(0),b=function(e){Object(o.a)(c,e);var t=Object(u.a)(c);function c(e){var n;return Object(l.a)(this,c),(n=t.call(this,e)).state={colorList:[{color:0,className:"circle red"},{color:1,className:"circle green"},{color:2,className:"circle blue"},{color:3,className:"circle gray"}]},n}return Object(i.a)(c,[{key:"render",value:function(){var e=this.props,t=e.currentColor,c=e.changeCurrentColor,n=this.state.colorList.map((function(e,n){return Object(h.jsx)("div",{className:"col-xs-1 col-sm-1 col-md-1 col-lg-1",children:Object(h.jsx)("span",{className:j()(e.className,{isActive:t===e.color}),onClick:function(){c(e.color)}})},n)}));return Object(h.jsx)("div",{className:"ColorPicker",children:Object(h.jsxs)("div",{className:"panel panel-success",children:[Object(h.jsx)("div",{className:"panel-heading",children:Object(h.jsx)("h3",{className:"panel-title",children:"Color Picker"})}),Object(h.jsx)("div",{className:"panel-body",children:n})]})})}}]),c}(n.Component),m=(c(16),function(e){Object(o.a)(c,e);var t=Object(u.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){var e=this.props,t=e.currentSize,c=e.changeCurrentSize,n=[{name:"Down",value:-2},{name:"Up",value:2}].map((function(e,t){return Object(h.jsx)("button",{type:"button",className:"btn btn-danger mg-right",onClick:function(){c(e.value)},children:e.name},t)}));return Object(h.jsx)("div",{className:"SizeSetting",children:Object(h.jsxs)("div",{className:"panel panel-default",children:[Object(h.jsx)("div",{className:"panel-heading",children:Object(h.jsxs)("h3",{className:"panel-title",children:["Size: ",t,"px"]})}),Object(h.jsx)("div",{className:"panel-body",children:n})]})})}}]),c}(n.Component)),p=function(e){Object(o.a)(c,e);var t=Object(u.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){var e=this.props,t=e.currentSize,c=e.currentColor;return Object(h.jsx)("div",{className:"Result",children:Object(h.jsxs)("div",{className:"panel panel-default",children:[Object(h.jsx)("div",{className:"panel-heading",children:Object(h.jsxs)("h3",{className:"panel-title",children:["Font size: ",t,"px - Color:"," ",0===c?"red":1===c?"green":2===c?"blue":"gray"]})}),Object(h.jsx)("div",{className:"panel-body df",style:{fontSize:t+"px",color:0===c?"red":1===c?"green":2===c?"blue":"gray"},children:"This HTML file is a template.If you open it directly in the browser, you will see an empty page. You can add webfonts, meta tags, or analytics to this file. The build step will place the bundled scripts into the tag. To begin the development, run `npm start` or `yarn start`. To create a production bundle, use `npm run build` or `yarn build`."})]})})}}]),c}(n.Component),O=function(e){Object(o.a)(c,e);var t=Object(u.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){var e=this.props.changeReset;return Object(h.jsx)("div",{className:"Reset",children:Object(h.jsx)("button",{type:"button",className:"btn btn-primary mg-bt",onClick:function(){e()},children:"RESET"})})}}]),c}(n.Component),v=function(e){Object(o.a)(c,e);var t=Object(u.a)(c);function c(e){var n;return Object(l.a)(this,c),(n=t.call(this,e)).changeCurrentColor=function(e){n.setState({currentColor:e})},n.changeCurrentSize=function(e){8===n.state.currentSize&&-2===e||n.setState({currentSize:n.state.currentSize+e})},n.changeReset=function(){n.setState({currentColor:0,currentSize:12})},n.state={currentColor:0,currentSize:12},n}return Object(i.a)(c,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:[Object(h.jsx)("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6",children:Object(h.jsx)(b,{currentColor:this.state.currentColor,changeCurrentColor:this.changeCurrentColor})}),Object(h.jsxs)("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6",children:[Object(h.jsx)(m,{currentSize:this.state.currentSize,changeCurrentSize:this.changeCurrentSize}),Object(h.jsx)(O,{changeReset:this.changeReset})]})]})}),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:Object(h.jsx)(p,{currentColor:this.state.currentColor,currentSize:this.state.currentSize})})})]})})}}]),c}(n.Component),x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};a.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),x()},7:function(e,t,c){}},[[17,1,2]]]);
//# sourceMappingURL=main.2f3bfe44.chunk.js.map