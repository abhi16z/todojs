/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/controller.js":
/*!***************************!*\
  !*** ./app/controller.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./app/model.js\");\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ \"./app/item.js\");\n\n\n\nclass TodoController {\n    constructor(initialState) {\n        this.state = initialState;\n        this.initialState = initialState;\n        this.prevState = {};\n    }\n\n    addItem(desc) {\n        let item = {\n            id: this.state.items.length + 'itemContainer',\n            description: desc,\n            time: new Date(),\n            isCompleted: false\n        };\n        let itemObj = new _item__WEBPACK_IMPORTED_MODULE_1__[\"default\"](item);\n        this.state.items.push(itemObj);\n    }\n\n    onReset() {\n        //-----------\n        console.log('entering onReset');\n        this.state = this.initialState;\n        this.renderItems();\n    }\n\n    onUndo() {\n        //------------\n        console.log('entering onUndo');\n        this.state = this.previousState;\n        this.renderItems();\n    }\n\n    onRemoveItem() {}\n\n}\n\nlet c = new TodoController(_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initialState);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (c);\n\n//# sourceURL=webpack:///./app/controller.js?");

/***/ }),

/***/ "./app/item.js":
/*!*********************!*\
  !*** ./app/item.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Item; });\nclass Item {\n    constructor(item) {\n        this.description = item.description;\n        this.dateCreatimeCreatedted = item.time;\n        this.isCompleted = item.isCompleted;\n        this.id = item.id;\n    }\n\n    onCompleteTask(indexes) {\n        console.log('entering onCompleteTask');\n    }\n}\n\n//# sourceURL=webpack:///./app/item.js?");

/***/ }),

/***/ "./app/model.js":
/*!**********************!*\
  !*** ./app/model.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Model {\n    constructor(initialState) {\n        this.initialState = initialState;\n    }\n\n    storeApplicationData(data) {\n        data = JSON.stringify(data);\n        localStorage.setItem('todoApplicationData', data);\n    }\n}\n\nlet initialState = localStorage.getItem('todoApplicationData');\n\ninitialState = initialState ? JSON.parse(initialState) : {\n    maxItems: 10,\n    numberOfItems: 0,\n    items: [],\n    hasInputTextError: false\n};\nlet m = new Model(initialState);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (m);\n\n//# sourceURL=webpack:///./app/model.js?");

/***/ }),

/***/ "./app/todo.js":
/*!*********************!*\
  !*** ./app/todo.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validator */ \"./app/validator.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./app/util.js\");\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller */ \"./app/controller.js\");\n\n\n\n\nclass Todo {\n    constructor(viewState) {\n        this.state = viewState;\n    }\n\n    onTextBlur() {\n        this.item = document.getElementById('addItemTextbox'); //so that DOM traversing is reduced\n        this.state.hasInputTextError = _validator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].taskInputValidator(this.item.value) ? false : true;\n\n        if (this.state.hasInputTextError) {\n            document.getElementsByClassName('error')[0].style.display = 'block';\n        } else {\n            document.getElementsByClassName('error')[0].style.display = 'none';\n        }\n    }\n\n    onAddItem() {\n        if (!this.state.hasInputTextError && this.item.value) {\n            _controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addItem(this.item.value);\n            let htmlElement = _util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createItemElement(this.item.value, _controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.items.length - 1 + 'itemContainer');\n            this.state.itemElements.push(htmlElement);\n            this.item.value = '';\n        } else {\n            document.getElementsByClassName('error')[0].style.display = 'block';\n        }\n\n        this.state.itemElements.length ? this.toggleFreshView() : void 0;\n        this.renderItems();\n    }\n\n    onReset() {\n        //-----------\n        _controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].onReset();\n        this.renderItems();\n    }\n\n    onUndo() {\n        //------------\n        _controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].onUndo();\n        this.renderItems();\n    }\n\n    onCheckboxSelect() {\n        let id = event.target.parentElement.parentElement.getAttribute('id');\n\n        if (event.target.checked) {\n            this.state.selectedElementsIds.push(id);\n        } else {\n            this.state.selectedElementsIds = this.state.selectedElementsIds.filter(elementId => {\n                return elementId !== id;\n            });\n        }\n        console.log(this.state.selectedElementsIds);\n    }\n\n    onRemoveItem() {\n        this.state.itemElements = this.state.itemElements.filter(element => {\n            return this.state.selectedElementsIds.indexOf(element.getAttribute('id')) === -1;\n        });\n\n        !this.state.itemElements.length ? this.toggleFreshView() : void 0;\n        this.renderItems();\n    }\n\n    onCompleteTask() {\n        this.state.itemElements = this.state.itemElements.map(element => {\n            if (this.state.selectedElementsIds.indexOf(element.getAttribute('id')) > -1) {\n                let index = this.state.selectedElementsIds.indexOf(element.getAttribute('id'));\n                this.state.selectedElementsIds.splice(index, 1);\n                element.style.opacity = 0.2;\n                element.children[0].children[0].checked = false;\n                element.children[1].style.textDecoration = 'line-through';\n                // element.children[2].style.display='none';\n            }\n\n            return element;\n        });\n    }\n\n    toggleFreshView() {\n        let defaultHiddenElements = document.getElementsByClassName('defaultHidden');\n\n        for (let i = 0; i < defaultHiddenElements.length; i++) {\n            let classNames = defaultHiddenElements[i].getAttribute('class');\n            classNames = this.state.itemElements.length ? classNames.replace('defaultHidden', 'unHide') : classNames.replace('unHide', 'defaultHidden');\n            defaultHiddenElements[i].setAttribute('class', classNames);\n        }\n    }\n\n    onSortByDate() {\n        //---------\n        console.log('entering onSortByDate');\n    }\n\n    onSearch() {\n        //-----------\n        this.searchValue = event.target.value;\n        this.listForSearch = this.state.itemElements.filter(element => {\n            let desc = element.children[1].innerHTML.toString();\n            return desc.indexOf(event.target.value) > -1;\n        });\n\n        this.renderItems();\n    }\n\n    renderItems(list) {\n        let target = document.getElementById('displayRenderedItems');\n        target.innerHTML = '';\n\n        if (this.searchValue) {\n            this.listForSearch.forEach(element => {\n                target.appendChild(element);\n            });\n        } else {\n            this.state.itemElements.forEach(element => {\n                target.appendChild(element);\n            });\n        }\n\n        document.getElementById('addItems').style.display = this.state.itemElements.length === 10 ? 'none' : 'block';\n    }\n\n}\n\nlet initialViewState = {\n    hasInputTextError: false,\n    itemElements: [],\n    selectedElementsIds: []\n};\n\nwindow.app = new Todo(initialViewState);\n\n//# sourceURL=webpack:///./app/todo.js?");

/***/ }),

/***/ "./app/util.js":
/*!*********************!*\
  !*** ./app/util.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return util; });\nclass util {\n\n        static createItemElement(description, id) {\n                let itemContainer = document.createElement('div');\n                itemContainer.setAttribute('class', 'itemContainer');\n                itemContainer.setAttribute('id', id);\n\n                itemContainer.innerHTML = `\n        <div class='checkboxContainer'>\n            <input type='checkbox' onclick='app.onCheckboxSelect()'>\n          </div>\n\n          <div class='itemDescription'>\n             ${description}\n          </div>\n\n        `;\n                return itemContainer;\n        }\n}\n\n/*\r\n\r\nstatic createItemElement(item){\r\n        let itemContainer=document.createElement('div');\r\n        itemContainer.setAttribute('class', 'itemContainer');\r\n\r\n        let checkboxContainer=document.createElement('div');\r\n        let checkBoxEl= document.createElement('input');\r\n        checkBoxEl.setAttribute('type', 'checkbox');\r\n        checkboxContainer.appendChild(checkBoxEl);\r\n\r\n        let itemDescription=document.createElement('div');\r\n        let description = document.createTextNode(item.description);\r\n        itemDescription.appendChild(description);\r\n\r\n        let displayButtonContainer=document.createElement('div');\r\n\r\n        let deleteButton=document.createElement('button');\r\n        deleteButton.setAttribute('class','deleteButton');\r\n        let deleteText = document.createTextNode('X');\r\n        deleteButton.appendChild(deleteText);\r\n\r\n        let completeButton=document.createElement('button');\r\n        completeButton.setAttribute('class','completeButton');\r\n        completeButton.innerHTML='&#10004;';\r\n\r\n        displayButtonContainer.appendChild(deleteButton);\r\n        displayButtonContainer.appendChild(completeButton);\r\n\r\n        itemContainer.appendChild(checkboxContainer);\r\n        itemContainer.appendChild(itemDescription);\r\n        itemContainer.appendChild(displayButtonContainer);\r\n\r\n        return itemContainer;\r\n\r\n    }\r\n\r\n\r\n     itemContainer.innerHTML=\r\n        `\r\n        <div class='checkboxContainer'>\r\n            <input type='checkbox' onclick='app.onCheckboxSelect()'>\r\n          </div>\r\n\r\n          <div class='itemDescription'>\r\n             ${description}\r\n          </div>\r\n\r\n          <div class='displayButtonContainer'>\r\n            <button class='deleteButton' onclick='app.onRemoveItem()'> X </button>\r\n            <button class='completeButton'> &#10004;</button>\r\n          </div>\r\n\r\n        `\r\n\r\n\r\n    */\n\n//# sourceURL=webpack:///./app/util.js?");

/***/ }),

/***/ "./app/validator.js":
/*!**************************!*\
  !*** ./app/validator.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Validator; });\nclass Validator {\n    static taskInputValidator(input) {\n        let length = input.replace(/ /g, '').length;\n        if (length > 0 && length <= 120) return true;\n        return false;\n    }\n}\n\n//# sourceURL=webpack:///./app/validator.js?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./app/todo.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./app/todo.js */\"./app/todo.js\");\n\n\n//# sourceURL=webpack:///multi_./app/todo.js?");

/***/ })

/******/ });