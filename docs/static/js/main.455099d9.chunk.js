(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{231:function(module,__webpack_exports__,__webpack_require__){"use strict";var mock={AllAccounts:[{data:{fullName:"test account",roles:["ALL","Tester"]},email:"test@example.com",fullName:"test account",id:"1",roles:["ALL","Tester"]},{data:{fullName:"admin account",roles:["ALL","Admin"]},email:"admin@example.com",fullName:"admin account",id:"1",roles:["ALL","Admin"]}],AllAppInfos:[{favorite:!0,id:"4",name:"App 1",type:"APP"},{favorite:!1,id:"1",name:"App 2",type:"APP"},{favorite:!1,id:"2a",name:"App 3",type:"APP"},{favorite:!1,id:"8x",name:"App 4",type:"APP"}],AllDefinedColors:["red","green","blue","aqua","magenta"],AllDefinedRoles:["ALL","Admin","Developer","Tester"],AllDefinedTags:["Tag1","Tag2","Tag3","Tag4"],AllObjectVersions:[{name:"App 1",version:1,changelog:"First app",latest:!0,created:{on:"2018-12-08 17:07:26",by:"Test API <api@edgy.ferbinder.com>"}}],AnObject:{id:"7x",type:"CUSTOM_TYPE",name:"Small number",data:{value:"12122121343243"},version:{number:1,changelog:"First attempt",created:{on:"2018-12-08 17:01:15",by:"Test API <api@edgy.ferbinder.com>"},changed:{on:"2018-12-08 17:01:15",by:"Test API <api@edgy.ferbinder.com>"},latest:!0},acl:{"api@edgy.ferbinder.com":["c","d","f","n","p","r","t","w"]}},AnObjectAllVersions:[{id:"7x",type:"CUSTOM_TYPE",name:"Small number",data:{value:"12122121343243"},version:{number:1,changelog:"First attempt",created:{on:"2018-12-08 17:01:15",by:"Test API <api@edgy.ferbinder.com>"},changed:{on:"2018-12-08 17:01:15",by:"Test API <api@edgy.ferbinder.com>"},latest:!0},acl:{"api@edgy.ferbinder.com":["c","d","f","n","p","r","t","w"]}}],ApiKey:"1234123456781234abcdefghi",AppCfg:{data:1},AppId:"appId",AppObject:{id:"1",type:"APP-CFG",name:"Mock APP-CFG",data:{custom_field1:"Field 1",custom_field2:"Field 2"},tags:["Tag 1","Tag 2"],colors:["red","green","blue"],version:{number:2,changelog:"Mock app object",created:{on:"2018-08-26 08:56:37",by:"Test API <api@edgy.ferbinder.com>"},changed:{on:"2018-08-28 18:56:37",by:"Test API <api@edgy.ferbinder.com>"},latest:!0},owner:{id:"10",name:"Fake owner"},acl:{"api@edgy.ferbinder.com":["c","d","f","n","p","r","t","w"]}},AppObjectAllVersions:[{id:"1",type:"APP-CFG",name:"Mock APP-CFG (OLD)",data:{custom_field1:"Field 1",custom_field0:"Fields"},version:{number:1,changelog:"Mock app object (draft)",created:{on:"2018-08-26 08:56:37",by:"Test API <api@edgy.ferbinder.com>"},changed:{on:"2018-08-26 08:56:37",by:"Test API <api@edgy.ferbinder.com>"},latest:!1},owner:{id:"10",name:"Fake owner"},acl:{"api@edgy.ferbinder.com":["c","d","f","n","p","r","t","w"]}},{id:"1",type:"APP-CFG",name:"Mock APP-CFG",data:{custom_field1:"Field 1",custom_field2:"Field 2"},tags:["Tag 1","Tag 2"],colors:["red","green","blue"],version:{number:2,changelog:"Mock app object",created:{on:"2018-08-26 08:56:37",by:"Test API <api@edgy.ferbinder.com>"},changed:{on:"2018-08-28 18:56:37",by:"Test API <api@edgy.ferbinder.com>"},latest:!0},owner:{id:"10",name:"Fake owner"},acl:{"api@edgy.ferbinder.com":["c","d","f","n","p","r","t","w"]}}],AppType:"APP",AppVersion:1,BaseUrl:"https://edgy.ferbinder.com/api/@playground",FindObjects:[{id:"7x",type:"CUSTOM_TYPE",name:"Small number",data:{value:"12122121343243"},version:{number:1,changelog:"First attempt",created:{on:"2018-12-08 17:01:15",by:"Test API <api@edgy.ferbinder.com>"},changed:{on:"2018-12-08 17:01:15",by:"Test API <api@edgy.ferbinder.com>"},latest:!0},acl:{"api@edgy.ferbinder.com":["c","d","f","n","p","r","t","w"]}},{id:"7y",type:"CUSTOM_TYPE",name:"Big number",data:{value:"9898989898987"},version:{number:1,changelog:"Second attempt",created:{on:"2018-12-08 17:07:26",by:"Test API <api@edgy.ferbinder.com>"},changed:{on:"2018-12-08 17:07:26",by:"Test API <api@edgy.ferbinder.com>"},latest:!0},acl:{"api@edgy.ferbinder.com":["c","f","n","p","r","t","w"]}}],MySignature:"Test API <api@edgy.ferbinder.com>"};__webpack_exports__.a=mock},364:function(module,__webpack_exports__,__webpack_require__){"use strict";var defineProperty=__webpack_require__(9),slicedToArray=__webpack_require__(103),Api=__webpack_require__(123),Api_default=__webpack_require__.n(Api),lib=__webpack_require__(233),react=__webpack_require__(0),react_default=__webpack_require__.n(react),select_timezone_material_ui_lib=__webpack_require__(361),select_timezone_material_ui_lib_default=__webpack_require__.n(select_timezone_material_ui_lib),themed_digital_clock_lib=__webpack_require__(124),themed_digital_clock_lib_default=__webpack_require__.n(themed_digital_clock_lib),TextField=__webpack_require__(854),components_ClockDescription=react_default.a.memo(function(_ref){var onChange=_ref.onChange,_ref$value=_ref.value,value=void 0===_ref$value?"":_ref$value,handleChange=react_default.a.useCallback(function(event){onChange&&onChange(event.target.value)},[onChange]);return react_default.a.createElement(TextField.a,{label:"Description",value:value,fullWidth:!0,onChange:handleChange})}),components_ClockName=react_default.a.memo(function(_ref){var onChange=_ref.onChange,_ref$value=_ref.value,value=void 0===_ref$value?"":_ref$value,handleChange=react_default.a.useCallback(function(event){onChange&&onChange(event.target.value)},[onChange]);return react_default.a.createElement(TextField.a,{label:"Name",value:value,fullWidth:!0,onChange:handleChange})}),Grid=__webpack_require__(858),styles={clock:{height:400},container:{alignItems:"flex-end",padding:20},saveButton:{display:"inline-flex",alignItems:"center",justifyContent:"flex-end"},selectTheme:{textAlign:"center"}},components_DefineDigitalClockLayout=function DefineDigitalClockLayout(_ref){var clockDescription=_ref.clockDescription,clockName=_ref.clockName,previewClock=_ref.previewClock,saveButton=_ref.saveButton,saveMsg=_ref.saveMsg,selectTheme=_ref.selectTheme,timezone=_ref.timezone;return react_default.a.createElement(Grid.a,{container:!0,spacing:2,style:styles.container},react_default.a.createElement(Grid.a,{item:!0,xs:12,md:6},clockName),react_default.a.createElement(Grid.a,{item:!0,xs:12,md:6},timezone),react_default.a.createElement(Grid.a,{item:!0,xs:12,md:6,lg:6},clockDescription),react_default.a.createElement(Grid.a,{item:!0,xs:6,md:6,lg:3,style:styles.selectTheme},selectTheme),react_default.a.createElement(Grid.a,{item:!0,xs:6,md:12,lg:3,style:styles.saveButton},saveMsg,saveButton),react_default.a.createElement(Grid.a,{item:!0,xs:12,style:styles.clock},previewClock))},Button=__webpack_require__(859),components_SaveButton=react_default.a.memo(function(_ref){var disabled=_ref.disabled,onClick=_ref.onClick;return react_default.a.createElement(Button.a,{disabled:disabled,variant:"contained",color:"primary",onClick:onClick},"Create clock")}),labeled_switch_material_ui_lib=__webpack_require__(359),labeled_switch_material_ui_lib_default=__webpack_require__.n(labeled_switch_material_ui_lib),SelectTheme_styles={darkTheme:{color:"#222222"},lightTheme:{color:"#444444"}},components_SelectTheme=react_default.a.memo(function(_ref){var onChange=_ref.onChange;return react_default.a.createElement(labeled_switch_material_ui_lib_default.a,{labelLeft:"Dark theme",labelRight:"Light theme",styleLabelLeft:SelectTheme_styles.darkTheme,styleLabelRight:SelectTheme_styles.lightTheme,onChange:onChange})});function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(source,!0).forEach(function(key){Object(defineProperty.a)(target,key,source[key])}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}return target}var api=new Api_default.a,isEmpty=function isEmpty(str){return void 0===str||0===str.length};__webpack_exports__.a=function DefineDigitalClock(){var _React$useState=react_default.a.useState({}),_React$useState2=Object(slicedToArray.a)(_React$useState,2),formFields=_React$useState2[0],setFormFields=_React$useState2[1],_React$useState3=react_default.a.useState(),_React$useState4=Object(slicedToArray.a)(_React$useState3,2),msgSuccess=_React$useState4[0],setMsgSuccess=_React$useState4[1],_React$useState5=react_default.a.useState(),_React$useState6=Object(slicedToArray.a)(_React$useState5,2),msgError=_React$useState6[0],setMsgError=_React$useState6[1],handleClockNameChanged=react_default.a.useCallback(function(clockName){setFormFields(function(prevFormFields){return _objectSpread({},prevFormFields,{clockName:clockName})}),setMsgSuccess(void 0),setMsgError(void 0)},[]),handleTimezoneChanged=react_default.a.useCallback(function(timezoneName,timezoneOffset){setFormFields(function(prevFormFields){return _objectSpread({},prevFormFields,{timezoneName:timezoneName})}),setMsgSuccess(void 0),setMsgError(void 0)},[]),handleClockDescriptionChanged=react_default.a.useCallback(function(description){setFormFields(function(prevFormFields){return _objectSpread({},prevFormFields,{description:description})}),setMsgSuccess(void 0),setMsgError(void 0)},[]),handleThemeChanged=react_default.a.useCallback(function(useDarkTheme){setFormFields(function(prevFormFields){return _objectSpread({},prevFormFields,{useDarkTheme:useDarkTheme})}),setMsgSuccess(void 0),setMsgError(void 0)},[]),onSuccess=function onSuccess(resp){setFormFields({timezoneName:""}),setMsgSuccess(""),setMsgError(void 0)},onError=function onError(error){setMsgSuccess(void 0),setMsgError(error.message)},handleSave=react_default.a.useCallback(function(){var description=formFields.description,clockName=formFields.clockName,useDarkTheme=formFields.useDarkTheme,obj={name:clockName,data:{description:description,timezoneName:formFields.timezoneName,useDarkTheme:useDarkTheme}};api.saveAppCfg(obj,onSuccess,onError)},[formFields]),getMessage=react_default.a.useCallback(function(){return void 0!==msgSuccess?react_default.a.createElement(lib.SuccessIconWithTooltip,null):void 0!==msgError?react_default.a.createElement(lib.ErrorIconWithTooltip,{text:msgError}):void 0},[msgError,msgSuccess]),disabled=react_default.a.useMemo(function(){var clockName=formFields.clockName,timezoneName=formFields.timezoneName;return isEmpty(clockName)||isEmpty(timezoneName)},[formFields]);return react_default.a.createElement(components_DefineDigitalClockLayout,{clockName:react_default.a.createElement(components_ClockName,{value:formFields.clockName,onChange:handleClockNameChanged}),timezone:react_default.a.createElement(select_timezone_material_ui_lib_default.a,{timezoneName:formFields.timezoneName,onChange:handleTimezoneChanged}),clockDescription:react_default.a.createElement(components_ClockDescription,{value:formFields.description,onChange:handleClockDescriptionChanged}),selectTheme:react_default.a.createElement(components_SelectTheme,{onChange:handleThemeChanged}),saveMsg:getMessage(),saveButton:react_default.a.createElement(components_SaveButton,{disabled:disabled,onClick:handleSave}),previewClock:formFields.timezoneName?react_default.a.createElement(themed_digital_clock_lib_default.a,{key:formFields.timezoneName,description:formFields.description,timezoneName:formFields.timezoneName,useDarkTheme:formFields.useDarkTheme,style:{padding:20}}):void 0})}},396:function(module,exports,__webpack_require__){__webpack_require__(397),__webpack_require__(501),module.exports=__webpack_require__(502)},502:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(158);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function loadStories(){__webpack_require__(664)},module)}.call(this,__webpack_require__(274)(module))},664:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _home_rai_Workspace_edgy_apps_public_edgy_app_digital_clock_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(9),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(158),edgy_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(123),edgy_api__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(edgy_api__WEBPACK_IMPORTED_MODULE_2__),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),themed_digital_clock__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(124),themed_digital_clock__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(themed_digital_clock__WEBPACK_IMPORTED_MODULE_4__),_src_api_MockApiData__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(231),_src_components_DefineDigitalClock__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(364);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(source,!0).forEach(function(key){Object(_home_rai_Workspace_edgy_apps_public_edgy_app_digital_clock_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a)(target,key,source[key])}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}return target}var style={height:400},apiForAppCfgThemeLight=new edgy_api__WEBPACK_IMPORTED_MODULE_2___default.a(_objectSpread({},_src_api_MockApiData__WEBPACK_IMPORTED_MODULE_5__.a,{AppCfg:{useDarkTheme:!1,timezoneName:"America/New_York",description:"The time now in New York"},AppType:"APP-CFG"})),apiForAppCfgThemeDark=new edgy_api__WEBPACK_IMPORTED_MODULE_2___default.a(_objectSpread({},_src_api_MockApiData__WEBPACK_IMPORTED_MODULE_5__.a,{AppCfg:{useDarkTheme:!0,timezoneName:"Asia/Shanghai",description:"The time now in Shanghai"},AppType:"APP-CFG"}));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("App",module).addParameters({options:{showPanel:!1}}).add("the clock creator",function(){return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{style:style},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_components_DefineDigitalClock__WEBPACK_IMPORTED_MODULE_6__.a,null))}).add("the clock using the light theme",function(){return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{style:style},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(themed_digital_clock__WEBPACK_IMPORTED_MODULE_4___default.a,apiForAppCfgThemeLight.getAppCfg()))}).add("the clock using the dark theme",function(){return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{style:style},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(themed_digital_clock__WEBPACK_IMPORTED_MODULE_4___default.a,apiForAppCfgThemeDark.getAppCfg()))})}.call(this,__webpack_require__(274)(module))}},[[396,1,2]]]);
//# sourceMappingURL=main.455099d9.chunk.js.map