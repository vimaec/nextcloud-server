/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/dashboard/src/helpers/getBackgroundUrl.js":
/*!********************************************************!*\
  !*** ./apps/dashboard/src/helpers/getBackgroundUrl.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _prefixWithBaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prefixWithBaseUrl */ "./apps/dashboard/src/helpers/prefixWithBaseUrl.js");
/**
 * @copyright Copyright (c) 2020 Julius Härtl <jus@bitgrid.net>
 *
 * @author Avior <florian.bouillon@delta-wings.net>
 * @author Julien Veyssier <eneiluj@posteo.net>
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


/* harmony default export */ __webpack_exports__["default"] = (function (background) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var themingDefaultBackground = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (background === 'default') {
    if (themingDefaultBackground && themingDefaultBackground !== 'backgroundColor') {
      return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)('/apps/theming/image/background') + '?v=' + window.OCA.Theming.cacheBuster;
    }

    if (window.OCA.Accessibility && window.OCA.Accessibility.theme === 'dark') {
      return (0,_prefixWithBaseUrl__WEBPACK_IMPORTED_MODULE_1__["default"])('eduardo-neves-pedra-azul.jpg');
    }

    return (0,_prefixWithBaseUrl__WEBPACK_IMPORTED_MODULE_1__["default"])('kamil-porembinski-clouds.jpg');
  } else if (background === 'custom') {
    return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)('/apps/dashboard/background') + '?v=' + time;
  }

  return (0,_prefixWithBaseUrl__WEBPACK_IMPORTED_MODULE_1__["default"])(background);
});

/***/ }),

/***/ "./apps/dashboard/src/helpers/prefixWithBaseUrl.js":
/*!*********************************************************!*\
  !*** ./apps/dashboard/src/helpers/prefixWithBaseUrl.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/**
 * @copyright Copyright (c) 2020 Julius Härtl <jus@bitgrid.net>
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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

/* harmony default export */ __webpack_exports__["default"] = (function (url) {
  return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateFilePath)('dashboard', '', 'img/') + url;
});

/***/ }),

/***/ "./apps/dashboard/src/main.js":
/*!************************************!*\
  !*** ./apps/dashboard/src/main.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue */ "./apps/dashboard/src/App.vue");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.js");
/* harmony import */ var _nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/dist/Directives/Tooltip */ "./node_modules/@nextcloud/vue/dist/Directives/Tooltip.js");
/* harmony import */ var _nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.js");
/**
 * @copyright Copyright (c) 2016 Julius Härtl <jus@bitgrid.net>
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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */




 // eslint-disable-next-line camelcase

__webpack_require__.nc = btoa((0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_3__.getRequestToken)());
vue__WEBPACK_IMPORTED_MODULE_4__["default"].directive('Tooltip', (_nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_2___default()));
vue__WEBPACK_IMPORTED_MODULE_4__["default"].prototype.t = _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate; // FIXME workaround to make the sidebar work

if (!window.OCA.Files) {
  window.OCA.Files = {};
}

Object.assign(window.OCA.Files, {
  App: {
    fileList: {
      filesClient: OC.Files.getClient()
    }
  }
}, window.OCA.Files);
var Dashboard = vue__WEBPACK_IMPORTED_MODULE_4__["default"].extend(_App_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
var Instance = new Dashboard({}).$mount('#app-content-vue');
window.OCA.Dashboard = {
  register: function register(app, callback) {
    return Instance.register(app, callback);
  },
  registerStatus: function registerStatus(app, callback) {
    return Instance.registerStatus(app, callback);
  }
};

/***/ }),

/***/ "./apps/dashboard/src/mixins/isMobile.js":
/*!***********************************************!*\
  !*** ./apps/dashboard/src/mixins/isMobile.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/**
 * @copyright Copyright (c) 2020 Julius Härtl <jus@bitgrid.net>
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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isMobile: this._isMobile()
    };
  },
  beforeMount: function beforeMount() {
    window.addEventListener('resize', this._onResize);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this._onResize);
  },
  methods: {
    _onResize: function _onResize() {
      // Update mobile mode
      this.isMobile = this._isMobile();
    },
    _isMobile: function _isMobile() {
      // check if content width is under 768px
      return document.documentElement.clientWidth < 768;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dashboard/src/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dashboard/src/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.js");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.js");
/* harmony import */ var _nextcloud_vue_dist_Components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/Modal */ "./node_modules/@nextcloud/vue/dist/Components/Modal.js");
/* harmony import */ var _nextcloud_vue_dist_Components_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _mixins_isMobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mixins/isMobile */ "./apps/dashboard/src/mixins/isMobile.js");
/* harmony import */ var _components_BackgroundSettings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/BackgroundSettings */ "./apps/dashboard/src/components/BackgroundSettings.vue");
/* harmony import */ var _helpers_getBackgroundUrl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers/getBackgroundUrl */ "./apps/dashboard/src/helpers/getBackgroundUrl.js");
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










var panels = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('dashboard', 'panels');
var firstRun = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('dashboard', 'firstRun');
var background = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('dashboard', 'background');
var themingDefaultBackground = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('dashboard', 'themingDefaultBackground');
var version = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('dashboard', 'version');
var shippedBackgroundList = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('dashboard', 'shippedBackgrounds');
var statusInfo = {
  weather: {
    text: t('dashboard', 'Weather'),
    icon: 'icon-weather-status'
  },
  status: {
    text: t('dashboard', 'Status'),
    icon: 'icon-user-status-online'
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'App',
  components: {
    Modal: (_nextcloud_vue_dist_Components_Modal__WEBPACK_IMPORTED_MODULE_2___default()),
    Draggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_3___default()),
    BackgroundSettings: _components_BackgroundSettings__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  mixins: [_mixins_isMobile__WEBPACK_IMPORTED_MODULE_6__["default"]],
  data: function data() {
    var _getCurrentUser, _getCurrentUser2;

    return {
      isAdmin: (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__.getCurrentUser)().isAdmin,
      timer: new Date(),
      registeredStatus: [],
      callbacks: {},
      callbacksStatus: {},
      allCallbacksStatus: {},
      statusInfo: statusInfo,
      enabledStatuses: (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('dashboard', 'statuses'),
      panels: panels,
      firstRun: firstRun,
      displayName: (_getCurrentUser = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__.getCurrentUser)()) === null || _getCurrentUser === void 0 ? void 0 : _getCurrentUser.displayName,
      uid: (_getCurrentUser2 = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__.getCurrentUser)()) === null || _getCurrentUser2 === void 0 ? void 0 : _getCurrentUser2.uid,
      layout: (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('dashboard', 'layout').filter(function (panelId) {
        return panels[panelId];
      }),
      modal: false,
      appStoreUrl: (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_5__.generateUrl)('/settings/apps/dashboard'),
      statuses: {},
      background: background,
      themingDefaultBackground: themingDefaultBackground,
      version: version
    };
  },
  computed: {
    backgroundImage: function backgroundImage() {
      return (0,_helpers_getBackgroundUrl__WEBPACK_IMPORTED_MODULE_8__["default"])(this.background, this.version, this.themingDefaultBackground);
    },
    backgroundStyle: function backgroundStyle() {
      if (this.background === 'default' && this.themingDefaultBackground === 'backgroundColor' || this.background.match(/#[0-9A-Fa-f]{6}/g)) {
        return null;
      }

      return {
        backgroundImage: "url(".concat(this.backgroundImage, ")")
      };
    },
    greeting: function greeting() {
      var time = this.timer.getHours(); // Determine part of the day

      var partOfDay;

      if (time >= 22 || time < 5) {
        partOfDay = 'night';
      } else if (time >= 18) {
        partOfDay = 'evening';
      } else if (time >= 12) {
        partOfDay = 'afternoon';
      } else {
        partOfDay = 'morning';
      } // Define the greetings


      var good = {
        morning: {
          generic: t('dashboard', 'Good morning'),
          withName: t('dashboard', 'Good morning, {name}', {
            name: this.displayName
          }, undefined, {
            escape: false
          })
        },
        afternoon: {
          generic: t('dashboard', 'Good afternoon'),
          withName: t('dashboard', 'Good afternoon, {name}', {
            name: this.displayName
          }, undefined, {
            escape: false
          })
        },
        evening: {
          generic: t('dashboard', 'Good evening'),
          withName: t('dashboard', 'Good evening, {name}', {
            name: this.displayName
          }, undefined, {
            escape: false
          })
        },
        night: {
          // Don't use "Good night" as it's not a greeting
          generic: t('dashboard', 'Hello'),
          withName: t('dashboard', 'Hello, {name}', {
            name: this.displayName
          }, undefined, {
            escape: false
          })
        }
      }; // Figure out which greeting to show

      var shouldShowName = this.displayName && this.uid !== this.displayName;
      return {
        text: shouldShowName ? good[partOfDay].withName : good[partOfDay].generic
      };
    },
    isActive: function isActive() {
      var _this = this;

      return function (panel) {
        return _this.layout.indexOf(panel.id) > -1;
      };
    },
    isStatusActive: function isStatusActive() {
      var _this2 = this;

      return function (status) {
        return !(status in _this2.enabledStatuses) || _this2.enabledStatuses[status];
      };
    },
    sortedAllStatuses: function sortedAllStatuses() {
      return Object.keys(this.allCallbacksStatus).slice().sort(this.sortStatuses);
    },
    sortedPanels: function sortedPanels() {
      var _this3 = this;

      return Object.values(this.panels).sort(function (a, b) {
        var indexA = _this3.layout.indexOf(a.id);

        var indexB = _this3.layout.indexOf(b.id);

        if (indexA === -1 || indexB === -1) {
          return indexB - indexA || a.id - b.id;
        }

        return indexA - indexB || a.id - b.id;
      });
    },
    sortedRegisteredStatus: function sortedRegisteredStatus() {
      return this.registeredStatus.slice().sort(this.sortStatuses);
    }
  },
  watch: {
    callbacks: function callbacks() {
      this.rerenderPanels();
    },
    callbacksStatus: function callbacksStatus() {
      for (var app in this.callbacksStatus) {
        var element = this.$refs['status-' + app];

        if (this.statuses[app] && this.statuses[app].mounted) {
          continue;
        }

        if (element) {
          this.callbacksStatus[app](element[0]);
          vue__WEBPACK_IMPORTED_MODULE_9__["default"].set(this.statuses, app, {
            mounted: true
          });
        } else {
          console.error('Failed to register panel in the frontend as no backend data was provided for ' + app);
        }
      }
    }
  },
  mounted: function mounted() {
    var _this4 = this;

    this.updateGlobalStyles();
    this.updateSkipLink();
    window.addEventListener('scroll', this.handleScroll);
    setInterval(function () {
      _this4.timer = new Date();
    }, 30000);

    if (this.firstRun) {
      window.addEventListener('scroll', this.disableFirstrunHint);
    }
  },
  destroyed: function destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    /**
     * Method to register panels that will be called by the integrating apps
     *
     * @param {string} app The unique app id for the widget
     * @param {Function} callback The callback function to register a panel which gets the DOM element passed as parameter
     */
    register: function register(app, callback) {
      vue__WEBPACK_IMPORTED_MODULE_9__["default"].set(this.callbacks, app, callback);
    },
    registerStatus: function registerStatus(app, callback) {
      var _this5 = this;

      // always save callbacks in case user enables the status later
      vue__WEBPACK_IMPORTED_MODULE_9__["default"].set(this.allCallbacksStatus, app, callback); // register only if status is enabled or missing from config

      if (this.isStatusActive(app)) {
        this.registeredStatus.push(app);
        this.$nextTick(function () {
          vue__WEBPACK_IMPORTED_MODULE_9__["default"].set(_this5.callbacksStatus, app, callback);
        });
      }
    },
    rerenderPanels: function rerenderPanels() {
      for (var app in this.callbacks) {
        var element = this.$refs[app];

        if (this.layout.indexOf(app) === -1) {
          continue;
        }

        if (this.panels[app] && this.panels[app].mounted) {
          continue;
        }

        if (element) {
          this.callbacks[app](element[0], {
            widget: this.panels[app]
          });
          vue__WEBPACK_IMPORTED_MODULE_9__["default"].set(this.panels[app], 'mounted', true);
        } else {
          console.error('Failed to register panel in the frontend as no backend data was provided for ' + app);
        }
      }
    },
    saveLayout: function saveLayout() {
      _nextcloud_axios__WEBPACK_IMPORTED_MODULE_4__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_5__.generateUrl)('/apps/dashboard/layout'), {
        layout: this.layout.join(',')
      });
    },
    saveStatuses: function saveStatuses() {
      _nextcloud_axios__WEBPACK_IMPORTED_MODULE_4__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_5__.generateUrl)('/apps/dashboard/statuses'), {
        statuses: JSON.stringify(this.enabledStatuses)
      });
    },
    showModal: function showModal() {
      this.modal = true;
      this.firstRun = false;
    },
    closeModal: function closeModal() {
      this.modal = false;
    },
    updateCheckbox: function updateCheckbox(panel, currentValue) {
      var _this6 = this;

      var index = this.layout.indexOf(panel.id);

      if (!currentValue && index > -1) {
        this.layout.splice(index, 1);
      } else {
        this.layout.push(panel.id);
      }

      vue__WEBPACK_IMPORTED_MODULE_9__["default"].set(this.panels[panel.id], 'mounted', false);
      this.saveLayout();
      this.$nextTick(function () {
        return _this6.rerenderPanels();
      });
    },
    disableFirstrunHint: function disableFirstrunHint() {
      var _this7 = this;

      window.removeEventListener('scroll', this.disableFirstrunHint);
      setTimeout(function () {
        _this7.firstRun = false;
      }, 1000);
    },
    updateBackground: function updateBackground(data) {
      this.background = data.type === 'custom' || data.type === 'default' ? data.type : data.value;
      this.version = data.version;
      this.updateGlobalStyles();
    },
    updateGlobalStyles: function updateGlobalStyles() {
      document.body.setAttribute('data-dashboard-background', this.background);

      if (window.OCA.Theming.inverted) {
        document.body.classList.add('dashboard--inverted');
      }

      var shippedBackgroundTheme = shippedBackgroundList[this.background] ? shippedBackgroundList[this.background].theming : 'light';

      if (shippedBackgroundTheme === 'dark') {
        document.body.classList.add('dashboard--dark');
      } else {
        document.body.classList.remove('dashboard--dark');
      }
    },
    updateSkipLink: function updateSkipLink() {
      // Make sure "Skip to main content" link points to the app content
      document.getElementsByClassName('skip-navigation')[0].setAttribute('href', '#app-dashboard');
    },
    updateStatusCheckbox: function updateStatusCheckbox(app, checked) {
      if (checked) {
        this.enableStatus(app);
      } else {
        this.disableStatus(app);
      }
    },
    enableStatus: function enableStatus(app) {
      this.enabledStatuses[app] = true;
      this.registerStatus(app, this.allCallbacksStatus[app]);
      this.saveStatuses();
    },
    disableStatus: function disableStatus(app) {
      var _this8 = this;

      this.enabledStatuses[app] = false;
      var i = this.registeredStatus.findIndex(function (s) {
        return s === app;
      });

      if (i !== -1) {
        this.registeredStatus.splice(i, 1);
        vue__WEBPACK_IMPORTED_MODULE_9__["default"].set(this.statuses, app, {
          mounted: false
        });
        this.$nextTick(function () {
          vue__WEBPACK_IMPORTED_MODULE_9__["default"]["delete"](_this8.callbacksStatus, app);
        });
      }

      this.saveStatuses();
    },
    sortStatuses: function sortStatuses(a, b) {
      var al = a.toLowerCase();
      var bl = b.toLowerCase();
      return al > bl ? 1 : al < bl ? -1 : 0;
    },
    handleScroll: function handleScroll() {
      if (window.scrollY > 70) {
        document.body.classList.add('dashboard--scrolled');
      } else {
        document.body.classList.remove('dashboard--scrolled');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dashboard/src/components/BackgroundSettings.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dashboard/src/components/BackgroundSettings.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.js");
/* harmony import */ var _helpers_getBackgroundUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../helpers/getBackgroundUrl */ "./apps/dashboard/src/helpers/getBackgroundUrl.js");
/* harmony import */ var _helpers_prefixWithBaseUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../helpers/prefixWithBaseUrl */ "./apps/dashboard/src/helpers/prefixWithBaseUrl.js");
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





var shippedBackgroundList = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_2__.loadState)('dashboard', 'shippedBackgrounds');
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'BackgroundSettings',
  props: {
    background: {
      type: String,
      default: 'default'
    },
    themingDefaultBackground: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      backgroundImage: (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('/apps/dashboard/background') + '?v=' + Date.now(),
      loading: false
    };
  },
  computed: {
    shippedBackgrounds: function shippedBackgrounds() {
      return Object.keys(shippedBackgroundList).map(function (item) {
        return {
          name: item,
          url: (0,_helpers_prefixWithBaseUrl__WEBPACK_IMPORTED_MODULE_4__["default"])(item),
          preview: (0,_helpers_prefixWithBaseUrl__WEBPACK_IMPORTED_MODULE_4__["default"])('previews/' + item),
          details: shippedBackgroundList[item]
        };
      });
    }
  },
  methods: {
    update: function update(data) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var background, image;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                background = data.type === 'custom' || data.type === 'default' ? data.type : data.value;
                _this.backgroundImage = (0,_helpers_getBackgroundUrl__WEBPACK_IMPORTED_MODULE_3__["default"])(background, data.version, _this.themingDefaultBackground);

                if (!(data.type === 'color' || data.type === 'default' && _this.themingDefaultBackground === 'backgroundColor')) {
                  _context.next = 6;
                  break;
                }

                _this.$emit('update:background', data);

                _this.loading = false;
                return _context.abrupt("return");

              case 6:
                image = new Image();

                image.onload = function () {
                  _this.$emit('update:background', data);

                  _this.loading = false;
                };

                image.src = _this.backgroundImage;

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    setDefault: function setDefault() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.loading = 'default';
                _context2.next = 3;
                return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('/apps/dashboard/background/default'));

              case 3:
                result = _context2.sent;

                _this2.update(result.data);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    setShipped: function setShipped(shipped) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var result;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.loading = shipped;
                _context3.next = 3;
                return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('/apps/dashboard/background/shipped'), {
                  value: shipped
                });

              case 3:
                result = _context3.sent;

                _this3.update(result.data);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    setFile: function setFile(path) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var result;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this4.loading = 'custom';
                _context4.next = 3;
                return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('/apps/dashboard/background/custom'), {
                  value: path
                });

              case 3:
                result = _context4.sent;

                _this4.update(result.data);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    pickColor: function pickColor() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var color, result;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this5.loading = 'color';
                color = OCA && OCA.Theming ? OCA.Theming.color : '#0082c9';
                _context5.next = 4;
                return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('/apps/dashboard/background/color'), {
                  value: color
                });

              case 4:
                result = _context5.sent;

                _this5.update(result.data);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    pickFile: function pickFile() {
      var _this6 = this;

      window.OC.dialogs.filepicker(t('dashboard', 'Insert from {productName}', {
        productName: OC.theme.name
      }), function (path, type) {
        if (type === OC.dialogs.FILEPICKER_TYPE_CHOOSE) {
          _this6.setFile(path);
        }
      }, false, ['image/png', 'image/gif', 'image/jpeg', 'image/svg'], true, OC.dialogs.FILEPICKER_TYPE_CHOOSE);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dashboard/src/App.vue?vue&type=style&index=0&id=47e146e8&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dashboard/src/App.vue?vue&type=style&index=0&id=47e146e8&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#app-dashboard[data-v-47e146e8] {\n  width: 100%;\n  min-height: 100vh;\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-color: var(--color-primary);\n  --color-background-translucent: rgba(255, 255, 255, 0.8);\n  --background-blur: blur(10px);\n}\n#body-user.theme--dark #app-dashboard[data-v-47e146e8] {\n  background-color: var(--color-main-background);\n  --color-background-translucent: rgba(24, 24, 24, 0.8);\n}\n#body-user.theme--highcontrast #app-dashboard[data-v-47e146e8] {\n  background-color: var(--color-main-background);\n  --color-background-translucent: var(--color-main-background);\n}\n#app-dashboard > h2[data-v-47e146e8] {\n  color: var(--color-primary-text);\n  text-align: center;\n  font-size: 32px;\n  line-height: 130%;\n  padding: 10vh 16px 0px;\n}\n.panels[data-v-47e146e8] {\n  width: auto;\n  margin: auto;\n  max-width: 1500px;\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n.panel[data-v-47e146e8], .panels > div[data-v-47e146e8] {\n  width: 320px;\n  max-width: 100%;\n  margin: 16px;\n  background-color: var(--color-background-translucent);\n  -webkit-backdrop-filter: var(--background-blur);\n  backdrop-filter: var(--background-blur);\n  border-radius: var(--border-radius-large);\n}\n#body-user.theme--highcontrast .panel[data-v-47e146e8], #body-user.theme--highcontrast .panels > div[data-v-47e146e8] {\n  border: 2px solid var(--color-border);\n}\n.panel.sortable-ghost[data-v-47e146e8], .panels > div.sortable-ghost[data-v-47e146e8] {\n  opacity: 0.1;\n}\n.panel > .panel--header[data-v-47e146e8], .panels > div > .panel--header[data-v-47e146e8] {\n  display: flex;\n  z-index: 1;\n  top: 50px;\n  padding: 16px;\n  cursor: grab;\n}\n.panel > .panel--header[data-v-47e146e8], .panel > .panel--header[data-v-47e146e8]  *, .panels > div > .panel--header[data-v-47e146e8], .panels > div > .panel--header[data-v-47e146e8]  * {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.panel > .panel--header[data-v-47e146e8]:active, .panels > div > .panel--header[data-v-47e146e8]:active {\n  cursor: grabbing;\n}\n.panel > .panel--header a[data-v-47e146e8], .panels > div > .panel--header a[data-v-47e146e8] {\n  flex-grow: 1;\n}\n.panel > .panel--header > h2[data-v-47e146e8], .panels > div > .panel--header > h2[data-v-47e146e8] {\n  display: block;\n  flex-grow: 1;\n  margin: 0;\n  font-size: 20px;\n  line-height: 24px;\n  font-weight: bold;\n  background-size: 32px;\n  background-position: 14px 12px;\n  padding: 16px 8px 16px 60px;\n  height: 56px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: grab;\n}\n.panel > .panel--content[data-v-47e146e8], .panels > div > .panel--content[data-v-47e146e8] {\n  margin: 0 16px 16px 16px;\n  height: 420px;\n  overflow: hidden;\n}\n@media only screen and (max-width: 709px) {\n.panel > .panel--content[data-v-47e146e8], .panels > div > .panel--content[data-v-47e146e8] {\n    height: auto;\n}\n}\n.footer[data-v-47e146e8] {\n  text-align: center;\n  transition: bottom var(--animation-slow) ease-in-out;\n  bottom: 0;\n  padding: 44px 0;\n}\n.edit-panels[data-v-47e146e8] {\n  display: inline-block;\n  margin: auto;\n  background-position: 16px center;\n  padding: 12px 16px;\n  padding-left: 36px;\n  border-radius: var(--border-radius-pill);\n  max-width: 200px;\n  opacity: 1;\n  text-align: center;\n}\n.edit-panels[data-v-47e146e8],\n.statuses[data-v-47e146e8]  .action-item .action-item__menutoggle,\n.statuses[data-v-47e146e8]  .action-item.action-item--open .action-item__menutoggle {\n  background-color: var(--color-background-translucent);\n  -webkit-backdrop-filter: var(--background-blur);\n  backdrop-filter: var(--background-blur);\n}\n.edit-panels[data-v-47e146e8]:hover, .edit-panels[data-v-47e146e8]:focus, .edit-panels[data-v-47e146e8]:active,\n.statuses[data-v-47e146e8]  .action-item .action-item__menutoggle:hover,\n.statuses[data-v-47e146e8]  .action-item .action-item__menutoggle:focus,\n.statuses[data-v-47e146e8]  .action-item .action-item__menutoggle:active,\n.statuses[data-v-47e146e8]  .action-item.action-item--open .action-item__menutoggle:hover,\n.statuses[data-v-47e146e8]  .action-item.action-item--open .action-item__menutoggle:focus,\n.statuses[data-v-47e146e8]  .action-item.action-item--open .action-item__menutoggle:active {\n  background-color: var(--color-background-hover);\n}\n.modal__content[data-v-47e146e8] {\n  padding: 32px 16px;\n  max-height: 70vh;\n  text-align: center;\n  overflow: auto;\n}\n.modal__content ol[data-v-47e146e8] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  list-style-type: none;\n  padding-bottom: 16px;\n}\n.modal__content li label[data-v-47e146e8] {\n  display: block;\n  padding: 48px 8px 16px 8px;\n  margin: 8px;\n  width: 160px;\n  background-color: var(--color-background-hover);\n  border: 2px solid var(--color-main-background);\n  border-radius: var(--border-radius-large);\n  background-size: 24px;\n  background-position: center 16px;\n  text-align: center;\n}\n.modal__content li label[data-v-47e146e8]:hover {\n  border-color: var(--color-primary);\n}\n.modal__content li input:focus + label[data-v-47e146e8] {\n  border-color: var(--color-primary);\n}\n.modal__content h3[data-v-47e146e8] {\n  font-weight: bold;\n}\n.modal__content h3[data-v-47e146e8]:not(:first-of-type) {\n  margin-top: 64px;\n}\n.modal__content .button[data-v-47e146e8] {\n  display: inline-block;\n  padding: 10px 16px;\n  margin: 0;\n}\n.modal__content p[data-v-47e146e8] {\n  max-width: 650px;\n  margin: 0 auto;\n}\n.modal__content p a[data-v-47e146e8]:hover,\n.modal__content p a[data-v-47e146e8]:focus {\n  border-bottom: 2px solid var(--color-border);\n}\n.modal__content .credits--end[data-v-47e146e8] {\n  padding-bottom: 32px;\n  color: var(--color-text-maxcontrast);\n}\n.modal__content .credits--end a[data-v-47e146e8] {\n  color: var(--color-text-maxcontrast);\n}\n.flip-list-move[data-v-47e146e8] {\n  transition: transform var(--animation-slow);\n}\n.statuses[data-v-47e146e8] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-bottom: 36px;\n}\n.statuses > div[data-v-47e146e8] {\n  margin: 8px;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dashboard/src/components/BackgroundSettings.vue?vue&type=style&index=0&id=7e3f4375&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dashboard/src/components/BackgroundSettings.vue?vue&type=style&index=0&id=7e3f4375&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".background-selector[data-v-7e3f4375] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.background-selector .background[data-v-7e3f4375] {\n  width: 176px;\n  height: 96px;\n  margin: 8px;\n  background-size: cover;\n  background-position: center center;\n  text-align: center;\n  border-radius: var(--border-radius-large);\n  border: 2px solid var(--color-main-background);\n  overflow: hidden;\n}\n.background-selector .background.current[data-v-7e3f4375] {\n  background-image: var(--color-background-dark);\n}\n.background-selector .background.filepicker[data-v-7e3f4375], .background-selector .background.default[data-v-7e3f4375], .background-selector .background.color[data-v-7e3f4375] {\n  border-color: var(--color-border);\n}\n.background-selector .background.color[data-v-7e3f4375] {\n  background-color: var(--color-primary);\n  color: var(--color-primary-text);\n}\n.background-selector .background.active[data-v-7e3f4375], .background-selector .background[data-v-7e3f4375]:hover, .background-selector .background[data-v-7e3f4375]:focus {\n  border: 2px solid var(--color-primary);\n}\n.background-selector .background.active[data-v-7e3f4375]:not(.icon-loading):after {\n  background-image: var(--icon-checkmark-fff);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 44px;\n  content: \"\";\n  display: block;\n  height: 100%;\n}\nbody.theme--dark .background-selector .background.active[data-v-7e3f4375]:not(.icon-loading):after {\n  background-image: var(--icon-checkmark-000);\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dashboard/src/App.vue?vue&type=style&index=0&id=47e146e8&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dashboard/src/App.vue?vue&type=style&index=0&id=47e146e8&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_47e146e8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=style&index=0&id=47e146e8&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dashboard/src/App.vue?vue&type=style&index=0&id=47e146e8&lang=scss&scoped=true&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_47e146e8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_47e146e8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_47e146e8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_47e146e8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dashboard/src/components/BackgroundSettings.vue?vue&type=style&index=0&id=7e3f4375&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dashboard/src/components/BackgroundSettings.vue?vue&type=style&index=0&id=7e3f4375&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BackgroundSettings_vue_vue_type_style_index_0_id_7e3f4375_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BackgroundSettings.vue?vue&type=style&index=0&id=7e3f4375&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dashboard/src/components/BackgroundSettings.vue?vue&type=style&index=0&id=7e3f4375&scoped=true&lang=scss&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BackgroundSettings_vue_vue_type_style_index_0_id_7e3f4375_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BackgroundSettings_vue_vue_type_style_index_0_id_7e3f4375_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BackgroundSettings_vue_vue_type_style_index_0_id_7e3f4375_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BackgroundSettings_vue_vue_type_style_index_0_id_7e3f4375_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./apps/dashboard/src/App.vue":
/*!************************************!*\
  !*** ./apps/dashboard/src/App.vue ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_47e146e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=47e146e8&scoped=true& */ "./apps/dashboard/src/App.vue?vue&type=template&id=47e146e8&scoped=true&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./apps/dashboard/src/App.vue?vue&type=script&lang=js&");
/* harmony import */ var _App_vue_vue_type_style_index_0_id_47e146e8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=47e146e8&lang=scss&scoped=true& */ "./apps/dashboard/src/App.vue?vue&type=style&index=0&id=47e146e8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_47e146e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _App_vue_vue_type_template_id_47e146e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "47e146e8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/dashboard/src/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./apps/dashboard/src/components/BackgroundSettings.vue":
/*!**************************************************************!*\
  !*** ./apps/dashboard/src/components/BackgroundSettings.vue ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BackgroundSettings_vue_vue_type_template_id_7e3f4375_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BackgroundSettings.vue?vue&type=template&id=7e3f4375&scoped=true& */ "./apps/dashboard/src/components/BackgroundSettings.vue?vue&type=template&id=7e3f4375&scoped=true&");
/* harmony import */ var _BackgroundSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BackgroundSettings.vue?vue&type=script&lang=js& */ "./apps/dashboard/src/components/BackgroundSettings.vue?vue&type=script&lang=js&");
/* harmony import */ var _BackgroundSettings_vue_vue_type_style_index_0_id_7e3f4375_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BackgroundSettings.vue?vue&type=style&index=0&id=7e3f4375&scoped=true&lang=scss& */ "./apps/dashboard/src/components/BackgroundSettings.vue?vue&type=style&index=0&id=7e3f4375&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BackgroundSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BackgroundSettings_vue_vue_type_template_id_7e3f4375_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _BackgroundSettings_vue_vue_type_template_id_7e3f4375_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7e3f4375",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/dashboard/src/components/BackgroundSettings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./apps/dashboard/src/App.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./apps/dashboard/src/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dashboard/src/App.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/dashboard/src/components/BackgroundSettings.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./apps/dashboard/src/components/BackgroundSettings.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BackgroundSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BackgroundSettings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dashboard/src/components/BackgroundSettings.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BackgroundSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/dashboard/src/App.vue?vue&type=style&index=0&id=47e146e8&lang=scss&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./apps/dashboard/src/App.vue?vue&type=style&index=0&id=47e146e8&lang=scss&scoped=true& ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_47e146e8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=style&index=0&id=47e146e8&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dashboard/src/App.vue?vue&type=style&index=0&id=47e146e8&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/dashboard/src/components/BackgroundSettings.vue?vue&type=style&index=0&id=7e3f4375&scoped=true&lang=scss&":
/*!************************************************************************************************************************!*\
  !*** ./apps/dashboard/src/components/BackgroundSettings.vue?vue&type=style&index=0&id=7e3f4375&scoped=true&lang=scss& ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BackgroundSettings_vue_vue_type_style_index_0_id_7e3f4375_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BackgroundSettings.vue?vue&type=style&index=0&id=7e3f4375&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dashboard/src/components/BackgroundSettings.vue?vue&type=style&index=0&id=7e3f4375&scoped=true&lang=scss&");


/***/ }),

/***/ "./apps/dashboard/src/App.vue?vue&type=template&id=47e146e8&scoped=true&":
/*!*******************************************************************************!*\
  !*** ./apps/dashboard/src/App.vue?vue&type=template&id=47e146e8&scoped=true& ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_47e146e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_47e146e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_47e146e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=template&id=47e146e8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dashboard/src/App.vue?vue&type=template&id=47e146e8&scoped=true&");


/***/ }),

/***/ "./apps/dashboard/src/components/BackgroundSettings.vue?vue&type=template&id=7e3f4375&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./apps/dashboard/src/components/BackgroundSettings.vue?vue&type=template&id=7e3f4375&scoped=true& ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BackgroundSettings_vue_vue_type_template_id_7e3f4375_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BackgroundSettings_vue_vue_type_template_id_7e3f4375_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BackgroundSettings_vue_vue_type_template_id_7e3f4375_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BackgroundSettings.vue?vue&type=template&id=7e3f4375&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dashboard/src/components/BackgroundSettings.vue?vue&type=template&id=7e3f4375&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dashboard/src/App.vue?vue&type=template&id=47e146e8&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dashboard/src/App.vue?vue&type=template&id=47e146e8&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    { style: _vm.backgroundStyle, attrs: { id: "app-dashboard" } },
    [
      _c("h2", [_vm._v(_vm._s(_vm.greeting.text))]),
      _vm._v(" "),
      _c(
        "ul",
        { staticClass: "statuses" },
        _vm._l(_vm.sortedRegisteredStatus, function (status) {
          return _c("div", { key: status, attrs: { id: "status-" + status } }, [
            _c("div", { ref: "status-" + status, refInFor: true }),
          ])
        }),
        0
      ),
      _vm._v(" "),
      _c(
        "Draggable",
        _vm._b(
          {
            staticClass: "panels",
            attrs: { handle: ".panel--header" },
            on: { end: _vm.saveLayout },
            model: {
              value: _vm.layout,
              callback: function ($$v) {
                _vm.layout = $$v
              },
              expression: "layout",
            },
          },
          "Draggable",
          {
            swapThreshold: 0.3,
            delay: 500,
            delayOnTouchOnly: true,
            touchStartThreshold: 3,
          },
          false
        ),
        _vm._l(_vm.layout, function (panelId) {
          return _c(
            "div",
            { key: _vm.panels[panelId].id, staticClass: "panel" },
            [
              _c("div", { staticClass: "panel--header" }, [
                _c("h2", { class: _vm.panels[panelId].iconClass }, [
                  _vm._v(
                    "\n\t\t\t\t\t" +
                      _vm._s(_vm.panels[panelId].title) +
                      "\n\t\t\t\t"
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "panel--content",
                  class: { loading: !_vm.panels[panelId].mounted },
                },
                [
                  _c("div", {
                    ref: _vm.panels[panelId].id,
                    refInFor: true,
                    attrs: { "data-id": _vm.panels[panelId].id },
                  }),
                ]
              ),
            ]
          )
        }),
        0
      ),
      _vm._v(" "),
      _c("div", { staticClass: "footer" }, [
        _c(
          "a",
          {
            staticClass: "edit-panels icon-rename",
            attrs: { tabindex: "0" },
            on: {
              click: _vm.showModal,
              keyup: [
                function ($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.showModal.apply(null, arguments)
                },
                function ($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "space", 32, $event.key, [
                      " ",
                      "Spacebar",
                    ])
                  ) {
                    return null
                  }
                  return _vm.showModal.apply(null, arguments)
                },
              ],
            },
          },
          [_vm._v(_vm._s(_vm.t("dashboard", "Customize")))]
        ),
      ]),
      _vm._v(" "),
      _vm.modal
        ? _c("Modal", { on: { close: _vm.closeModal } }, [
            _c(
              "div",
              { staticClass: "modal__content" },
              [
                _c("h3", [_vm._v(_vm._s(_vm.t("dashboard", "Edit widgets")))]),
                _vm._v(" "),
                _c(
                  "ol",
                  { staticClass: "panels" },
                  _vm._l(_vm.sortedAllStatuses, function (status) {
                    return _c("li", { key: status }, [
                      _c("input", {
                        staticClass: "checkbox",
                        attrs: {
                          id: "status-checkbox-" + status,
                          type: "checkbox",
                        },
                        domProps: { checked: _vm.isStatusActive(status) },
                        on: {
                          input: function ($event) {
                            return _vm.updateStatusCheckbox(
                              status,
                              $event.target.checked
                            )
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          class: _vm.statusInfo[status].icon,
                          attrs: { for: "status-checkbox-" + status },
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t" +
                              _vm._s(_vm.statusInfo[status].text) +
                              "\n\t\t\t\t\t"
                          ),
                        ]
                      ),
                    ])
                  }),
                  0
                ),
                _vm._v(" "),
                _c(
                  "Draggable",
                  _vm._b(
                    {
                      staticClass: "panels",
                      attrs: { tag: "ol", handle: ".draggable" },
                      on: { end: _vm.saveLayout },
                      model: {
                        value: _vm.layout,
                        callback: function ($$v) {
                          _vm.layout = $$v
                        },
                        expression: "layout",
                      },
                    },
                    "Draggable",
                    {
                      swapThreshold: 0.3,
                      delay: 500,
                      delayOnTouchOnly: true,
                      touchStartThreshold: 3,
                    },
                    false
                  ),
                  _vm._l(_vm.sortedPanels, function (panel) {
                    return _c("li", { key: panel.id }, [
                      _c("input", {
                        staticClass: "checkbox",
                        attrs: {
                          id: "panel-checkbox-" + panel.id,
                          type: "checkbox",
                        },
                        domProps: { checked: _vm.isActive(panel) },
                        on: {
                          input: function ($event) {
                            return _vm.updateCheckbox(
                              panel,
                              $event.target.checked
                            )
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          class: _vm.isActive(panel)
                            ? "draggable " + panel.iconClass
                            : panel.iconClass,
                          attrs: { for: "panel-checkbox-" + panel.id },
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t" +
                              _vm._s(panel.title) +
                              "\n\t\t\t\t\t"
                          ),
                        ]
                      ),
                    ])
                  }),
                  0
                ),
                _vm._v(" "),
                _vm.isAdmin
                  ? _c(
                      "a",
                      {
                        staticClass: "button",
                        attrs: { href: _vm.appStoreUrl },
                      },
                      [
                        _vm._v(
                          _vm._s(
                            _vm.t(
                              "dashboard",
                              "Get more widgets from the App Store"
                            )
                          )
                        ),
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("h3", [
                  _vm._v(_vm._s(_vm.t("dashboard", "Change background image"))),
                ]),
                _vm._v(" "),
                _c("BackgroundSettings", {
                  attrs: {
                    background: _vm.background,
                    "theming-default-background": _vm.themingDefaultBackground,
                  },
                  on: { "update:background": _vm.updateBackground },
                }),
                _vm._v(" "),
                _c("h3", [
                  _vm._v(_vm._s(_vm.t("dashboard", "Weather service"))),
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n\t\t\t\t" +
                      _vm._s(
                        _vm.t(
                          "dashboard",
                          "For your privacy, the weather data is requested by your Nextcloud server on your behalf so the weather service receives no personal information."
                        )
                      ) +
                      "\n\t\t\t"
                  ),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "credits--end" }, [
                  _c(
                    "a",
                    {
                      attrs: {
                        href: "https://api.met.no/doc/TermsOfService",
                        target: "_blank",
                        rel: "noopener",
                      },
                    },
                    [
                      _vm._v(
                        _vm._s(_vm.t("dashboard", "Weather data from Met.no"))
                      ),
                    ]
                  ),
                  _vm._v(",\n\t\t\t\t"),
                  _c(
                    "a",
                    {
                      attrs: {
                        href: "https://wiki.osmfoundation.org/wiki/Privacy_Policy",
                        target: "_blank",
                        rel: "noopener",
                      },
                    },
                    [
                      _vm._v(
                        _vm._s(_vm.t("dashboard", "geocoding with Nominatim"))
                      ),
                    ]
                  ),
                  _vm._v(",\n\t\t\t\t"),
                  _c(
                    "a",
                    {
                      attrs: {
                        href: "https://www.opentopodata.org/#public-api",
                        target: "_blank",
                        rel: "noopener",
                      },
                    },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.t("dashboard", "elevation data from OpenTopoData")
                        )
                      ),
                    ]
                  ),
                  _vm._v(".\n\t\t\t"),
                ]),
              ],
              1
            ),
          ])
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dashboard/src/components/BackgroundSettings.vue?vue&type=template&id=7e3f4375&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dashboard/src/components/BackgroundSettings.vue?vue&type=template&id=7e3f4375&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "background-selector" },
    [
      _c(
        "button",
        {
          staticClass: "background filepicker",
          class: { active: _vm.background === "custom" },
          attrs: { tabindex: "0" },
          on: { click: _vm.pickFile },
        },
        [
          _vm._v(
            "\n\t\t" + _vm._s(_vm.t("dashboard", "Pick from Files")) + "\n\t"
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "background default",
          class: {
            "icon-loading": _vm.loading === "default",
            active: _vm.background === "default",
          },
          attrs: { tabindex: "0" },
          on: { click: _vm.setDefault },
        },
        [
          _vm._v(
            "\n\t\t" + _vm._s(_vm.t("dashboard", "Default images")) + "\n\t"
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "background color",
          class: { active: _vm.background === "custom" },
          attrs: { tabindex: "0" },
          on: { click: _vm.pickColor },
        },
        [
          _vm._v(
            "\n\t\t" + _vm._s(_vm.t("dashboard", "Plain background")) + "\n\t"
          ),
        ]
      ),
      _vm._v(" "),
      _vm._l(_vm.shippedBackgrounds, function (shippedBackground) {
        return _c("button", {
          directives: [
            {
              name: "tooltip",
              rawName: "v-tooltip",
              value: shippedBackground.details.attribution,
              expression: "shippedBackground.details.attribution",
            },
          ],
          key: shippedBackground.name,
          staticClass: "background",
          class: {
            "icon-loading": _vm.loading === shippedBackground.name,
            active: _vm.background === shippedBackground.name,
          },
          style: {
            "background-image": "url(" + shippedBackground.preview + ")",
          },
          attrs: { tabindex: "0" },
          on: {
            click: function ($event) {
              return _vm.setShipped(shippedBackground.name)
            },
          },
        })
      }),
    ],
    2
  )
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
/******/ 			"dashboard-main": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], function() { return __webpack_require__("./apps/dashboard/src/main.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=dashboard-main.js.map?v=c30093d5e8416ee37bb5