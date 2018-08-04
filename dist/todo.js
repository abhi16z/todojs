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

/***/ "./todo/framework.js":
/*!***************************!*\
  !*** ./todo/framework.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _util = __webpack_require__(/*! ./util */ \"./todo/util.js\");\n\nvar _util2 = _interopRequireDefault(_util);\n\nvar _store = __webpack_require__(/*! ./store */ \"./todo/store.js\");\n\nvar _store2 = _interopRequireDefault(_store);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Framework = function () {\n    function Framework(initialState, state, prevState) {\n        _classCallCheck(this, Framework);\n\n        this.initialState = initialState;\n        this.state = state;\n        this.state.tasks = [].concat(_toConsumableArray(initialState.tasks));\n        this.prevState = prevState;\n    }\n\n    _createClass(Framework, [{\n        key: 'saveData',\n        value: function saveData() {\n            console.log('save data');\n            _store2.default.setTodoStoredData(this.state);\n        }\n    }, {\n        key: 'getTasks',\n        value: function getTasks() {\n            return this.state.tasks;\n        }\n    }, {\n        key: 'setStoreStates',\n        value: function setStoreStates(source, targetName) {\n            var sourceCopy = _util2.default.shallowCopy(source);\n            sourceCopy.tasks = [].concat(_toConsumableArray(source.tasks));\n            sourceCopy.tasks.forEach(function (task, index) {\n                sourceCopy.tasks[index] = _util2.default.shallowCopy(task);\n            });\n\n            targetName === 'state' ? this.state = sourceCopy : this.prevState = sourceCopy;\n        }\n    }, {\n        key: 'addTask',\n        value: function addTask(desc) {\n            var task = {\n                id: this.state.tasks.length + 'itemContainer',\n                description: desc,\n                time: new Date(),\n                isCompleted: false\n            };\n            this.setStoreStates(this.state, 'prevState');\n            this.state.tasks.push(task);\n        }\n    }, {\n        key: 'onReset',\n        value: function onReset() {\n            this.setStoreStates(this.state, 'prevState');\n            this.setStoreStates(this.initialState, 'state');\n        }\n    }, {\n        key: 'onUndo',\n        value: function onUndo() {\n            this.setStoreStates(this.prevState, 'state');\n        }\n    }, {\n        key: 'onCompleteTask',\n        value: function onCompleteTask(tasksToBeCompleted) {\n            this.setStoreStates(this.state, 'prevState');\n            this.state.tasks = this.state.tasks.map(function (task) {\n                tasksToBeCompleted.indexOf(task.id) > -1 ? task.isCompleted = true : void 0;\n                return task;\n            });\n        }\n    }, {\n        key: 'onRemoveTask',\n        value: function onRemoveTask(tasksToBeRemoved) {\n            this.setStoreStates(this.state, 'prevState');\n            this.state.tasks = this.state.tasks.filter(function (task) {\n                return tasksToBeRemoved.indexOf(task.id) === -1;\n            });\n        }\n    }]);\n\n    return Framework;\n}();\n\nvar initialState = _store2.default.getTodoStoredData() || { maxTasks: 10, numberOfTasks: 0, tasks: [] };\nvar state = _util2.default.shallowCopy(initialState);\nvar prevState = _util2.default.shallowCopy(initialState);\nvar framework = new Framework(initialState, state, prevState);\n\nexports.default = framework;\n\n//# sourceURL=webpack:///./todo/framework.js?");

/***/ }),

/***/ "./todo/store.js":
/*!***********************!*\
  !*** ./todo/store.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Store = function () {\n    function Store() {\n        _classCallCheck(this, Store);\n    }\n\n    _createClass(Store, null, [{\n        key: 'getTodoStoredData',\n        value: function getTodoStoredData() {\n            return JSON.parse(localStorage.getItem('todoStoredDataInitialState'));\n        }\n    }, {\n        key: 'setTodoStoredData',\n        value: function setTodoStoredData(state) {\n            localStorage.setItem('todoStoredDataInitialState', JSON.stringify(state));\n        }\n    }]);\n\n    return Store;\n}();\n\nexports.default = Store;\n\n//# sourceURL=webpack:///./todo/store.js?");

/***/ }),

/***/ "./todo/todo.js":
/*!**********************!*\
  !*** ./todo/todo.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _util = __webpack_require__(/*! ./util */ \"./todo/util.js\");\n\nvar _util2 = _interopRequireDefault(_util);\n\nvar _framework = __webpack_require__(/*! ./framework */ \"./todo/framework.js\");\n\nvar _framework2 = _interopRequireDefault(_framework);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar addTaskElement = document.getElementById('addItemTextbox');\nvar errorBlock = document.getElementById('errorBlock');\nvar renderTargetElement = document.getElementById('displayRenderedItems');\nvar addItemBlock = document.getElementById('addItems');\nvar displayTotalNumberOfTasksBlock = document.getElementById('displayTotalNumberOfTasks');\n\nvar Todo = function () {\n    function Todo(viewState) {\n        _classCallCheck(this, Todo);\n\n        this.state = { hasNewTaskError: false };\n        this.selectedElementIds = [];\n    }\n\n    _createClass(Todo, [{\n        key: 'onTextBlur',\n        value: function onTextBlur() {\n            this.state.hasNewTaskError = _util2.default.taskDescriptionValidator(addTaskElement.value) ? false : true;\n\n            if (this.state.hasNewTaskError) {\n                errorBlock.style.display = 'block';\n            } else {\n                errorBlock.style.display = 'none';\n            }\n        }\n    }, {\n        key: 'onAddTask',\n        value: function onAddTask() {\n            if (!this.state.hasNewTaskError && addTaskElement.value) {\n                _framework2.default.addTask(addTaskElement.value);\n                addTaskElement.value = ''; //input element will become empty\n                this.renderItems();\n            } else {\n                errorBlock.style.display = 'block';\n            }\n        }\n    }, {\n        key: 'onReset',\n        value: function onReset() {\n            _framework2.default.onReset();\n            this.renderItems();\n        }\n    }, {\n        key: 'onUndo',\n        value: function onUndo() {\n            _framework2.default.onUndo();\n            this.renderItems();\n        }\n    }, {\n        key: 'onCheckboxSelect',\n        value: function onCheckboxSelect() {\n            var id = event.target.parentElement.parentElement.id;\n\n            if (event.target.checked) {\n                this.selectedElementIds.push(id);\n            } else {\n                this.selectedElementIds = this.selectedElementIds.filter(function (elementId) {\n                    return elementId !== id;\n                });\n            }\n        }\n    }, {\n        key: 'onRemoveTask',\n        value: function onRemoveTask() {\n            arguments.length ? _framework2.default.onRemoveTask(this.selectedElementIds) : _framework2.default.onRemoveTask([event.target.parentElement.parentElement.id]);\n            this.selectedElementIds = [];\n            this.renderItems();\n        }\n    }, {\n        key: 'onCompleteTask',\n        value: function onCompleteTask() {\n            arguments.length ? _framework2.default.onCompleteTask(this.selectedElementIds) : _framework2.default.onCompleteTask([event.target.parentElement.id]);\n            this.selectedElementIds = [];\n            this.renderItems();\n        }\n    }, {\n        key: 'onSortByDate',\n        value: function onSortByDate() {\n            if (this.isViewDescending) {\n                this.taskArray.sort(function (task1, task2) {\n                    return task1.time - task2.time;\n                });\n                this.isViewDescending = false;\n            } else {\n                this.taskArray.sort(function (task1, task2) {\n                    return task2.time - task1.time;\n                });\n                this.isViewDescending = true;\n            }\n            this.renderItems();\n        }\n    }, {\n        key: 'onSearch',\n        value: function onSearch() {\n            if (!this.taskArray) {\n                return;\n            }\n            var listForSearch = this.taskArray.filter(function (task) {\n                var desc = task.description.toString();\n                return desc.indexOf(event.target.value) > -1;\n            });\n\n            this.renderItems(listForSearch);\n        }\n    }, {\n        key: 'renderItems',\n        value: function renderItems(listForSearch) {\n            _framework2.default.saveData();\n            this.taskArray = _framework2.default.getTasks();\n            renderTargetElement.innerHTML = '';\n\n            if (listForSearch) {\n                listForSearch.forEach(function (task) {\n                    var taskElement = _util2.default.createItemElement(task);\n                    renderTargetElement.appendChild(taskElement);\n                });\n            } else {\n                this.taskArray.forEach(function (task) {\n                    var taskElement = _util2.default.createItemElement(task);\n                    renderTargetElement.appendChild(taskElement);\n                });\n            }\n            displayTotalNumberOfTasksBlock.innerHTML = 'Total number of tasks: ' + this.taskArray.length;\n            addItemBlock.style.display = this.taskArray.length === 10 ? 'none' : 'block';\n            this.selectedElementIds = [];\n        }\n    }]);\n\n    return Todo;\n}();\n\nwindow.app = new Todo();\n\n(function () {\n    window.app.renderItems();\n})();\n\n//# sourceURL=webpack:///./todo/todo.js?");

/***/ }),

/***/ "./todo/util.js":
/*!**********************!*\
  !*** ./todo/util.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar util = function () {\n    function util() {\n        _classCallCheck(this, util);\n    }\n\n    _createClass(util, [{\n        key: 'copy',\n        value: function copy(target) {\n            for (var i = 1; i < arguments.length; i++) {\n                var source = arguments[i];\n                for (var key in source) {\n                    if (Object.prototype.hasOwnProperty.call(source, key)) {\n                        target[key] = source[key];\n                    }\n                }\n            }\n            return target;\n        }\n    }], [{\n        key: 'createItemElement',\n        value: function createItemElement(task) {\n            var itemContainer = document.createElement('div');\n            itemContainer.setAttribute('class', 'itemContainer');\n            itemContainer.setAttribute('id', task.id);\n\n            if (task.isCompleted) {\n                itemContainer.style.opacity = 0.2;\n                itemContainer.style.textDecoration = 'line-through';\n            }\n\n            itemContainer.innerHTML = '\\n        <div class=\\'checkboxContainer\\'>\\n            <input type=\\'checkbox\\' onclick=\\'app.onCheckboxSelect()\\'>\\n          </div>\\n\\n          <div class=\\'itemDescription\\' onclick=\\'app.onCompleteTask()\\'>\\n             ' + task.description + '\\n          </div>\\n\\n          <div class=\\'displayButtonContainer\\'>\\n            <button class=\\'deleteButton\\' onclick=\\'app.onRemoveTask()\\'> X </button>\\n          </div>\\n\\n        ';\n            return itemContainer;\n        }\n    }, {\n        key: 'taskDescriptionValidator',\n        value: function taskDescriptionValidator(input) {\n            var length = input.replace(/ /g, '').length;\n            if (length > 0 && length <= 120) return true;\n            return false;\n        }\n    }, {\n        key: 'shallowCopy',\n        value: function shallowCopy(source) {\n            var shallowCopied = Object.assign || this.copy;\n\n            return shallowCopied({}, source);\n        }\n    }]);\n\n    return util;\n}();\n\n/*\r\n\r\nstatic createItemElement(item){\r\n        let itemContainer=document.createElement('div');\r\n        itemContainer.setAttribute('class', 'itemContainer');\r\n\r\n        let checkboxContainer=document.createElement('div');\r\n        let checkBoxEl= document.createElement('input');\r\n        checkBoxEl.setAttribute('type', 'checkbox');\r\n        checkboxContainer.appendChild(checkBoxEl);\r\n\r\n        let itemDescription=document.createElement('div');\r\n        let description = document.createTextNode(item.description);\r\n        itemDescription.appendChild(description);\r\n\r\n        let displayButtonContainer=document.createElement('div');\r\n\r\n        let deleteButton=document.createElement('button');\r\n        deleteButton.setAttribute('class','deleteButton');\r\n        let deleteText = document.createTextNode('X');\r\n        deleteButton.appendChild(deleteText);\r\n\r\n        let completeButton=document.createElement('button');\r\n        completeButton.setAttribute('class','completeButton');\r\n        completeButton.innerHTML='&#10004;';\r\n\r\n        displayButtonContainer.appendChild(deleteButton);\r\n        displayButtonContainer.appendChild(completeButton);\r\n\r\n        itemContainer.appendChild(checkboxContainer);\r\n        itemContainer.appendChild(itemDescription);\r\n        itemContainer.appendChild(displayButtonContainer);\r\n\r\n        return itemContainer;\r\n\r\n    }\r\n\r\n\r\n     itemContainer.innerHTML=\r\n        `\r\n        <div class='checkboxContainer'>\r\n            <input type='checkbox' onclick='app.onCheckboxSelect()'>\r\n          </div>\r\n\r\n          <div class='itemDescription'>\r\n             ${description}\r\n          </div>\r\n\r\n          <div class='displayButtonContainer'>\r\n            <button class='deleteButton' onclick='app.onRemoveItem()'> X </button>\r\n            <button class='completeButton'> &#10004;</button>\r\n          </div>\r\n\r\n        `\r\n\r\n\r\n    */\n\n\nexports.default = util;\n\n//# sourceURL=webpack:///./todo/util.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./todo/todo.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./todo/todo.js */\"./todo/todo.js\");\n\n\n//# sourceURL=webpack:///multi_./todo/todo.js?");

/***/ })

/******/ });