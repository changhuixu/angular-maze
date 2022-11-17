"use strict";
(self["webpackChunkangular_maze"] = self["webpackChunkangular_maze"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 26, vars: 0, consts: [[2, "text-align", "center", "margin-bottom", "0.25rem"], ["href", "https://github.com/changhuixu/angular-maze", "title", "git repo"], [2, "text-align", "center"], ["routerLink", "maze", "routerLinkActive", "active"], [2, "width", "1rem", "display", "inline-block"], ["routerLink", "candy", "routerLinkActive", "active"], ["routerLink", "math1", "routerLinkActive", "active"], ["routerLink", "math2", "routerLinkActive", "active"], ["routerLink", "math3", "routerLinkActive", "active"], ["routerLink", "8-puzzle", "routerLinkActive", "active"], ["routerLink", "square", "routerLinkActive", "active"], [2, "margin", "0 auto"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " GitHub Repo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 2)(4, "a", 3);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Fractions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "4 Operations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "8 Puzzle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Squares");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive], styles: ["nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  color: #000;\r\n  background: #dbeccd;\r\n  padding: 0.5rem 1rem;\r\n  width: 5rem;\r\n  text-decoration: none;\r\n  white-space: nowrap;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n  background-color: #4caf50;\r\n  color: white;\r\n  font-weight: 500;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.active) {\r\n  background-color: #8cad70;\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IGEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjb2xvcjogIzAwMDtcclxuICBiYWNrZ3JvdW5kOiAjZGJlY2NkO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIHdpZHRoOiA1cmVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG5uYXYgYS5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbm5hdiBhOmhvdmVyOm5vdCguYWN0aXZlKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhjYWQ3MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _maze_maze_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maze/maze.component */ 374);
/* harmony import */ var _candy_candy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./candy/candy.component */ 3006);
/* harmony import */ var _candy_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./candy/canvas/canvas.component */ 2204);
/* harmony import */ var _squares_scramble_squares_scramble_squares_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./squares/scramble-squares/scramble-squares.component */ 8567);
/* harmony import */ var _squares_squares_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./squares/squares.component */ 2457);
/* harmony import */ var _squares_image_tiles_image_tiles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./squares/image-tiles/image-tiles.component */ 1442);
/* harmony import */ var _math1_math1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./math1/math1.component */ 5297);
/* harmony import */ var _eight_puzzle_eight_puzzle_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./eight-puzzle/eight-puzzle.component */ 4365);
/* harmony import */ var _eight_puzzle_eight_puzzle_tile_eight_puzzle_tile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./eight-puzzle/eight-puzzle-tile/eight-puzzle-tile.component */ 5059);
/* harmony import */ var _math2_math2_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./math2/math2.component */ 7670);
/* harmony import */ var _math_math_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./math/math.module */ 8216);
/* harmony import */ var _math3_math3_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./math3/math3.component */ 6372);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);



















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__.DragDropModule,
        _math_math_module__WEBPACK_IMPORTED_MODULE_11__.MathModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule.forRoot([
            { path: '', redirectTo: 'maze', pathMatch: 'full' },
            { path: 'maze', component: _maze_maze_component__WEBPACK_IMPORTED_MODULE_1__.MazeComponent },
            { path: 'candy', component: _candy_candy_component__WEBPACK_IMPORTED_MODULE_2__.CandyComponent },
            { path: 'math1', component: _math1_math1_component__WEBPACK_IMPORTED_MODULE_7__.Math1Component },
            { path: 'math2', component: _math2_math2_component__WEBPACK_IMPORTED_MODULE_10__.Math2Component },
            { path: 'math3', component: _math3_math3_component__WEBPACK_IMPORTED_MODULE_12__.Math3Component },
            { path: '8-puzzle', component: _eight_puzzle_eight_puzzle_component__WEBPACK_IMPORTED_MODULE_8__.EightPuzzleComponent },
            { path: 'square', component: _squares_squares_component__WEBPACK_IMPORTED_MODULE_5__.SquaresComponent },
            { path: '**', redirectTo: '' },
        ])] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _maze_maze_component__WEBPACK_IMPORTED_MODULE_1__.MazeComponent,
        _candy_candy_component__WEBPACK_IMPORTED_MODULE_2__.CandyComponent,
        _candy_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_3__.CanvasComponent,
        _squares_scramble_squares_scramble_squares_component__WEBPACK_IMPORTED_MODULE_4__.ScrambleSquaresComponent,
        _squares_squares_component__WEBPACK_IMPORTED_MODULE_5__.SquaresComponent,
        _squares_image_tiles_image_tiles_component__WEBPACK_IMPORTED_MODULE_6__.ImageTilesComponent,
        _math1_math1_component__WEBPACK_IMPORTED_MODULE_7__.Math1Component,
        _eight_puzzle_eight_puzzle_component__WEBPACK_IMPORTED_MODULE_8__.EightPuzzleComponent,
        _eight_puzzle_eight_puzzle_tile_eight_puzzle_tile_component__WEBPACK_IMPORTED_MODULE_9__.EightPuzzleTileComponent,
        _math2_math2_component__WEBPACK_IMPORTED_MODULE_10__.Math2Component,
        _math3_math3_component__WEBPACK_IMPORTED_MODULE_12__.Math3Component], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__.DragDropModule,
        _math_math_module__WEBPACK_IMPORTED_MODULE_11__.MathModule, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule] }); })();


/***/ }),

/***/ 3006:
/*!******************************************!*\
  !*** ./src/app/candy/candy.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandyComponent": () => (/* binding */ CandyComponent)
/* harmony export */ });
/* harmony import */ var _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas/canvas.component */ 2204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);




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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Enter your name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CandyComponent_Template_input_ngModelChange_4_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CandyComponent_Template_button_click_5_listener() { return ctx.draw(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Draw");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-canvas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.name);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_0__.CanvasComponent], styles: [".my-form[_ngcontent-%COMP%] {\r\n  margin: 1rem 0;\r\n}\r\n\r\n.my-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  max-width: 10rem;\r\n  padding: 0.25rem;\r\n  margin: 0 0.5rem;\r\n}\r\n\r\n.my-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding: 0.25rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbmR5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoiY2FuZHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1mb3JtIHtcclxuICBtYXJnaW46IDFyZW0gMDtcclxufVxyXG5cclxuLm15LWZvcm0gaW5wdXQge1xyXG4gIG1heC13aWR0aDogMTByZW07XHJcbiAgcGFkZGluZzogMC4yNXJlbTtcclxuICBtYXJnaW46IDAgMC41cmVtO1xyXG59XHJcblxyXG4ubXktZm9ybSBidXR0b24ge1xyXG4gIHBhZGRpbmc6IDAuMjVyZW07XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 2204:
/*!**************************************************!*\
  !*** ./src/app/candy/canvas/canvas.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasComponent": () => (/* binding */ CanvasComponent)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ 6322);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandyText": () => (/* reexport safe */ _candy_text__WEBPACK_IMPORTED_MODULE_2__.CandyText),
/* harmony export */   "Particle": () => (/* reexport safe */ _particle__WEBPACK_IMPORTED_MODULE_1__.Particle),
/* harmony export */   "Position": () => (/* reexport safe */ _position__WEBPACK_IMPORTED_MODULE_0__.Position)
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

/***/ 5059:
/*!*******************************************************************************!*\
  !*** ./src/app/eight-puzzle/eight-puzzle-tile/eight-puzzle-tile.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EightPuzzleTileComponent": () => (/* binding */ EightPuzzleTileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_eight_puzzle_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/eight-puzzle.services */ 32);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



const _c0 = function (a0) { return { empty: a0 }; };
class EightPuzzleTileComponent {
    constructor(svc) {
        this.svc = svc;
        this.id = 0;
        this.letter = '';
    }
    ngOnInit() { }
    move() {
        this.svc.move(this.id);
        if (this.svc.isWinning()) {
            alert('Success');
        }
    }
}
EightPuzzleTileComponent.ɵfac = function EightPuzzleTileComponent_Factory(t) { return new (t || EightPuzzleTileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_eight_puzzle_services__WEBPACK_IMPORTED_MODULE_0__.EightPuzzleService)); };
EightPuzzleTileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EightPuzzleTileComponent, selectors: [["app-eight-puzzle-tile"]], hostBindings: function EightPuzzleTileComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EightPuzzleTileComponent_click_HostBindingHandler($event) { return ctx.move($event); });
    } }, inputs: { id: "id", letter: "letter" }, decls: 2, vars: 4, consts: [[1, "tile", 3, "ngClass"]], template: function EightPuzzleTileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, !(ctx.letter == null ? null : ctx.letter.trim())));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.letter, "\n");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass], styles: ["[_nghost-%COMP%] {\r\n  display: flex;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.tile[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-grow: 1;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 4rem;\r\n  font-family: sans-serif;\r\n  font-weight: bold;\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n  color: #dad4ef;\r\n  background: #456990;\r\n  border: 1px solid #028090;\r\n  cursor: pointer;\r\n}\r\n\r\n.empty[_ngcontent-%COMP%] {\r\n  background: #dad4ef;\r\n  border: 2px solid #114b5f;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVpZ2h0LXB1enpsZS10aWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQix5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCIiwiZmlsZSI6ImVpZ2h0LXB1enpsZS10aWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50aWxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogNHJlbTtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBjb2xvcjogI2RhZDRlZjtcclxuICBiYWNrZ3JvdW5kOiAjNDU2OTkwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMjgwOTA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZW1wdHkge1xyXG4gIGJhY2tncm91bmQ6ICNkYWQ0ZWY7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzExNGI1ZjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 4365:
/*!********************************************************!*\
  !*** ./src/app/eight-puzzle/eight-puzzle.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EightPuzzleComponent": () => (/* binding */ EightPuzzleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_eight_puzzle_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/eight-puzzle.services */ 32);
/* harmony import */ var _eight_puzzle_tile_eight_puzzle_tile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eight-puzzle-tile/eight-puzzle-tile.component */ 5059);



class EightPuzzleComponent {
    constructor(svc) {
        this.svc = svc;
        this.tileSize = 0;
        this.letters = [];
    }
    ngOnInit() {
        this.tileSize = Math.min(window.innerWidth, window.innerHeight) * 0.9;
        this.letters = this.svc.randomize();
    }
    onResize(event) {
        this.ngOnInit();
    }
}
EightPuzzleComponent.ɵfac = function EightPuzzleComponent_Factory(t) { return new (t || EightPuzzleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_eight_puzzle_services__WEBPACK_IMPORTED_MODULE_0__.EightPuzzleService)); };
EightPuzzleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EightPuzzleComponent, selectors: [["app-eight-puzzle"]], hostBindings: function EightPuzzleComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function EightPuzzleComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, decls: 13, vars: 22, consts: [[2, "display", "flex", "flex-direction", "column", 3, "resize"], [2, "display", "flex", "flex-direction", "row", "flex-grow", "1"], [3, "id", "letter"]], template: function EightPuzzleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function EightPuzzleComponent_Template_div_resize_0_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-eight-puzzle-tile", 2)(3, "app-eight-puzzle-tile", 2)(4, "app-eight-puzzle-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "app-eight-puzzle-tile", 2)(7, "app-eight-puzzle-tile", 2)(8, "app-eight-puzzle-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "app-eight-puzzle-tile", 2)(11, "app-eight-puzzle-tile", 2)(12, "app-eight-puzzle-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("height", ctx.tileSize, "px")("width", ctx.tileSize, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", 0)("letter", ctx.letters[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", 1)("letter", ctx.letters[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", 2)("letter", ctx.letters[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", 3)("letter", ctx.letters[3]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", 4)("letter", ctx.letters[4]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", 5)("letter", ctx.letters[5]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", 6)("letter", ctx.letters[6]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", 7)("letter", ctx.letters[7]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", 8)("letter", ctx.letters[8]);
    } }, dependencies: [_eight_puzzle_tile_eight_puzzle_tile_component__WEBPACK_IMPORTED_MODULE_1__.EightPuzzleTileComponent], styles: ["[_nghost-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVpZ2h0LXB1enpsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZCIsImZpbGUiOiJlaWdodC1wdXp6bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDFyZW07XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 32:
/*!****************************************************************!*\
  !*** ./src/app/eight-puzzle/services/eight-puzzle.services.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EightPuzzleService": () => (/* binding */ EightPuzzleService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class EightPuzzleService {
    constructor() {
        this._letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''];
        this._win = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''];
        this.n = this._letters.length;
        this.rows = Math.sqrt(this.n);
    }
    getLetter(i) {
        return i < this.n ? this._letters[i] : '';
    }
    getCoordinate(i) {
        const x = Math.floor(i / this.rows);
        const y = i - this.rows * x;
        return [x, y];
    }
    randomize() {
        let currentIndex = this.n;
        while (currentIndex != 0) {
            const i = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [this._letters[currentIndex], this._letters[i]] = [
                this._letters[i],
                this._letters[currentIndex],
            ];
        }
        return this._letters;
    }
    canMove(i) {
        const [x, y] = this.getCoordinate(i);
        if (x >= this.rows || y >= this.rows || !this._letters[i]?.trim()) {
            return false;
        }
        // down
        if (x < this.rows - 1 && !this._letters[(x + 1) * this.rows + y]?.trim()) {
            return true;
        }
        // up
        if (x > 0 && !this._letters[(x - 1) * this.rows + y]?.trim()) {
            return true;
        }
        // left
        if (y > 0 && !this._letters[x * this.rows + y - 1]?.trim()) {
            return true;
        } // right
        if (y < this.rows - 1 && !this._letters[x * this.rows + y + 1]?.trim()) {
            return true;
        }
        return false;
    }
    move(i) {
        if (this.isWinning()) {
            return;
        }
        const [x, y] = this.getCoordinate(i);
        // down
        if (x < this.rows - 1 && !this._letters[(x + 1) * this.rows + y]?.trim()) {
            [this._letters[i], this._letters[(x + 1) * this.rows + y]] = [
                this._letters[(x + 1) * this.rows + y],
                this._letters[i],
            ];
        }
        // up
        if (x > 0 && !this._letters[(x - 1) * this.rows + y]?.trim()) {
            [this._letters[i], this._letters[(x - 1) * this.rows + y]] = [
                this._letters[(x - 1) * this.rows + y],
                this._letters[i],
            ];
        }
        // left
        if (y > 0 && !this._letters[x * this.rows + y - 1]?.trim()) {
            [this._letters[i], this._letters[x * this.rows + y - 1]] = [
                this._letters[x * this.rows + y - 1],
                this._letters[i],
            ];
        }
        // right
        if (y < this.rows - 1 && !this._letters[x * this.rows + y + 1]?.trim()) {
            [this._letters[i], this._letters[x * this.rows + y + 1]] = [
                this._letters[x * this.rows + y + 1],
                this._letters[i],
            ];
        }
    }
    isWinning() {
        return this._letters.every((e, i) => e === this._win[i]);
    }
}
EightPuzzleService.ɵfac = function EightPuzzleService_Factory(t) { return new (t || EightPuzzleService)(); };
EightPuzzleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EightPuzzleService, factory: EightPuzzleService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5297:
/*!******************************************!*\
  !*** ./src/app/math1/math1.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Math1Component": () => (/* binding */ Math1Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function Math1Component_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4);
} }
function Math1Component_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5);
} }
function Math1Component_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 5);
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function Math1Component_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 5);
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class Math1Component {
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
        const max = 1000;
        const min = 10;
        for (let i = 0; i < this.nAdd; i++) {
            let a = this.randomIntBetween(min, max);
            let b = this.randomIntBetween(min, max);
            this.additions.push(`${a} + ${b}`);
        }
    }
    getSubtractions() {
        const max = 1000;
        const min = 10;
        for (let i = 0; i < this.nAdd; i++) {
            let a = this.randomIntBetween(min, max);
            let b = this.randomIntBetween(min, max);
            let s = a > b ? `${a} - ${b}` : `${b} - ${a}`;
            this.subtractions.push(s);
        }
    }
    getMultiplications() {
        const max = 200;
        const min = 1;
        for (let i = 0; i < this.nAdd; i++) {
            let a = this.randomIntBetween(min, max);
            let b = this.randomIntBetween(min, max);
            this.multiplications.push(`${a} &times; ${b}`);
        }
    }
    getDivisions() {
        const max = 100;
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
Math1Component.ɵfac = function Math1Component_Factory(t) { return new (t || Math1Component)(); };
Math1Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Math1Component, selectors: [["app-math"]], decls: 11, vars: 4, consts: [[2, "text-align", "center"], [1, "card-row"], [1, "card"], [4, "ngFor", "ngForOf"], [3, "innerHTML", 4, "ngFor", "ngForOf"], [3, "innerHTML"]], template: function Math1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Basic Arithmetics - 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Math1Component_p_4_Template, 2, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Math1Component_p_6_Template, 2, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, Math1Component_p_8_Template, 1, 1, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, Math1Component_p_10_Template, 1, 1, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.additions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subtractions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.multiplications);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.divisions);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".card-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-flow: row;\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n  gap: 1rem;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.2);\r\n  transition: 0.3s;\r\n  min-width: 5rem;\r\n  max-width: 20rem;\r\n  padding: 1rem 2rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-grow: 1;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.2);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGgxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBO0VBQ0UsaURBQWlEO0VBQ2pELGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDhDQUE4QztBQUNoRCIsImZpbGUiOiJtYXRoMS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMC41cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgbWluLXdpZHRoOiA1cmVtO1xyXG4gIG1heC13aWR0aDogMjByZW07XHJcbiAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 7670:
/*!******************************************!*\
  !*** ./src/app/math2/math2.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Math2Component": () => (/* binding */ Math2Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _math_math_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/math.directive */ 8588);


class Math2Component {
    constructor() {
        this.frac = `<math xmlns="http://www.w3.org/1998/Math/MathML">
<mfrac>
  <mn>numerator1</mn>
  <mn>denominator1</mn>
</mfrac>
<mo>=</mo>
<mn>?</mn>
</math>
  `;
        this.mathml = `<math xmlns="http://www.w3.org/1998/Math/MathML">
<mfrac>
  <mn>numerator1</mn>
  <mn>denominator1</mn>
</mfrac>
<mo>operator</mo>
<mfrac>
  <mn>numerator2</mn>
  <mn>denominator2</mn>
</mfrac>
<mo>=</mo>
<mn>?</mn>
</math>
  `;
        this.nAdd = 10;
        this.nSub = 10;
        this.fracSimp = '<math xmlns="http://www.w3.org/1998/Math/MathML">';
        this.additions1 = '<math xmlns="http://www.w3.org/1998/Math/MathML">';
        this.additions2 = '<math xmlns="http://www.w3.org/1998/Math/MathML">';
        this.multiplications = '<math xmlns="http://www.w3.org/1998/Math/MathML">';
    }
    ngOnInit() {
        this.getSimplifications();
        this.getAdditions1();
        this.getAdditions2();
    }
    getSimplifications() {
        const max = 20;
        const min = 1;
        for (let i = 0; i < this.nAdd; i++) {
            let a = this.randomIntBetween(min, max);
            let b = this.randomIntBetween(min, max);
            let c = this.randomIntBetween(min, max);
            this.fracSimp = this.fracSimp.concat(`<mrow class="equation">
<mfrac>
  <mn>${a * c}</mn>
  <mn>${b * c}</mn>
</mfrac>
<mo>=</mo>
<mn>?</mn>
</mrow>`);
        }
        this.fracSimp = this.fracSimp.concat('</math>');
    }
    getAdditions1() {
        const max = 10;
        const min = 1;
        for (let i = 0; i < this.nAdd; i++) {
            let a = this.randomIntBetween(min, max);
            let b = this.randomIntBetween(min, max);
            let c = this.randomIntBetween(min, max);
            let d = this.randomIntBetween(min, max);
            this.additions1 = this.additions1.concat(`<mrow class="equation">
<mfrac>
  <mn>${a}</mn>
  <mn>${b}</mn>
</mfrac>
<mo>+</mo>
<mfrac>
  <mn>${c}</mn>
  <mn>${d}</mn>
</mfrac>
<mo>=</mo>
<mn>?</mn>
</mrow>`);
            this.multiplications = this.multiplications
                .concat(`<mrow class="equation">
<mfrac>
  <mn>${a}</mn>
  <mn>${b}</mn>
</mfrac>
<mo>&times;</mo>
<mfrac>
  <mn>${c}</mn>
  <mn>${d}</mn>
</mfrac>
<mo>=</mo>
<mn>?</mn>
</mrow>`);
        }
        this.additions1 = this.additions1.concat('</math>');
        this.multiplications = this.multiplications.concat('</math>');
    }
    getAdditions2() {
        const max = 25;
        const min = 1;
        for (let i = 0; i < this.nAdd; i++) {
            let a = this.randomIntBetween(min, max);
            let b = this.randomIntBetween(min, max);
            let c = this.randomIntBetween(min, max);
            let d = this.randomIntBetween(min, max);
            this.additions2 = this.additions2.concat(`<mrow class="equation">
<mfrac>
  <mn>${a}</mn>
  <mn>${b}</mn>
</mfrac>
<mo>+</mo>
<mfrac>
  <mn>${c}</mn>
  <mn>${d}</mn>
</mfrac>
<mo>=</mo>
<mn>?</mn>
</mrow>`);
        }
        this.additions2 = this.additions2.concat('</math>');
    }
    randomIntBetween(min, max) {
        return ~~(Math.random() * (max - min + 1) + min);
    }
}
Math2Component.ɵfac = function Math2Component_Factory(t) { return new (t || Math2Component)(); };
Math2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Math2Component, selectors: [["app-math2"]], decls: 11, vars: 4, consts: [[2, "text-align", "center"], [1, "card-row"], [1, "card"], [3, "appMath"]], template: function Math2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Fractions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appMath", ctx.fracSimp);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appMath", ctx.additions1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appMath", ctx.additions2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appMath", ctx.multiplications);
    } }, dependencies: [_math_math_directive__WEBPACK_IMPORTED_MODULE_0__.MathDirective], styles: [".equation {\r\n  display: block !important;\r\n  font-size: xx-large !important;\r\n  margin: 1.5rem 0 !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGgyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLDJCQUEyQjtBQUM3QiIsImZpbGUiOiJtYXRoMi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5lcXVhdGlvbiB7XHJcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IHh4LWxhcmdlICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAxLjVyZW0gMCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */", ".card-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-flow: row;\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n  gap: 1rem;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.2);\r\n  transition: 0.3s;\r\n  min-width: 5rem;\r\n  max-width: 20rem;\r\n  padding: 1rem 2rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-grow: 1;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.2);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGgxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBO0VBQ0UsaURBQWlEO0VBQ2pELGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDhDQUE4QztBQUNoRCIsImZpbGUiOiJtYXRoMS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMC41cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgbWluLXdpZHRoOiA1cmVtO1xyXG4gIG1heC13aWR0aDogMjByZW07XHJcbiAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 6372:
/*!******************************************!*\
  !*** ./src/app/math3/math3.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Math3Component": () => (/* binding */ Math3Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function Math3Component_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 4);
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function Math3Component_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 4);
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class Math3Component {
    constructor() {
        this.nAdd = 10;
        this.nSub = 10;
        this.list1 = [];
        this.list2 = [];
        this.operators = ['+', '-', '&times;', '&div;'];
    }
    ngOnInit() {
        this.getLists();
    }
    getLists() {
        const max = 200;
        const min = 1;
        for (let i = 0; i < this.nAdd; i++) {
            const a = this.randomIntBetween(min, max);
            const op1 = this.randomOperator();
            const b = this.randomIntBetween(min, max);
            const op2 = this.randomOperator();
            const f = this.randomIntBetween(1, 10);
            const c = this.randomIntBetween(min, max);
            const op3 = this.randomOperator();
            const d = this.randomIntBetween(min, max);
            this.list1.push(`(${a} ${op1} ${b}) ${op2} (${c} ${op3} ${d})`);
            this.list2.push(`(${d} ${op1} ${b}) ${op2} ${f} &times; (${a} ${op3} ${c})`);
        }
    }
    randomIntBetween(min, max) {
        return ~~(Math.random() * (max - min + 1) + min);
    }
    randomOperator() {
        return this.operators[~~(Math.random() * 4)];
    }
}
Math3Component.ɵfac = function Math3Component_Factory(t) { return new (t || Math3Component)(); };
Math3Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Math3Component, selectors: [["app-math3"]], decls: 7, vars: 2, consts: [[2, "text-align", "center"], [1, "card-row", 2, "font-size", "larger"], [1, "card"], [3, "innerHTML", 4, "ngFor", "ngForOf"], [3, "innerHTML"]], template: function Math3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Four Operations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Math3Component_p_4_Template, 1, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Math3Component_p_6_Template, 1, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list2);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXRoMy5jb21wb25lbnQuY3NzIn0= */", ".card-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-flow: row;\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n  gap: 1rem;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.2);\r\n  transition: 0.3s;\r\n  min-width: 5rem;\r\n  max-width: 20rem;\r\n  padding: 1rem 2rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-grow: 1;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.2);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGgxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBO0VBQ0UsaURBQWlEO0VBQ2pELGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDhDQUE4QztBQUNoRCIsImZpbGUiOiJtYXRoMS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMC41cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgbWluLXdpZHRoOiA1cmVtO1xyXG4gIG1heC13aWR0aDogMjByZW07XHJcbiAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 8588:
/*!****************************************!*\
  !*** ./src/app/math/math.directive.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MathDirective": () => (/* binding */ MathDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _math_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.service */ 7766);


class MathDirective {
    constructor(svc, elementRef, ngZone) {
        this.svc = svc;
        this.ngZone = ngZone;
        this.appMath = '';
        this.el = elementRef.nativeElement;
    }
    ngOnInit() {
        this.render();
    }
    ngOnChanges(changes) {
        if (changes && changes['appMath'] && changes['appMath'].currentValue) {
            this.render();
        }
    }
    render() {
        this.ngZone.runOutsideAngular(() => {
            this.svc
                .registerMathJax()
                .subscribe(() => this.svc.render(this.el, this.appMath));
        });
    }
}
MathDirective.ɵfac = function MathDirective_Factory(t) { return new (t || MathDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_math_service__WEBPACK_IMPORTED_MODULE_0__.MathService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone)); };
MathDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MathDirective, selectors: [["", "appMath", ""]], inputs: { appMath: "appMath" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ 8216:
/*!*************************************!*\
  !*** ./src/app/math/math.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MathModule": () => (/* binding */ MathModule)
/* harmony export */ });
/* harmony import */ var _math_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.directive */ 8588);
/* harmony import */ var _math_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math.service */ 7766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



class MathModule {
}
MathModule.ɵfac = function MathModule_Factory(t) { return new (t || MathModule)(); };
MathModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MathModule });
MathModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [_math_service__WEBPACK_IMPORTED_MODULE_1__.MathService] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MathModule, { declarations: [_math_directive__WEBPACK_IMPORTED_MODULE_0__.MathDirective], exports: [_math_directive__WEBPACK_IMPORTED_MODULE_0__.MathDirective] }); })();


/***/ }),

/***/ 7766:
/*!**************************************!*\
  !*** ./src/app/math/math.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MathService": () => (/* binding */ MathService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class MathService {
  constructor(document) {
    this.document = document;
    this.source = 'https://cdn.jsdelivr.net/npm/mathjax@3.0.5/es5/mml-chtml.js';
    this.integrity = 'sha256-CnzfCXjFj1REmPHgWvm/OQv8gFaxwbLKUi41yCU7N2s=';
  }

  registerMathJax() {
    if (this.loaded$) {
      return this.loaded$.asObservable();
    }

    this.loaded$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.ReplaySubject();
    const script = this.document.createElement('script');
    script.type = 'text/javascript';
    script.src = this.source;
    script.integrity = this.integrity;
    script.async = true;
    script.crossOrigin = 'anonymous';

    script.onload = () => {
      this.loaded$.next(true);
      this.loaded$.complete();
    };

    this.document.head.appendChild(script);
    return this.loaded$.asObservable();
  }

  render(element, math) {
    // Take initial typesetting which MathJax performs into account
    window.MathJax.startup.promise.then(() => {
      element.innerHTML = math;
      window.MathJax.typesetPromise();
    });
  }

}

MathService.ɵfac = function MathService_Factory(t) {
  return new (t || MathService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT));
};

MathService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: MathService,
  factory: MathService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 374:
/*!****************************************!*\
  !*** ./src/app/maze/maze.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MazeComponent": () => (/* binding */ MazeComponent)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ 4915);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);





function MazeComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MazeComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.test()); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "label", 2);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "section")(16, "div", 10)(17, "div")(18, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MazeComponent_Template_span_click_18_listener() { return ctx.move("Up"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\u2B06\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div")(21, "span", 12);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div")(28, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MazeComponent_Template_span_click_28_listener() { return ctx.move("Down"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "\u2B07\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.row);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.col);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.busy);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showTestButton);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel], styles: [".maze-form[_ngcontent-%COMP%] {\r\n  margin: 1rem 0;\r\n}\r\n\r\n.maze-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  max-width: 3rem;\r\n  padding: 0.25rem;\r\n  margin: 0 0.5rem;\r\n}\r\n\r\n.maze-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding: 0.25rem;\r\n  margin: 0 0.5rem;\r\n}\r\n\r\n.arrows[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: xx-large;\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n  cursor: pointer;\r\n  margin: auto 0.25rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hemUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCIiwiZmlsZSI6Im1hemUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXplLWZvcm0ge1xyXG4gIG1hcmdpbjogMXJlbSAwO1xyXG59XHJcblxyXG4ubWF6ZS1mb3JtIGlucHV0IHtcclxuICBtYXgtd2lkdGg6IDNyZW07XHJcbiAgcGFkZGluZzogMC4yNXJlbTtcclxuICBtYXJnaW46IDAgMC41cmVtO1xyXG59XHJcblxyXG4ubWF6ZS1mb3JtIGJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMC4yNXJlbTtcclxuICBtYXJnaW46IDAgMC41cmVtO1xyXG59XHJcblxyXG4uYXJyb3dzIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbjogYXV0byAwLjI1cmVtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 8660:
/*!*************************************!*\
  !*** ./src/app/maze/models/cell.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageTilesComponent": () => (/* binding */ ImageTilesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ImageTilesComponent_Template_input_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.upload(_r0.files)); });
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrambleSquaresComponent": () => (/* binding */ ScrambleSquaresComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ 6328);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ScrambleSquaresComponent_div_11_Template_div_cdkDropListDropped_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.dropListDropped($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDragMoved", function ScrambleSquaresComponent_div_11_Template_div_cdkDragMoved_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.dragMoved($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3)(10, "div", 4);
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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.CdkDropListGroup, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.CdkDrag], styles: [".example-list[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n  padding: 0;\r\n}\r\n\r\n.example-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n  padding: 4px;\r\n}\r\n\r\n.example-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  min-width: 600px;\r\n  max-width: 900px;\r\n}\r\n\r\n.example-box[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n  height: 200px;\r\n  border: solid 1px #ccc;\r\n  font-size: 30pt;\r\n  font-weight: bold;\r\n  color: rgba(0, 0, 0, 0.87);\r\n  cursor: move;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  background: #fff;\r\n  border-radius: 4px;\r\n  position: relative;\r\n  z-index: 1;\r\n  \r\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),\r\n    0 1px 5px 0 rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.example-box[_ngcontent-%COMP%]:active {\r\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n  opacity: 0.6;\r\n}\r\n\r\n.cdk-drop-list[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  \r\n}\r\n\r\n.cdk-drag-preview[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  border-radius: 4px;\r\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\r\n  opacity: 0.3;\r\n}\r\n\r\n.cdk-drag-animating[_ngcontent-%COMP%] {\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin-right: 4px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmFtYmxlLXNxdWFyZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsNkRBQTZEO0VBQzdEO21DQUNpQztBQUNuQzs7QUFFQTtFQUNFOzBFQUN3RTtFQUN4RSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2I7eUJBQ3VCO0FBQ3pCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQjswRUFDd0U7QUFDMUU7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzREFBc0Q7QUFDeEQ7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic2NyYW1ibGUtc3F1YXJlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtbGlzdCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWxpc3QgbGkge1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgcGFkZGluZzogNHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1pbi13aWR0aDogNjAwcHg7XHJcbiAgbWF4LXdpZHRoOiA5MDBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtYm94IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xyXG4gIGZvbnQtc2l6ZTogMzBwdDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcclxuICBjdXJzb3I6IG1vdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICAvKiB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDIwMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpOyAqL1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJveDphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgb3BhY2l0eTogMC42O1xyXG59XHJcblxyXG4uY2RrLWRyb3AtbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvKiBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4OyAqL1xyXG59XHJcblxyXG4uY2RrLWRyYWctcHJldmlldyB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxufVxyXG4iXX0= */"] });
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SquaresComponent": () => (/* binding */ SquaresComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _image_tiles_image_tiles_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-tiles/image-tiles.component */ 1442);


class SquaresComponent {
    constructor() { }
    ngOnInit() {
    }
}
SquaresComponent.ɵfac = function SquaresComponent_Factory(t) { return new (t || SquaresComponent)(); };
SquaresComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SquaresComponent, selectors: [["app-squares"]], decls: 1, vars: 0, template: function SquaresComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-image-tiles");
    } }, dependencies: [_image_tiles_image_tiles_component__WEBPACK_IMPORTED_MODULE_0__.ImageTilesComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcXVhcmVzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
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
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map