(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{164:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(n(1)),r=o(n(261)),i=o(n(176));function o(t){return t&&t.__esModule?t:{default:t}}var u=Date.now()+264e5;e.default=function(){return a.default.createElement(i.default,{title:"倒计时",content:"倒计时组件。"},a.default.createElement(r.default,{onEnd:function(){},target:u,className:"my-countdown"}))}},260:function(t,e,n){t.exports={countdown:"countdown1ZQYX"}},261:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=h(n(186)),r=h(n(53)),i=h(n(51)),o=h(n(52)),u=h(n(50)),l=h(n(49)),c=n(1),f=h(c),s=h(n(175)),d=h(n(0)),v=h(n(260));function h(t){return t&&t.__esModule?t:{default:t}}var p=function(t){return t<10?"0"+t:t},m=function(t){function e(t){(0,i.default)(this,e);var n=(0,u.default)(this,(e.__proto__||(0,r.default)(e)).call(this,t)),a=Date.now(),o=n.getValidDate(t.target),l=o-a;return n.state={current:a,target:o,timeleft:l},n.interval=t.interval,n}return(0,l.default)(e,t),(0,o.default)(e,[{key:"getValidDate",value:function(t){try{return"[object Date]"===Object.prototype.toString.call(t)?t.getTime():new Date(t).getTime()}catch(t){throw new Error("invalid target prop",t)}}},{key:"componentDidMount",value:function(){this.tick()}},{key:"componentWillReceiveProps",value:function(t){this.getValidDate(this.props.target)!==this.getValidDate(t.target)&&(this.clear(),this.tick())}},{key:"componentWillUnmount",value:function(){this.clear()}},{key:"tick",value:function(){var t=this;this.timer=setInterval(function(){t.count()},this.interval)}},{key:"clear",value:function(){this.timer&&clearInterval(this.timer)}},{key:"count",value:function(){var t=this.props.onEnd,e=this.state.timeleft;e>this.interval?this.setState({timeleft:e-this.interval}):(this.setState({timeleft:0},this.clear),t&&t())}},{key:"format",value:function(t){var e=p(Math.floor(t/36e5)),n=p(Math.floor((t-36e5*e)/6e4));return e+":"+n+":"+p(Math.floor((t-36e5*e-6e4*n)/1e3))}},{key:"render",value:function(){var t=this.props,e=t.format,n=t.className,r=this.state.timeleft,i=(0,s.default)(v.default.countdown,(0,a.default)({},n,n)),o=r>0?r:0;return f.default.createElement("span",{className:i},e?e(o):this.format(o))}}]),e}(c.Component);e.default=m,m.propTypes={target:d.default.oneOfType([d.default.instanceOf(Date),d.default.number,d.default.string]),interval:d.default.number},m.defaultProps={interval:1e3}}}]);