(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"]
    },
    {
        path: 'checkout',
        component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_3__["CheckoutComponent"]
    },
    {
        path: 'order/:id/:hash',
        component: _order_order_component__WEBPACK_IMPORTED_MODULE_4__["OrderComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\r\n  <app-navbar></app-navbar>\r\n  <ng-progress [spinner]=\"false\" [color]=\"'#50e3c2'\"></ng-progress>\r\n  <app-header></app-header>\r\n\r\n  <section id=\"content\">\r\n    <router-outlet></router-outlet>\r\n  </section>\r\n\r\n  <app-footer></app-footer>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hero-container {\n  padding: 10px 30px; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'restaurant-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());

Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-progressbar/core */ "./node_modules/@ngx-progressbar/core/fesm5/ngx-progressbar-core.js");
/* harmony import */ var _ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-progressbar/http */ "./node_modules/@ngx-progressbar/http/fesm5/ngx-progressbar-http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./productdetails/productdetails.component */ "./src/app/productdetails/productdetails.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _cartcheckout_cartcheckout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cartcheckout/cartcheckout.component */ "./src/app/cartcheckout/cartcheckout.component.ts");
/* harmony import */ var _response_response_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./response/response.component */ "./src/app/response/response.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _service_details_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./service/details.service */ "./src/app/service/details.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_12__["CartComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_14__["ProductdetailsComponent"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_15__["CheckoutComponent"],
                _cartcheckout_cartcheckout_component__WEBPACK_IMPORTED_MODULE_16__["CartcheckoutComponent"],
                _response_response_component__WEBPACK_IMPORTED_MODULE_17__["ResponseComponent"],
                _order_order_component__WEBPACK_IMPORTED_MODULE_18__["OrderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["StorageServiceModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_5__["NgProgressModule"].forRoot(),
                _ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_6__["NgProgressHttpModule"]
            ],
            providers: [
                _service_details_service__WEBPACK_IMPORTED_MODULE_19__["DetailsService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row cart-stick\">\r\n  <div class=\"col-md-12 d-none d-md-block\">\r\n    <div class=\"cart-container\">\r\n      <h3 (click)=\"storageOrder()\">Order summary</h3>\r\n      <div *ngIf=\"total > 0\">\r\n        <div class=\"row item-container flex-nowrap align-items-center\" *ngFor=\"let item of cart; let index = index; trackBy:trackByIndex;\"  (click)=\"updateItem(item)\">\r\n          <div class=\"col-md-1 no-padding\">\r\n            <div class=\"item-quantity\">{{ item.cantidad }}</div>\r\n          </div>\r\n          <div class=\"col-md-6 no-padding\"> \r\n            <div class=\"item-description\">{{ item.nombre }}</div>\r\n          </div>\r\n          <div class=\"col-md-3 no-padding\">\r\n            <div class=\"item-cost\">{{ item.precio | number:'1.2-2' }}</div>\r\n          </div>\r\n          <div class=\"col-md-2 no-padding d-flex\" (click)=\"deleteOrderItem(item.idProducto, item)\">\r\n            <div class=\"item-delete d-flex\"><img src=\"assets/trash-icon.svg\" alt=\"Delete\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row justify-content-center\">\r\n          <div class=\"col-sm-12 col-md-8 items-total\">\r\n            Total: US$ {{ total | number:'1.2-2'}} \r\n          </div>\r\n        </div>\r\n        <div class=\"row justify-content-center product-add-container\">\r\n          <div class=\"product-add\" (click)=\"checkoutOrder(cart)\" routerLink=\"/checkout\" routerLinkActive=\"active\" >\r\n            <p>Complete order</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row justify-content-center product-add-container\">\r\n          <div class=\"new-order\" (click)=\"newOrder()\">\r\n            <p>Start a new order</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n      <div *ngIf=\"total == 0\">\r\n        <div class=\"cart-empty\">\r\n          <img src=\"assets/empty-bag-icon.svg\" alt=\"Cart empty\">\r\n        </div>\r\n        <div class=\"cart-empty-desc\">\r\n          <p>Your order is empty. Add products to start.</p>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row fixed-bottom\">\r\n  <div class=\"col-sm-12 d-md-none d-lg-none d-xl-none d-sm-block\">\r\n      <div class=\"product-add-sm\" (click)=\"checkoutOrder(cart)\" routerLink=\"/checkout\">\r\n        <div class=\"product-add-order\" (click)=\"checkoutOrder(cart)\" routerLink=\"/checkout\">\r\n          <img src=\"assets/order-icon.svg\" alt=\"Order icon\">\r\n          <p>Complete order</p>\r\n        </div>\r\n        <div class=\"product-add-total\" (click)=\"checkoutOrder(cart)\" routerLink=\"/checkout\">\r\n          <img src=\"assets/mint-icon.svg\" alt=\"Mint\" class=\"mint-icon\">{{ total | number:'1.2-2'}} \r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/cart/cart.component.scss":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: #f8fbfd; }\n\n.custom-padding {\n  padding: 0 5px; }\n\n.modal-backdrop.fade.show {\n  background-color: #333333 !important; }\n\n.btn-checkout-primary.disabled, .btn-checkout-primary:disabled {\n  color: #fefefe;\n  background-color: #8c95a0;\n  border-color: #8c95a0; }\n\n.btn-checkout:not(:disabled):not(.disabled) {\n  cursor: pointer; }\n\n.btn-checkout, .btn-checkout-lg {\n  padding: .5rem 1rem !important;\n  font-size: 1.25rem !important;\n  line-height: 1.5 !important;\n  border-radius: .3rem !important; }\n\n.btn-checkout-primary {\n  color: #fefefe;\n  background-color: #333333;\n  border-color: #333333; }\n\n.btn-checkout {\n  display: inline-block;\n  font-weight: 400 !important;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: .375rem .75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: .25rem;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out; }\n\n.cart-stick {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px; }\n\n.cart-container {\n  margin: 40px 10px 5px 10px;\n  box-shadow: 0 7px 17px 0 rgba(185, 192, 197, 0.5);\n  background-color: #fefefe;\n  border-radius: 8px !important;\n  padding: 20px; }\n\n.cart-container h3 {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 20px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #26282b;\n  text-align: center; }\n\n.no-padding {\n  padding: 0;\n  margin-right: 8px; }\n\n.item-container {\n  border-bottom: solid 1px rgba(142, 160, 140, 0.16);\n  padding: 5px 0;\n  margin: 0; }\n\n.item-quantity {\n  background-color: #dedede;\n  border-radius: 50%;\n  width: 25px;\n  height: 25px;\n  font-family: \"Poppins\", sans-serif;\n  text-align: center; }\n\n.item-description {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  color: #8c95a0; }\n\n.item-cost {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 16px;\n  color: #26282b; }\n\n.item-delete {\n  cursor: pointer; }\n\n.items-total {\n  text-align: center;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  color: #26282b;\n  border-bottom: solid 1px rgba(142, 160, 140, 0.16);\n  padding: 25px 0 10px 0;\n  margin: 0; }\n\n.mint-icon {\n  margin: -3px 7px 0 15px; }\n\n.product-add-container {\n  margin-top: 30px; }\n\n.product-add {\n  border-radius: 5px;\n  background-color: #333333;\n  text-align: center;\n  cursor: pointer;\n  padding: 0 20px; }\n\n.product-add p {\n  font-family: \"Poppins\", sans-serif;\n  text-transform: uppercase;\n  color: #fefefe;\n  margin: 10px auto;\n  font-size: 14px; }\n\n.new-order {\n  background-color: transparent;\n  margin-top: 10px;\n  cursor: pointer; }\n\n.new-order p {\n  color: #8c95a0;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px; }\n\n.product-add-sm {\n  background-color: #333333;\n  cursor: pointer;\n  padding: 10px 25px;\n  display: flex;\n  justify-content: space-between; }\n\n.product-add-sm p {\n  font-family: \"Poppins\", sans-serif;\n  color: #fefefe;\n  margin: 10px auto;\n  font-size: 14px; }\n\n.product-add-order {\n  display: flex;\n  justify-content: left; }\n\n.product-add-order img {\n  margin-right: 10px; }\n\n.product-add-total {\n  font-family: \"Poppins\", sans-serif;\n  color: #fefefe;\n  padding-top: 9px; }\n\n.cart-empty {\n  text-align: center;\n  margin-bottom: 15px;\n  margin-top: 15px; }\n\n.cart-empty-desc p {\n  font-family: \"Poppins\", sans-serif;\n  color: #8c95a0;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _service_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/details.service */ "./src/app/service/details.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





// key that is used to access the order in local storage
var STORAGE_KEY = 'local_order';
var CartComponent = /** @class */ (function () {
    function CartComponent(detailsService, router, storage) {
        this.detailsService = detailsService;
        this.router = router;
        this.storage = storage;
        this.cart = [];
        this.total = 0;
        this.deleteItem = false;
        this.selectedProduct = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"];
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.localOrder = this.detailsService.getLocalOrder();
        if (this.localOrder) {
            this.cart = this.detailsService.getLocalOrder();
            for (var c = 0; c < this.cart.length; c++) {
                this.detailsService.setQuantity(this.cart[c].idProducto);
            }
            this.totalPrice(this.cart);
        }
        this.cartSubscription = this.detailsService.orderElements().subscribe(function (message) {
            if (message.cantidad > 0) {
                if (_this.cart.length > 0) {
                    _this.matchProduct = false;
                    // Valida si existe un producto que pueda actualizar la cantidad
                    for (var i = 0; i < _this.cart.length; i++) {
                        if (message.idProducto == _this.cart[i].idProducto) {
                            _this.cart[i].cantidad = message.cantidad;
                            _this.matchProduct = true;
                            break;
                        }
                    }
                    // Si no encontro un producto que actualizar hace push a la orden
                    if (!_this.matchProduct) {
                        _this.cart.push(message);
                    }
                }
                else {
                    _this.cart.push(message);
                }
            }
            /**
             * En caso que la cantidad enviada por el modal sea igual a cero
             * se validara si en el carrito existe un item con ese codigo
             * y en caso de que exista se eliminara del carrito porque el cliente
             * redujo a cero la cantidad de productos del item seleccionado.
             * @param {object} message - El objeto contiene el item enviado del componente productdetails.
             */
            if (message.cantidad == 0 || _this.deleteItem === true) {
                for (var i = 0; i < _this.cart.length; i++) {
                    if (message.idProducto == _this.cart[i].idProducto) {
                        _this.cart.splice(i, 1);
                        break;
                    }
                }
            }
            _this.totalPrice(_this.cart);
        });
    };
    CartComponent.prototype.totalPrice = function (cart) {
        this.total = 0;
        for (var i = 0; i < cart.length; i++) {
            this.total += (cart[i].precio * cart[i].cantidad);
        }
    };
    CartComponent.prototype.updateItem = function (item) {
        this.detailsService.updateOrder(item);
        this.detailsService.setQuantity(item.idProducto);
        this.selectedProduct.next(item);
        $("#detailProduct").modal('show');
    };
    CartComponent.prototype.deleteOrderItem = function (itemId, item) {
        /**
         * Eliminar todos los productos de un id en especifico, del carrito.
         * @param {any} itemId - Elemento seleccionado a eliminar.
         */
        if (itemId > 0) {
            for (var i = 0; i < this.cart.length; i++) {
                if (itemId == this.cart[i].idProducto) {
                    this.cart.splice(i, 1);
                    break;
                }
            }
        }
        item.cantidad = 0;
        this.detailsService.setQuantity(itemId);
        this.totalPrice(this.cart);
    };
    CartComponent.prototype.newOrder = function () {
        this.storage.remove(STORAGE_KEY);
        window.location.reload();
    };
    CartComponent.prototype.checkoutOrder = function (order) {
        this.detailsService.storeOnLocalStorage(order);
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.scss */ "./src/app/cart/cart.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["SESSION_STORAGE"])),
        __metadata("design:paramtypes", [_service_details_service__WEBPACK_IMPORTED_MODULE_2__["DetailsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], Object])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/cartcheckout/cartcheckout.component.html":
/*!**********************************************************!*\
  !*** ./src/app/cartcheckout/cartcheckout.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row cart-stick\">\n  <div class=\"col-md-12\">\n    <div class=\"cart-container\">\n      <h3>Order summary</h3>\n      <div *ngIf=\"total > 0\">\n        <div class=\"row item-container flex-nowrap align-items-center\" *ngFor=\"let item of cart\">\n          <div class=\"col-2 col-md-1 no-padding\">\n            <div class=\"item-quantity\">{{ item.cantidad }}</div>\n          </div>\n          <div class=\"col-5 col-md-6 no-padding\"> \n            <div class=\"item-description\">{{ item.nombre }}</div>\n          </div>\n          <div class=\"col-3 col-md-3 no-padding\">\n            <div class=\"item-cost\">{{ item.precio | number:'1.2-2' }}</div>\n          </div>\n          <div class=\"col-2 col-md-2 no-padding d-flex\" (click)=\"deleteOrderItem(item.idProducto)\">\n            <div class=\"item-delete d-flex\"><img src=\"assets/trash-icon.svg\" alt=\"Delete\"></div>\n          </div>\n        </div>\n        <div class=\"row justify-content-center\">\n          <div class=\"col-sm-12 col-md-8 items-total\">\n            SubTotal: US$ {{ total | number:'1.2-2'}} \n          </div>\n          <div class=\"col-sm-12 col-md-8 items-total\">\n            Total: US${{ total | number:'1.2-2'}} \n          </div>\n        </div>\n        <div class=\"row justify-content-center product-add-container\">\n          <button class=\"btn-checkout btn-checkout-lg btn-checkout-primary \" (click)=\"checkoutOrder()\" [disabled]=\"validCustomer\">Confirm order</button>\n        </div>\n      </div>\n      \n      <div *ngIf=\"total == 0\">\n        <div class=\"cart-empty\">\n          <img src=\"assets/empty-bag-icon.svg\" alt=\"Cart empty\">\n        </div>\n        <div class=\"cart-empty-desc\">\n          <p>Your order is empty. Add products to start.</p>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<!-- Modal -->\n<app-response></app-response>\n"

/***/ }),

/***/ "./src/app/cartcheckout/cartcheckout.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/cartcheckout/cartcheckout.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: #f8fbfd; }\n\n.custom-padding {\n  padding: 0 5px; }\n\n.modal-backdrop.fade.show {\n  background-color: #333333 !important; }\n\n.btn-checkout-primary.disabled, .btn-checkout-primary:disabled {\n  color: #fefefe;\n  background-color: #8c95a0;\n  border-color: #8c95a0; }\n\n.btn-checkout:not(:disabled):not(.disabled) {\n  cursor: pointer; }\n\n.btn-checkout, .btn-checkout-lg {\n  padding: .5rem 1rem !important;\n  font-size: 1.25rem !important;\n  line-height: 1.5 !important;\n  border-radius: .3rem !important; }\n\n.btn-checkout-primary {\n  color: #fefefe;\n  background-color: #333333;\n  border-color: #333333; }\n\n.btn-checkout {\n  display: inline-block;\n  font-weight: 400 !important;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: .375rem .75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: .25rem;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out; }\n\n.cart-stick {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px; }\n\n.cart-container {\n  margin: 40px 10px 5px 10px;\n  box-shadow: 0 7px 17px 0 rgba(185, 192, 197, 0.5);\n  background-color: #fefefe;\n  border-radius: 8px !important;\n  padding: 20px; }\n\n.cart-container h3 {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 20px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #26282b;\n  text-align: center; }\n\n.no-padding {\n  padding: 0;\n  margin-right: 8px; }\n\n.item-container {\n  border-bottom: solid 1px rgba(142, 160, 140, 0.16);\n  padding: 5px 0;\n  margin: 0; }\n\n.item-quantity {\n  background-color: #dedede;\n  border-radius: 50%;\n  width: 25px;\n  height: 25px;\n  font-family: \"Poppins\", sans-serif;\n  text-align: center; }\n\n.item-description {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  color: #8c95a0; }\n\n.item-cost {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 16px;\n  color: #26282b; }\n\n.item-delete {\n  cursor: pointer; }\n\n.items-total {\n  text-align: center;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  color: #26282b;\n  border-bottom: solid 1px rgba(142, 160, 140, 0.16);\n  padding: 25px 0 10px 0;\n  margin: 0; }\n\n.mint-icon {\n  margin: -3px 7px 0 15px; }\n\n.product-add-container {\n  margin-top: 30px; }\n\n.new-order {\n  background-color: transparent;\n  margin-top: 10px;\n  cursor: pointer; }\n\n.new-order p {\n  color: #8c95a0;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px; }\n\n.product-add-sm {\n  background-color: #333333;\n  cursor: pointer;\n  padding: 10px 25px;\n  display: flex;\n  justify-content: space-between; }\n\n.product-add-sm p {\n  font-family: \"Poppins\", sans-serif;\n  color: #fefefe;\n  margin: 10px auto;\n  font-size: 14px; }\n\n.product-add-order {\n  display: flex;\n  justify-content: left; }\n\n.product-add-order img {\n  margin-right: 10px; }\n\n.product-add-total {\n  font-family: \"Poppins\", sans-serif;\n  color: #fefefe;\n  padding-top: 9px; }\n\n.cart-empty {\n  text-align: center;\n  margin-bottom: 15px;\n  margin-top: 15px; }\n\n.cart-empty-desc p {\n  font-family: \"Poppins\", sans-serif;\n  color: #8c95a0;\n  text-align: center; }\n\n@media (max-width: 576px) {\n  .cart-container {\n    margin: 0; } }\n"

/***/ }),

/***/ "./src/app/cartcheckout/cartcheckout.component.ts":
/*!********************************************************!*\
  !*** ./src/app/cartcheckout/cartcheckout.component.ts ***!
  \********************************************************/
/*! exports provided: CartcheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartcheckoutComponent", function() { return CartcheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/details.service */ "./src/app/service/details.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





// key that is used to access the order in local storage
var STORAGE_KEY = 'local_order';
var CartcheckoutComponent = /** @class */ (function () {
    function CartcheckoutComponent(detailsService, dataService, router, storage) {
        this.detailsService = detailsService;
        this.dataService = dataService;
        this.router = router;
        this.storage = storage;
        this.checkout = [];
        this.cart = [];
        this.total = 0;
        this.message = {};
        this.validCustomer = true;
    }
    CartcheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cart = this.detailsService.getLocalOrder();
        if (this.cart) {
            this.totalPrice(this.cart);
        }
        this.ccCardData = {
            cc_number: '',
            cc_name: '',
            cc_expiryMonth: '',
            cc_expiryYear: '',
            cc_cvv: ''
        };
        this.payDataSubscription = this.detailsService.payElements().subscribe(function (message) {
            _this.validCustomer = message.validCustomer;
            _this.payType = message.payType;
            // Cliente existente con una m1nt card valida
            if (message.payType == 1) {
                _this.payDataCustomer = message;
            }
            // Datos para un cliente nuevo, que se le creeara una m1nt card
            if (message.payType == 2) {
                // datos de tarjeta de pago
                _this.ccCardData.cc_number = message.ncCardnumber;
                _this.ccCardData.cc_name = message.ncCardName;
                _this.ccCardData.cc_expiryMonth = message.ncExpMonth;
                _this.ccCardData.cc_expiryYear = message.ncExpYear;
                _this.ccCardData.cc_cvv = message.ncCvv;
                // datos de facturacion
                _this.payDataCustomer = {
                    nombres: message.ncName,
                    apellidos: message.ncLastname,
                    razonSocial: message.ncSocial,
                    nit: message.ncNit,
                    email: message.ncEmail,
                    telefono: message.ncPhone
                };
            }
        });
    };
    CartcheckoutComponent.prototype.totalPrice = function (cart) {
        this.total = 0;
        for (var i = 0; i < cart.length; i++) {
            this.total += (cart[i].precio * cart[i].cantidad);
        }
    };
    CartcheckoutComponent.prototype.deleteOrderItem = function (itemId) {
        /**
         * Eliminar todos los productos de un id en especifico, del carrito.
         * @param {any} itemId - Elemento seleccionado a eliminar.
         */
        if (itemId > 0) {
            for (var i = 0; i < this.cart.length; i++) {
                if (itemId == this.cart[i].idProducto) {
                    this.cart.splice(i, 1);
                    break;
                }
            }
        }
        this.detailsService.setQuantity(itemId);
        if (this.cart && Object.keys(this.cart).length > 0) {
            this.detailsService.storeOnLocalStorage(this.cart);
            this.totalPrice(this.cart);
        }
        else {
            this.storage.remove(STORAGE_KEY);
            this.router.navigate(['/']);
        }
    };
    CartcheckoutComponent.prototype.checkoutOrder = function () {
        var _this = this;
        if (this.payType == 1) {
            this.checkout = {
                order: this.cart,
                client: this.payDataCustomer
            };
            this.dataService.setOrder(this.checkout).subscribe(function (message) {
                if (message.status == 1) {
                    // En caso de orden exitosa elimina el local storage de la orden y luego redirije a ver la orden
                    _this.storage.remove(STORAGE_KEY);
                    _this.router.navigate(['/order', message.idOrden, message.order_viewhash]);
                }
                if (message.status == 0) {
                    _this.setResponse(message);
                }
            }, function (error) {
                console.log("Order error: ", error);
                _this.setResponse(error);
            });
        }
        if (this.payType == 2) {
            this.checkout = {
                order: this.cart,
                client: this.payDataCustomer,
                payment: this.ccCardData
            };
            this.dataService.setCustomerOrder(this.checkout).subscribe(function (message) {
                if (message.result) {
                    var data = message;
                    // Hacer el post a Credomatic
                    var formfields = [
                        { name: 'type', value: 'auth' },
                        { name: 'key_id', value: data.key_id },
                        { name: 'hash', value: data.hash },
                        { name: 'time', value: data.time },
                        { name: 'redirect', value: data.redirect_url },
                        { name: 'ccnumber', value: _this.ccCardData.cc_number },
                        { name: 'ccexp', value: String(_this.ccCardData.cc_expiryMonth) + String(_this.ccCardData.cc_expiryYear) },
                        { name: 'cvv', value: _this.ccCardData.cc_cvv },
                        { name: 'amount', value: _this.total },
                        { name: 'orderid', value: data.order_id },
                        { name: 'email', value: '' }
                    ];
                    var f = document.createElement('form');
                    f.action = "https://credomatic.compassmerchantsolutions.com/api/transact.php";
                    f.method = 'POST';
                    f.autocomplete = 'off';
                    for (var j = 0; j < formfields.length; j++) {
                        var i = document.createElement('input');
                        i.type = 'hidden';
                        i.name = formfields[j].name;
                        i.value = formfields[j].value;
                        f.appendChild(i);
                    }
                    document.body.appendChild(f);
                    // Elimina la orden del local storage antes de enviar el formulario a credomatic
                    _this.storage.remove(STORAGE_KEY);
                    f.submit();
                }
                else if (!message.status) {
                    _this.setResponse(message);
                }
            }, function (error) {
                console.log("Order error: ", error);
                _this.setResponse(error);
            });
        }
    };
    CartcheckoutComponent.prototype.setResponse = function (response) {
        this.detailsService.setResponse(response);
    };
    CartcheckoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cartcheckout',
            template: __webpack_require__(/*! ./cartcheckout.component.html */ "./src/app/cartcheckout/cartcheckout.component.html"),
            styles: [__webpack_require__(/*! ./cartcheckout.component.scss */ "./src/app/cartcheckout/cartcheckout.component.scss")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["SESSION_STORAGE"])),
        __metadata("design:paramtypes", [_service_details_service__WEBPACK_IMPORTED_MODULE_1__["DetailsService"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], Object])
    ], CartcheckoutComponent);
    return CartcheckoutComponent;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.component.html":
/*!**************************************************!*\
  !*** ./src/app/checkout/checkout.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row breadcrumb-container\">\r\n    <nav aria-label=\"breadcrumb\">\r\n      <ol class=\"breadcrumb\">\r\n        <li class=\"breadcrumb-item\"><a [routerLink]=\"['/']\">Menu</a></li>\r\n        <li class=\"breadcrumb-item active\" aria-current=\"page\">Checkout</li>\r\n      </ol>\r\n    </nav>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-7 col-lg-8\">\r\n      <div class=\"row align-items-center subtitle-icon checkout-title-container\">\r\n        <img src=\"assets/order-icon-complete.svg\" alt=\"Bag icon\">\r\n        <h3 class=\"title\">Order</h3>\r\n      </div>\r\n      <div class=\"row checkout-container\">\r\n          <div class=\"col-sm-12 product-container\">\r\n            <div class=\"row align-items-center subtitle-icon\">\r\n              <img src=\"assets/location-icon.svg\" alt=\"Location icon\">\r\n              <h3>Place of delivery</h3>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12 order-description\">\r\n                <p>Select an option where you want to collect your order</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"row justify-content-around\">\r\n              <div class=\"col-4 col-md-3 order-location-one\" (click)=\"orderLocation($event)\" id=\"local\" [ngClass]=\"{'location-active-one': locationOne }\">\r\n                Restaurant\r\n              </div>\r\n              <div class=\"col-4 col-md-3 order-location-two\" (click)=\"orderLocation($event)\" id=\"reforma\" [ngClass]=\"{'location-active-two': locationTwo }\">\r\n                Home\r\n              </div>\r\n              <div class=\"col-4 col-md-3 order-location-three\" (click)=\"orderLocation($event)\" id=\"avenida\" [ngClass]=\"{'location-active-three': locationThree }\">\r\n                Work\r\n              </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"selectedLocation == 1\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12 order-description\">\r\n                  <p>You can pick up your order at the restaurant</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"selectedLocation == 2\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12 order-description\">\r\n                  <p>We give you your order at the door of your house, you just have to be attentive to our delivery.</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <input [(ngModel)]=\"locationMessage\" (keyup)=\"onKey($event)\" class=\"order-input\" placeholder=\"Add a note to help us identify you (Ex. two-floor house)\">\r\n              </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"selectedLocation == 3\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-12 order-description\">\r\n                    <p>We give you your order at the door of your office, you just have to be attentive to our delivery</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <input [(ngModel)]=\"locationMessage\" (keyup)=\"onKey($event)\" class=\"order-input\" placeholder=\"Add a note to help us identify you (Ex. Building of red color)\">\r\n                </div>\r\n              </div>\r\n\r\n          </div>\r\n\r\n          <!-- Mint info -->\r\n          <div class=\"col-sm-12 product-container\">\r\n            <div class=\"row align-items-center\">\r\n              <div class=\"col-7 col-sm-8\">\r\n                <div class=\"row align-items-center subtitle-icon\" *ngIf=\"!newCustomerState\">\r\n                  <img src=\"assets/payment-icon.svg\" alt=\"Credit card\">\r\n                  <h3>Datos de pago</h3>\r\n                </div>\r\n                <button *ngIf=\"newCustomerState\" type=\"button\" class=\"btn btn-outline-purple\" (click)=\"payMint()\">Pagar con registro</button>\r\n              </div>\r\n              <div class=\"col-5 col-sm-4\">\r\n              </div>\r\n            </div>\r\n            \r\n            <!-- <div class=\"row mint-card\" *ngIf=\"!newCustomerState\">\r\n              <div class=\"col-sm-12 col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"mintNumber\">Número de tarjeta M1NT *</label>\r\n                  <input [(ngModel)]=\"payData.mintCard\" class=\"pay-input\" id=\"mintNumber\" required (input)=\"mintCard(payData.mintCard)\">\r\n                  <small id=\"mintHelp\" class=\"form-text text-muted\">{{ customerName }}</small>\r\n                  <span class=\"badge badge-important\" *ngIf=\"errorMint\">{{ errorMint }} </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"mintNumber\">Teléfono registrado con tu tarjeta m1nt *</label>\r\n                  <input [(ngModel)]=\"payData.phoneNumber\" class=\"pay-input\" id=\"mintNumber\" required [disabled]=\"validCard\" (input)=\"phoneNumber(payData.phoneNumber)\">\r\n                  <small id=\"mintHelp\" class=\"form-text text-muted\">{{ customerPhone }}</small>\r\n                  <span class=\"badge badge-important\" *ngIf=\"errorValidate\">{{ errorValidate }} </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12\">\r\n                  <span (click)=\"newCustomer()\" class=\"new-customer\">Crear una cuenta</span>\r\n              </div>\r\n            </div> -->\r\n\r\n            <div class=\"row new-customer-info\" *ngIf=\"!newCustomerState\">\r\n              <div class=\"col-sm-12\">\r\n                <div class=\"row justify-content-center\">\r\n                  <div class=\"col-sm-8 mint-form-title\">\r\n                    <h3>Create an account</h3>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <form class=\"mint-form-container\" [formGroup]=\"form\">\r\n                    \r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"ncName\">Name *</label>\r\n                          <input formControlName=\"ncName\" class=\"pay-input\" id=\"ncName\" name=\"ncName\" required (input)=\"formStatus()\">\r\n                          <div *ngIf=\"form.controls['ncName'].errors && !form.controls['ncName'].pristine\">\r\n                            <div [hidden]=\"!form.controls['ncName'].errors.required\">\r\n                              <span class=\"badge badge-important\">Campo requerido</span>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-12 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"ncLastname\">Last name *</label>\r\n                          <input formControlName=\"ncLastname\" class=\"pay-input\" id=\"ncLastname\" name=\"ncLastname\" required (input)=\"formStatus()\">\r\n                          <div *ngIf=\"form.controls['ncLastname'].errors && !form.controls['ncLastname'].pristine\">\r\n                            <div [hidden]=\"!form.controls['ncLastname'].errors.required\">\r\n                              <span class=\"badge badge-important\">Campo requerido</span>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"ncEmail\">e-mail *</label>\r\n                          <input formControlName=\"ncEmail\" class=\"pay-input\" id=\"ncEmail\" name=\"ncEmail\" required (input)=\"formStatus()\">\r\n                          <div *ngIf=\"form.controls['ncEmail'].errors && !form.controls['ncEmail'].pristine\">\r\n                            <div [hidden]=\"!form.controls['ncEmail'].errors.required\">\r\n                              <span class=\"badge badge-important\">Campo requerido</span>\r\n                            </div>\r\n                            <div [hidden]=\"!form.controls['ncEmail'].errors.email\">\r\n                              <span class=\"badge badge-important\">Email invalido</span>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-12 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"ncPhone\">Phone *</label>\r\n                          <input formControlName=\"ncPhone\" class=\"pay-input\" id=\"ncPhone\" name=\"ncPhone\" required (input)=\"formStatus()\">\r\n                          <div *ngIf=\"form.controls['ncPhone'].errors && !form.controls['ncPhone'].pristine\">\r\n                            <div [hidden]=\"!form.controls['ncPhone'].errors.required\">\r\n                              <span class=\"badge badge-important\">Campo requerido</span>\r\n                            </div>\r\n                            <div [hidden]=\"!form.controls['ncPhone'].errors.minlength\">\r\n                              <span class=\"badge badge-important\">Número inválido</span>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12\">\r\n                        <h4 class=\"mint-form-subtitle\">Billing Data</h4>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"ncSocial\">Legal name *</label>\r\n                          <input formControlName=\"ncSocial\" class=\"pay-input\" id=\"ncSocial\" name=\"ncSocial\" required (input)=\"formStatus()\">\r\n                          <div *ngIf=\"form.controls['ncSocial'].errors && !form.controls['ncSocial'].pristine\">\r\n                            <div [hidden]=\"!form.controls['ncSocial'].errors.required\">\r\n                              <span class=\"badge badge-important\">Campo requerido</span>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-12 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"ncNit\">NIT *</label>\r\n                          <input formControlName=\"ncNit\" class=\"pay-input\" id=\"ncNit\" name=\"ncNit\" required (input)=\"formStatus()\">\r\n                          <div *ngIf=\"form.controls['ncNit'].errors && !form.controls['ncNit'].pristine\">\r\n                            <div [hidden]=\"!form.controls['ncNit'].errors.required\">\r\n                              <span class=\"badge badge-important\">Campo requerido</span>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12\">\r\n                        <h4 class=\"mint-form-subtitle\">Credit / Debit Card Data</h4>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"ncCardnumber\">Card number *</label>\r\n                          <input formControlName=\"ncCardnumber\" class=\"pay-input\" id=\"ncCardnumber\" name=\"ncCardnumber\" required (input)=\"formStatus()\">\r\n                          <div *ngIf=\"form.controls['ncCardnumber'].errors && !form.controls['ncCardnumber'].pristine\">\r\n                            <div [hidden]=\"!form.controls['ncCardnumber'].errors.required\">\r\n                              <span class=\"badge badge-important\">Campo requerido</span>\r\n                            </div>\r\n                            <div [hidden]=\"!form.controls['ncCardnumber'].errors.pattern\">\r\n                              <span class=\"badge badge-important\">Tarjeta inválida</span>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"ncCardName\">Name of the card *</label>\r\n                          <input formControlName=\"ncCardName\" class=\"pay-input\" id=\"ncCardName\" name=\"ncCardName\" required (input)=\"formStatus()\">\r\n                          <div *ngIf=\"form.controls['ncCardName'].errors && !form.controls['ncCardName'].pristine\">\r\n                            <div [hidden]=\"!form.controls['ncCardName'].errors.required\">\r\n                              <span class=\"badge badge-important\">Campo requerido</span>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-4 col-md-2\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"ncExpMonth\">Month *</label>\r\n                          <input formControlName=\"ncExpMonth\" class=\"pay-input\" id=\"ncExpMonth\" name=\"ncExpMonth\" required (input)=\"formStatus()\">\r\n                          <div *ngIf=\"form.controls['ncExpMonth'].errors && !form.controls['ncExpMonth'].pristine\">\r\n                            <div [hidden]=\"!form.controls['ncExpMonth'].errors.required\">\r\n                              <span class=\"badge badge-important\">Campo requerido</span>\r\n                            </div>\r\n                            <div [hidden]=\"!form.controls['ncExpMonth'].errors.pattern\">\r\n                              <span class=\"badge badge-important\">Solo dígitos</span>\r\n                            </div>\r\n                            <div [hidden]=\"!form.controls['ncExpMonth'].errors.minlength\">\r\n                              <span class=\"badge badge-important\">Inválido</span>\r\n                            </div>\r\n                            <div [hidden]=\"!form.controls['ncExpMonth'].errors.maxlength\">\r\n                              <span class=\"badge badge-important\">Inválido</span>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-4 col-md-2\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"ncExpYear\">Year *</label>\r\n                          <input formControlName=\"ncExpYear\" class=\"pay-input\" id=\"ncExpYear\" name=\"ncExpYear\" required (input)=\"formStatus()\">\r\n                          <div *ngIf=\"form.controls['ncExpYear'].errors && !form.controls['ncExpYear'].pristine\">\r\n                            <div [hidden]=\"!form.controls['ncExpYear'].errors.required\">\r\n                              <span class=\"badge badge-important\">Campo requerido</span>\r\n                            </div>\r\n                            <div [hidden]=\"!form.controls['ncExpYear'].errors.pattern\">\r\n                              <span class=\"badge badge-important\">Solo dígitos</span>\r\n                            </div>\r\n                            <div [hidden]=\"!form.controls['ncExpYear'].errors.minlength\">\r\n                              <span class=\"badge badge-important\">Inválido</span>\r\n                            </div>\r\n                            <div [hidden]=\"!form.controls['ncExpYear'].errors.maxlength\">\r\n                              <span class=\"badge badge-important\">Inválido</span>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-4 col-md-2\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"ncCvv\">CVV *</label>\r\n                          <input formControlName=\"ncCvv\" class=\"pay-input\" id=\"ncCvv\" name=\"ncCvv\" required (input)=\"formStatus()\">\r\n                          <div *ngIf=\"form.controls['ncCvv'].errors && !form.controls['ncCvv'].pristine\">\r\n                            <div [hidden]=\"!form.controls['ncCvv'].errors.required\">\r\n                              <span class=\"badge badge-important\">Campo requerido</span>\r\n                            </div>\r\n                            <div [hidden]=\"!form.controls['ncCvv'].errors.pattern\">\r\n                              <span class=\"badge badge-important\">Solo dígitos</span>\r\n                            </div>\r\n                            <div [hidden]=\"!form.controls['ncCvv'].errors.minlength\">\r\n                              <span class=\"badge badge-important\">Inválido</span>\r\n                            </div>\r\n                            <div [hidden]=\"!form.controls['ncCvv'].errors.maxlength\">\r\n                              <span class=\"badge badge-important\">Inválido</span>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </form>\r\n                  <div class=\"col-sm-12\">\r\n                    <p class=\"mint-card-important\"><strong>IMPORTANT:</strong> Your credit card will be used to recharge US$. {{total}} so you can complete your order.</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- cartcheckout component -->\r\n    <div class=\"col-sm-5 col-lg-4\">\r\n      <app-cartcheckout></app-cartcheckout>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/checkout/checkout.component.scss":
/*!**************************************************!*\
  !*** ./src/app/checkout/checkout.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: #f8fbfd; }\n\n.custom-padding {\n  padding: 0 5px; }\n\n.modal-backdrop.fade.show {\n  background-color: #333333 !important; }\n\n.btn-checkout-primary.disabled, .btn-checkout-primary:disabled {\n  color: #fefefe;\n  background-color: #8c95a0;\n  border-color: #8c95a0; }\n\n.btn-checkout:not(:disabled):not(.disabled) {\n  cursor: pointer; }\n\n.btn-checkout, .btn-checkout-lg {\n  padding: .5rem 1rem !important;\n  font-size: 1.25rem !important;\n  line-height: 1.5 !important;\n  border-radius: .3rem !important; }\n\n.btn-checkout-primary {\n  color: #fefefe;\n  background-color: #333333;\n  border-color: #333333; }\n\n.btn-checkout {\n  display: inline-block;\n  font-weight: 400 !important;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: .375rem .75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: .25rem;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out; }\n\n.title {\n  color: #26282b;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 24px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  margin-top: 30px; }\n\n.checkout-title-container {\n  margin-top: 25px;\n  padding-left: 25px; }\n\n.breadcrumb-container {\n  margin-top: 10px;\n  padding-left: 15px; }\n\n.checkout-container {\n  padding: 40px 5px; }\n\n.breadcrumb {\n  background-color: transparent !important; }\n\n.breadcrumb li {\n  font-family: \"Poppins\", sans-serif; }\n\n.breadcrumb-item a {\n  color: #333333 !important; }\n\n.checkout-container h3 {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 24px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #26282b;\n  text-transform: capitalize; }\n\n.product-container {\n  margin: 5px 10px;\n  box-shadow: 0 7px 17px 0 rgba(185, 192, 197, 0.5);\n  background-color: #fefefe;\n  border-radius: 8px !important;\n  padding: 30px 35px; }\n\n.product-container h3 {\n  font-family: \"Poppins\", sans-serif;\n  color: #26282b;\n  font-size: 20px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal; }\n\n.order-description {\n  text-align: center;\n  margin-top: 25px;\n  margin-bottom: 20px; }\n\n.order-description p {\n  font-family: \"Poppins\", sans-serif;\n  color: #26282b;\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1;\n  letter-spacing: normal; }\n\n.index {\n  background-color: red; }\n\n.order-location-one {\n  border-radius: 5px;\n  border: solid 1px rgba(140, 149, 160, 0.34);\n  cursor: pointer;\n  text-align: center;\n  background-repeat: no-repeat;\n  background-position: center;\n  padding: 60px 15px 10px 15px;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 11px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  color: #8c95a0;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 width%3D%2234%22 height%3D%2233%22 viewBox%3D%220 0 34 33%22%3E    %3Cdefs%3E        %3Cpath id%3D%22a%22 d%3D%22M.651.21h50v40h-50z%22%2F%3E    %3C%2Fdefs%3E    %3Cg fill%3D%22none%22 fill-rule%3D%22evenodd%22 transform%3D%22translate(-8.329 -3.97)%22%3E        %3Cmask id%3D%22b%22 fill%3D%22%23fff%22%3E            %3Cuse xlink%3Ahref%3D%22%23a%22%2F%3E        %3C%2Fmask%3E        %3Cpath fill%3D%22%23CACED3%22 d%3D%22M39.922 17.65c0 1.396-1.262 2.528-2.818 2.528h-.162c-1.174 0-2.18-.643-2.604-1.56a.229.229 0 0 0-.214-.13.229.229 0 0 0-.213.13c-.424.917-1.43 1.56-2.606 1.56h-.16c-1.175 0-2.182-.643-2.605-1.56a.23.23 0 0 0-.214-.13.23.23 0 0 0-.213.13c-.424.917-1.43 1.56-2.605 1.56h-.161c-1.175 0-2.182-.643-2.605-1.56a.23.23 0 0 0-.214-.13.23.23 0 0 0-.213.13c-.423.917-1.43 1.56-2.606 1.56h-.16c-1.175 0-2.182-.643-2.605-1.56a.229.229 0 0 0-.213-.13.229.229 0 0 0-.214.13c-.423.917-1.43 1.56-2.605 1.56h-.161c-1.556 0-2.818-1.132-2.818-2.527v-2.376c0-.195.049-.388.142-.564l4.372-8.23c.243-.457.757-.748 1.322-.748h17.169c.558 0 1.066.285 1.313.734l4.52 8.238c.1.18.151.378.151.579v2.367zm-2.03 4.198l.054-.007-.053.007zM36.394 34.56H14.461c-.13 0-.238-.094-.238-.212v-3.694h22.408v3.694c0 .118-.107.212-.238.212zM12.91 21.84l.053.008-.053-.007zm23.722 6.931H14.223V21.89c.923-.054 1.79-.332 2.508-.805a5.12 5.12 0 0 0 2.819.827h.16c1.04 0 2.02-.3 2.818-.827a5.116 5.116 0 0 0 2.819.827h.161c1.04 0 2.02-.3 2.818-.827a5.117 5.117 0 0 0 2.82.827h.16c1.04 0 2.02-.3 2.818-.827.718.473 1.585.751 2.507.805v6.881zm4.875-14.832L36.986 5.7C36.408 4.651 35.241 4 33.937 4H16.769c-1.303 0-2.506.682-3.067 1.736L9.33 13.964A2.81 2.81 0 0 0 9 15.275v2.376c0 1.845 1.317 3.415 3.15 4.007v8.001c0 .02-.012.034-.012.054 0 .019.011.035.012.053v4.582c0 1.144 1.037 2.073 2.311 2.073h21.932c1.275 0 2.312-.93 2.312-2.073v-12.69c1.833-.592 3.15-2.162 3.15-4.007v-2.367c0-.464-.12-.93-.349-1.345z%22 mask%3D%22url(%23b)%22%2F%3E    %3C%2Fg%3E%3C%2Fsvg%3E\"); }\n\n.order-location-two {\n  border-radius: 5px;\n  border: solid 1px rgba(140, 149, 160, 0.34);\n  cursor: pointer;\n  text-align: center;\n  background-repeat: no-repeat;\n  background-position: center;\n  padding: 60px 15px 10px 15px;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 11px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  color: #8c95a0;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 width%3D%2246%22 height%3D%2225%22 viewBox%3D%220 0 46 25%22%3E    %3Cdefs%3E        %3Cpath id%3D%22a%22 d%3D%22M.582.316h50v40h-50z%22%2F%3E    %3C%2Fdefs%3E    %3Cg fill%3D%22none%22 fill-rule%3D%22evenodd%22 transform%3D%22translate(-2.5 -7.43)%22%3E        %3Cmask id%3D%22b%22 fill%3D%22%23fff%22%3E            %3Cuse xlink%3Ahref%3D%22%23a%22%2F%3E        %3C%2Fmask%3E        %3Cpath fill%3D%22%23CACED3%22 d%3D%22M44.335 26.58h-.99a5.182 5.182 0 0 0-5.728-4.587 5.178 5.178 0 0 0-4.588 4.588H17.602a5.182 5.182 0 0 0-5.728-4.588 5.179 5.179 0 0 0-4.589 4.588H6.82c-1.225 0-2.178-1.019-2.178-2.243v-2.663c-.01-1 .655-1.869 1.617-2.14l7.279-1.99a.914.914 0 0 0 .496-.337l4.354-5.708a3.302 3.302 0 0 1 2.606-1.271h13.774a3.22 3.22 0 0 1 2.766 1.513l3.383 5.401c.092.159.242.28.4.355l3.907 1.785a2.2 2.2 0 0 1 1.28 2.018v3.037h.01c0 1.224-.954 2.243-2.178 2.243m-6.148 3.868a3.318 3.318 0 1 1 3.317-3.317c.01 1.822-1.476 3.308-3.317 3.317m-25.743 0a3.318 3.318 0 1 1 0-6.635 3.318 3.318 0 0 1 0 6.635m33.564-12.867l-3.663-1.672-3.233-5.158a5.094 5.094 0 0 0-4.345-2.392H20.993a5.136 5.136 0 0 0-4.083 2.01l-4.177 5.465-6.96 1.906a4.081 4.081 0 0 0-2.991 3.934v2.663c0 2.252 1.794 4.112 4.046 4.112h.598a5.187 5.187 0 0 0 6.326 3.719 5.186 5.186 0 0 0 3.719-3.72h15.698a5.188 5.188 0 0 0 6.326 3.72 5.188 5.188 0 0 0 3.72-3.72h1.12c2.253 0 4.046-1.859 4.046-4.11V21.3a4.072 4.072 0 0 0-2.373-3.719%22 mask%3D%22url(%23b)%22%2F%3E    %3C%2Fg%3E%3C%2Fsvg%3E\"); }\n\n.order-location-three {\n  border-radius: 5px;\n  border: solid 1px rgba(140, 149, 160, 0.34);\n  cursor: pointer;\n  text-align: center;\n  background-repeat: no-repeat;\n  background-position: center;\n  padding: 60px 15px 10px 15px;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 11px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  color: #8c95a0;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 width%3D%2246%22 height%3D%2225%22 viewBox%3D%220 0 46 25%22%3E    %3Cdefs%3E        %3Cpath id%3D%22a%22 d%3D%22M.582.316h50v40h-50z%22%2F%3E    %3C%2Fdefs%3E    %3Cg fill%3D%22none%22 fill-rule%3D%22evenodd%22 transform%3D%22translate(-2.5 -7.43)%22%3E        %3Cmask id%3D%22b%22 fill%3D%22%23fff%22%3E            %3Cuse xlink%3Ahref%3D%22%23a%22%2F%3E        %3C%2Fmask%3E        %3Cpath fill%3D%22%23CACED3%22 d%3D%22M44.335 26.58h-.99a5.182 5.182 0 0 0-5.728-4.587 5.178 5.178 0 0 0-4.588 4.588H17.602a5.182 5.182 0 0 0-5.728-4.588 5.179 5.179 0 0 0-4.589 4.588H6.82c-1.225 0-2.178-1.019-2.178-2.243v-2.663c-.01-1 .655-1.869 1.617-2.14l7.279-1.99a.914.914 0 0 0 .496-.337l4.354-5.708a3.302 3.302 0 0 1 2.606-1.271h13.774a3.22 3.22 0 0 1 2.766 1.513l3.383 5.401c.092.159.242.28.4.355l3.907 1.785a2.2 2.2 0 0 1 1.28 2.018v3.037h.01c0 1.224-.954 2.243-2.178 2.243m-6.148 3.868a3.318 3.318 0 1 1 3.317-3.317c.01 1.822-1.476 3.308-3.317 3.317m-25.743 0a3.318 3.318 0 1 1 0-6.635 3.318 3.318 0 0 1 0 6.635m33.564-12.867l-3.663-1.672-3.233-5.158a5.094 5.094 0 0 0-4.345-2.392H20.993a5.136 5.136 0 0 0-4.083 2.01l-4.177 5.465-6.96 1.906a4.081 4.081 0 0 0-2.991 3.934v2.663c0 2.252 1.794 4.112 4.046 4.112h.598a5.187 5.187 0 0 0 6.326 3.719 5.186 5.186 0 0 0 3.719-3.72h15.698a5.188 5.188 0 0 0 6.326 3.72 5.188 5.188 0 0 0 3.72-3.72h1.12c2.253 0 4.046-1.859 4.046-4.11V21.3a4.072 4.072 0 0 0-2.373-3.719%22 mask%3D%22url(%23b)%22%2F%3E    %3C%2Fg%3E%3C%2Fsvg%3E\"); }\n\n.location-active-one {\n  border: solid 1px #50e3c2 !important;\n  box-shadow: 0 5px 12px 0 rgba(185, 192, 197, 0.5);\n  color: #333333;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 width%3D%2233%22 height%3D%2233%22 viewBox%3D%220 0 33 33%22%3E    %3Cdefs%3E        %3Cpath id%3D%22a%22 d%3D%22M.651.21h50v40h-50z%22%2F%3E    %3C%2Fdefs%3E    %3Cg fill%3D%22none%22 fill-rule%3D%22evenodd%22 transform%3D%22translate(-9 -3.87)%22%3E        %3Cmask id%3D%22b%22 fill%3D%22%23fff%22%3E            %3Cuse xlink%3Ahref%3D%22%23a%22%2F%3E        %3C%2Fmask%3E        %3Cpath fill%3D%22%23442A70%22 d%3D%22M39.922 17.65c0 1.396-1.262 2.528-2.818 2.528h-.162c-1.174 0-2.18-.643-2.604-1.56a.229.229 0 0 0-.214-.13.229.229 0 0 0-.213.13c-.424.917-1.43 1.56-2.606 1.56h-.16c-1.175 0-2.182-.643-2.605-1.56a.23.23 0 0 0-.214-.13.23.23 0 0 0-.213.13c-.424.917-1.43 1.56-2.605 1.56h-.161c-1.175 0-2.182-.643-2.605-1.56a.23.23 0 0 0-.214-.13.23.23 0 0 0-.213.13c-.423.917-1.43 1.56-2.606 1.56h-.16c-1.175 0-2.182-.643-2.605-1.56a.229.229 0 0 0-.213-.13.229.229 0 0 0-.214.13c-.423.917-1.43 1.56-2.605 1.56h-.161c-1.556 0-2.818-1.132-2.818-2.527v-2.376c0-.195.049-.388.142-.564l4.372-8.23c.243-.457.757-.748 1.322-.748h17.169c.558 0 1.066.285 1.313.734l4.52 8.238c.1.18.151.378.151.579v2.367zm-2.03 4.198l.054-.007-.053.007zM36.394 34.56H14.461c-.13 0-.238-.094-.238-.212v-3.694h22.408v3.694c0 .118-.107.212-.238.212zM12.91 21.84l.053.008-.053-.007zm23.722 6.931H14.223V21.89c.923-.054 1.79-.332 2.508-.805a5.12 5.12 0 0 0 2.819.827h.16c1.04 0 2.02-.3 2.818-.827a5.116 5.116 0 0 0 2.819.827h.161c1.04 0 2.02-.3 2.818-.827a5.117 5.117 0 0 0 2.82.827h.16c1.04 0 2.02-.3 2.818-.827.718.473 1.585.751 2.507.805v6.881zm4.875-14.832L36.986 5.7C36.408 4.651 35.241 4 33.937 4H16.769c-1.303 0-2.506.682-3.067 1.736L9.33 13.964A2.81 2.81 0 0 0 9 15.275v2.376c0 1.845 1.317 3.415 3.15 4.007v8.001c0 .02-.012.034-.012.054 0 .019.011.035.012.053v4.582c0 1.144 1.037 2.073 2.311 2.073h21.932c1.275 0 2.312-.93 2.312-2.073v-12.69c1.833-.592 3.15-2.162 3.15-4.007v-2.367c0-.464-.12-.93-.349-1.345z%22 mask%3D%22url(%23b)%22%2F%3E    %3C%2Fg%3E%3C%2Fsvg%3E\") !important; }\n\n.location-active-two {\n  border: solid 1px #50e3c2 !important;\n  box-shadow: 0 5px 12px 0 rgba(185, 192, 197, 0.5);\n  color: #333333;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 width%3D%2247%22 height%3D%2224%22 viewBox%3D%220 0 47 24%22%3E    %3Cdefs%3E        %3Cpath id%3D%22a%22 d%3D%22M.582.316h50v40h-50z%22%2F%3E    %3C%2Fdefs%3E    %3Cg fill%3D%22none%22 fill-rule%3D%22evenodd%22 transform%3D%22translate(-2.213 -8.33)%22%3E        %3Cmask id%3D%22b%22 fill%3D%22%23fff%22%3E            %3Cuse xlink%3Ahref%3D%22%23a%22%2F%3E        %3C%2Fmask%3E        %3Cpath fill%3D%22%23442A70%22 d%3D%22M44.335 26.58h-.99a5.182 5.182 0 0 0-5.728-4.587 5.178 5.178 0 0 0-4.588 4.588H17.602a5.182 5.182 0 0 0-5.728-4.588 5.179 5.179 0 0 0-4.589 4.588H6.82c-1.225 0-2.178-1.019-2.178-2.243v-2.663c-.01-1 .655-1.869 1.617-2.14l7.279-1.99a.914.914 0 0 0 .496-.337l4.354-5.708a3.302 3.302 0 0 1 2.606-1.271h13.774a3.22 3.22 0 0 1 2.766 1.513l3.383 5.401c.092.159.242.28.4.355l3.907 1.785a2.2 2.2 0 0 1 1.28 2.018v3.037h.01c0 1.224-.954 2.243-2.178 2.243m-6.148 3.868a3.318 3.318 0 1 1 3.317-3.317c.01 1.822-1.476 3.308-3.317 3.317m-25.743 0a3.318 3.318 0 1 1 0-6.635 3.318 3.318 0 0 1 0 6.635m33.564-12.867l-3.663-1.672-3.233-5.158a5.094 5.094 0 0 0-4.345-2.392H20.993a5.136 5.136 0 0 0-4.083 2.01l-4.177 5.465-6.96 1.906a4.081 4.081 0 0 0-2.991 3.934v2.663c0 2.252 1.794 4.112 4.046 4.112h.598a5.187 5.187 0 0 0 6.326 3.719 5.186 5.186 0 0 0 3.719-3.72h15.698a5.188 5.188 0 0 0 6.326 3.72 5.188 5.188 0 0 0 3.72-3.72h1.12c2.253 0 4.046-1.859 4.046-4.11V21.3a4.072 4.072 0 0 0-2.373-3.719%22 mask%3D%22url(%23b)%22%2F%3E    %3C%2Fg%3E%3C%2Fsvg%3E\") !important; }\n\n.location-active-three {\n  border: solid 1px #50e3c2 !important;\n  box-shadow: 0 5px 12px 0 rgba(185, 192, 197, 0.5);\n  color: #333333;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 width%3D%2247%22 height%3D%2224%22 viewBox%3D%220 0 47 24%22%3E    %3Cdefs%3E        %3Cpath id%3D%22a%22 d%3D%22M.582.316h50v40h-50z%22%2F%3E    %3C%2Fdefs%3E    %3Cg fill%3D%22none%22 fill-rule%3D%22evenodd%22 transform%3D%22translate(-2.213 -8.33)%22%3E        %3Cmask id%3D%22b%22 fill%3D%22%23fff%22%3E            %3Cuse xlink%3Ahref%3D%22%23a%22%2F%3E        %3C%2Fmask%3E        %3Cpath fill%3D%22%23442A70%22 d%3D%22M44.335 26.58h-.99a5.182 5.182 0 0 0-5.728-4.587 5.178 5.178 0 0 0-4.588 4.588H17.602a5.182 5.182 0 0 0-5.728-4.588 5.179 5.179 0 0 0-4.589 4.588H6.82c-1.225 0-2.178-1.019-2.178-2.243v-2.663c-.01-1 .655-1.869 1.617-2.14l7.279-1.99a.914.914 0 0 0 .496-.337l4.354-5.708a3.302 3.302 0 0 1 2.606-1.271h13.774a3.22 3.22 0 0 1 2.766 1.513l3.383 5.401c.092.159.242.28.4.355l3.907 1.785a2.2 2.2 0 0 1 1.28 2.018v3.037h.01c0 1.224-.954 2.243-2.178 2.243m-6.148 3.868a3.318 3.318 0 1 1 3.317-3.317c.01 1.822-1.476 3.308-3.317 3.317m-25.743 0a3.318 3.318 0 1 1 0-6.635 3.318 3.318 0 0 1 0 6.635m33.564-12.867l-3.663-1.672-3.233-5.158a5.094 5.094 0 0 0-4.345-2.392H20.993a5.136 5.136 0 0 0-4.083 2.01l-4.177 5.465-6.96 1.906a4.081 4.081 0 0 0-2.991 3.934v2.663c0 2.252 1.794 4.112 4.046 4.112h.598a5.187 5.187 0 0 0 6.326 3.719 5.186 5.186 0 0 0 3.719-3.72h15.698a5.188 5.188 0 0 0 6.326 3.72 5.188 5.188 0 0 0 3.72-3.72h1.12c2.253 0 4.046-1.859 4.046-4.11V21.3a4.072 4.072 0 0 0-2.373-3.719%22 mask%3D%22url(%23b)%22%2F%3E    %3C%2Fg%3E%3C%2Fsvg%3E\") !important; }\n\n.location-active-one p {\n  color: #333333 !important; }\n\n.location-active-two p {\n  color: #333333 !important; }\n\n.location-active-three p {\n  color: #333333 !important; }\n\n.order-input {\n  border-radius: 6px;\n  background-color: #f1f2f4;\n  border: solid 1px #e4e5e5;\n  width: 100%;\n  padding: 15px 20px;\n  color: #8c95a0; }\n\n.location-active {\n  box-shadow: 0 5px 12px 0 rgba(185, 192, 197, 0.5) !important;\n  border: solid 1px #50e3c2 !important;\n  background-color: red; }\n\n.video {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: 1px;\n  color: #442a70;\n  text-align: right;\n  text-transform: uppercase; }\n\n.pay-input {\n  border-radius: 6px;\n  background-color: #f1f2f4;\n  border: solid 1px #e4e5e5;\n  width: 100%;\n  padding: 10px 5px;\n  color: #8c95a0; }\n\n.mint-card {\n  margin-top: 35px; }\n\n.mint-card-new {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.21;\n  letter-spacing: normal;\n  color: #26282b; }\n\n.new-customer {\n  cursor: pointer;\n  text-decoration: underline; }\n\n.validate-data {\n  border-radius: 5px;\n  background-color: #333333;\n  text-align: center;\n  cursor: pointer;\n  padding: 0 20px;\n  margin-bottom: 10px; }\n\n.validate-data p {\n  font-family: \"Poppins\", sans-serif;\n  text-transform: uppercase;\n  color: #fefefe;\n  margin: 10px auto;\n  font-size: 14px; }\n\n.mint-form-title h3 {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 24px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  color: #26282b; }\n\n.divider {\n  height: 2px;\n  border: solid 1px rgba(142, 160, 140, 0.16); }\n\n.mint-form-container {\n  width: 100%;\n  margin: 0;\n  padding: 0; }\n\n.mint-form-subtitle {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #26282b;\n  margin-top: 26px; }\n\n.mint-card-important {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.21;\n  letter-spacing: normal;\n  text-align: center;\n  color: #ea2966; }\n\n.btn-outline-purple:not(:disabled):not(.disabled):active, .show > .btn-outline-purple.dropdown-toggle {\n  color: #fff;\n  background-color: #333333;\n  border-color: #333333; }\n\n.btn-outline-purple:hover {\n  color: #fff;\n  background-color: #333333;\n  border-color: #333333; }\n\n.btn-outline-purple {\n  color: #333333;\n  background-color: transparent;\n  background-image: none;\n  border-color: #333333; }\n\n.subtitle-icon h3 {\n  margin: 0;\n  padding-left: 10px; }\n\n.badge-important {\n  color: #fff;\n  background-color: #ea2966; }\n\n::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #8c95a0;\n  opacity: .5; }\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #8c95a0;\n  opacity: .5; }\n\n:-ms-input-placeholder {\n  /* IE 10+ */\n  color: #8c95a0;\n  opacity: .5; }\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  color: #8c95a0;\n  opacity: .5; }\n"

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/details.service */ "./src/app/service/details.service.ts");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






// key that is used to access the order in local storage
var STORAGE_KEY = 'local_order';
var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(el, detailsService, data, router, storage, formBuilder) {
        this.el = el;
        this.detailsService = detailsService;
        this.data = data;
        this.router = router;
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.cart = [];
        this.values = '';
        this.location = false;
        this.selectedLocation = 0;
        this.locationMessage = '';
        this.newCustomerState = false;
        this.payData = {};
        this.mintData = {};
        this.validCard = true;
        this.callAction = false;
        this.customerName = '';
        this.customerPhone = '';
        this.errorValidate = '';
        this.validCustomer = false;
        this.errorMint = '';
        this.total = 0;
        this.locationOne = false;
        this.locationTwo = false;
        this.locationThree = false;
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        this.detailsService.storePayData(this.payData);
        this.cart = this.detailsService.getLocalOrder();
        if (this.cart && Object.keys(this.cart).length > 0) {
            this.totalPrice(this.cart);
        }
        else {
            this.router.navigate(['/']);
        }
        this.form = this.formBuilder.group({
            ncName: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            ],
            ncLastname: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            ],
            ncEmail: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]
            ],
            ncPhone: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(8)]
            ],
            ncSocial: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            ],
            ncNit: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            ],
            ncCardnumber: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$")]
            ],
            ncCardName: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            ],
            ncExpMonth: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("^[0-9]*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(2)]
            ],
            ncExpYear: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("^[0-9]*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(2)]
            ],
            ncCvv: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("^[0-9]*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(3)]
            ],
        });
    };
    CheckoutComponent.prototype.totalPrice = function (cart) {
        this.total = 0;
        for (var i = 0; i < cart.length; i++) {
            this.total += (cart[i].precio * cart[i].cantidad);
        }
    };
    CheckoutComponent.prototype.onKey = function (event) {
        this.values = event.target.value;
    };
    CheckoutComponent.prototype.orderLocation = function (event) {
        var elementId = event.target.id;
        this.values = elementId;
        this.location = !this.location;
        if (this.values == "local") {
            this.selectedLocation = 1;
            this.locationOne = true;
            this.locationTwo = false;
            this.locationThree = false;
        }
        else if (this.values == "reforma") {
            this.selectedLocation = 2;
            this.locationOne = false;
            this.locationTwo = true;
            this.locationThree = false;
        }
        else if (this.values == "avenida") {
            this.selectedLocation = 3;
            this.locationOne = false;
            this.locationTwo = false;
            this.locationThree = true;
        }
    };
    CheckoutComponent.prototype.newCustomer = function () {
        this.newCustomerState = true;
    };
    CheckoutComponent.prototype.phoneNumber = function (input) {
        var _this = this;
        var number = input || '';
        number = number.trim().replace(/[-\s\(\)]/g, '');
        if (number.length === 8) {
            this.data.validateCustomer(this.payData).subscribe(function (message) {
                // Existing customer pay type = 1
                if (message.status == 1) {
                    _this.errorValidate = '';
                    _this.validatePayData(_this.payData, false, 1);
                    _this.el.nativeElement.querySelector('#mintNumber').focus();
                }
                else {
                    _this.validatePayData(_this.payData, true, 1);
                    _this.errorValidate = "Teléfono inválido";
                }
            }, function (error) {
                console.log("Validate error: ", error);
                _this.errorValidate = "Teléfono inválido";
            });
        }
    };
    CheckoutComponent.prototype.mintCard = function (input) {
        var _this = this;
        var card = input || '';
        if (card.length == 6) {
            this.callAction = true;
        }
        if (this.callAction) {
            this.data.getCustomer(input).subscribe(function (data) {
                _this.errorMint = '';
                _this.customer$ = data;
                _this.customerName = data.cliente.name;
                _this.customerPhone = data.cliente.telefono;
                if (data.activa) {
                    _this.validCard = false;
                }
            }, function (error) {
                console.log("Card error: ", error);
                _this.validCard = true;
                _this.customer$ = '';
                _this.customerName = '';
                _this.customerPhone = '';
                _this.errorMint = "Numero de tarjeta invalido";
            });
            this.callAction = false;
        }
    };
    CheckoutComponent.prototype.validateNewCustomer = function () {
        if (Object.keys(this.form.value).length == 11) {
            // New customer pay type = 2;
            this.validatePayData(this.form.value, false, 2);
        }
    };
    CheckoutComponent.prototype.formStatus = function () {
        if (!this.form.invalid) {
            this.validateNewCustomer();
        }
    };
    CheckoutComponent.prototype.payMint = function () {
        this.newCustomerState = false;
    };
    /**
     * Cuando sea un cliente existente e ingrese una tarjeta que se valide con el numero de telefono,
     * o cuando sea un cliente nuevo y complete todos los campos del formulario de cliente nuevo correctamente
     * se llamara a la funcion, esta funcion se encarga de enviar al servicio la informacion de pago de acuerdo al caso,
     * tambien envia que el formulario es valido para habilitar el boton de pago y envia el tipo de cliente que
     * realizara la transaccion para saber que metodo de pago utilizar.
     * @param {object} payData - El objeto contiene los valores de pago, en caso de sea un cliente nuevo incluye todos los valores
     * para crear una tarjeta nueva. Se agrega la locacion seleccionada para pickup y en caso de que sea necesario un mensaje
     * de indicaciones para el comercio.
     * @param {boolean} valid - Envia false si el formulario es valido, esto hace que disable=false para el boton de comprar
     * @param {number} type - Envia 1 si el cliente es un cliente existente y envia 2 si es un cliente nuevo
     */
    CheckoutComponent.prototype.validatePayData = function (payData, valid, type) {
        if (this.selectedLocation == 1) {
            payData.location = "Local";
        }
        else if (this.selectedLocation == 2) {
            payData.location = "Reforma";
        }
        else if (this.selectedLocation == 3) {
            payData.location = "1 Avenida";
        }
        else {
            payData.location = "No definido";
        }
        payData.message = this.locationMessage;
        payData.validCustomer = valid;
        payData.payType = type;
        this.detailsService.addPayElements(payData);
    };
    CheckoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.scss */ "./src/app/checkout/checkout.component.scss")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["SESSION_STORAGE"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _service_details_service__WEBPACK_IMPORTED_MODULE_2__["DetailsService"], _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    // Obtiene el menu del comercio
    DataService.prototype.getMenu = function () {
        return this.http.get('restaurant/menu');
    };
    // Obtener informacion del cliente existente de acuerdo al numero de m1nt
    DataService.prototype.getCustomer = function (customer) {
        return this.http.get('rest/pedidos/tarjeta/' + customer);
    };
    // Obtener orden existente
    DataService.prototype.getOrder = function (order) {
        return this.http.get('rest/pedidos/orden/' + order.id + '/' + order.hash);
    };
    // Validar que la m1nt card corresponta con el numero de telefono
    DataService.prototype.validateCustomer = function (data) {
        var headers = new Headers({ "Content-Type": "application/json" });
        return this.http.post('rest/pedidos/verificar-telefono', data);
    };
    // Pago para cliente existente
    DataService.prototype.setOrder = function (orden) {
        // const headers = new Headers({"Content-Type": "application/json"});
        return this.http.post('rest/pedidos/orden-pagar', orden);
    };
    // Pago para cliente nuevo
    DataService.prototype.setCustomerOrder = function (orden) {
        // const headers = new Headers({"Content-Type": "application/json"});
        return this.http.post('rest/pedidos/pagocc', orden);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar footer-bg mt-5\">\r\n  <div class=\"copy-container\">\r\n    {{ copyYear }} All rights reserved - izaruz\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-bg {\n  background-color: #333333 !important;\n  color: #fefefe; }\n\n.copy-container {\n  font-family: \"Poppins\", sans-serif;\n  color: #fefefe;\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.17;\n  letter-spacing: normal;\n  margin: 40px auto; }\n\n@media (max-width: 576px) {\n  .footer-bg {\n    padding-bottom: 60px; } }\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.copyDate = new Date();
        this.copyYear = this.copyDate.getFullYear();
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header style=\"background-image: url(https://static1.squarespace.com/static/573df11fc6fc08ade76bb783/5744a0d72b8dde5c126a6c27/5748650640261d83d67da0d6/1519931582278/the_norm_restaurant_revised-6.jpg?format=1500w)\">\r\n  <img src=\"assets/rest.png\" srcset=\"assets/rest.png 1000w, assets/rest.png 2000w\" alt=\"Restaurant\" >\r\n</header>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 315px;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0 10px 20px 0 rgba(185, 192, 197, 0.5); }\n\nheader::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.4); }\n\nheader img {\n  z-index: 5;\n  width: 250px; }\n\n@media (max-width: 576px) {\n  header {\n    height: 140px; }\n  header img {\n    width: 150px; } }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-7 col-lg-8\">\r\n      <h3 class=\"title\">Select the products you want to add to your order</h3>\r\n      <ng-container *ngFor=\"let category of menu$\">\r\n        <div class=\"row category-container\" *ngIf=\"category.disponiblePickup\">\r\n          <div class=\"col-sm-12\" (click)=\"quantity()\">\r\n            <h3>{{category.nombre}}</h3>\r\n          </div>\r\n          <ng-container *ngFor=\"let product of category.productos\">\r\n            <div class=\"card col-lg-6 product-hero\" *ngIf=\"product.disponiblePickup\">\r\n              <div class=\"card-body product-container\" (click)=\"getpopup(product)\" >\r\n                <div class=\"row flex-nowrap align-items-center\">\r\n                  <div class=\"col-xs-4 custom-padding\">\r\n                    <div class=\"rounded-circle product-image\">\r\n                        <div *ngIf=\"product.imagenUrl\">\r\n                          <img [src]=\"product.imagenUrl\" height=\"100px\">\r\n                        </div>\r\n                        <div *ngIf=\"!product.imagenUrl\">\r\n                          <img src=\"assets/default-product.jpg\" height=\"100px\">\r\n                        </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-xs-8\">\r\n                    <h5 class=\"product-title\">{{ titleCaseWord(product.nombre) }}</h5>\r\n                    <p class=\"product-description\">{{ product.descripcion | slice:0:100 }}</p>\r\n                    <p class=\"product-price\">US$ {{ product.precio | number:'1.2-2' }}</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"product-quantity\" [hidden]=\"!product.cantidad\">{{ product.cantidad }}</div>\r\n              </div>\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n\r\n    <!-- Cart component -->\r\n    <div class=\"col-sm-5 col-lg-4\">\r\n      <app-cart></app-cart>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- Modal -->\r\n<app-productdetails [list] = \"selectedProduct\"></app-productdetails>"

/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: #f8fbfd; }\n\n.custom-padding {\n  padding: 0 5px; }\n\n.modal-backdrop.fade.show {\n  background-color: #333333 !important; }\n\n.btn-checkout-primary.disabled, .btn-checkout-primary:disabled {\n  color: #fefefe;\n  background-color: #8c95a0;\n  border-color: #8c95a0; }\n\n.btn-checkout:not(:disabled):not(.disabled) {\n  cursor: pointer; }\n\n.btn-checkout, .btn-checkout-lg {\n  padding: .5rem 1rem !important;\n  font-size: 1.25rem !important;\n  line-height: 1.5 !important;\n  border-radius: .3rem !important; }\n\n.btn-checkout-primary {\n  color: #fefefe;\n  background-color: #333333;\n  border-color: #333333; }\n\n.btn-checkout {\n  display: inline-block;\n  font-weight: 400 !important;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: .375rem .75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: .25rem;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out; }\n\n.title {\n  color: #8c95a0;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 16px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 0.88;\n  letter-spacing: normal;\n  margin-top: 40px; }\n\n.category-container {\n  padding: 40px 5px; }\n\n.category-container h3 {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 24px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #26282b;\n  text-transform: capitalize; }\n\n.product-container {\n  cursor: pointer;\n  margin: 5px 10px;\n  box-shadow: 0 7px 17px 0 rgba(185, 192, 197, 0.5);\n  background-color: #fefefe;\n  border-radius: 8px !important;\n  padding-right: 30px; }\n\n.product-hero {\n  background-color: transparent;\n  border: 0px solid white;\n  padding: 0; }\n\n.product-image {\n  height: 100px;\n  width: 100px;\n  margin-right: 10px;\n  overflow: hidden;\n  text-align: center;\n  z-index: 0; }\n\n.product-title {\n  font-size: 16px;\n  font-family: \"Poppins\", sans-serif;\n  color: #26282b;\n  margin-bottom: 5px; }\n\n.product-description {\n  color: #8c95a0;\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1;\n  letter-spacing: normal;\n  font-family: \"Poppins\", sans-serif;\n  margin-top: 0;\n  margin-bottom: 25px; }\n\n.product-price {\n  font-size: 18px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 0.78;\n  letter-spacing: normal;\n  color: #000000;\n  font-family: \"Poppins\", sans-serif;\n  margin: 0; }\n\n.product-quantity {\n  background-color: #50e3c2;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  font-family: \"Poppins\", sans-serif;\n  text-align: center;\n  margin-top: -128px;\n  margin-right: -28px;\n  font-size: 14px;\n  float: right; }\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _service_details_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/details.service */ "./src/app/service/details.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuComponent = /** @class */ (function () {
    function MenuComponent(data, detailsService) {
        this.data = data;
        this.detailsService = detailsService;
        this.selectedProduct = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"];
        this.total = 0;
    }
    MenuComponent.prototype.showModal = function (modalBody) {
        console.log("Modal: ", modalBody);
    };
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getMenu().subscribe(function (data) { return _this.menu$ = data; });
        this.orderSubscription = this.detailsService.orderElements().subscribe(function (message) {
            _this.order = message;
        });
        this.quantitySubscription = this.detailsService.productQuantity().subscribe(function (message) {
            _this.menu$ = _this.menu$;
        });
    };
    MenuComponent.prototype.titleCaseWord = function (word) {
        if (!word)
            return word;
        return word[0].toUpperCase() + word.substr(1).toLowerCase();
    };
    MenuComponent.prototype.getpopup = function (det) {
        this.selectedProduct.next(det);
    };
    MenuComponent.prototype.setMessage = function (product) {
        this.detailsService.setMessage(product);
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _service_details_service__WEBPACK_IMPORTED_MODULE_3__["DetailsService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light navbar-bg\">\r\n  <a class=\"navbar-brand\" [routerLink]=\"['/']\"><img src=\"assets/brand.png\" alt=\"Restaurant logo\" width=\"150px\"></a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n    </ul>\r\n    <div class=\"row phone align-items-center justify-content-center\">\r\n      <img src=\"assets/phone-icon.svg\" alt=\"Phone icon\">\r\n      <h3>5555 5555</h3>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-bg {\n  background-color: #333333 !important; }\n\n.phone {\n  padding-right: 25px; }\n\n.phone h3 {\n  color: #fefefe;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 1.2em;\n  margin: 0;\n  padding-left: 10px; }\n\nnav .navbar-brand {\n  color: #fefefe !important; }\n\nnav .nav-link {\n  color: #fefefe !important; }\n\n.custom-toggler.navbar-toggler {\n  border-color: #ff66cb !important; }\n\n.custom-toggler .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,102,203, 0.7)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\") !important; }\n\n@media (max-width: 576px) {\n  .phone {\n    padding-top: 15px;\n    padding-bottom: 15px; } }\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/order/order.component.html":
/*!********************************************!*\
  !*** ./src/app/order/order.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-8\" *ngIf=\"order$\">\n      <div class=\"row align-items-center order-header\">\n        <img src=\"assets/order-icon-complete.svg\" alt=\"Bag icon\">\n        <h3 class=\"order-title\">Orden # {{ orderParams$.id }}</h3>\n      </div>\n      <section class=\"order-container\">\n        <div class=\"row\">\n          <div class=\"col-12 col-md-12 text-center\">\n            <img src=\"assets/cart-complete-icon.svg\" class=\"order-completed-icon\" alt=\"Order complete\">\n          </div>\n          <div class=\"col-sm-12 col-md-12\">\n            <h3 class=\"order-subtitle\">Tu órden ha sido procesada</h3>\n          </div>\n          <div class=\"col-sm-12 col-md-12\">\n            <h4 class=\"order-resume\">Resumen de tu órden</h4>\n          </div>\n\n          <div class=\"col-6 col-sm-6 col-md-6\">\n            <p class=\"order-detail-title\">Comercio:</p>\n          </div>\n          <div class=\"col-6 col-sm-6 col-md-6\">\n            <p class=\"order-detail-description\">{{ order$.nombreComercio }}</p>\n          </div>\n\n          <div class=\"col-6 col-sm-6 col-md-6\">\n            <p class=\"order-detail-title\">Nombre:</p>\n          </div>\n          <div class=\"col-6 col-sm-6 col-md-6\">\n            <p class=\"order-detail-description\">{{cliente}}</p>\n          </div>\n\n          <div class=\"col-6 col-sm-6 col-md-6\">\n            <p class=\"order-detail-title\">Tarjeta M1nt:</p>\n          </div>\n          <div class=\"col-6 col-sm-6 col-md-6\">\n            <p class=\"order-detail-description\">{{tarjeta}}</p>\n          </div>\n\n          <div class=\"col-6 col-sm-6 col-md-6\">\n            <p class=\"order-detail-title\">Lugar entrega:</p>\n          </div>\n          <div class=\"col-6 col-sm-6 col-md-6\">\n            <p class=\"order-detail-description\">{{ order$.lugar_entrega }}</p>\n          </div>\n\n          <div class=\"col-6 col-sm-6 col-md-6\">\n            <p class=\"order-detail-title\">Hora de entrega:</p>\n          </div>\n          <div class=\"col-6 col-sm-6 col-md-6\">\n            <p class=\"order-detail-description\">{{ orderPickupTime }}</p>\n          </div>\n\n          <div class=\"col-sm-12 spacer\">\n            <p class=\"order-detail-important\">Tienes 15 min a partir de esta hora para recoger tu órden.</p>\n          </div>\n\n          <div class=\"col-sm-12\">\n            <div class=\"row item-container\" *ngFor=\"let detail of order$.detalle\">\n              <div class=\"col-2 col-sm-2\">\n                <div class=\"item-quantity\">{{detail.cantidad}}</div>\n              </div>\n              <div class=\"col-6 col-sm-6\">\n                <span class=\"item-description\">{{detail.descripcion}}</span>\n              </div>\n              <div class=\"col-4 col-sm-4 text-right\">\n                <img src=\"assets/mint-icon.svg\" alt=\"m1nt logo\" class=\"order-mint\">\n                <span class=\"item-cost\">{{detail.total | number:'1.2-2'}}</span>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-md-12 divider\">\n            <div class=\"row justify-content-between\">\n              <div class=\"col-4 col-md-3\">\n                <p class=\"order-subtotal\">Subtotal</p>\n              </div>\n              <div class=\"col-4 col-md-4 text-right\">\n                <img src=\"assets/mint-icon.svg\" alt=\"m1nt logo\" class=\"order-mint\">\n                <span class=\"order-subtotal\">{{ order$.subTotal | number:'1.2-2' }}</span>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-md-12\">\n            <div class=\"row justify-content-between\">\n              <div class=\"col-4 col-md-3\">\n                <p class=\"order-total\">Total</p>\n              </div>\n              <div class=\"col-4 col-md-4 text-right\">\n                <img src=\"assets/mint-icon.svg\" alt=\"m1nt logo\" class=\"order-mint\">\n                <span class=\"order-total\">{{ order$.total | number:'1.2-2' }}</span>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n        <div class=\"row justify-content-center product-add-container\">\n          <button class=\"btn-checkout btn-checkout-lg btn-checkout-primary\" (click)=\"newOrder()\" >Realizar otra órden</button>\n        </div>\n      </section>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/order/order.component.scss":
/*!********************************************!*\
  !*** ./src/app/order/order.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: #f8fbfd; }\n\n.custom-padding {\n  padding: 0 5px; }\n\n.modal-backdrop.fade.show {\n  background-color: #333333 !important; }\n\n.btn-checkout-primary.disabled, .btn-checkout-primary:disabled {\n  color: #fefefe;\n  background-color: #8c95a0;\n  border-color: #8c95a0; }\n\n.btn-checkout:not(:disabled):not(.disabled) {\n  cursor: pointer; }\n\n.btn-checkout, .btn-checkout-lg {\n  padding: .5rem 1rem !important;\n  font-size: 1.25rem !important;\n  line-height: 1.5 !important;\n  border-radius: .3rem !important; }\n\n.btn-checkout-primary {\n  color: #fefefe;\n  background-color: #333333;\n  border-color: #333333; }\n\n.btn-checkout {\n  display: inline-block;\n  font-weight: 400 !important;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: .375rem .75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: .25rem;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out; }\n\n.btn-checkout-primary.disabled, .btn-checkout-primary:disabled {\n  color: #fefefe;\n  background-color: #8c95a0;\n  border-color: #8c95a0; }\n\n.btn-checkout:not(:disabled):not(.disabled) {\n  cursor: pointer; }\n\n.btn-checkout, .btn-checkout-lg {\n  padding: .5rem 1rem !important;\n  font-size: 1.25rem !important;\n  line-height: 1.5 !important;\n  border-radius: .3rem !important; }\n\n.btn-checkout-primary {\n  color: #fefefe;\n  background-color: #333333;\n  border-color: #333333; }\n\n.btn-checkout {\n  display: inline-block;\n  font-weight: 400 !important;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: .375rem .75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: .25rem;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out; }\n\n.order-header {\n  margin-top: 45px;\n  padding-left: 50px; }\n\n.order-container {\n  margin: 5px 10px;\n  box-shadow: 0 7px 17px 0 rgba(185, 192, 197, 0.5);\n  background-color: #fefefe;\n  border-radius: 8px !important;\n  padding: 25px 150px 25px 150px; }\n\n.order-title {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 24px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #26282b;\n  margin: 0;\n  padding-left: 10px; }\n\n.order-subtitle {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 24px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #26282b;\n  text-align: center; }\n\n.order-resume {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #26282b;\n  text-align: center; }\n\n.order-detail-title {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1;\n  letter-spacing: normal;\n  color: #26282b; }\n\n.order-detail-description {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1;\n  letter-spacing: normal;\n  color: #26282b; }\n\n.order-detail-important {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.17;\n  letter-spacing: normal;\n  color: #ea2966; }\n\n.order-subtotal {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #26282b; }\n\n.order-total {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #26282b; }\n\n.order-mint {\n  height: 20px;\n  padding-right: 10px !important; }\n\n.item-container {\n  border-bottom: solid 1px rgba(142, 160, 140, 0.16);\n  padding: 5px 0;\n  margin: 0; }\n\n.item-quantity {\n  background-color: #dedede;\n  border-radius: 50%;\n  width: 25px;\n  height: 25px;\n  font-family: \"Poppins\", sans-serif;\n  text-align: center; }\n\n.item-description {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  color: #8c95a0; }\n\n.item-cost {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 16px;\n  color: #26282b; }\n\n.spacer {\n  border-bottom: solid 1px rgba(142, 160, 140, 0.16);\n  margin-bottom: 15px; }\n\n.divider {\n  margin-top: 20px; }\n\n.order-completed-icon {\n  height: 160px;\n  text-align: center;\n  padding-bottom: 25px; }\n\n@media (max-width: 576px) {\n  .order-container {\n    padding: 25px 20px; } }\n"

/***/ }),

/***/ "./src/app/order/order.component.ts":
/*!******************************************!*\
  !*** ./src/app/order/order.component.ts ***!
  \******************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderComponent = /** @class */ (function () {
    function OrderComponent(route, data, router) {
        var _this = this;
        this.route = route;
        this.data = data;
        this.router = router;
        this.orderPickupTime = '';
        this.orderId$ = '';
        this.cliente = '';
        this.tarjeta = '';
        this.route.params.subscribe(function (params) { return _this.orderParams$ = params; });
    }
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getOrder(this.orderParams$).subscribe(function (message) {
            _this.order$ = message;
            _this.cliente = message.tarjeta.cliente.nombres + " " + message.tarjeta.cliente.apellidos;
            _this.tarjeta = message.tarjeta.codigoCorto;
            var pickupTime = new Date(message.fecha);
            var pickupTimeHour = pickupTime.getHours() + 1;
            var pickupTimeMinutes = (pickupTime.getMinutes() < 10 ? '0' : '') + pickupTime.getMinutes();
            _this.orderPickupTime = String(pickupTimeHour) + ':' + String(pickupTimeMinutes) + ' hrs';
        }, function (error) {
            _this.router.navigate(['/']);
        });
    };
    OrderComponent.prototype.newOrder = function () {
        this.router.navigate(['/']);
    };
    OrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.scss */ "./src/app/order/order.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/productdetails/productdetails.component.html":
/*!**************************************************************!*\
  !*** ./src/app/productdetails/productdetails.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\r\n<div class=\"modal fade modal-backdrop-purple\" id=\"detailProduct\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"productTitle\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\" *ngIf=\"fulldetails\">\r\n      <div class=\"detail-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        <div *ngIf=\"fulldetails.imagenUrl\">\r\n          <img src=\"{{ fulldetails.imagenUrl }}\" >\r\n        </div>\r\n        <div *ngIf=\"!fulldetails.imagenUrl\">\r\n          <img src=\"assets/default-product.jpg\">\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-body detail-body\">\r\n          <div class=\"row product-hero\">\r\n            <div class=\"col-sm-12\">\r\n              <h5 class=\"product-title\">{{ fulldetails.nombre }}</h5>\r\n              <p class=\"product-description\">{{ fulldetails.descripcion }}</p>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"row justify-content-center\">\r\n                <p class=\"product-price\">US$ {{ fulldetails.precio | number:'1.2-2' }}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row justify-content-center actions-btns\">\r\n            <div class=\"action-btn-minus\" (click)=\"removeQuantity()\"><img src=\"assets/minus-icon.svg\" alt=\"Remove item\"></div>\r\n            <div class=\"product-quantity\">{{ quantity }}</div>\r\n            <!-- <div class=\"product-quantity\">{{ fulldetails.cantidad }}</div> -->\r\n            <div class=\"action-btn-plus\" (click)=\"addQuantity()\"><img src=\"assets/plus-icon.svg\" alt=\"Add item\"></div>\r\n          </div>\r\n          <div class=\"row justify-content-center product-add-container\">\r\n            <div class=\"product-add\" (click)=\"updateQuantity( fulldetails )\" data-dismiss=\"modal\" aria-label=\"Close\" *ngIf=\"fulldetails.cantidad == 0\">\r\n              <p>Agregar a la orden</p>\r\n            </div>\r\n            <div class=\"product-add\" (click)=\"updateQuantity( fulldetails )\" data-dismiss=\"modal\" aria-label=\"Close\" *ngIf=\"fulldetails.cantidad > 0\">\r\n              <p>Actualizar la orden</p>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/productdetails/productdetails.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/productdetails/productdetails.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-backdrop.fade.show {\n  background-color: #210539 !important; }\n\n.detail-header {\n  position: relative;\n  padding: 0;\n  height: 200px;\n  overflow: hidden; }\n\n.detail-header img {\n  position: absolute;\n  z-index: 0;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  border-top-left-radius: 8px !important;\n  border-top-right-radius: 8px !important; }\n\n.detail-header button {\n  position: absolute;\n  z-index: 5;\n  top: 20px;\n  right: 20px;\n  color: #fefefe; }\n\n.product-hero {\n  margin-bottom: 30px; }\n\n.product-title {\n  font-size: 28px;\n  font-family: \"Poppins\", sans-serif;\n  color: #26282b;\n  margin-bottom: 5px; }\n\n.product-description {\n  color: #8c95a0;\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1;\n  letter-spacing: normal;\n  font-family: \"Poppins\", sans-serif;\n  margin-top: 0;\n  margin-bottom: 25px; }\n\n.product-price {\n  font-size: 24px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 0.78;\n  letter-spacing: normal;\n  color: #000000;\n  font-family: \"Poppins\", sans-serif;\n  margin: 0; }\n\n.order-mint {\n  height: 20px;\n  padding-right: 10px !important; }\n\n.modal-dialog {\n  opacity: 1; }\n\n.action-btn-plus {\n  background-color: #50e3c2;\n  border-radius: 50%;\n  padding: 10px 12px;\n  cursor: pointer; }\n\n.action-btn-minus {\n  background-color: #dadee2;\n  border-radius: 50%;\n  padding: 11px 12px;\n  cursor: pointer; }\n\n.product-quantity {\n  font-size: 24px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 0.78;\n  letter-spacing: normal;\n  color: #000000;\n  font-family: \"Poppins\", sans-serif;\n  margin: 15px 15px 0 15px; }\n\n.product-add {\n  border-radius: 5px;\n  background-color: #333333;\n  text-align: center;\n  cursor: pointer;\n  padding: 0 20px; }\n\n.product-add p {\n  font-family: \"Poppins\", sans-serif;\n  text-transform: uppercase;\n  color: #fefefe;\n  margin: 10px auto; }\n\n.actions-btns {\n  margin-bottom: 20px; }\n\n.product-add-container {\n  margin-bottom: 15px; }\n\n.modal-backdrop {\n  background-color: #333333 !important; }\n"

/***/ }),

/***/ "./src/app/productdetails/productdetails.component.ts":
/*!************************************************************!*\
  !*** ./src/app/productdetails/productdetails.component.ts ***!
  \************************************************************/
/*! exports provided: ProductdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdetailsComponent", function() { return ProductdetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/details.service */ "./src/app/service/details.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductdetailsComponent = /** @class */ (function () {
    function ProductdetailsComponent(detailsService) {
        this.detailsService = detailsService;
        this.upproducts = [];
        this.quantity = 1;
        this.removed = false;
    }
    ProductdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.list.subscribe(function (det) {
            _this.fulldetails = det;
            _this.quantitySubscription = _this.detailsService.productQuantity().subscribe(function (message) {
                _this.removed = true;
            });
            _this.updateOrder = _this.detailsService.onUpdateOrder().subscribe(function (update) {
                _this.fulldetails = update;
                _this.quantity = update.cantidad;
            });
            if (_this.removed) {
                det.cantidad = 0;
                _this.quantity = det.cantidad;
                _this.removed = false;
            }
            else {
                _this.quantity = det.cantidad;
                _this.removed = false;
            }
            if (_this.quantity == 0) {
                _this.quantity++;
            }
            $("#detailProduct").modal('show');
        }, function (error) {
            console.log("Modal error: ", error);
        });
    };
    ProductdetailsComponent.prototype.addQuantity = function () {
        this.quantity += 1;
    };
    ProductdetailsComponent.prototype.removeQuantity = function () {
        if (this.quantity > 0) {
            this.quantity -= 1;
        }
    };
    ProductdetailsComponent.prototype.updateQuantity = function (item) {
        item.cantidad = this.quantity;
        this.detailsService.addOrderElements(item);
        $("#detailProduct").modal('hide');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"])
    ], ProductdetailsComponent.prototype, "list", void 0);
    ProductdetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-productdetails',
            template: __webpack_require__(/*! ./productdetails.component.html */ "./src/app/productdetails/productdetails.component.html"),
            styles: [__webpack_require__(/*! ./productdetails.component.scss */ "./src/app/productdetails/productdetails.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_details_service__WEBPACK_IMPORTED_MODULE_1__["DetailsService"]])
    ], ProductdetailsComponent);
    return ProductdetailsComponent;
}());



/***/ }),

/***/ "./src/app/response/response.component.html":
/*!**************************************************!*\
  !*** ./src/app/response/response.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\n<div class=\"modal fade modal-backdrop-purple\" id=\"response\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"productTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\" >\n      <div class=\"modal-body detail-body\">\n        <div class=\"row\">\n          <div class=\"col-sm-12 text-center\" [hidden]=\"!(modalDetails.error_code == 'transaction_error')\">\n            <img src=\"assets/sin-saldo-icon.svg\" alt=\"Saldo insuficiente\">\n          </div>\n          <div class=\"col-sm-12 text-center error-image\" [hidden]=\"modalDetails.error_code == 'transaction_error'\">\n            <img src=\"assets/error-icon.svg\" alt=\"Error icon\">\n          </div>\n        </div>\n        <div class=\"row product-hero\">\n          <div class=\"col-sm-12\">\n            <h5 class=\"product-title\">Lo sentimos</h5>\n            <p class=\"product-description\">{{ modalDetails.message }}</p>\n          </div>\n          <div class=\"col-sm-12 align-self-center\">\n              <p class=\"product-price\"></p>\n          </div>\n        </div>\n        <div class=\"row justify-content-center product-add-container\" [hidden]=\"!(modalDetails.error_code == 'transaction_error')\">\n          <a href=\"https://m1nt.1001noches.com/#!/\" target=\"_blank\" class=\"recargar\">Recargar tarjeta</a>\n        </div>\n        <div class=\"row justify-content-center product-add-container\">\n          <button class=\"btn-checkout btn-checkout-lg btn-checkout-primary \" (click)=\"close()\">Aceptar</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/response/response.component.scss":
/*!**************************************************!*\
  !*** ./src/app/response/response.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: #f8fbfd; }\n\n.custom-padding {\n  padding: 0 5px; }\n\n.modal-backdrop.fade.show {\n  background-color: #333333 !important; }\n\n.btn-checkout-primary.disabled, .btn-checkout-primary:disabled {\n  color: #fefefe;\n  background-color: #8c95a0;\n  border-color: #8c95a0; }\n\n.btn-checkout:not(:disabled):not(.disabled) {\n  cursor: pointer; }\n\n.btn-checkout, .btn-checkout-lg {\n  padding: .5rem 1rem !important;\n  font-size: 1.25rem !important;\n  line-height: 1.5 !important;\n  border-radius: .3rem !important; }\n\n.btn-checkout-primary {\n  color: #fefefe;\n  background-color: #333333;\n  border-color: #333333; }\n\n.btn-checkout {\n  display: inline-block;\n  font-weight: 400 !important;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: .375rem .75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: .25rem;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out; }\n\n.product-title {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 28px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  color: #333333; }\n\n.product-description {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 17px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1;\n  letter-spacing: normal;\n  text-align: center;\n  color: #8c95a0; }\n\n.recargar {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: 1.1px;\n  text-align: center;\n  color: #333333;\n  text-decoration: none;\n  padding: .8rem 1rem !important;\n  margin-bottom: 15px; }\n\n.error-image {\n  padding-top: 40px;\n  padding-bottom: 40px; }\n"

/***/ }),

/***/ "./src/app/response/response.component.ts":
/*!************************************************!*\
  !*** ./src/app/response/response.component.ts ***!
  \************************************************/
/*! exports provided: ResponseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseComponent", function() { return ResponseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/details.service */ "./src/app/service/details.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResponseComponent = /** @class */ (function () {
    function ResponseComponent(detailsService) {
        this.detailsService = detailsService;
        this.modalDetails = {};
        this.errorDetails = {};
    }
    ResponseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartSubscription = this.detailsService.onSetResponse().subscribe(function (message) {
            _this.modalDetails = message.error;
            if (!_this.modalDetails) {
                _this.errorDetails = message;
            }
            $("#response").modal('show');
        });
    };
    ResponseComponent.prototype.close = function () {
        $("#response").modal('hide');
    };
    ResponseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-response',
            template: __webpack_require__(/*! ./response.component.html */ "./src/app/response/response.component.html"),
            styles: [__webpack_require__(/*! ./response.component.scss */ "./src/app/response/response.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_details_service__WEBPACK_IMPORTED_MODULE_1__["DetailsService"]])
    ], ResponseComponent);
    return ResponseComponent;
}());



/***/ }),

/***/ "./src/app/service/details.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/details.service.ts ***!
  \********************************************/
/*! exports provided: DetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsService", function() { return DetailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



// key that is used to access the order in local storage
var STORAGE_KEY = 'local_order';
var DetailsService = /** @class */ (function () {
    function DetailsService(storage) {
        this.storage = storage;
        this.details = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.quantity = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.order = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.response = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.update = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.pay = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    DetailsService.prototype.storeOnLocalStorage = function (order) {
        //get array of orders from local storage
        this.storage.remove(STORAGE_KEY);
        var currentOrder = this.storage.get(STORAGE_KEY) || [];
        if (order) {
            // push new order to array
            currentOrder.push({
                order: order
            });
            // insert updated array to local storage
            this.storage.set(STORAGE_KEY, currentOrder);
        }
    };
    DetailsService.prototype.getLocalOrder = function () {
        this.storagedOrder = this.storage.get(STORAGE_KEY);
        if (this.storagedOrder) {
            return this.storagedOrder[0].order;
        }
        return false;
    };
    DetailsService.prototype.onSetMessage = function () {
        return this.details.asObservable();
    };
    DetailsService.prototype.setMessage = function (value) {
        console.log("detail service", value);
        this.details.next(value);
    };
    // Update order
    DetailsService.prototype.onUpdateOrder = function () {
        return this.update.asObservable();
    };
    DetailsService.prototype.updateOrder = function (value) {
        this.update.next(value);
    };
    // Response
    DetailsService.prototype.onSetResponse = function () {
        return this.response.asObservable();
    };
    DetailsService.prototype.setResponse = function (value) {
        this.response.next(value);
    };
    // Update quantity in details component
    DetailsService.prototype.productQuantity = function () {
        return this.quantity.asObservable();
    };
    DetailsService.prototype.setQuantity = function (itemId) {
        this.quantity.next(itemId);
    };
    // New order
    DetailsService.prototype.orderElements = function () {
        return this.order.asObservable();
    };
    DetailsService.prototype.addOrderElements = function (order) {
        this.order.next(order);
    };
    // pay order
    DetailsService.prototype.payElements = function () {
        return this.pay.asObservable();
    };
    DetailsService.prototype.addPayElements = function (pay) {
        this.pay.next(pay);
    };
    // Pay Data
    DetailsService.prototype.storePayData = function (payData) {
        //get array of orders from local storage
        var completeOrder = this.storage.get(STORAGE_KEY) || [];
        if (payData) {
            // push new order to array
            completeOrder.push({
                mintCard: payData.mintCard,
                phoneNumer: payData.phoneNumer
            });
            // insert updated array to local storage
            this.storage.set(STORAGE_KEY, completeOrder);
        }
    };
    DetailsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["SESSION_STORAGE"])),
        __metadata("design:paramtypes", [Object])
    ], DetailsService);
    return DetailsService;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\web\restaurant-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map