"use strict"
define("ember-app/app",["exports","ember-app/resolver","ember-load-initializers","ember-app/config/environment"],function(e,n,t,a){Object.defineProperty(e,"__esModule",{value:!0})
var i=Ember.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:n.default});(0,t.default)(i,a.default.modulePrefix),e.default=i}),define("ember-app/helpers/app-version",["exports","ember-app/config/environment","ember-cli-app-version/utils/regexp"],function(e,n,t){function a(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.default.APP.version,r=a.versionOnly||a.hideSha,l=a.shaOnly||a.hideVersion,o=null
return r&&(a.showExtended&&(o=i.match(t.versionExtendedRegExp)),o||(o=i.match(t.versionRegExp))),l&&(o=i.match(t.shaRegExp)),o?o[0]:i}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=a,e.default=Ember.Helper.helper(a)}),define("ember-app/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n.default}),define("ember-app/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n.default}),define("ember-app/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","ember-app/config/environment"],function(e,n,t){Object.defineProperty(e,"__esModule",{value:!0})
var a=void 0,i=void 0
t.default.APP&&(a=t.default.APP.name,i=t.default.APP.version),e.default={name:"App Version",initialize:(0,n.default)(a,i)}}),define("ember-app/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",n.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("ember-app/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:n.default}}),define("ember-app/initializers/export-application-global",["exports","ember-app/config/environment"],function(e,n){function t(){var e=arguments[1]||arguments[0]
if(!1!==n.default.exportApplicationGlobal){var t
if("undefined"!=typeof window)t=window
else if("undefined"!=typeof global)t=global
else{if("undefined"==typeof self)return
t=self}var a,i=n.default.exportApplicationGlobal
a="string"==typeof i?i:Ember.String.classify(n.default.modulePrefix),t[a]||(t[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete t[a]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=t,e.default={name:"export-application-global",initialize:t}}),define("ember-app/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:n.default}}),define("ember-app/resolver",["exports","ember-resolver"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n.default}),define("ember-app/router",["exports","ember-app/config/environment"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0})
var t=Ember.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL})
t.map(function(){}),e.default=t}),define("ember-app/routes/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({})}),define("ember-app/services/ajax",["exports","ember-ajax/services/ajax"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("ember-app/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"KRykmZdK",block:'{"symbols":[],"statements":[[0,"\\n"],[6,"div"],[10,"class","ui attached top stackable inverted menu"],[8],[0,"\\n  "],[6,"img"],[10,"class","logo"],[10,"src","assets/images/logo1-26556e07ce46a0060695532f2fe96f44.jpg"],[8],[9],[0,"\\n  "],[6,"div"],[10,"class","ui container"],[8],[0,"\\n    "],[6,"a"],[10,"class","item"],[8],[0,"\\n      "],[6,"i"],[10,"class","home icon"],[8],[9],[0," Домой\\n    "],[9],[0,"\\n    "],[6,"a"],[10,"class","item"],[8],[0,"\\n      "],[6,"i"],[10,"class","book layout icon"],[8],[9],[0," Книги\\n    "],[9],[0,"\\n    "],[6,"a"],[10,"class","item"],[8],[0,"\\n      "],[6,"i"],[10,"class","male layout icon"],[8],[9],[0," Докладчики\\n    "],[9],[0,"\\n    "],[6,"a"],[10,"class","item"],[8],[0,"\\n      "],[6,"i"],[10,"class","blogger layout icon"],[8],[9],[0," Доклады\\n    "],[9],[0,"\\n    "],[6,"a"],[10,"class","item"],[8],[0,"\\n      "],[6,"i"],[10,"class","mail layout icon"],[8],[9],[0," Заявки\\n    "],[9],[0,"\\n\\n    "],[6,"div"],[10,"class","right item"],[8],[0,"\\n      "],[6,"div"],[10,"class","ui icon input"],[8],[6,"input"],[10,"placeholder","Search..."],[10,"type","text"],[8],[9],[9],[0,"\\n    "],[9],[0,"\\n\\n    "],[6,"div"],[10,"class","ui simple dropdown item"],[8],[0,"\\n      Настройки\\n      "],[6,"i"],[10,"class","dropdown icon"],[8],[9],[0,"\\n      "],[6,"div"],[10,"class","menu"],[8],[0,"\\n        "],[6,"a"],[10,"class","item"],[8],[6,"i"],[10,"class","edit icon"],[8],[9],[0," Настройка 1"],[9],[0,"\\n        "],[6,"a"],[10,"class","item"],[8],[6,"i"],[10,"class","globe icon"],[8],[9],[0," Настройка 2"],[9],[0,"\\n        "],[6,"a"],[10,"class","item"],[8],[6,"i"],[10,"class","settings icon"],[8],[9],[0," Настройка 3"],[9],[0,"\\n      "],[9],[0,"\\n    "],[9],[0,"\\n\\n  "],[9],[0,"\\n"],[9],[0,"\\n\\n  "],[6,"div"],[10,"class","ui main sticky container content"],[8],[0,"\\n    "],[1,[20,"outlet"],false],[0,"\\n  "],[9],[0,"\\n\\n"],[6,"div"],[10,"class","ui inverted attached footer sticky fixed bottom segment"],[8],[0,"\\n    "],[6,"div"],[10,"class","ui center aligned container"],[8],[0,"\\n      Книжный клуб\\n    "],[9],[0,"\\n  "],[9]],"hasEval":false}',meta:{moduleName:"ember-app/templates/application.hbs"}})}),define("ember-app/templates/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"UfsLSlzt",block:'{"symbols":[],"statements":[[0,"\\n"],[6,"h1"],[10,"class","ui header"],[8],[0," какой-то заголовок из index.hbs "],[9],[0,"\\n"],[1,[20,"outlet"],false]],"hasEval":false}',meta:{moduleName:"ember-app/templates/index.hbs"}})}),define("ember-app/config/environment",[],function(){try{var e="ember-app/config/environment",n=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),t={default:JSON.parse(unescape(n))}
return Object.defineProperty(t,"__esModule",{value:!0}),t}catch(a){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("ember-app/app").default.create({name:"ember-app",version:"0.0.0+9dc67dfc"})
