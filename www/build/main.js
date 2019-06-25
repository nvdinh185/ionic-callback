webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dynamic_form_web_dynamic_form_web__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.callback = function (res) {
            console.log('Goi logout', res);
            return Promise.resolve({ next: "CLOSE" });
        };
    }
    HomePage.prototype.onClick = function () {
        var form = {
            title: "Tiêu đề của trang",
            items: [
                { type: "title", name: "Tiêu đề form" },
                {
                    type: "button",
                    options: [
                        { name: "CHỌN", next: "CALLBACK" },
                        { name: "ĐÓNG", next: "CLOSE" }
                    ]
                }
            ]
        };
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__dynamic_form_web_dynamic_form_web__["a" /* DynamicFormWebPage */], {
            parent: this,
            callback: this.callback,
            form: form
        });
        modal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\ionic-new\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button (click)="onClick()">Click me</button>\n</ion-content>\n'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\ionic-new\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormWebPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DynamicFormWebPage = /** @class */ (function () {
    function DynamicFormWebPage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.dynamicForm = {};
    }
    DynamicFormWebPage.prototype.ngOnInit = function () {
        this.dynamicForm = this.navParams.get("form") ? this.navParams.get("form") : this.dynamicForm;
        this.callback = this.navParams.get("callback");
        //this.parent = this.navParams.get("parent");
    };
    DynamicFormWebPage.prototype.onClick = function (btn) {
        console.log("0k", btn);
        var keyResults = {};
        btn.next_data = {
            data: keyResults
        };
        this.next(btn);
    };
    DynamicFormWebPage.prototype.next = function (btn) {
        var _this = this;
        console.log(btn);
        if (btn.next == 'CLOSE') {
            console.log(1);
            this.viewCtrl.dismiss();
        }
        else if (btn.next == 'CALLBACK') {
            console.log(2);
            this.callback(123)
                .then(function (nextStep) {
                console.log(nextStep);
                _this.next(nextStep);
            });
        }
    };
    DynamicFormWebPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dynamic-form-web',template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\ionic-new\src\pages\dynamic-form-web\dynamic-form-web.html"*/'<ion-header *ngIf="dynamicForm.title">\n\n	<ion-toolbar>\n\n		<ion-buttons left *ngIf="!dynamicForm?.home_disable">\n\n			<button ion-button icon-only color="primary" (click)="onClickGoHome()">\n\n				<ion-icon name="home"></ion-icon>\n\n			</button>\n\n		</ion-buttons>\n\n		<ion-title>{{dynamicForm.title}}</ion-title>\n\n		<ion-buttons right *ngFor="let btn of dynamicForm?.buttons">\n\n			<button ion-button icon-only color="{{btn.color}}" (click)="onClickHeader(btn)">\n\n				<ion-icon name="{{btn.icon}}"></ion-icon>\n\n			</button>\n\n		</ion-buttons>\n\n	</ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content no-padding class="background-page gradient">\n\n	<ion-grid>\n\n		<ion-row>\n\n			<ion-col class="background-card gradient grid-border" text-center col-12 offset-xl-3 col-xl-6 offset-lg-3\n\n				col-lg-6 offset-md-2 col-md-8 col-sm-12>\n\n\n\n				<ion-list *ngFor="let it of dynamicForm.items">\n\n\n\n					<!-- title -->\n\n					<ion-item class="background-card" *ngIf="it.type == \'title\'">\n\n						<ion-label class="title-item">{{it.name}}</ion-label>\n\n					</ion-item>\n\n\n\n					<!-- form chi tiet -->\n\n					<ion-list class="input-item" *ngIf="it.type == \'details\'">\n\n						<ion-item *ngFor="let dt of it.details">\n\n							<strong item-start>\n\n								{{dt.name}}\n\n							</strong>\n\n							<ion-label text-wrap item-end *ngIf="dt.pipe_date">\n\n								{{dt.value | date:dt.pipe_date}}\n\n							</ion-label>\n\n							<ion-label text-wrap item-end *ngIf="!dt.pipe_date">\n\n								{{dt.value}}\n\n							</ion-label>\n\n						</ion-item>\n\n					</ion-list>\n\n\n\n					<!-- title with avatar -->\n\n					<ion-item class="background-card" *ngIf="it.type == \'avatar\'">\n\n						<ion-avatar item-start><img [src]="it.url"></ion-avatar>\n\n						<h1 item-left class="title-item">{{it.name}}</h1>\n\n					</ion-item>\n\n\n\n					<!-- image -->\n\n					<ion-grid *ngIf="it.type == \'image\'">\n\n						<ion-row>\n\n							<ion-col style="text-align: center;">\n\n								<img *ngIf="!it.width||!it.height" [src]="it.url">\n\n								<img *ngIf="it.width&&it.height" [width]="it.width" [height]="it.height" [src]="it.url">\n\n							</ion-col>\n\n						</ion-row>\n\n					</ion-grid>\n\n\n\n					<!-- input text -->\n\n					<ion-item class="input-item" *ngIf="it.type == \'text\'">\n\n						<ion-label floating color="danger" text-wrap style="text-align: justify;" *ngIf="it.invalid">\n\n							{{it.hint}}(*)</ion-label>\n\n						<ion-icon item-left name="{{it.icon}}" *ngIf="it.icon"></ion-icon>\n\n						<ion-input type="{{it.input_type}}" placeholder={{it.name?it.name:it.hint}}\n\n							[(ngModel)]="it.value" [disabled]="it.disabled"></ion-input>\n\n					</ion-item>\n\n\n\n					<!-- input text-area -->\n\n					<ion-item class="input-item" *ngIf="it.type == \'text_area\'">\n\n						<ion-label floating color="danger" text-wrap style="text-align: justify;" *ngIf="it.invalid">\n\n							{{it.hint}}(*)</ion-label>\n\n						<ion-icon item-left name="{{it.icon}}" *ngIf="it.icon"></ion-icon>\n\n						<ion-textarea rows="6" cols="20" placeholder={{it.name?it.name:it.hint}} [(ngModel)]="it.value">\n\n						</ion-textarea>\n\n					</ion-item>\n\n\n\n					<!-- input password -->\n\n					<ion-item class="input-item" *ngIf="it.type == \'password\'">\n\n						<ion-label floating color="danger" text-wrap style="text-align: justify;" *ngIf="it.invalid">\n\n							{{it.hint}}(*)</ion-label>\n\n						<ion-icon item-left name="{{it.icon}}" *ngIf="it.icon"></ion-icon>\n\n						<ion-input [type]="password_type" placeholder={{it.name?it.name:it.hint}}\n\n							[(ngModel)]="it.value"></ion-input>\n\n						<button ion-button clear color="dark" type="button" item-right (click)="togglePasswordMode()">\n\n							<ion-icon name="{{eye}}"> </ion-icon>\n\n						</button>\n\n					</ion-item>\n\n\n\n					<!-- check box -->\n\n					<ion-item class="input-item" *ngIf="it.type == \'check\'">\n\n						<ion-label color="primary" text-wrap style="text-align: justify;">{{it.name?it.name:it.hint}}\n\n						</ion-label>\n\n						<ion-checkbox color="primary" [(ngModel)]="it.value"></ion-checkbox>\n\n					</ion-item>\n\n\n\n					<!-- radio select -->\n\n					<ion-list *ngIf="it.type == \'radio\'" radio-group [(ngModel)]="it.value">\n\n						<ion-list-header>\n\n							<ion-icon item-start name="{{it.icon}}"></ion-icon>\n\n							<ion-label color="dark" text-wrap style="text-align: justify;">{{it.name?it.name:it.hint}}\n\n							</ion-label>\n\n						</ion-list-header>\n\n						<ion-item *ngFor="let myRad of it.options">\n\n							<ion-label color="secondary" text-wrap style="text-align: justify;">{{myRad.name}}\n\n							</ion-label>\n\n							<ion-radio value="{{myRad.value}}"></ion-radio>\n\n						</ion-item>\n\n					</ion-list>\n\n\n\n					<!-- single select -->\n\n					<ion-item class="input-item" *ngIf="it.type == \'select\'">\n\n						<ion-icon item-left name="{{it.icon}}" *ngIf="it.icon"></ion-icon>\n\n						<ion-label color="primary" text-wrap style="text-align: justify;">{{it.name?it.name:it.hint}}\n\n						</ion-label>\n\n						<ion-select [(ngModel)]="it.value"\n\n							style="background-color: rgb(230, 103, 198); color:whitesmoke; border-radius: 1em;">\n\n							<ion-option *ngFor="let mySet of it.options" value="{{mySet.value}}">{{mySet.name}}\n\n							</ion-option>\n\n						</ion-select>\n\n					</ion-item>\n\n\n\n\n\n					<!-- multiple select -->\n\n					<ion-item class="input-item" *ngIf="it.type == \'select_multiple\'">\n\n						<ion-icon item-left name="{{it.icon}}" *ngIf="it.icon"></ion-icon>\n\n						<ion-label color="primary" text-wrap style="text-align: justify;">{{it.name?it.name:it.hint}}\n\n						</ion-label>\n\n						<ion-select [(ngModel)]="it.value" multiple="true"\n\n							style="background-color: rgb(103, 112, 230); color:whitesmoke; border-radius: 1em;">\n\n							<ion-option *ngFor="let mySet of it.options" value="{{mySet.value}}">{{mySet.name}}\n\n							</ion-option>\n\n						</ion-select>\n\n					</ion-item>\n\n\n\n					<!-- toggle check -->\n\n					<ion-item class="input-item" *ngIf="it.type == \'toggle\'">\n\n						<ion-icon name="{{it.icon}}" item-start color="primary"></ion-icon>\n\n						<ion-label color="primary" text-wrap style="text-align: justify;">{{it.name?it.name:it.hint}}\n\n						</ion-label>\n\n						<ion-toggle color="{{it.color}}" [(ngModel)]="it.value"></ion-toggle>\n\n					</ion-item>\n\n\n\n					<!-- range adjust -->\n\n					<ion-item class="input-item" *ngIf="it.type == \'range\'">\n\n						<ion-range min="{{it.min}}" max="{{it.max}}" pin="true" snaps="true" [(ngModel)]="it.value"\n\n							color="primary">\n\n							<ion-icon range-left small name="{{it.icon}}"></ion-icon>\n\n							<ion-icon range-right name="{{it.icon}}"></ion-icon>\n\n						</ion-range>\n\n					</ion-item>\n\n\n\n					<!-- rang title with value -->\n\n					<ion-item class="input-item" *ngIf="it.type == \'range-text\'">\n\n						<ion-label color="primary" *ngIf="it.name&&it.name.length>20" text-wrap\n\n							style="text-align: justify;">{{it.name}}</ion-label>\n\n						<ion-range min="0" max="5" color="secondary" snaps="true" [(ngModel)]="it.value">\n\n							<ion-label range-left color="primary" *ngIf="it.name&&it.name.length<=20">{{it.name}}\n\n							</ion-label>\n\n							<ion-label range-right\n\n								style="background-color: darkblue; color:whitesmoke; border-radius: 0.3em;">{{it.value}}\n\n								{{it.hint}}</ion-label>\n\n						</ion-range>\n\n					</ion-item>\n\n\n\n					<!-- date time-->\n\n					<ion-item class="input-item" *ngIf="it.type == \'datetime\'">\n\n						<ion-label color="danger" *ngIf="it.invalid">{{it.hint}}(*)</ion-label>\n\n						<ion-label *ngIf="!it.invalid">{{it.name}}</ion-label>\n\n						<ion-datetime displayFormat="{{it.display}}" pickerFormat="{{it.picker}}"\n\n							[(ngModel)]="it.value"></ion-datetime>\n\n					</ion-item>\n\n\n\n					<!-- button action -->\n\n					<ion-grid *ngIf="it.type == \'button\'">\n\n						<ion-row>\n\n							<ion-col *ngFor="let myBtn of it.options" style="text-align: center;">\n\n								<button class="button-item" [(ngStyle)]="pageContent" ion-button round\n\n									(click)="onClick(myBtn)">\n\n									{{myBtn?.name}}\n\n								</button>\n\n							</ion-col>\n\n						</ion-row>\n\n					</ion-grid>\n\n\n\n				</ion-list>\n\n			</ion-col>\n\n		</ion-row>\n\n	</ion-grid>\n\n</ion-content>'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\ionic-new\src\pages\dynamic-form-web\dynamic-form-web.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], DynamicFormWebPage);
    return DynamicFormWebPage;
}());

//# sourceMappingURL=dynamic-form-web.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(216);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_dynamic_form_web_dynamic_form_web__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_dynamic_form_web_dynamic_form_web__["a" /* DynamicFormWebPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_dynamic_form_web_dynamic_form_web__["a" /* DynamicFormWebPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_home__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyApp = /** @class */ (function () {
    function MyApp() {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_1__pages_home_home__["a" /* HomePage */];
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\ionic-new\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\ionic-new\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[193]);
//# sourceMappingURL=main.js.map