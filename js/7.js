(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{197:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=h(a(28)),l=h(a(173)),u=h(a(53)),n=h(a(51)),s=h(a(52)),i=h(a(50)),f=h(a(49)),d=h(a(186)),o=a(1),c=h(o),m=h(a(175)),v=a(174),p=h(a(0)),I=h(a(263));function h(e){return e&&e.__esModule?e:{default:e}}var z=function(e,t){return e?c.default.createElement(v.Avatar,{src:e,size:t}):c.default.createElement(v.Avatar,{icon:"user",size:t})},L=function(e){function t(){return(0,n.default)(this,t),(0,i.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,f.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this.props,t=e.children,a=e.size,u=(0,l.default)(e,["children","size"]),n=c.default.Children.map(t,function(e){return(0,o.cloneElement)(e,{size:a})});return c.default.createElement("div",(0,r.default)({className:I.default.avatarList},u),c.default.createElement("ul",null,n))}}]),t}(o.PureComponent);t.default=L,L.Item=function(e){var t,a=e.src,r=e.size,l=e.tips,u=e.onClick,n=(0,m.default)(I.default.avatarListItem,(0,d.default)({},I.default["avatarItem"+(t=r,t?t.substr(0,1).toUpperCase()+t.substr(1):t)],r));return c.default.createElement("li",{className:n,onClick:u},l?c.default.createElement(v.Tooltip,{content:l},z(a,r)):z(a,r))},L.propTypes={size:p.default.oneOf(["small","default","large"])},L.defaultProps={size:"default"}},263:function(e,t,a){e.exports={avatarList:"avatarList1T1W7",avatarListItem:"avatarListItem1T1W7",avatarItemSmall:"avatarItemSmall1T1W7",avatarItemDefault:"avatarItemDefault1T1W7",avatarItemLarge:"avatarItemLarge1T1W7"}}}]);