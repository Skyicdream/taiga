(function(){var n,t,e,i;window._version="v-1589301622195",window.taigaConfig={api:"http://localhost:8000/api/v1/",eventsUrl:null,tribeHost:null,eventsMaxMissedHeartbeats:5,eventsHeartbeatIntervalTime:6e4,debug:!0,defaultLanguage:"en",themes:["taiga","taiga-legacy","material-design","high-contrast"],defaultTheme:"taiga",publicRegisterEnabled:!0,feedbackEnabled:!0,supportUrl:null,privacyPolicyUrl:null,termsOfServiceUrl:null,maxUploadFileSize:null,importers:[],contribPlugins:[]},window.taigaContribPlugins=[],window._decorators=[],window.addDecorator=function(n,t){return window._decorators.push({provider:n,decorator:t})},window.getDecorators=function(){return window._decorators},e=function(n){return $("head").append('<link rel="stylesheet" href="'+n+'" type="text/css" />')},n=function(n){return new Promise(function(t,i){var o,r;return r=function(n){var i,o,r,a;if(n.isPack)for(a=n.plugins,i=0,r=a.length;i<r;i++)o=a[i],window.taigaContribPlugins.push(o);else window.taigaContribPlugins.push(n);return n.css&&e(n.css),n.js?ljs.load(n.js,t):t()},o=function(t,e,i){return console.error("Error loading plugin",n,i)},$.getJSON(n).then(r,o)})},t=function(t){var e;return e=[],_.map(t,function(t){return e.push(n(t))}),Promise.all(e)},i=$.getJSON("/conf.json"),i.done(function(n){return window.taigaConfig=_.assign({},window.taigaConfig,n)}),i.fail(function(){return console.error("Your conf.json file is not a valid json file, please review it.")}),i.always(function(){var n;return n=$.getJSON("/"+window._version+"/emojis/emojis-data.json").then(function(n){return window.emojis=n}),window.taigaConfig.contribPlugins.length>0?t(window.taigaConfig.contribPlugins).then(function(){return ljs.load("/"+window._version+"/js/app.js",function(){return n.then(function(){return angular.bootstrap(document,["taiga"])})})}):ljs.load("/"+window._version+"/js/app.js",function(){return n.then(function(){return angular.bootstrap(document,["taiga"])})})})}).call(this);