function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function removeLoader(){loading_screen.fadeOut(200,function(){loading_screen.hide()})}function newpage(){window.location=newLocation}function readURL(t){if(t.files&&t.files[0]){var e=new FileReader;e.onload=function(t){$("#avatarImg").attr("src",t.target.result)},e.readAsDataURL(t.files[0])}}var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){window.cash=function(){function t(t,e){return e=e||T,D.test(t)?e.getElementsByClassName(t.slice(1)):W.test(t)?e.getElementsByTagName(t):e.querySelectorAll(t)}function e(t){if(!E){E=T.implementation.createHTMLDocument(null);var e=E.createElement("base");e.href=T.location.href,E.head.appendChild(e)}return E.body.innerHTML=t,E.body.childNodes}function n(t){"loading"!==T.readyState?t():T.addEventListener("DOMContentLoaded",t)}function i(i,r){if(!i)return this;if(i.cash&&i!==N)return i;var o,a=i,u=0;if(B(i))a=H.test(i)?T.getElementById(i.slice(1)):z.test(i)?e(i):t(i,r);else if(q(i))return n(i),this;if(!a)return this;if(a.nodeType||a===N)this[0]=a,this.length=1;else for(o=this.length=a.length;u<o;u++)this[u]=a[u];return this}function r(t,e){return new i(t,e)}function o(t,e){for(var n=t.length,i=0;i<n&&!1!==e.call(t[i],t[i],i,t);i++);}function a(t,e){var n=t&&(t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector);return!!n&&n.call(t,e)}function u(t){return B(t)?a:t.cash?function(e){return t.is(e)}:function(t,e){return t===e}}function s(t){return r(k.call(t).filter(function(t,e,n){return n.indexOf(t)===e}))}function c(t){return t[I]=t[I]||{}}function l(t,e,n){return c(t)[e]=n}function d(t,e){var n=c(t);return void 0===n[e]&&(n[e]=t.dataset?t.dataset[e]:r(t).attr("data-"+e)),n[e]}function f(t,e){var n=c(t);n?delete n[e]:t.dataset?delete t.dataset[e]:r(t).removeAttr("data-"+name)}function h(t){return B(t)&&t.match($)}function p(t,e){return t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className)}function v(t,e,n){t.classList?t.classList.add(e):n.indexOf(" "+e+" ")&&(t.className+=" "+e)}function m(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(e,"")}function g(t,e){return parseInt(N.getComputedStyle(t[0],null)[e],10)||0}function y(t,e,n){var i=d(t,"_cashEvents")||l(t,"_cashEvents",{});i[e]=i[e]||[],i[e].push(n),t.addEventListener(e,n)}function w(t,e,n){var i,r=d(t,"_cashEvents"),a=r&&r[e];a&&(n?(t.removeEventListener(e,n),(i=a.indexOf(n))>=0&&a.splice(i,1)):(o(a,function(n){t.removeEventListener(e,n)}),a=[]))}function b(t,e){return"&"+encodeURIComponent(t)+"="+encodeURIComponent(e).replace(/%20/g,"+")}function x(t){var e=[];return o(t.options,function(t){t.selected&&e.push(t.value)}),e.length?e:null}function C(t){var e=t.selectedIndex;return e>=0?t.options[e].value:null}function A(t){var e=t.type;if(!e)return null;switch(e.toLowerCase()){case"select-one":return C(t);case"select-multiple":return x(t);case"radio":case"checkbox":return t.checked?t.value:null;default:return t.value?t.value:null}}function M(t,e,n){if(n){var i=t.childNodes[0];t.insertBefore(e,i)}else t.appendChild(e)}function L(t,e,n){var i=B(e);if(!i&&e.length)return void o(e,function(e){return L(t,e,n)});o(t,i?function(t){return t.insertAdjacentHTML(n?"afterbegin":"beforeend",e)}:function(t,i){return M(t,0===i?e:e.cloneNode(!0),n)})}var E,T=document,N=window,S=Array.prototype,k=S.slice,O=S.filter,R=S.push,_=function(){},q=function(t){return(void 0===t?"undefined":_typeof(t))===(void 0===_?"undefined":_typeof(_))&&t.call},B=function(t){return(void 0===t?"undefined":_typeof(t))===_typeof("")},H=/^#[\w-]*$/,D=/^\.[\w-]*$/,z=/<.+>/,W=/^\w+$/,P=r.fn=r.prototype=i.prototype={cash:!0,length:0,push:R,splice:S.splice,map:S.map,init:i};Object.defineProperty(P,"constructor",{value:r}),r.parseHTML=e,r.noop=_,r.isFunction=q,r.isString=B,r.extend=P.extend=function(t){t=t||{};var e=k.call(arguments),n=e.length,i=1;for(1===e.length&&(t=this,i=0);i<n;i++)if(e[i])for(var r in e[i])e[i].hasOwnProperty(r)&&(t[r]=e[i][r]);return t},r.extend({merge:function(t,e){for(var n=+e.length,i=t.length,r=0;r<n;i++,r++)t[i]=e[r];return t.length=i,t},each:o,matches:a,unique:s,isArray:Array.isArray,isNumeric:function(t){return!isNaN(parseFloat(t))&&isFinite(t)}});var I=r.uid="_cash"+Date.now();P.extend({data:function(t,e){if(B(t))return void 0===e?d(this[0],t):this.each(function(n){return l(n,t,e)});for(var n in t)this.data(n,t[n]);return this},removeData:function(t){return this.each(function(e){return f(e,t)})}});var $=/\S+/g;P.extend({addClass:function(t){var e=h(t);return e?this.each(function(t){var n=" "+t.className+" ";o(e,function(e){v(t,e,n)})}):this},attr:function(t,e){if(t){if(B(t))return void 0===e?this[0]?this[0].getAttribute?this[0].getAttribute(t):this[0][t]:void 0:this.each(function(n){n.setAttribute?n.setAttribute(t,e):n[t]=e});for(var n in t)this.attr(n,t[n]);return this}},hasClass:function(t){var e=!1,n=h(t);return n&&n.length&&this.each(function(t){return!(e=p(t,n[0]))}),e},prop:function(t,e){if(B(t))return void 0===e?this[0][t]:this.each(function(n){n[t]=e});for(var n in t)this.prop(n,t[n]);return this},removeAttr:function(t){return this.each(function(e){e.removeAttribute?e.removeAttribute(t):delete e[t]})},removeClass:function(t){if(!arguments.length)return this.attr("class","");var e=h(t);return e?this.each(function(t){o(e,function(e){m(t,e)})}):this},removeProp:function(t){return this.each(function(e){delete e[t]})},toggleClass:function(t,e){if(void 0!==e)return this[e?"addClass":"removeClass"](t);var n=h(t);return n?this.each(function(t){var e=" "+t.className+" ";o(n,function(n){p(t,n)?m(t,n):v(t,n,e)})}):this}}),P.extend({add:function(t,e){return s(r.merge(this,r(t,e)))},each:function(t){return o(this,t),this},eq:function(t){return r(this.get(t))},filter:function(t){if(!t)return this;var e=q(t)?t:u(t);return r(O.call(this,function(n){return e(n,t)}))},first:function(){return this.eq(0)},get:function(t){return void 0===t?k.call(this):t<0?this[t+this.length]:this[t]},index:function(t){var e=t?r(t)[0]:this[0],n=t?this:r(e).parent().children();return k.call(n).indexOf(e)},last:function(){return this.eq(-1)}});var F=function(){var t=/(?:^\w|[A-Z]|\b\w)/g,e=/[\s-_]+/g;return function(n){return n.replace(t,function(t,e){return t[0===e?"toLowerCase":"toUpperCase"]()}).replace(e,"")}}(),j=function(){var t={},e=document,n=e.createElement("div"),i=n.style;return function(e){if(e=F(e),t[e])return t[e];var n=e.charAt(0).toUpperCase()+e.slice(1);return o((e+" "+["webkit","moz","ms","o"].join(n+" ")+n).split(" "),function(n){if(n in i)return t[n]=e=t[e]=n,!1}),t[e]}}();r.prefixedProp=j,r.camelCase=F,P.extend({css:function(t,e){if(B(t))return t=j(t),arguments.length>1?this.each(function(n){return n.style[t]=e}):N.getComputedStyle(this[0])[t];for(var n in t)this.css(n,t[n]);return this}}),o(["Width","Height"],function(t){var e=t.toLowerCase();P[e]=function(){return this[0].getBoundingClientRect()[e]},P["inner"+t]=function(){return this[0]["client"+t]},P["outer"+t]=function(e){return this[0]["offset"+t]+(e?g(this,"margin"+("Width"===t?"Left":"Top"))+g(this,"margin"+("Width"===t?"Right":"Bottom")):0)}}),P.extend({off:function(t,e){return this.each(function(n){return w(n,t,e)})},on:function(t,e,i,r){var o;if(!B(t)){for(var u in t)this.on(u,e,t[u]);return this}return q(e)&&(i=e,e=null),"ready"===t?(n(i),this):(e&&(o=i,i=function(t){for(var n=t.target;!a(n,e);){if(n===this||null===n)return n=!1;n=n.parentNode}n&&o.call(n,t)}),this.each(function(e){var n=i;r&&(n=function(){i.apply(this,arguments),w(e,t,n)}),y(e,t,n)}))},one:function(t,e,n){return this.on(t,e,n,!0)},ready:n,trigger:function(t,e){if(document.createEvent){var n=document.createEvent("HTMLEvents");return n.initEvent(t,!0,!1),n=this.extend(n,e),this.each(function(t){return t.dispatchEvent(n)})}}}),P.extend({serialize:function(){var t="";return o(this[0].elements||this,function(e){if(!e.disabled&&"FIELDSET"!==e.tagName){var n=e.name;switch(e.type.toLowerCase()){case"file":case"reset":case"submit":case"button":break;case"select-multiple":var i=A(e);null!==i&&o(i,function(e){t+=b(n,e)});break;default:var r=A(e);null!==r&&(t+=b(n,r))}}}),t.substr(1)},val:function(t){return void 0===t?A(this[0]):this.each(function(e){return e.value=t})}}),P.extend({after:function(t){return r(t).insertAfter(this),this},append:function(t){return L(this,t),this},appendTo:function(t){return L(r(t),this),this},before:function(t){return r(t).insertBefore(this),this},clone:function(){return r(this.map(function(t){return t.cloneNode(!0)}))},empty:function(){return this.html(""),this},html:function(t){if(void 0===t)return this[0].innerHTML;var e=t.nodeType?t[0].outerHTML:t;return this.each(function(t){return t.innerHTML=e})},insertAfter:function(t){var e=this;return r(t).each(function(t,n){var i=t.parentNode,r=t.nextSibling;e.each(function(t){i.insertBefore(0===n?t:t.cloneNode(!0),r)})}),this},insertBefore:function(t){var e=this;return r(t).each(function(t,n){var i=t.parentNode;e.each(function(e){i.insertBefore(0===n?e:e.cloneNode(!0),t)})}),this},prepend:function(t){return L(this,t,!0),this},prependTo:function(t){return L(r(t),this,!0),this},remove:function(){return this.each(function(t){if(t.parentNode)return t.parentNode.removeChild(t)})},text:function(t){return void 0===t?this[0].textContent:this.each(function(e){return e.textContent=t})}});var U=T.documentElement;return P.extend({position:function(){var t=this[0];return{left:t.offsetLeft,top:t.offsetTop}},offset:function(){var t=this[0].getBoundingClientRect();return{top:t.top+N.pageYOffset-U.clientTop,left:t.left+N.pageXOffset-U.clientLeft}},offsetParent:function(){return r(this[0].offsetParent)}}),P.extend({children:function(t){var e=[];return this.each(function(t){R.apply(e,t.children)}),e=s(e),t?e.filter(function(e){return a(e,t)}):e},closest:function(t){return!t||this.length<1?r():this.is(t)?this.filter(t):this.parent().closest(t)},is:function(t){if(!t)return!1;var e=!1,n=u(t);return this.each(function(i){return!(e=n(i,t))}),e},find:function(e){if(!e||e.nodeType)return r(e&&this.has(e).length?e:null);var n=[];return this.each(function(i){R.apply(n,t(e,i))}),s(n)},has:function(e){var n=B(e)?function(n){return 0!==t(e,n).length}:function(t){return t.contains(e)};return this.filter(n)},next:function(){return r(this[0].nextElementSibling)},not:function(t){if(!t)return this;var e=u(t);return this.filter(function(n){return!e(n,t)})},parent:function(){var t=[];return this.each(function(e){e&&e.parentNode&&t.push(e.parentNode)}),s(t)},parents:function(t){var e,n=[];return this.each(function(i){for(e=i;e&&e.parentNode&&e!==T.body.parentNode;)e=e.parentNode,(!t||t&&a(e,t))&&n.push(e)}),s(n)},prev:function(){return r(this[0].previousElementSibling)},siblings:function(t){var e=this.parent().children(t),n=this[0];return e.filter(function(t){return t!==n})}}),r}()}();var Component=function(){function t(e,n,i){_classCallCheck(this,t),n instanceof Element||console.error(Error(n+" is not an HTML Element"));var r=e.getInstance(n);r&&r.destroy(),this.el=n,this.$el=cash(n)}return _createClass(t,null,[{key:"init",value:function(t,e,n){var i=null;if(e instanceof Element)i=new t(e,n);else if(e&&(e.jquery||e.cash||e instanceof NodeList)){for(var r=[],o=0;o<e.length;o++)r.push(new t(e[o],n));i=r}return i}}]),t}();!function(t){t.Package?M={}:t.M={},M.jQueryLoaded=!!t.jQuery}(window),"function"==typeof define&&define.amd?define("M",[],function(){return M}):"undefined"==typeof exports||exports.nodeType||("undefined"!=typeof module&&!module.nodeType&&module.exports&&(exports=module.exports=M),exports.default=M),M.version="1.0.0",M.keys={TAB:9,ENTER:13,ESC:27,ARROW_UP:38,ARROW_DOWN:40},M.tabPressed=!1,M.keyDown=!1;var docHandleKeydown=function(t){M.keyDown=!0,t.which!==M.keys.TAB&&t.which!==M.keys.ARROW_DOWN&&t.which!==M.keys.ARROW_UP||(M.tabPressed=!0)},docHandleKeyup=function(t){M.keyDown=!1,t.which!==M.keys.TAB&&t.which!==M.keys.ARROW_DOWN&&t.which!==M.keys.ARROW_UP||(M.tabPressed=!1)},docHandleFocus=function(t){M.keyDown&&document.body.classList.add("keyboard-focused")},docHandleBlur=function(t){document.body.classList.remove("keyboard-focused")};document.addEventListener("keydown",docHandleKeydown,!0),document.addEventListener("keyup",docHandleKeyup,!0),document.addEventListener("focus",docHandleFocus,!0),document.addEventListener("blur",docHandleBlur,!0),M.initializeJqueryWrapper=function(t,e,n){jQuery.fn[e]=function(i){if(t.prototype[i]){var r=Array.prototype.slice.call(arguments,1);if("get"===i.slice(0,3)){var o=this.first()[0][n];return o[i].apply(o,r)}return this.each(function(){var t=this[n];t[i].apply(t,r)})}if("object"===(void 0===i?"undefined":_typeof(i))||!i)return t.init(this,arguments[0]),this;jQuery.error("Method "+i+" does not exist on jQuery."+e)}},M.AutoInit=function(t){var e=t||document.body,n={Autocomplete:e.querySelectorAll(".autocomplete:not(.no-autoinit)"),Carousel:e.querySelectorAll(".carousel:not(.no-autoinit)"),Chips:e.querySelectorAll(".chips:not(.no-autoinit)"),Collapsible:e.querySelectorAll(".collapsible:not(.no-autoinit)"),Datepicker:e.querySelectorAll(".datepicker:not(.no-autoinit)"),Dropdown:e.querySelectorAll(".dropdown-trigger:not(.no-autoinit)"),Materialbox:e.querySelectorAll(".materialboxed:not(.no-autoinit)"),Modal:e.querySelectorAll(".modal:not(.no-autoinit)"),Parallax:e.querySelectorAll(".parallax:not(.no-autoinit)"),Pushpin:e.querySelectorAll(".pushpin:not(.no-autoinit)"),ScrollSpy:e.querySelectorAll(".scrollspy:not(.no-autoinit)"),FormSelect:e.querySelectorAll("select:not(.no-autoinit)"),Sidenav:e.querySelectorAll(".sidenav:not(.no-autoinit)"),Tabs:e.querySelectorAll(".tabs:not(.no-autoinit)"),TapTarget:e.querySelectorAll(".tap-target:not(.no-autoinit)"),Timepicker:e.querySelectorAll(".timepicker:not(.no-autoinit)"),Tooltip:e.querySelectorAll(".tooltipped:not(.no-autoinit)"),FloatingActionButton:e.querySelectorAll(".fixed-action-btn:not(.no-autoinit)")};for(var i in n){M[i].init(n[i])}},M.objectSelectorString=function(t){return((t.prop("tagName")||"")+(t.attr("id")||"")+(t.attr("class")||"")).replace(/\s/g,"")},M.guid=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}}(),M.escapeHash=function(t){return t.replace(/(:|\.|\[|\]|,|=|\/)/g,"\\$1")},M.elementOrParentIsFixed=function(t){var e=$(t),n=e.add(e.parents()),i=!1;return n.each(function(){if("fixed"===$(this).css("position"))return i=!0,!1}),i},M.checkWithinContainer=function(t,e,n){var i={top:!1,right:!1,bottom:!1,left:!1},r=t.getBoundingClientRect(),o=t===document.body?Math.max(r.bottom,window.innerHeight):r.bottom,a=t.scrollLeft,u=t.scrollTop,s=e.left-a,c=e.top-u;return(s<r.left+n||s<n)&&(i.left=!0),(s+e.width>r.right-n||s+e.width>window.innerWidth-n)&&(i.right=!0),(c<r.top+n||c<n)&&(i.top=!0),(c+e.height>o-n||c+e.height>window.innerHeight-n)&&(i.bottom=!0),i},M.checkPossibleAlignments=function(t,e,n,i){var r={top:!0,right:!0,bottom:!0,left:!0,spaceOnTop:null,spaceOnRight:null,spaceOnBottom:null,spaceOnLeft:null},o="visible"===getComputedStyle(e).overflow,a=e.getBoundingClientRect(),u=Math.min(a.height,window.innerHeight),s=Math.min(a.width,window.innerWidth),c=t.getBoundingClientRect(),l=e.scrollLeft,d=e.scrollTop,f=n.left-l,h=n.top-d,p=n.top+c.height-d;return r.spaceOnRight=o?window.innerWidth-(c.left+n.width):s-(f+n.width),r.spaceOnRight<0&&(r.left=!1),r.spaceOnLeft=o?c.right-n.width:f-n.width+c.width,r.spaceOnLeft<0&&(r.right=!1),r.spaceOnBottom=o?window.innerHeight-(c.top+n.height+i):u-(h+n.height+i),r.spaceOnBottom<0&&(r.top=!1),r.spaceOnTop=o?c.bottom-(n.height+i):p-(n.height-i),r.spaceOnTop<0&&(r.bottom=!1),r},M.getOverflowParent=function(t){return null==t?null:t===document.body||"visible"!==getComputedStyle(t).overflow?t:M.getOverflowParent(t.parentElement)},M.getIdFromTrigger=function(t){var e=t.getAttribute("data-target");return e||(e=t.getAttribute("href"),e=e?e.slice(1):""),e},M.getDocumentScrollTop=function(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},M.getDocumentScrollLeft=function(){return window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0};var getTime=Date.now||function(){return(new Date).getTime()};M.throttle=function(t,e,n){var i=void 0,r=void 0,o=void 0,a=null,u=0;n||(n={});var s=function(){u=!1===n.leading?0:getTime(),a=null,o=t.apply(i,r),i=r=null};return function(){var c=getTime();u||!1!==n.leading||(u=c);var l=e-(c-u);return i=this,r=arguments,l<=0?(clearTimeout(a),a=null,u=c,o=t.apply(i,r),i=r=null):a||!1===n.trailing||(a=setTimeout(s,l)),o}},function(t){M.updateTextFields=function(){t("input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea").each(function(e,n){var i=t(this);e.value.length>0||t(e).is(":focus")||e.autofocus||null!==i.attr("placeholder")?i.siblings("label").addClass("active"):e.validity?i.siblings("label").toggleClass("active",!0===e.validity.badInput):i.siblings("label").removeClass("active")})},M.validate_field=function(t){var e=null!==t.attr("data-length"),n=parseInt(t.attr("data-length")),i=t[0].value.length;0!==i||!1!==t[0].validity.badInput||t.is(":required")?t.hasClass("validate")&&(t.is(":valid")&&e&&i<=n||t.is(":valid")&&!e?(t.removeClass("invalid"),t.addClass("valid")):(t.removeClass("valid"),t.addClass("invalid"))):t.hasClass("validate")&&(t.removeClass("valid"),t.removeClass("invalid"))},M.textareaAutoResize=function(e){if(e instanceof Element&&(e=t(e)),!e.length)return void console.error("No textarea element found");var n=t(".hiddendiv").first();n.length||(n=t('<div class="hiddendiv common"></div>'),t("body").append(n));var i=e.css("font-family"),r=e.css("font-size"),o=e.css("line-height"),a=e.css("padding-top"),u=e.css("padding-right"),s=e.css("padding-bottom"),c=e.css("padding-left");r&&n.css("font-size",r),i&&n.css("font-family",i),o&&n.css("line-height",o),a&&n.css("padding-top",a),u&&n.css("padding-right",u),s&&n.css("padding-bottom",s),c&&n.css("padding-left",c),e.data("original-height")||e.data("original-height",e.height()),"off"===e.attr("wrap")&&n.css("overflow-wrap","normal").css("white-space","pre"),n.text(e[0].value+"\n");var l=n.html().replace(/\n/g,"<br>");n.html(l),e[0].offsetWidth>0&&e[0].offsetHeight>0?n.css("width",e.width()+"px"):n.css("width",window.innerWidth/2+"px"),e.data("original-height")<=n.innerHeight()?e.css("height",n.innerHeight()+"px"):e[0].value.length<e.data("previous-length")&&e.css("height",e.data("original-height")+"px"),e.data("previous-length",e[0].value.length)},t(document).ready(function(){var e="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea";t(document).on("change",e,function(){0===this.value.length&&null===t(this).attr("placeholder")||t(this).siblings("label").addClass("active"),M.validate_field(t(this))}),t(document).ready(function(){M.updateTextFields()}),t(document).on("reset",function(n){var i=t(n.target);i.is("form")&&(i.find(e).removeClass("valid").removeClass("invalid"),i.find(e).each(function(e){this.value.length&&t(this).siblings("label").removeClass("active")}),setTimeout(function(){i.find("select").each(function(){this.M_FormSelect&&t(this).trigger("change")})},0))}),document.addEventListener("focus",function(n){t(n.target).is(e)&&t(n.target).siblings("label, .prefix").addClass("active")},!0),document.addEventListener("blur",function(n){var i=t(n.target);if(i.is(e)){var r=".prefix";0===i[0].value.length&&!0!==i[0].validity.badInput&&null===i.attr("placeholder")&&(r+=", label"),i.siblings(r).removeClass("active"),M.validate_field(i)}},!0);t(document).on("keyup","input[type=radio], input[type=checkbox]",function(e){if(e.which===M.keys.TAB){t(this).addClass("tabbed");return void t(this).one("blur",function(e){t(this).removeClass("tabbed")})}});t(".materialize-textarea").each(function(){var e=t(this);e.data("original-height",e.height()),e.data("previous-length",this.value.length),M.textareaAutoResize(e)}),t(document).on("keyup",".materialize-textarea",function(){M.textareaAutoResize(t(this))}),t(document).on("keydown",".materialize-textarea",function(){M.textareaAutoResize(t(this))}),t(document).on("change",'.file-field input[type="file"]',function(){for(var e=t(this).closest(".file-field"),n=e.find("input.file-path"),i=t(this)[0].files,r=[],o=0;o<i.length;o++)r.push(i[o].name);n[0].value=r.join(", "),n.trigger("change")})})}(cash),function(t){"use strict";function e(t){return null!==t&&t===t.window}function n(t){return e(t)?t:9===t.nodeType&&t.defaultView}function i(t){var e,i,r={top:0,left:0},o=t&&t.ownerDocument;return e=o.documentElement,"undefined"!==_typeof(t.getBoundingClientRect)&&(r=t.getBoundingClientRect()),i=n(o),{top:r.top+i.pageYOffset-e.clientTop,left:r.left+i.pageXOffset-e.clientLeft}}function r(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e+=n+":"+t[n]+";");return e}function o(t){if(!1===l.allowEvent(t))return null;for(var e=null,n=t.target||t.srcElement;null!==n.parentNode;){if(!(n instanceof SVGElement)&&-1!==n.className.indexOf("waves-effect")){e=n;break}n=n.parentNode}return e}function a(e){var n=o(e);null!==n&&(c.show(e,n),"ontouchstart"in t&&(n.addEventListener("touchend",c.hide,!1),n.addEventListener("touchcancel",c.hide,!1)),n.addEventListener("mouseup",c.hide,!1),n.addEventListener("mouseleave",c.hide,!1),n.addEventListener("dragend",c.hide,!1))}var u=u||{},s=document.querySelectorAll.bind(document),c={duration:750,show:function(t,e){if(2===t.button)return!1;var n=e||this,o=document.createElement("div");o.className="waves-ripple",n.appendChild(o);var a=i(n),u=t.pageY-a.top,s=t.pageX-a.left,l="scale("+n.clientWidth/100*10+")";"touches"in t&&(u=t.touches[0].pageY-a.top,s=t.touches[0].pageX-a.left),o.setAttribute("data-hold",Date.now()),o.setAttribute("data-scale",l),o.setAttribute("data-x",s),o.setAttribute("data-y",u);var d={top:u+"px",left:s+"px"};o.className=o.className+" waves-notransition",o.setAttribute("style",r(d)),o.className=o.className.replace("waves-notransition",""),d["-webkit-transform"]=l,d["-moz-transform"]=l,d["-ms-transform"]=l,d["-o-transform"]=l,d.transform=l,d.opacity="1",d["-webkit-transition-duration"]=c.duration+"ms",d["-moz-transition-duration"]=c.duration+"ms",d["-o-transition-duration"]=c.duration+"ms",d["transition-duration"]=c.duration+"ms",d["-webkit-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",d["-moz-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",d["-o-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",d["transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",o.setAttribute("style",r(d))},hide:function(t){l.touchup(t);var e=this,n=(e.clientWidth,null),i=e.getElementsByClassName("waves-ripple");if(!(i.length>0))return!1;n=i[i.length-1];var o=n.getAttribute("data-x"),a=n.getAttribute("data-y"),u=n.getAttribute("data-scale"),s=Date.now()-Number(n.getAttribute("data-hold")),d=350-s;d<0&&(d=0),setTimeout(function(){var t={top:a+"px",left:o+"px",opacity:"0","-webkit-transition-duration":c.duration+"ms","-moz-transition-duration":c.duration+"ms","-o-transition-duration":c.duration+"ms","transition-duration":c.duration+"ms","-webkit-transform":u,"-moz-transform":u,"-ms-transform":u,"-o-transform":u,transform:u};n.setAttribute("style",r(t)),setTimeout(function(){try{e.removeChild(n)}catch(t){return!1}},c.duration)},d)},wrapInput:function(t){for(var e=0;e<t.length;e++){var n=t[e];if("input"===n.tagName.toLowerCase()){var i=n.parentNode;if("i"===i.tagName.toLowerCase()&&-1!==i.className.indexOf("waves-effect"))continue;var r=document.createElement("i");r.className=n.className+" waves-input-wrapper";var o=n.getAttribute("style");o||(o=""),r.setAttribute("style",o),n.className="waves-button-input",n.removeAttribute("style"),i.replaceChild(r,n),r.appendChild(n)}}}},l={touches:0,allowEvent:function(t){var e=!0;return"touchstart"===t.type?l.touches+=1:"touchend"===t.type||"touchcancel"===t.type?setTimeout(function(){l.touches>0&&(l.touches-=1)},500):"mousedown"===t.type&&l.touches>0&&(e=!1),e},touchup:function(t){l.allowEvent(t)}};u.displayEffect=function(e){e=e||{},"duration"in e&&(c.duration=e.duration),c.wrapInput(s(".waves-effect")),"ontouchstart"in t&&document.body.addEventListener("touchstart",a,!1),document.body.addEventListener("mousedown",a,!1)},u.attach=function(e){"input"===e.tagName.toLowerCase()&&(c.wrapInput([e]),e=e.parentNode),"ontouchstart"in t&&e.addEventListener("touchstart",a,!1),e.addEventListener("mousedown",a,!1)},t.Waves=u,document.addEventListener("DOMContentLoaded",function(){u.displayEffect()},!1)}(window),window.addEventListener("pageshow",function(t){(t.persisted||void 0!==window.performance&&2===window.performance.navigation.type)&&window.location.reload()});var loading_screen=$(".loading-screen");$(document).ready(function(){setTimeout(removeLoader,100)}),$("a:not(.dont-fade)").click(function(t){t.preventDefault(),newLocation=this.href,loading_screen.fadeIn(100,function(){loading_screen.show(),newpage()})});var avatar=$("#avatar");avatar.on("change",function(){var t=$(this).val();$(this).next(".custom-file-label").html(t)}),$("#background").on("change",function(){var t=$(this).val();$(this).next(".custom-file-label").html(t)}),avatar.change(function(){readURL(this)});
