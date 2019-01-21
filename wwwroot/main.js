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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-top-menu></app-top-menu>\n<app-login></app-login>\n<!-- <app-home></app-home> -->\n<app-get-info-by-email></app-get-info-by-email>\n<!-- <div>footerr</div> -->\n<!-- <button class=\"btn btn-primary\">Salva</button>\n<fa name=\"cog\" animation=\"spin\"></fa>\n<fa name=\"snowflake-o\" animation=\"pulse\"></fa> -->\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ng';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _componenets_top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componenets/top-menu/top-menu.component */ "./src/app/componenets/top-menu/top-menu.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _componenets_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./componenets/home/home.component */ "./src/app/componenets/home/home.component.ts");
/* harmony import */ var _services_global_runtime_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/global-runtime-config.service */ "./src/app/services/global-runtime-config.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _componenets_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./componenets/login/login.component */ "./src/app/componenets/login/login.component.ts");
/* harmony import */ var _componenets_login_info_for_menu_login_info_for_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./componenets/login-info-for-menu/login-info-for-menu.component */ "./src/app/componenets/login-info-for-menu/login-info-for-menu.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _componenets_get_info_by_email_get_info_by_email_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./componenets/get-info-by-email/get-info-by-email.component */ "./src/app/componenets/get-info-by-email/get-info-by-email.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _componenets_top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_4__["TopMenuComponent"],
                _componenets_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _componenets_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _componenets_login_info_for_menu_login_info_for_menu_component__WEBPACK_IMPORTED_MODULE_11__["LoginInfoForMenuComponent"],
                _componenets_get_info_by_email_get_info_by_email_component__WEBPACK_IMPORTED_MODULE_13__["GetInfoByEmailComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__["AngularFontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]
            ],
            providers: [
                _services_global_runtime_config_service__WEBPACK_IMPORTED_MODULE_8__["GlobalRuntimeConfigService"],
                _services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/componenets/get-info-by-email/get-info-by-email.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/componenets/get-info-by-email/get-info-by-email.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVuZXRzL2dldC1pbmZvLWJ5LWVtYWlsL2dldC1pbmZvLWJ5LWVtYWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/componenets/get-info-by-email/get-info-by-email.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/componenets/get-info-by-email/get-info-by-email.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n  Nome : <input type=\"text\" [(ngModel)]=\"emailMessage.fromName\" ><br>\n  Cognome : <input type=\"text\" [(ngModel)]=\"emailMessage.fromSurname\" ><br>\n  La tua Email : <input type=\"text\" [(ngModel)]=\"emailMessage.fromEmail\" ><br>\n  Numero di telefono (Opzionale, solamente se si desidera essere ricontattati con urgenza) : <input type=\"text\" [(ngModel)]=\"emailMessage.fromTelephone\" ><br>\n  Oggetto : <input type=\"text\" [(ngModel)]=\"emailMessage.subject\" ><br>\n  Contenuto : <input type=\"text\" [(ngModel)]=\"emailMessage.body\" ><br>\n  <button class=\"btn btn-success\" (click)=\"inviaEmail()\">Invia</button>\n</div>\n"

/***/ }),

/***/ "./src/app/componenets/get-info-by-email/get-info-by-email.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/componenets/get-info-by-email/get-info-by-email.component.ts ***!
  \******************************************************************************/
/*! exports provided: GetInfoByEmailComponent, EMailMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetInfoByEmailComponent", function() { return GetInfoByEmailComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMailMessage", function() { return EMailMessage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_global_runtime_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/global-runtime-config.service */ "./src/app/services/global-runtime-config.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");




var GetInfoByEmailComponent = /** @class */ (function () {
    function GetInfoByEmailComponent(_globalRuntimeService, _api) {
        this.emailMessage = new EMailMessage("", "", "", "", "", "", "");
        this.txt = new Testi();
        this.rtmSvc = _globalRuntimeService;
        this.api = _api;
    }
    GetInfoByEmailComponent.prototype.ngOnInit = function () {
    };
    GetInfoByEmailComponent.prototype.inviaEmail = function () {
        var _this = this;
        if (!this.emailMessage.fromEmail.includes("@") || !this.emailMessage.fromEmail.includes(".")) {
            alert(this.txt.emailNonValida[this.rtmSvc.config.lang]);
            return;
        }
        this.api.SendEmailForInfo(this.emailMessage).subscribe(function (success) {
            if (success == 1)
                alert(_this.txt.messaggioInviato[_this.rtmSvc.config.lang]);
            else
                alert(_this.txt.messaggioNonInviato[_this.rtmSvc.config.lang]);
        }, function (err) { alert(_this.txt.messaggioNonInviato[_this.rtmSvc.config.lang]); }, function () { });
    };
    GetInfoByEmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-get-info-by-email',
            template: __webpack_require__(/*! ./get-info-by-email.component.html */ "./src/app/componenets/get-info-by-email/get-info-by-email.component.html"),
            styles: [__webpack_require__(/*! ./get-info-by-email.component.css */ "./src/app/componenets/get-info-by-email/get-info-by-email.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_global_runtime_config_service__WEBPACK_IMPORTED_MODULE_2__["GlobalRuntimeConfigService"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], GetInfoByEmailComponent);
    return GetInfoByEmailComponent;
}());

var EMailMessage = /** @class */ (function () {
    function EMailMessage(fromName, fromSurname, fromEmail, to, fromTelephone, subject, body) {
        this.fromName = fromName;
        this.fromSurname = fromSurname;
        this.fromEmail = fromEmail;
        this.to = to;
        this.fromTelephone = fromTelephone;
        this.subject = subject;
        this.body = body;
        this.to = "mori.luca@hotmail.it";
    }
    return EMailMessage;
}());

var Testi = /** @class */ (function () {
    function Testi() {
        //input placeholders
        this.namePlaceholder = ["Indirizzo E-Mail", "E-Mail Address"];
        this.passwordPlaceholder = ["Password", "Password"];
        this.emailNonValida = ["L'email deve contenere i caratteri '@' , '.' ed essere lunga almeno 5 caratteri.", "Your Email must contain '@' , '.' and be long at least 5 characters."];
        this.messaggioInviato = ["Il messaggio è stato inviato correttamente", "Your message has been sent."];
        this.messaggioNonInviato = ["Impossibile inviare il messaggio.", "Sorry, we are unable to send your message at the moment."];
    }
    return Testi;
}());


/***/ }),

/***/ "./src/app/componenets/home/home.component.css":
/*!*****************************************************!*\
  !*** ./src/app/componenets/home/home.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n    width: 100%;\n    height: 92.7vh;\n    overflow: hidden;\n    position: relative;\n}\n.home-background{\n    width: 100%;\n    min-height: 100%;\n}\n.cover {\n    position: absolute;\n    float: left;\n    width: 100%;\n    height: 100%;\n    background:rgba(0,0,0,0.75);\n    \n}\n.text-container{\n    position: relative;\n    margin: auto;\n    color: white;\n    width: 70%;\n    height: 50%;\n    -webkit-transform: translate(0%, -50%);\n            transform: translate(0%, -50%);\n    top: 50%;\n    text-align: center;\n    /*  border: 2px solid white; */\n}\n.title{\n    font-size: 12vw;\n    font-family: 'Luckiest Guy', cursive;\n    height: 70%;\n}\n.description{\n    font-size: 3vw;\n    font-family: 'Handlee', cursive;\n    height: 30%;\n}\nhr{\n    color: white;\n    background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW5ldHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLFlBQVk7SUFDWixpQkFBaUI7Q0FDcEI7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYiw0QkFBNEI7O0NBRS9CO0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLHVDQUErQjtZQUEvQiwrQkFBK0I7SUFDL0IsU0FBUztJQUNULG1CQUFtQjtJQUNuQiwrQkFBK0I7Q0FDbEM7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixxQ0FBcUM7SUFDckMsWUFBWTtDQUNmO0FBRUQ7SUFDSSxlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLFlBQVk7Q0FDZjtBQUVEO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVuZXRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOTIuN3ZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhvbWUtYmFja2dyb3VuZHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4uY292ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuNzUpO1xuICAgIFxufVxuXG4udGV4dC1jb250YWluZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gICAgdG9wOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8qICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTsgKi9cbn1cblxuLnRpdGxle1xuICAgIGZvbnQtc2l6ZTogMTJ2dztcbiAgICBmb250LWZhbWlseTogJ0x1Y2tpZXN0IEd1eScsIGN1cnNpdmU7XG4gICAgaGVpZ2h0OiA3MCU7XG59XG5cbi5kZXNjcmlwdGlvbntcbiAgICBmb250LXNpemU6IDN2dztcbiAgICBmb250LWZhbWlseTogJ0hhbmRsZWUnLCBjdXJzaXZlO1xuICAgIGhlaWdodDogMzAlO1xufVxuXG5ocntcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/componenets/home/home.component.html":
/*!******************************************************!*\
  !*** ./src/app/componenets/home/home.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"cover\">\n    <div class=\"text-container\">\n        <div class=\"title\">{{txt.titolo[rtmSvc.config.lang]}}</div>\n        <hr>\n        <div class=\"description\">{{txt.descrizione[rtmSvc.config.lang]}}</div>\n    </div>\n  </div>\n  <!-- <img class=\"home-background\" src=\"../../../assets/media/home/boat-fisherman-fishing-102730.jpg\" alt=\"\"> -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/componenets/home/home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/componenets/home/home.component.ts ***!
  \****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_global_runtime_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/global-runtime-config.service */ "./src/app/services/global-runtime-config.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(_globalRuntimeService) {
        this.txt = new Testi();
        this.rtmSvc = _globalRuntimeService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/componenets/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/componenets/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_global_runtime_config_service__WEBPACK_IMPORTED_MODULE_2__["GlobalRuntimeConfigService"]])
    ], HomeComponent);
    return HomeComponent;
}());

var Testi = /** @class */ (function () {
    function Testi() {
        this.titolo = ["Too Ez Fish", "Too Ez Fish"];
        this.descrizione = ["Il Nuovo Portale Italiano dedicato alla Pesca Sportiva.", "The new Italian Fishing Reference."];
    }
    return Testi;
}());


/***/ }),

/***/ "./src/app/componenets/login-info-for-menu/login-info-for-menu.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/componenets/login-info-for-menu/login-info-for-menu.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVuZXRzL2xvZ2luLWluZm8tZm9yLW1lbnUvbG9naW4taW5mby1mb3ItbWVudS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/componenets/login-info-for-menu/login-info-for-menu.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/componenets/login-info-for-menu/login-info-for-menu.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div *ngIf=\"!rtmSvc.config.user.isLogged && !rtmSvc.config.login.showLoginForm\" class=\"login-request\" >\n      <button (click)=\"ShowLoginRegisterForm()\" class=\"btn btn-dark\">{{txt.login[rtmSvc.config.lang]}}/{{txt.register[rtmSvc.config.lang]}}</button>\n    \n  </div>\n  <div  *ngIf=\"rtmSvc.config.user.isLogged\" class=\"info\">\n    <p>\n      {{(rtmSvc.config.user.showPrivateName)?rtmSvc.config.user.name+\" \"+rtmSvc.config.user.surname+ \" | \"+rtmSvc.config.user.nickname : rtmSvc.config.user.nickname}}\n    </p>\n    <button class=\"btn btn-dark\" (click)=\"logout()\">{{txt.logout[rtmSvc.config.lang]}}</button>\n  </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/componenets/login-info-for-menu/login-info-for-menu.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/componenets/login-info-for-menu/login-info-for-menu.component.ts ***!
  \**********************************************************************************/
/*! exports provided: LoginInfoForMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginInfoForMenuComponent", function() { return LoginInfoForMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_global_runtime_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/global-runtime-config.service */ "./src/app/services/global-runtime-config.service.ts");



var LoginInfoForMenuComponent = /** @class */ (function () {
    function LoginInfoForMenuComponent(_globalRuntimeService) {
        this.showLoginRegisterForm = false;
        this.txt = new Testi();
        this.rtmSvc = _globalRuntimeService;
    }
    LoginInfoForMenuComponent.prototype.ngOnInit = function () {
    };
    LoginInfoForMenuComponent.prototype.ShowLoginRegisterForm = function () {
        this.rtmSvc.config.login.showLoginForm = true;
    };
    LoginInfoForMenuComponent.prototype.logout = function () {
        if (confirm(this.txt.logoutConfirm[this.rtmSvc.config.lang]))
            this.rtmSvc.config.user = new _services_global_runtime_config_service__WEBPACK_IMPORTED_MODULE_2__["User"]();
    };
    LoginInfoForMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-info-for-menu',
            template: __webpack_require__(/*! ./login-info-for-menu.component.html */ "./src/app/componenets/login-info-for-menu/login-info-for-menu.component.html"),
            styles: [__webpack_require__(/*! ./login-info-for-menu.component.css */ "./src/app/componenets/login-info-for-menu/login-info-for-menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_global_runtime_config_service__WEBPACK_IMPORTED_MODULE_2__["GlobalRuntimeConfigService"]])
    ], LoginInfoForMenuComponent);
    return LoginInfoForMenuComponent;
}());

var Testi = /** @class */ (function () {
    function Testi() {
        this.login = ["Accedi", "Login"];
        this.register = ["Registrati", "Sign Up"];
        this.logout = ["Disconnetti", "Logout"];
        this.logoutConfirm = ["Sei sicuro di volerti scollegare?", "Do you really want to logout?"];
    }
    return Testi;
}());


/***/ }),

/***/ "./src/app/componenets/login/login.component.css":
/*!*******************************************************!*\
  !*** ./src/app/componenets/login/login.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form-wrapper{\n    background: #228b221f;\n\n}\n\n.exit-icon{\n    color: forestgreen;\n    position: relative;\n}\n\ninput{\n    margin: 10px, 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW5ldHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjs7Q0FFekI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW5ldHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1mb3JtLXdyYXBwZXJ7XG4gICAgYmFja2dyb3VuZDogIzIyOGIyMjFmO1xuXG59XG5cbi5leGl0LWljb257XG4gICAgY29sb3I6IGZvcmVzdGdyZWVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW5wdXR7XG4gICAgbWFyZ2luOiAxMHB4LCAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/componenets/login/login.component.html":
/*!********************************************************!*\
  !*** ./src/app/componenets/login/login.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"rtmSvc.config.login.showLoginForm && !showLoginRegisterForm\" class=\"login-form-wrapper\">\n  <div></div>\n  <fa class=\"exit-icon mr-3\" name=\"times\" size=\"2x\" (click)=\"closeForm()\"></fa>\n  <input class=\"m-1\" [(ngModel)]=\"credenzialiLogin.email\" type=\"text\" name=\"email\" id=\"email\" placeholder=\"{{txt.namePlaceholder[rtmSvc.config.lang]}}\">\n  <input class=\"m-1\" [(ngModel)]=\"credenzialiLogin.password\" (keyup.enter)=\"accedi(credenzialiLogin)\" type=\"password\" name=\"password\" id=\"password\" placeholder=\"{{txt.passwordPlaceholder[rtmSvc.config.lang]}}\">\n  <button (click)=\"accedi(credenzialiLogin)\" class=\"btn btn-dark m-2\">{{txt.accedi[rtmSvc.config.lang]}}</button>\n  <button (click)=\"apriFormRegistrazione()\" class=\"btn btn-dark m-2\">{{txt.registrati[rtmSvc.config.lang]}}</button>\n</div>\n\n<div *ngIf=\"showLoginRegisterForm\" class=\"login-form-wrapper\">\n  <fa class=\"exit-icon\" name=\"times\" size=\"2x\" (click)=\"closeForm()\"></fa>\n\n  <input [(ngModel)]=\"nuovoUtente.name\" type=\"text\" name=\"name\" id=\"name\" placeholder=\"{{txt.regNamePh[rtmSvc.config.lang]}}\">\n  <input [(ngModel)]=\"nuovoUtente.surname\" type=\"text\" name=\"surname\" id=\"surname\" placeholder=\"{{txt.regSurnamePh[rtmSvc.config.lang]}}\">\n  <input [(ngModel)]=\"nuovoUtente.nickname\" type=\"text\" name=\"nick\" id=\"nick\" placeholder=\"{{txt.regNicknamePh[rtmSvc.config.lang]}}\">\n  <input [(ngModel)]=\"nuovoUtente.email\" type=\"text\" name=\"email\" id=\"email\" placeholder=\"{{txt.regEmailPh[rtmSvc.config.lang]}}\">\n  <input [(ngModel)]=\"nuovoUtente.password\" type=\"password\" name=\"password\" id=\"password\" placeholder=\"{{txt.passwordPlaceholder[rtmSvc.config.lang]}}\">\n  {{txt.regShowPrivateNamePh[rtmSvc.config.lang]}}<input [(ngModel)]=\"nuovoUtente.showPrivateName\" type=\"checkbox\" name=\"showPrivateName\"\n    id=\"showPrivateName\">\n  <br>\n  <button (click)=\"confermaRegistrazione()\" class=\"btn btn-success\">{{txt.btnRegistrati[rtmSvc.config.lang]}}</button>\n  <button (click)=\"chiudiFormRegistrazione()\" class=\"btn btn-dark\">{{txt.sonoRegistrato[rtmSvc.config.lang]}}</button>\n  <button (click)=\"resetCampi()\" class=\"btn btn-warning\">{{txt.btnClearRegistrazione[rtmSvc.config.lang]}}</button>\n</div>\n"

/***/ }),

/***/ "./src/app/componenets/login/login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componenets/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent, InputCredenzialiLogin, UserForDotnet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputCredenzialiLogin", function() { return InputCredenzialiLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserForDotnet", function() { return UserForDotnet; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_global_runtime_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/global-runtime-config.service */ "./src/app/services/global-runtime-config.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(_globalRuntimeService, _api) {
        this.showLoginRegisterForm = false;
        this.txt = new Testi();
        this.credenzialiLogin = new InputCredenzialiLogin("", "");
        //oggetto utilizzato come buffer per i dati in ingresso
        this.nuovoUtente = new UserForDotnet();
        this.rtmSvc = _globalRuntimeService;
        this.api = _api;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.toggle = function () {
        this.rtmSvc.config.user.isLogged = !this.rtmSvc.config.user.isLogged;
    };
    LoginComponent.prototype.closeForm = function () {
        this.rtmSvc.config.login.showLoginForm = false;
        this.showLoginRegisterForm = false;
    };
    /*return values is encoded in the user basicId
     basicId = >= 0 | OK
     basicId = > -1 | Email non registrata
     basicId = > -2 | Email trovata ma password sbagliata
   */
    LoginComponent.prototype.accedi = function (_credenziali) {
        var _this = this;
        //controllo se email e password sono validi
        if (!_credenziali.email.includes("@") || !_credenziali.email.includes(".")) {
            alert(this.txt.emailNonValida[this.rtmSvc.config.lang]);
            return;
        }
        if (_credenziali.password.trim().length < 4) {
            alert(this.txt.passNonValida[this.rtmSvc.config.lang]);
            return;
        }
        this.api.login(_credenziali).subscribe(function (success) {
            var user = success;
            if (user.basicId >= 0) {
                _this.rtmSvc.config.user = user;
                _this.rtmSvc.config.user.isLogged = true;
                console.log(_this.rtmSvc.config.user);
                _this.closeForm();
            }
            //email trovata, password sbagliata
            else if (user.basicId == -2)
                alert(_this.txt.emailOkPassNo[_this.rtmSvc.config.lang]);
            //email non trovata
            else if (user.basicId == -1)
                alert(_this.txt.emailNonTrovata[_this.rtmSvc.config.lang]);
        }, function (err) { }, function () { });
    };
    LoginComponent.prototype.apriFormRegistrazione = function () {
        this.showLoginRegisterForm = true;
    };
    LoginComponent.prototype.chiudiFormRegistrazione = function () {
        this.showLoginRegisterForm = false;
    };
    LoginComponent.prototype.resetCampi = function () {
        if (confirm(this.txt.confirmReset[this.rtmSvc.config.lang]))
            this.nuovoUtente = new _services_global_runtime_config_service__WEBPACK_IMPORTED_MODULE_2__["User"]();
    };
    /*
    From the api
    return  1 | registrazione ok
    return -1 | email gia esistente
    return -2 | nickname gia esistente
    return -3 | errore salvataggio credenziale email e password
    return -4 | errore salvataggio info
    */
    LoginComponent.prototype.confermaRegistrazione = function () {
        var _this = this;
        //controllo campi vuoti per la registrazione
        if (this.nuovoUtente.name.trim().length == 0) {
            alert(this.txt.nomeNonValido[this.rtmSvc.config.lang]);
            return;
        }
        if (this.nuovoUtente.surname.trim().length == 0) {
            alert(this.txt.cognomeNonValido[this.rtmSvc.config.lang]);
            return;
        }
        if (this.nuovoUtente.nickname.trim().length == 0) {
            alert(this.txt.nicknameNonValido[this.rtmSvc.config.lang]);
            return;
        }
        if (!this.nuovoUtente.email.includes("@") || !this.nuovoUtente.email.includes(".")) {
            alert(this.txt.emailNonValida[this.rtmSvc.config.lang]);
            return;
        }
        if (this.nuovoUtente.password.trim().length < 4) {
            alert(this.txt.passNonValida[this.rtmSvc.config.lang]);
            return;
        }
        confirm(this.txt.confirmRegistration[this.rtmSvc.config.lang]);
        this.api.addNewPerson(this.nuovoUtente).subscribe(function (success) {
            if (success == 1) {
                alert(_this.txt.signupSuccess[_this.rtmSvc.config.lang]);
                var credenziali = new InputCredenzialiLogin(_this.nuovoUtente.email, _this.nuovoUtente.password);
                _this.accedi(credenziali);
            }
            else if (success == -1)
                alert(_this.txt.messaggioEmailEsistente[_this.rtmSvc.config.lang]);
            else if (success == -2)
                alert(_this.txt.messaggioNicknameEsistente[_this.rtmSvc.config.lang]);
            else if (success == -3)
                alert(_this.txt.messaggioErroreBasic[_this.rtmSvc.config.lang]);
            else if (success == -4)
                alert(_this.txt.messaggioErroreInfo[_this.rtmSvc.config.lang]);
        }, function (err) { }, function () { });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/componenets/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/componenets/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_global_runtime_config_service__WEBPACK_IMPORTED_MODULE_2__["GlobalRuntimeConfigService"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], LoginComponent);
    return LoginComponent;
}());

var Testi = /** @class */ (function () {
    function Testi() {
        //input placeholders
        this.namePlaceholder = ["Indirizzo E-Mail", "E-Mail Address"];
        this.passwordPlaceholder = ["Password", "Password"];
        //form di registrazione place holders
        this.regNamePh = ["Nome", "Name"];
        this.regSurnamePh = ["Cognome", "Surname"];
        this.regNicknamePh = ["Soprannome/Nickname", "Nickname"];
        this.regShowPrivateNamePh = ["Vuoi permettere agli altri utenti di vedere il tuo nome e cognome?", "Would you like other people to know your personal name and surname ?"];
        this.regEmailPh = ["Email per la registrazione", "Sign Up Email"];
        //messaggi errore del form di registrazione per campi non validi
        this.nomeNonValido = ["Il campo nome non può essere vuoto.", "Name field can not be empty."];
        this.cognomeNonValido = ["Il Cognome nome non può essere vuoto.", "Surname field can not be empty."];
        this.nicknameNonValido = ["Il campo Nickname non può essere vuoto.", "Nickname field can not be empty."];
        this.passNonValida = ["La password deve essere lunga almeno 4 caratteri", "Password must be at least 4 character."];
        this.emailNonValida = ["L'email deve contenere i caratteri '@' , '.' ed essere lunga almeno 5 caratteri.", "Your Email must contain '@' , '.' and be long at least 5 characters."];
        //form di registrazione pulsanti
        this.btnRegistrati = ["Conferma Registrazione", "Confirm and Sign Up"];
        this.sonoRegistrato = ["Sei già registrato?", "Already Signed Up?"];
        this.btnClearRegistrazione = ["Ripulisci campi", "Reset Fielsd"];
        //conferma registrazione utente
        this.confirmRegistration = ["Sei sicuro di voler confermare la registrazione?", "Continue with the Sign Up?"];
        //messagi per utente
        this.messaggioEmailEsistente = ["Impossibile completare la registrazione, l'email inserita è già stata utilizzata.", "Can not Sign Up, the Email already exists."];
        this.messaggioNicknameEsistente = ["Impossibile completare la registrazione, il nickname inserita è già stato utilizzato.", "Can not Sign Up, the Nickname already exists."];
        this.messaggioErroreBasic = ["Impossibile completare la registrazione dati base con queste credenziali.\nContattare l'amministratore dalla pagina Contatti.", "Can not Sign Up the basic, using those credentials.\nPlease get in touch from the Contact form."];
        this.messaggioErroreInfo = ["Impossibile completare la registrazione dati info con queste credenziali.\nContattare l'amministratore dalla pagina Contatti.", "Can not Sign Up the info, using those credentials.\nPlease get in touch from the Contact form."];
        this.signupSuccess = ["La registrazione è avvenuta correttamente.", "Sign Up request was succesfull."];
        this.signupError = ["", ""];
        this.confirmReset = ["Sicuro di voler cancellare i valori inseriti?", "Do you really intend to clear the registration fields?"];
        //accesso non riuscito
        this.accessoNegato = ["Email o Password non valida.", "Email or Password are incorrect."];
        this.accedi = ["Accedi", "Login"];
        this.registrati = ["Non ti sei ancora registrato?", "Not yet Signed Up?"];
        //login fallito
        this.emailOkPassNo = ["La password inserita non corrisponde all'email selezionata.", "Password incorrect.\nThe Password does not match the email inserted."];
        this.emailNonTrovata = ["L'email inserita non è mai stata registrata.", "The email inserted is not been registered yet."];
    }
    return Testi;
}());
var InputCredenzialiLogin = /** @class */ (function () {
    function InputCredenzialiLogin(email, password) {
        this.email = email;
        this.password = password;
    }
    return InputCredenzialiLogin;
}());

var UserForDotnet = /** @class */ (function () {
    function UserForDotnet() {
        this.showPrivateName = false;
        this.name = "";
        this.surname = "";
        this.nickname = "";
        this.email = "";
        this.password = "";
    }
    return UserForDotnet;
}());



/***/ }),

/***/ "./src/app/componenets/top-menu/top-menu.component.css":
/*!*************************************************************!*\
  !*** ./src/app/componenets/top-menu/top-menu.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".langFlag{\n    width: 35px;\n    height: 50px;\n    border-radius: 100px;\n    margin-left: 10px;\n}\n\n.langFlag:hover {\n    transform: scale(1.3);\n    -webkit-transform: scale(1.3);\n    cursor: pointer;\n}\n\n.navbar-brand:hover{\n    color: forestgreen;\n    transform: scale(1.1);\n    -webkit-transform: scale(1.1);   \n}\n\n.outborder {\n    clear: both;\n    background: forestgreen;\n    height: 3px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW5ldHMvdG9wLW1lbnUvdG9wLW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qiw4QkFBOEI7Q0FDakM7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLFlBQVk7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVuZXRzL3RvcC1tZW51L3RvcC1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFuZ0ZsYWd7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ubGFuZ0ZsYWc6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXZiYXItYnJhbmQ6aG92ZXJ7XG4gICAgY29sb3I6IGZvcmVzdGdyZWVuO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTsgICBcbn1cblxuLm91dGJvcmRlciB7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgYmFja2dyb3VuZDogZm9yZXN0Z3JlZW47XG4gICAgaGVpZ2h0OiAzcHg7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/componenets/top-menu/top-menu.component.html":
/*!**************************************************************!*\
  !*** ./src/app/componenets/top-menu/top-menu.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand transition3\" href=\"/\">Too Ez Fish</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">{{txt.laghi[rtmSvc.config.lang]}}</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">{{txt.tecniche[rtmSvc.config.lang]}}</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">{{txt.squadre[rtmSvc.config.lang]}}</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">{{txt.specieIttiche[rtmSvc.config.lang]}}</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\">\n          Dropdown\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n      </li>\n\n    </ul>\n    <app-login-info-for-menu></app-login-info-for-menu>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder='{{txt.placeHolderRicerca[rtmSvc.config.lang]}}'\n        aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">{{txt.pulsanteRicerca[rtmSvc.config.lang]}}</button>\n    </form>\n    <img class=\"langFlag transition3\" (click)=\"changeLang(0)\" src=\"../../../assets/media/images/Flag_of_Italy.svg\" alt=\"Bandiera Italiana, Italian Flag\">\n    <img class=\"langFlag transition3\" (click)=\"changeLang(1)\" src=\"../../../assets/media/images/Flag_of_the_United_Kingdom.svg\" alt=\"Bandiera Britannica, UK Flag\">\n  </div>\n \n</nav>\n<div class=\"outborder\"></div>\n\n"

/***/ }),

/***/ "./src/app/componenets/top-menu/top-menu.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componenets/top-menu/top-menu.component.ts ***!
  \************************************************************/
/*! exports provided: TopMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopMenuComponent", function() { return TopMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_global_runtime_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/global-runtime-config.service */ "./src/app/services/global-runtime-config.service.ts");



var TopMenuComponent = /** @class */ (function () {
    function TopMenuComponent(_globalRuntimeService) {
        this.txt = new Testi();
        this.rtmSvc = _globalRuntimeService;
    }
    TopMenuComponent.prototype.ngOnInit = function () {
    };
    TopMenuComponent.prototype.changeLang = function (index) {
        this.rtmSvc.setLang(index);
    };
    TopMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top-menu',
            template: __webpack_require__(/*! ./top-menu.component.html */ "./src/app/componenets/top-menu/top-menu.component.html"),
            styles: [__webpack_require__(/*! ./top-menu.component.css */ "./src/app/componenets/top-menu/top-menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_global_runtime_config_service__WEBPACK_IMPORTED_MODULE_2__["GlobalRuntimeConfigService"]])
    ], TopMenuComponent);
    return TopMenuComponent;
}());

var Testi = /** @class */ (function () {
    function Testi() {
        this.pulsanteRicerca = ["Ricerca Laghetto", "Find Lake"];
        this.placeHolderRicerca = ["Nome Laghetto", "Pound Name"];
        this.laghi = ["Laghi", "Lakes"];
        this.tecniche = ["Tecniche", "Techniques"];
        this.squadre = ["Squadre", "Teams"];
        this.specieIttiche = ["Specie Ittiche", "Fish Species"];
    }
    return Testi;
}());


/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.urlGidi = "http://192.168.33.200:8080/";
        this.urlHome = "http://192.168.1.101:8080/";
        this.urlToEz = "http://192.168.33.200/";
        this.endpoint = this.urlGidi + 'api/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    ApiService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    /*********************************** test ************************************ */
    ApiService.prototype.getProducts = function () {
        return this.http.get(this.endpoint + 'products').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    ApiService.prototype.getProduct = function (id) {
        return this.http.get(this.endpoint + 'products/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    ApiService.prototype.updateProduct = function (id, product) {
        var body = JSON.stringify(product);
        return this.http.put(this.endpoint + 'products/' + id, body, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("updated product id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateProduct')));
    };
    ApiService.prototype.deleteProduct = function (id) {
        return this.http.delete(this.endpoint + 'products/' + id, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("deleted product id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteProduct')));
    };
    ApiService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    /********************************** test end ********************************** */
    ApiService.prototype.addNewPerson = function (user) {
        var body = JSON.stringify(user);
        return this.http.post(this.endpoint + 'registration', body, this.httpOptions);
    };
    ApiService.prototype.login = function (credenziali) {
        var body = JSON.stringify(credenziali);
        return this.http.post(this.endpoint + 'login', body, this.httpOptions);
    };
    /*********************************** email ************************************ */
    //Invio un email da parte di un utente dalla pagina contatti   
    ApiService.prototype.SendEmailForInfo = function (mex) {
        var emailInfoForCore = JSON.stringify(mex);
        return this.http.post(this.endpoint + 'email', emailInfoForCore, this.httpOptions);
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/global-runtime-config.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/global-runtime-config.service.ts ***!
  \***********************************************************/
/*! exports provided: GlobalRuntimeConfigService, GlobalRuntimeConfig, User, LoginRegisterHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalRuntimeConfigService", function() { return GlobalRuntimeConfigService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalRuntimeConfig", function() { return GlobalRuntimeConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRegisterHandler", function() { return LoginRegisterHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GlobalRuntimeConfigService = /** @class */ (function () {
    function GlobalRuntimeConfigService() {
        this.config = new GlobalRuntimeConfig();
    }
    GlobalRuntimeConfigService.prototype.setLang = function (langIndex) {
        if (langIndex >= 0 && langIndex < 3) {
            this.config.lang = langIndex;
        }
        else {
            //In caso di errore, setto la lingua ancora in italiano
            langIndex = 0;
        }
    };
    GlobalRuntimeConfigService.prototype.getConfig = function () {
        return this.config;
    };
    GlobalRuntimeConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GlobalRuntimeConfigService);
    return GlobalRuntimeConfigService;
}());

var GlobalRuntimeConfig = /** @class */ (function () {
    function GlobalRuntimeConfig() {
        this.lang = 0;
        this.user = new User();
        this.login = new LoginRegisterHandler();
    }
    return GlobalRuntimeConfig;
}());

var User = /** @class */ (function () {
    function User() {
        this.basicId = -1;
        this.isLogged = false;
        this.peopleId = -1;
        this.name = "";
        this.surname = "";
        this.nickname = "";
        this.showPrivateName = false;
        this.photo = "";
        this.email = "";
        this.password = "";
    }
    Object.defineProperty(User.prototype, "fullname", {
        get: function () {
            return (this.showPrivateName) ? this.name + " " + this.surname + " | " + this.nickname : this.nickname;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());

var LoginRegisterHandler = /** @class */ (function () {
    function LoginRegisterHandler() {
        this.showLoginForm = false;
        this.showRegisterForm = false;
    }
    return LoginRegisterHandler;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/luca/Documents/Angular/EzFish/ng/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map