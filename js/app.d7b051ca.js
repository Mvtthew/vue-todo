(function(t){function e(e){for(var n,r,a=e[0],u=e[1],c=e[2],d=0,f=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,a=1;a<o.length;a++){var u=o[a];0!==s[u]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=o[0]))}return t}var n={},s={app:0},i=[];function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=u;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},4822:function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("f9e3"),o("f507");var n=o("2b0e"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"container my-4"},[o("h1",[t._v("Todo's")]),o("todo-list",{staticClass:"mt-5"})],1)])},i=[],r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-list"},[o("ul",{staticClass:"list-group"},t._l(t.todoList,(function(e,n){return o("li",{key:"todo_"+n,staticClass:"list-group-item d-flex"},[o("span",{class:{done:e.done}},[t._v(t._s(n+1)+". "+t._s(e.name))]),o("button",{staticClass:"btn btn-outline-success btn-sm ml-auto",on:{click:function(e){return t.checkDone(n)}}},[0==e.done?o("span",[t._v("DONE")]):t._e(),e.done?o("span",[t._v("UNDONE")]):t._e()]),o("button",{staticClass:"btn btn-outline-danger btn-sm ml-2",on:{click:function(e){return t.deleteTodo(n)}}},[t._v("DELETE")])])})),0),o("ul",{staticClass:"list-group"},[o("li",{staticClass:"list-group-item mt-2 d-flex"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodoName,expression:"newTodoName"}],staticClass:"form-control mr-2",attrs:{type:"text"},domProps:{value:t.newTodoName},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo()},input:function(e){e.target.composing||(t.newTodoName=e.target.value)}}}),o("button",{staticClass:"btn btn-success",on:{click:function(e){return t.addTodo()}}},[t._v("Add")])])])])},a=[],u=(o("a434"),{data:function(){return{todoList:[],newTodoName:""}},created:function(){this.init()},methods:{addTodo:function(){this.newTodoName&&(this.todoList.push({name:this.newTodoName,done:!1}),this.newTodoName="",this.save())},checkDone:function(t){this.todoList[t].done=!this.todoList[t].done,this.save()},deleteTodo:function(t){this.todoList.splice(t,1),this.save()},init:function(){localStorage.getItem("todoList")?this.todoList=JSON.parse(localStorage.getItem("todoList")):localStorage.setItem("todoList",JSON.stringify(this.todoList))},save:function(){localStorage.setItem("todoList",JSON.stringify(this.todoList))}}}),c=u,l=(o("5d80"),o("2877")),d=Object(l["a"])(c,r,a,!1,null,"311ff90f",null),f=d.exports,p={name:"App",components:{TodoList:f}},m=p,v=Object(l["a"])(m,s,i,!1,null,null,null),h=v.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(h)}}).$mount("#app")},"5d80":function(t,e,o){"use strict";var n=o("4822"),s=o.n(n);s.a}});
//# sourceMappingURL=app.d7b051ca.js.map