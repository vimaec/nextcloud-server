/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/dav/src/settings.js":
/*!**********************************!*\
  !*** ./apps/dav/src/settings.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.js");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.js");
/* harmony import */ var _views_CalDavSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/CalDavSettings */ "./apps/dav/src/views/CalDavSettings.vue");




vue__WEBPACK_IMPORTED_MODULE_3__["default"].prototype.$t = _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate;
var View = vue__WEBPACK_IMPORTED_MODULE_3__["default"].extend(_views_CalDavSettings__WEBPACK_IMPORTED_MODULE_2__["default"]);
var CalDavSettingsView = new View({
  name: 'CalDavSettingsView',
  data: function data() {
    return {
      sendInvitations: (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('dav', 'sendInvitations'),
      generateBirthdayCalendar: (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('dav', 'generateBirthdayCalendar'),
      sendEventReminders: (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('dav', 'sendEventReminders'),
      sendEventRemindersPush: (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('dav', 'sendEventRemindersPush')
    };
  }
});
CalDavSettingsView.$mount('#settings-admin-caldav');

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/views/CalDavSettings.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/views/CalDavSettings.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
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
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CalDavSettings',
  computed: {
    hint: function hint() {
      var translated = this.$t('dav', 'Also install the {calendarappstoreopen}Calendar app{linkclose}, or {calendardocopen}connect your desktop & mobile for syncing ↗{linkclose}.');
      return translated.replace('{calendarappstoreopen}', '<a target="_blank" href="../apps/office/calendar">').replace('{calendardocopen}', '<a target="_blank" :href="userSyncCalendarsUrl" rel="noreferrer noopener">').replace(/\{linkclose\}/g, '</a>');
    },
    sendInvitationsHelpText: function sendInvitationsHelpText() {
      var translated = this.$t('dav', 'Please make sure to properly set up {emailopen}the email server{linkclose}.');
      return translated.replace('{emailopen}', '<a href="../admin#mail_general_settings">').replace('{linkclose}', '</a>');
    },
    sendEventRemindersHelpText: function sendEventRemindersHelpText() {
      var translated = this.$t('dav', 'Please make sure to properly set up {emailopen}the email server{linkclose}.');
      return translated.replace('{emailopen}', '<a href="../admin#mail_general_settings">').replace('{linkclose}', '</a>');
    }
  },
  watch: {
    generateBirthdayCalendar: function generateBirthdayCalendar(value) {
      var baseUrl = value ? '/apps/dav/enableBirthdayCalendar' : '/apps/dav/disableBirthdayCalendar';
      _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)(baseUrl));
    },
    sendInvitations: function sendInvitations(value) {
      OCP.AppConfig.setValue('dav', 'sendInvitations', value ? 'yes' : 'no');
    },
    sendEventReminders: function sendEventReminders(value) {
      OCP.AppConfig.setValue('dav', 'sendEventReminders', value ? 'yes' : 'no');
    },
    sendEventRemindersPush: function sendEventRemindersPush(value) {
      OCP.AppConfig.setValue('dav', 'sendEventRemindersPush', value ? 'yes' : 'no');
    }
  }
});

/***/ }),

/***/ "./apps/dav/src/views/CalDavSettings.vue":
/*!***********************************************!*\
  !*** ./apps/dav/src/views/CalDavSettings.vue ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CalDavSettings_vue_vue_type_template_id_980b6d22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalDavSettings.vue?vue&type=template&id=980b6d22& */ "./apps/dav/src/views/CalDavSettings.vue?vue&type=template&id=980b6d22&");
/* harmony import */ var _CalDavSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CalDavSettings.vue?vue&type=script&lang=js& */ "./apps/dav/src/views/CalDavSettings.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CalDavSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CalDavSettings_vue_vue_type_template_id_980b6d22___WEBPACK_IMPORTED_MODULE_0__.render,
  _CalDavSettings_vue_vue_type_template_id_980b6d22___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/dav/src/views/CalDavSettings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./apps/dav/src/views/CalDavSettings.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./apps/dav/src/views/CalDavSettings.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CalDavSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CalDavSettings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/views/CalDavSettings.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CalDavSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/dav/src/views/CalDavSettings.vue?vue&type=template&id=980b6d22&":
/*!******************************************************************************!*\
  !*** ./apps/dav/src/views/CalDavSettings.vue?vue&type=template&id=980b6d22& ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CalDavSettings_vue_vue_type_template_id_980b6d22___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CalDavSettings_vue_vue_type_template_id_980b6d22___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CalDavSettings_vue_vue_type_template_id_980b6d22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CalDavSettings.vue?vue&type=template&id=980b6d22& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/views/CalDavSettings.vue?vue&type=template&id=980b6d22&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/views/CalDavSettings.vue?vue&type=template&id=980b6d22&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/views/CalDavSettings.vue?vue&type=template&id=980b6d22& ***!
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
  return _c("div", { staticClass: "section" }, [
    _c("h2", [_vm._v(_vm._s(_vm.$t("dav", "Calendar server")))]),
    _vm._v(" "),
    _c("p", {
      staticClass: "settings-hint",
      domProps: { innerHTML: _vm._s(_vm.hint) },
    }),
    _vm._v(" "),
    _c("p", [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.sendInvitations,
            expression: "sendInvitations",
          },
        ],
        staticClass: "checkbox",
        attrs: { id: "caldavSendInvitations", type: "checkbox" },
        domProps: {
          checked: Array.isArray(_vm.sendInvitations)
            ? _vm._i(_vm.sendInvitations, null) > -1
            : _vm.sendInvitations,
        },
        on: {
          change: function ($event) {
            var $$a = _vm.sendInvitations,
              $$el = $event.target,
              $$c = $$el.checked ? true : false
            if (Array.isArray($$a)) {
              var $$v = null,
                $$i = _vm._i($$a, $$v)
              if ($$el.checked) {
                $$i < 0 && (_vm.sendInvitations = $$a.concat([$$v]))
              } else {
                $$i > -1 &&
                  (_vm.sendInvitations = $$a
                    .slice(0, $$i)
                    .concat($$a.slice($$i + 1)))
              }
            } else {
              _vm.sendInvitations = $$c
            }
          },
        },
      }),
      _vm._v(" "),
      _c("label", { attrs: { for: "caldavSendInvitations" } }, [
        _vm._v(
          "\n\t\t\t" +
            _vm._s(_vm.$t("dav", "Send invitations to attendees")) +
            "\n\t\t"
        ),
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("em", {
        domProps: { innerHTML: _vm._s(_vm.sendInvitationsHelpText) },
      }),
    ]),
    _vm._v(" "),
    _c("p", [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.generateBirthdayCalendar,
            expression: "generateBirthdayCalendar",
          },
        ],
        staticClass: "checkbox",
        attrs: { id: "caldavGenerateBirthdayCalendar", type: "checkbox" },
        domProps: {
          checked: Array.isArray(_vm.generateBirthdayCalendar)
            ? _vm._i(_vm.generateBirthdayCalendar, null) > -1
            : _vm.generateBirthdayCalendar,
        },
        on: {
          change: function ($event) {
            var $$a = _vm.generateBirthdayCalendar,
              $$el = $event.target,
              $$c = $$el.checked ? true : false
            if (Array.isArray($$a)) {
              var $$v = null,
                $$i = _vm._i($$a, $$v)
              if ($$el.checked) {
                $$i < 0 && (_vm.generateBirthdayCalendar = $$a.concat([$$v]))
              } else {
                $$i > -1 &&
                  (_vm.generateBirthdayCalendar = $$a
                    .slice(0, $$i)
                    .concat($$a.slice($$i + 1)))
              }
            } else {
              _vm.generateBirthdayCalendar = $$c
            }
          },
        },
      }),
      _vm._v(" "),
      _c("label", { attrs: { for: "caldavGenerateBirthdayCalendar" } }, [
        _vm._v(
          "\n\t\t\t" +
            _vm._s(
              _vm.$t("dav", "Automatically generate a birthday calendar")
            ) +
            "\n\t\t"
        ),
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("em", [
        _vm._v(
          "\n\t\t\t" +
            _vm._s(
              _vm.$t(
                "dav",
                "Birthday calendars will be generated by a background job."
              )
            ) +
            "\n\t\t"
        ),
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("em", [
        _vm._v(
          "\n\t\t\t" +
            _vm._s(
              _vm.$t(
                "dav",
                "Hence they will not be available immediately after enabling but will show up after some time."
              )
            ) +
            "\n\t\t"
        ),
      ]),
    ]),
    _vm._v(" "),
    _c("p", [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.sendEventReminders,
            expression: "sendEventReminders",
          },
        ],
        staticClass: "checkbox",
        attrs: { id: "caldavSendEventReminders", type: "checkbox" },
        domProps: {
          checked: Array.isArray(_vm.sendEventReminders)
            ? _vm._i(_vm.sendEventReminders, null) > -1
            : _vm.sendEventReminders,
        },
        on: {
          change: function ($event) {
            var $$a = _vm.sendEventReminders,
              $$el = $event.target,
              $$c = $$el.checked ? true : false
            if (Array.isArray($$a)) {
              var $$v = null,
                $$i = _vm._i($$a, $$v)
              if ($$el.checked) {
                $$i < 0 && (_vm.sendEventReminders = $$a.concat([$$v]))
              } else {
                $$i > -1 &&
                  (_vm.sendEventReminders = $$a
                    .slice(0, $$i)
                    .concat($$a.slice($$i + 1)))
              }
            } else {
              _vm.sendEventReminders = $$c
            }
          },
        },
      }),
      _vm._v(" "),
      _c("label", { attrs: { for: "caldavSendEventReminders" } }, [
        _vm._v(
          "\n\t\t\t" +
            _vm._s(_vm.$t("dav", "Send notifications for events")) +
            "\n\t\t"
        ),
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("em", {
        domProps: { innerHTML: _vm._s(_vm.sendEventRemindersHelpText) },
      }),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("em", [
        _vm._v(
          "\n\t\t\t" +
            _vm._s(
              _vm.$t(
                "dav",
                "Notifications are sent via background jobs, so these must occur often enough."
              )
            ) +
            "\n\t\t"
        ),
      ]),
    ]),
    _vm._v(" "),
    _c("p", [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.sendEventRemindersPush,
            expression: "sendEventRemindersPush",
          },
        ],
        staticClass: "checkbox",
        attrs: {
          id: "caldavSendEventRemindersPush",
          type: "checkbox",
          disabled: !_vm.sendEventReminders,
        },
        domProps: {
          checked: Array.isArray(_vm.sendEventRemindersPush)
            ? _vm._i(_vm.sendEventRemindersPush, null) > -1
            : _vm.sendEventRemindersPush,
        },
        on: {
          change: function ($event) {
            var $$a = _vm.sendEventRemindersPush,
              $$el = $event.target,
              $$c = $$el.checked ? true : false
            if (Array.isArray($$a)) {
              var $$v = null,
                $$i = _vm._i($$a, $$v)
              if ($$el.checked) {
                $$i < 0 && (_vm.sendEventRemindersPush = $$a.concat([$$v]))
              } else {
                $$i > -1 &&
                  (_vm.sendEventRemindersPush = $$a
                    .slice(0, $$i)
                    .concat($$a.slice($$i + 1)))
              }
            } else {
              _vm.sendEventRemindersPush = $$c
            }
          },
        },
      }),
      _vm._v(" "),
      _c("label", { attrs: { for: "caldavSendEventRemindersPush" } }, [
        _vm._v(
          "\n\t\t\t" +
            _vm._s(_vm.$t("dav", "Enable notifications for events via push")) +
            "\n\t\t"
        ),
      ]),
    ]),
  ])
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
/******/ 			"dav-settings-admin-caldav": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], function() { return __webpack_require__("./apps/dav/src/settings.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=dav-settings-admin-caldav.js.map?v=f447faf7e1bee84d471e