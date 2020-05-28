(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page/page.component */ "./src/app/page/page.component.ts");



class AppComponent {
    constructor() {
        this.title = 'Alfred Carn';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "page");
    } }, directives: [_page_page_component__WEBPACK_IMPORTED_MODULE_1__["PageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                /*templateUrl: './app.component.html',*/
                template: `<page></page>`,
                styleUrls: ['./app.component.sass']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/page.component */ "./src/app/page/page.component.ts");
/* harmony import */ var _page_background_background_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page/background/background.component */ "./src/app/page/background/background.component.ts");
/* harmony import */ var _page_logo_logo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page/logo/logo.component */ "./src/app/page/logo/logo.component.ts");
/* harmony import */ var _page_navigator_navigator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page/navigator/navigator.component */ "./src/app/page/navigator/navigator.component.ts");
/* harmony import */ var _page_panels_musicPanel_musicPanel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page/panels/musicPanel/musicPanel.component */ "./src/app/page/panels/musicPanel/musicPanel.component.ts");
/* harmony import */ var _widgets_movingpicture_movingpicture_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./widgets/movingpicture/movingpicture.component */ "./src/app/widgets/movingpicture/movingpicture.component.ts");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _page_page_component__WEBPACK_IMPORTED_MODULE_4__["PageComponent"],
        _page_background_background_component__WEBPACK_IMPORTED_MODULE_5__["BackgroundComponent"],
        _page_logo_logo_component__WEBPACK_IMPORTED_MODULE_6__["LogoComponent"],
        _page_navigator_navigator_component__WEBPACK_IMPORTED_MODULE_7__["NavigatorComponent"],
        _page_panels_musicPanel_musicPanel_component__WEBPACK_IMPORTED_MODULE_8__["MusicPanelComponent"],
        _widgets_movingpicture_movingpicture_component__WEBPACK_IMPORTED_MODULE_9__["MovingPictureComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _page_page_component__WEBPACK_IMPORTED_MODULE_4__["PageComponent"],
        _page_background_background_component__WEBPACK_IMPORTED_MODULE_5__["BackgroundComponent"],
        _page_logo_logo_component__WEBPACK_IMPORTED_MODULE_6__["LogoComponent"],
        _page_navigator_navigator_component__WEBPACK_IMPORTED_MODULE_7__["NavigatorComponent"],
        _page_panels_musicPanel_musicPanel_component__WEBPACK_IMPORTED_MODULE_8__["MusicPanelComponent"],
        _widgets_movingpicture_movingpicture_component__WEBPACK_IMPORTED_MODULE_9__["MovingPictureComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _page_page_component__WEBPACK_IMPORTED_MODULE_4__["PageComponent"],
                    _page_background_background_component__WEBPACK_IMPORTED_MODULE_5__["BackgroundComponent"],
                    _page_logo_logo_component__WEBPACK_IMPORTED_MODULE_6__["LogoComponent"],
                    _page_navigator_navigator_component__WEBPACK_IMPORTED_MODULE_7__["NavigatorComponent"],
                    _page_panels_musicPanel_musicPanel_component__WEBPACK_IMPORTED_MODULE_8__["MusicPanelComponent"],
                    _widgets_movingpicture_movingpicture_component__WEBPACK_IMPORTED_MODULE_9__["MovingPictureComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _page_page_component__WEBPACK_IMPORTED_MODULE_4__["PageComponent"],
                    _page_background_background_component__WEBPACK_IMPORTED_MODULE_5__["BackgroundComponent"],
                    _page_logo_logo_component__WEBPACK_IMPORTED_MODULE_6__["LogoComponent"],
                    _page_navigator_navigator_component__WEBPACK_IMPORTED_MODULE_7__["NavigatorComponent"],
                    _page_panels_musicPanel_musicPanel_component__WEBPACK_IMPORTED_MODULE_8__["MusicPanelComponent"],
                    _widgets_movingpicture_movingpicture_component__WEBPACK_IMPORTED_MODULE_9__["MovingPictureComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/page/background/background.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/page/background/background.component.ts ***!
  \*********************************************************/
/*! exports provided: BackgroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundComponent", function() { return BackgroundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BackgroundComponent {
    ngOnInit() {
        if (null == BackgroundComponent.instance) {
            BackgroundComponent.instance = this;
        }
    }
}
BackgroundComponent.instance = null;
BackgroundComponent.ɵfac = function BackgroundComponent_Factory(t) { return new (t || BackgroundComponent)(); };
BackgroundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BackgroundComponent, selectors: [["background"]], decls: 2, vars: 0, consts: [[1, "backgroundContainer", "backgroundPulse"], ["src", "assets/abstract-20457_1280.jpg", 1, "backgroundImage"]], template: function BackgroundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".backgroundContainer[_ngcontent-%COMP%]{\r\n\tposition:fixed;\r\n\tleft:0px;\r\n\ttop:0px;\r\n\twidth:100%;\r\n\theight:100%;\r\n\toverflow:hidden;\r\n}\r\n\r\n.backgroundImage[_ngcontent-%COMP%]{\r\n\t-webkit-animation-name:background_1280x853_Sequence;\r\n\t        animation-name:background_1280x853_Sequence;\r\n\t-webkit-animation-duration:20s;\r\n\t        animation-duration:20s;\t\t\t\r\n\t-webkit-animation-fill-mode: both;\t\t\t\r\n\t        animation-fill-mode: both;\r\n\t-webkit-animation-iteration-count:infinite;\r\n\t        animation-iteration-count:infinite;\r\n\tposition:absolute;\r\n}\r\n\r\n@-webkit-keyframes background_1280x853_Sequence{\r\n\tfrom{\r\n\t\tleft:-150px;\r\n\t\ttop:-150px;\r\n\t\twidth:2000px;\r\n\t\theight:1300px;\r\n\t}\r\n\t50%{\r\n\t\tbackground-position:0px 0px;\r\n\t\tbackground-size:1700px 1000px;\r\n\t\tleft:0px;\r\n\t\ttop:0px;\r\n\t\twidth:1700px;\r\n\t\theight:1000px;\r\n\t}\r\n\tto{\r\n\t\tleft:-150px;\r\n\t\ttop:-150px;\r\n\t\twidth:2000px;\r\n\t\theight:1300px;\r\n\t}\r\n}\r\n\r\n@keyframes background_1280x853_Sequence{\r\n\tfrom{\r\n\t\tleft:-150px;\r\n\t\ttop:-150px;\r\n\t\twidth:2000px;\r\n\t\theight:1300px;\r\n\t}\r\n\t50%{\r\n\t\tbackground-position:0px 0px;\r\n\t\tbackground-size:1700px 1000px;\r\n\t\tleft:0px;\r\n\t\ttop:0px;\r\n\t\twidth:1700px;\r\n\t\theight:1000px;\r\n\t}\r\n\tto{\r\n\t\tleft:-150px;\r\n\t\ttop:-150px;\r\n\t\twidth:2000px;\r\n\t\theight:1300px;\r\n\t}\r\n}\r\n\r\n.backgroundPulse[_ngcontent-%COMP%]{\r\n\t-webkit-animation-name:backgroundPulseSequence;\r\n\t        animation-name:backgroundPulseSequence;\r\n\t-webkit-animation-duration:15s;\r\n\t        animation-duration:15s;\t\r\n\t-webkit-animation-delay:4s;\t\r\n\t        animation-delay:4s;\r\n\t\r\n\t-webkit-animation-iteration-count:infinite;\r\n\t        animation-iteration-count:infinite;\r\n\topacity:0.0;\r\n}\r\n\r\n@-webkit-keyframes backgroundPulseSequence{\r\n\tfrom{opacity:0.0;}\r\n\t10%{opacity:0.04;}\r\n\t20%{opacity:0.06;}\r\n\t30%{opacity:0.07;}\r\n\t40%{opacity:0.05;}\r\n\t50%{opacity:0.04;}\r\n\t60%{opacity:0.06;}\r\n\t70%{opacity:0.04;}\r\n\t80%{opacity:0.08;}\r\n\t90%{opacity:0.03;}\r\n\tto{opacity:0.0;}\r\n}\r\n\r\n@keyframes backgroundPulseSequence{\r\n\tfrom{opacity:0.0;}\r\n\t10%{opacity:0.04;}\r\n\t20%{opacity:0.06;}\r\n\t30%{opacity:0.07;}\r\n\t40%{opacity:0.05;}\r\n\t50%{opacity:0.04;}\r\n\t60%{opacity:0.06;}\r\n\t70%{opacity:0.04;}\r\n\t80%{opacity:0.08;}\r\n\t90%{opacity:0.03;}\r\n\tto{opacity:0.0;}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9iYWNrZ3JvdW5kL2JhY2tncm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGNBQWM7Q0FDZCxRQUFRO0NBQ1IsT0FBTztDQUNQLFVBQVU7Q0FDVixXQUFXO0NBQ1gsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLG1EQUEyQztTQUEzQywyQ0FBMkM7Q0FDM0MsOEJBQXNCO1NBQXRCLHNCQUFzQjtDQUN0QixpQ0FBeUI7U0FBekIseUJBQXlCO0NBQ3pCLDBDQUFrQztTQUFsQyxrQ0FBa0M7Q0FDbEMsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0M7RUFDQyxXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0NBQ2Q7Q0FDQTtFQUNDLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0IsUUFBUTtFQUNSLE9BQU87RUFDUCxZQUFZO0VBQ1osYUFBYTtDQUNkO0NBQ0E7RUFDQyxXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0NBQ2Q7QUFDRDs7QUFyQkE7Q0FDQztFQUNDLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7Q0FDZDtDQUNBO0VBQ0MsMkJBQTJCO0VBQzNCLDZCQUE2QjtFQUM3QixRQUFRO0VBQ1IsT0FBTztFQUNQLFlBQVk7RUFDWixhQUFhO0NBQ2Q7Q0FDQTtFQUNDLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7Q0FDZDtBQUNEOztBQUVBO0NBQ0MsOENBQXNDO1NBQXRDLHNDQUFzQztDQUN0Qyw4QkFBc0I7U0FBdEIsc0JBQXNCO0NBQ3RCLDBCQUFrQjtTQUFsQixrQkFBa0I7Q0FDbEIsNEJBQTRCO0NBQzVCLDBDQUFrQztTQUFsQyxrQ0FBa0M7Q0FDbEMsV0FBVztBQUNaOztBQUVBO0NBQ0MsS0FBSyxXQUFXLENBQUM7Q0FDakIsSUFBSSxZQUFZLENBQUM7Q0FDakIsSUFBSSxZQUFZLENBQUM7Q0FDakIsSUFBSSxZQUFZLENBQUM7Q0FDakIsSUFBSSxZQUFZLENBQUM7Q0FDakIsSUFBSSxZQUFZLENBQUM7Q0FDakIsSUFBSSxZQUFZLENBQUM7Q0FDakIsSUFBSSxZQUFZLENBQUM7Q0FDakIsSUFBSSxZQUFZLENBQUM7Q0FDakIsSUFBSSxZQUFZLENBQUM7Q0FDakIsR0FBRyxXQUFXLENBQUM7QUFDaEI7O0FBWkE7Q0FDQyxLQUFLLFdBQVcsQ0FBQztDQUNqQixJQUFJLFlBQVksQ0FBQztDQUNqQixJQUFJLFlBQVksQ0FBQztDQUNqQixJQUFJLFlBQVksQ0FBQztDQUNqQixJQUFJLFlBQVksQ0FBQztDQUNqQixJQUFJLFlBQVksQ0FBQztDQUNqQixJQUFJLFlBQVksQ0FBQztDQUNqQixJQUFJLFlBQVksQ0FBQztDQUNqQixJQUFJLFlBQVksQ0FBQztDQUNqQixJQUFJLFlBQVksQ0FBQztDQUNqQixHQUFHLFdBQVcsQ0FBQztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZENvbnRhaW5lcntcclxuXHRwb3NpdGlvbjpmaXhlZDtcclxuXHRsZWZ0OjBweDtcclxuXHR0b3A6MHB4O1xyXG5cdHdpZHRoOjEwMCU7XHJcblx0aGVpZ2h0OjEwMCU7XHJcblx0b3ZlcmZsb3c6aGlkZGVuO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZEltYWdle1xyXG5cdGFuaW1hdGlvbi1uYW1lOmJhY2tncm91bmRfMTI4MHg4NTNfU2VxdWVuY2U7XHJcblx0YW5pbWF0aW9uLWR1cmF0aW9uOjIwcztcdFx0XHRcclxuXHRhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG5cdGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7XHJcblx0cG9zaXRpb246YWJzb2x1dGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYmFja2dyb3VuZF8xMjgweDg1M19TZXF1ZW5jZXtcclxuXHRmcm9te1xyXG5cdFx0bGVmdDotMTUwcHg7XHJcblx0XHR0b3A6LTE1MHB4O1xyXG5cdFx0d2lkdGg6MjAwMHB4O1xyXG5cdFx0aGVpZ2h0OjEzMDBweDtcclxuXHR9XHJcblx0NTAle1xyXG5cdFx0YmFja2dyb3VuZC1wb3NpdGlvbjowcHggMHB4O1xyXG5cdFx0YmFja2dyb3VuZC1zaXplOjE3MDBweCAxMDAwcHg7XHJcblx0XHRsZWZ0OjBweDtcclxuXHRcdHRvcDowcHg7XHJcblx0XHR3aWR0aDoxNzAwcHg7XHJcblx0XHRoZWlnaHQ6MTAwMHB4O1xyXG5cdH1cclxuXHR0b3tcclxuXHRcdGxlZnQ6LTE1MHB4O1xyXG5cdFx0dG9wOi0xNTBweDtcclxuXHRcdHdpZHRoOjIwMDBweDtcclxuXHRcdGhlaWdodDoxMzAwcHg7XHJcblx0fVxyXG59XHJcblxyXG4uYmFja2dyb3VuZFB1bHNle1xyXG5cdGFuaW1hdGlvbi1uYW1lOmJhY2tncm91bmRQdWxzZVNlcXVlbmNlO1xyXG5cdGFuaW1hdGlvbi1kdXJhdGlvbjoxNXM7XHRcclxuXHRhbmltYXRpb24tZGVsYXk6NHM7XHJcblx0LyphbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7Ki9cclxuXHRhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlO1xyXG5cdG9wYWNpdHk6MC4wO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJhY2tncm91bmRQdWxzZVNlcXVlbmNle1xyXG5cdGZyb217b3BhY2l0eTowLjA7fVxyXG5cdDEwJXtvcGFjaXR5OjAuMDQ7fVxyXG5cdDIwJXtvcGFjaXR5OjAuMDY7fVxyXG5cdDMwJXtvcGFjaXR5OjAuMDc7fVxyXG5cdDQwJXtvcGFjaXR5OjAuMDU7fVxyXG5cdDUwJXtvcGFjaXR5OjAuMDQ7fVxyXG5cdDYwJXtvcGFjaXR5OjAuMDY7fVxyXG5cdDcwJXtvcGFjaXR5OjAuMDQ7fVxyXG5cdDgwJXtvcGFjaXR5OjAuMDg7fVxyXG5cdDkwJXtvcGFjaXR5OjAuMDM7fVxyXG5cdHRve29wYWNpdHk6MC4wO31cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackgroundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'background',
                templateUrl: './background.component.html',
                styleUrls: ['./background.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/page/logo/logo.component.ts":
/*!*********************************************!*\
  !*** ./src/app/page/logo/logo.component.ts ***!
  \*********************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LogoComponent {
    ngOnInit() {
        if (null == LogoComponent.instance) {
            LogoComponent.instance = this;
        }
    }
}
LogoComponent.instance = null;
LogoComponent.ɵfac = function LogoComponent_Factory(t) { return new (t || LogoComponent)(); };
LogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoComponent, selectors: [["logo"]], decls: 4, vars: 0, consts: [[1, "logoContainer"], ["src", "assets/grass-3089790_1280.jpg", 1, "logoImage"], [1, "myName"]], template: function LogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Alfred Carn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".logoContainer[_ngcontent-%COMP%]{\r\n\t\t-webkit-animation-name:logoSequence;\r\n\t\t        animation-name:logoSequence;\r\n\t\t-webkit-animation-duration:8s;\r\n\t\t        animation-duration:8s;\t\t\t\r\n\t\t-webkit-animation-fill-mode: both;\t\t\t\r\n\t\t        animation-fill-mode: both;\r\n\t\tposition:absolute;\r\n\t\toverflow:hidden;\r\n}\r\n\r\n.myName[_ngcontent-%COMP%]{\r\n\t\tcolor:white;\r\n\t\ttext-align:center;\r\n\t\tfont:25px Calibri Light, Modern, Miriam, Arial;\r\n\t\ttext-shadow:5px 5px 10px #ffffff;\r\n\t\tletter-spacing:75px;\r\n\t\tposition:relative;\r\n\t\tleft:40px;\r\n\t\ttop:10px;\r\n}\r\n\r\n@-webkit-keyframes logoSequence{\r\n\tfrom{\r\n\t\tborder-top:1px solid black;\r\n\t\tborder-bottom:1px solid black;\r\n\t\tbackground-color:black;\r\n\t\tleft:20%;\r\n\t\ttop:45%;\r\n\t\twidth:60%;\r\n\t\theight:50px;\r\n\t\topacity:0.0;\r\n\t}\r\n\t\r\n\t50%{\r\n\t\tborder-top:2px solid #666666;\r\n\t\tborder-bottom:2px solid #666666;\r\n\t\tbackground-color:black;\r\n\t\tleft:0px;\r\n\t\ttop:45%;\r\n\t\twidth:100%;\r\n\t\theight:54px;\r\n\t\topacity:1.0;\r\n\t}\r\n\t\r\n\t51%{\r\n\t\tborder-top:2px solid #666666;\r\n\t\tborder-bottom:2px solid #666666;\r\n\t\tbackground-color:white;\r\n\t\tleft:0px;\r\n\t\ttop:45%;\r\n\t\twidth:100%;\r\n\t\theight:54px;\r\n\t\topacity:1.0;\r\n\t}\r\n\t\r\n\t55%{\r\n\t\tborder-top:2px solid #666666;\r\n\t\tborder-bottom:2px solid #666666;\r\n\t\tbackground-color:white;\r\n\t\tleft:0px;\r\n\t\ttop:45%;\r\n\t\twidth:100%;\r\n\t\theight:54px;\r\n\t\topacity:1.0;\r\n\t}\r\n\t\r\n\t60%{\r\n\t\tborder-top:1px solid #ffffff;\r\n\t\tborder-bottom:1px solid #ffffff;\r\n\t\tbackground-color:white;\r\n\t\tleft:0px;\r\n\t\ttop:45%;\r\n\t\twidth:100%;\r\n\t\theight:54px;\r\n\t\topacity:0.0;\r\n\t}\r\n\t\r\n\t61%{\r\n\t\tborder-top:1px solid #ffffff;\r\n\t\tborder-bottom:1px solid #ffffff;\r\n\t\tbackground-color:black;\r\n\t\tleft:0px;\r\n\t\ttop:45%;\r\n\t\twidth:100%;\r\n\t\theight:54px;\r\n\t\topacity:0.0;\r\n\t}\r\n\r\n\t62%{\r\n\t\tborder-top:1px solid #111111;\r\n\t\tborder-bottom:1px solid #111111;\r\n\t\tbackground-color:black;\r\n\t\tleft:0px;\r\n\t\ttop:0px;\r\n\t\twidth:100%;\r\n\t\theight:30px;\r\n\t\topacity:0.0;\r\n\t}\r\n\t\r\n\tto{\r\n\t\tborder-top:1px solid #888888;\r\n\t\tborder-bottom:1px solid #888888;\r\n\t\tbackground-color:black;\r\n\t\tleft:0px;\r\n\t\ttop:0px;\r\n\t\twidth:100%;\r\n\t\theight:54px;\r\n\t\topacity:1.0;\r\n\t}\r\n}\r\n\r\n@keyframes logoSequence{\r\n\tfrom{\r\n\t\tborder-top:1px solid black;\r\n\t\tborder-bottom:1px solid black;\r\n\t\tbackground-color:black;\r\n\t\tleft:20%;\r\n\t\ttop:45%;\r\n\t\twidth:60%;\r\n\t\theight:50px;\r\n\t\topacity:0.0;\r\n\t}\r\n\t\r\n\t50%{\r\n\t\tborder-top:2px solid #666666;\r\n\t\tborder-bottom:2px solid #666666;\r\n\t\tbackground-color:black;\r\n\t\tleft:0px;\r\n\t\ttop:45%;\r\n\t\twidth:100%;\r\n\t\theight:54px;\r\n\t\topacity:1.0;\r\n\t}\r\n\t\r\n\t51%{\r\n\t\tborder-top:2px solid #666666;\r\n\t\tborder-bottom:2px solid #666666;\r\n\t\tbackground-color:white;\r\n\t\tleft:0px;\r\n\t\ttop:45%;\r\n\t\twidth:100%;\r\n\t\theight:54px;\r\n\t\topacity:1.0;\r\n\t}\r\n\t\r\n\t55%{\r\n\t\tborder-top:2px solid #666666;\r\n\t\tborder-bottom:2px solid #666666;\r\n\t\tbackground-color:white;\r\n\t\tleft:0px;\r\n\t\ttop:45%;\r\n\t\twidth:100%;\r\n\t\theight:54px;\r\n\t\topacity:1.0;\r\n\t}\r\n\t\r\n\t60%{\r\n\t\tborder-top:1px solid #ffffff;\r\n\t\tborder-bottom:1px solid #ffffff;\r\n\t\tbackground-color:white;\r\n\t\tleft:0px;\r\n\t\ttop:45%;\r\n\t\twidth:100%;\r\n\t\theight:54px;\r\n\t\topacity:0.0;\r\n\t}\r\n\t\r\n\t61%{\r\n\t\tborder-top:1px solid #ffffff;\r\n\t\tborder-bottom:1px solid #ffffff;\r\n\t\tbackground-color:black;\r\n\t\tleft:0px;\r\n\t\ttop:45%;\r\n\t\twidth:100%;\r\n\t\theight:54px;\r\n\t\topacity:0.0;\r\n\t}\r\n\r\n\t62%{\r\n\t\tborder-top:1px solid #111111;\r\n\t\tborder-bottom:1px solid #111111;\r\n\t\tbackground-color:black;\r\n\t\tleft:0px;\r\n\t\ttop:0px;\r\n\t\twidth:100%;\r\n\t\theight:30px;\r\n\t\topacity:0.0;\r\n\t}\r\n\t\r\n\tto{\r\n\t\tborder-top:1px solid #888888;\r\n\t\tborder-bottom:1px solid #888888;\r\n\t\tbackground-color:black;\r\n\t\tleft:0px;\r\n\t\ttop:0px;\r\n\t\twidth:100%;\r\n\t\theight:54px;\r\n\t\topacity:1.0;\r\n\t}\r\n}\r\n\r\n.logoImage[_ngcontent-%COMP%]{\r\n\t\t-webkit-animation-name:logoImageSequence;\r\n\t\t        animation-name:logoImageSequence;\r\n\t\t-webkit-animation-duration:8s;\r\n\t\t        animation-duration:8s;\r\n\t\t-webkit-animation-fill-mode: both;\r\n\t\t        animation-fill-mode: both;\t\t\r\n\t\tposition:absolute;\r\n}\r\n\r\n@-webkit-keyframes logoImageSequence{\r\n\tfrom{\r\n\t\tleft:0px;\r\n\t\ttop:-1000px;\r\n\t\twidth:100%;\r\n\t\theight:853px;\r\n\t\topacity:0.0;\r\n\t}\r\n\t\r\n\t20%{\r\n\t\tleft:0px;\r\n\t\ttop:-900px;\r\n\t\twidth:100%;\r\n\t\theight:853px;\r\n\t\topacity:0.0;\r\n\t}\r\n\t\r\n\t46%{\r\n\t\tleft:0px;\r\n\t\ttop:-600px;\r\n\t\twidth:100%;\r\n\t\theight:853px;\r\n\t\topacity:0.4;\r\n\t}\r\n\t\r\n\t50%{\r\n\t\tleft:0px;\r\n\t\ttop:0px;\r\n\t\twidth:100%;\r\n\t\theight:853px;\r\n\t\topacity:1.0;\r\n\t}\r\n\t\r\n\t55%{\r\n\t\tleft:0px;\r\n\t\ttop:0px;\r\n\t\twidth:100%;\r\n\t\theight:853px;\r\n\t\topacity:0.0;\r\n\t}\r\n\t\r\n\tto{\r\n\t\tleft:0px;\r\n\t\ttop:-400px;\r\n\t\twidth:100%;\r\n\t\theight:853px;\r\n\t\topacity:0.6;\r\n\t}\r\n}\r\n\r\n@keyframes logoImageSequence{\r\n\tfrom{\r\n\t\tleft:0px;\r\n\t\ttop:-1000px;\r\n\t\twidth:100%;\r\n\t\theight:853px;\r\n\t\topacity:0.0;\r\n\t}\r\n\t\r\n\t20%{\r\n\t\tleft:0px;\r\n\t\ttop:-900px;\r\n\t\twidth:100%;\r\n\t\theight:853px;\r\n\t\topacity:0.0;\r\n\t}\r\n\t\r\n\t46%{\r\n\t\tleft:0px;\r\n\t\ttop:-600px;\r\n\t\twidth:100%;\r\n\t\theight:853px;\r\n\t\topacity:0.4;\r\n\t}\r\n\t\r\n\t50%{\r\n\t\tleft:0px;\r\n\t\ttop:0px;\r\n\t\twidth:100%;\r\n\t\theight:853px;\r\n\t\topacity:1.0;\r\n\t}\r\n\t\r\n\t55%{\r\n\t\tleft:0px;\r\n\t\ttop:0px;\r\n\t\twidth:100%;\r\n\t\theight:853px;\r\n\t\topacity:0.0;\r\n\t}\r\n\t\r\n\tto{\r\n\t\tleft:0px;\r\n\t\ttop:-400px;\r\n\t\twidth:100%;\r\n\t\theight:853px;\r\n\t\topacity:0.6;\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9sb2dvL2xvZ28uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsNkJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQixpQ0FBeUI7VUFBekIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQiw4Q0FBOEM7RUFDOUMsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsU0FBUztFQUNULFFBQVE7QUFDVjs7QUFFQTtDQUNDO0VBQ0MsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLE9BQU87RUFDUCxTQUFTO0VBQ1QsV0FBVztFQUNYLFdBQVc7Q0FDWjs7Q0FFQTtFQUNDLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0Isc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUixPQUFPO0VBQ1AsVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFXO0NBQ1o7O0NBRUE7RUFDQyw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IsT0FBTztFQUNQLFVBQVU7RUFDVixXQUFXO0VBQ1gsV0FBVztDQUNaOztDQUVBO0VBQ0MsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLE9BQU87RUFDUCxVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7Q0FDWjs7Q0FFQTtFQUNDLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0Isc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUixPQUFPO0VBQ1AsVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFXO0NBQ1o7O0NBRUE7RUFDQyw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IsT0FBTztFQUNQLFVBQVU7RUFDVixXQUFXO0VBQ1gsV0FBVztDQUNaOztDQUVBO0VBQ0MsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLE9BQU87RUFDUCxVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7Q0FDWjs7Q0FFQTtFQUNDLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0Isc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUixPQUFPO0VBQ1AsVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFXO0NBQ1o7QUFDRDs7QUF4RkE7Q0FDQztFQUNDLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCxXQUFXO0NBQ1o7O0NBRUE7RUFDQyw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IsT0FBTztFQUNQLFVBQVU7RUFDVixXQUFXO0VBQ1gsV0FBVztDQUNaOztDQUVBO0VBQ0MsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLE9BQU87RUFDUCxVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7Q0FDWjs7Q0FFQTtFQUNDLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0Isc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUixPQUFPO0VBQ1AsVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFXO0NBQ1o7O0NBRUE7RUFDQyw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IsT0FBTztFQUNQLFVBQVU7RUFDVixXQUFXO0VBQ1gsV0FBVztDQUNaOztDQUVBO0VBQ0MsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLE9BQU87RUFDUCxVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7Q0FDWjs7Q0FFQTtFQUNDLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0Isc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUixPQUFPO0VBQ1AsVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFXO0NBQ1o7O0NBRUE7RUFDQyw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IsT0FBTztFQUNQLFVBQVU7RUFDVixXQUFXO0VBQ1gsV0FBVztDQUNaO0FBQ0Q7O0FBRUE7RUFDRSx3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0VBQ2hDLDZCQUFxQjtVQUFyQixxQkFBcUI7RUFDckIsaUNBQXlCO1VBQXpCLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7Q0FDQztFQUNDLFFBQVE7RUFDUixXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0NBQ1o7O0NBRUE7RUFDQyxRQUFRO0VBQ1IsVUFBVTtFQUNWLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztDQUNaOztDQUVBO0VBQ0MsUUFBUTtFQUNSLFVBQVU7RUFDVixVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7Q0FDWjs7Q0FFQTtFQUNDLFFBQVE7RUFDUixPQUFPO0VBQ1AsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0NBQ1o7O0NBRUE7RUFDQyxRQUFRO0VBQ1IsT0FBTztFQUNQLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztDQUNaOztDQUVBO0VBQ0MsUUFBUTtFQUNSLFVBQVU7RUFDVixVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7Q0FDWjtBQUNEOztBQWhEQTtDQUNDO0VBQ0MsUUFBUTtFQUNSLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7Q0FDWjs7Q0FFQTtFQUNDLFFBQVE7RUFDUixVQUFVO0VBQ1YsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0NBQ1o7O0NBRUE7RUFDQyxRQUFRO0VBQ1IsVUFBVTtFQUNWLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztDQUNaOztDQUVBO0VBQ0MsUUFBUTtFQUNSLE9BQU87RUFDUCxVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7Q0FDWjs7Q0FFQTtFQUNDLFFBQVE7RUFDUixPQUFPO0VBQ1AsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0NBQ1o7O0NBRUE7RUFDQyxRQUFRO0VBQ1IsVUFBVTtFQUNWLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztDQUNaO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9wYWdlL2xvZ28vbG9nby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ29Db250YWluZXJ7XHJcblx0XHRhbmltYXRpb24tbmFtZTpsb2dvU2VxdWVuY2U7XHJcblx0XHRhbmltYXRpb24tZHVyYXRpb246OHM7XHRcdFx0XHJcblx0XHRhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG5cdFx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0XHRvdmVyZmxvdzpoaWRkZW47XHJcbn1cclxuXHJcbi5teU5hbWV7XHJcblx0XHRjb2xvcjp3aGl0ZTtcclxuXHRcdHRleHQtYWxpZ246Y2VudGVyO1xyXG5cdFx0Zm9udDoyNXB4IENhbGlicmkgTGlnaHQsIE1vZGVybiwgTWlyaWFtLCBBcmlhbDtcclxuXHRcdHRleHQtc2hhZG93OjVweCA1cHggMTBweCAjZmZmZmZmO1xyXG5cdFx0bGV0dGVyLXNwYWNpbmc6NzVweDtcclxuXHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0bGVmdDo0MHB4O1xyXG5cdFx0dG9wOjEwcHg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbG9nb1NlcXVlbmNle1xyXG5cdGZyb217XHJcblx0XHRib3JkZXItdG9wOjFweCBzb2xpZCBibGFjaztcclxuXHRcdGJvcmRlci1ib3R0b206MXB4IHNvbGlkIGJsYWNrO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuXHRcdGxlZnQ6MjAlO1xyXG5cdFx0dG9wOjQ1JTtcclxuXHRcdHdpZHRoOjYwJTtcclxuXHRcdGhlaWdodDo1MHB4O1xyXG5cdFx0b3BhY2l0eTowLjA7XHJcblx0fVxyXG5cdFxyXG5cdDUwJXtcclxuXHRcdGJvcmRlci10b3A6MnB4IHNvbGlkICM2NjY2NjY7XHJcblx0XHRib3JkZXItYm90dG9tOjJweCBzb2xpZCAjNjY2NjY2O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuXHRcdGxlZnQ6MHB4O1xyXG5cdFx0dG9wOjQ1JTtcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0XHRoZWlnaHQ6NTRweDtcclxuXHRcdG9wYWNpdHk6MS4wO1xyXG5cdH1cclxuXHRcclxuXHQ1MSV7XHJcblx0XHRib3JkZXItdG9wOjJweCBzb2xpZCAjNjY2NjY2O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbToycHggc29saWQgIzY2NjY2NjtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcblx0XHRsZWZ0OjBweDtcclxuXHRcdHRvcDo0NSU7XHJcblx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0aGVpZ2h0OjU0cHg7XHJcblx0XHRvcGFjaXR5OjEuMDtcclxuXHR9XHJcblx0XHJcblx0NTUle1xyXG5cdFx0Ym9yZGVyLXRvcDoycHggc29saWQgIzY2NjY2NjtcclxuXHRcdGJvcmRlci1ib3R0b206MnB4IHNvbGlkICM2NjY2NjY7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5cdFx0bGVmdDowcHg7XHJcblx0XHR0b3A6NDUlO1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHRcdGhlaWdodDo1NHB4O1xyXG5cdFx0b3BhY2l0eToxLjA7XHJcblx0fVxyXG5cdFxyXG5cdDYwJXtcclxuXHRcdGJvcmRlci10b3A6MXB4IHNvbGlkICNmZmZmZmY7XHJcblx0XHRib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZmZmZmZmO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuXHRcdGxlZnQ6MHB4O1xyXG5cdFx0dG9wOjQ1JTtcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0XHRoZWlnaHQ6NTRweDtcclxuXHRcdG9wYWNpdHk6MC4wO1xyXG5cdH1cclxuXHRcclxuXHQ2MSV7XHJcblx0XHRib3JkZXItdG9wOjFweCBzb2xpZCAjZmZmZmZmO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2ZmZmZmZjtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcblx0XHRsZWZ0OjBweDtcclxuXHRcdHRvcDo0NSU7XHJcblx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0aGVpZ2h0OjU0cHg7XHJcblx0XHRvcGFjaXR5OjAuMDtcclxuXHR9XHJcblxyXG5cdDYyJXtcclxuXHRcdGJvcmRlci10b3A6MXB4IHNvbGlkICMxMTExMTE7XHJcblx0XHRib3JkZXItYm90dG9tOjFweCBzb2xpZCAjMTExMTExO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuXHRcdGxlZnQ6MHB4O1xyXG5cdFx0dG9wOjBweDtcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0XHRoZWlnaHQ6MzBweDtcclxuXHRcdG9wYWNpdHk6MC4wO1xyXG5cdH1cclxuXHRcclxuXHR0b3tcclxuXHRcdGJvcmRlci10b3A6MXB4IHNvbGlkICM4ODg4ODg7XHJcblx0XHRib3JkZXItYm90dG9tOjFweCBzb2xpZCAjODg4ODg4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuXHRcdGxlZnQ6MHB4O1xyXG5cdFx0dG9wOjBweDtcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0XHRoZWlnaHQ6NTRweDtcclxuXHRcdG9wYWNpdHk6MS4wO1xyXG5cdH1cclxufVxyXG5cclxuLmxvZ29JbWFnZXtcclxuXHRcdGFuaW1hdGlvbi1uYW1lOmxvZ29JbWFnZVNlcXVlbmNlO1xyXG5cdFx0YW5pbWF0aW9uLWR1cmF0aW9uOjhzO1xyXG5cdFx0YW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcdFx0XHJcblx0XHRwb3NpdGlvbjphYnNvbHV0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBsb2dvSW1hZ2VTZXF1ZW5jZXtcclxuXHRmcm9te1xyXG5cdFx0bGVmdDowcHg7XHJcblx0XHR0b3A6LTEwMDBweDtcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0XHRoZWlnaHQ6ODUzcHg7XHJcblx0XHRvcGFjaXR5OjAuMDtcclxuXHR9XHJcblx0XHJcblx0MjAle1xyXG5cdFx0bGVmdDowcHg7XHJcblx0XHR0b3A6LTkwMHB4O1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHRcdGhlaWdodDo4NTNweDtcclxuXHRcdG9wYWNpdHk6MC4wO1xyXG5cdH1cclxuXHRcclxuXHQ0NiV7XHJcblx0XHRsZWZ0OjBweDtcclxuXHRcdHRvcDotNjAwcHg7XHJcblx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0aGVpZ2h0Ojg1M3B4O1xyXG5cdFx0b3BhY2l0eTowLjQ7XHJcblx0fVxyXG5cdFxyXG5cdDUwJXtcclxuXHRcdGxlZnQ6MHB4O1xyXG5cdFx0dG9wOjBweDtcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0XHRoZWlnaHQ6ODUzcHg7XHJcblx0XHRvcGFjaXR5OjEuMDtcclxuXHR9XHJcblx0XHJcblx0NTUle1xyXG5cdFx0bGVmdDowcHg7XHJcblx0XHR0b3A6MHB4O1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHRcdGhlaWdodDo4NTNweDtcclxuXHRcdG9wYWNpdHk6MC4wO1xyXG5cdH1cclxuXHRcclxuXHR0b3tcclxuXHRcdGxlZnQ6MHB4O1xyXG5cdFx0dG9wOi00MDBweDtcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0XHRoZWlnaHQ6ODUzcHg7XHJcblx0XHRvcGFjaXR5OjAuNjtcclxuXHR9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'logo',
                templateUrl: './logo.component.html',
                styleUrls: ['./logo.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/page/navigator/navigator.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/page/navigator/navigator.component.ts ***!
  \*******************************************************/
/*! exports provided: NavigatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorComponent", function() { return NavigatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _panels_musicPanel_musicPanel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../panels/musicPanel/musicPanel.component */ "./src/app/page/panels/musicPanel/musicPanel.component.ts");




class NavigatorComponent {
    ngOnInit() { }
    prevOnClick() {
        var b = document.getElementById("navigatorPrev");
        this.buttonOnClick(b);
        _panels_musicPanel_musicPanel_component__WEBPACK_IMPORTED_MODULE_1__["MusicPanelComponent"].instance.prevFrame();
    }
    nextOnClick() {
        var b = document.getElementById("navigatorNext");
        this.buttonOnClick(b);
        _panels_musicPanel_musicPanel_component__WEBPACK_IMPORTED_MODULE_1__["MusicPanelComponent"].instance.nextFrame();
    }
    buttonOnClick(b) {
        b.style.animationName = "navigatorClickSequence";
        b.style.animationDuration = "0.5s";
        b.style.animationFillMode = "both";
        setTimeout(() => { b.style.animationName = ""; }, 600);
    }
}
NavigatorComponent.ɵfac = function NavigatorComponent_Factory(t) { return new (t || NavigatorComponent)(); };
NavigatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigatorComponent, selectors: [["navigator"]], inputs: { id: "id" }, decls: 7, vars: 0, consts: [[1, "navigatorPositioner"], ["id", "navigatorPrev", 1, "navigatorButton", "navigatorPrev", 3, "click"], [1, "navigatorArrow"], ["id", "navigatorNext", 1, "navigatorButton", "navigatorNext", 3, "click"]], template: function NavigatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigatorComponent_Template_div_click_1_listener() { return ctx.prevOnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigatorComponent_Template_div_click_4_listener() { return ctx.nextOnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".navigatorPositioner[_ngcontent-%COMP%]{\r\n\t-webkit-animation-name:navigatorSequence;\r\n\t        animation-name:navigatorSequence;\r\n\t-webkit-animation-duration:8s;\r\n\t        animation-duration:8s;\t\t\t\r\n\t-webkit-animation-fill-mode: both;\t\t\t\r\n\t        animation-fill-mode: both;\r\n\t\r\n\tborder:0px solid white;\r\n\tposition:absolute;\r\n}\r\n\r\n@-webkit-keyframes navigatorSequence{\r\n\tfrom{\r\n\t\tborder:0px solid white;\r\n\t\tposition:absolute;\r\n\t\tleft:50%;\r\n\t\ttop:600px;\r\n\t\twidth:1px;\r\n\t\theight:1px;\r\n\t\topacity:0.0;\r\n\t\ttransform:scale(0.0, 0.0);\r\n\t}\r\n\t\r\n\t89%{\r\n\t\ttransform:scale(0.0, 0.0);\r\n\t}\r\n\t\r\n\t90%{\r\n\t\tborder:0px solid white;\r\n\t\tposition:absolute;\r\n\t\tleft:50%;\r\n\t\ttop:600px;\r\n\t\twidth:1px;\r\n\t\theight:1px;\r\n\t\topacity:0.0;\r\n\t\ttransform:scale(0.8, 0.8);\r\n\t}\r\n\t\r\n\tto{\r\n\t\tborder:0px solid white;\r\n\t\tposition:absolute;\r\n\t\tleft:50%;\r\n\t\ttop:600px;\r\n\t\twidth:1px;\r\n\t\theight:1px;\r\n\t\topacity:1.0;\r\n\t\ttransform:scale(1.0, 1.0);\r\n\t}\r\n}\r\n\r\n@keyframes navigatorSequence{\r\n\tfrom{\r\n\t\tborder:0px solid white;\r\n\t\tposition:absolute;\r\n\t\tleft:50%;\r\n\t\ttop:600px;\r\n\t\twidth:1px;\r\n\t\theight:1px;\r\n\t\topacity:0.0;\r\n\t\ttransform:scale(0.0, 0.0);\r\n\t}\r\n\t\r\n\t89%{\r\n\t\ttransform:scale(0.0, 0.0);\r\n\t}\r\n\t\r\n\t90%{\r\n\t\tborder:0px solid white;\r\n\t\tposition:absolute;\r\n\t\tleft:50%;\r\n\t\ttop:600px;\r\n\t\twidth:1px;\r\n\t\theight:1px;\r\n\t\topacity:0.0;\r\n\t\ttransform:scale(0.8, 0.8);\r\n\t}\r\n\t\r\n\tto{\r\n\t\tborder:0px solid white;\r\n\t\tposition:absolute;\r\n\t\tleft:50%;\r\n\t\ttop:600px;\r\n\t\twidth:1px;\r\n\t\theight:1px;\r\n\t\topacity:1.0;\r\n\t\ttransform:scale(1.0, 1.0);\r\n\t}\r\n}\r\n\r\n.navigatorButton[_ngcontent-%COMP%]{\r\n\tborder:2px solid #ffffff;\r\n\tbackground: radial-gradient(#555555 20%, #777777 60%, #222222 70%);\r\n\tposition:absolute;\r\n\ttop:0px;\r\n\twidth:40px;\r\n\theight:40px;\r\n\tborder-radius:1000px;\r\n\tcursor:pointer;\r\n}\r\n\r\n.navigatorArrow[_ngcontent-%COMP%]{\r\n\tposition:absolute;\r\n\tleft:-5px;\r\n\ttop:6px;\r\n\twidth:50px;\r\n\theight:50px;\r\n\ttext-align:center;\r\n\ttext-shadow:2px 2px 4px #000000;\r\n\tcolor:#ffffff;\r\n\tfont:25px Lucida Console;\r\n\tfont-weight:bold;\r\n}\r\n\r\n.navigatorPrev[_ngcontent-%COMP%]{\r\n\tleft:-65px;\r\n}\r\n\r\n.navigatorNext[_ngcontent-%COMP%]{\r\n\tleft:15px;\r\n}\r\n\r\n@-webkit-keyframes navigatorClickSequence{\r\n\tfrom{\r\n\t\topacity:1.0;\r\n\t}\r\n\t10%{\r\n\t\topacity:0.7;\r\n\t\ttransform:scale(0.95, 0.95);\r\n\t\tbackground: radial-gradient(#ffffff 20%, #999999 60%, #000000 70%);\r\n\t}\r\n\tto{\r\n\t\topacity:1.0;\r\n\t\tbackground: radial-gradient(#666666 20%, #777777 60%, #000000 70%);\r\n\t}\r\n}\r\n\r\n@keyframes navigatorClickSequence{\r\n\tfrom{\r\n\t\topacity:1.0;\r\n\t}\r\n\t10%{\r\n\t\topacity:0.7;\r\n\t\ttransform:scale(0.95, 0.95);\r\n\t\tbackground: radial-gradient(#ffffff 20%, #999999 60%, #000000 70%);\r\n\t}\r\n\tto{\r\n\t\topacity:1.0;\r\n\t\tbackground: radial-gradient(#666666 20%, #777777 60%, #000000 70%);\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9uYXZpZ2F0b3IvbmF2aWdhdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyx3Q0FBZ0M7U0FBaEMsZ0NBQWdDO0NBQ2hDLDZCQUFxQjtTQUFyQixxQkFBcUI7Q0FDckIsaUNBQXlCO1NBQXpCLHlCQUF5Qjs7Q0FFekIsc0JBQXNCO0NBQ3RCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDO0VBQ0Msc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixRQUFRO0VBQ1IsU0FBUztFQUNULFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLHlCQUF5QjtDQUMxQjs7Q0FFQTtFQUNDLHlCQUF5QjtDQUMxQjs7Q0FFQTtFQUNDLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsUUFBUTtFQUNSLFNBQVM7RUFDVCxTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCx5QkFBeUI7Q0FDMUI7O0NBRUE7RUFDQyxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFFBQVE7RUFDUixTQUFTO0VBQ1QsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gseUJBQXlCO0NBQzFCO0FBQ0Q7O0FBckNBO0NBQ0M7RUFDQyxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFFBQVE7RUFDUixTQUFTO0VBQ1QsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gseUJBQXlCO0NBQzFCOztDQUVBO0VBQ0MseUJBQXlCO0NBQzFCOztDQUVBO0VBQ0Msc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixRQUFRO0VBQ1IsU0FBUztFQUNULFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLHlCQUF5QjtDQUMxQjs7Q0FFQTtFQUNDLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsUUFBUTtFQUNSLFNBQVM7RUFDVCxTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCx5QkFBeUI7Q0FDMUI7QUFDRDs7QUFFQTtDQUNDLHdCQUF3QjtDQUN4QixrRUFBa0U7Q0FDbEUsaUJBQWlCO0NBQ2pCLE9BQU87Q0FDUCxVQUFVO0NBQ1YsV0FBVztDQUNYLG9CQUFvQjtDQUNwQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsU0FBUztDQUNULE9BQU87Q0FDUCxVQUFVO0NBQ1YsV0FBVztDQUNYLGlCQUFpQjtDQUNqQiwrQkFBK0I7Q0FDL0IsYUFBYTtDQUNiLHdCQUF3QjtDQUN4QixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxTQUFTO0FBQ1Y7O0FBRUE7Q0FDQztFQUNDLFdBQVc7Q0FDWjtDQUNBO0VBQ0MsV0FBVztFQUNYLDJCQUEyQjtFQUMzQixrRUFBa0U7Q0FDbkU7Q0FDQTtFQUNDLFdBQVc7RUFDWCxrRUFBa0U7Q0FDbkU7QUFDRDs7QUFiQTtDQUNDO0VBQ0MsV0FBVztDQUNaO0NBQ0E7RUFDQyxXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLGtFQUFrRTtDQUNuRTtDQUNBO0VBQ0MsV0FBVztFQUNYLGtFQUFrRTtDQUNuRTtBQUNEIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9uYXZpZ2F0b3IvbmF2aWdhdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2aWdhdG9yUG9zaXRpb25lcntcclxuXHRhbmltYXRpb24tbmFtZTpuYXZpZ2F0b3JTZXF1ZW5jZTtcclxuXHRhbmltYXRpb24tZHVyYXRpb246OHM7XHRcdFx0XHJcblx0YW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuXHRcclxuXHRib3JkZXI6MHB4IHNvbGlkIHdoaXRlO1xyXG5cdHBvc2l0aW9uOmFic29sdXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG5hdmlnYXRvclNlcXVlbmNle1xyXG5cdGZyb217XHJcblx0XHRib3JkZXI6MHB4IHNvbGlkIHdoaXRlO1xyXG5cdFx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0XHRsZWZ0OjUwJTtcclxuXHRcdHRvcDo2MDBweDtcclxuXHRcdHdpZHRoOjFweDtcclxuXHRcdGhlaWdodDoxcHg7XHJcblx0XHRvcGFjaXR5OjAuMDtcclxuXHRcdHRyYW5zZm9ybTpzY2FsZSgwLjAsIDAuMCk7XHJcblx0fVxyXG5cdFxyXG5cdDg5JXtcclxuXHRcdHRyYW5zZm9ybTpzY2FsZSgwLjAsIDAuMCk7XHJcblx0fVxyXG5cdFxyXG5cdDkwJXtcclxuXHRcdGJvcmRlcjowcHggc29saWQgd2hpdGU7XHJcblx0XHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRcdGxlZnQ6NTAlO1xyXG5cdFx0dG9wOjYwMHB4O1xyXG5cdFx0d2lkdGg6MXB4O1xyXG5cdFx0aGVpZ2h0OjFweDtcclxuXHRcdG9wYWNpdHk6MC4wO1xyXG5cdFx0dHJhbnNmb3JtOnNjYWxlKDAuOCwgMC44KTtcclxuXHR9XHJcblx0XHJcblx0dG97XHJcblx0XHRib3JkZXI6MHB4IHNvbGlkIHdoaXRlO1xyXG5cdFx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0XHRsZWZ0OjUwJTtcclxuXHRcdHRvcDo2MDBweDtcclxuXHRcdHdpZHRoOjFweDtcclxuXHRcdGhlaWdodDoxcHg7XHJcblx0XHRvcGFjaXR5OjEuMDtcclxuXHRcdHRyYW5zZm9ybTpzY2FsZSgxLjAsIDEuMCk7XHJcblx0fVxyXG59XHJcblxyXG4ubmF2aWdhdG9yQnV0dG9ue1xyXG5cdGJvcmRlcjoycHggc29saWQgI2ZmZmZmZjtcclxuXHRiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoIzU1NTU1NSAyMCUsICM3Nzc3NzcgNjAlLCAjMjIyMjIyIDcwJSk7XHJcblx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0dG9wOjBweDtcclxuXHR3aWR0aDo0MHB4O1xyXG5cdGhlaWdodDo0MHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6MTAwMHB4O1xyXG5cdGN1cnNvcjpwb2ludGVyO1xyXG59XHJcblxyXG4ubmF2aWdhdG9yQXJyb3d7XHJcblx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0bGVmdDotNXB4O1xyXG5cdHRvcDo2cHg7XHJcblx0d2lkdGg6NTBweDtcclxuXHRoZWlnaHQ6NTBweDtcclxuXHR0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHR0ZXh0LXNoYWRvdzoycHggMnB4IDRweCAjMDAwMDAwO1xyXG5cdGNvbG9yOiNmZmZmZmY7XHJcblx0Zm9udDoyNXB4IEx1Y2lkYSBDb25zb2xlO1xyXG5cdGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbn1cclxuXHJcbi5uYXZpZ2F0b3JQcmV2e1xyXG5cdGxlZnQ6LTY1cHg7XHJcbn1cclxuXHJcbi5uYXZpZ2F0b3JOZXh0e1xyXG5cdGxlZnQ6MTVweDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBuYXZpZ2F0b3JDbGlja1NlcXVlbmNle1xyXG5cdGZyb217XHJcblx0XHRvcGFjaXR5OjEuMDtcclxuXHR9XHJcblx0MTAle1xyXG5cdFx0b3BhY2l0eTowLjc7XHJcblx0XHR0cmFuc2Zvcm06c2NhbGUoMC45NSwgMC45NSk7XHJcblx0XHRiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoI2ZmZmZmZiAyMCUsICM5OTk5OTkgNjAlLCAjMDAwMDAwIDcwJSk7XHJcblx0fVxyXG5cdHRve1xyXG5cdFx0b3BhY2l0eToxLjA7XHJcblx0XHRiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoIzY2NjY2NiAyMCUsICM3Nzc3NzcgNjAlLCAjMDAwMDAwIDcwJSk7XHJcblx0fVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'navigator',
                templateUrl: './navigator.component.html',
                styleUrls: ['./navigator.component.css']
            }]
    }], null, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/page/page.component.ts":
/*!****************************************!*\
  !*** ./src/app/page/page.component.ts ***!
  \****************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _background_background_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background/background.component */ "./src/app/page/background/background.component.ts");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo/logo.component */ "./src/app/page/logo/logo.component.ts");
/* harmony import */ var _panels_musicPanel_musicPanel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./panels/musicPanel/musicPanel.component */ "./src/app/page/panels/musicPanel/musicPanel.component.ts");
/* harmony import */ var _navigator_navigator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigator/navigator.component */ "./src/app/page/navigator/navigator.component.ts");






class PageComponent {
}
PageComponent.ɵfac = function PageComponent_Factory(t) { return new (t || PageComponent)(); };
PageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageComponent, selectors: [["page"]], decls: 4, vars: 0, template: function PageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "background");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "musicPanel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "navigator");
    } }, directives: [_background_background_component__WEBPACK_IMPORTED_MODULE_1__["BackgroundComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"], _panels_musicPanel_musicPanel_component__WEBPACK_IMPORTED_MODULE_3__["MusicPanelComponent"], _navigator_navigator_component__WEBPACK_IMPORTED_MODULE_4__["NavigatorComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'page',
                template: `
	<background></background>
	<logo></logo>
	<musicPanel></musicPanel>
	<navigator></navigator>
	`
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/page/panels/musicPanel/musicPanel.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/page/panels/musicPanel/musicPanel.component.ts ***!
  \****************************************************************/
/*! exports provided: MusicPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicPanelComponent", function() { return MusicPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MusicPanelComponent {
    constructor() {
        this.frame = 0;
    }
    ngOnInit() {
        if (null == MusicPanelComponent.instance) {
            MusicPanelComponent.instance = this;
            window.addEventListener("load", this.windowOnLoad);
        }
    }
    windowOnLoad() {
        window.removeEventListener("load", this.windowOnLoad);
        MusicPanelComponent.instance.showFrame(0);
    }
    prevFrame() {
        return this.showFrame(this.frame - 1);
    }
    nextFrame() {
        return this.showFrame(this.frame + 1);
    }
    showFrame(newFrame) {
        let ret = false;
        let f = this.populateFrame(newFrame);
        if (undefined != f) {
            document.getElementById("musicPanelTitle").innerHTML = f.title;
            document.getElementById("musicPanelExplanation").innerHTML = f.explanation;
            document.getElementById("musicPanelParagraph").innerHTML = f.paragraph;
            this.frame = newFrame;
            ret = true;
        }
        return ret;
    }
    populateFrame(newFrame) {
        if (-1 == newFrame) {
        }
        else if (0 == newFrame) {
            return { "title": "Detached",
                "explanation": "by Alfred Carn",
                "paragraph": `
												<div style="position:relative;left:300px;"><i>May 8, 2020</i></div>
										<br/>	<img align="left" style="margin-right:100px;width:200px;height:200px;" src="assets/Detached.png"/>
												<i>Detached</i> is composed in six parts, performed and recorded by Alfred.
												<ul style="margin-top:0px;margin-left:20px;margin-bottom:0px;">
													<li>Two cellos</li>
													<li>Two flutes</li>
													<li>Two clarinets</li>
													<li>Harp</li>
													<li>Sampled piano</li>
												</ul>
												You can find it
												<a style="color:#ff8888;" target="_blank" href="https://www.youtube.com/watch?v=RIgdhciWzUc">here</a> on YouTube.
												I hope you like it!
										<br/>
									` };
        }
        else if (1 == newFrame) {
            return { "title": "The Composing/Recording Process:",
                "explanation": "A labour of love",
                "paragraph": `
												<img align="left" style="margin-right:50px;width:152px;height:270px;" src="assets/cello3.jpg"/>
												Being an ear player I never learned how to properly read music. 
												Later in life I wanted to compose classical music, 
												stop using keyboard samples and try to play the instruments myself.
										<br/>
										<br/>	As a result I developed a particular way of working.												
												So instead of first composing the entire piece of music, I compose and record together in one process.
										<br/>	
										<br/>	This alleviates the need to keep lots of notes in my head.
										
									` };
        }
        else if (2 == newFrame) {
            return { "title": "The Composing/Recording Process:",
                "explanation": "A labour of love",
                "paragraph": `
												<img align="left" style="margin-right:50px;width:152px;height:270px;" src="assets/cello3.jpg"/>
												Typically I'll compose a small phrase for a particular instrument.
												I'll record successive takes, adjusting small details.
												For example I may vary the vibrato speed, play softer, crescendo later, or try different notes.
										<br/>	
										<br/>	Eventually it'll feel right, then it's on to the next phrase and so on until the piece is finished.
										<br/>
										<br/>	The microphone signal is recorded dry without any EQ or signal processing.
												After tracking and a light mixdown I'll apply a general reverb on the finished mix before mastering.
												
									` };
        }
        else if (3 == newFrame) {
            return { "title": "Alfred Carn",
                "explanation": "Thanks for visiting!",
                "paragraph": `
										<br/>
												<img align="left" style="margin-right:87px;width:275px;height:220px;" src="assets/photo.jpg"/>
										<br/>
										<br/>										
										<br/>	I've got some new music in the works...
										<br/>	Thanks for visiting and stay tuned!

									` };
        }
    }
}
MusicPanelComponent.instance = null;
MusicPanelComponent.ɵfac = function MusicPanelComponent_Factory(t) { return new (t || MusicPanelComponent)(); };
MusicPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MusicPanelComponent, selectors: [["musicPanel"]], decls: 14, vars: 0, consts: [[1, "panelPositioner", "initialPanel"], [1, "panelContainer", "musicPanel"], [1, "panelText"], [1, "panelHeading"], ["id", "musicPanelTitle", 1, "panelTitle"], ["id", "musicPanelExplanation", 1, "panelExplanation"], ["id", "musicPanelParagraph", 1, "panelParagraph"]], template: function MusicPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Explanation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Paragraph ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".panelPositioner[_ngcontent-%COMP%]{\r\n\tborder:0px solid red;\r\n\tposition:absolute;\r\n\tleft:50%;\r\n\ttop:170px;\r\n\twidth:1px;\r\n\theight:1px;\r\n}\r\n\r\n.panelContainer[_ngcontent-%COMP%]{\r\n\tborder:2px solid white;\r\n\tborder-radius:25px;\r\n\tbox-shadow:0px 0px 5px 5px rgba(255, 255, 255, 0.15);\r\n\tposition:absolute;\r\n\tleft:-430px;\r\n\ttop:0px;\r\n\twidth:860px;\r\n\theight:500px;\r\n\toverflow:hidden;\r\n}\r\n\r\n.initialPanel[_ngcontent-%COMP%]{\r\n\t-webkit-animation-name:firstPanelSequence;\r\n\t        animation-name:firstPanelSequence;\r\n\t-webkit-animation-duration:8s;\r\n\t        animation-duration:8s;\r\n\t-webkit-animation-fill-mode: both;\r\n\t        animation-fill-mode: both;\r\n}\r\n\r\n@-webkit-keyframes firstPanelSequence{\r\n\tfrom{\r\n\t\topacity:0.0;\r\n\t}\r\n\t80%{\r\n\t\topacity:0.0;\r\n\t\ttransform:scale(0.95, 0.95);\r\n\t}\r\n\tto{\r\n\t\topacity:1.0;\r\n\t\ttransform:scale(1.0, 1.0);\r\n\t}\r\n}\r\n\r\n@keyframes firstPanelSequence{\r\n\tfrom{\r\n\t\topacity:0.0;\r\n\t}\r\n\t80%{\r\n\t\topacity:0.0;\r\n\t\ttransform:scale(0.95, 0.95);\r\n\t}\r\n\tto{\r\n\t\topacity:1.0;\r\n\t\ttransform:scale(1.0, 1.0);\r\n\t}\r\n}\r\n\r\n.panelText[_ngcontent-%COMP%]{\r\n\tpadding:20px;\r\n\tbackground:linear-gradient(to bottom, rgba(0,0,0,0.90), rgba(0,0,0,0.4));\r\n\tborder-radius:20px;\r\n\tbox-shadow:0px 0px 5px 5px rgba(255, 255, 255, 0.25);\r\n\tposition:absolute;\r\n\tleft:10px;\r\n\ttop:10px;\r\n\twidth:800px;\r\n\theight:440px;\r\n}\r\n\r\n.panelHeading[_ngcontent-%COMP%]{\r\n\ttext-align:center;\r\n\ttext-shadow:2px 2px 4px #444444;\r\n\tbackground:linear-gradient(to bottom, rgba(255,255,255,1.0), rgba(255,255,255,0.6));\r\n\tborder-radius:4px;\r\n\tcolor:black;\r\n\twidth:100%;\r\n\theight:80px;\r\n}\r\n\r\n.panelTitle[_ngcontent-%COMP%]{\r\n\tfont-size:22px;\r\n\tfont-weight:bold;\r\n\tletter-spacing:15px;\r\n}\r\n\r\n.panelExplanation[_ngcontent-%COMP%]{\r\n\tfont-size:15px;\r\n\tfont-weight:bold;\r\n\tletter-spacing:8px;\r\n}\r\n\r\n.panelPicture[_ngcontent-%COMP%]{\r\n\tborder:1px solid red;\r\n\ttransform:rotate(45deg);\r\n}\r\n\r\n.panelLink[_ngcontent-%COMP%]{\r\n\tcolor:#ff6666;\r\n}\r\n\r\n@-webkit-keyframes panelBackground_1280x853_Sequence{\r\n\tfrom{\r\n\t\tbackground-position:-400px -200px;\r\n\t\tbackground-size:1280px 853px;\r\n\t}\r\n\tto{\r\n\t\tbackground-position:0px 0px;\r\n\t\tbackground-size:860px 500px;\r\n\t}\r\n}\r\n\r\n@keyframes panelBackground_1280x853_Sequence{\r\n\tfrom{\r\n\t\tbackground-position:-400px -200px;\r\n\t\tbackground-size:1280px 853px;\r\n\t}\r\n\tto{\r\n\t\tbackground-position:0px 0px;\r\n\t\tbackground-size:860px 500px;\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9wYW5lbHMvcGFuZWwuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0Msb0JBQW9CO0NBQ3BCLGlCQUFpQjtDQUNqQixRQUFRO0NBQ1IsU0FBUztDQUNULFNBQVM7Q0FDVCxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLG9EQUFvRDtDQUNwRCxpQkFBaUI7Q0FDakIsV0FBVztDQUNYLE9BQU87Q0FDUCxXQUFXO0NBQ1gsWUFBWTtDQUNaLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyx5Q0FBaUM7U0FBakMsaUNBQWlDO0NBQ2pDLDZCQUFxQjtTQUFyQixxQkFBcUI7Q0FDckIsaUNBQXlCO1NBQXpCLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDO0VBQ0MsV0FBVztDQUNaO0NBQ0E7RUFDQyxXQUFXO0VBQ1gsMkJBQTJCO0NBQzVCO0NBQ0E7RUFDQyxXQUFXO0VBQ1gseUJBQXlCO0NBQzFCO0FBQ0Q7O0FBWkE7Q0FDQztFQUNDLFdBQVc7Q0FDWjtDQUNBO0VBQ0MsV0FBVztFQUNYLDJCQUEyQjtDQUM1QjtDQUNBO0VBQ0MsV0FBVztFQUNYLHlCQUF5QjtDQUMxQjtBQUNEOztBQUVBO0NBQ0MsWUFBWTtDQUNaLHdFQUF3RTtDQUN4RSxrQkFBa0I7Q0FDbEIsb0RBQW9EO0NBQ3BELGlCQUFpQjtDQUNqQixTQUFTO0NBQ1QsUUFBUTtDQUNSLFdBQVc7Q0FDWCxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsK0JBQStCO0NBQy9CLG1GQUFtRjtDQUNuRixpQkFBaUI7Q0FDakIsV0FBVztDQUNYLFVBQVU7Q0FDVixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msb0JBQW9CO0NBQ3BCLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDO0VBQ0MsaUNBQWlDO0VBQ2pDLDRCQUE0QjtDQUM3QjtDQUNBO0VBQ0MsMkJBQTJCO0VBQzNCLDJCQUEyQjtDQUM1QjtBQUNEOztBQVRBO0NBQ0M7RUFDQyxpQ0FBaUM7RUFDakMsNEJBQTRCO0NBQzdCO0NBQ0E7RUFDQywyQkFBMkI7RUFDM0IsMkJBQTJCO0NBQzVCO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9wYWdlL3BhbmVscy9wYW5lbC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFuZWxQb3NpdGlvbmVye1xyXG5cdGJvcmRlcjowcHggc29saWQgcmVkO1xyXG5cdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdGxlZnQ6NTAlO1xyXG5cdHRvcDoxNzBweDtcclxuXHR3aWR0aDoxcHg7XHJcblx0aGVpZ2h0OjFweDtcclxufVxyXG5cclxuLnBhbmVsQ29udGFpbmVye1xyXG5cdGJvcmRlcjoycHggc29saWQgd2hpdGU7XHJcblx0Ym9yZGVyLXJhZGl1czoyNXB4O1xyXG5cdGJveC1zaGFkb3c6MHB4IDBweCA1cHggNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XHJcblx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0bGVmdDotNDMwcHg7XHJcblx0dG9wOjBweDtcclxuXHR3aWR0aDo4NjBweDtcclxuXHRoZWlnaHQ6NTAwcHg7XHJcblx0b3ZlcmZsb3c6aGlkZGVuO1xyXG59XHJcblxyXG4uaW5pdGlhbFBhbmVse1xyXG5cdGFuaW1hdGlvbi1uYW1lOmZpcnN0UGFuZWxTZXF1ZW5jZTtcclxuXHRhbmltYXRpb24tZHVyYXRpb246OHM7XHJcblx0YW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmaXJzdFBhbmVsU2VxdWVuY2V7XHJcblx0ZnJvbXtcclxuXHRcdG9wYWNpdHk6MC4wO1xyXG5cdH1cclxuXHQ4MCV7XHJcblx0XHRvcGFjaXR5OjAuMDtcclxuXHRcdHRyYW5zZm9ybTpzY2FsZSgwLjk1LCAwLjk1KTtcclxuXHR9XHJcblx0dG97XHJcblx0XHRvcGFjaXR5OjEuMDtcclxuXHRcdHRyYW5zZm9ybTpzY2FsZSgxLjAsIDEuMCk7XHJcblx0fVxyXG59XHJcblxyXG4ucGFuZWxUZXh0e1xyXG5cdHBhZGRpbmc6MjBweDtcclxuXHRiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwwLDAsMC45MCksIHJnYmEoMCwwLDAsMC40KSk7XHJcblx0Ym9yZGVyLXJhZGl1czoyMHB4O1xyXG5cdGJveC1zaGFkb3c6MHB4IDBweCA1cHggNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XHJcblx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0bGVmdDoxMHB4O1xyXG5cdHRvcDoxMHB4O1xyXG5cdHdpZHRoOjgwMHB4O1xyXG5cdGhlaWdodDo0NDBweDtcclxufVxyXG5cclxuLnBhbmVsSGVhZGluZ3tcclxuXHR0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHR0ZXh0LXNoYWRvdzoycHggMnB4IDRweCAjNDQ0NDQ0O1xyXG5cdGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsMjU1LDI1NSwxLjApLCByZ2JhKDI1NSwyNTUsMjU1LDAuNikpO1xyXG5cdGJvcmRlci1yYWRpdXM6NHB4O1xyXG5cdGNvbG9yOmJsYWNrO1xyXG5cdHdpZHRoOjEwMCU7XHJcblx0aGVpZ2h0OjgwcHg7XHJcbn1cclxuXHJcbi5wYW5lbFRpdGxle1xyXG5cdGZvbnQtc2l6ZToyMnB4O1xyXG5cdGZvbnQtd2VpZ2h0OmJvbGQ7XHJcblx0bGV0dGVyLXNwYWNpbmc6MTVweDtcclxufVxyXG5cclxuLnBhbmVsRXhwbGFuYXRpb257XHJcblx0Zm9udC1zaXplOjE1cHg7XHJcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHRsZXR0ZXItc3BhY2luZzo4cHg7XHJcbn1cclxuXHJcbi5wYW5lbFBpY3R1cmV7XHJcblx0Ym9yZGVyOjFweCBzb2xpZCByZWQ7XHJcblx0dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuXHJcbi5wYW5lbExpbmt7XHJcblx0Y29sb3I6I2ZmNjY2NjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBwYW5lbEJhY2tncm91bmRfMTI4MHg4NTNfU2VxdWVuY2V7XHJcblx0ZnJvbXtcclxuXHRcdGJhY2tncm91bmQtcG9zaXRpb246LTQwMHB4IC0yMDBweDtcclxuXHRcdGJhY2tncm91bmQtc2l6ZToxMjgwcHggODUzcHg7XHJcblx0fVxyXG5cdHRve1xyXG5cdFx0YmFja2dyb3VuZC1wb3NpdGlvbjowcHggMHB4O1xyXG5cdFx0YmFja2dyb3VuZC1zaXplOjg2MHB4IDUwMHB4O1xyXG5cdH1cclxufSJdfQ== */", ".musicPanel[_ngcontent-%COMP%]{\n\t-webkit-animation-name:panelBackground_1280x853_Sequence;\n\t        animation-name:panelBackground_1280x853_Sequence;\n\t-webkit-animation-duration:30s;\n\t        animation-duration:30s;\t\t\t\n\t-webkit-animation-fill-mode: both;\t\t\t\n\t        animation-fill-mode: both;\t\n\tposition:absolute;\n\tbackground-image:url('parrot-2909834_1280.jpg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9wYW5lbHMvbXVzaWNQYW5lbC9tdXNpY1BhbmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyx3REFBZ0Q7U0FBaEQsZ0RBQWdEO0NBQ2hELDhCQUFzQjtTQUF0QixzQkFBc0I7Q0FDdEIsaUNBQXlCO1NBQXpCLHlCQUF5QjtDQUN6QixpQkFBaUI7Q0FDakIsK0NBQWtFO0FBQ25FIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9wYW5lbHMvbXVzaWNQYW5lbC9tdXNpY1BhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXVzaWNQYW5lbHtcblx0YW5pbWF0aW9uLW5hbWU6cGFuZWxCYWNrZ3JvdW5kXzEyODB4ODUzX1NlcXVlbmNlO1xuXHRhbmltYXRpb24tZHVyYXRpb246MzBzO1x0XHRcdFxuXHRhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1x0XG5cdHBvc2l0aW9uOmFic29sdXRlO1xuXHRiYWNrZ3JvdW5kLWltYWdlOnVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3BhcnJvdC0yOTA5ODM0XzEyODAuanBnJyk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MusicPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'musicPanel',
                templateUrl: './musicPanel.component.html',
                styleUrls: ['../panel.css', './musicPanel.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/widgets/movingpicture/movingpicture.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/widgets/movingpicture/movingpicture.component.ts ***!
  \******************************************************************/
/*! exports provided: MovingPictureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovingPictureComponent", function() { return MovingPictureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class MovingPictureComponent {
    ngAfterContentInit() {
        var c = document.getElementById(this.id + "Container");
        var i = document.getElementById(this.id + "Image");
        alert(this.id + "Image");
        alert(c);
        alert(i);
    }
}
MovingPictureComponent.ɵfac = function MovingPictureComponent_Factory(t) { return new (t || MovingPictureComponent)(); };
MovingPictureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovingPictureComponent, selectors: [["movingpicture"]], inputs: { id: "id", src: "src", imageWidthPx: "imageWidthPx", imageHeightPx: "imageHeightPx", travelDirection: "travelDirection", travelPercent: "travelPercent" }, decls: 2, vars: 3, consts: [[1, "movingpicture-container", 3, "id"], [1, "movingpicture-image", 3, "id", "src"]], template: function MovingPictureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx.id, "Container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx.id, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".movingpicture-container[_ngcontent-%COMP%]{\r\n\t\tposition:relative;\r\n\t\tleft:0px;\r\n\t\ttop:0px;\r\n\t\twidth:100%;\r\n\t\theight:100%;\r\n\t\toverflow:hidden;\r\n}\r\n\r\n.movingpicture-image[_ngcontent-%COMP%]{\r\n\t\tposition:absolute;\r\n\t\tleft:0px;\r\n\t\ttop:0px;\r\n\t\t\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy9tb3ZpbmdwaWN0dXJlL21vdmluZ3BpY3R1cmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixRQUFRO0VBQ1IsT0FBTztFQUNQLFVBQVU7RUFDVixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixRQUFRO0VBQ1IsT0FBTztFQUNQOzs7R0FHQztBQUNIIiwiZmlsZSI6InNyYy9hcHAvd2lkZ2V0cy9tb3ZpbmdwaWN0dXJlL21vdmluZ3BpY3R1cmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb3ZpbmdwaWN0dXJlLWNvbnRhaW5lcntcclxuXHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0bGVmdDowcHg7XHJcblx0XHR0b3A6MHB4O1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHRcdGhlaWdodDoxMDAlO1xyXG5cdFx0b3ZlcmZsb3c6aGlkZGVuO1xyXG59XHJcblxyXG4ubW92aW5ncGljdHVyZS1pbWFnZXtcclxuXHRcdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdFx0bGVmdDowcHg7XHJcblx0XHR0b3A6MHB4O1xyXG5cdFx0LypcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0XHRoZWlnaHQ6MTAwJTtcclxuXHRcdCovXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovingPictureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'movingpicture',
                templateUrl: './movingpicture.component.html',
                styleUrls: ['./movingpicture.component.css']
            }]
    }], null, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], src: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], imageWidthPx: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], imageHeightPx: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], travelDirection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], travelPercent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Alfred Complete\Work\Programs\NodeJS\Workspace\Angular\AlfredCarnMusic\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map