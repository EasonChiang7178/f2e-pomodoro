(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{221:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(224),o=(n(238),n(239),n(79),n(106),n(34),n(16),n(4)),s=n(240),c=n(49),l=n(107),u=(n(35),n(10),n(226)),p=n.n(u),d=n(227),m=n.n(d),g=o.default.div.withConfig({displayName:"PlayIcon__Wrapper",componentId:"sc-1atcswe-0"})(["position:relative;vertical-align:top;cursor:pointer;"]),f=Object(o.default)(p.a).withConfig({displayName:"PlayIcon__StyledPlayIcon",componentId:"sc-1atcswe-1"})(["path:last-of-type{","}"],function(e){return"true"===e.isbreaking&&{fill:"white"}}),h=Object(o.default)(m.a).withConfig({displayName:"PlayIcon__StyledPlayHoverIcon",componentId:"sc-1atcswe-2"})(["position:absolute;top:0;left:50%;transform:translateX(-50%);opacity:0;transition:opacity .3s ease;",":hover > &{opacity:1;}path{","}"],g,function(e){return"true"===e.isbreaking&&{fill:"white"}}),k=function(e){var t=e.className,n=e.isBreaking,i=e.onClick;return a.a.createElement(g,{className:t,onClick:i},a.a.createElement(f,{isbreaking:n.toString()}),a.a.createElement(h,{isbreaking:n.toString()}))},w=n(244),y=n.n(w),C=n(19),T=o.default.div.withConfig({displayName:"PauseIcon__Wrapper",componentId:"sc-1x7a6lw-0"})(["position:relative;vertical-align:top;cursor:pointer;"]),b=Object(o.default)(y.a).withConfig({displayName:"PauseIcon__StyledPauseIcon",componentId:"sc-1x7a6lw-1"})(["g g g{","}&:hover g g g{fill:",";","}"],function(e){return"true"===e.isbreaking&&{stroke:"white"}},C.a.ACCENT_COLOR,function(e){return"true"===e.isbreaking&&{fill:"white"}}),x=function(e){var t=e.className,n=e.isBreaking,i=e.onClick;return a.a.createElement(T,{className:t,onClick:i},a.a.createElement(b,{isbreaking:n.toString()}))},v=o.default.div.withConfig({displayName:"ProgressBar__Container",componentId:"dfsczx-0"})(["width:100vw;height:17px;overflow:hidden;position:relative;opacity:0;visibility:hidden;transition:opacity .3s ease,visibility 0s linear .3s;",""],function(e){return e.show&&{opacity:1,visibility:"visible",transition:"visibility 0s linear, opacity .3s ease"}}),E=o.default.div.withConfig({displayName:"ProgressBar__ProgressWrapper",componentId:"dfsczx-1"})(["position:absolute;top:0;left:",";right:0;bottom:0;display:flex;align-items:center;transition:left 1.1s linear;"],function(e){return"-"+e.percentage+"%"}),_=o.default.div.withConfig({displayName:"ProgressBar__Progress",componentId:"dfsczx-2"})(["height:1px;width:100vw;background:",";flex:0 0 auto;"],function(e){return e.isBreaking?C.a.ACCENT_COLOR:"white"}),N=o.default.div.withConfig({displayName:"ProgressBar__Info",componentId:"dfsczx-3"})(["margin-left:8px;font-size:14px;color:",";line-height:17px;flex:0 0 auto;"],function(e){return e.isBreaking?C.a.ACCENT_COLOR:"white"}),P=o.default.button.attrs({children:"完成此代辦"}).withConfig({displayName:"FinishTaskButton",componentId:"sc-1j9pn7g-0"})(["border-radius:23px;background:transparent;border:solid 1px white;font-size:14px;padding:9px 19px;color:",";transition:border-color .3s ease,color .3s ease;cursor:pointer;&:focus{outline:none;}&:hover{border-color:",";color:",";}"],function(e){return e.isBreaking?"white":C.a.ACCENT_COLOR},C.a.ACCENT_COLOR,C.a.ACCENT_COLOR);var S=o.default.div.withConfig({displayName:"CountdownTimer__Wrapper",componentId:"i84hkg-0"})(["height:100vh;min-height:611px;padding-top:210px;display:flex;flex-direction:column;align-items:center;"]),B=o.default.h1.withConfig({displayName:"CountdownTimer__TaskName",componentId:"i84hkg-1"})(["height:25px;margin:0;margin-bottom:32px;font-size:18px;line-height:25px;font-weight:400;color:",";"],function(e){return e.isBreaking?"white":C.a.ACCENT_COLOR}),I=o.default.div.withConfig({displayName:"CountdownTimer__CountdownStyler",componentId:"i84hkg-2"})(["width:150px;margin-left:13px;margin-bottom:64px;font-size:57px;color:",";line-height:69px;"],function(e){return e.isBreaking?"white":C.a.ACCENT_COLOR}),O=o.default.div.withConfig({displayName:"CountdownTimer__CountdownControls",componentId:"i84hkg-3"})(["margin-bottom:32px;text-align:center;"]),R=o.default.div.attrs({children:"reset"}).withConfig({displayName:"CountdownTimer__Reset",componentId:"i84hkg-4"})(["margin-top:16px;font-size:22px;color:",";cursor:pointer;opacity:0;visibility:hidden;transition:opacity .3s ease,visibility 0s linear .3s;",""],function(e){return e.isBreaking?"white":C.a.ACCENT_COLOR},function(e){return e.show&&{opacity:1,visibility:"visible",transition:"visibility 0s linear, opacity .3s ease"}}),A=Object(o.default)(function(e){var t=e.className,n=e.show,i=e.text,r=e.percentage,o=void 0===r?0:r,s=e.isBreaking;return a.a.createElement(v,{className:t,show:n},a.a.createElement(E,{percentage:o},a.a.createElement(_,{isBreaking:s}),a.a.createElement(N,{isBreaking:s},i)))}).withConfig({displayName:"CountdownTimer__StyledProgressBar",componentId:"i84hkg-5"})(["margin-bottom:32px;"]),L=o.default.div.withConfig({displayName:"CountdownTimer__IterationWrapper",componentId:"i84hkg-6"})(["margin-bottom:64px;height:10px;"]),M=o.default.div.withConfig({displayName:"CountdownTimer__Dot",componentId:"i84hkg-7"})(["display:inline-block;vertical-align:top;width:10px;height:10px;border-radius:50%;background:",";& + &{margin-left:8px;}"],function(e){return e.isBreaking?"white":C.a.ACCENT_COLOR}),F=function(e){var t,n;function i(t){var n;return(n=e.call(this,t)||this).componentDidMount=function(){n.props.startTimerNow&&(n.props.setTimer({startTimerNow:!1,status:n.getNextTimerStatus()}),n.startTimer(),n.setState(function(){return{playingStatus:"playing"}}))},n.componentDidUpdate=function(){"restart"===n.props.status&&(n.pauseTimer(),n.props.setTimer({status:"none"}),n.setState(function(){return{timerTimeStamp:n.getTimerFutureTimeStamp(),timerProgressPercentage:100}}))},n.handleStartClick=function(){n.startTimer(),"paused"!==n.state.playingStatus&&n.props.setTimer({status:n.getNextTimerStatus()}),n.setState(function(){return{playingStatus:"playing"}})},n.handlePauseClick=function(){n.pauseTimer(),n.setState(function(){return{playingStatus:"paused"}})},n.handleResetButtonClick=function(){n.props.setTimer({status:"restart"}),n.setState(function(){return{playingStatus:"init"}})},n.handleCountdownTick=function(e){var t=e.total/("focusing"===n.props.status?n.props.focusMilliseconds:n.props.breakMilliseconds)*100;n.setState(function(){return{timerProgressPercentage:t}})},n.handleCountdownComplete=function(){n.setState(function(){return{timerProgressPercentage:0}}),setTimeout(function(){n.props.curFocusTaskId&&"focusing"===n.props.status&&n.props.editTask(n.props.curTaskIndex,Object.assign({},n.props.curTask,{iteration:n.props.curTask.iteration+1})),n.props.setTimer({status:n.getNextTimerStatus()}),n.setState(function(){return{timerProgressPercentage:100,timerTimeStamp:n.getTimerFutureTimeStamp()}}),"none"!==n.props.status?n.startTimer():n.setState(function(){return{playingStatus:"init"}})},1100)},n.handleFinishTaskButtonClick=function(){var e=n.props,t=e.status,i=e.curTask,a=e.editTask,r=e.finishTask,o=e.curTaskIndex,s=e.setTimer;"focusing"===t&&a(o,Object.assign({},i,{iteration:i.iteration+1})),r(i.id,o),s({status:"restart"})},n.getNextTimerStatus=function(){switch(n.props.status){case"none":return"focusing";case"focusing":return"breaking";case"breaking":default:return"none"}},n.getTimerFutureTimeStamp=function(){return"breaking"===n.props.status?Date.now()+n.props.breakMilliseconds:Date.now()+n.props.focusMilliseconds},n.countdownRenderer=function(e){var t=e.minutes,i=e.seconds;return a.a.createElement(I,{isBreaking:"breaking"===n.props.status},Object(s.b)(t)," : ",Object(s.b)(i))},n.setCountdownApi=function(e){e&&(n.countdownApi=e.getApi())},n.startTimer=function(){n.countdownApi&&n.countdownApi.start()},n.pauseTimer=function(){n.countdownApi&&n.countdownApi.pause()},n.isTimerPaused=function(){return n.countdownApi&&n.countdownApi.isPaused()},n.render=function(){var e=n.props,t=e.curTask,i=e.status,r=t&&t.name,o=t&&t.iteration||0,c="none"!==i,l="breaking"===i,u="breaking"===i?"Break ......":"Focus ......";return a.a.createElement(S,null,a.a.createElement(B,{isBreaking:l},r),a.a.createElement(s.a,{key:"breaking"!==i?"restart"===i?"r":"f":"b",date:n.state.timerTimeStamp,autoStart:!1,renderer:n.countdownRenderer,ref:n.setCountdownApi,onTick:n.handleCountdownTick,onComplete:n.handleCountdownComplete}),a.a.createElement(O,null,"playing"===n.state.playingStatus?a.a.createElement(x,{isBreaking:l,onClick:n.handlePauseClick}):a.a.createElement(k,{isBreaking:l,onClick:n.handleStartClick}),a.a.createElement(R,{isBreaking:l,show:c,onClick:n.handleResetButtonClick})),a.a.createElement(A,{isBreaking:l,show:c,percentage:100-n.state.timerProgressPercentage,text:u}),a.a.createElement(L,null,Array.from(Array(o)).map(function(e,t){return a.a.createElement(M,{key:t,isBreaking:l})})),t&&a.a.createElement(P,{isBreaking:l,onClick:n.handleFinishTaskButtonClick}))},n.countdownApi=null,n.state={timerTimeStamp:n.getTimerFutureTimeStamp(),timerProgressPercentage:100,playingStatus:"init"},n}return n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i}(a.a.PureComponent),j=function(){return a.a.createElement(c.b,null,function(e){return a.a.createElement(l.b,null,function(t){var n=t.tasks,i=t.curFocusTaskId,r=t.finishTask,o=t.editTodoTask,s=n.find(function(e){return e.id===i})||null,c=n.findIndex(function(e){return e.id===i}),l=e.showTimer,u=e.curRingtonePath,p=e.focusMilliseconds,d=e.breakMilliseconds,m=e.status,g=e.setTimer,f=e.startTimerNow;return a.a.createElement(F,{startTimerNow:f,curTask:s,curTaskIndex:c,finishTask:r,editTask:o,showTimer:l,curRingtonePath:u,focusMilliseconds:p,breakMilliseconds:d,status:m,setTimer:g})})})};t.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(r.a,{title:"平靜蕃茄鐘"}),a.a.createElement(j,null))}},224:function(e,t,n){"use strict";var i=n(225),a=n(0),r=n.n(a),o=n(228),s=n.n(o);function c(e){var t=e.description,n=e.lang,a=e.meta,o=e.title,c=i.data.site,l=t||c.siteMetadata.description;return r.a.createElement(s.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s",meta:[{name:"description",content:l},{property:"og:title",content:o},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:l}].concat(a)})}c.defaultProps={lang:"zh-TW",meta:[],description:""},t.a=c},225:function(e){e.exports={data:{site:{siteMetadata:{title:"平靜蕃茄鐘",description:"希望可以平靜下來的清清淡淡口味",author:"@EasonChiang"}}}}},226:function(e,t,n){var i=n(0);function a(e){return i.createElement("svg",e,i.createElement("g",{id:"Group_42","data-name":"Group 42",transform:"translate(-670 -407)"},[i.createElement("g",{id:"Polygon_1","data-name":"Polygon 1",transform:"translate(695 410) rotate(90)",fill:"none",key:0},[i.createElement("path",{d:"M11.143,1.429a1,1,0,0,1,1.715,0L23.091,18.486A1,1,0,0,1,22.234,20H1.766a1,1,0,0,1-.857-1.514Z",stroke:"none",key:0}),i.createElement("path",{d:"M 11.99984550476074 1.943916320800781 L 12 1.943658828735352 L 1.766189575195312 18.99999809265137 L 22.23381042480469 19.00000762939453 L 11.99984550476074 1.943916320800781 M 12 0.9436531066894531 C 12.33164501190186 0.9436531066894531 12.66329002380371 1.105487823486328 12.85748958587646 1.429159164428711 L 23.09130096435547 18.48550796508789 C 23.49122047424316 19.15202903747559 23.01110076904297 19.99999809265137 22.23381042480469 19.99999809265137 L 1.766189575195312 19.99999809265137 C 0.9888896942138672 19.99999809265137 0.5087795257568359 19.15202903747559 0.9087009429931641 18.48550796508789 L 11.14251041412354 1.429159164428711 C 11.33670997619629 1.105487823486328 11.66835498809814 0.9436531066894531 12 0.9436531066894531 Z",stroke:"none",fill:"#67abd6",key:1})]),i.createElement("rect",{id:"Rectangle_28","data-name":"Rectangle 28",width:"30",height:"30",transform:"translate(670 407)",fill:"none",key:1})]))}a.defaultProps={width:"30",height:"30",viewBox:"0 0 30 30"},e.exports=a,a.default=a},227:function(e,t,n){var i=n(0);function a(e){return i.createElement("svg",e,i.createElement("g",{id:"Group_43","data-name":"Group 43",transform:"translate(-670 -407)"},[i.createElement("path",{id:"Polygon_1","data-name":"Polygon 1",d:"M11.143,1.429a1,1,0,0,1,1.715,0L23.091,18.486A1,1,0,0,1,22.234,20H1.766a1,1,0,0,1-.857-1.514Z",transform:"translate(695 410) rotate(90)",fill:"#68abd7",key:0}),i.createElement("rect",{id:"Rectangle_28","data-name":"Rectangle 28",width:"30",height:"30",transform:"translate(670 407)",fill:"none",key:1})]))}a.defaultProps={width:"30",height:"30",viewBox:"0 0 30 30"},e.exports=a,a.default=a},244:function(e,t,n){var i=n(0);function a(e){return i.createElement("svg",e,i.createElement("g",{id:"Group_45","data-name":"Group 45",transform:"translate(-614 -402)"},[i.createElement("g",{id:"Group_10","data-name":"Group 10",transform:"translate(-110 2)",key:0},[i.createElement("g",{id:"Rectangle_12","data-name":"Rectangle 12",transform:"translate(730 403)",fill:"none",stroke:"#67abd6",strokeWidth:"1",key:0},[i.createElement("rect",{width:"8",height:"23.829",rx:"4",stroke:"none",key:0}),i.createElement("rect",{x:"0.5",y:"0.5",width:"7",height:"22.829",rx:"3.5",fill:"none",key:1})]),i.createElement("g",{id:"Rectangle_13","data-name":"Rectangle 13",transform:"translate(740.119 403)",fill:"none",stroke:"#67abd6",strokeWidth:"1",key:1},[i.createElement("rect",{width:"8",height:"23.829",rx:"4",stroke:"none",key:0}),i.createElement("rect",{x:"0.5",y:"0.5",width:"7",height:"22.829",rx:"3.5",fill:"none",key:1})])]),i.createElement("rect",{id:"Rectangle_29","data-name":"Rectangle 29",width:"30",height:"30",transform:"translate(614 402)",fill:"none",key:1})]))}a.defaultProps={width:"30",height:"30",viewBox:"0 0 30 30"},e.exports=a,a.default=a}}]);
//# sourceMappingURL=component---src-pages-index-js-1d1610e7ae32f3952ea7.js.map