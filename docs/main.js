(self["webpackChunkangular_maze"] = self["webpackChunkangular_maze"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);


class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 17, vars: 0, consts: [[2, "text-align", "center", "margin-bottom", "0.25rem"], ["href", "https://github.com/changhuixu/angular-maze", "title", "git repo"], [2, "text-align", "center"], ["routerLink", "maze", "routerLinkActive", "active"], [2, "width", "1rem", "display", "inline-block"], ["routerLink", "candy", "routerLinkActive", "active"], ["routerLink", "math", "routerLinkActive", "active"], ["routerLink", "square", "routerLinkActive", "active"], [2, "margin", "0 auto"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " GitHub Repo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Maze Puzzle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Candy Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Math");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Squares");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  color: #000;\r\n  background: #dbeccd;\r\n  padding: 0.5rem 1rem;\r\n  width: 5rem;\r\n  text-decoration: none;\r\n  white-space: nowrap;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n  background-color: #4caf50;\r\n  color: white;\r\n  font-weight: 500;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.active) {\r\n  background-color: #8cad70;\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IGEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjb2xvcjogIzAwMDtcclxuICBiYWNrZ3JvdW5kOiAjZGJlY2NkO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIHdpZHRoOiA1cmVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG5uYXYgYS5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbm5hdiBhOmhvdmVyOm5vdCguYWN0aXZlKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhjYWQ3MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _maze_maze_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maze/maze.component */ 374);
/* harmony import */ var _candy_candy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./candy/candy.component */ 3006);
/* harmony import */ var _candy_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./candy/canvas/canvas.component */ 2204);
/* harmony import */ var _squares_scramble_squares_scramble_squares_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./squares/scramble-squares/scramble-squares.component */ 8567);
/* harmony import */ var _squares_squares_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./squares/squares.component */ 2457);
/* harmony import */ var _squares_image_tiles_image_tiles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./squares/image-tiles/image-tiles.component */ 1442);
/* harmony import */ var _math_math_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./math/math.component */ 8167);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__.DragDropModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forRoot([
                { path: '', redirectTo: 'maze', pathMatch: 'full' },
                { path: 'maze', component: _maze_maze_component__WEBPACK_IMPORTED_MODULE_1__.MazeComponent },
                { path: 'candy', component: _candy_candy_component__WEBPACK_IMPORTED_MODULE_2__.CandyComponent },
                { path: 'math', component: _math_math_component__WEBPACK_IMPORTED_MODULE_7__.MathComponent },
                { path: 'square', component: _squares_squares_component__WEBPACK_IMPORTED_MODULE_5__.SquaresComponent },
                { path: '**', redirectTo: '' },
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _maze_maze_component__WEBPACK_IMPORTED_MODULE_1__.MazeComponent,
        _candy_candy_component__WEBPACK_IMPORTED_MODULE_2__.CandyComponent,
        _candy_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_3__.CanvasComponent,
        _squares_scramble_squares_scramble_squares_component__WEBPACK_IMPORTED_MODULE_4__.ScrambleSquaresComponent,
        _squares_squares_component__WEBPACK_IMPORTED_MODULE_5__.SquaresComponent,
        _squares_image_tiles_image_tiles_component__WEBPACK_IMPORTED_MODULE_6__.ImageTilesComponent,
        _math_math_component__WEBPACK_IMPORTED_MODULE_7__.MathComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__.DragDropModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule] }); })();


/***/ }),

/***/ 3006:
/*!******************************************!*\
  !*** ./src/app/candy/candy.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandyComponent": () => (/* binding */ CandyComponent)
/* harmony export */ });
/* harmony import */ var _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas/canvas.component */ 2204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);




class CandyComponent {
    constructor() {
        this.name = 'Candy';
    }
    ngOnInit() { }
    draw() {
        this.c.draw(this.name);
    }
}
CandyComponent.ɵfac = function CandyComponent_Factory(t) { return new (t || CandyComponent)(); };
CandyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CandyComponent, selectors: [["app-candy"]], viewQuery: function CandyComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_0__.CanvasComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.c = _t.first);
    } }, decls: 9, vars: 1, consts: [[2, "text-align", "center"], [1, "my-form"], ["for", "name"], ["type", "text", 3, "ngModel", "ngModelChange"], ["type", "button", 3, "click"]], template: function CandyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Enter your name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CandyComponent_Template_input_ngModelChange_4_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CandyComponent_Template_button_click_5_listener() { return ctx.draw(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Draw");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-canvas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.name);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_0__.CanvasComponent], styles: [".my-form[_ngcontent-%COMP%] {\r\n  margin: 1rem 0;\r\n}\r\n\r\n.my-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  max-width: 10rem;\r\n  padding: 0.25rem;\r\n  margin: 0 0.5rem;\r\n}\r\n\r\n.my-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding: 0.25rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbmR5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoiY2FuZHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1mb3JtIHtcclxuICBtYXJnaW46IDFyZW0gMDtcclxufVxyXG5cclxuLm15LWZvcm0gaW5wdXQge1xyXG4gIG1heC13aWR0aDogMTByZW07XHJcbiAgcGFkZGluZzogMC4yNXJlbTtcclxuICBtYXJnaW46IDAgMC41cmVtO1xyXG59XHJcblxyXG4ubXktZm9ybSBidXR0b24ge1xyXG4gIHBhZGRpbmc6IDAuMjVyZW07XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 2204:
/*!**************************************************!*\
  !*** ./src/app/candy/canvas/canvas.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasComponent": () => (/* binding */ CanvasComponent)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ 6322);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


class CanvasComponent {
    constructor() {
        this.particles = [];
        this.mousePosition = new _models__WEBPACK_IMPORTED_MODULE_0__.Position(-100, -100);
        this.continueAnimating = true;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.canvas = document.getElementById('candy-text');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
        this.candy = new _models__WEBPACK_IMPORTED_MODULE_0__.CandyText(this.canvas);
        this.draw('Candy');
    }
    draw(name) {
        this.particles.length = 0;
        this.particles = this.candy.getParticles(name);
        this.drawBackground();
        this.particles.forEach(p => {
            p.draw(this.ctx);
        });
    }
    calculateMouseRelativePositionInCanvas(e) {
        // Note: I have handled scroll effect
        this.mousePosition.x =
            e.clientX +
                (document.documentElement.scrollLeft || document.body.scrollLeft) -
                this.canvas.offsetLeft;
        this.mousePosition.y =
            e.clientY +
                (document.documentElement.scrollTop || document.body.scrollTop) -
                this.canvas.offsetTop;
    }
    startAnimation(e) {
        this.raf = window.requestAnimationFrame(() => this.animate());
        this.continueAnimating = true;
    }
    // @HostListener('mouseout', ['$event'])
    // stopAnimation(e: MouseEvent) {
    //   window.cancelAnimationFrame(this.raf);
    //   this.continueAnimating = false; // stop animation when mouse out.
    // }
    animate() {
        if (!this.particles.length || !this.continueAnimating) {
            return; // return when nothing needs to animate
        }
        this.drawBackground();
        // clean particles are not in canvas to reduce computation
        this.particles = this.particles.filter(p => p.isInCanvas(this.canvas.width, this.canvas.height));
        this.particles.forEach(p => {
            p.flyAwayWhenMouseOver(this.mousePosition);
            p.draw(this.ctx);
        });
        window.requestAnimationFrame(() => this.animate());
    }
    drawBackground(bgColor = '#333') {
        this.ctx.fillStyle = bgColor;
        this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fill();
    }
}
CanvasComponent.ɵfac = function CanvasComponent_Factory(t) { return new (t || CanvasComponent)(); };
CanvasComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CanvasComponent, selectors: [["app-canvas"]], hostBindings: function CanvasComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousemove", function CanvasComponent_mousemove_HostBindingHandler($event) { return ctx.calculateMouseRelativePositionInCanvas($event); })("mouseenter", function CanvasComponent_mouseenter_HostBindingHandler($event) { return ctx.startAnimation($event); });
    } }, decls: 1, vars: 0, consts: [["id", "candy-text", "height", "300"]], template: function CanvasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 0);
    } }, styles: ["[_nghost-%COMP%] {\r\n  height: 100%;\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbnZhcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYiIsImZpbGUiOiJjYW52YXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 3854:
/*!********************************************!*\
  !*** ./src/app/candy/models/candy-text.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandyText": () => (/* binding */ CandyText)
/* harmony export */ });
/* harmony import */ var _particle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./particle */ 1861);

class CandyText {
    constructor(canvas) {
        this.canvas = canvas;
        this.denseness = 10;
        this.textFont = '200px impact';
        this.ctx = this.canvas.getContext('2d');
        this.canvasWidth = this.canvas.width;
        this.canvasHeight = this.canvas.height;
    }
    getParticles(word) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.font = this.textFont;
        this.ctx.fillStyle = '#000000';
        const starting = this.canvasWidth / 2 - 50 * word.length;
        this.ctx.fillText(word, starting, 220);
        const imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
        // iterate over all pixels - leaving density gaps
        const particles = [];
        for (let py = 0; py < this.canvas.height; py += this.denseness) {
            for (let px = 0; px < this.canvas.width; px += this.denseness) {
                const pixel = imageData.data[(px + py * this.canvas.width) * 4 - 1];
                //Pixel is black from being drawn on.
                if (pixel == 255) {
                    const p = new _particle__WEBPACK_IMPORTED_MODULE_0__.Particle(px, py);
                    particles.push(p);
                }
            }
        }
        return particles;
    }
}


/***/ }),

/***/ 6322:
/*!***************************************!*\
  !*** ./src/app/candy/models/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Position": () => (/* reexport safe */ _position__WEBPACK_IMPORTED_MODULE_0__.Position),
/* harmony export */   "Particle": () => (/* reexport safe */ _particle__WEBPACK_IMPORTED_MODULE_1__.Particle),
/* harmony export */   "CandyText": () => (/* reexport safe */ _candy_text__WEBPACK_IMPORTED_MODULE_2__.CandyText)
/* harmony export */ });
/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./position */ 5922);
/* harmony import */ var _particle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./particle */ 1861);
/* harmony import */ var _candy_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./candy-text */ 3854);





/***/ }),

/***/ 1861:
/*!******************************************!*\
  !*** ./src/app/candy/models/particle.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Particle": () => (/* binding */ Particle)
/* harmony export */ });
class Particle {
    constructor(x, y, radius = 4) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.flying = false;
        this.vx = 0;
        this.vy = 0;
        this.color = '#' + ((Math.random() * 0x949494 + 0xaaaaaa) | 0).toString(16);
    }
    draw(ctx) {
        if (this.flying) {
            this.x += this.vx;
            this.y += this.vy;
        }
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
    }
    flyAwayWhenMouseOver(mousePosition, mouseAffectRange = 20) {
        const dx = this.x - mousePosition.x;
        const dy = this.y - mousePosition.y;
        const isInRange = dx * dx + dy * dy < mouseAffectRange * mouseAffectRange;
        if (isInRange && !this.flying) {
            this.flying = true;
            this.vx = (Math.random() - 0.5) * mouseAffectRange * 2;
            this.vy = (Math.random() - 0.5) * mouseAffectRange * 2;
        }
    }
    isInCanvas(canvasWidth, canvasHeight) {
        return !(this.x < -this.radius ||
            this.y < -this.radius ||
            this.x > canvasWidth + this.radius ||
            this.y > canvasHeight + this.radius);
    }
}


/***/ }),

/***/ 5922:
/*!******************************************!*\
  !*** ./src/app/candy/models/position.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Position": () => (/* binding */ Position)
/* harmony export */ });
class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}


/***/ }),

/***/ 8167:
/*!****************************************!*\
  !*** ./src/app/math/math.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MathComponent": () => (/* binding */ MathComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);


function MathComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4);
} }
function MathComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5);
} }
function MathComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 5);
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function MathComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 5);
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class MathComponent {
    constructor() {
        this.nAdd = 10;
        this.nSub = 10;
        this.additions = [];
        this.subtractions = [];
        this.multiplications = [];
        this.divisions = [];
    }
    ngOnInit() {
        this.getAdditions();
        this.getSubtractions();
        this.getMultiplications();
        this.getDivisions();
    }
    getAdditions() {
        const max = 10000;
        const min = 10;
        for (let i = 0; i < this.nAdd; i++) {
            let a = this.randomIntBetween(min, max);
            let b = this.randomIntBetween(min, max);
            this.additions.push(`${a} + ${b}`);
        }
    }
    getSubtractions() {
        const max = 10000;
        const min = 10;
        for (let i = 0; i < this.nAdd; i++) {
            let a = this.randomIntBetween(min, max);
            let b = this.randomIntBetween(min, max);
            let s = a > b ? `${a} - ${b}` : `${b} - ${a}`;
            this.subtractions.push(s);
        }
    }
    getMultiplications() {
        const max = 100;
        const min = 1;
        for (let i = 0; i < this.nAdd; i++) {
            let a = this.randomIntBetween(min, max);
            let b = this.randomIntBetween(min, max);
            this.multiplications.push(`${a} &times; ${b}`);
        }
    }
    getDivisions() {
        const max = 10;
        const min = 1;
        for (let i = 0; i < this.nAdd; i++) {
            let a = this.randomIntBetween(min, max);
            let b = this.randomIntBetween(min, max);
            this.divisions.push(`${a * b} &div; ${b}`);
        }
    }
    randomIntBetween(min, max) {
        return ~~(Math.random() * (max - min + 1) + min);
    }
}
MathComponent.ɵfac = function MathComponent_Factory(t) { return new (t || MathComponent)(); };
MathComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MathComponent, selectors: [["app-math"]], decls: 11, vars: 4, consts: [[2, "text-align", "center"], [1, "card-row"], [1, "card"], [4, "ngFor", "ngForOf"], [3, "innerHTML", 4, "ngFor", "ngForOf"], [3, "innerHTML"]], template: function MathComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Basic Arithmetics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MathComponent_p_4_Template, 2, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MathComponent_p_6_Template, 2, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MathComponent_p_8_Template, 1, 1, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MathComponent_p_10_Template, 1, 1, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.additions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subtractions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.multiplications);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.divisions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".card-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-flow: row;\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n  grid-gap: 1rem;\r\n  gap: 1rem;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.2);\r\n  transition: 0.3s;\r\n  min-width: 5rem;\r\n  max-width: 20rem;\r\n  padding: 1rem 2rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-grow: 1;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.2);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixjQUFTO0VBQVQsU0FBUztBQUNYOztBQUVBO0VBQ0UsaURBQWlEO0VBQ2pELGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDhDQUE4QztBQUNoRCIsImZpbGUiOiJtYXRoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAwLjVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuICBtaW4td2lkdGg6IDVyZW07XHJcbiAgbWF4LXdpZHRoOiAyMHJlbTtcclxuICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLmNhcmQ6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 374:
/*!****************************************!*\
  !*** ./src/app/maze/maze.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MazeComponent": () => (/* binding */ MazeComponent)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ 4915);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);





function MazeComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MazeComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.test(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Test ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.busy);
} }
class MazeComponent {
    constructor() {
        this.row = 15;
        this.col = 15;
        this.cellSize = 20; // length of cell edge
        this.cellEdgeThickness = 2; // thickness of cell edge
        this.cellBackground = '#FFFFFF';
        this.solutionPathColor = '#FF7575';
        this.myPathColor = '#4080FF';
        this.myPathThickness = 10;
        this.solutionPathThickness = 3;
        this.gameOver = false;
        this.myPath = [];
        this.showTestButton = false;
        this.busy = false;
        if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
            this.showTestButton = true;
        }
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.canvas = document.getElementById('maze');
        this.ctx = this.canvas.getContext('2d');
        this.drawMaze();
    }
    drawMaze() {
        this.busy = true;
        this.validateInputs();
        this.maze = new _models__WEBPACK_IMPORTED_MODULE_0__.Maze(this.row, this.col);
        this.canvas.width = this.col * this.cellSize;
        this.canvas.height = this.row * this.cellSize;
        // open the first and last cells to show the entrance and exit
        this.maze.firstCell.westEdge = false;
        this.maze.lastCell.eastEdge = false;
        // draw the cells
        this.ctx.lineWidth = this.cellEdgeThickness;
        this.ctx.fillStyle = this.cellBackground;
        this.maze.cells.forEach(x => x.forEach(c => this.draw(c)));
        this.initPlay();
        this.busy = false;
    }
    initPlay() {
        this.gameOver = false;
        this.myPath.length = 0;
        this.currentCell = this.maze.firstCell; // reset myPath position
        this.myPath.push(this.currentCell);
        // draw the initial step of myPath in the first Cell as entrance
        this.ctx.lineWidth = this.myPathThickness;
        this.ctx.strokeStyle = this.myPathColor;
        this.ctx.beginPath();
        this.ctx.moveTo(0, this.cellSize / 2);
        this.ctx.lineTo(this.cellSize / 2, this.cellSize / 2);
        this.ctx.stroke();
    }
    handleKeyDown(event) {
        if (this.gameOver)
            return;
        const direction = _models__WEBPACK_IMPORTED_MODULE_0__.keyboardMap[event.key];
        if (direction) {
            this.move(direction);
            event.preventDefault();
        }
    }
    move(direction) {
        let nextCell;
        if (direction === 'Left') {
            if (this.currentCell.col < 1)
                return;
            nextCell = this.maze.cells[this.currentCell.row][this.currentCell.col - 1];
        }
        if (direction === 'Right') {
            if (this.currentCell.col + 1 >= this.col)
                return;
            nextCell = this.maze.cells[this.currentCell.row][this.currentCell.col + 1];
        }
        if (direction === 'Up') {
            if (this.currentCell.row < 1)
                return;
            nextCell = this.maze.cells[this.currentCell.row - 1][this.currentCell.col];
        }
        if (direction === 'Down') {
            if (this.currentCell.row + 1 >= this.row)
                return;
            nextCell = this.maze.cells[this.currentCell.row + 1][this.currentCell.col];
        }
        if (this.currentCell.isConnectedTo(nextCell)) {
            if (this.myPath.length > 1 &&
                this.myPath[this.myPath.length - 2].equals(nextCell)) {
                // this is a step back; reverse the step by erasing the original path
                this.drawPath(this.myPath, this.cellBackground);
                this.myPath.pop();
            }
            else {
                this.myPath.push(nextCell);
                if (nextCell.equals(this.maze.lastCell)) {
                    this.hooray();
                    this.drawSolution(this.myPathColor, this.myPathThickness);
                    return;
                }
            }
            this.drawPath(this.myPath);
            this.currentCell = nextCell;
        }
    }
    undo(nSteps = 5) {
        if (!this.gameOver && this.myPath.length > nSteps) {
            this.drawPath(this.myPath, this.cellBackground);
            this.myPath.splice(-nSteps);
            this.drawPath(this.myPath);
            this.currentCell = this.myPath[this.myPath.length - 1];
        }
    }
    drawSolution(color = this.solutionPathColor, lineThickness = this.solutionPathThickness) {
        this.gameOver = true;
        this.drawPath(this.maze.findPath(), color, lineThickness, true);
    }
    drawPath(path, color = this.myPathColor, lineThickness = this.myPathThickness, drawSolution = false) {
        this.ctx.lineWidth = lineThickness;
        this.ctx.strokeStyle = color;
        this.ctx.beginPath();
        this.ctx.moveTo(0, this.cellSize / 2);
        path.forEach(x => this.ctx.lineTo((x.col + 0.5) * this.cellSize, (x.row + 0.5) * this.cellSize));
        if (drawSolution) {
            this.ctx.lineTo(this.col * this.cellSize, (this.row - 0.5) * this.cellSize);
        }
        this.ctx.stroke();
    }
    draw(cell) {
        this.ctx.fillRect(cell.col * this.cellSize, cell.row * this.cellSize, (cell.col + 1) * this.cellSize, (cell.row + 1) * this.cellSize);
        if (cell.northEdge) {
            this.ctx.beginPath();
            this.ctx.moveTo(cell.col * this.cellSize, cell.row * this.cellSize);
            this.ctx.lineTo((cell.col + 1) * this.cellSize, cell.row * this.cellSize);
            this.ctx.stroke();
        }
        if (cell.eastEdge) {
            this.ctx.beginPath();
            this.ctx.moveTo((cell.col + 1) * this.cellSize, cell.row * this.cellSize);
            this.ctx.lineTo((cell.col + 1) * this.cellSize, (cell.row + 1) * this.cellSize);
            this.ctx.stroke();
        }
        if (cell.southEdge) {
            this.ctx.beginPath();
            this.ctx.moveTo((cell.col + 1) * this.cellSize, (cell.row + 1) * this.cellSize);
            this.ctx.lineTo(cell.col * this.cellSize, (cell.row + 1) * this.cellSize);
            this.ctx.stroke();
        }
        if (cell.westEdge) {
            this.ctx.beginPath();
            this.ctx.moveTo(cell.col * this.cellSize, (cell.row + 1) * this.cellSize);
            this.ctx.lineTo(cell.col * this.cellSize, cell.row * this.cellSize);
            this.ctx.stroke();
        }
    }
    hooray() {
        var audio = new Audio('assets/KidsCheering.mp3');
        audio.play();
    }
    validateInputs() {
        if (isNaN(this.row) || this.row < 1) {
            alert('Please enter a positive number for #Rows.');
            this.row = 15;
        }
        if (isNaN(this.col) || this.col < 1) {
            alert('Please enter a positive number for #Columns.');
            this.col = 15;
        }
        if (this.row > 500 || this.col > 500) {
            alert('Size too large. You may crash the browser...');
            this.row = 15;
            this.col = 15;
        }
        this.row = ~~this.row;
        this.col = ~~this.col;
    }
    test() {
        this.busy = true;
        const cellsHaveFourEdges = [];
        let hasLoop = false;
        const size = 50;
        for (let i = 0; i < 100; i++) {
            const maze = new _models__WEBPACK_IMPORTED_MODULE_0__.Maze(size, size);
            maze.cells.forEach(row => row.forEach(c => {
                if (c.nEdges === 4) {
                    cellsHaveFourEdges.push(c);
                }
                if (c.col < size - 1 && c.row < size - 1) {
                    if (!c.eastEdge && !c.southEdge) {
                        const cellOnTheRight = maze.cells[c.row][c.col + 1];
                        if (!cellOnTheRight.southEdge) {
                            const cellBelow = maze.cells[c.row + 1][c.col];
                            if (!cellBelow.eastEdge) {
                                hasLoop = true;
                            }
                        }
                    }
                }
            }));
            if (cellsHaveFourEdges.length) {
                alert('dead loop');
                break;
            }
            if (hasLoop) {
                alert('open loop');
                break;
            }
        }
        console.log(`testing has finished`);
        this.busy = false;
    }
}
MazeComponent.ɵfac = function MazeComponent_Factory(t) { return new (t || MazeComponent)(); };
MazeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MazeComponent, selectors: [["app-maze"]], hostBindings: function MazeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function MazeComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
    } }, decls: 30, vars: 4, consts: [[2, "text-align", "center"], [1, "maze-form"], ["for", "nRow"], ["id", "nRow", "type", "number", "min", "1", "max", "500", 3, "ngModel", "ngModelChange"], ["for", "nCol"], ["id", "nCol", "type", "number", "min", "1", "max", "500", 3, "ngModel", "ngModelChange"], ["type", "button", 3, "disabled", "click"], ["type", "button", 3, "click"], ["type", "button", 3, "disabled", "click", 4, "ngIf"], ["id", "maze"], [1, "arrows"], ["title", "move up", 3, "click"], ["title", "move left", 3, "click"], ["title", "undo 5 steps", 3, "click"], ["title", "move right", 3, "click"], ["title", "move down", 3, "click"]], template: function MazeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "# Rows");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MazeComponent_Template_input_ngModelChange_4_listener($event) { return ctx.row = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "# Columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MazeComponent_Template_input_ngModelChange_7_listener($event) { return ctx.col = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MazeComponent_Template_button_click_8_listener() { return ctx.drawMaze(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " New Maze ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MazeComponent_Template_button_click_10_listener() { return ctx.drawSolution(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Solution");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, MazeComponent_button_12_Template, 2, 1, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "canvas", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MazeComponent_Template_span_click_18_listener() { return ctx.move("Up"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\u2B06\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MazeComponent_Template_span_click_21_listener() { return ctx.move("Left"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "\u2B05\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MazeComponent_Template_span_click_23_listener() { return ctx.undo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\u23EA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MazeComponent_Template_span_click_25_listener() { return ctx.move("Right"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "\u27A1\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MazeComponent_Template_span_click_28_listener() { return ctx.move("Down"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "\u2B07\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.row);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.col);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.busy);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showTestButton);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: [".maze-form[_ngcontent-%COMP%] {\r\n  margin: 1rem 0;\r\n}\r\n\r\n.maze-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  max-width: 3rem;\r\n  padding: 0.25rem;\r\n  margin: 0 0.5rem;\r\n}\r\n\r\n.maze-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding: 0.25rem;\r\n  margin: 0 0.5rem;\r\n}\r\n\r\n.arrows[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: xx-large;\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n  cursor: pointer;\r\n  margin: auto 0.25rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hemUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCIiwiZmlsZSI6Im1hemUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXplLWZvcm0ge1xyXG4gIG1hcmdpbjogMXJlbSAwO1xyXG59XHJcblxyXG4ubWF6ZS1mb3JtIGlucHV0IHtcclxuICBtYXgtd2lkdGg6IDNyZW07XHJcbiAgcGFkZGluZzogMC4yNXJlbTtcclxuICBtYXJnaW46IDAgMC41cmVtO1xyXG59XHJcblxyXG4ubWF6ZS1mb3JtIGJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMC4yNXJlbTtcclxuICBtYXJnaW46IDAgMC41cmVtO1xyXG59XHJcblxyXG4uYXJyb3dzIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbjogYXV0byAwLjI1cmVtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 8660:
/*!*************************************!*\
  !*** ./src/app/maze/models/cell.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cell": () => (/* binding */ Cell)
/* harmony export */ });
/**
 *
 */
class Cell {
    /**
     * Create a cell in a maze.
     * @param row rowID of the cell in a maze. integer, row>=0
     * @param col colID of the cell in a maze. integer, col>=0
     */
    constructor(row = 0, col = 0) {
        this.row = row;
        this.col = col;
        this.northEdge = true;
        this.eastEdge = true;
        this.westEdge = true;
        this.southEdge = true;
        this.neighbors = [];
        /**
         * a flag used to indicate if the cell has been traversed or not when finding a maze path
         */
        this.traversed = false;
        /**
         * a flag used to indicate if the cell has been visited or not when hunt-and-kill
         */
        this.visited = false;
    }
    /**
     * The number of Edges in this cell.
     * The nEdges counts all four edges. If an edge is false, then 0.
     */
    get nEdges() {
        return ((this.northEdge ? 1 : 0) +
            (this.southEdge ? 1 : 0) +
            (this.westEdge ? 1 : 0) +
            (this.eastEdge ? 1 : 0));
    }
    connectTo(another) {
        if (!another)
            return;
        if (this.row === another.row) {
            if (this.col - 1 === another.col) {
                this.westEdge = false;
                another.eastEdge = false;
            }
            else if (this.col + 1 === another.col) {
                this.eastEdge = false;
                another.westEdge = false;
            }
            else {
                return;
            }
        }
        else if (this.col === another.col) {
            if (this.row - 1 === another.row) {
                this.northEdge = false;
                another.southEdge = false;
            }
            else if (this.row + 1 === another.row) {
                this.southEdge = false;
                another.northEdge = false;
            }
            else {
                return;
            }
        }
        else {
            return;
        }
        this.visited = true;
        another.visited = true;
    }
    equals(another) {
        return this.row === another.row && this.col === another.col;
    }
    isConnectedTo(another) {
        if (this.row === another.row) {
            if (this.col - 1 === another.col) {
                if (this.westEdge === false && another.eastEdge === false) {
                    return true;
                }
            }
            if (this.col + 1 === another.col) {
                if (this.eastEdge === false && another.westEdge === false) {
                    return true;
                }
            }
        }
        if (this.col === another.col) {
            if (this.row - 1 === another.row) {
                if (this.northEdge === false && another.southEdge === false) {
                    return true;
                }
            }
            if (this.row + 1 === another.row) {
                if (this.southEdge === false && another.northEdge === false) {
                    return true;
                }
            }
        }
        return false;
    }
}


/***/ }),

/***/ 4915:
/*!**************************************!*\
  !*** ./src/app/maze/models/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cell": () => (/* reexport safe */ _cell__WEBPACK_IMPORTED_MODULE_0__.Cell),
/* harmony export */   "Maze": () => (/* reexport safe */ _maze__WEBPACK_IMPORTED_MODULE_1__.Maze),
/* harmony export */   "keyboardMap": () => (/* reexport safe */ _keyboard_map__WEBPACK_IMPORTED_MODULE_2__.keyboardMap)
/* harmony export */ });
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell */ 8660);
/* harmony import */ var _maze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maze */ 6999);
/* harmony import */ var _keyboard_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyboard-map */ 9481);





/***/ }),

/***/ 9481:
/*!*********************************************!*\
  !*** ./src/app/maze/models/keyboard-map.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keyboardMap": () => (/* binding */ keyboardMap)
/* harmony export */ });
const keyboardMap = {
    ArrowLeft: 'Left',
    A: 'Left',
    a: 'Left',
    ArrowRight: 'Right',
    D: 'Right',
    d: 'Right',
    ArrowUp: 'Up',
    W: 'Up',
    w: 'Up',
    ArrowDown: 'Down',
    S: 'Down',
    s: 'Down',
};


/***/ }),

/***/ 6999:
/*!*************************************!*\
  !*** ./src/app/maze/models/maze.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Maze": () => (/* binding */ Maze)
/* harmony export */ });
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell */ 8660);

/**
 * A rectangle maze generated based on "hunt-and-kill" algorithm.
 */
class Maze {
    /**
     * Create a maze with <row> &times; <col> cells.
     * @param nRow number of rows
     * @param nCol number of columns
     */
    constructor(nRow, nCol) {
        this.nRow = nRow;
        this.nCol = nCol;
        this.cells = [];
        // initialize cells
        for (let i = 0; i < nRow; i++) {
            this.cells[i] = [];
            for (let j = 0; j < nCol; j++) {
                this.cells[i][j] = new _cell__WEBPACK_IMPORTED_MODULE_0__.Cell(i, j);
            }
        }
        // populate cell neighbors (an optimization)
        this.cells.forEach(row => row.forEach(c => this.mapNeighbors(c)));
        // generate maze
        this.randomRowNumbers = Utils.shuffleArray([...Array(this.nRow).keys()]);
        this.randomColNumbers = Utils.shuffleArray([...Array(this.nCol).keys()]);
        this.huntAndKill();
    }
    get firstCell() {
        return this.cells[0][0];
    }
    get lastCell() {
        return this.cells[this.nRow - 1][this.nCol - 1];
    }
    get randomCell() {
        return this.cells[Utils.random(this.nRow)][Utils.random(this.nCol)];
    }
    /**
     * traverse the maze using depth-first algorithm
     */
    findPath() {
        this.cells.forEach(x => x.forEach(c => (c.traversed = false)));
        const path = [this.firstCell];
        while (1) {
            let current = path[0];
            current.traversed = true;
            if (current.equals(this.lastCell)) {
                break;
            }
            const traversableNeighbors = current.neighbors
                .filter(c => c.isConnectedTo(current))
                .filter(c => !c.traversed);
            if (traversableNeighbors.length) {
                path.unshift(traversableNeighbors[0]);
            }
            else {
                path.splice(0, 1);
            }
        }
        return path.reverse();
    }
    huntAndKill() {
        let current = this.randomCell; // hunt-and-kill starts from a random Cell
        while (current) {
            this.kill(current);
            current = this.hunt();
        }
    }
    kill(current) {
        while (current) {
            const next = current.neighbors.find(c => !c.visited);
            if (next) {
                current.connectTo(next);
            }
            current = next;
        }
    }
    hunt() {
        for (let huntRow of this.randomRowNumbers) {
            for (let huntColumn of this.randomColNumbers) {
                const cell = this.cells[huntRow][huntColumn];
                if (cell.visited) {
                    continue;
                }
                const next = cell.neighbors.find(c => c.visited);
                if (next) {
                    cell.connectTo(next);
                    return cell;
                }
            }
        }
    }
    mapNeighbors(cell) {
        if (cell.row - 1 >= 0) {
            cell.neighbors.push(this.cells[cell.row - 1][cell.col]);
        }
        if (cell.row + 1 < this.nRow) {
            cell.neighbors.push(this.cells[cell.row + 1][cell.col]);
        }
        if (cell.col - 1 >= 0) {
            cell.neighbors.push(this.cells[cell.row][cell.col - 1]);
        }
        if (cell.col + 1 < this.nCol) {
            cell.neighbors.push(this.cells[cell.row][cell.col + 1]);
        }
        cell.neighbors = Utils.shuffleArray(cell.neighbors);
    }
}
class Utils {
    /**
     * The de-facto unbiased shuffle algorithm is the Fisher-Yates (aka Knuth) Shuffle.
     */
    static shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const temp = ~~(Math.random() * (i + 1));
            [array[i], array[temp]] = [array[temp], array[i]];
        }
        return array;
    }
    /**
     * Generate a random index within a number `n`
     */
    static random(n) {
        return ~~(Math.random() * n);
    }
}


/***/ }),

/***/ 1442:
/*!**************************************************************!*\
  !*** ./src/app/squares/image-tiles/image-tiles.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageTilesComponent": () => (/* binding */ ImageTilesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class ImageTilesComponent {
    constructor() {
        this.tileCountX = 3;
    }
    ngOnInit() {
        this.canvasSize = 540;
    }
    ngAfterViewInit() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.style.width = `${this.canvasSize}px`;
        this.canvas.style.height = `${this.canvasSize}px`;
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
    }
    upload(files) {
        if (files.length === 0) {
            return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = () => {
            const img = new Image();
            img.src = reader.result.toString();
            img.onload = () => {
                //start
                const tiles = this.getTiles(img);
                this.drawTiles(tiles);
            };
        };
    }
    getTiles(img) {
        if (img.width < this.canvasSize || img.height < this.canvasSize) {
            throw new Error('Image Size too small.');
        }
        const imgData = this.resizeImage(img, this.canvasSize, this.canvasSize);
        const imgSize = imgData.width > imgData.height ? imgData.height : imgData.width;
        const pixelRows = [];
        const data = Array.from(imgData.data);
        while (data.length > 0) {
            pixelRows.push(data.splice(0, imgData.width * 4));
        }
        const tiles = [];
        const tileSize = ~~(imgSize / this.tileCountX);
        for (let i = 0; i < this.tileCountX * this.tileCountX; i++) {
            const x = i % this.tileCountX;
            const y = ~~(i / this.tileCountX);
            let tileDataRows = [];
            for (let row = y * tileSize; row < tileSize * (y + 1); row++) {
                tileDataRows = tileDataRows.concat(pixelRows[row].slice(tileSize * x * 4, tileSize * (x + 1) * 4));
            }
            tiles.push({
                id: i,
                x: i % this.tileCountX,
                y: ~~(i / this.tileCountX),
                data: new Uint8ClampedArray(tileDataRows)
            });
        }
        return tiles;
    }
    drawTiles(tiles) {
        const offset = 1;
        for (const tile of tiles) {
            this.ctx.putImageData(new ImageData(tile.data, this.canvasSize / this.tileCountX, this.canvasSize / this.tileCountX), tile.x * 180 * offset, tile.y * 180 * offset);
        }
    }
    resizeImage(img, width = 1080, height = 1080) {
        if (img.height < img.width) {
            width = Math.floor(height * (img.width / img.height));
        }
        else {
            height = Math.floor(width * (img.height / img.width));
        }
        let resizingCanvas = (document.createElement('canvas'));
        let resizingCanvasContext = resizingCanvas.getContext('2d');
        resizingCanvas.width = img.width;
        resizingCanvas.height = img.height;
        resizingCanvasContext.drawImage(img, 0, 0, resizingCanvas.width, resizingCanvas.height);
        let curImageDimensions = {
            width: Math.floor(img.width),
            height: Math.floor(img.height)
        };
        let halfImageDimensions = {
            width: null,
            height: null
        };
        while (curImageDimensions.width * 0.5 > width) {
            // Reduce the resizing canvas by half and refresh the image
            halfImageDimensions.width = Math.floor(curImageDimensions.width * 0.5);
            halfImageDimensions.height = Math.floor(curImageDimensions.height * 0.5);
            resizingCanvasContext.drawImage(resizingCanvas, 0, 0, curImageDimensions.width, curImageDimensions.height, 0, 0, halfImageDimensions.width, halfImageDimensions.height);
            curImageDimensions.width = halfImageDimensions.width;
            curImageDimensions.height = halfImageDimensions.height;
        }
        let outputCanvas = (document.createElement('canvas'));
        let outputCanvasContext = outputCanvas.getContext('2d');
        outputCanvas.width = width;
        outputCanvas.height = height;
        outputCanvasContext.drawImage(resizingCanvas, 0, 0, curImageDimensions.width, curImageDimensions.height, 0, 0, width, height);
        const imageData = outputCanvasContext.getImageData(0, 0, width, height);
        // outputCanvasContext.clearRect(0, 0, outputCanvas.width, outputCanvas.height);
        return imageData;
    }
}
ImageTilesComponent.ɵfac = function ImageTilesComponent_Factory(t) { return new (t || ImageTilesComponent)(); };
ImageTilesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageTilesComponent, selectors: [["app-image-tiles"]], decls: 4, vars: 0, consts: [["type", "file", 3, "change"], ["file", ""], ["id", "canvas"]], template: function ImageTilesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ImageTilesComponent_Template_input_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.upload(_r0.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "canvas", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbWFnZS10aWxlcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 8567:
/*!************************************************************************!*\
  !*** ./src/app/squares/scramble-squares/scramble-squares.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrambleSquaresComponent": () => (/* binding */ ScrambleSquaresComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7310);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ 1386);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);





function ScrambleSquaresComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2);
} }
function ScrambleSquaresComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ScrambleSquaresComponent_div_11_Template_div_cdkDropListDropped_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.dropListDropped($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDragMoved", function ScrambleSquaresComponent_div_11_Template_div_cdkDragMoved_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.dragMoved($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListEnterPredicate", ctx_r1.dropListEnterPredicate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3, " ");
} }
class ScrambleSquaresComponent {
    constructor(viewportRuler) {
        this.viewportRuler = viewportRuler;
        this.items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.dropListEnterPredicate = (drag, drop) => {
            if (drop == this.placeholder)
                return true;
            if (drop != this.activeContainer)
                return false;
            let phElement = this.placeholder.element.nativeElement;
            let sourceElement = drag.dropContainer.element.nativeElement;
            let dropElement = drop.element.nativeElement;
            let dragIndex = __indexOf(dropElement.parentElement.children, this.source ? phElement : sourceElement);
            let dropIndex = __indexOf(dropElement.parentElement.children, dropElement);
            if (!this.source) {
                this.sourceIndex = dragIndex;
                this.source = drag.dropContainer;
                phElement.style.width = sourceElement.clientWidth + 'px';
                phElement.style.height = sourceElement.clientHeight + 'px';
                sourceElement.parentElement.removeChild(sourceElement);
            }
            this.targetIndex = dropIndex;
            this.target = drop;
            phElement.style.display = '';
            dropElement.parentElement.insertBefore(phElement, dropIndex > dragIndex ? dropElement.nextSibling : dropElement);
            // this.placeholder.enter(
            //   drag,
            //   drag.element.nativeElement.offsetLeft,
            //   drag.element.nativeElement.offsetTop
            // );
            return false;
        };
        this.target = null;
        this.source = null;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        let phElement = this.placeholder.element.nativeElement;
        phElement.style.display = 'none';
        phElement.parentElement.removeChild(phElement);
    }
    add() {
        this.items.push(this.items.length + 1);
    }
    shuffle() {
        this.items.sort(() => 0.5 - Math.random());
    }
    dragMoved(e) {
        let point = this.getPointerPositionOnPage(e.event);
        this.listGroup._items.forEach(dropList => {
            if (__isInsideDropListClientRect(dropList, point.x, point.y)) {
                this.activeContainer = dropList;
                return;
            }
        });
    }
    dropListDropped(event) {
        if (!this.target)
            return;
        let phElement = this.placeholder.element.nativeElement;
        let parent = phElement.parentElement;
        phElement.style.display = 'none';
        parent.removeChild(phElement);
        parent.appendChild(phElement);
        parent.insertBefore(this.source.element.nativeElement, parent.children[this.sourceIndex]);
        this.target = null;
        this.source = null;
        if (this.sourceIndex != this.targetIndex)
            (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.moveItemInArray)(this.items, this.sourceIndex, this.targetIndex);
    }
    /** Determines the point of the page that was touched by the user. */
    getPointerPositionOnPage(event) {
        // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
        const point = __isTouchEvent(event)
            ? event.touches[0] || event.changedTouches[0]
            : event;
        const scrollPosition = this.viewportRuler.getViewportScrollPosition();
        return {
            x: point.pageX - scrollPosition.left,
            y: point.pageY - scrollPosition.top
        };
    }
}
ScrambleSquaresComponent.ɵfac = function ScrambleSquaresComponent_Factory(t) { return new (t || ScrambleSquaresComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.ViewportRuler)); };
ScrambleSquaresComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScrambleSquaresComponent, selectors: [["app-scramble-squares"]], viewQuery: function ScrambleSquaresComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.CdkDropListGroup, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.CdkDropList, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listGroup = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.placeholder = _t.first);
    } }, decls: 12, vars: 3, consts: [[3, "click"], [1, "example-list"], [4, "ngFor", "ngForOf"], ["cdkDropListGroup", "", 1, "example-container"], ["cdkDropList", "", 3, "cdkDropListEnterPredicate", "cdkDropListDropped"], ["cdkDropList", "", 3, "cdkDropListEnterPredicate", "cdkDropListDropped", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "example-box", 3, "cdkDragMoved"]], template: function ScrambleSquaresComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Drag&Drop with a flex-wrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrambleSquaresComponent_Template_button_click_2_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrambleSquaresComponent_Template_button_click_4_listener() { return ctx.shuffle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Shuffle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ScrambleSquaresComponent_li_8_Template, 2, 1, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ScrambleSquaresComponent_Template_div_cdkDropListDropped_10_listener($event) { return ctx.dropListDropped($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ScrambleSquaresComponent_div_11_Template, 3, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListEnterPredicate", ctx.dropListEnterPredicate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.CdkDropListGroup, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.CdkDrag], styles: [".example-list[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n  padding: 0;\r\n}\r\n\r\n.example-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n  padding: 4px;\r\n}\r\n\r\n.example-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  min-width: 600px;\r\n  max-width: 900px;\r\n}\r\n\r\n.example-box[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n  height: 200px;\r\n  border: solid 1px #ccc;\r\n  font-size: 30pt;\r\n  font-weight: bold;\r\n  color: rgba(0, 0, 0, 0.87);\r\n  cursor: move;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  background: #fff;\r\n  border-radius: 4px;\r\n  position: relative;\r\n  z-index: 1;\r\n  \r\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),\r\n    0 1px 5px 0 rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.example-box[_ngcontent-%COMP%]:active {\r\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n  opacity: 0.6;\r\n}\r\n\r\n.cdk-drop-list[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  \r\n}\r\n\r\n.cdk-drag-preview[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  border-radius: 4px;\r\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\r\n  opacity: 0.3;\r\n}\r\n\r\n.cdk-drag-animating[_ngcontent-%COMP%] {\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin-right: 4px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmFtYmxlLXNxdWFyZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsNkRBQTZEO0VBQzdEO21DQUNpQztBQUNuQzs7QUFFQTtFQUNFOzBFQUN3RTtFQUN4RSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2I7eUJBQ3VCO0FBQ3pCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQjswRUFDd0U7QUFDMUU7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzREFBc0Q7QUFDeEQ7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic2NyYW1ibGUtc3F1YXJlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtbGlzdCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWxpc3QgbGkge1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgcGFkZGluZzogNHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1pbi13aWR0aDogNjAwcHg7XHJcbiAgbWF4LXdpZHRoOiA5MDBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtYm94IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xyXG4gIGZvbnQtc2l6ZTogMzBwdDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcclxuICBjdXJzb3I6IG1vdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICAvKiB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDIwMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpOyAqL1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJveDphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgb3BhY2l0eTogMC42O1xyXG59XHJcblxyXG4uY2RrLWRyb3AtbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvKiBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4OyAqL1xyXG59XHJcblxyXG4uY2RrLWRyYWctcHJldmlldyB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxufVxyXG4iXX0= */"] });
function __indexOf(collection, node) {
    return Array.prototype.indexOf.call(collection, node);
}
/** Determines whether an event is a touch event. */
function __isTouchEvent(event) {
    return event.type.startsWith('touch');
}
function __isInsideDropListClientRect(dropList, x, y) {
    const { top, bottom, left, right } = dropList.element.nativeElement.getBoundingClientRect();
    return y >= top && y <= bottom && x >= left && x <= right;
}


/***/ }),

/***/ 2457:
/*!**********************************************!*\
  !*** ./src/app/squares/squares.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SquaresComponent": () => (/* binding */ SquaresComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _image_tiles_image_tiles_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-tiles/image-tiles.component */ 1442);


class SquaresComponent {
    constructor() { }
    ngOnInit() {
    }
}
SquaresComponent.ɵfac = function SquaresComponent_Factory(t) { return new (t || SquaresComponent)(); };
SquaresComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SquaresComponent, selectors: [["app-squares"]], decls: 1, vars: 0, template: function SquaresComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-image-tiles");
    } }, directives: [_image_tiles_image_tiles_component__WEBPACK_IMPORTED_MODULE_0__.ImageTilesComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcXVhcmVzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map