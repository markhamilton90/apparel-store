(this["webpackJsonpapparel-store"]=this["webpackJsonpapparel-store"]||[]).push([[0],{15:function(t,e,r){},17:function(t,e,r){"use strict";r.r(e);var n=r(1),a=r.n(n),s=r(7),i=r(9),c=r(8),o=r(2),l=r(3),h=r(5),p=r(4),u=r(0),j=function(t){Object(h.a)(r,t);var e=Object(p.a)(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"searchbar",children:Object(u.jsx)("input",{type:"text",placeholder:"Enter a search term...",onChange:this.props.onChange})})}}]),r}(a.a.Component),b=j,d=function(t){Object(h.a)(r,t);var e=Object(p.a)(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){var t=this,e=(this.props.filters,this.props.activeFilters);return Object(u.jsx)("div",{className:"sidebar",children:Object.keys(this.props.filters).map((function(r){return Object(u.jsx)("div",{className:"filter ".concat(e.includes(r)?"selected":""),onClick:function(){return t.props.handleClick(r)},children:t.props.filters[r].label},r)}))})}}]),r}(a.a.Component),O=d;var v=function(t){Object(h.a)(r,t);var e=Object(p.a)(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){var t,e=this,r=this.props.item;return Object(u.jsxs)("div",{className:"inventory",children:[Object(u.jsx)("h3",{children:r.title}),Object(u.jsx)("p",{children:(t=r.price,(t/100).toLocaleString("en-US",{style:"currency",currency:"USD"}))}),Object(u.jsx)("button",{onClick:function(){return e.props.addToCart(e.props.itemKey,e.props.item)},children:"Add to Cart"})]})}}]),r}(a.a.Component),y=v,f=function(t){Object(h.a)(r,t);var e=Object(p.a)(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){var t=this,e=this.props.activeFilters,r=this.props.inventory,n=this.props.query.trim().toLowerCase(),a=Object.keys(r);return e.length&&(a=a.filter((function(t){return e.includes(r[t].type)}))),0!=n&&(a=a.filter((function(t){return r[t].title.trim().toLowerCase().includes(n)||r[t].type.trim().toLowerCase().includes(n)}))),Object(u.jsx)("div",{className:"results",children:a.map((function(e){return Object(u.jsx)(y,{itemKey:e,item:r[e],addToCart:t.props.addToCart},e)}))})}}]),r}(a.a.Component),m=f,C=function(t){Object(h.a)(r,t);var e=Object(p.a)(r);function r(){var t;Object(o.a)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={showCart:!1},t.toggleCart=function(){t.setState({showCart:!t.state.showCart})},t}return Object(l.a)(r,[{key:"render",value:function(){var t=this,e=this.props.inCart;return Object(u.jsxs)("div",{className:"cart",children:[Object(u.jsx)("h2",{children:"Cart"}),Object(u.jsx)("ul",{className:"cart-items ".concat(this.state.showCart?"visible":""),children:Object.keys(e).map((function(r){return Object(u.jsxs)("li",{children:[e[r].title," ",e[r].count>1?"x".concat(e[r].count):""]},t.props.itemKey)}))})]})}}]),r}(a.a.Component),x=C,k={item1:{title:"T-shirt",price:1299,type:"shirts"},item2:{title:"Jeans",price:1599,type:"pants"},item3:{title:"Sneakers",price:799,type:"shoes"},item4:{title:"Fedora",price:399,type:"hats"},item5:{title:"Dress shoes",price:1199,type:"shoes"},item6:{title:"Dad hat",price:399,type:"hats"}},g={shirts:{label:"Shirts",name:"shirts"},pants:{label:"Pants",name:"pants"},shoes:{label:"Shoes",name:"shoes"},hats:{label:"Hats",name:"pants"}},w=function(t){Object(h.a)(r,t);var e=Object(p.a)(r);function r(){var t;Object(o.a)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={inventory:k,filters:g,activeFilters:[],query:"",inCart:{}},t.onChange=function(e){t.setState({query:e.currentTarget.value})},t.handleClick=function(e){var r=Object(c.a)(t.state.activeFilters);r.includes(e)?r.splice(r.indexOf(e),1):r.push(e),t.setState({activeFilters:r})},t.addToCart=function(e,r){var n=Object(i.a)({},t.state.inCart);n.hasOwnProperty(e)?n[e].count+=1:(n[e]=r,n[e].count=1),t.setState({inCart:n})},t}return Object(l.a)(r,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"store",children:[Object(u.jsx)(b,{onChange:this.onChange}),Object(u.jsx)(O,{filters:this.state.filters,handleClick:this.handleClick,activeFilters:this.state.activeFilters}),Object(u.jsx)(m,{inventory:this.state.inventory,activeFilters:this.state.activeFilters,query:this.state.query,addToCart:this.addToCart}),Object(u.jsx)(x,{inCart:this.state.inCart})]})}}]),r}(a.a.Component),F=w;r(15),r(16);Object(s.render)(Object(u.jsx)(F,{}),document.getElementById("main"))}},[[17,1,2]]]);
//# sourceMappingURL=main.001c707f.chunk.js.map