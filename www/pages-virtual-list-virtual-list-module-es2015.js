(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-virtual-list-virtual-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/virtual-list/virtual-list.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/virtual-list/virtual-list.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Listado Imagenes\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Listado Imagenes</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id=\"container\">\n    <ion-list>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"4\">\n            <ion-searchbar \n              [(ngModel)]=\"searchId\" \n              placeholder=\"ID\" \n              inputmode=\"numeric\" \n              type=\"number\" \n              animated ></ion-searchbar>\n          </ion-col>\n          <ion-col size=\"8\">\n            <ion-searchbar [(ngModel)]=\"searchText\" placeholder=\"Texto\" animated></ion-searchbar>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-item>\n        <ion-label>Cargar Todos los Datos</ion-label>\n        <ion-checkbox color=\"primary\" checked slot=\"start\" [(ngModel)]=\"blAll\" (ionChange)=\"ngCheckOnChange()\"></ion-checkbox>\n      </ion-item>\n      <ion-virtual-scroll [items]=\"dataList | filterData: searchId: searchText\">\n        <ion-item *virtualItem=\"let item\">\n          <app-data-details [dataModel]=\"item\"></app-data-details>\n        </ion-item>\n      </ion-virtual-scroll>\n    </ion-list>\n    \n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/data-details/data-details.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/data-details/data-details.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item *ngIf=\"dataModel != null\">\n  <ion-thumbnail slot=\"start\">\n    <img [src]='dataModel.photo'>\n  </ion-thumbnail>\n  <ion-label>{{dataModel.text}}</ion-label>\n</ion-item>\n<ion-item *ngIf=\"dataModel == null\">\n  <ion-thumbnail slot=\"start\">\n    <img src='https://www.freeiconspng.com/uploads/error-icon-28.png'>\n  </ion-thumbnail>\n  <ion-label>ERROR CARGANDO CONTENIDO</ion-label>\n</ion-item>\n");

/***/ }),

/***/ "./src/app/core/config/const/const.ts":
/*!********************************************!*\
  !*** ./src/app/core/config/const/const.ts ***!
  \********************************************/
/*! exports provided: Const */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Const", function() { return Const; });
class Const {
}
Const.maxElement = 4000;
Const.page = 1;
Const.count = 20;


/***/ }),

/***/ "./src/app/core/models/itemPhoto/Item.photo.model.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/models/itemPhoto/Item.photo.model.ts ***!
  \***********************************************************/
/*! exports provided: ItemPhoto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemPhoto", function() { return ItemPhoto; });
class ItemPhoto {
    constructor(id, text) {
        this.id = id;
        this.photo = 'https://picsum.photos/id/' + id + '/500/500.jpg';
        this.text = text;
    }
}


/***/ }),

/***/ "./src/app/core/services/photoList/api/photo.list.api.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/core/services/photoList/api/photo.list.api.service.ts ***!
  \***********************************************************************/
/*! exports provided: PhotoListApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoListApiService", function() { return PhotoListApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_models_itemPhoto_Item_photo_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/models/itemPhoto/Item.photo.model */ "./src/app/core/models/itemPhoto/Item.photo.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_core_config_const_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/config/const/const */ "./src/app/core/config/const/const.ts");





let PhotoListApiService = class PhotoListApiService {
    constructor() { }
    get(page, count) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.generateWithPagination(page, count));
    }
    getAll() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.generateAll());
    }
    generateWithPagination(page, count) {
        let resp = new Array();
        let max; // Máximo de elementos en la página
        let index;
        // Valores por defecto, se pueden parametrizar
        page = (page === null || page < 1) ? src_app_core_config_const_const__WEBPACK_IMPORTED_MODULE_4__["Const"].page : page;
        count = (count === null || count < 1) ? src_app_core_config_const_const__WEBPACK_IMPORTED_MODULE_4__["Const"].count : count;
        // Inicializamos el indice de posicionamiento del array
        index = (page - 1) * count;
        // Comprobamos que no sobrepasamos el número de elementos máximos que se pueden mostrar en total
        max = ((page * count) > src_app_core_config_const_const__WEBPACK_IMPORTED_MODULE_4__["Const"].maxElement) ? max = src_app_core_config_const_const__WEBPACK_IMPORTED_MODULE_4__["Const"].maxElement : (page * count);
        for (index; index < max; index++) {
            let value;
            value = new src_app_core_models_itemPhoto_Item_photo_model__WEBPACK_IMPORTED_MODULE_2__["ItemPhoto"](index, this.generateTextRamdom(index));
            resp.push(value);
        }
        return resp;
    }
    generateAll() {
        let resp = new Array();
        for (let index = 0; index < src_app_core_config_const_const__WEBPACK_IMPORTED_MODULE_4__["Const"].maxElement; index++) {
            let value;
            value = new src_app_core_models_itemPhoto_Item_photo_model__WEBPACK_IMPORTED_MODULE_2__["ItemPhoto"](index, this.generateTextRamdom(index));
            resp.push(value);
        }
        return resp;
    }
    generateTextRamdom(index) {
        let str;
        switch (index % 10) {
            case 0:
                str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
                break;
            case 1:
                str = 'Quisque in leo placerat, mollis enim ut, pharetra risus.';
                break;
            case 2:
                str = 'Praesent elementum massa sed enim maximus, pulvinar luctus nisi sodales.';
                break;
            case 3:
                str = 'Vivamus vulputate odio ac blandit mollis.';
                break;
            case 4:
                str = 'Aliquam maximus turpis et elit scelerisque pretium.';
                break;
            case 5:
                str = 'Phasellus sit amet erat dapibus, porttitor nisl eget, sodales lectus.';
                break;
            case 6:
                str = 'Aliquam sollicitudin metus vel imperdiet sollicitudin.';
                break;
            case 7:
                str = 'Nullam sodales nisl et leo dapibus, et posuere velit aliquam.';
                break;
            case 8:
                str = 'Vestibulum bibendum eros in sem condimentum, vitae efficitur nulla lobortis.';
                break;
            case 9:
                str = 'Nulla id lorem pretium, auctor quam pellentesque, porttitor sapien.';
                break;
            default:
                str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
                break;
        }
        return str;
    }
};
PhotoListApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PhotoListApiService);



/***/ }),

/***/ "./src/app/pages/virtual-list/virtual-list-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/virtual-list/virtual-list-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: VirtualListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualListPageRoutingModule", function() { return VirtualListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _virtual_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./virtual-list.page */ "./src/app/pages/virtual-list/virtual-list.page.ts");




const routes = [
    {
        path: '',
        component: _virtual_list_page__WEBPACK_IMPORTED_MODULE_3__["VirtualListPage"]
    }
];
let VirtualListPageRoutingModule = class VirtualListPageRoutingModule {
};
VirtualListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VirtualListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/virtual-list/virtual-list.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/virtual-list/virtual-list.module.ts ***!
  \***********************************************************/
/*! exports provided: VirtualListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualListPageModule", function() { return VirtualListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _virtual_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./virtual-list-routing.module */ "./src/app/pages/virtual-list/virtual-list-routing.module.ts");
/* harmony import */ var _virtual_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./virtual-list.page */ "./src/app/pages/virtual-list/virtual-list.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");








let VirtualListPageModule = class VirtualListPageModule {
};
VirtualListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _virtual_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["VirtualListPageRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_virtual_list_page__WEBPACK_IMPORTED_MODULE_6__["VirtualListPage"]]
    })
], VirtualListPageModule);



/***/ }),

/***/ "./src/app/pages/virtual-list/virtual-list.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/virtual-list/virtual-list.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu-button {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlydHVhbC1saXN0L0M6XFxVc2Vyc1xcMzQ2MDBcXERlc2t0b3BcXFBydWViYVRlY25pY2FcXHRlc3RfYXBwL3NyY1xcYXBwXFxwYWdlc1xcdmlydHVhbC1saXN0XFx2aXJ0dWFsLWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy92aXJ0dWFsLWxpc3QvdmlydHVhbC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy92aXJ0dWFsLWxpc3QvdmlydHVhbC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuICAiLCJpb24tbWVudS1idXR0b24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/virtual-list/virtual-list.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/virtual-list/virtual-list.page.ts ***!
  \*********************************************************/
/*! exports provided: VirtualListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualListPage", function() { return VirtualListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_core_services_photoList_api_photo_list_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/photoList/api/photo.list.api.service */ "./src/app/core/services/photoList/api/photo.list.api.service.ts");
/* harmony import */ var src_app_core_config_const_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/config/const/const */ "./src/app/core/config/const/const.ts");





let VirtualListPage = class VirtualListPage {
    constructor(service) {
        this.service = service;
        // Variable para almacenar los elementos a mostrar por pantalla
        this.dataList = new Array();
        // Variable para controlar si traemos todos los datos
        this.blAll = false;
        // Control de la pagina en la que nos encontramos cuando NO cargamos todos los datos
        this.currentPage = 1;
        // Control de elementos cargados por pagina. Sería facilmente parametrizable
        this.currentCount = 20;
    }
    ngOnInit() {
        // Inicializamos los elementos que se mostraran al comienzo
        this.service.get(this.currentPage, this.currentCount).subscribe((values) => {
            values.forEach((value) => {
                this.dataList.push(value);
            });
        });
    }
    // Funcion que carga los elementos de la lista por paginación controlando el scroll de la pagina
    loadData(event) {
        this.currentPage++;
        this.service.get(this.currentPage, this.currentCount).subscribe((values) => {
            values.forEach((value) => {
                this.dataList.push(value);
            });
            // Ocultar loading de lista infinita al completar
            event.target.complete();
            //Volver a mostrar la lista de Virtual Scroll después de agregar nuevos datos
            this.virtualScroll.checkEnd();
            // Lógica de la aplicación para determinar si todos los datos están cargados
            // y deshabilitar el desplazamiento infinito
            if (this.dataList.length === src_app_core_config_const_const__WEBPACK_IMPORTED_MODULE_4__["Const"].maxElement) {
                event.target.disabled = true;
            }
        });
    }
    // Método que se lanza al cambiar el valos de blAll.
    // Según su valor carga el contenido de todos los elementos o carga los elementos según paginación
    ngCheckOnChange() {
        if (this.blAll) {
            this.dataList = [];
            this.service.getAll().subscribe((values) => {
                values.forEach((value) => {
                    this.dataList.push(value);
                });
                this.toggleInfiniteScroll();
            });
        }
        else {
            this.dataList = [];
            this.currentPage = src_app_core_config_const_const__WEBPACK_IMPORTED_MODULE_4__["Const"].page;
            this.currentCount = src_app_core_config_const_const__WEBPACK_IMPORTED_MODULE_4__["Const"].count;
            this.service.get(this.currentPage, this.currentCount).subscribe((values) => {
                values.forEach((value) => {
                    this.dataList.push(value);
                });
                this.toggleInfiniteScroll();
            });
        }
    }
    toggleInfiniteScroll() {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }
};
VirtualListPage.ctorParameters = () => [
    { type: src_app_core_services_photoList_api_photo_list_api_service__WEBPACK_IMPORTED_MODULE_3__["PhotoListApiService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
], VirtualListPage.prototype, "infiniteScroll", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonVirtualScroll"])
], VirtualListPage.prototype, "virtualScroll", void 0);
VirtualListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-virtual-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./virtual-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/virtual-list/virtual-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./virtual-list.page.scss */ "./src/app/pages/virtual-list/virtual-list.page.scss")).default]
    })
], VirtualListPage);



/***/ }),

/***/ "./src/app/shared/components/data-details/data-details.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/data-details/data-details.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RhdGEtZGV0YWlscy9kYXRhLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/components/data-details/data-details.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/data-details/data-details.component.ts ***!
  \**************************************************************************/
/*! exports provided: DataDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataDetailsComponent", function() { return DataDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DataDetailsComponent = class DataDetailsComponent {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataDetailsComponent.prototype, "dataModel", void 0);
DataDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-data-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./data-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/data-details/data-details.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./data-details.component.scss */ "./src/app/shared/components/data-details/data-details.component.scss")).default]
    })
], DataDetailsComponent);



/***/ }),

/***/ "./src/app/shared/pipes/filter/filter.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/filter/filter.pipe.ts ***!
  \****************************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FilterPipe = class FilterPipe {
    transform(listData, searchId, searchText) {
        let auxList;
        if (!searchText && !searchId) {
            return listData;
        }
        else {
            if (searchId) {
                let parseNumber = Number.parseInt(searchId);
                auxList = listData.filter((value) => {
                    return value.id == parseNumber;
                });
            }
            else {
                auxList = [...listData];
            }
            if (searchText) {
                auxList = auxList.filter((value) => {
                    return value.text.includes(searchText);
                });
            }
        }
        return auxList;
    }
};
FilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterData'
    })
], FilterPipe);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_data_details_data_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/data-details/data-details.component */ "./src/app/shared/components/data-details/data-details.component.ts");
/* harmony import */ var _pipes_filter_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/filter/filter.pipe */ "./src/app/shared/pipes/filter/filter.pipe.ts");





let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_data_details_data_details_component__WEBPACK_IMPORTED_MODULE_3__["DataDetailsComponent"],
            _pipes_filter_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _components_data_details_data_details_component__WEBPACK_IMPORTED_MODULE_3__["DataDetailsComponent"],
            _pipes_filter_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"]
        ]
    })
], SharedModule);



/***/ })

}]);
//# sourceMappingURL=pages-virtual-list-virtual-list-module-es2015.js.map