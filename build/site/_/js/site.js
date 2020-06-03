!function(){"use strict";var s=/^sect(\d)$/,n=document.querySelector(".nav-container"),i=document.querySelector(".nav-toggle");if(n&&i){i&&i.addEventListener("click",function(e){if(i.classList.contains("is-active"))return r(e);var t=document.documentElement;t.classList.add("is-clipped--nav"),i.classList.add("is-active"),n.classList.add("is-active"),t.addEventListener("click",r),v(e)}),n&&n.addEventListener("click",v);var o=n.querySelector("[data-panel=menu]");if(!o)return;var c=n.querySelector(".nav"),l=o.querySelector(".is-current-page"),d=l;l?(u(l),m(o,l.querySelector(".nav-link"))):o.scrollTop=0,f(o,".nav-item-toggle").forEach(function(e){var t=e.parentElement;e.addEventListener("click",a.bind(t));var n=function(e,t){var n=e.nextElementSibling;if(!n)return;return(!t||n[n.matches?"matches":"msMatchesSelector"](t))&&n}(e,".nav-text");n&&(n.style.cursor="pointer",n.addEventListener("click",a.bind(t)))}),c.querySelector(".context")&&c.querySelector(".context").addEventListener("click",function(){var e=c.querySelector(".is-active[data-panel]"),t="menu"===e.dataset.panel?"explore":"menu";e.classList.toggle("is-active"),c.querySelector("[data-panel="+t+"]").classList.toggle("is-active")}),o.addEventListener("mousedown",function(e){1<e.detail&&e.preventDefault()}),o&&o.querySelector('.nav-link[href^="#"]')&&(window.location.hash&&e(),window.addEventListener("hashchange",e))}function e(){var e,t,n=window.location.hash;if(n&&(n.indexOf("%")&&(n=decodeURIComponent(n)),!(e=o.querySelector('.nav-link[href="'+n+'"]')))){var i=document.getElementById(n.slice(1));if(i)for(var a=i,c=document.querySelector("article.doc");(a=a.parentNode)&&a!==c;){var r=a.id;if(!r&&(r=a.className.match(s))&&(r=(a.firstElementChild||{}).id),r&&(e=o.querySelector('.nav-link[href="#'+r+'"]')))break}}if(e)t=e.parentNode;else{if(!d)return;e=(t=d).querySelector(".nav-link")}t!==l&&(f(o,".nav-item.is-active").forEach(function(e){e.classList.remove("is-active","is-current-path","is-current-page")}),t.classList.add("is-current-page"),u(l=t),m(o,e))}function u(e){for(var t,n=e.parentNode;!(t=n.classList).contains("nav-menu");)"LI"===n.tagName&&t.contains("nav-item")&&t.add("is-active","is-current-path"),n=n.parentNode;e.classList.add("is-active")}function a(){this.classList.toggle("is-active")}function r(e){var t=document.documentElement;t.classList.remove("is-clipped--nav"),i.classList.remove("is-active"),n.classList.remove("is-active"),t.removeEventListener("click",r),v(e)}function v(e){e.stopPropagation()}function m(e,t){var n=e.getBoundingClientRect(),i=n.height,a=window.getComputedStyle(c);"sticky"===a.position&&(i-=n.top-parseFloat(a.top)),e.scrollTop=Math.max(0,.5*(t.getBoundingClientRect().height-i)+t.offsetTop)}function f(e,t){return[].slice.call(e.querySelectorAll(t))}}();
!function(){"use strict";var e=document.querySelector("aside.toc.sidebar");if(e){if(document.querySelector("body.-toc"))return e.parentNode.removeChild(e);var t=parseInt(e.dataset.levels||2);if(!(t<0)){for(var d,n,o,c,s=document.querySelector("article.doc"),i=[],r=0;r<=t;r++)i.push(r?".sect"+r+">h"+(r+1)+"[id]":"h1[id].sect0");if(n=i.join(","),o=s,!(d=[].slice.call((o||document).querySelectorAll(n))).length)return e.parentNode.removeChild(e);var l={},u=d.reduce(function(e,t){var n=document.createElement("a");n.textContent=t.textContent,l[n.href="#"+t.id]=n;var o=document.createElement("li");return o.dataset.level=parseInt(t.nodeName.slice(1))-1,o.appendChild(n),e.appendChild(o),e},document.createElement("ul")),a=e.querySelector(".toc-menu");a||((a=document.createElement("div")).className="toc-menu");var f=document.createElement("h3");f.textContent=e.dataset.title||"Contents",a.appendChild(f),a.appendChild(u);var m,v=!document.getElementById("toc")&&s.querySelector("h1.page ~ :not(.is-before-toc)");v&&((m=document.createElement("aside")).className="toc embedded",m.appendChild(a.cloneNode(!0)),v.parentNode.insertBefore(m,v)),window.addEventListener("load",function(){p(),window.addEventListener("scroll",p)})}}function p(){var t,e=window.pageYOffset,n=1.15*h(document.documentElement,"fontSize"),o=s.offsetTop;if(e&&window.innerHeight+e+2>=document.documentElement.scrollHeight){c=Array.isArray(c)?c:Array(c||0);var i=[],r=d.length-1;return d.forEach(function(e,t){var n="#"+e.id;t===r||e.getBoundingClientRect().top+h(e,"paddingTop")>o?(i.push(n),c.indexOf(n)<0&&l[n].classList.add("is-active")):~c.indexOf(n)&&l[c.shift()].classList.remove("is-active")}),u.scrollTop=u.scrollHeight-u.offsetHeight,void(c=1<i.length?i:i[0])}if(Array.isArray(c)&&(c.forEach(function(e){l[e].classList.remove("is-active")}),c=void 0),d.some(function(e){if(e.getBoundingClientRect().top+h(e,"paddingTop")-n>o)return!0;t="#"+e.id}),t){if(t===c)return;c&&l[c].classList.remove("is-active");var a=l[t];a.classList.add("is-active"),u.scrollHeight>u.offsetHeight&&(u.scrollTop=Math.max(0,a.offsetTop+a.offsetHeight-u.offsetHeight)),c=t}else c&&(l[c].classList.remove("is-active"),c=void 0)}function h(e,t){return parseFloat(window.getComputedStyle(e)[t])}}();
!function(){"use strict";var o=document.querySelector("article.doc"),t=document.querySelector(".toolbar");function i(e){return e&&(~e.indexOf("%")?decodeURIComponent(e):e).slice(1)}function c(e){e&&(window.location.hash="#"+this.id,e.preventDefault()),window.scrollTo(0,function e(t,n){return o.contains(t)?e(t.offsetParent,t.offsetTop+n):n}(this,0)-t.getBoundingClientRect().bottom)}window.addEventListener("load",function e(t){var n,o;(n=i(window.location.hash))&&(o=document.getElementById(n))&&(c.bind(o)(),setTimeout(c.bind(o),0)),window.removeEventListener("load",e)}),Array.prototype.slice.call(document.querySelectorAll('a[href^="#"]')).forEach(function(e){var t,n;(t=i(e.hash))&&(n=document.getElementById(t))&&e.addEventListener("click",c.bind(n))})}();
!function(){"use strict";var t,e=document.querySelector(".page-versions .version-menu-toggle");e&&(t=document.querySelector(".page-versions"),e.addEventListener("click",function(e){t.classList.toggle("is-active"),e.stopPropagation()}),document.documentElement.addEventListener("click",function(){t.classList.remove("is-active")}))}();
document.addEventListener("DOMContentLoaded",function(){var t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);0!==t.length&&t.forEach(function(e){e.addEventListener("click",function(t){t.stopPropagation(),e.classList.toggle("is-active"),document.getElementById(e.dataset.target).classList.toggle("is-active"),document.documentElement.classList.toggle("is-clipped--navbar")})})});
document.addEventListener("DOMContentLoaded",function(){function l(e){var t=document.createElement("div");t.innerHTML=e,Array.from(t.querySelectorAll("i.conum, b")).map(function(e){t.removeChild(e)});var n=document.createElement("textarea");return n.innerHTML=t.innerHTML,n.value}var m=function(e,t,n){var r=document.createElement(e);return r.setAttribute("class",t),Array.isArray(n)&&n.forEach(function(e){r.appendChild(e)}),r};Array.from(document.querySelectorAll(".highlight")).map(function(e){var t=e.querySelector("code"),n=e.parentNode,r=t.innerHTML,a=t.hasAttribute("class")&&t.getAttribute("class").match(/language-([a-z0-9-])+/)[0].replace("language-",""),o=document.createElement("div");o.className="code-language",a&&(o.innerHTML=a);var c=m("button","btn btn-copy",[document.createTextNode("Copy to Clipboard")]);c.addEventListener("click",function(e){var t,n;e.preventDefault(),t=r,(n=document.createElement("textarea")).value=l(t),n.setAttribute("readonly",""),n.style.position="absolute",n.style.left="-9999px",document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n)});var d,i=[o,c];"cypher"===a&&((d=m("button","btn btn-run btn-primary",[document.createTextNode("Run in Browser")])).addEventListener("click",function(e){e.preventDefault(),d.addEventListener("click",function(e){e.preventDefault(),window.location.href="neo4j-desktop://graphapps/neo4j-browser?cmd=edit&arg="+encodeURIComponent(l(r))})}),i.push(d));var u=m("div","code-header",i);e.className+=" has-header",n.insertBefore(u,e)})});