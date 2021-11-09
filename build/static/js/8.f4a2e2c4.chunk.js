(this["webpackJsonpblockchain-explorer"]=this["webpackJsonpblockchain-explorer"]||[]).push([[8],{215:function(e,t,s){"use strict";s.d(t,"b",(function(){return a})),s.d(t,"e",(function(){return n})),s.d(t,"c",(function(){return i})),s.d(t,"f",(function(){return r})),s.d(t,"g",(function(){return c})),s.d(t,"d",(function(){return o})),s.d(t,"a",(function(){return l}));var a="/assets/issuingBoxes",n="/assets/issuingBoxes/total",i="assets/id:/issuingBoxes",r="/transactions/unconfirmed",c="/transactions/unconfirmed/:id",o="oracle/frontendData",l="addresses/balances"},216:function(e,t,s){"use strict";s.d(t,"a",(function(){return b}));var a=s(11),n=s(12),i=s(14),r=s(13),c=s(0),o=s.n(c),l=s(20),d=s(2),b=function(e){Object(i.a)(s,e);var t=Object(r.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"bi-coin-value",children:[this.getFormattedValue()," ",this.props.coinName?this.props.coinName:l.a.blockchain.coinName.toUpperCase()]})}},{key:"getFormattedValue",value:function(){var e=this.props.value/1e9;return e<1&&0!==e?e.toFixed(9).split("").reduceRight((function(e,t){return"0"===t&&0===e.length||e.push(t),e}),[]).reverse().join(""):e.toString()}}]),s}(o.a.PureComponent)},219:function(e,t,s){"use strict";s.d(t,"a",(function(){return u}));var a=s(11),n=s(12),i=s(14),r=s(13),c=s(217),o=s.n(c),l=s(0),d=s.n(l),b=(s(222),s(2)),u=function(e){Object(i.a)(s,e);var t=Object(r.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"render",value:function(){var e=o()(this.props.timestamp);return Object(b.jsxs)("div",{className:"bi-timestamp u-word-wrap u-word-wrap--ellipsis",children:[Object(b.jsx)("span",{className:"bi-timestamp__time",children:e.format("HH:mm:ss")}),Object(b.jsx)("span",{className:"bi-timestamp__date",children:e.format("DD.MM.YYYY")})]})}}]),s}(d.a.PureComponent)},221:function(e,t,s){"use strict";s.d(t,"a",(function(){return o}));var a=s(3),n=s(77),i=s(39),r=s.n(i),c={transformResponse:function(e){return e},dispatch:function(e){return e}},o=function(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c,i=s.dispatch,o=s.transformResponse;return i(Object(n.startStructFetch)(e)),r.a.request(Object(a.a)({},t)).then((function(e){return e.data})).then(o).then((function(t){if(!t)return i(Object(n.stopStructFetch)(e,t)),Promise.resolve(t);var s=t.errors||t.error;return s?(i(Object(n.stopStructFetch)(e,new Error(s))),Promise.reject(new Error(s))):(i(Object(n.stopStructFetch)(e,t)),Promise.resolve(t))})).catch((function(t){return i(Object(n.stopStructFetch)(e,t)),Promise.reject(t)}))}},222:function(e,t,s){},231:function(e,t,s){"use strict";s.d(t,"a",(function(){return p}));var a=s(11),n=s(12),i=s(14),r=s(13),c=s(0),o=s.n(c),l=s(28),d=s(33),b=(s(232),s(15)),u=s(2),p=function(e){Object(i.a)(s,e);var t=Object(r.a)(s);function s(e){return Object(a.a)(this,s),t.call(this,e)}return Object(n.a)(s,[{key:"render",value:function(){var e=Math.ceil(this.props.total/this.props.limit);return e?Object(u.jsxs)("div",{className:"bi-paginate-simple",children:[0===this.props.forcePage?Object(u.jsx)("button",{className:"bi-paginate-simple__btn bi-paginate-simple__btn--prev bi-btn bi-btn--flat",disabled:!0,children:Object(u.jsx)(b.m,{className:"bi-paginate-simple__btn-icon"})}):Object(u.jsx)(d.Link,{className:"bi-paginate-simple__btn bi-paginate-simple__btn--prev bi-btn bi-btn--flat",to:this.props.getPageUrl(0),children:Object(u.jsx)(b.m,{className:"bi-paginate-simple__btn-icon"})}),0===this.props.forcePage?Object(u.jsx)("button",{className:"bi-paginate-simple__btn bi-paginate-simple__btn--prev bi-btn bi-btn--flat",disabled:!0,children:Object(u.jsx)(b.c,{className:"bi-paginate-simple__btn-icon"})}):Object(u.jsx)(d.Link,{className:"bi-paginate-simple__btn bi-paginate-simple__btn--prev bi-btn--flat",to:this.props.getPageUrl(this.props.forcePage-1),children:Object(u.jsx)(b.c,{className:"bi-paginate-simple__btn-icon"})}),Object(u.jsx)("span",{className:"bi-paginate-simple__status",children:Object(u.jsx)(l.a,{id:"components.paginate-simple.page-of",values:{current:this.props.forcePage+1,total:e}})}),Object(u.jsx)("span",{className:"bi-paginate-simple__status bi-paginate-simple__status--mobile",children:Object(u.jsx)(l.a,{id:"components.paginate-simple.page",values:{current:this.props.forcePage+1}})}),this.props.forcePage===e-1?Object(u.jsx)("button",{className:"bi-paginate-simple__btn bi-paginate-simple__btn--next bi-btn bi-btn--flat",disabled:!0,children:Object(u.jsx)(b.c,{className:"bi-paginate-simple__btn-icon"})}):Object(u.jsx)(d.Link,{className:"bi-paginate-simple__btn bi-paginate-simple__btn--next bi-btn--flat",to:this.props.getPageUrl(this.props.forcePage+1),children:Object(u.jsx)(b.c,{className:"bi-paginate-simple__btn-icon"})}),this.props.forcePage===e-1?Object(u.jsx)("button",{className:"bi-paginate-simple__btn bi-paginate-simple__btn--next bi-btn bi-btn--flat",disabled:!0,children:Object(u.jsx)(b.m,{className:"bi-paginate-simple__btn-icon"})}):Object(u.jsx)(d.Link,{className:"bi-paginate-simple__btn bi-paginate-simple__btn--next bi-btn--flat",to:this.props.getPageUrl(e-1),children:Object(u.jsx)(b.m,{className:"bi-paginate-simple__btn-icon"})})]}):null}}]),s}(o.a.Component)},232:function(e,t,s){},234:function(e,t,s){"use strict";s.d(t,"a",(function(){return h}));var a=s(11),n=s(12),i=s(14),r=s(13),c=s(0),o=s.n(c),l=s(28),d=s(79),b=s.n(d),u=s(45),p=s.n(u),m=s(15),j=(s(241),s(2)),h=function(e){Object(i.a)(s,e);var t=Object(r.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"render",value:function(){var e=this.props.title;return Object(j.jsxs)(b.a,{className:"bi-address-issued-tokens-modal bi-modal bi-modal--scale",overlayClassName:"bi-modal-overlay",isOpen:this.props.isOpen,onRequestClose:this.props.onClose,children:[Object(j.jsx)("button",{className:"bi-modal__btn-close",onClick:this.props.onClose,children:Object(j.jsx)(m.j,{className:"bi-modal__btn-close-icon"})}),Object(j.jsx)("div",{className:"bi-address-issued-tokens-modal__table-header",children:e||"Address tokens"}),Object(j.jsx)("div",{className:"bi-address-issued-tokens-modal__container",children:Object(j.jsx)("div",{className:"bi-address-issued-tokens-modal__table-body bi-table",children:this.props.issuedTokens&&this.props.issuedTokens.map((function(e,t){return Object(j.jsxs)("div",{className:"bi-address-issued-tokens-modal__row bi-table__row",children:[Object(j.jsx)("div",{className:"bi-address-issued-tokens-modal__cell bi-table__cell bi-address-issued-tokens-modal__cell--token-id",children:Object(j.jsx)(l.a,{id:e.name||e.tokenId})}),Object(j.jsx)("div",{className:"bi-address-issued-tokens-modal__cell bi-table__cell bi-address-issued-tokens-modal__cell--amount",children:p()({integerSeparator:" "})(e.decimals>0?e.amount/Math.pow(10,e.decimals):e.amount)})]},"".concat(Math.random()," - ").concat(t))}))})})]})}}]),s}(o.a.PureComponent)},235:function(e,t,s){"use strict";s.d(t,"a",(function(){return m}));var a=s(11),n=s(12),i=s(17),r=s(14),c=s(13),o=s(36),l=s.n(o),d=s(0),b=s.n(d),u=s(234),p=(s(243),s(2)),m=function(e){Object(r.a)(s,e);var t=Object(c.a)(s);function s(e){var n;return Object(a.a)(this,s),(n=t.call(this,e)).state={isDropdownShown:!1},n.toggleDropdown=n.toggleDropdown.bind(Object(i.a)(n)),n}return Object(n.a)(s,[{key:"render",value:function(){var e=this.props,t=e.list,s=e.button,a=l()({"bi-dropdown-list":!0});return Object(p.jsxs)("div",{className:a,children:[Object(p.jsx)("button",{className:"bi-dropdown-list__button g-flex bi-btn bi-btn--flat",onClick:this.toggleDropdown,children:Object(p.jsx)("span",{className:"bi-dropdown-list__button-label",children:s})}),this.state.isDropdownShown&&Object(p.jsx)(u.a,{isOpen:this.state.isDropdownShown,onClose:this.toggleDropdown,title:"Tokens",issuedTokens:t}),Object(p.jsx)("ul",{className:"bi-dropdown-list__dropdown",children:t.map((function(e,t){return Object(p.jsxs)("li",{className:"bi-dropdown-list__option",children:[Object(p.jsx)("span",{children:e.value}),"\xa0",e.label]},"".concat(e.value,"_").concat(t,"_").concat(e.label))}))})]})}},{key:"toggleDropdown",value:function(){this.setState({isDropdownShown:!this.state.isDropdownShown})}}]),s}(b.a.PureComponent)},241:function(e,t,s){},242:function(e,t,s){"use strict";s.d(t,"a",(function(){return O}));var a=s(3),n=s(11),i=s(12),r=s(14),c=s(13),o=s(0),l=s.n(o),d=s(28),b=s(29),u=s(33),p=s(216),m=s(219),j=s(235),h=s(15),_=(s(244),s(2)),f=function(e){Object(r.a)(s,e);var t=Object(c.a)(s);function s(){var e;Object(n.a)(this,s);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={isClient:!1},e.getAddressInputs=function(){return e.props.transaction.inputs.reduce((function(t,s){var a=s.address,n=s.value;return a===e.props.address?t+n:t}),0)},e.getAddressOutputs=function(){return e.props.transaction.outputs.reduce((function(t,s){var a=s.address,n=s.value;return a===e.props.address?t+n:t}),0)},e.getTransactionState=function(){var t=e.getAddressInputs(),s=e.getAddressOutputs();return 0!==s&&s-t>0?"input":"output"},e}return Object(i.a)(s,[{key:"componentDidMount",value:function(){this.setState({isClient:!0})}},{key:"renderAssets",value:function(e){if(0===e.length)return null;var t=e.map((function(e){var t=e.amount;return{label:e.tokenId.substr(0,4),value:t}})),s="+".concat(t.length);return Object(_.jsx)(j.a,{list:e,button:s})}},{key:"render",value:function(){var e=this,t=0,s=this.getAddressInputs(),a=this.getAddressOutputs(),n="output"===this.getTransactionState();return Object(_.jsxs)("div",{className:"bi-transactions-item",children:[Object(_.jsxs)("div",{className:"bi-transactions-item__header g-flex",children:[Object(_.jsx)(u.Link,{className:"bi-transactions-item__title u-word-wrap g-flex__item-fixed",to:"/transactions/".concat(this.props.transaction.id),children:this.props.transaction.id}),Object(_.jsx)("div",{className:"bi-transactions-item__timestamp g-flex__item-fixed",children:Object(_.jsx)(m.a,{timestamp:this.props.transaction.creationTimestamp||this.props.transaction.timestamp})})]}),Object(_.jsxs)("div",{className:"bi-transactions-item__body g-flex",children:[Object(_.jsx)("div",{className:"bi-transactions-item__inputs g-flex__item",children:this.props.transaction.inputs.map((function(t,s){return Object(_.jsxs)("div",{className:"bi-transactions-item__input g-flex",children:[Object(_.jsx)("div",{className:"bi-transactions-item__address",children:t.address?Object(_.jsx)(u.Link,{className:"u-word-wrap u-word-wrap--ellipsis",to:"/addresses/".concat(t.address),children:t.address}):Object(_.jsx)(d.a,{id:"components.transaction-item.null-address"})}),e.props.isScriptsDisplayed&&t.outputTransactionId&&Object(_.jsxs)("div",{className:"bi-transactions-item__address-output g-flex__item-fixed u-word-wrap u-word-wrap--ellipsis",children:["(",Object(_.jsx)(p.a,{value:t.value})," -"," ",Object(_.jsx)(u.Link,{to:"/transactions/".concat(t.outputTransactionId),children:Object(_.jsx)(d.a,{id:"components.transaction-item.address-output"})}),")"]})]},"".concat(s,"__").concat(t.id))}))}),this.props.address?Object(_.jsx)("div",{className:["bi-transactions-item__arrow",n?"bi-transactions-item__arrow--output":"bi-transactions-item__arrow--input"].join(" "),children:Object(_.jsx)(h.e,{className:"bi-transactions-item__arrow-icon"})}):Object(_.jsx)("div",{className:"bi-transactions-item__arrow",children:Object(_.jsx)(h.e,{className:"bi-transactions-item__arrow-icon"})}),Object(_.jsxs)("div",{className:"bi-transactions-item__outputs g-flex__item g-flex-column",children:[this.props.transaction.outputs.map((function(s,a){return t+=s.value,Object(_.jsxs)("div",{className:"bi-transactions-item__output g-flex",children:[Object(_.jsx)("div",{className:"bi-transactions-item__address g-flex__item-fixed",children:s.address?Object(_.jsx)(u.Link,{className:"u-word-wrap u-word-wrap--ellipsis",to:"/addresses/".concat(s.address),children:s.address}):Object(_.jsx)("span",{className:"u-word-wrap u-word-wrap--ellipsis",children:Object(_.jsx)(d.a,{id:"components.transaction-item.null-address"})})}),Object(_.jsx)("div",{className:"bi-transactions-item__address-spent g-flex__item u-word-wrap u-word-wrap--ellipsis",style:{display:e.props.isScriptsDisplayed||!e.state.isClient?"block":"none"},children:s.spentTransactionId?Object(_.jsx)(u.Link,{to:"/transactions/".concat(s.spentTransactionId),children:Object(_.jsx)(d.a,{id:"components.transaction-item.spent"})}):Object(_.jsx)(d.a,{id:"components.transaction-item.unspent"})}),Object(_.jsxs)("div",{className:"bi-transactions-item__value g-flex__item-fixed",children:[Object(_.jsx)(p.a,{value:s.value}),e.renderAssets(s.assets)]})]},"".concat(a,"__").concat(s.id))})),Object(_.jsxs)("div",{className:"bi-transactions-item__footer g-flex-column__item-fixed g-flex",children:[this.props.confirmations>0&&Object(_.jsxs)("div",{className:"bi-transactions-item__confirmations g-flex__item-fixed",children:[this.props.confirmations," ",Object(_.jsx)(d.b,{value:this.props.confirmations,one:Object(_.jsx)(d.a,{id:"components.transaction-item.confirmation.one"}),other:Object(_.jsx)(d.a,{id:"components.transaction-item.confirmation.other"})})]}),!this.props.confirmations&&Object(_.jsx)("div",{className:"bi-transactions-item__confirmations g-flex__item-fixed item__confirmations--unconfirmed",children:Object(_.jsx)(d.a,{id:"components.transaction-item.unconfirmed"})}),Object(_.jsx)("div",{className:["bi-transactions-item__total-value g-flex__item-fixed",this.props.address&&(n?"bi-transactions-item__total-value--output":"bi-transactions-item__total-value--input")].join(" "),children:Object(_.jsx)(p.a,{value:this.props.address?Math.abs(a-s):t})})]})]})]})]})}}]),s}(l.a.Component);var O=Object(b.b)((function(e,t){return Object(a.a)(Object(a.a)({},e.settings),t)}))(f)},243:function(e,t,s){},244:function(e,t,s){},271:function(e,t,s){"use strict";s.d(t,"a",(function(){return b}));var a=s(11),n=s(12),i=s(14),r=s(13),c=s(0),o=s.n(c),l=s(242),d=(s(272),s(2)),b=function(e){Object(i.a)(s,e);var t=Object(r.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{className:"bi-transactions",children:this.props.transactions.map((function(t){return Object(d.jsx)(l.a,{transaction:t,address:e.props.address,confirmations:t.confirmationsCount},t.id)}))})}}]),s}(o.a.PureComponent)},272:function(e,t,s){},303:function(e,t,s){"use strict";s.d(t,"a",(function(){return h}));var a=s(56),n=s(267),i=s.n(n),r=s(40),c=s(269),o=s(11),l=s(12),d=s(215),b=s(39),u=s.n(b),p=s(20),m=s(221),j=function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,null,[{key:"apiUrl",get:function(){return"".concat(p.a.apiUrl,"/addresses")}},{key:"getAddress",value:function(e){return u.a.get("".concat(p.a.apiUrl,"/addresses/").concat(e)).then((function(t){return t?t.data:Promise.reject("Address api service. Request: ".concat(p.a.apiUrl,"/addresses/").concat(e,"."))}))}},{key:"getConfirmed",value:function(e,t){return u.a.get("".concat(p.a.apiUrl,"/addresses/").concat(e,"/transactions"),{params:t}).then((function(t){return t?t.data:Promise.reject("Address api service. Request: ".concat(p.a.apiUrl,"/addresses/").concat(e,"/transactions."))}))}},{key:"getUnconfirmed",value:function(e,t){return u.a.get("".concat(p.a.apiUrl,"/transactions/unconfirmed/byAddress/").concat(e),{params:t}).then((function(t){return t?t.data:Promise.reject("Address api service. Request: ".concat(p.a.apiUrl,"/addresses/").concat(e,"/transactions."))}))}},{key:"getAddressTransactions",value:function(){var e=Object(c.a)(i.a.mark((function e(t,s){var a,n,c,o,l,d,b;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.offset,n=s.limit,e.next=3,this.getUnconfirmed(t,{offset:a,limit:n});case 3:if(!(0===(c=e.sent).total||c.total<a)){e.next=9;break}return e.next=7,this.getConfirmed(t,{offset:a-c.total,limit:n});case 7:return o=e.sent,e.abrupt("return",{items:o.items,total:c.total+o.total});case 9:if(!(c.items.length<n)){e.next=15;break}return l=n-c.items.length,e.next=13,this.getConfirmed(t,{offset:0,limit:l});case 13:return d=e.sent,e.abrupt("return",{items:[].concat(Object(r.a)(c.items),Object(r.a)(d.items)),total:c.total+d.total});case 15:return e.next=17,this.getConfirmed(t,{offset:0,limit:1});case 17:return b=e.sent,e.abrupt("return",{items:Object(r.a)(c.items),total:c.total+b.total});case 19:case"end":return e.stop()}}),e,this)})));return function(t,s){return e.apply(this,arguments)}}()},{key:"getAddressesBalances",value:function(e){return Object(m.a)(d.a,{method:"get",url:"".concat(p.a.apiUrl,"/addresses/balances?limit=100")},{dispatch:e})}}]),e}(),h={getAddress:function(e){return function(t){t({type:a.a}),j.getAddress(e).then((function(e){t({payload:{data:e},type:a.b})}))}},getAddressTransactions:function(e,t){return function(s){s({type:a.c}),j.getAddressTransactions(e,t).then((function(e){s({payload:{data:e},type:a.d})}))}},getAddressesBalances:function(){return function(e){return j.getAddressesBalances(e)}}}},313:function(e,t,s){},395:function(e,t,s){},401:function(e,t,s){},402:function(e,t,s){},403:function(e,t,s){},404:function(e,t,s){},666:function(e,t,s){"use strict";s.r(t);var a=s(3),n=s(11),i=s(12),r=s(17),c=s(14),o=s(13),l=s(54),d=s.n(l),b=s(0),u=s.n(b),p=s(78),m=s.n(p),j=s(28),h=s(29),_=s(24),f=s(20),O=(s(395),s(30)),x=s(303),v=s(84),g=s(15),y=s(270),N=s.n(y),k=s(79),w=s.n(k),C=(s(401),s(2)),q=function(e){Object(c.a)(s,e);var t=Object(o.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return Object(C.jsxs)(w.a,{className:"bi-address-qrcode-modal bi-modal bi-modal--scale",overlayClassName:"bi-modal-overlay",closeTimeoutMS:150,isOpen:this.props.isOpen,onRequestClose:this.props.onClose,children:[Object(C.jsx)("button",{className:"bi-modal__btn-close",onClick:this.props.onClose,children:Object(C.jsx)(g.j,{className:"bi-modal__btn-close-icon"})}),Object(C.jsxs)("div",{className:"bi-address-qrcode-modal__title",children:[Object(C.jsx)(j.a,{id:"components.address-qr-code-modal.title"}),Object(C.jsx)("div",{className:"bi-address-qrcode-modal__subtitle",children:Object(C.jsx)(j.a,{id:"components.address-qr-code-modal.subtitle"})})]}),Object(C.jsx)(N.a,{value:this.props.address,size:164})]})}}]),s}(u.a.PureComponent),P=(s(313),"isQrCodeModalOpened"),S=function(e){Object(c.a)(s,e);var t=Object(o.a)(s);function s(e){var a;return Object(n.a)(this,s),(a=t.call(this,e)).state=Object(v.a)({},P,!1),a.openModal=a.openModal.bind(Object(r.a)(a)),a.closeModal=a.closeModal.bind(Object(r.a)(a)),a}return Object(i.a)(s,[{key:"render",value:function(){return Object(C.jsxs)("div",{className:"bi-address-actions g-flex",children:[Object(C.jsx)("div",{className:"bi-address-actions__item g-flex__item-fixed",children:Object(C.jsxs)("button",{className:"bi-address-actions__btn bi-btn",onClick:this.openModal(P),children:[Object(C.jsx)(j.a,{id:"components.address-actions.qrcode"}),Object(C.jsx)(g.v,{className:"bi-address-actions__btn-icon"})]})}),Object(C.jsx)(q,{isOpen:this.state.isQrCodeModalOpened,onClose:this.closeModal(P),address:this.props.address.summary.id})]})}},{key:"openModal",value:function(e){var t=this;return function(){t.setState(Object(v.a)({},e,!0))}}},{key:"closeModal",value:function(e){var t=this;return function(){t.setState(Object(v.a)({},e,!1))}}}]),s}(u.a.Component),A=s(4),T=(s(402),function(e){Object(c.a)(s,e);var t=Object(o.a)(s);function s(e){var a;return Object(n.a)(this,s),(a=t.call(this,e)).link=void 0,a.state={amount:0,copied:!1,description:""},a.setAmount=a.setAmount.bind(Object(r.a)(a)),a.setDescription=a.setDescription.bind(Object(r.a)(a)),a.copyLinkToClipboard=a.copyLinkToClipboard.bind(Object(r.a)(a)),a.selectLink=a.selectLink.bind(Object(r.a)(a)),a}return Object(i.a)(s,[{key:"render",value:function(){var e=this,t=this.getLink();return Object(C.jsxs)(w.a,{className:"bi-payment-request-modal bi-modal bi-modal--scale g-scroll-y",overlayClassName:"bi-modal-overlay",closeTimeoutMS:150,isOpen:this.props.isOpen,onRequestClose:this.props.onClose,children:[Object(C.jsx)("button",{className:"bi-modal__btn-close",onClick:this.props.onClose,children:Object(C.jsx)(g.j,{className:"bi-modal__btn-close-icon"})}),Object(C.jsxs)("div",{className:"bi-payment-request-modal__title",children:[Object(C.jsx)(j.a,{id:"components.payment-request-modal.title"}),Object(C.jsx)("div",{className:"bi-payment-request-modal__subtitle",children:Object(C.jsx)(j.a,{id:"components.payment-request-modal.subtitle"})})]}),Object(C.jsxs)("div",{className:"bi-payment-request-modal__form",children:[Object(C.jsxs)("label",{className:"bi-payment-request-modal__form-item g-flex",children:[Object(C.jsx)("span",{className:"bi-payment-request-modal__label g-flex__item-fixed",children:Object(C.jsx)(j.a,{id:"components.payment-request-modal.amount"})}),Object(C.jsxs)("div",{className:"bi-payment-request-modal__input-wrapper g-flex__item",children:[Object(C.jsx)("input",{className:"bi-payment-request-modal__input",type:"number",onChange:this.setAmount,min:0}),Object(C.jsx)("span",{className:"bi-payment-request-modal__input-currency",children:f.a.blockchain.coinName.toUpperCase()})]})]}),Object(C.jsxs)("label",{className:"bi-payment-request-modal__form-item g-flex",children:[Object(C.jsx)("span",{className:"bi-payment-request-modal__label bi-payment-request-modal__label--line",children:Object(C.jsx)(j.a,{id:"components.payment-request-modal.description"})}),Object(C.jsx)("div",{className:"bi-payment-request-modal__input-wrapper g-flex__item",children:Object(C.jsx)("textarea",{className:"bi-payment-request-modal__input bi-payment-request-modal__input--textarea",onChange:this.setDescription})})]})]}),Object(C.jsxs)("div",{className:"bi-payment-request-modal__result g-flex",children:[Object(C.jsx)("div",{className:"g-flex__item-fixed bi-payment-request-modal__qrcode",children:Object(C.jsx)(N.a,{value:t,size:156})}),Object(C.jsxs)("div",{className:"g-flex__item-fixed bi-payment-request-modal__link g-flex-column",children:[Object(C.jsxs)("div",{className:"bi-payment-request-modal__link-header g-flex-column__item-fixed",children:[Object(C.jsx)(j.a,{id:"components.payment-request-modal.link"}),":"]}),Object(C.jsx)("div",{className:"bi-payment-request-modal__link-body u-word-wrap g-scroll-y g-flex-column__item",onClick:this.selectLink,ref:function(t){return e.link=t},children:t})]})]}),Object(C.jsx)("div",{className:"bi-payment-request-modal__footer g-flex-column__item g-flex",children:Object(C.jsx)("button",{className:"bi-payment-request-modal__btn-copy bi-btn bi-btn--flat",onClick:this.copyLinkToClipboard,children:this.state.copied?Object(C.jsx)(j.a,{id:"components.payment-request-modal.copied"}):Object(C.jsx)(j.a,{id:"components.payment-request-modal.copy"})})})]})}},{key:"getLink",value:function(){var e=d.a.stringify({address:this.props.address,amount:this.state.amount,description:this.state.description}),t=f.a.environments?f.a.environments[0].url:window.location.origin;return"".concat(t,"/payment-request?").concat(e)}},{key:"setAmount",value:function(e){this.setState({amount:parseInt(e.target.value,10)})}},{key:"setDescription",value:function(e){this.setState({description:e.target.value})}},{key:"selectLink",value:function(){window.getSelection().selectAllChildren(this.link)}},{key:"copyLinkToClipboard",value:function(){var e=this;this.selectLink(),document.execCommand("copy"),window.getSelection().removeAllRanges(),this.setState({copied:!0}),setTimeout((function(){e.setState({copied:!1})}),1e3)}}]),s}(u.a.PureComponent)),M=Object(A.o)(T),U="isPaymentRequestModalOpened",D=function(e){Object(c.a)(s,e);var t=Object(o.a)(s);function s(e){var a;return Object(n.a)(this,s),(a=t.call(this,e)).state=Object(v.a)({},U,!1),a.openModal=a.openModal.bind(Object(r.a)(a)),a.closeModal=a.closeModal.bind(Object(r.a)(a)),a}return Object(i.a)(s,[{key:"render",value:function(){return Object(C.jsxs)("div",{className:"bi-address-actions g-flex",children:[Object(C.jsx)("div",{className:"bi-address-actions__item g-flex__item-fixed",children:Object(C.jsx)("button",{className:"bi-address-actions__btn",onClick:this.openModal(U),children:Object(C.jsx)(j.a,{id:"components.address-actions.request-payment"})})}),Object(C.jsx)(M,{isOpen:this.state.isPaymentRequestModalOpened,onClose:this.closeModal(U),address:this.props.address.summary.id})]})}},{key:"openModal",value:function(e){var t=this;return function(){t.setState(Object(v.a)({},e,!0))}}},{key:"closeModal",value:function(e){var t=this;return function(){t.setState(Object(v.a)({},e,!1))}}}]),s}(u.a.Component),L=function(e){Object(c.a)(s,e);var t=Object(o.a)(s);function s(e){var a;return Object(n.a)(this,s),(a=t.call(this,e)).copyToClipboard=a.copyToClipboard.bind(Object(r.a)(a)),a}return Object(i.a)(s,[{key:"render",value:function(){var e=this;return Object(C.jsxs)("span",{onClick:function(){e.props.onClick&&e.props.onClick(),e.copyToClipboard()},style:{cursor:"pointer",color:"rgb(0, 120, 255)",display:"inline-flex",alignItems:"center"},className:this.props.className,children:[!this.props.isNotShowIcon&&Object(C.jsx)("div",{style:{height:"16px"},children:Object(C.jsx)(g.i,{})}),Object(C.jsx)("a",{className:"bi-copy-text",style:{marginLeft:this.props.isNotShowIcon?0:"10px"},children:this.props.children})]})}},{key:"getTextContent",value:function(){return"string"===typeof this.props.children?this.props.children:"object"===typeof this.props.children?this.props.children.props.id:void 0}},{key:"copyToClipboard",value:function(){var e=this.getTextContent();if(e){var t=document.createElement("textarea");t.value=e||"",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}}}]),s}(u.a.Component),I=s(63),R=(s(403),function(e){var t=Object(I.d)();return Object(C.jsxs)("div",{className:"bi-address-summary",children:[Object(C.jsx)("div",{className:"bi-address-summary__header",children:Object(C.jsx)(j.a,{id:"components.address-summary.title"})}),Object(C.jsx)("div",{className:"bi-address-summary__body bi-table",children:Object(C.jsxs)("div",{className:"bi-address-summary__row bi-table__row",children:[Object(C.jsx)("div",{className:"bi-address-summary__cell bi-address-summary__cell--header bi-table__cell",children:Object(C.jsx)(j.a,{id:"components.address-summary.hash"})}),Object(C.jsx)("div",{className:"bi-address-summary__cell bi-address-summary__cell--value bi-table__cell",children:Object(C.jsx)(L,{onClick:function(){return t.show(Object(C.jsx)("span",{style:{textTransform:"initial"},children:"Copied"}))},className:"u-word-wrap u-word-wrap--ellipsis",children:e.summary.id})})]})})]})}),B=s(81),F=(s(404),s(216)),E=s(234),J=function(e){var t,s,a=e.summary,n=Object(b.useState)(!1),i=Object(B.a)(n,2),r=i[0],c=i[1];return Object(C.jsxs)("div",{className:"bi-address-transactions",children:[Object(C.jsx)("div",{className:"bi-address-transactions__header",children:Object(C.jsx)(j.a,{id:"components.address-transactions.title"})}),Object(C.jsxs)("div",{className:"bi-address-transactions__body bi-table",children:[Object(C.jsxs)("div",{className:"bi-address-transactions__row bi-table__row",children:[Object(C.jsx)("div",{className:"bi-address-transactions__cell bi-address-transactions__cell--header bi-table__cell",children:Object(C.jsx)(j.a,{id:"components.address-transactions.confirmed"})}),Object(C.jsx)("div",{className:"bi-address-transactions__cell bi-table__cell",children:a.confirmed})]}),Object(C.jsxs)("div",{className:"bi-address-transactions__row bi-table__row",children:[Object(C.jsx)("div",{className:"bi-address-transactions__cell bi-address-transactions__cell--header bi-table__cell",children:Object(C.jsx)(j.a,{id:"components.address-transactions.totalReceived"})}),Object(C.jsx)("div",{className:"bi-address-transactions__cell bi-table__cell",children:Object(C.jsx)(F.a,{value:a.totalReceived})})]}),Object(C.jsxs)("div",{className:"bi-address-transactions__row bi-table__row",children:[Object(C.jsx)("div",{className:"bi-address-transactions__cell bi-address-transactions__cell--header bi-table__cell",children:Object(C.jsx)(j.a,{id:"components.address-transactions.confirmedBalance"})}),Object(C.jsx)("div",{className:"bi-address-transactions__cell bi-table__cell",children:Object(C.jsx)(F.a,{value:a.confirmedBalance})})]}),Object(C.jsxs)("div",{className:"bi-address-transactions__row bi-table__row",children:[Object(C.jsx)("div",{className:"bi-address-transactions__cell bi-address-transactions__cell--header bi-table__cell",children:Object(C.jsx)(j.a,{id:"components.address-transactions.tokens"})}),Object(C.jsx)("div",{className:"bi-address-transactions__cell bi-table__cell",children:(null===(t=a.totalTokensBalance)||void 0===t?void 0:t.length)?Object(C.jsx)("button",{className:"bi-address-actions__btn bi-btn",onClick:function(){return c(!0)},children:Object(C.jsx)(j.a,{id:"components.address-transactions.show"})}):"None"})]})]}),0!==(null===(s=a.totalTokensBalance)||void 0===s?void 0:s.length)&&Object(C.jsxs)("div",{className:"bi-address-issued-tokens__btn-container g-flex",children:[Object(C.jsx)("div",{className:"bi-address-issued-tokens__item g-flex__item-fixed"}),Object(C.jsx)(E.a,{isOpen:r,onClose:function(){return c(!1)},issuedTokens:a.totalTokensBalance})]})]})},Y=s(231),z=s(271),H=function(e){Object(c.a)(s,e);var t=Object(o.a)(s);function s(e){var a;return Object(n.a)(this,s),(a=t.call(this,e)).params=void 0,a.params=a.getParams(),a.getPageUrl=a.getPageUrl.bind(Object(r.a)(a)),a}return Object(i.a)(s,[{key:"componentDidMount",value:function(){var e=this.props,t=e.preloaded,s=e.clearPreloadedState,a=e.getAddress,n=e.getAddressTransactions,i=e.match.params.id;t?s():(a(i),n(i,this.params))}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this.getParams();if(this.props.match.params.id!==e.match.params.id)return this.params=t,this.props.getAddress(e.match.params.id),void this.props.getAddressTransactions(e.match.params.id,this.params);JSON.stringify(t)!==JSON.stringify(this.params)&&(this.params=t,this.props.getAddressTransactions(this.props.match.params.id,this.params))}},{key:"render",value:function(){return Object(C.jsxs)("div",{className:"bi-address g-flex-column__item-fixed",children:[Object(C.jsx)("div",{className:"bi-address__header",children:Object(C.jsx)("div",{className:"bi-address__title",children:Object(C.jsx)(j.a,{id:"components.address.title",values:{coinName:f.a.blockchain.coinName.toUpperCase()}})})}),this.renderBody()]})}},{key:"renderBody",value:function(){return this.props.fetching?Object(C.jsx)("p",{className:"bi-address__fetching-text",children:"Fetching data..."}):!this.props.address||this.props.fetching?null:Object(C.jsxs)("div",{className:"bi-address__body",children:[Object(C.jsx)(j.a,{id:"common.pages.address.title",values:{id:this.props.address.summary.id},children:function(e){return Object(C.jsx)(m.a,{children:Object(C.jsx)("title",{children:e})})}}),Object(C.jsxs)("div",{className:"bi-address__tables g-flex",children:[Object(C.jsxs)("div",{className:"bi-address__table g-flex__item",children:[Object(C.jsx)(R,{summary:this.props.address.summary}),Object(C.jsx)(S,{address:this.props.address})]}),Object(C.jsxs)("div",{className:"bi-address__table g-flex__item",children:[Object(C.jsx)(J,{summary:this.props.address.transactions}),Object(C.jsx)(D,{address:this.props.address})]})]}),this.props.transactions&&Object(C.jsxs)("div",{className:"bi-address__transactions",children:[!this.props.transactionFetching&&Object(C.jsx)(z.a,{transactions:this.props.transactions.items,address:this.props.address.summary.id}),Object(C.jsx)("div",{className:"bi-address__transactions-footer g-flex",children:Object(C.jsx)(Y.a,{total:this.props.transactions.total,limit:this.params.limit,getPageUrl:this.getPageUrl,forcePage:Math.floor(this.params.offset/this.params.limit)})})]})]})}},{key:"getPageUrl",value:function(e){var t=d.a.parse(this.props.history.location.search);return t.offset=e*this.params.limit,"".concat(this.props.location.pathname,"?").concat(d.a.stringify(t))}},{key:"getParams",value:function(){var e=d.a.parse(this.props.history.location.search),t=e.offset,s=e.limit;return t=parseInt(t,10),{limit:s=parseInt(s,10)||30,offset:t||0}}}]),s}(u.a.PureComponent);t.default=Object(h.b)((function(e){return e.address}),(function(e){return Object(_.bindActionCreators)(Object(a.a)(Object(a.a)({},x.a),O.a),e)}))(H)}}]);
//# sourceMappingURL=8.f4a2e2c4.chunk.js.map