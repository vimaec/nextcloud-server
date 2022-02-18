/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/files/src/files-app-settings.js":
/*!**********************************************!*\
  !*** ./apps/files/src/files-app-settings.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _services_Settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/Settings */ "./apps/files/src/services/Settings.js");
/* harmony import */ var _views_Settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/Settings */ "./apps/files/src/views/Settings.vue");
/* harmony import */ var _models_Setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/Setting */ "./apps/files/src/models/Setting.js");
/**
 * @copyright Copyright (c) 2019 Gary Kim <gary@garykim.dev>
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author Gary Kim <gary@garykim.dev>
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */




vue__WEBPACK_IMPORTED_MODULE_3__["default"].prototype.t = t; // Init Files App Settings Service

if (!window.OCA.Files) {
  window.OCA.Files = {};
}

Object.assign(window.OCA.Files, {
  Settings: new _services_Settings__WEBPACK_IMPORTED_MODULE_0__["default"]()
});
Object.assign(window.OCA.Files.Settings, {
  Setting: _models_Setting__WEBPACK_IMPORTED_MODULE_2__["default"]
});
window.addEventListener('DOMContentLoaded', function () {
  if (window.TESTING) {
    return;
  } // Init Vue app
  // eslint-disable-next-line


  new vue__WEBPACK_IMPORTED_MODULE_3__["default"]({
    el: '#files-app-settings',
    render: function render(h) {
      return h(_views_Settings__WEBPACK_IMPORTED_MODULE_1__["default"]);
    }
  });
  var appSettingsHeader = document.getElementById('app-settings-header');

  if (appSettingsHeader) {
    appSettingsHeader.addEventListener('click', function (e) {
      var opened = e.currentTarget.children[0].classList.contains('opened');
      OCA.Files.Settings.settings.forEach(function (e) {
        return opened ? e.close() : e.open();
      });
    });
  }
});

/***/ }),

/***/ "./apps/files/src/legacy/filelistSearch.js":
/*!*************************************************!*\
  !*** ./apps/files/src/legacy/filelistSearch.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.js");
/*
 * @copyright Copyright (c) 2021 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */


(function () {
  var FilesPlugin = {
    attach: function attach(fileList) {
      var _this = this;

      (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__.subscribe)('nextcloud:unified-search.search', function (_ref) {
        var query = _ref.query;
        fileList.setFilter(query);
      });
      (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__.subscribe)('nextcloud:unified-search.reset', function () {
        _this.query = null;
        fileList.setFilter('');
      });
    }
  };
  window.OC.Plugins.register('OCA.Files.FileList', FilesPlugin);
})();

/***/ }),

/***/ "./apps/files/src/main.js":
/*!********************************!*\
  !*** ./apps/files/src/main.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _files_app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./files-app-settings */ "./apps/files/src/files-app-settings.js");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates */ "./apps/files/src/templates.js");
/* harmony import */ var _legacy_filelistSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./legacy/filelistSearch */ "./apps/files/src/legacy/filelistSearch.js");




/***/ }),

/***/ "./apps/files/src/models/Setting.js":
/*!******************************************!*\
  !*** ./apps/files/src/models/Setting.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Setting; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @copyright Copyright (c) 2019 Gary Kim <gary@garykim.dev>
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author Gary Kim <gary@garykim.dev>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
var Setting = /*#__PURE__*/function () {
  /**
   * Create a new files app setting
   *
   * @since 19.0.0
   * @param {string} name the name of this setting
   * @param {object} component the component
   * @param {Function} component.el function that returns an unmounted dom element to be added
   * @param {Function} [component.open] callback for when setting is added
   * @param {Function} [component.close] callback for when setting is closed
   */
  function Setting(name, _ref) {
    var el = _ref.el,
        open = _ref.open,
        close = _ref.close;

    _classCallCheck(this, Setting);

    _defineProperty(this, "_close", void 0);

    _defineProperty(this, "_el", void 0);

    _defineProperty(this, "_name", void 0);

    _defineProperty(this, "_open", void 0);

    this._name = name;
    this._el = el;
    this._open = open;
    this._close = close;

    if (typeof this._open !== 'function') {
      this._open = function () {};
    }

    if (typeof this._close !== 'function') {
      this._close = function () {};
    }
  }

  _createClass(Setting, [{
    key: "name",
    get: function get() {
      return this._name;
    }
  }, {
    key: "el",
    get: function get() {
      return this._el;
    }
  }, {
    key: "open",
    get: function get() {
      return this._open;
    }
  }, {
    key: "close",
    get: function get() {
      return this._close;
    }
  }]);

  return Setting;
}();



/***/ }),

/***/ "./apps/files/src/services/Settings.js":
/*!*********************************************!*\
  !*** ./apps/files/src/services/Settings.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Settings; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @copyright Copyright (c) 2019 Gary Kim <gary@garykim.dev>
 *
 * @author Gary Kim <gary@garykim.dev>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
var Settings = /*#__PURE__*/function () {
  function Settings() {
    _classCallCheck(this, Settings);

    _defineProperty(this, "_settings", void 0);

    this._settings = [];
    console.debug('OCA.Files.Settings initialized');
  }
  /**
   * Register a new setting
   *
   * @since 19.0.0
   * @param {OCA.Files.Settings.Setting} view element to add to settings
   * @return {boolean} whether registering was successful
   */


  _createClass(Settings, [{
    key: "register",
    value: function register(view) {
      if (this._settings.filter(function (e) {
        return e.name === view.name;
      }).length > 0) {
        console.error('A setting with the same name is already registered');
        return false;
      }

      this._settings.push(view);

      return true;
    }
    /**
     * All settings elements
     *
     * @return {OCA.Files.Settings.Setting[]} All currently registered settings
     */

  }, {
    key: "settings",
    get: function get() {
      return this._settings;
    }
  }]);

  return Settings;
}();



/***/ }),

/***/ "./apps/files/src/services/Templates.js":
/*!**********************************************!*\
  !*** ./apps/files/src/services/Templates.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTemplates": function() { return /* binding */ getTemplates; },
/* harmony export */   "createFromTemplate": function() { return /* binding */ createFromTemplate; }
/* harmony export */ });
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * @copyright Copyright (c) 2021 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */


var getTemplates = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateOcsUrl)('apps/files/api/v1/templates'));

          case 2:
            response = _context.sent;
            return _context.abrupt("return", response.data.ocs.data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getTemplates() {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Create a new file from a specified template
 *
 * @param {string} filePath The new file destination path
 * @param {string} templatePath The template source path
 * @param {string} templateType The template type e.g 'user'
 */

var createFromTemplate = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(filePath, templatePath, templateType) {
    var response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateOcsUrl)('apps/files/api/v1/templates/create'), {
              filePath: filePath,
              templatePath: templatePath,
              templateType: templateType
            });

          case 2:
            response = _context2.sent;
            return _context2.abrupt("return", response.data.ocs.data);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function createFromTemplate(_x, _x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./apps/files/src/templates.js":
/*!*************************************!*\
  !*** ./apps/files/src/templates.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextcloud_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/logger */ "./node_modules/@nextcloud/logger/dist/index.js");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.js");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _utils_davUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/davUtils */ "./apps/files/src/utils/davUtils.js");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _views_TemplatePicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/TemplatePicker */ "./apps/files/src/views/TemplatePicker.vue");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.es.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * @copyright Copyright (c) 2020 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */








 // Set up logger

var logger = (0,_nextcloud_logger__WEBPACK_IMPORTED_MODULE_0__.getLoggerBuilder)().setApp('files').detectUser().build(); // Add translates functions

vue__WEBPACK_IMPORTED_MODULE_8__["default"].mixin({
  methods: {
    t: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate,
    n: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translatePlural
  }
}); // Create document root

var TemplatePickerRoot = document.createElement('div');
TemplatePickerRoot.id = 'template-picker';
document.body.appendChild(TemplatePickerRoot); // Retrieve and init templates

var templates = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__.loadState)('files', 'templates', []);
var templatesPath = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__.loadState)('files', 'templates_path', false);
logger.debug('Templates providers', templates);
logger.debug('Templates folder', {
  templatesPath: templatesPath
}); // Init vue app

var View = vue__WEBPACK_IMPORTED_MODULE_8__["default"].extend(_views_TemplatePicker__WEBPACK_IMPORTED_MODULE_6__["default"]);
var TemplatePicker = new View({
  name: 'TemplatePicker',
  propsData: {
    logger: logger
  }
});
TemplatePicker.$mount('#template-picker'); // Init template engine after load to make sure it's the last injected entry

window.addEventListener('DOMContentLoaded', function () {
  if (!templatesPath) {
    logger.debug('Templates folder not initialized');
    var initTemplatesPlugin = {
      attach: function attach(menu) {
        // register the new menu entry
        menu.addMenuEntry({
          id: 'template-init',
          displayName: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('files', 'Set up templates folder'),
          templateName: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('files', 'Templates'),
          iconClass: 'icon-template-add',
          fileType: 'file',
          actionHandler: function actionHandler(name) {
            initTemplatesFolder(name);
            menu.removeMenuEntry('template-init');
          }
        });
      }
    };
    OC.Plugins.register('OCA.Files.NewFileMenu', initTemplatesPlugin);
  }
}); // Init template files menu

templates.forEach(function (provider, index) {
  var newTemplatePlugin = {
    attach: function attach(menu) {
      var fileList = menu.fileList; // only attach to main file list, public view is not supported yet

      if (fileList.id !== 'files' && fileList.id !== 'files.public') {
        return;
      } // register the new menu entry


      menu.addMenuEntry({
        id: "template-new-".concat(provider.app, "-").concat(index),
        displayName: provider.label,
        templateName: provider.label + provider.extension,
        iconClass: provider.iconClass || 'icon-file',
        fileType: 'file',
        actionHandler: function actionHandler(name) {
          TemplatePicker.open(name, provider);
        }
      });
    }
  };
  OC.Plugins.register('OCA.Files.NewFileMenu', newTemplatePlugin);
});
/**
 * Init the template directory
 *
 * @param {string} name the templates folder name
 */

var initTemplatesFolder = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(name) {
    var templatePath, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            templatePath = ((0,_utils_davUtils__WEBPACK_IMPORTED_MODULE_4__.getCurrentDirectory)() + "/".concat(name)).replace('//', '/');
            _context.prev = 1;
            logger.debug('Initializing the templates directory', {
              templatePath: templatePath
            });
            _context.next = 5;
            return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_5__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_3__.generateOcsUrl)('apps/files/api/v1/templates/path'), {
              templatePath: templatePath,
              copySystemTemplates: true
            });

          case 5:
            response = _context.sent;
            // Go to template directory
            OCA.Files.App.currentFileList.changeDirectory(templatePath, true, true);
            templates = response.data.ocs.data.templates;
            templatesPath = response.data.ocs.data.template_path;
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            logger.error('Unable to initialize the templates directory');
            (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_7__.showError)((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('files', 'Unable to initialize the templates directory'));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 11]]);
  }));

  return function initTemplatesFolder(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./apps/files/src/utils/davUtils.js":
/*!******************************************!*\
  !*** ./apps/files/src/utils/davUtils.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRootPath": function() { return /* binding */ getRootPath; },
/* harmony export */   "isPublic": function() { return /* binding */ isPublic; },
/* harmony export */   "getToken": function() { return /* binding */ getToken; },
/* harmony export */   "getCurrentDirectory": function() { return /* binding */ getCurrentDirectory; }
/* harmony export */ });
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.js");
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */


var getRootPath = function getRootPath() {
  if ((0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__.getCurrentUser)()) {
    return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateRemoteUrl)("dav/files/".concat((0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__.getCurrentUser)().uid));
  } else {
    return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateRemoteUrl)('webdav').replace('/remote.php', '/public.php');
  }
};
var isPublic = function isPublic() {
  return !(0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__.getCurrentUser)();
};
var getToken = function getToken() {
  return document.getElementById('sharingToken') && document.getElementById('sharingToken').value;
};
/**
 * Return the current directory, fallback to root
 *
 * @return {string}
 */

var getCurrentDirectory = function getCurrentDirectory() {
  var _OCA, _OCA$Files, _OCA$Files$App, _OCA$Files$App$curren;

  var currentDirInfo = ((_OCA = OCA) === null || _OCA === void 0 ? void 0 : (_OCA$Files = _OCA.Files) === null || _OCA$Files === void 0 ? void 0 : (_OCA$Files$App = _OCA$Files.App) === null || _OCA$Files$App === void 0 ? void 0 : (_OCA$Files$App$curren = _OCA$Files$App.currentFileList) === null || _OCA$Files$App$curren === void 0 ? void 0 : _OCA$Files$App$curren.dirInfo) || {
    path: '/',
    name: ''
  }; // Make sure we don't have double slashes

  return "".concat(currentDirInfo.path, "/").concat(currentDirInfo.name).replace(/\/\//gi, '/');
};

/***/ }),

/***/ "./apps/files/src/utils/fileUtils.js":
/*!*******************************************!*\
  !*** ./apps/files/src/utils/fileUtils.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "encodeFilePath": function() { return /* binding */ encodeFilePath; },
/* harmony export */   "extractFilePaths": function() { return /* binding */ extractFilePaths; }
/* harmony export */ });
/**
 * @copyright Copyright (c) 2021 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
var encodeFilePath = function encodeFilePath(path) {
  var pathSections = (path.startsWith('/') ? path : "/".concat(path)).split('/');
  var relativePath = '';
  pathSections.forEach(function (section) {
    if (section !== '') {
      relativePath += '/' + encodeURIComponent(section);
    }
  });
  return relativePath;
};
/**
 * Extract dir and name from file path
 *
 * @param {string} path the full path
 * @return {string[]} [dirPath, fileName]
 */


var extractFilePaths = function extractFilePaths(path) {
  var pathSections = path.split('/');
  var fileName = pathSections[pathSections.length - 1];
  var dirPath = pathSections.slice(0, pathSections.length - 1).join('/');
  return [dirPath, fileName];
};



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/Setting.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/Setting.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Setting',
  props: {
    el: {
      type: Function,
      required: true
    }
  },
  mounted: function mounted() {
    this.$el.appendChild(this.el());
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/TemplatePreview.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/TemplatePreview.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _utils_fileUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/fileUtils */ "./apps/files/src/utils/fileUtils.js");
/* harmony import */ var _utils_davUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/davUtils */ "./apps/files/src/utils/davUtils.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 // preview width generation

var previewWidth = 256;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TemplatePreview',
  inheritAttrs: false,
  props: {
    basename: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      default: false
    },
    fileid: {
      type: [String, Number],
      required: true
    },
    filename: {
      type: String,
      required: true
    },
    previewUrl: {
      type: String,
      default: null
    },
    hasPreview: {
      type: Boolean,
      default: true
    },
    mime: {
      type: String,
      required: true
    },
    ratio: {
      type: Number,
      default: null
    }
  },
  data: function data() {
    return {
      failedPreview: false
    };
  },
  computed: {
    /**
     * Strip away extension from name
     *
     * @return {string}
     */
    nameWithoutExt: function nameWithoutExt() {
      return this.basename.indexOf('.') > -1 ? this.basename.split('.').slice(0, -1).join('.') : this.basename;
    },
    id: function id() {
      return "template-picker-".concat(this.fileid);
    },
    realPreviewUrl: function realPreviewUrl() {
      // If original preview failed, fallback to mime icon
      if (this.failedPreview && this.mimeIcon) {
        return this.mimeIcon;
      }

      if (this.previewUrl) {
        return this.previewUrl;
      } // TODO: find a nicer standard way of doing this?


      if ((0,_utils_davUtils__WEBPACK_IMPORTED_MODULE_2__.isPublic)()) {
        return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)("/apps/files_sharing/publicpreview/".concat((0,_utils_davUtils__WEBPACK_IMPORTED_MODULE_2__.getToken)(), "?fileId=").concat(this.fileid, "&file=").concat((0,_utils_fileUtils__WEBPACK_IMPORTED_MODULE_1__.encodeFilePath)(this.filename), "&x=").concat(previewWidth, "&y=").concat(previewWidth, "&a=1"));
      }

      return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)("/core/preview?fileId=".concat(this.fileid, "&x=").concat(previewWidth, "&y=").concat(previewWidth, "&a=1"));
    },
    mimeIcon: function mimeIcon() {
      return OC.MimeType.getIconUrl(this.mime);
    }
  },
  methods: {
    onCheck: function onCheck() {
      this.$emit('check', this.fileid);
    },
    onFailure: function onFailure() {
      this.failedPreview = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/Settings.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/Settings.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Setting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Setting */ "./apps/files/src/components/Setting.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Settings',
  components: {
    Setting: _components_Setting__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      settings: OCA.Files.Settings.settings
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/TemplatePicker.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/TemplatePicker.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "./node_modules/path/path.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.es.js");
/* harmony import */ var _nextcloud_vue_dist_Components_EmptyContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/EmptyContent */ "./node_modules/@nextcloud/vue/dist/Components/EmptyContent.js");
/* harmony import */ var _nextcloud_vue_dist_Components_EmptyContent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_EmptyContent__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nextcloud_vue_dist_Components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/Modal */ "./node_modules/@nextcloud/vue/dist/Components/Modal.js");
/* harmony import */ var _nextcloud_vue_dist_Components_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_davUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/davUtils */ "./apps/files/src/utils/davUtils.js");
/* harmony import */ var _services_Templates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/Templates */ "./apps/files/src/services/Templates.js");
/* harmony import */ var _components_TemplatePreview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TemplatePreview */ "./apps/files/src/components/TemplatePreview.vue");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







var border = 2;
var margin = 8;
var width = margin * 20;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TemplatePicker',
  components: {
    EmptyContent: (_nextcloud_vue_dist_Components_EmptyContent__WEBPACK_IMPORTED_MODULE_2___default()),
    Modal: (_nextcloud_vue_dist_Components_Modal__WEBPACK_IMPORTED_MODULE_3___default()),
    TemplatePreview: _components_TemplatePreview__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    logger: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      // Check empty template by default
      checked: -1,
      loading: false,
      name: null,
      opened: false,
      provider: null
    };
  },
  computed: {
    /**
     * Strip away extension from name
     *
     * @return {string}
     */
    nameWithoutExt: function nameWithoutExt() {
      return this.name.indexOf('.') > -1 ? this.name.split('.').slice(0, -1).join('.') : this.name;
    },
    emptyTemplate: function emptyTemplate() {
      var _this$provider, _this$provider2;

      return {
        basename: t('files', 'Blank'),
        fileid: -1,
        filename: this.t('files', 'Blank'),
        hasPreview: false,
        mime: ((_this$provider = this.provider) === null || _this$provider === void 0 ? void 0 : _this$provider.mimetypes[0]) || ((_this$provider2 = this.provider) === null || _this$provider2 === void 0 ? void 0 : _this$provider2.mimetypes)
      };
    },
    selectedTemplate: function selectedTemplate() {
      var _this = this;

      return this.provider.templates.find(function (template) {
        return template.fileid === _this.checked;
      });
    },

    /**
     * Style css vars bin,d
     *
     * @return {object}
     */
    style: function style() {
      return {
        '--margin': margin + 'px',
        '--width': width + 'px',
        '--border': border + 'px',
        '--fullwidth': width + 2 * margin + 2 * border + 'px',
        '--height': this.provider.ratio ? Math.round(width / this.provider.ratio) + 'px' : null
      };
    }
  },
  methods: {
    /**
     * Open the picker
     *
     * @param {string} name the file name to create
     * @param {object} provider the template provider picked
     */
    open: function open(name, provider) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var templates, fetchedProvider;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.checked = _this2.emptyTemplate.fileid;
                _this2.name = name;
                _this2.provider = provider;
                _context.next = 5;
                return (0,_services_Templates__WEBPACK_IMPORTED_MODULE_5__.getTemplates)();

              case 5:
                templates = _context.sent;
                fetchedProvider = templates.find(function (fetchedProvider) {
                  return fetchedProvider.app === provider.app && fetchedProvider.label === provider.label;
                });

                if (!(fetchedProvider === null)) {
                  _context.next = 9;
                  break;
                }

                throw new Error('Failed to match provider in results');

              case 9:
                _this2.provider = fetchedProvider; // If there is no templates available, just create an empty file

                if (!(fetchedProvider.templates.length === 0)) {
                  _context.next = 13;
                  break;
                }

                _this2.onSubmit();

                return _context.abrupt("return");

              case 13:
                // Else, open the picker
                _this2.opened = true;

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },

    /**
     * Close the picker and reset variables
     */
    close: function close() {
      this.checked = this.emptyTemplate.fileid;
      this.loading = false;
      this.name = null;
      this.opened = false;
      this.provider = null;
    },

    /**
     * Manages the radio template picker change
     *
     * @param {number} fileid the selected template file id
     */
    onCheck: function onCheck(fileid) {
      this.checked = fileid;
    },
    onSubmit: function onSubmit() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _OCA, _OCA$Files, _OCA$Files$App;

        var currentDirectory, fileList, _this3$provider, _this3$provider2, _this3$selectedTempla, _this3$selectedTempla2, fileInfo, data, model, fileAction;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this3.loading = true;
                currentDirectory = (0,_utils_davUtils__WEBPACK_IMPORTED_MODULE_4__.getCurrentDirectory)();
                fileList = (_OCA = OCA) === null || _OCA === void 0 ? void 0 : (_OCA$Files = _OCA.Files) === null || _OCA$Files === void 0 ? void 0 : (_OCA$Files$App = _OCA$Files.App) === null || _OCA$Files$App === void 0 ? void 0 : _OCA$Files$App.currentFileList; // If the file doesn't have an extension, add the default one

                if (_this3.nameWithoutExt === _this3.name) {
                  _this3.logger.debug('Fixed invalid filename', {
                    name: _this3.name,
                    extension: (_this3$provider = _this3.provider) === null || _this3$provider === void 0 ? void 0 : _this3$provider.extension
                  });

                  _this3.name = _this3.name + ((_this3$provider2 = _this3.provider) === null || _this3$provider2 === void 0 ? void 0 : _this3$provider2.extension);
                }

                _context2.prev = 4;
                _context2.next = 7;
                return (0,_services_Templates__WEBPACK_IMPORTED_MODULE_5__.createFromTemplate)((0,path__WEBPACK_IMPORTED_MODULE_0__.normalize)("".concat(currentDirectory, "/").concat(_this3.name)), (_this3$selectedTempla = _this3.selectedTemplate) === null || _this3$selectedTempla === void 0 ? void 0 : _this3$selectedTempla.filename, (_this3$selectedTempla2 = _this3.selectedTemplate) === null || _this3$selectedTempla2 === void 0 ? void 0 : _this3$selectedTempla2.templateType);

              case 7:
                fileInfo = _context2.sent;

                _this3.logger.debug('Created new file', fileInfo);

                _context2.next = 11;
                return fileList === null || fileList === void 0 ? void 0 : fileList.addAndFetchFileInfo(_this3.name).then(function (status, data) {
                  return data;
                });

              case 11:
                data = _context2.sent;
                model = new OCA.Files.FileInfoModel(data, {
                  filesClient: fileList === null || fileList === void 0 ? void 0 : fileList.filesClient
                }); // Run default action

                fileAction = OCA.Files.fileActions.getDefaultFileAction(fileInfo.mime, 'file', OC.PERMISSION_ALL);
                fileAction.action(fileInfo.basename, {
                  $file: fileList === null || fileList === void 0 ? void 0 : fileList.findFileEl(_this3.name),
                  dir: currentDirectory,
                  fileList: fileList,
                  fileActions: fileList === null || fileList === void 0 ? void 0 : fileList.fileActions,
                  fileInfoModel: model
                });

                _this3.close();

                _context2.next = 23;
                break;

              case 18:
                _context2.prev = 18;
                _context2.t0 = _context2["catch"](4);

                _this3.logger.error('Error while creating the new file from template');

                console.error(_context2.t0);
                (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showError)(_this3.t('files', 'Unable to create new file from template'));

              case 23:
                _context2.prev = 23;
                _this3.loading = false;
                return _context2.finish(23);

              case 26:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[4, 18, 23, 26]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/TemplatePreview.vue?vue&type=style&index=0&id=14e703d7&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/TemplatePreview.vue?vue&type=style&index=0&id=14e703d7&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".template-picker__item[data-v-14e703d7] {\n  display: flex;\n}\n.template-picker__label[data-v-14e703d7] {\n  display: flex;\n  align-items: center;\n  flex: 1 1;\n  flex-direction: column;\n}\n.template-picker__label[data-v-14e703d7], .template-picker__label *[data-v-14e703d7] {\n  cursor: pointer;\n  user-select: none;\n}\n.template-picker__label[data-v-14e703d7]::before {\n  display: none !important;\n}\n.template-picker__preview[data-v-14e703d7] {\n  display: block;\n  overflow: hidden;\n  flex: 1 1;\n  width: var(--width);\n  min-height: var(--height);\n  max-height: var(--height);\n  padding: 0;\n  border: var(--border) solid var(--color-border);\n  border-radius: var(--border-radius-large);\n}\ninput:checked + label > .template-picker__preview[data-v-14e703d7] {\n  border-color: var(--color-primary);\n}\n.template-picker__preview--failed[data-v-14e703d7] {\n  display: flex;\n}\n.template-picker__image[data-v-14e703d7] {\n  max-width: 100%;\n  background-color: var(--color-main-background);\n  object-fit: cover;\n}\n.template-picker__preview--failed .template-picker__image[data-v-14e703d7] {\n  width: calc(var(--margin) * 8);\n  margin: auto;\n  background-color: transparent !important;\n  object-fit: initial;\n}\n.template-picker__title[data-v-14e703d7] {\n  overflow: hidden;\n  max-width: calc(var(--width) + 4px);\n  padding: var(--margin);\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/TemplatePicker.vue?vue&type=style&index=0&id=70b9a7ea&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/TemplatePicker.vue?vue&type=style&index=0&id=70b9a7ea&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".templates-picker__form[data-v-70b9a7ea] {\n  padding: calc(var(--margin) * 2);\n  padding-bottom: 0;\n}\n.templates-picker__form h2[data-v-70b9a7ea] {\n  text-align: center;\n  font-weight: bold;\n  margin: var(--margin) 0 calc(var(--margin) * 2);\n}\n.templates-picker__list[data-v-70b9a7ea] {\n  display: grid;\n  grid-gap: calc(var(--margin) * 2);\n  grid-auto-columns: 1fr;\n  max-width: calc(var(--fullwidth) * 6);\n  grid-template-columns: repeat(auto-fit, var(--fullwidth));\n  grid-auto-rows: 1fr;\n  justify-content: center;\n}\n.templates-picker__buttons[data-v-70b9a7ea] {\n  display: flex;\n  justify-content: space-between;\n  padding: calc(var(--margin) * 2) var(--margin);\n  position: sticky;\n  bottom: 0;\n  background-image: linear-gradient(0, var(--gradient-main-background));\n}\n.templates-picker__buttons button[data-v-70b9a7ea], .templates-picker__buttons input[type=submit][data-v-70b9a7ea] {\n  height: 44px;\n}\n.templates-picker[data-v-70b9a7ea]  .modal-container {\n  position: relative;\n  overflow-y: auto !important;\n}\n.templates-picker__loading[data-v-70b9a7ea] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  background-color: var(--color-main-background-translucent);\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/TemplatePreview.vue?vue&type=style&index=0&id=14e703d7&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/TemplatePreview.vue?vue&type=style&index=0&id=14e703d7&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePreview_vue_vue_type_style_index_0_id_14e703d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TemplatePreview.vue?vue&type=style&index=0&id=14e703d7&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/TemplatePreview.vue?vue&type=style&index=0&id=14e703d7&lang=scss&scoped=true&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePreview_vue_vue_type_style_index_0_id_14e703d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePreview_vue_vue_type_style_index_0_id_14e703d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePreview_vue_vue_type_style_index_0_id_14e703d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePreview_vue_vue_type_style_index_0_id_14e703d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/TemplatePicker.vue?vue&type=style&index=0&id=70b9a7ea&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/TemplatePicker.vue?vue&type=style&index=0&id=70b9a7ea&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePicker_vue_vue_type_style_index_0_id_70b9a7ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TemplatePicker.vue?vue&type=style&index=0&id=70b9a7ea&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/TemplatePicker.vue?vue&type=style&index=0&id=70b9a7ea&lang=scss&scoped=true&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePicker_vue_vue_type_style_index_0_id_70b9a7ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePicker_vue_vue_type_style_index_0_id_70b9a7ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePicker_vue_vue_type_style_index_0_id_70b9a7ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePicker_vue_vue_type_style_index_0_id_70b9a7ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./apps/files/src/components/Setting.vue":
/*!***********************************************!*\
  !*** ./apps/files/src/components/Setting.vue ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Setting_vue_vue_type_template_id_a0773f8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Setting.vue?vue&type=template&id=a0773f8e& */ "./apps/files/src/components/Setting.vue?vue&type=template&id=a0773f8e&");
/* harmony import */ var _Setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Setting.vue?vue&type=script&lang=js& */ "./apps/files/src/components/Setting.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Setting_vue_vue_type_template_id_a0773f8e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Setting_vue_vue_type_template_id_a0773f8e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/files/src/components/Setting.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./apps/files/src/components/TemplatePreview.vue":
/*!*******************************************************!*\
  !*** ./apps/files/src/components/TemplatePreview.vue ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TemplatePreview_vue_vue_type_template_id_14e703d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TemplatePreview.vue?vue&type=template&id=14e703d7&scoped=true& */ "./apps/files/src/components/TemplatePreview.vue?vue&type=template&id=14e703d7&scoped=true&");
/* harmony import */ var _TemplatePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TemplatePreview.vue?vue&type=script&lang=js& */ "./apps/files/src/components/TemplatePreview.vue?vue&type=script&lang=js&");
/* harmony import */ var _TemplatePreview_vue_vue_type_style_index_0_id_14e703d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TemplatePreview.vue?vue&type=style&index=0&id=14e703d7&lang=scss&scoped=true& */ "./apps/files/src/components/TemplatePreview.vue?vue&type=style&index=0&id=14e703d7&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TemplatePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TemplatePreview_vue_vue_type_template_id_14e703d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _TemplatePreview_vue_vue_type_template_id_14e703d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "14e703d7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/files/src/components/TemplatePreview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./apps/files/src/views/Settings.vue":
/*!*******************************************!*\
  !*** ./apps/files/src/views/Settings.vue ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Settings_vue_vue_type_template_id_de32ad74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=de32ad74&scoped=true& */ "./apps/files/src/views/Settings.vue?vue&type=template&id=de32ad74&scoped=true&");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js& */ "./apps/files/src/views/Settings.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Settings_vue_vue_type_template_id_de32ad74_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Settings_vue_vue_type_template_id_de32ad74_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "de32ad74",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/files/src/views/Settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./apps/files/src/views/TemplatePicker.vue":
/*!*************************************************!*\
  !*** ./apps/files/src/views/TemplatePicker.vue ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TemplatePicker_vue_vue_type_template_id_70b9a7ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TemplatePicker.vue?vue&type=template&id=70b9a7ea&scoped=true& */ "./apps/files/src/views/TemplatePicker.vue?vue&type=template&id=70b9a7ea&scoped=true&");
/* harmony import */ var _TemplatePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TemplatePicker.vue?vue&type=script&lang=js& */ "./apps/files/src/views/TemplatePicker.vue?vue&type=script&lang=js&");
/* harmony import */ var _TemplatePicker_vue_vue_type_style_index_0_id_70b9a7ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TemplatePicker.vue?vue&type=style&index=0&id=70b9a7ea&lang=scss&scoped=true& */ "./apps/files/src/views/TemplatePicker.vue?vue&type=style&index=0&id=70b9a7ea&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TemplatePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TemplatePicker_vue_vue_type_template_id_70b9a7ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _TemplatePicker_vue_vue_type_template_id_70b9a7ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "70b9a7ea",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/files/src/views/TemplatePicker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./apps/files/src/components/Setting.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./apps/files/src/components/Setting.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Setting.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/Setting.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files/src/components/TemplatePreview.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./apps/files/src/components/TemplatePreview.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TemplatePreview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/TemplatePreview.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files/src/views/Settings.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./apps/files/src/views/Settings.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/Settings.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files/src/views/TemplatePicker.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./apps/files/src/views/TemplatePicker.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TemplatePicker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/TemplatePicker.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files/src/components/TemplatePreview.vue?vue&type=style&index=0&id=14e703d7&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./apps/files/src/components/TemplatePreview.vue?vue&type=style&index=0&id=14e703d7&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePreview_vue_vue_type_style_index_0_id_14e703d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TemplatePreview.vue?vue&type=style&index=0&id=14e703d7&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/TemplatePreview.vue?vue&type=style&index=0&id=14e703d7&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/files/src/views/TemplatePicker.vue?vue&type=style&index=0&id=70b9a7ea&lang=scss&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./apps/files/src/views/TemplatePicker.vue?vue&type=style&index=0&id=70b9a7ea&lang=scss&scoped=true& ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePicker_vue_vue_type_style_index_0_id_70b9a7ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TemplatePicker.vue?vue&type=style&index=0&id=70b9a7ea&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/TemplatePicker.vue?vue&type=style&index=0&id=70b9a7ea&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/files/src/components/Setting.vue?vue&type=template&id=a0773f8e&":
/*!******************************************************************************!*\
  !*** ./apps/files/src/components/Setting.vue?vue&type=template&id=a0773f8e& ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Setting_vue_vue_type_template_id_a0773f8e___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Setting_vue_vue_type_template_id_a0773f8e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Setting_vue_vue_type_template_id_a0773f8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Setting.vue?vue&type=template&id=a0773f8e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/Setting.vue?vue&type=template&id=a0773f8e&");


/***/ }),

/***/ "./apps/files/src/components/TemplatePreview.vue?vue&type=template&id=14e703d7&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./apps/files/src/components/TemplatePreview.vue?vue&type=template&id=14e703d7&scoped=true& ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePreview_vue_vue_type_template_id_14e703d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePreview_vue_vue_type_template_id_14e703d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePreview_vue_vue_type_template_id_14e703d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TemplatePreview.vue?vue&type=template&id=14e703d7&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/TemplatePreview.vue?vue&type=template&id=14e703d7&scoped=true&");


/***/ }),

/***/ "./apps/files/src/views/Settings.vue?vue&type=template&id=de32ad74&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./apps/files/src/views/Settings.vue?vue&type=template&id=de32ad74&scoped=true& ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_de32ad74_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_de32ad74_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_de32ad74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Settings.vue?vue&type=template&id=de32ad74&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/Settings.vue?vue&type=template&id=de32ad74&scoped=true&");


/***/ }),

/***/ "./apps/files/src/views/TemplatePicker.vue?vue&type=template&id=70b9a7ea&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./apps/files/src/views/TemplatePicker.vue?vue&type=template&id=70b9a7ea&scoped=true& ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePicker_vue_vue_type_template_id_70b9a7ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePicker_vue_vue_type_template_id_70b9a7ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePicker_vue_vue_type_template_id_70b9a7ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TemplatePicker.vue?vue&type=template&id=70b9a7ea&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/TemplatePicker.vue?vue&type=template&id=70b9a7ea&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/Setting.vue?vue&type=template&id=a0773f8e&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/Setting.vue?vue&type=template&id=a0773f8e& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/TemplatePreview.vue?vue&type=template&id=14e703d7&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/TemplatePreview.vue?vue&type=template&id=14e703d7&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("li", { staticClass: "template-picker__item" }, [
    _c("input", {
      staticClass: "radio",
      attrs: { id: _vm.id, type: "radio", name: "template-picker" },
      domProps: { checked: _vm.checked },
      on: { change: _vm.onCheck },
    }),
    _vm._v(" "),
    _c(
      "label",
      { staticClass: "template-picker__label", attrs: { for: _vm.id } },
      [
        _c(
          "div",
          {
            staticClass: "template-picker__preview",
            class: _vm.failedPreview ? "template-picker__preview--failed" : "",
          },
          [
            _c("img", {
              staticClass: "template-picker__image",
              attrs: { src: _vm.realPreviewUrl, alt: "", draggable: "false" },
              on: { error: _vm.onFailure },
            }),
          ]
        ),
        _vm._v(" "),
        _c("span", { staticClass: "template-picker__title" }, [
          _vm._v("\n\t\t\t" + _vm._s(_vm.nameWithoutExt) + "\n\t\t"),
        ]),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/Settings.vue?vue&type=template&id=de32ad74&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/Settings.vue?vue&type=template&id=de32ad74&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "files-app-extra-settings" } },
    [
      _vm._l(_vm.settings, function (setting) {
        return [_c("Setting", { key: setting.name, attrs: { el: setting.el } })]
      }),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/TemplatePicker.vue?vue&type=template&id=70b9a7ea&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/TemplatePicker.vue?vue&type=template&id=70b9a7ea&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.opened
    ? _c(
        "Modal",
        {
          staticClass: "templates-picker",
          attrs: { "clear-view-delay": -1, size: "large" },
          on: { close: _vm.close },
        },
        [
          _c(
            "form",
            {
              staticClass: "templates-picker__form",
              style: _vm.style,
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  $event.stopPropagation()
                  return _vm.onSubmit.apply(null, arguments)
                },
              },
            },
            [
              _c("h2", [
                _vm._v(
                  _vm._s(
                    _vm.t("files", "Pick a template for {name}", {
                      name: _vm.nameWithoutExt,
                    })
                  )
                ),
              ]),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "templates-picker__list" },
                [
                  _c(
                    "TemplatePreview",
                    _vm._b(
                      {
                        attrs: {
                          checked: _vm.checked === _vm.emptyTemplate.fileid,
                        },
                        on: { check: _vm.onCheck },
                      },
                      "TemplatePreview",
                      _vm.emptyTemplate,
                      false
                    )
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.provider.templates, function (template) {
                    return _c(
                      "TemplatePreview",
                      _vm._b(
                        {
                          key: template.fileid,
                          attrs: {
                            checked: _vm.checked === template.fileid,
                            ratio: _vm.provider.ratio,
                          },
                          on: { check: _vm.onCheck },
                        },
                        "TemplatePreview",
                        template,
                        false
                      )
                    )
                  }),
                ],
                2
              ),
              _vm._v(" "),
              _c("div", { staticClass: "templates-picker__buttons" }, [
                _c("button", { on: { click: _vm.close } }, [
                  _vm._v(
                    "\n\t\t\t\t" + _vm._s(_vm.t("files", "Cancel")) + "\n\t\t\t"
                  ),
                ]),
                _vm._v(" "),
                _c("input", {
                  staticClass: "primary",
                  attrs: {
                    type: "submit",
                    "aria-label": _vm.t(
                      "files",
                      "Create a new file with the selected template"
                    ),
                  },
                  domProps: { value: _vm.t("files", "Create") },
                }),
              ]),
            ]
          ),
          _vm._v(" "),
          _vm.loading
            ? _c(
                "EmptyContent",
                {
                  staticClass: "templates-picker__loading",
                  attrs: { icon: "icon-loading" },
                },
                [
                  _vm._v(
                    "\n\t\t" + _vm._s(_vm.t("files", "Creating file")) + "\n\t"
                  ),
                ]
              )
            : _vm._e(),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd define */
/******/ 	!function() {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/amd options */
/******/ 	!function() {
/******/ 		__webpack_require__.amdO = {};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"files-main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunknextcloud"] = self["webpackChunknextcloud"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], function() { return __webpack_require__("./apps/files/src/main.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=files-main.js.map?v=50b5eb6adf64654272cf