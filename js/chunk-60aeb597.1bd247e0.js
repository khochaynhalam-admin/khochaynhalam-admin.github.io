(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60aeb597"],{cf7a:function(t,e,s){t.exports=s.p+"img/ic_eye.72217f4a.svg"},fadd:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"products"}},[a("div",{staticClass:"d-flex justify-content-between align-items-center"},[a("h3",[t._v("Products")]),a("router-link",{staticClass:"btn btn-success",attrs:{to:{name:"product-modify"}}},[t._v("Create New Product")])],1),0!==t.products.length?a("table",{staticClass:"table my-3"},[t._m(0),a("tbody",t._l(t.products,(function(e){return a("tr",{key:e.key},[a("td",{staticClass:"font-weight-bold"},[t._v(t._s(e.id))]),a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.orders))]),a("td",[a("router-link",{staticClass:"d-flex align-items-center justify-content-end",attrs:{to:{name:"product-details",params:{id:e.id}}}},[a("img",{attrs:{src:s("cf7a"),alt:""}})])],1)])})),0)]):t._e(),0===t.products.length?a("div",[t._v("Records not found")]):t._e()])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("ID")]),s("th",[t._v("Name")]),s("th",[t._v("Orders")]),s("th",{staticClass:"text-right"},[t._v("Actions")])])])}],r=s("c05e"),c={name:"products",data:function(){return{products:[]}},created:function(){var t=this;r["a"].collection("products").get().then((function(e){e.forEach((function(e){var s={key:e.id,id:e.data().id,name:e.data().name,orders:e.data().orders};t.products.push(s)}))}))}},d=c,i=s("2877"),o=Object(i["a"])(d,a,n,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-60aeb597.1bd247e0.js.map