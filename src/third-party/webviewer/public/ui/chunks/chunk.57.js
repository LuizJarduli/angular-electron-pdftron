(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1916:function(o,t,e){var r=e(32),n=e(1917);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[o.i,n,""]]);var i={insert:function(o){if(!window.isApryseWebViewerWebComponent)return void document.head.appendChild(o);let t;t=document.getElementsByTagName("apryse-webviewer"),t.length||(t=function o(t,e=document){const r=[];return e.querySelectorAll(t).forEach(o=>r.push(o)),e.querySelectorAll("*").forEach(e=>{e.shadowRoot&&r.push(...o(t,e.shadowRoot))}),r}("apryse-webviewer"));const e=[];for(let r=0;r<t.length;r++){const n=t[r];if(0===r)n.shadowRoot.appendChild(o),o.onload=function(){e.length>0&&e.forEach(t=>{t.innerHTML=o.innerHTML})};else{const t=o.cloneNode(!0);n.shadowRoot.appendChild(t),e.push(t)}}},singleton:!1};r(n,i);o.exports=n.locals||{}},1917:function(o,t,e){(t=o.exports=e(33)(!1)).push([o.i,".open.ColorPickerModal{visibility:visible}.closed.ColorPickerModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.ColorPickerModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover);border-color:var(--primary-button-hover);color:var(--gray-0)}.ColorPickerModal .footer .modal-button.confirm{background:var(--primary-button);border-color:var(--primary-button);color:var(--primary-button-text)}.ColorPickerModal .footer .modal-button.confirm.disabled{cursor:default;background:var(--disabled-button-color);color:var(--primary-button-text)}.ColorPickerModal .footer .modal-button.confirm.disabled span{color:var(--primary-button-text)}.ColorPickerModal .footer .modal-button.cancel:hover,.ColorPickerModal .footer .modal-button.secondary-btn-custom:hover{border:none;box-shadow:inset 0 0 0 1px var(--blue-6);color:var(--blue-6)}.ColorPickerModal .footer .modal-button.cancel,.ColorPickerModal .footer .modal-button.secondary-btn-custom{border:none;box-shadow:inset 0 0 0 1px var(--primary-button);color:var(--primary-button)}.ColorPickerModal .footer .modal-button.cancel.disabled,.ColorPickerModal .footer .modal-button.secondary-btn-custom.disabled{cursor:default;border:none;box-shadow:inset 0 0 0 1px rgba(43,115,171,.5);color:rgba(43,115,171,.5)}.ColorPickerModal .footer .modal-button.cancel.disabled span,.ColorPickerModal .footer .modal-button.secondary-btn-custom.disabled span{color:rgba(43,115,171,.5)}.ColorPickerModal{position:fixed;left:0;bottom:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.ColorPickerModal .modal-container .wrapper .modal-content{padding:10px}.ColorPickerModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.ColorPickerModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.ColorPickerModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.ColorPickerModal .footer .modal-button.confirm{margin-left:4px}.ColorPickerModal .footer .modal-button.secondary-btn-custom{border-radius:4px;padding:2px 20px 4px;cursor:pointer}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ColorPickerModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ColorPickerModal .footer .modal-button{padding:23px 8px}}.ColorPickerModal .swipe-indicator{background:var(--swipe-indicator-bg);border-radius:2px;height:4px;width:38px;position:absolute;top:12px;margin-left:auto;margin-right:auto;left:0;right:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ColorPickerModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .ColorPickerModal .swipe-indicator{display:none}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ColorPickerModal .swipe-indicator{width:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ColorPickerModal .swipe-indicator{width:32px}}.ColorPickerModal .container{display:flex;flex-direction:column;justify-content:center;align-items:center;background:var(--component-background);padding:15px 16px;border-radius:4px;width:250px;overflow-y:unset}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ColorPickerModal .container{width:100%;padding:24px 24px 16px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ColorPickerModal .container{width:100%;padding:24px 24px 16px}}.ColorPickerModal .container .sketch-picker{border-radius:0!important;box-shadow:none!important;width:220px!important;padding:0!important;background:var(--component-background)!important}.ColorPickerModal .container .sketch-picker>div{border-radius:2px!important}.ColorPickerModal .container .sketch-picker .saturation-white>div>div{width:12px!important;height:12px!important;transform:translateX(-6px) translateY(-6px)!important}.ColorPickerModal .container .sketch-picker .flexbox-fix:nth-child(2) span{color:var(--text-color)!important;cursor:default!important}.ColorPickerModal .container .sketch-picker .flexbox-fix:nth-child(2)>div:first-child{border-radius:2px}.ColorPickerModal .container .sketch-picker .flexbox-fix:nth-child(2)>div:first-child>div{margin-top:6px;cursor:ew-resize!important;overflow:visible!important}.ColorPickerModal .container .sketch-picker .flexbox-fix:nth-child(2) .hue-horizontal{width:97%;border-radius:2px}.ColorPickerModal .container .sketch-picker .flexbox-fix:nth-child(2) .hue-horizontal div div{transform:translateX(-7px) translateY(-3px)!important;height:14px!important;width:14px!important;border-radius:14px!important;border:1px solid var(--gray-6)!important}.ColorPickerModal .container .sketch-picker .flexbox-fix:nth-child(2)>div:nth-child(2){height:24px!important;border-radius:12px!important}.ColorPickerModal .container .sketch-picker .flexbox-fix:nth-child(2)>div:nth-child(2)>div{border-radius:12px!important}.ColorPickerModal .container .sketch-picker .flexbox-fix:nth-child(3) input{width:100%!important;text-align:center;border-radius:2px}.ColorPickerModal .container .sketch-picker .flexbox-fix:nth-child(3) label{color:var(--text-color)!important}.ColorPickerModal .container .buttons{width:220px;text-align:right;font-size:13px;margin-top:20px;display:flex;justify-content:flex-end}.ColorPickerModal .container .buttons .save-button{background-color:transparent;color:var(--primary-button-text);padding:6px 16px;background:var(--primary-button);border-radius:4px;border:0;height:32px;cursor:pointer;width:-moz-fit-content;width:fit-content}.ColorPickerModal .container .buttons .save-button:hover{background:var(--blue-6)}.ColorPickerModal .container .buttons .cancel-button{cursor:pointer;background:none;border:0;color:var(--secondary-button-text);padding:6px 16px;margin-right:4px;height:32px;width:-moz-fit-content;width:fit-content}.ColorPickerModal .container .buttons .cancel-button:hover{color:var(--secondary-button-hover)}.ColorPickerModal .flexbox-fix input{padding:8px!important;font-size:13px!important;border:1px solid var(--gray-6)!important;box-shadow:none!important}.ColorPickerModal .flexbox-fix input:focus{border:1px solid var(--blue-5)!important;box-shadow:none!important}.ColorPickerModal .flexbox-fix label{font-size:13px!important}",""]),t.locals={LEFT_HEADER_WIDTH:"41px",RIGHT_HEADER_WIDTH:"41px"}},1983:function(o,t,e){"use strict";e.r(t);e(19),e(11),e(13),e(8),e(14),e(10),e(9),e(12),e(16),e(15),e(20),e(18),e(26),e(27),e(25),e(22),e(29),e(28),e(45),e(23),e(24),e(48),e(46);var r=e(0),n=e.n(r),i=e(3),a=e(2),l=e(6),c=(e(78),e(17)),d=e.n(c),p=e(428),s=e(1948),u=e(5),b=e(44),f=e(340),m=(e(1916),e(172)),h=e(21);function x(o,t){return function(o){if(Array.isArray(o))return o}(o)||function(o,t){var e=null==o?null:"undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"];if(null!=e){var r,n,i,a,l=[],c=!0,d=!1;try{if(i=(e=e.call(o)).next,0===t){if(Object(e)!==e)return;c=!1}else for(;!(c=(r=i.call(e)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(o){d=!0,n=o}finally{try{if(!c&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(d)throw n}}return l}}(o,t)||function(o,t){if(!o)return;if("string"==typeof o)return y(o,t);var e=Object.prototype.toString.call(o).slice(8,-1);"Object"===e&&o.constructor&&(e=o.constructor.name);if("Map"===e||"Set"===e)return Array.from(o);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return y(o,t)}(o,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(o,t){(null==t||t>o.length)&&(t=o.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=o[e];return r}e(1479).d.prototype.componentDidUpdate=function(o,t){if(this.props.value!==this.state.value&&(o.value!==this.props.value||t.value!==this.state.value)){var e=document.activeElement;Object(h.a)()&&(e=Object(h.a)().activeElement),this.input===e?this.setState({blurValue:String(this.props.value).toUpperCase()}):this.setState({value:String(this.props.value).toUpperCase(),blurValue:!this.state.blurValue&&String(this.props.value).toUpperCase()})}};var v=function(o){var t=o.isDisabled,e=o.isOpen,i=o.color,a=o.closeModal,l=o.handleChangeSave,c=o.handleChangeCancel,h=x(Object(p.a)(),1)[0],y=x(Object(r.useState)({}),2),v=y[0],w=y[1],g=d()({Modal:!0,ColorPickerModal:!0,open:e,closed:!e});Object(r.useEffect)((function(){var o=function(o){"Escape"===o.key&&(null==o||o.stopPropagation(),null==o||o.preventDefault(),k())};return window.addEventListener("keydown",o),function(){return window.removeEventListener("keydown",o)}}),[]),Object(r.useEffect)((function(){i&&0!==i.A?w({r:i.R,g:i.G,b:i.B,a:1}):w({r:0,g:0,b:0,a:1})}),[i]);var k=Object(m.a)(a),C=Object(m.a)(c),P=Object(m.a)((function(){l(v)}));return t?null:n.a.createElement("div",{className:g,"data-element":u.a.COLOR_PICKER_MODAL,onMouseDown:a},n.a.createElement(f.a,{isOpen:e,closeHandler:k,onCloseClick:k,swipeToClose:!0,accessibleLabel:"colorPickerModal.modalTitle"},n.a.createElement("div",{className:"container",onMouseDown:function(o){return o.stopPropagation()}},n.a.createElement(s.a,{color:v,disableAlpha:!0,onChange:function(o){w(o.rgb)},presetColors:[]}),n.a.createElement("div",{className:"buttons"},n.a.createElement(b.a,{className:"cancel-button",onClick:C,label:h("action.cancel")}),n.a.createElement(b.a,{className:"save-button",onClick:P,label:h("action.ok")})))))};function w(o){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}var g=["closeColorPicker","onColorChange"];function k(o,t){var e=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),e.push.apply(e,r)}return e}function C(o){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?k(Object(e),!0).forEach((function(t){P(o,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(e)):k(Object(e)).forEach((function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(e,t))}))}return o}function P(o,t,e){return(t=function(o){var t=function(o,t){if("object"!==w(o)||null===o)return o;var e=o[Symbol.toPrimitive];if(void 0!==e){var r=e.call(o,t||"default");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(o)}(o,"string");return"symbol"===w(t)?t:String(t)}(t))in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}function O(o,t){if(null==o)return{};var e,r,n=function(o,t){if(null==o)return{};var e,r,n={},i=Object.keys(o);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(n[e]=o[e]);return n}(o,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(o);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(o,e)&&(n[e]=o[e])}return n}var M=function(o){var t=o.closeColorPicker,e=o.onColorChange,i=O(o,g),a=Object(r.useCallback)((function(){t()}),[t]),l=Object(r.useCallback)((function(){t()}),[t]),c=C(C({},i),{},{closeModal:a,handleChangeSave:function(o){e(o),t()},handleChangeCancel:l});return n.a.createElement(v,c)};function j(o){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}function S(o,t){var e=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),e.push.apply(e,r)}return e}function E(o){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?S(Object(e),!0).forEach((function(t){A(o,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(e)):S(Object(e)).forEach((function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(e,t))}))}return o}function A(o,t,e){return(t=function(o){var t=function(o,t){if("object"!==j(o)||null===o)return o;var e=o[Symbol.toPrimitive];if(void 0!==e){var r=e.call(o,t||"default");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(o)}(o,"string");return"symbol"===j(t)?t:String(t)}(t))in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}function D(o,t){return function(o){if(Array.isArray(o))return o}(o)||function(o,t){var e=null==o?null:"undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"];if(null!=e){var r,n,i,a,l=[],c=!0,d=!1;try{if(i=(e=e.call(o)).next,0===t){if(Object(e)!==e)return;c=!1}else for(;!(c=(r=i.call(e)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(o){d=!0,n=o}finally{try{if(!c&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(d)throw n}}return l}}(o,t)||function(o,t){if(!o)return;if("string"==typeof o)return T(o,t);var e=Object.prototype.toString.call(o).slice(8,-1);"Object"===e&&o.constructor&&(e=o.constructor.name);if("Map"===e||"Set"===e)return Array.from(o);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return T(o,t)}(o,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(o,t){(null==t||t>o.length)&&(t=o.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=o[e];return r}var z=function(o){var t=Object(l.d)(),e=D(Object(l.e)((function(o){return[i.a.isElementDisabled(o,"ColorPickerModal"),i.a.isElementOpen(o,"ColorPickerModal"),i.a.getCustomColor(o)]})),3),r=e[0],c=e[1],d=e[2],p=E(E({},o),{},{color:d,onColorChange:function(o){var e=new window.Core.Annotations.Color(o.r,o.g,o.b,o.a);t(a.a.setCustomColor(e))},isDisabled:r,closeColorPicker:function(){t(a.a.closeElement("ColorPickerModal"))},isOpen:c});return n.a.createElement(M,p)};t.default=z}}]);
//# sourceMappingURL=chunk.57.js.map