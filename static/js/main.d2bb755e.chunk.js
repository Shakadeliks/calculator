(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{14:function(_,e,t){},19:function(_,e,t){"use strict";t.r(e);var a=t(2),c=t.n(a),r=t(4),s=t.n(r),n=(t(14),t(5)),u=t(6),i=t(0);var l=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)(u.a,{children:[Object(i.jsx)("meta",{charSet:"utf-8"}),Object(i.jsx)("title",{children:"Calculator"}),Object(i.jsx)("link",{rel:"canonical",href:"https://shakadeliks.github.io/Calculator/"})]}),Object(i.jsx)(n.a,{})]})};s.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(l,{})}),document.getElementById("root"))},5:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Olwethu_Documents_Dev_Tasks_My_finished_products_level_2_Task_10_comp_task_calculator_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(9),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);function Calculator(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(C_Users_Olwethu_Documents_Dev_Tasks_My_finished_products_level_2_Task_10_comp_task_calculator_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),data=_useState2[0],setData=_useState2[1],calcBtns=[];return[9,8,7,6,5,4,3,2,1,0,".","%"].forEach((function(_){calcBtns.push(Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{onClick:function(_){setData(data+_.target.value)},value:_,children:_},_))})),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"wrapper",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"show-input",children:data}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"digits flex",children:calcBtns}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"modifiers subgrid",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{onClick:function(){return setData(data.substr(0,data.length-1))},children:"Clear"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{onClick:function(){return setData("")},children:"AC"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"operations subgrid",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{onClick:function(_){return setData(data+_.target.value)},value:"+",children:"+"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{onClick:function(_){return setData(data+_.target.value)},value:"-",children:"-"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{onClick:function(_){return setData(data+_.target.value)},value:"*",children:"*"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{onClick:function(_){return setData(data+_.target.value)},value:"/",children:"/"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{onClick:function onClick(e){try{setData(String(eval(data)).length>3&&String(eval(data)).includes(".")?String(eval(data).toFixed(4)):String(eval(data)))}catch(e){console.log(e)}},value:"=",children:"="})]})]})}__webpack_exports__.a=Calculator}},[[19,1,2]]]);
//# sourceMappingURL=main.d2bb755e.chunk.js.map