webpackJsonp([1],{

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Repository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ether_wallet__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_global__ = __webpack_require__(84);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};




var Repository = /** @class */ (function (_super) {
    __extends(Repository, _super);
    function Repository(_storage) {
        var _this = _super.call(this) || this;
        _this._storage = _storage;
        return _this;
    }
    // methods. //
    Repository.prototype.onWriteEntropy = function (entropy) {
        /**
         * @param {entropy}: Save the entropy string, for unlock.
         */
        return this._storage.set('entropy', entropy);
    };
    Repository.prototype.onGetEntropy = function () {
        /**
         * @method: Get decrypt entropy string.
         * @param {password}: User password string.
         */
        return this._storage.get('entropy');
    };
    Repository.prototype.onWriteWalletObjec = function (password) {
        return __awaiter(this, void 0, void 0, function () {
            var encryptWallets;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        encryptWallets = this.eth.accounts.wallet.encrypt(password);
                        return [4 /*yield*/, this._storage.set('wallet', JSON.stringify(encryptWallets))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.walletToRepoWallet()];
                }
            });
        });
    };
    Repository.prototype.onGetWalletsDecrypt = function (password) {
        return __awaiter(this, void 0, void 0, function () {
            var encryptWallet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.onGetWalletsEncrypt()];
                    case 1:
                        encryptWallet = _a.sent();
                        this.accounts.wallet.decrypt(encryptWallet, password);
                        return [2 /*return*/, this.walletToRepoWallet()];
                }
            });
        });
    };
    Repository.prototype.walletToRepoWallet = function () {
        var _this = this;
        var wallet = this.accounts.wallet;
        var wallets = [];
        Object.keys(wallet).forEach(function (key) {
            if (!isNaN(+key) && !_this.utils.isAddress(key)) {
                wallets.push({
                    address: wallet[key].address,
                    privateKey: wallet[key].privateKey
                });
            }
        });
        __WEBPACK_IMPORTED_MODULE_3__app_global__["a" /* data */].wallet = wallets;
        return __WEBPACK_IMPORTED_MODULE_3__app_global__["a" /* data */].wallet;
    };
    Repository.prototype.onSign = function () {
        return __awaiter(this, void 0, void 0, function () {
            var entropy, test;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._storage.get('entropy')];
                    case 1:
                        entropy = _a.sent();
                        return [4 /*yield*/, this.accounts.sign(entropy, entropy)];
                    case 2:
                        test = _a.sent();
                        console.log(test);
                        return [2 /*return*/];
                }
            });
        });
    };
    Repository.prototype.onGetWalletsEncrypt = function () {
        return __awaiter(this, void 0, void 0, function () {
            var wallets;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._storage.get('wallet')];
                    case 1:
                        wallets = _a.sent();
                        return [2 /*return*/, JSON.parse(wallets)];
                }
            });
        });
    };
    Repository.prototype.activeAccountSet = function (id) {
        if (id === void 0) { id = 0; }
        __WEBPACK_IMPORTED_MODULE_3__app_global__["a" /* data */].activeAddress = id;
        return this._storage.set('active', "" + id);
    };
    Repository.prototype.activeAccountGet = function () {
        return __awaiter(this, void 0, void 0, function () {
            var active;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._storage.get('active')];
                    case 1:
                        active = _a.sent();
                        __WEBPACK_IMPORTED_MODULE_3__app_global__["a" /* data */].activeAddress = +active || 0;
                        return [2 /*return*/, __WEBPACK_IMPORTED_MODULE_3__app_global__["a" /* data */].activeAddress];
                }
            });
        });
    };
    Repository.prototype.onClear = function () {
        this._storage.clear();
    };
    Repository.prototype.isNotVirgin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var valid, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this._storage.length()];
                    case 1:
                        valid = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/, !!valid];
                }
            });
        });
    };
    Repository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], Repository);
    return Repository;
}(__WEBPACK_IMPORTED_MODULE_2__ether_wallet__["a" /* Wallet */]));

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesImportsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_ether_wallet__ = __webpack_require__(56);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};





// import { Ethereum } from '../../service/interfaces';
var PagesImportsPage = /** @class */ (function (_super) {
    __extends(PagesImportsPage, _super);
    function PagesImportsPage(navCtrl, alertCtrl, _storage) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.alertCtrl = alertCtrl;
        _this._storage = _storage;
        _this.wallets = [];
        _this.getWallets();
        return _this;
    }
    PagesImportsPage.prototype.getWallets = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var keys, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._storage.keys()];
                    case 1:
                        keys = _b.sent();
                        _a = this;
                        return [4 /*yield*/, keys.map(function (key) { return __awaiter(_this, void 0, void 0, function () {
                                var _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            _a = key + ": ";
                                            return [4 /*yield*/, this._storage.get(key)];
                                        case 1: return [2 /*return*/, _a + (_b.sent())];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.wallets = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PagesImportsPage.prototype.onPrivateKey = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    PagesImportsPage.prototype.test = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this._storage.clear();
                return [2 /*return*/];
            });
        });
    };
    PagesImportsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pages-imports',template:/*ion-inline-start:"/home/rinat/ionic/ether-wallet/src/pages/pages-imports/pages-imports.html"*/'<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-item>\n        <ion-label fixed>private key</ion-label>\n        <ion-input #key type="text" value=""></ion-input>\n      </ion-item>\n    </ion-row>\n    <ion-row>\n      <button ion-button\n              (click)="onPrivateKey(key.value)"\n              color="secondary"\n              outline>import</button>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/rinat/ionic/ether-wallet/src/pages/pages-imports/pages-imports.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], PagesImportsPage);
    return PagesImportsPage;
}(__WEBPACK_IMPORTED_MODULE_3__service_ether_wallet__["a" /* Wallet */]));

//# sourceMappingURL=pages-imports.js.map

/***/ }),

/***/ 188:
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
webpackEmptyAsyncContext.id = 188;

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/pages-imports/pages-imports.module": [
		651,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 229;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_ether_wallet__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_local_storage__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(332);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};






/**
 * Generated class for the AuthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AuthPage = /** @class */ (function (_super) {
    __extends(AuthPage, _super);
    function AuthPage(alertCtrl, loadingCtrl, repo, navCtrl, navParams) {
        var _this = _super.call(this) || this;
        _this.alertCtrl = alertCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.repo = repo;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.isExisting = _this.repo.isNotVirgin();
        _this.loader = _this.loadingCtrl.create({
            content: "Please wait..."
        });
        return _this;
        // this.navCtrl.setRoot(MenuPage);
        // this.repo.onClear();
    }
    AuthPage.prototype.signUp = function (pass0, pass1) {
        return __awaiter(this, void 0, void 0, function () {
            var alert, entropy;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert = {
                            title: null,
                            subTitle: null,
                            buttons: ['OK']
                        };
                        if (pass0 !== pass1) {
                            alert.title = 'password';
                            alert.subTitle = 'Enter the password again';
                            this.alertCtrl.create(alert).present();
                            return [2 /*return*/, null];
                        }
                        if (pass0.length < 3) {
                            alert.title = 'password';
                            alert.subTitle = 'weak password';
                            this.alertCtrl.create(alert).present();
                            return [2 /*return*/, null];
                        }
                        return [4 /*yield*/, this.loader.present()];
                    case 1:
                        _a.sent();
                        entropy = this.utils.randomHex(16);
                        this.createTenWallets(entropy);
                        this.repo.onWriteEntropy(entropy);
                        return [4 /*yield*/, this.repo.onWriteWalletObjec(pass0)];
                    case 2:
                        _a.sent();
                        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */]);
                        return [4 /*yield*/, this.loader.dismiss()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthPage.prototype.signIn = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var alert, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loader.present()];
                    case 1:
                        _a.sent();
                        alert = {
                            title: 'message',
                            subTitle: 'Incorrect password',
                            buttons: ['OK']
                        };
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 6]);
                        return [4 /*yield*/, this.repo.onGetWalletsDecrypt(value)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        err_1 = _a.sent();
                        this.alertCtrl.create(alert).present();
                        return [4 /*yield*/, this.loader.dismiss()];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, null];
                    case 6:
                        this.repo.activeAccountGet();
                        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */]);
                        return [4 /*yield*/, this.loader.dismiss()];
                    case 7:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-auth',template:/*ion-inline-start:"/home/rinat/ionic/ether-wallet/src/pages/auth/auth.html"*/'<!--\n  Generated template for the AuthPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sign</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngIf="!(isExisting | async)">\n    <ion-item>\n        <ion-input #pass0 type="password" placeholder="Password"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-input #pass1 type="password" placeholder="Password Confirm"></ion-input>\n    </ion-item>\n    <button (click)="signUp(pass0.value, pass1.value)" ion-button>sign up</button>\n  </ion-list>\n\n  <ion-list *ngIf="(isExisting | async)">\n      <ion-item>\n          <ion-input #pass0\n                     type="password"\n                     (change)="signIn(pass0.value)"\n                     placeholder="Password"></ion-input>\n      </ion-item>\n      <button (click)="signIn(pass0.value)" ion-button>sign in</button>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/rinat/ionic/ether-wallet/src/pages/auth/auth.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__service_local_storage__["a" /* Repository */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AuthPage);
    return AuthPage;
}(__WEBPACK_IMPORTED_MODULE_2__service_ether_wallet__["a" /* Wallet */]));

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_ether_wallet__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_imports_pages_imports__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__details_details__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about__ = __webpack_require__(342);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = /** @class */ (function (_super) {
    __extends(MenuPage, _super);
    function MenuPage(navCtrl, navParams) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.pages = {
            home: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */],
            impots: __WEBPACK_IMPORTED_MODULE_4__pages_imports_pages_imports__["a" /* PagesImportsPage */],
            details: __WEBPACK_IMPORTED_MODULE_5__details_details__["a" /* DetailsPage */],
            about: __WEBPACK_IMPORTED_MODULE_6__about_about__["a" /* AboutPage */]
        };
        _this.page = _this.pages.home;
        return _this;
    }
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/home/rinat/ionic/ether-wallet/src/pages/menu/menu.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button [menuToggle]>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Menu\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only>\n        network: {{net | async}}\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-menu [content]="mycontent">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Wallet</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item (click)="page = pages.home">\n          home\n      </button>\n      <button menuClose ion-item (click)="page = pages.impots">\n        import accaunt\n      </button>\n      <button menuClose ion-item (click)="page = pages.details">\n        details\n      </button>\n      <button menuClose ion-item>\n        network\n      </button>\n      <button menuClose ion-item (click)="page = pages.about">\n        about\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-content padding>\n  <ion-nav #mycontent [root]="page"></ion-nav>\n</ion-content>'/*ion-inline-end:"/home/rinat/ionic/ether-wallet/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MenuPage);
    return MenuPage;
}(__WEBPACK_IMPORTED_MODULE_2__service_ether_wallet__["a" /* Wallet */]));

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_ether_wallet__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_global__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__send_send__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_local_storage__ = __webpack_require__(177);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};







var HomePage = /** @class */ (function (_super) {
    __extends(HomePage, _super);
    function HomePage(repo, navCtrl, modalCtrl) {
        var _this = _super.call(this) || this;
        _this.repo = repo;
        _this.navCtrl = navCtrl;
        _this.modalCtrl = modalCtrl;
        _this.onBalance();
        return _this;
    }
    Object.defineProperty(HomePage.prototype, "wallets", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_3__app_global__["a" /* data */].wallet;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomePage.prototype, "isNumberOfAddress", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_3__app_global__["a" /* data */].activeAddress;
        },
        set: function (value) {
            this.repo.activeAccountSet(value);
            this.onBalance();
        },
        enumerable: true,
        configurable: true
    });
    HomePage.prototype.onBalance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var address, balance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        address = this.wallets[__WEBPACK_IMPORTED_MODULE_3__app_global__["a" /* data */].activeAddress];
                        return [4 /*yield*/, this.eth.getBalance(address.address)];
                    case 1:
                        balance = _a.sent();
                        this.balance = this.utils.fromWei("" + balance, 'ether');
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.presentProfileModal = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__send_send__["a" /* SendPage */]);
        profileModal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/rinat/ionic/ether-wallet/src/pages/home/home.html"*/'<ion-content>\n  <ion-card>\n      <ion-card-header>\n        current block: {{getBlockNumber | async}}\n      </ion-card-header>\n      <ion-card-content>\n        balance: {{balance}} ETH\n      </ion-card-content>\n    </ion-card>\n\n  <ion-grid>\n    <ion-row justify-content-center>\n      <div>\n        <button (click)="presentProfileModal()"\n            ion-button color="secondary">\n          send\n        </button>\n      </div>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <ion-list>\n    <ion-item>\n      <ion-label>\n          address: \n      </ion-label>\n      <ion-select [(ngModel)]="isNumberOfAddress"\n                  interface="action-sheet">\n        <ion-option *ngFor="let obj of wallets; let i=index"\n                    [value]="i">{{i + 1}} {{obj.address.slice(0, 12)}}...</ion-option>\n      </ion-select> \n    </ion-item>\n  </ion-list>\n</ion-footer>'/*ion-inline-end:"/home/rinat/ionic/ether-wallet/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__service_local_storage__["a" /* Repository */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], HomePage);
    return HomePage;
}(__WEBPACK_IMPORTED_MODULE_2__service_ether_wallet__["a" /* Wallet */]));

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ethereum_qr_code__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ethereum_qr_code___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ethereum_qr_code__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_ether_wallet__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_global__ = __webpack_require__(84);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};





/**
 * Generated class for the SendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SendPage = /** @class */ (function (_super) {
    __extends(SendPage, _super);
    function SendPage(alertCtrl, navCtrl, viewCtrl, navParams) {
        var _this = _super.call(this) || this;
        _this.alertCtrl = alertCtrl;
        _this.navCtrl = navCtrl;
        _this.viewCtrl = viewCtrl;
        _this.navParams = navParams;
        _this.address = __WEBPACK_IMPORTED_MODULE_4__app_global__["a" /* data */].wallet[__WEBPACK_IMPORTED_MODULE_4__app_global__["a" /* data */].activeAddress].address;
        _this.privateKey = __WEBPACK_IMPORTED_MODULE_4__app_global__["a" /* data */].wallet[__WEBPACK_IMPORTED_MODULE_4__app_global__["a" /* data */].activeAddress].privateKey;
        return _this;
    }
    SendPage.prototype.txSend = function (txData) {
        return __awaiter(this, void 0, void 0, function () {
            var nonce, data, hash, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.eth.getTransactionCount(this.address)];
                    case 1:
                        nonce = _a.sent();
                        data = {
                            nonce: nonce,
                            to: txData.to,
                            from: "" + this.address,
                            gasLimit: +txData.gasLimit,
                            gasPrice: +this.utils.toWei(txData.gasPrice.toString(), 'Gwei'),
                            value: +this.utils.toWei(txData.value.toString(), 'ether')
                        };
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.sendTransaction(data, this.privateKey)];
                    case 3:
                        hash = _a.sent();
                        console.log(hash);
                        return [2 /*return*/, hash];
                    case 4:
                        err_1 = _a.sent();
                        this.alertCtrl.create({
                            title: 'Error',
                            subTitle: err_1.message,
                            buttons: ['OK']
                        }).present();
                        return [2 /*return*/, null];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    SendPage.prototype.qrcode = function (txData) {
        return __awaiter(this, void 0, void 0, function () {
            var qr, data, qrCode, base64;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        qr = new __WEBPACK_IMPORTED_MODULE_2_ethereum_qr_code___default.a();
                        data = {
                            from: this.address,
                            to: txData.to,
                            value: this.utils.toWei(txData.value.toString(), 'ether')
                        };
                        qrCode = qr.toDataUrl(data);
                        return [4 /*yield*/, qrCode];
                    case 1:
                        base64 = _a.sent();
                        this.qrCodeString = base64.dataURL;
                        return [2 /*return*/, this.qrCodeString];
                }
            });
        });
    };
    SendPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-send',template:/*ion-inline-start:"/home/rinat/ionic/ether-wallet/src/pages/send/send.html"*/'<!--\n  Generated template for the SendPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Creating a transaction!</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-input type="text"\n               #to\n               value="0x68a8191add50d107BB8b25f3Feea172c35Cf2685"\n               placeholder="Recipient Address">\n    </ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-input type="number"\n               #value\n               value="0.1"\n               placeholder="Amount">\n    </ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-input type="number"\n               #data\n               placeholder="TRANSACTION DATA (OPTIONAL)">\n    </ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="primary">Gas Price in Gwei</ion-label>\n    <ion-input [value]="7" #gasPrice type="number"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="primary">Gas Limit</ion-label>\n    <ion-input [value]="21000" #gasLimit type="number"></ion-input>\n  </ion-item>\n\n  <ion-grid>\n    <ion-row justify-content-center>\n\n      <ion-col col-4>\n        <button ion-button\n                (click)="txSend({\n                  to: to.value, value: value.value,\n                  data: data.value, gasPrice: gasPrice.value,\n                  gasLimit: gasLimit.value\n                })"\n                color="secondary">send</button>\n\n        <button (click)="qrcode({\n          to: to.value, value: value.value,\n          data: data.value, gasPrice: gasPrice.value,\n          gasLimit: gasLimit.value\n        })" ion-button color="dark">qr code</button>\n\n        <button (click)="viewCtrl.dismiss()" ion-button color="danger">reject</button>\n      </ion-col>\n    \n      </ion-row>\n      \n      <ion-row justify-content-center>\n        <div class="qrCode"\n             [style.background]="\'url(\' + qrCodeString + \')\'">\n        </div>\n      </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/home/rinat/ionic/ether-wallet/src/pages/send/send.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SendPage);
    return SendPage;
}(__WEBPACK_IMPORTED_MODULE_3__service_ether_wallet__["a" /* Wallet */]));

//# sourceMappingURL=send.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_clipboard__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ethereum_qr_code__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ethereum_qr_code___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ethereum_qr_code__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_global__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};






/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailsPage = /** @class */ (function () {
    function DetailsPage(navCtrl, navParams, clipboard, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.clipboard = clipboard;
        this.alertCtrl = alertCtrl;
        this.numberOfAccaunt = __WEBPACK_IMPORTED_MODULE_4__app_global__["a" /* data */].activeAddress;
        this.address = __WEBPACK_IMPORTED_MODULE_4__app_global__["a" /* data */].wallet[__WEBPACK_IMPORTED_MODULE_4__app_global__["a" /* data */].activeAddress].address;
        this.qrcode().then(function (str) {
            _this.qrCodeString = str;
        });
    }
    DetailsPage.prototype.qrcode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var qr, address, qrCode, base64;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        qr = new __WEBPACK_IMPORTED_MODULE_3_ethereum_qr_code___default.a();
                        address = this.address;
                        qrCode = qr.toDataUrl({
                            to: address
                        });
                        return [4 /*yield*/, qrCode];
                    case 1:
                        base64 = _a.sent();
                        return [2 /*return*/, base64.dataURL];
                }
            });
        });
    };
    DetailsPage.prototype.copyAddress = function () {
        var alert = this.alertCtrl.create({
            title: 'Copied',
            subTitle: this.address.slice(0, 9) + '...',
            buttons: ['OK']
        });
        this.clipboard.copy(this.address);
        alert.present();
    };
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"/home/rinat/ionic/ether-wallet/src/pages/details/details.html"*/'<!--\n  Generated template for the DetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n          <ion-note item-start>\n            Address {{numberOfAccaunt}}:\n          </ion-note>\n          {{address}}\n          <ion-note item-end>\n              <button (click)="copyAddress()"\n                      ion-button color="secondary">Copy</button>\n          </ion-note>\n        </ion-item>\n      </ion-list>\n\n  <ion-grid>\n      <ion-row justify-content-center>\n        <div *ngIf="qrCodeString">\n          <ion-img width="150"height="150"\n                  src="{{qrCodeString}}">\n          </ion-img>\n        </div>\n      </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/rinat/ionic/ether-wallet/src/pages/details/details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_clipboard__["a" /* Clipboard */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/rinat/ionic/ether-wallet/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/rinat/ionic/ether-wallet/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(366);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pages_imports_pages_imports__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_auth_auth__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_details_details__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_send_send__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_local_storage__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__global__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_storage__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_clipboard__ = __webpack_require__(341);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_pages_imports_pages_imports__["a" /* PagesImportsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_auth_auth__["a" /* AuthPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_send_send__["a" /* SendPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/pages-imports/pages-imports.module#PagesImportsPageModule', name: 'PagesImportsPage', segment: 'pages-imports', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15__ionic_storage__["a" /* IonicStorageModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__global__["b" /* storageConfig */])
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_pages_imports_pages_imports__["a" /* PagesImportsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_auth_auth__["a" /* AuthPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_send_send__["a" /* SendPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__service_local_storage__["a" /* Repository */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_clipboard__["a" /* Clipboard */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 453:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 455:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 496:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 499:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wallet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web3__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_web3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ethereumjs_tx__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ethereumjs_tx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ethereumjs_tx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_web3_utils__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_web3_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_web3_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_web3_eth_accounts__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_web3_eth_accounts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_web3_eth_accounts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(602);





var provider = new __WEBPACK_IMPORTED_MODULE_0_web3___default.a.providers.HttpProvider(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* config */].PROVIDER);
var web3 = new __WEBPACK_IMPORTED_MODULE_0_web3___default.a(provider);
var accounts = new __WEBPACK_IMPORTED_MODULE_3_web3_eth_accounts___default.a(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* config */].PROVIDER);
var Wallet = /** @class */ (function () {
    function Wallet() {
        var _this = this;
        this._web3 = web3;
        this.version = this._web3.version;
        this.utils = __WEBPACK_IMPORTED_MODULE_2_web3_utils___default.a;
        this.eth = this._web3.eth;
        this.accounts = accounts;
        this.net = new Promise(function (resolve, reject) {
            /**
             * @property: get network.
             */
            switch (_this._web3.version.network) {
                case '1': resolve('main');
                case '3': resolve('ropsten');
                case '42': resolve('kovan');
                case '4': resolve('rinkeby');
                default: reject('none provider');
            }
        });
        this.getBlockNumber = new Promise(function (resolve, reject) {
            _this._web3.eth.getBlockNumber(function (err, block) {
                if (err) {
                    return reject(err);
                }
                if (block) {
                    return resolve(+block);
                }
            });
        });
    }
    Wallet.prototype.walletAddWeb3 = function (privateKey) {
        return this._web3.eth.accounts.wallet.add(privateKey);
    };
    Wallet.prototype.createTenWallets = function (entropy) {
        return this._web3.eth.accounts.wallet.create(5, entropy);
    };
    Wallet.prototype.sendTransaction = function (data, privateKey) {
        var _this = this;
        /**
         * @param {data}: Data object for Transaction.
         * @param {privateKey}: PrivateKey for accaunt.
         */
        var privateKeyBufer = new Buffer(privateKey.slice(2), 'hex');
        var tx = new __WEBPACK_IMPORTED_MODULE_1_ethereumjs_tx___default.a(data);
        tx.sign(privateKeyBufer);
        var serializedTx = tx.serialize();
        var txInHex = "0x" + serializedTx.toString('hex');
        return new Promise(function (resolve, reject) {
            _this.eth.sendRawTransaction(txInHex, function (err, hash) {
                if (err) {
                    return reject(err);
                }
                if (hash) {
                    return resolve(hash);
                }
            });
        });
    };
    return Wallet;
}());

//# sourceMappingURL=wallet.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(5).Buffer))

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = {
    PROVIDER: 'https://ropsten.infura.io/v3/d9877ecb6cf349baa97ca282de1f2ed4'
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_auth_auth__ = __webpack_require__(331);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { MenuPage } from '../pages/menu/menu';

var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_auth_auth__["a" /* AuthPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/rinat/ionic/ether-wallet/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"/home/rinat/ionic/ether-wallet/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return storageConfig; });
var data = {
    activeAddress: 0
};
var storageConfig = {
    name: '__mydb',
    driverOrder: ['indexeddb', 'sqlite', 'websql']
};
//# sourceMappingURL=global.js.map

/***/ })

},[343]);
//# sourceMappingURL=main.js.map