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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!serverStatus\" class=\"container\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n  <h1>Inicjalizacja aplikacji</h1>\n  <mat-spinner></mat-spinner>\n</div>\n\n<div *ngIf=\"serverStatus === ServerStatus.ERROR\" class=\"container\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n  <h1>\n    <mat-error>Błąd serwera spróbuj ponownie później ;(</mat-error>\n  </h1>\n</div>\n\n<div *ngIf=\"serverStatus === ServerStatus.UP\">\n  <div fxLayout fxLayoutAlign=\"center center\">\n    <div *ngIf=\"!session?.id\" class=\"container\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <mat-card class=\"full-margin-small\"\n                fxLayout=\"column\"\n                fxLayoutAlign=\"center\">\n        <div fxLayout=\"column\"\n             fxLayoutAlign=\"space-between stretch\">\n          <h1 class=\"text-center\">pdf live viewer</h1>\n          <div>\n            <h3>Ustaw nową sesję:</h3>\n            <form #adminForm=\"ngForm\" fxLayout=\"column\" fxLayoutAlign=\"space-between\">\n              <mat-form-field>\n                <input matInput type=\"text\" ngModel=\"/assets/sample.pdf\" name=\"url\" required placeholder=\"Wstaw url\">\n              </mat-form-field>\n              <button mat-raised-button color=\"primary\" type=\"button\" (click)=\"setSessionAsAdmin(adminForm)\">\n                Utwórz sesję\n              </button>\n            </form>\n          </div>\n          <div>\n            <h3>Dołącz do sesji jako gość:</h3>\n            <form #userForm=\"ngForm\" fxLayout=\"column\" fxLayoutAlign=\"space-between\">\n              <mat-form-field>\n                <input matInput type=\"text\" ngModel name=\"sessionId\" required placeholder=\"Id sesji\">\n              </mat-form-field>\n              <button mat-raised-button color=\"primary\" type=\"button\" (click)=\"setSessionAsUser(userForm)\">\n                Dołącz\n              </button>\n            </form>\n          </div>\n        </div>\n      </mat-card>\n    </div>\n  </div>\n\n  <div *ngIf=\"session?.id\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <mat-card *ngIf=\"admin\">\n      <mat-card-subtitle fxLayout fxLayoutAlign=\"center center\">\n        <h4>Id sesji:</h4>\n        <h3 class=\"margin-left-small\">{{session?.id}}\n          <button mat-raised-button\n                  class=\"margin-left-small\"\n                  color=\"primary\"\n                  ngxClipboard\n                  (click)=\"showCopyInfo()\"\n                  [cbContent]=\"session?.id\">\n            {{copyText}}\n          </button>\n        </h3>\n\n      </mat-card-subtitle>\n      <mat-card-content fxLayout=\"row\" fxLayoutAlign=\"center\">\n        <div fxLayout=\"row\"\n             fxLayout.lt-md=\"column\"\n             fxLayoutAlign=\"center\"\n             fxLayoutAlign.lt-md=\"center\">\n          <div fxLayoutAlign=\"center\" class=\"margin-bottom-small\">\n            <button mat-raised-button\n                    color=\"accent\"\n                    (click)=\"prev()\">prev\n            </button>\n            <mat-form-field class=\"small-input margin-left-small margin-right-small\">\n              <input matInput class=\"text-center\" placeholder=\"Page nr\" id=\"pageNr\" [value]=\"state.num\" type=\"text\"\n                     (blur)=\"onGoToPage(pageInput)\" #pageInput>\n              <span matSuffix>/{{state.numPages}}</span>\n            </mat-form-field>\n            <button mat-raised-button\n                    color=\"accent\"\n                    class=\"margin-right-small\"\n                    (click)=\"next()\">next\n            </button>\n          </div>\n          <div>\n            <mat-form-field class=\"margin-right-small\">\n              <input matInput class=\"text-center\" id=\"zoom\" placeholder=\"Zoom [%]\" type=\"number\" [value]=\"state.zoom\"\n                     (input)=\"setZoom(zoomInput.value)\" #zoomInput>\n            </mat-form-field>\n            <button mat-raised-button\n                    color=\"accent\"\n                    (click)=\"rotate(90)\">\n              <mat-icon>rotate_right</mat-icon>\n            </button>\n          </div>\n        </div>\n      </mat-card-content>\n    </mat-card>\n    <div class=\"views-container embedded\" *ngIf=\"state && initialized || admin\" fxLayout fxLayout.lt-md=\"column\" fxLayoutAlign=\"center center\" fxLayoutAlign.lt-md=\"stretch\">\n      <mat-card class=\"full-margin-small\" fxFlex=\"25%\" fxFlex.lt-md=\"100%\" *ngIf=\"admin\">\n        <mat-card-header fxLayoutAlign=\"center\">\n          PREV\n        </mat-card-header>\n        <pdf-viewer [src]=\"session.url\"\n                    [page]=\"getPrevPageNr()\"\n                    [zoom]=\"0.9\"\n                    [rotation]=\"+state.rotation\"\n                    [show-all]=\"false\"\n                    [original-size]=\"true\"\n                    [fit-to-page]=\"true\"\n                    [hidden]=\"!isPrevAvailable()\">\n        </pdf-viewer>\n      </mat-card>\n      <mat-card class=\"full-margin-small\" fxFlex=\"{{admin ? '50%' : '100%'}}\" fxFlex.lt-md=\"100%\">\n        <mat-card-header fxLayoutAlign=\"center\" *ngIf=\"admin\">\n          <span>ACTUAL</span>\n        </mat-card-header>\n        <pdf-viewer [src]=\"session.url\"\n                    [page]=\"state.num\"\n                    [zoom]=\"admin ? 0.9 : state.zoom / 100\"\n                    [rotation]=\"+state.rotation\"\n                    [show-all]=\"false\"\n                    [original-size]=\"true\"\n                    [fit-to-page]=\"true\"\n                    (after-load-complete)=\"setData($event)\">\n        </pdf-viewer>\n      </mat-card>\n      <mat-card class=\"full-margin-small\" fxFlex=\"25%\" fxFlex.lt-md=\"100%\" *ngIf=\"admin\">\n        <mat-card-header fxLayoutAlign=\"center\">\n          NEXT\n        </mat-card-header>\n        <pdf-viewer [src]=\"session.url\"\n                    [page]=\"getNextPageNr()\"\n                    [zoom]=\"0.9\"\n                    [rotation]=\"+state.rotation\"\n                    [show-all]=\"false\"\n                    [original-size]=\"true\"\n                    [fit-to-page]=\"true\"\n                    [hidden]=\"!isNextAvailable()\">\n        </pdf-viewer>\n      </mat-card>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\n  min-width: 350px;\n}\n\n.views-container {\n  width: 100%;\n}\n\n.container {\n  width: 100vw;\n  height: 100vh;\n}\n\n.full-margin-small {\n  margin: 20px;\n}\n\n.margin-left {\n  margin-left: 50px;\n}\n\n.margin-right {\n  margin-right: 50px;\n}\n\n.margin-top-large {\n  margin-top: 100px;\n}\n\n.margin-bottom-small {\n  margin-bottom: 20px;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.small-input {\n  max-width: 100px;\n}\n\n.margin-left-small {\n  margin-left: 20px;\n}\n\n.margin-right-small {\n  margin-right: 20px;\n}\n\n.app-visible {\n  visibility: visible;\n}\n\n.app-hidden {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFByb2pla3R5XFxqYXZhXFxsaXZlLXZpZXdlci13ZWItdWkvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxpQkFBQTtBQ0VGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURDQTtFQUNFLGlCQUFBO0FDRUY7O0FEQ0E7RUFDRSxtQkFBQTtBQ0VGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURDQTtFQUNFLGdCQUFBO0FDRUY7O0FEQ0E7RUFDRSxpQkFBQTtBQ0VGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURDQTtFQUNFLG1CQUFBO0FDRUY7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gIG1pbi13aWR0aDogMzUwcHg7XHJcbn1cclxuXHJcbi52aWV3cy1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmZ1bGwtbWFyZ2luLXNtYWxsIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuLm1hcmdpbi1sZWZ0IHtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuLm1hcmdpbi1yaWdodCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4ubWFyZ2luLXRvcC1sYXJnZSB7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcbi5tYXJnaW4tYm90dG9tLXNtYWxsIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4udGV4dC1jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNtYWxsLWlucHV0IHtcclxuICBtYXgtd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4ubWFyZ2luLWxlZnQtc21hbGwge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4ubWFyZ2luLXJpZ2h0LXNtYWxsIHtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5hcHAtdmlzaWJsZSB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLmFwcC1oaWRkZW4ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG4iLCJtYXQtY2FyZCB7XG4gIG1pbi13aWR0aDogMzUwcHg7XG59XG5cbi52aWV3cy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmZ1bGwtbWFyZ2luLXNtYWxsIHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4ubWFyZ2luLWxlZnQge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuLm1hcmdpbi1yaWdodCB7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbn1cblxuLm1hcmdpbi10b3AtbGFyZ2Uge1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuLm1hcmdpbi1ib3R0b20tc21hbGwge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zbWFsbC1pbnB1dCB7XG4gIG1heC13aWR0aDogMTAwcHg7XG59XG5cbi5tYXJnaW4tbGVmdC1zbWFsbCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4ubWFyZ2luLXJpZ2h0LXNtYWxsIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uYXBwLXZpc2libGUge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uYXBwLWhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn0iXX0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service_message_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/message-client.service */ "./src/app/service/message-client.service.ts");
/* harmony import */ var _service_data_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/data-client.service */ "./src/app/service/data-client.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let AppComponent = class AppComponent {
    constructor(messageClient, dataClient) {
        this.messageClient = messageClient;
        this.dataClient = dataClient;
        this.initialized = false;
        this.state = {
            num: 1,
            zoom: 100,
            rotation: 90,
        };
        this.copyText = 'Copy';
        this.ServerStatus = _service_data_client_service__WEBPACK_IMPORTED_MODULE_4__["ServerStatus"];
        this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.checkServerStatus();
    }
    ngOnInit() {
        this.messageClient.session$.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.onDestroy$))
            .subscribe((session) => {
            this.session = session;
        });
        this.messageClient.admin$.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.onDestroy$))
            .subscribe((admin) => {
            this.admin = admin;
        });
        this.messageClient.state$.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.onDestroy$))
            .subscribe((state) => {
            this.setState(state);
            this.initialized = true;
        });
        this.messageClient.shareState$.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.onDestroy$))
            .subscribe(() => {
            this.sendState(this.state);
        });
    }
    setState(state) {
        this.state = Object.assign({}, this.state, state);
    }
    setZoom(zoom) {
        if (+zoom > 0) {
            this.sendState({ zoom: +zoom });
        }
    }
    setData($event) {
        this.state.numPages = +$event.numPages;
    }
    onGoToPage(pageInput) {
        if (+pageInput.value >= 1 && +pageInput.value <= this.state.numPages) {
            this.sendState({ num: +pageInput.value });
        }
        else {
            pageInput.value = this.state.num.toString();
        }
    }
    prev() {
        if (this.isPrevAvailable()) {
            this.sendState({ num: +this.state.num - 1 });
        }
    }
    next() {
        if (this.isNextAvailable()) {
            this.sendState({ num: +this.state.num + 1 });
        }
    }
    rotate(angle) {
        this.sendState({ rotation: (+this.state.rotation + angle) });
    }
    setSessionAsUser(sessionForm) {
        this.markAsDirty(sessionForm);
        if (sessionForm.valid) {
            this.createSession({ id: sessionForm.value.sessionId, url: null, state: this.state }, false);
        }
    }
    setSessionAsAdmin(sessionForm) {
        this.markAsDirty(sessionForm);
        if (sessionForm.valid) {
            this.createSession({ id: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])().toString().substring(0, 5), url: sessionForm.value.url, state: this.state }, true);
        }
    }
    showCopyInfo() {
        this.copyText = 'OK!';
        setTimeout(() => {
            this.copyText = 'Copy';
        }, 1500);
    }
    getNextPageNr() {
        return this.state.num + 1;
    }
    isNextAvailable() {
        return this.getNextPageNr() <= this.state.numPages;
    }
    getPrevPageNr() {
        return this.state.num - 1;
    }
    isPrevAvailable() {
        return this.getPrevPageNr() > 0;
    }
    sendState(data) {
        const state = Object.assign({}, this.state, data);
        this.messageClient.sendState(this.session.id, state);
    }
    createSession(session, admin) {
        this.messageClient.initializeWebSocketConnection(session, admin);
    }
    markAsDirty(form) {
        Object.keys(form.controls).forEach(key => {
            form.controls[key].markAllAsTouched();
        });
    }
    checkServerStatus() {
        this.dataClient.getServerStatus()
            .then((status => this.serverStatus = status));
    }
    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
};
AppComponent.ctorParameters = () => [
    { type: _service_message_client_service__WEBPACK_IMPORTED_MODULE_3__["MessageClient"] },
    { type: _service_data_client_service__WEBPACK_IMPORTED_MODULE_4__["DataClient"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/fesm2015/ng2-pdf-viewer.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm2015/ngx-clipboard.js");
/* harmony import */ var _service_message_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/message-client.service */ "./src/app/service/message-client.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _service_data_client_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/data-client.service */ "./src/app/service/data-client.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__["PdfViewerModule"],
            ngx_clipboard__WEBPACK_IMPORTED_MODULE_6__["ClipboardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]
        ],
        providers: [
            _service_message_client_service__WEBPACK_IMPORTED_MODULE_7__["MessageClient"],
            _service_data_client_service__WEBPACK_IMPORTED_MODULE_10__["DataClient"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");




const modules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"]
];
let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            ...modules
        ],
        exports: [
            ...modules
        ],
        providers: [],
        bootstrap: []
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/service/data-client.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/data-client.service.ts ***!
  \************************************************/
/*! exports provided: DataClient, ServerStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataClient", function() { return DataClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStatus", function() { return ServerStatus; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");



let DataClient = class DataClient {
    getServerStatus() {
        return this.checkServerStatus(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/status', 1000, 30);
    }
    checkServerStatus(url, timeout, limit) {
        return fetch(url)
            .then((response) => {
            if (response.ok && limit) {
                setTimeout(this.checkServerStatus, timeout, url, timeout, --limit);
            }
            else {
                return false;
            }
            return response.json();
        })
            .then((response) => {
            if (response) {
                return ServerStatus.UP;
            }
            else {
                return ServerStatus.ERROR;
            }
        })
            .catch(() => {
            return ServerStatus.ERROR;
        });
    }
};
DataClient = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DataClient);

var ServerStatus;
(function (ServerStatus) {
    ServerStatus["UP"] = "UP";
    ServerStatus["ERROR"] = "ERROR";
})(ServerStatus || (ServerStatus = {}));


/***/ }),

/***/ "./src/app/service/message-client.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/message-client.service.ts ***!
  \***************************************************/
/*! exports provided: MessageClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageClient", function() { return MessageClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stompjs */ "./node_modules/stompjs/index.js");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(stompjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sockjs-client */ "./node_modules/sockjs-client/lib/entry.js");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






let MessageClient = class MessageClient {
    constructor() {
        this.src$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.state$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.session$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.admin$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.shareState$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    initializeWebSocketConnection(session, admin) {
        console.log('initializeWebSocketConnection');
        this.session$.next(session);
        this.admin$.next(admin);
        const ws = new sockjs_client__WEBPACK_IMPORTED_MODULE_3__(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/state');
        this.stompClient = stompjs__WEBPACK_IMPORTED_MODULE_2__["over"](ws);
        this.stompClient.connect({}, (frame) => {
            this.subscribeToSessionCommands(session.id);
            admin
                ? this.subscribeToSessionDataAsAdmin(session)
                : this.subscribeToSessionDataAsUser(session.id);
        });
    }
    subscribeToSessionCommands(sessionId) {
        console.log('subscribeToSessionCommands');
        this.stompClient.subscribe('/topic/state/' + sessionId, (message) => {
            if (message.body) {
                const state = JSON.parse(message.body);
                this.state$.next(state);
            }
        });
    }
    subscribeToSessionDataAsAdmin(sessionData) {
        console.log('subscribeToSessionDataAsAdmin');
        this.src$.next(sessionData.url);
        this.stompClient.subscribe('/topic/admin/init/' + sessionData.id, (message) => {
            if (message.body) {
                const user = JSON.parse(message.body);
                // todo save user?
                this.sendMessage('/app/admin/init/' + sessionData.id, sessionData);
                setTimeout(() => this.shareState$.next(), 2000);
            }
        });
    }
    subscribeToSessionDataAsUser(sessionId) {
        console.log('subscribeToSessionDataAsUser');
        this.stompClient.subscribe('/topic/init/' + sessionId, (message) => {
            if (message.body) {
                const session = JSON.parse(message.body);
                this.session$.next(session);
            }
        });
        this.sendMessage('/app/init/' + sessionId, { id: '123', username: 'jankowal' });
    }
    sendState(sessionId, state) {
        this.sendMessage('/app/state/' + sessionId, state);
    }
    sendMessage(path, data) {
        this.stompClient.send(path, {}, JSON.stringify(data));
    }
};
MessageClient = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], MessageClient);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    apiUrl: 'http://localhost:8080'
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projekty\java\live-viewer-web-ui\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map