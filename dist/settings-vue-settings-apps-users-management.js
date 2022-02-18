/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/settings/src/main-apps-users-management.js":
/*!*********************************************************!*\
  !*** ./apps/settings/src/main-apps-users-management.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": function() { return /* binding */ app; },
/* harmony export */   "router": function() { return /* reexport safe */ _router__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   "store": function() { return /* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_4__["default"]; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var v_tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! v-tooltip */ "./node_modules/v-tooltip/dist/v-tooltip.esm.js");
/* harmony import */ var vuex_router_sync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex-router-sync */ "./node_modules/vuex-router-sync/index.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue */ "./apps/settings/src/App.vue");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ "./apps/settings/src/router.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ "./apps/settings/src/store/index.js");
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author rakekniven <mark.ziegler@rakekniven.de>
 * @author Roeland Jago Douma <roeland@famdouma.nl>
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






vue__WEBPACK_IMPORTED_MODULE_5__["default"].use(v_tooltip__WEBPACK_IMPORTED_MODULE_0__["default"], {
  defaultHtml: false
});
(0,vuex_router_sync__WEBPACK_IMPORTED_MODULE_1__.sync)(_store__WEBPACK_IMPORTED_MODULE_4__["default"], _router__WEBPACK_IMPORTED_MODULE_3__["default"]); // CSP config for webpack dynamic chunk loading
// eslint-disable-next-line camelcase

__webpack_require__.nc = btoa(OC.requestToken); // bind to window

vue__WEBPACK_IMPORTED_MODULE_5__["default"].prototype.t = t;
vue__WEBPACK_IMPORTED_MODULE_5__["default"].prototype.n = n;
vue__WEBPACK_IMPORTED_MODULE_5__["default"].prototype.OC = OC;
vue__WEBPACK_IMPORTED_MODULE_5__["default"].prototype.OCA = OCA; // eslint-disable-next-line camelcase

vue__WEBPACK_IMPORTED_MODULE_5__["default"].prototype.oc_userconfig = oc_userconfig;
var app = new vue__WEBPACK_IMPORTED_MODULE_5__["default"]({
  router: _router__WEBPACK_IMPORTED_MODULE_3__["default"],
  store: _store__WEBPACK_IMPORTED_MODULE_4__["default"],
  render: function render(h) {
    return h(_App_vue__WEBPACK_IMPORTED_MODULE_2__["default"]);
  }
}).$mount('#content');


/***/ }),

/***/ "./apps/settings/src/router.js":
/*!*************************************!*\
  !*** ./apps/settings/src/router.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author Julius Härtl <jus@bitgrid.net>
 * @author Roeland Jago Douma <roeland@famdouma.nl>
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


 // Dynamic loading

var Users = function Users() {
  return Promise.all(/*! import() | settings-users */[__webpack_require__.e("core-common"), __webpack_require__.e("settings-users")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/Users */ "./apps/settings/src/views/Users.vue"));
};

var Apps = function Apps() {
  return Promise.all(/*! import() | settings-apps */[__webpack_require__.e("core-common"), __webpack_require__.e("settings-apps")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/Apps */ "./apps/settings/src/views/Apps.vue"));
};

vue__WEBPACK_IMPORTED_MODULE_1__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_2__["default"]);
/*
 * This is the list of routes where the vuejs app will
 * take over php to provide data
 * You need to forward the php routing (routes.php) to
 * the settings-vue template, where the vue-router will
 * ensure the proper route.
 * ⚠️ Routes needs to match the php routes.
 */

/* harmony default export */ __webpack_exports__["default"] = (new vue_router__WEBPACK_IMPORTED_MODULE_2__["default"]({
  mode: 'history',
  // if index.php is in the url AND we got this far, then it's working:
  // let's keep using index.php in the url
  base: (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)(''),
  linkActiveClass: 'active',
  routes: [{
    path: '/:index(index.php/)?settings/users',
    component: Users,
    props: true,
    name: 'users',
    children: [{
      path: ':selectedGroup',
      name: 'group',
      component: Users
    }]
  }, {
    path: '/:index(index.php/)?settings/apps',
    component: Apps,
    props: true,
    name: 'apps',
    children: [{
      path: ':category',
      name: 'apps-category',
      component: Apps,
      children: [{
        path: ':id',
        name: 'apps-details',
        component: Apps
      }]
    }]
  }]
}));

/***/ }),

/***/ "./apps/settings/src/store/api.js":
/*!****************************************!*\
  !*** ./apps/settings/src/store/api.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/password-confirmation */ "./node_modules/@nextcloud/password-confirmation/dist/main.js");
/* harmony import */ var _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author Christoph Wurst <christoph@winzerhof-wurst.at>
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author Julius Härtl <jus@bitgrid.net>
 * @author Roeland Jago Douma <roeland@famdouma.nl>
 * @author Sujith Haridasan <sujith.h@gmail.com>
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



var sanitize = function sanitize(url) {
  return url.replace(/\/$/, ''); // Remove last url slash
};

/* harmony default export */ __webpack_exports__["default"] = ({
  /**
   * This Promise is used to chain a request that require an admin password confirmation
   * Since chaining Promise have a very precise behavior concerning catch and then,
   * you'll need to be careful when using it.
   * e.g
   * // store
   * action(context) {
   *   return api.requireAdmin().then((response) => {
   *     return api.get('url')
   *       .then((response) => {API success})
   *       .catch((error) => {API failure});
   *   }).catch((error) => {requireAdmin failure});
   * }
   * // vue
   * this.$store.dispatch('action').then(() => {always executed})
   *
   * Since Promise.then().catch().then() will always execute the last then
   * this.$store.dispatch('action').then will always be executed
   *
   * If you want requireAdmin failure to also catch the API request failure
   * you will need to throw a new error in the api.get.catch()
   *
   * e.g
   * api.requireAdmin().then((response) => {
   *   api.get('url')
   *     .then((response) => {API success})
   *     .catch((error) => {throw error;});
   * }).catch((error) => {requireAdmin OR API failure});
   *
   * @return {Promise}
   */
  requireAdmin: function requireAdmin() {
    return _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_1___default()();
  },
  get: function get(url, options) {
    return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(sanitize(url), options);
  },
  post: function post(url, data) {
    return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(sanitize(url), data);
  },
  patch: function patch(url, data) {
    return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].patch(sanitize(url), data);
  },
  put: function put(url, data) {
    return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].put(sanitize(url), data);
  },
  delete: function _delete(url, data) {
    return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](sanitize(url), {
      params: data
    });
  }
});

/***/ }),

/***/ "./apps/settings/src/store/apps.js":
/*!*****************************************!*\
  !*** ./apps/settings/src/store/apps.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./apps/settings/src/store/api.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/**
 * @copyright Copyright (c) 2018 Julius Härtl <jus@bitgrid.net>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author Julius Härtl <jus@bitgrid.net>
 * @author Roeland Jago Douma <roeland@famdouma.nl>
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



var state = {
  apps: [],
  categories: [],
  updateCount: 0,
  loading: {},
  loadingList: false
};
var mutations = {
  APPS_API_FAILURE: function APPS_API_FAILURE(state, error) {
    OC.Notification.showHtml(t('settings', 'An error occured during the request. Unable to proceed.') + '<br>' + error.error.response.data.data.message, {
      timeout: 7
    });
    console.error(state, error);
  },
  initCategories: function initCategories(state, _ref) {
    var categories = _ref.categories,
        updateCount = _ref.updateCount;
    state.categories = categories;
    state.updateCount = updateCount;
  },
  setUpdateCount: function setUpdateCount(state, updateCount) {
    state.updateCount = updateCount;
  },
  addCategory: function addCategory(state, category) {
    state.categories.push(category);
  },
  appendCategories: function appendCategories(state, categoriesArray) {
    // convert obj to array
    state.categories = categoriesArray;
  },
  setAllApps: function setAllApps(state, apps) {
    state.apps = apps;
  },
  setError: function setError(state, _ref2) {
    var appId = _ref2.appId,
        error = _ref2.error;

    if (!Array.isArray(appId)) {
      appId = [appId];
    }

    appId.forEach(function (_id) {
      var app = state.apps.find(function (app) {
        return app.id === _id;
      });
      app.error = error;
    });
  },
  clearError: function clearError(state, _ref3) {
    var appId = _ref3.appId,
        error = _ref3.error;
    var app = state.apps.find(function (app) {
      return app.id === appId;
    });
    app.error = null;
  },
  enableApp: function enableApp(state, _ref4) {
    var appId = _ref4.appId,
        groups = _ref4.groups;
    var app = state.apps.find(function (app) {
      return app.id === appId;
    });
    app.active = true;
    app.groups = groups;
  },
  disableApp: function disableApp(state, appId) {
    var app = state.apps.find(function (app) {
      return app.id === appId;
    });
    app.active = false;
    app.groups = [];

    if (app.removable) {
      app.canUnInstall = true;
    }
  },
  uninstallApp: function uninstallApp(state, appId) {
    state.apps.find(function (app) {
      return app.id === appId;
    }).active = false;
    state.apps.find(function (app) {
      return app.id === appId;
    }).groups = [];
    state.apps.find(function (app) {
      return app.id === appId;
    }).needsDownload = true;
    state.apps.find(function (app) {
      return app.id === appId;
    }).installed = false;
    state.apps.find(function (app) {
      return app.id === appId;
    }).canUnInstall = false;
    state.apps.find(function (app) {
      return app.id === appId;
    }).canInstall = true;
  },
  updateApp: function updateApp(state, appId) {
    var app = state.apps.find(function (app) {
      return app.id === appId;
    });
    var version = app.update;
    app.update = null;
    app.version = version;
    state.updateCount--;
  },
  resetApps: function resetApps(state) {
    state.apps = [];
  },
  reset: function reset(state) {
    state.apps = [];
    state.categories = [];
    state.updateCount = 0;
  },
  startLoading: function startLoading(state, id) {
    if (Array.isArray(id)) {
      id.forEach(function (_id) {
        vue__WEBPACK_IMPORTED_MODULE_2__["default"].set(state.loading, _id, true);
      });
    } else {
      vue__WEBPACK_IMPORTED_MODULE_2__["default"].set(state.loading, id, true);
    }
  },
  stopLoading: function stopLoading(state, id) {
    if (Array.isArray(id)) {
      id.forEach(function (_id) {
        vue__WEBPACK_IMPORTED_MODULE_2__["default"].set(state.loading, _id, false);
      });
    } else {
      vue__WEBPACK_IMPORTED_MODULE_2__["default"].set(state.loading, id, false);
    }
  }
};
var getters = {
  loading: function loading(state) {
    return function (id) {
      return state.loading[id];
    };
  },
  getCategories: function getCategories(state) {
    return state.categories;
  },
  getAllApps: function getAllApps(state) {
    return state.apps;
  },
  getUpdateCount: function getUpdateCount(state) {
    return state.updateCount;
  }
};
var actions = {
  enableApp: function enableApp(context, _ref5) {
    var appId = _ref5.appId,
        groups = _ref5.groups;
    var apps;

    if (Array.isArray(appId)) {
      apps = appId;
    } else {
      apps = [appId];
    }

    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(function (response) {
      context.commit('startLoading', apps);
      context.commit('startLoading', 'install');
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('settings/apps/enable'), {
        appIds: apps,
        groups: groups
      }).then(function (response) {
        context.commit('stopLoading', apps);
        context.commit('stopLoading', 'install');
        apps.forEach(function (_appId) {
          context.commit('enableApp', {
            appId: _appId,
            groups: groups
          });
        }); // check for server health

        return _api__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('apps/files')).then(function () {
          if (response.data.update_required) {
            OC.dialogs.info(t('settings', 'The app has been enabled but needs to be updated. You will be redirected to the update page in 5 seconds.'), t('settings', 'App update'), function () {
              window.location.reload();
            }, true);
            setTimeout(function () {
              location.reload();
            }, 5000);
          }
        }).catch(function () {
          if (!Array.isArray(appId)) {
            context.commit('setError', {
              appId: apps,
              error: t('settings', 'Error: This app cannot be enabled because it makes the server unstable')
            });
          }
        });
      }).catch(function (error) {
        context.commit('stopLoading', apps);
        context.commit('stopLoading', 'install');
        context.commit('setError', {
          appId: apps,
          error: error.response.data.data.message
        });
        context.commit('APPS_API_FAILURE', {
          appId: appId,
          error: error
        });
      });
    }).catch(function (error) {
      return context.commit('API_FAILURE', {
        appId: appId,
        error: error
      });
    });
  },
  forceEnableApp: function forceEnableApp(context, _ref6) {
    var appId = _ref6.appId,
        groups = _ref6.groups;
    var apps;

    if (Array.isArray(appId)) {
      apps = appId;
    } else {
      apps = [appId];
    }

    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(function () {
      context.commit('startLoading', apps);
      context.commit('startLoading', 'install');
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('settings/apps/force'), {
        appId: appId
      }).then(function (response) {
        // TODO: find a cleaner solution
        location.reload();
      }).catch(function (error) {
        context.commit('stopLoading', apps);
        context.commit('stopLoading', 'install');
        context.commit('setError', {
          appId: apps,
          error: error.response.data.data.message
        });
        context.commit('APPS_API_FAILURE', {
          appId: appId,
          error: error
        });
      });
    }).catch(function (error) {
      return context.commit('API_FAILURE', {
        appId: appId,
        error: error
      });
    });
  },
  disableApp: function disableApp(context, _ref7) {
    var appId = _ref7.appId;
    var apps;

    if (Array.isArray(appId)) {
      apps = appId;
    } else {
      apps = [appId];
    }

    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(function (response) {
      context.commit('startLoading', apps);
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('settings/apps/disable'), {
        appIds: apps
      }).then(function (response) {
        context.commit('stopLoading', apps);
        apps.forEach(function (_appId) {
          context.commit('disableApp', _appId);
        });
        return true;
      }).catch(function (error) {
        context.commit('stopLoading', apps);
        context.commit('APPS_API_FAILURE', {
          appId: appId,
          error: error
        });
      });
    }).catch(function (error) {
      return context.commit('API_FAILURE', {
        appId: appId,
        error: error
      });
    });
  },
  uninstallApp: function uninstallApp(context, _ref8) {
    var appId = _ref8.appId;
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(function (response) {
      context.commit('startLoading', appId);
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)("settings/apps/uninstall/".concat(appId))).then(function (response) {
        context.commit('stopLoading', appId);
        context.commit('uninstallApp', appId);
        return true;
      }).catch(function (error) {
        context.commit('stopLoading', appId);
        context.commit('APPS_API_FAILURE', {
          appId: appId,
          error: error
        });
      });
    }).catch(function (error) {
      return context.commit('API_FAILURE', {
        appId: appId,
        error: error
      });
    });
  },
  updateApp: function updateApp(context, _ref9) {
    var appId = _ref9.appId;
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(function (response) {
      context.commit('startLoading', appId);
      context.commit('startLoading', 'install');
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)("settings/apps/update/".concat(appId))).then(function (response) {
        context.commit('stopLoading', 'install');
        context.commit('stopLoading', appId);
        context.commit('updateApp', appId);
        return true;
      }).catch(function (error) {
        context.commit('stopLoading', appId);
        context.commit('stopLoading', 'install');
        context.commit('APPS_API_FAILURE', {
          appId: appId,
          error: error
        });
      });
    }).catch(function (error) {
      return context.commit('API_FAILURE', {
        appId: appId,
        error: error
      });
    });
  },
  getAllApps: function getAllApps(context) {
    context.commit('startLoading', 'list');
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('settings/apps/list')).then(function (response) {
      context.commit('setAllApps', response.data.apps);
      context.commit('stopLoading', 'list');
      return true;
    }).catch(function (error) {
      return context.commit('API_FAILURE', error);
    });
  },
  getCategories: function getCategories(context) {
    context.commit('startLoading', 'categories');
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('settings/apps/categories')).then(function (response) {
      if (response.data.length > 0) {
        context.commit('appendCategories', response.data);
        context.commit('stopLoading', 'categories');
        return true;
      }

      return false;
    }).catch(function (error) {
      return context.commit('API_FAILURE', error);
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions
});

/***/ }),

/***/ "./apps/settings/src/store/index.js":
/*!******************************************!*\
  !*** ./apps/settings/src/store/index.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users */ "./apps/settings/src/store/users.js");
/* harmony import */ var _apps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apps */ "./apps/settings/src/store/apps.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings */ "./apps/settings/src/store/settings.js");
/* harmony import */ var _oc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oc */ "./apps/settings/src/store/oc.js");
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
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






vue__WEBPACK_IMPORTED_MODULE_4__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_5__["default"]);
var debug = "development" !== 'production';
var mutations = {
  API_FAILURE: function API_FAILURE(state, error) {
    try {
      var message = error.error.response.data.ocs.meta.message;
      OC.Notification.showHtml(t('settings', 'An error occured during the request. Unable to proceed.') + '<br>' + message, {
        timeout: 7
      });
    } catch (e) {
      OC.Notification.showTemporary(t('settings', 'An error occured during the request. Unable to proceed.'));
    }

    console.error(state, error);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_5__.Store({
  modules: {
    users: _users__WEBPACK_IMPORTED_MODULE_0__["default"],
    apps: _apps__WEBPACK_IMPORTED_MODULE_1__["default"],
    settings: _settings__WEBPACK_IMPORTED_MODULE_2__["default"],
    oc: _oc__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  strict: debug,
  mutations: mutations
}));

/***/ }),

/***/ "./apps/settings/src/store/oc.js":
/*!***************************************!*\
  !*** ./apps/settings/src/store/oc.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./apps/settings/src/store/api.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author Roeland Jago Douma <roeland@famdouma.nl>
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


var state = {};
var mutations = {};
var getters = {};
var actions = {
  /**
   * Set application config in database
   *
   * @param {object} context store context
   * @param {object} options destructuring object
   * @param {string} options.app Application name
   * @param {boolean} options.key Config key
   * @param {boolean} options.value Value to set
   * @return {Promise}
   */
  setAppConfig: function setAppConfig(context, _ref) {
    var app = _ref.app,
        key = _ref.key,
        value = _ref.value;
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(function (response) {
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateOcsUrl)('apps/provisioning_api/api/v1/config/apps/{app}/{key}', {
        app: app,
        key: key
      }), {
        value: value
      }).catch(function (error) {
        throw error;
      });
    }).catch(function (error) {
      return context.commit('API_FAILURE', {
        app: app,
        key: key,
        value: value,
        error: error
      });
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions
});

/***/ }),

/***/ "./apps/settings/src/store/settings.js":
/*!*********************************************!*\
  !*** ./apps/settings/src/store/settings.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
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
var state = {
  serverData: {}
};
var mutations = {
  setServerData: function setServerData(state, data) {
    state.serverData = data;
  }
};
var getters = {
  getServerData: function getServerData(state) {
    return state.serverData;
  }
};
var actions = {};
/* harmony default export */ __webpack_exports__["default"] = ({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions
});

/***/ }),

/***/ "./apps/settings/src/store/users.js":
/*!******************************************!*\
  !*** ./apps/settings/src/store/users.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./apps/settings/src/store/api.js");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author Arthur Schiwon <blizzz@arthur-schiwon.de>
 * @author Christoph Wurst <christoph@winzerhof-wurst.at>
 * @author Daniel Calviño Sánchez <danxuliu@gmail.com>
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author Julius Härtl <jus@bitgrid.net>
 * @author Roeland Jago Douma <roeland@famdouma.nl>
 * @author Vincent Petry <vincent@nextcloud.com>
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




var orderGroups = function orderGroups(groups, orderBy) {
  /* const SORT_USERCOUNT = 1;
   * const SORT_GROUPNAME = 2;
   * https://github.com/nextcloud/server/blob/208e38e84e1a07a49699aa90dc5b7272d24489f0/lib/private/Group/MetaData.php#L34
   */
  if (orderBy === 1) {
    return groups.sort(function (a, b) {
      return a.usercount - a.disabled < b.usercount - b.disabled;
    });
  } else {
    return groups.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
  }
};

var defaults = {
  group: {
    id: '',
    name: '',
    usercount: 0,
    disabled: 0,
    canAdd: true,
    canRemove: true
  }
};
var state = {
  users: [],
  groups: [],
  orderBy: 1,
  minPasswordLength: 0,
  usersOffset: 0,
  usersLimit: 25,
  userCount: 0
};
var mutations = {
  appendUsers: function appendUsers(state, usersObj) {
    // convert obj to array
    var users = state.users.concat(Object.keys(usersObj).map(function (userid) {
      return usersObj[userid];
    }));
    state.usersOffset += state.usersLimit;
    state.users = users;
  },
  setPasswordPolicyMinLength: function setPasswordPolicyMinLength(state, length) {
    state.minPasswordLength = length !== '' ? length : 0;
  },
  initGroups: function initGroups(state, _ref) {
    var groups = _ref.groups,
        orderBy = _ref.orderBy,
        userCount = _ref.userCount;
    state.groups = groups.map(function (group) {
      return Object.assign({}, defaults.group, group);
    });
    state.orderBy = orderBy;
    state.userCount = userCount;
    state.groups = orderGroups(state.groups, state.orderBy);
  },
  addGroup: function addGroup(state, _ref2) {
    var gid = _ref2.gid,
        displayName = _ref2.displayName;

    try {
      if (typeof state.groups.find(function (group) {
        return group.id === gid;
      }) !== 'undefined') {
        return;
      } // extend group to default values


      var group = Object.assign({}, defaults.group, {
        id: gid,
        name: displayName
      });
      state.groups.push(group);
      state.groups = orderGroups(state.groups, state.orderBy);
    } catch (e) {
      console.error('Can\'t create group', e);
    }
  },
  removeGroup: function removeGroup(state, gid) {
    var groupIndex = state.groups.findIndex(function (groupSearch) {
      return groupSearch.id === gid;
    });

    if (groupIndex >= 0) {
      state.groups.splice(groupIndex, 1);
    }
  },
  addUserGroup: function addUserGroup(state, _ref3) {
    var userid = _ref3.userid,
        gid = _ref3.gid;
    var group = state.groups.find(function (groupSearch) {
      return groupSearch.id === gid;
    });
    var user = state.users.find(function (user) {
      return user.id === userid;
    }); // increase count if user is enabled

    if (group && user.enabled && state.userCount > 0) {
      group.usercount++;
    }

    var groups = user.groups;
    groups.push(gid);
    state.groups = orderGroups(state.groups, state.orderBy);
  },
  removeUserGroup: function removeUserGroup(state, _ref4) {
    var userid = _ref4.userid,
        gid = _ref4.gid;
    var group = state.groups.find(function (groupSearch) {
      return groupSearch.id === gid;
    });
    var user = state.users.find(function (user) {
      return user.id === userid;
    }); // lower count if user is enabled

    if (group && user.enabled && state.userCount > 0) {
      group.usercount--;
    }

    var groups = user.groups;
    groups.splice(groups.indexOf(gid), 1);
    state.groups = orderGroups(state.groups, state.orderBy);
  },
  addUserSubAdmin: function addUserSubAdmin(state, _ref5) {
    var userid = _ref5.userid,
        gid = _ref5.gid;
    var groups = state.users.find(function (user) {
      return user.id === userid;
    }).subadmin;
    groups.push(gid);
  },
  removeUserSubAdmin: function removeUserSubAdmin(state, _ref6) {
    var userid = _ref6.userid,
        gid = _ref6.gid;
    var groups = state.users.find(function (user) {
      return user.id === userid;
    }).subadmin;
    groups.splice(groups.indexOf(gid), 1);
  },
  deleteUser: function deleteUser(state, userid) {
    var userIndex = state.users.findIndex(function (user) {
      return user.id === userid;
    });
    state.users.splice(userIndex, 1);
  },
  addUserData: function addUserData(state, response) {
    state.users.push(response.data.ocs.data);
  },
  enableDisableUser: function enableDisableUser(state, _ref7) {
    var userid = _ref7.userid,
        enabled = _ref7.enabled;
    var user = state.users.find(function (user) {
      return user.id === userid;
    });
    user.enabled = enabled; // increment or not

    if (state.userCount > 0) {
      state.groups.find(function (group) {
        return group.id === 'disabled';
      }).usercount += enabled ? -1 : 1;
      state.userCount += enabled ? 1 : -1;
      user.groups.forEach(function (group) {
        // Increment disabled count
        state.groups.find(function (groupSearch) {
          return groupSearch.id === group;
        }).disabled += enabled ? -1 : 1;
      });
    }
  },
  setUserData: function setUserData(state, _ref8) {
    var userid = _ref8.userid,
        key = _ref8.key,
        value = _ref8.value;

    if (key === 'quota') {
      var humanValue = OC.Util.computerFileSize(value);
      state.users.find(function (user) {
        return user.id === userid;
      })[key][key] = humanValue !== null ? humanValue : value;
    } else {
      state.users.find(function (user) {
        return user.id === userid;
      })[key] = value;
    }
  },

  /**
   * Reset users list
   *
   * @param {object} state the store state
   */
  resetUsers: function resetUsers(state) {
    state.users = [];
    state.usersOffset = 0;
  }
};
var getters = {
  getUsers: function getUsers(state) {
    return state.users;
  },
  getGroups: function getGroups(state) {
    return state.groups;
  },
  getSubadminGroups: function getSubadminGroups(state) {
    // Can't be subadmin of admin or disabled
    return state.groups.filter(function (group) {
      return group.id !== 'admin' && group.id !== 'disabled';
    });
  },
  getPasswordPolicyMinLength: function getPasswordPolicyMinLength(state) {
    return state.minPasswordLength;
  },
  getUsersOffset: function getUsersOffset(state) {
    return state.usersOffset;
  },
  getUsersLimit: function getUsersLimit(state) {
    return state.usersLimit;
  },
  getUserCount: function getUserCount(state) {
    return state.userCount;
  }
};
var CancelToken = _nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__["default"].CancelToken;
var searchRequestCancelSource = null;
var actions = {
  /**
   * Get all users with full details
   *
   * @param {object} context store context
   * @param {object} options destructuring object
   * @param {number} options.offset List offset to request
   * @param {number} options.limit List number to return from offset
   * @param {string} options.search Search amongst users
   * @param {string} options.group Get users from group
   * @return {Promise}
   */
  getUsers: function getUsers(context, _ref9) {
    var offset = _ref9.offset,
        limit = _ref9.limit,
        search = _ref9.search,
        group = _ref9.group;

    if (searchRequestCancelSource) {
      searchRequestCancelSource.cancel('Operation canceled by another search request.');
    }

    searchRequestCancelSource = CancelToken.source();
    search = typeof search === 'string' ? search : '';
    group = typeof group === 'string' ? group : '';

    if (group !== '') {
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/groups/{group}/users/details?offset={offset}&limit={limit}&search={search}', {
        group: encodeURIComponent(group),
        offset: offset,
        limit: limit,
        search: search
      }), {
        cancelToken: searchRequestCancelSource.token
      }).then(function (response) {
        var usersCount = Object.keys(response.data.ocs.data.users).length;

        if (usersCount > 0) {
          context.commit('appendUsers', response.data.ocs.data.users);
        }

        return usersCount;
      }).catch(function (error) {
        if (!_nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__["default"].isCancel(error)) {
          context.commit('API_FAILURE', error);
        }
      });
    }

    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/details?offset={offset}&limit={limit}&search={search}', {
      offset: offset,
      limit: limit,
      search: search
    }), {
      cancelToken: searchRequestCancelSource.token
    }).then(function (response) {
      var usersCount = Object.keys(response.data.ocs.data.users).length;

      if (usersCount > 0) {
        context.commit('appendUsers', response.data.ocs.data.users);
      }

      return usersCount;
    }).catch(function (error) {
      if (!_nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__["default"].isCancel(error)) {
        context.commit('API_FAILURE', error);
      }
    });
  },
  getGroups: function getGroups(context, _ref10) {
    var offset = _ref10.offset,
        limit = _ref10.limit,
        search = _ref10.search;
    search = typeof search === 'string' ? search : '';
    var limitParam = limit === -1 ? '' : "&limit=".concat(limit);
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/groups?offset={offset}&search={search}', {
      offset: offset,
      search: search
    }) + limitParam).then(function (response) {
      if (Object.keys(response.data.ocs.data.groups).length > 0) {
        response.data.ocs.data.groups.forEach(function (group) {
          context.commit('addGroup', {
            gid: group,
            displayName: group
          });
        });
        return true;
      }

      return false;
    }).catch(function (error) {
      return context.commit('API_FAILURE', error);
    });
  },

  /**
   * Get all users with full details
   *
   * @param {object} context store context
   * @param {object} options destructuring object
   * @param {number} options.offset List offset to request
   * @param {number} options.limit List number to return from offset
   * @param {string} options.search -
   * @return {Promise}
   */
  getUsersFromList: function getUsersFromList(context, _ref11) {
    var offset = _ref11.offset,
        limit = _ref11.limit,
        search = _ref11.search;
    search = typeof search === 'string' ? search : '';
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/details?offset={offset}&limit={limit}&search={search}', {
      offset: offset,
      limit: limit,
      search: search
    })).then(function (response) {
      if (Object.keys(response.data.ocs.data.users).length > 0) {
        context.commit('appendUsers', response.data.ocs.data.users);
        return true;
      }

      return false;
    }).catch(function (error) {
      return context.commit('API_FAILURE', error);
    });
  },

  /**
   * Get all users with full details from a groupid
   *
   * @param {object} context store context
   * @param {object} options destructuring object
   * @param {number} options.offset List offset to request
   * @param {number} options.limit List number to return from offset
   * @param {string} options.groupid -
   * @return {Promise}
   */
  getUsersFromGroup: function getUsersFromGroup(context, _ref12) {
    var groupid = _ref12.groupid,
        offset = _ref12.offset,
        limit = _ref12.limit;
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{groupId}/details?offset={offset}&limit={limit}', {
      groupId: encodeURIComponent(groupid),
      offset: offset,
      limit: limit
    })).then(function (response) {
      return context.commit('getUsersFromList', response.data.ocs.data.users);
    }).catch(function (error) {
      return context.commit('API_FAILURE', error);
    });
  },
  getPasswordPolicyMinLength: function getPasswordPolicyMinLength(context) {
    if (OC.getCapabilities().password_policy && OC.getCapabilities().password_policy.minLength) {
      context.commit('setPasswordPolicyMinLength', OC.getCapabilities().password_policy.minLength);
      return OC.getCapabilities().password_policy.minLength;
    }

    return false;
  },

  /**
   * Add group
   *
   * @param {object} context store context
   * @param {string} gid Group id
   * @return {Promise}
   */
  addGroup: function addGroup(context, gid) {
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(function (response) {
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/groups'), {
        groupid: gid
      }).then(function (response) {
        context.commit('addGroup', {
          gid: gid,
          displayName: gid
        });
        return {
          gid: gid,
          displayName: gid
        };
      }).catch(function (error) {
        throw error;
      });
    }).catch(function (error) {
      context.commit('API_FAILURE', {
        gid: gid,
        error: error
      }); // let's throw one more time to prevent the view
      // from adding the user to a group that doesn't exists

      throw error;
    });
  },

  /**
   * Remove group
   *
   * @param {object} context store context
   * @param {string} gid Group id
   * @return {Promise}
   */
  removeGroup: function removeGroup(context, gid) {
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(function (response) {
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/groups/{groupId}', {
        groupId: encodeURIComponent(gid)
      })).then(function (response) {
        return context.commit('removeGroup', gid);
      }).catch(function (error) {
        throw error;
      });
    }).catch(function (error) {
      return context.commit('API_FAILURE', {
        gid: gid,
        error: error
      });
    });
  },

  /**
   * Add user to group
   *
   * @param {object} context store context
   * @param {object} options destructuring object
   * @param {string} options.userid User id
   * @param {string} options.gid Group id
   * @return {Promise}
   */
  addUserGroup: function addUserGroup(context, _ref13) {
    var userid = _ref13.userid,
        gid = _ref13.gid;
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(function (response) {
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{userid}/groups', {
        userid: userid
      }), {
        groupid: gid
      }).then(function (response) {
        return context.commit('addUserGroup', {
          userid: userid,
          gid: gid
        });
      }).catch(function (error) {
        throw error;
      });
    }).catch(function (error) {
      return context.commit('API_FAILURE', {
        userid: userid,
        error: error
      });
    });
  },

  /**
   * Remove user from group
   *
   * @param {object} context store context
   * @param {object} options destructuring object
   * @param {string} options.userid User id
   * @param {string} options.gid Group id
   * @return {Promise}
   */
  removeUserGroup: function removeUserGroup(context, _ref14) {
    var userid = _ref14.userid,
        gid = _ref14.gid;
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(function (response) {
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{userid}/groups', {
        userid: userid
      }), {
        groupid: gid
      }).then(function (response) {
        return context.commit('removeUserGroup', {
          userid: userid,
          gid: gid
        });
      }).catch(function (error) {
        throw error;
      });
    }).catch(function (error) {
      context.commit('API_FAILURE', {
        userid: userid,
        error: error
      }); // let's throw one more time to prevent
      // the view from removing the user row on failure

      throw error;
    });
  },

  /**
   * Add user to group admin
   *
   * @param {object} context store context
   * @param {object} options destructuring object
   * @param {string} options.userid User id
   * @param {string} options.gid Group id
   * @return {Promise}
   */
  addUserSubAdmin: function addUserSubAdmin(context, _ref15) {
    var userid = _ref15.userid,
        gid = _ref15.gid;
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(function (response) {
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{userid}/subadmins', {
        userid: userid
      }), {
        groupid: gid
      }).then(function (response) {
        return context.commit('addUserSubAdmin', {
          userid: userid,
          gid: gid
        });
      }).catch(function (error) {
        throw error;
      });
    }).catch(function (error) {
      return context.commit('API_FAILURE', {
        userid: userid,
        error: error
      });
    });
  },

  /**
   * Remove user from group admin
   *
   * @param {object} context store context
   * @param {object} options destructuring object
   * @param {string} options.userid User id
   * @param {string} options.gid Group id
   * @return {Promise}
   */
  removeUserSubAdmin: function removeUserSubAdmin(context, _ref16) {
    var userid = _ref16.userid,
        gid = _ref16.gid;
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(function (response) {
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{userid}/subadmins', {
        userid: userid
      }), {
        groupid: gid
      }).then(function (response) {
        return context.commit('removeUserSubAdmin', {
          userid: userid,
          gid: gid
        });
      }).catch(function (error) {
        throw error;
      });
    }).catch(function (error) {
      return context.commit('API_FAILURE', {
        userid: userid,
        error: error
      });
    });
  },

  /**
   * Mark all user devices for remote wipe
   *
   * @param {object} context store context
   * @param {string} userid User id
   * @return {Promise}
   */
  wipeUserDevices: function wipeUserDevices(context, userid) {
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(function (response) {
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{userid}/wipe', {
        userid: userid
      })).catch(function (error) {
        throw error;
      });
    }).catch(function (error) {
      return context.commit('API_FAILURE', {
        userid: userid,
        error: error
      });
    });
  },

  /**
   * Delete a user
   *
   * @param {object} context store context
   * @param {string} userid User id
   * @return {Promise}
   */
  deleteUser: function deleteUser(context, userid) {
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(function (response) {
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{userid}', {
        userid: userid
      })).then(function (response) {
        return context.commit('deleteUser', userid);
      }).catch(function (error) {
        throw error;
      });
    }).catch(function (error) {
      return context.commit('API_FAILURE', {
        userid: userid,
        error: error
      });
    });
  },

  /**
   * Add a user
   *
   * @param {object} context store context
   * @param {Function} context.commit -
   * @param {Function} context.dispatch -
   * @param {object} options destructuring object
   * @param {string} options.userid User id
   * @param {string} options.password User password
   * @param {string} options.displayName User display name
   * @param {string} options.email User email
   * @param {string} options.groups User groups
   * @param {string} options.subadmin User subadmin groups
   * @param {string} options.quota User email
   * @param {string} options.language User language
   * @return {Promise}
   */
  addUser: function addUser(_ref17, _ref18) {
    var commit = _ref17.commit,
        dispatch = _ref17.dispatch;
    var userid = _ref18.userid,
        password = _ref18.password,
        displayName = _ref18.displayName,
        email = _ref18.email,
        groups = _ref18.groups,
        subadmin = _ref18.subadmin,
        quota = _ref18.quota,
        language = _ref18.language;
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(function (response) {
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users'), {
        userid: userid,
        password: password,
        displayName: displayName,
        email: email,
        groups: groups,
        subadmin: subadmin,
        quota: quota,
        language: language
      }).then(function (response) {
        return dispatch('addUserData', userid || response.data.ocs.data.id);
      }).catch(function (error) {
        throw error;
      });
    }).catch(function (error) {
      commit('API_FAILURE', {
        userid: userid,
        error: error
      });
      throw error;
    });
  },

  /**
   * Get user data and commit addition
   *
   * @param {object} context store context
   * @param {string} userid User id
   * @return {Promise}
   */
  addUserData: function addUserData(context, userid) {
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(function (response) {
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{userid}', {
        userid: userid
      })).then(function (response) {
        return context.commit('addUserData', response);
      }).catch(function (error) {
        throw error;
      });
    }).catch(function (error) {
      return context.commit('API_FAILURE', {
        userid: userid,
        error: error
      });
    });
  },

  /**
   * Enable or disable user
   *
   * @param {object} context store context
   * @param {object} options destructuring object
   * @param {string} options.userid User id
   * @param {boolean} options.enabled User enablement status
   * @return {Promise}
   */
  enableDisableUser: function enableDisableUser(context, _ref19) {
    var userid = _ref19.userid,
        _ref19$enabled = _ref19.enabled,
        enabled = _ref19$enabled === void 0 ? true : _ref19$enabled;
    var userStatus = enabled ? 'enable' : 'disable';
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(function (response) {
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"].put((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{userid}/{userStatus}', {
        userid: userid,
        userStatus: userStatus
      })).then(function (response) {
        return context.commit('enableDisableUser', {
          userid: userid,
          enabled: enabled
        });
      }).catch(function (error) {
        throw error;
      });
    }).catch(function (error) {
      return context.commit('API_FAILURE', {
        userid: userid,
        error: error
      });
    });
  },

  /**
   * Edit user data
   *
   * @param {object} context store context
   * @param {object} options destructuring object
   * @param {string} options.userid User id
   * @param {string} options.key User field to edit
   * @param {string} options.value Value of the change
   * @return {Promise}
   */
  setUserData: function setUserData(context, _ref20) {
    var userid = _ref20.userid,
        key = _ref20.key,
        value = _ref20.value;
    var allowedEmpty = ['email', 'displayname'];

    if (['email', 'language', 'quota', 'displayname', 'password'].indexOf(key) !== -1) {
      // We allow empty email or displayname
      if (typeof value === 'string' && (allowedEmpty.indexOf(key) === -1 && value.length > 0 || allowedEmpty.indexOf(key) !== -1)) {
        return _api__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(function (response) {
          return _api__WEBPACK_IMPORTED_MODULE_0__["default"].put((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{userid}', {
            userid: userid
          }), {
            key: key,
            value: value
          }).then(function (response) {
            return context.commit('setUserData', {
              userid: userid,
              key: key,
              value: value
            });
          }).catch(function (error) {
            throw error;
          });
        }).catch(function (error) {
          return context.commit('API_FAILURE', {
            userid: userid,
            error: error
          });
        });
      }
    }

    return Promise.reject(new Error('Invalid request data'));
  },

  /**
   * Send welcome mail
   *
   * @param {object} context store context
   * @param {string} userid User id
   * @return {Promise}
   */
  sendWelcomeMail: function sendWelcomeMail(context, userid) {
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(function (response) {
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{userid}/welcome', {
        userid: userid
      })).then(function (response) {
        return true;
      }).catch(function (error) {
        throw error;
      });
    }).catch(function (error) {
      return context.commit('API_FAILURE', {
        userid: userid,
        error: error
      });
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/App.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
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
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'App',
  beforeMount: function beforeMount() {
    // importing server data into the store
    var serverDataElmt = document.getElementById('serverData');

    if (serverDataElmt !== null) {
      this.$store.commit('setServerData', JSON.parse(document.getElementById('serverData').dataset.server));
    }
  }
});

/***/ }),

/***/ "./apps/settings/src/App.vue":
/*!***********************************!*\
  !*** ./apps/settings/src/App.vue ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_f468116e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=f468116e& */ "./apps/settings/src/App.vue?vue&type=template&id=f468116e&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./apps/settings/src/App.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_f468116e___WEBPACK_IMPORTED_MODULE_0__.render,
  _App_vue_vue_type_template_id_f468116e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./apps/settings/src/App.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./apps/settings/src/App.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/App.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/App.vue?vue&type=template&id=f468116e&":
/*!******************************************************************!*\
  !*** ./apps/settings/src/App.vue?vue&type=template&id=f468116e& ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f468116e___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f468116e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f468116e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=template&id=f468116e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/App.vue?vue&type=template&id=f468116e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/App.vue?vue&type=template&id=f468116e&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/App.vue?vue&type=template&id=f468116e& ***!
  \*********************************************************************************************************************************************************************************************************/
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
  return _c("router-view")
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "-" + chunkId + ".js?v=" + {"settings-users":"33f01b530adb81dbd00a","settings-apps":"153427c965591f0a912f"}[chunkId] + "";
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
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "nextcloud:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 			"settings-vue-settings-apps-users-management": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], function() { return __webpack_require__("./apps/settings/src/main-apps-users-management.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=settings-vue-settings-apps-users-management.js.map?v=85cee300a05fa485505f