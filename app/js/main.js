!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s="./src/js/main.js")}({"./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */function(module,exports){eval("window.onscroll = function () {\n  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;\n  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;\n  var scrolled = winScroll / height * 100;\n  document.getElementById(\"myBar\").style.width = scrolled + \"%\";\n\n  if (window.scrollY > 700) {\n    document.querySelector('.topNubex').classList.remove('topHide');\n    document.querySelector('.sidebar__btn').classList.remove('sidebar__btn__hide');\n  } else {\n    document.querySelector('.topNubex').classList.add('topHide');\n    document.querySelector('.sidebar__btn').classList.add('sidebar__btn__hide');\n  }\n\n  ;\n};\n\nvar btns = document.querySelectorAll('.btn');\nvar modalOverlay = document.querySelector('.modal-overlay ');\nvar modals = document.querySelectorAll('.modal');\nbtns.forEach(function (el) {\n  el.addEventListener('click', function (e) {\n    var path = e.currentTarget.getAttribute('data-path');\n    modals.forEach(function (el) {\n      el.classList.remove('modal--visible');\n    });\n    document.querySelector(\"[data-target=\\\"\".concat(path, \"\\\"]\")).classList.add('modal--visible');\n    modalOverlay.classList.add('modal-overlay--visible');\n  });\n});\nmodalOverlay.addEventListener('click', function (e) {\n  console.log(e.target);\n\n  if (e.target == modalOverlay) {\n    modalOverlay.classList.remove('modal-overlay--visible');\n    modals.forEach(function (el) {\n      el.classList.remove('modal--visible');\n    });\n  }\n});\nvar swiper = new Swiper(\".mySwiper\", {\n  spaceBetween: 0,\n  centeredSlides: true,\n  loop: true,\n  allowTouchMove: false,\n  autoplay: {\n    delay: 3500,\n    disableOnInteraction: false\n  },\n  pagination: {\n    el: \".swiper-pagination\",\n    clickable: true\n  },\n  navigation: {\n    nextEl: \".swiper-button-next\",\n    prevEl: \".swiper-button-prev\"\n  }\n});\n$(document).ready(function () {\n  $(\".accordion\").on(\"click\", \".heading\", function () {\n    $(this).toggleClass(\"active\").next().slideToggle();\n    $(\".contents\").not($(this).next()).slideUp(300);\n    $(this).siblings().removeClass(\"active\");\n  });\n});\n\n//# sourceURL=webpack:///./src/js/main.js?")}});
//# sourceMappingURL=main.js.map
