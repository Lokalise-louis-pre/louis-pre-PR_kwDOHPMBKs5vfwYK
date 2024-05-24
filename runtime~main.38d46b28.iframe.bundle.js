(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({105:"foundations-designTokens-zIndex-mdx",536:"overview-changelog-mdx",614:"components-Popover-Popover-stories-mdx",693:"components-Textarea-Textarea-stories-mdx",731:"components-Menu-Menu-stories-mdx",818:"components-Skeleton-Skeleton-stories-mdx",911:"components-Input-Input-stories-mdx",989:"foundations-designTokens-color-colors-mdx",995:"components-Radio-Radio-stories-mdx",1054:"components-Card-Card-stories-mdx",1237:"components-Portal-Portal-stories-mdx",1583:"overview-testing-mdx",1889:"foundations-themes-overview-stories-mdx",1893:"components-TopBanner-TopBanner-stories-mdx",2239:"components-Editable-Editable-stories-mdx",2548:"components-InputErrorMessage-InputErrorMessage-stories-mdx",2611:"components-Button-Button-stories-mdx",2667:"components-Select-Select-stories-mdx",3507:"components-Spacer-Spacer-stories-mdx",3612:"components-Label-Label-stories-mdx",4517:"components-ViewButtonGroup-ViewButtonGroup-stories-mdx",4811:"components-DateRangePicker-DateRangePicker-stories-mdx",4982:"components-Code-Code-stories-mdx",5071:"components-DatePicker-DatePicker-stories-mdx",5278:"components-Switch-Switch-stories-mdx",5512:"components-Dropzone-Dropzone-stories-mdx",5584:"foundations-designTokens-typography-typography-mdx",5606:"foundations-designTokens-space-mdx",5876:"components-ThemeProvider-ThemeProvider-stories-mdx",6025:"components-Checkbox-Checkbox-stories-mdx",6298:"components-Pagination-Pagination-stories-mdx",6513:"components-Table-Table-stories-mdx",6647:"foundations-designTokens-motion-mdx",6666:"components-Hint-Hint-stories-mdx",6675:"components-Flex-Flex-stories-mdx",7497:"components-Stats-Stats-stories-mdx",7566:"components-IconButton-IconButton-stories-mdx",7807:"foundations-icons-icons-stories",7828:"components-Loading-Loading-stories-mdx",7931:"foundations-designTokens-radius-mdx",8082:"components-Tag-Tag-stories-mdx",8143:"components-SearchInput-SearchInput-stories-mdx",8180:"components-Modal-Modal-stories-mdx",8260:"foundations-designTokens-size-mdx",8276:"foundations-icons-icons-mdx",8576:"components-Toast-Toast-stories-mdx",8835:"overview-advanced-usage-mdx",8836:"components-Avatar-Avatar-stories-mdx",9021:"components-Tabs-Tabs-stories-mdx",9062:"components-Toggle-Toggle-stories-mdx",9093:"components-Alert-Alert-stories-mdx",9306:"components-ProgressBar-ProgressBar-stories-mdx",9394:"components-Tooltip-Tooltip-stories-mdx",9590:"overview-intro-mdx",9691:"components-Link-Link-stories-mdx",9931:"components-StepWizard-StepWizard-stories-mdx"}[chunkId]||chunkId)+"."+{105:"f6f9032f",536:"6e851e9d",614:"47606ab4",693:"25b510d6",731:"6072f3e0",749:"172ba454",818:"13c2a94c",911:"7895f269",989:"d6a005bb",995:"5cf9235c",1054:"17177512",1237:"3e791e8b",1537:"98abd67f",1583:"d77e9f8a",1729:"6196b9aa",1889:"5ff7f715",1893:"fa0c77bb",2239:"ff1f55db",2548:"2b99f3d7",2611:"2b77cd43",2667:"49e290fb",3426:"7bc54509",3507:"dad14f4e",3612:"d2c31fe7",3931:"5eae7c48",3991:"c4eb8349",4517:"2208c379",4811:"441df4d0",4982:"3fc0d633",5071:"f4c1b257",5278:"0b16630a",5512:"7508c2e8",5584:"16a05660",5606:"74b1915e",5876:"c28216a1",6025:"145a39a7",6298:"24497677",6513:"cea11ecf",6607:"a25f1db0",6647:"3fb639ca",6657:"b5bb1faa",6666:"4d1ca0c1",6675:"34cb6f04",7321:"257922b7",7398:"1050b2f4",7492:"2a7b338f",7497:"0413577c",7566:"e04be3cb",7643:"9b67ff15",7807:"86a8036a",7828:"30113b8d",7931:"5f2058e9",8082:"aa3792a8",8140:"4bfd428c",8143:"50ce2818",8180:"ed94de73",8260:"0a22f1b5",8276:"8e3132c7",8354:"7e566651",8576:"2efc382c",8797:"0f5b2364",8835:"db6a8518",8836:"c91ad856",9021:"c771c4d3",9062:"751ac75a",9093:"1dd70426",9306:"143e6bca",9394:"aa2a58d3",9433:"5815c0b3",9521:"1e6ba6e0",9575:"1e30f4d6",9590:"8919b825",9691:"8d55fe82",9931:"caadcb92"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@lokalise/louis:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@lokalise/louis:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{__webpack_require__.b=document.baseURI||self.location.href;var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();