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
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./apps/comments/src/comments.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/comments/src/activitytabviewplugin.js":
/*!****************************************************!*\
  !*** ./apps/comments/src/activitytabviewplugin.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2016
 *
 * @author Joas Schilling <coding@schilljs.com>
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
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
(function () {
  OCA.Comments.ActivityTabViewPlugin = {
    /**
     * Prepare activity for display
     *
     * @param {OCA.Activity.ActivityModel} model for this activity
     * @param {jQuery} $el jQuery handle for this activity
     * @param {string} view The view that displayes this activity
     */
    prepareModelForDisplay: function prepareModelForDisplay(model, $el, view) {
      if (model.get('app') !== 'comments' || model.get('type') !== 'comments') {
        return;
      }

      if (view === 'ActivityTabView') {
        $el.addClass('comment');

        if (model.get('message') && this._isLong(model.get('message'))) {
          $el.addClass('collapsed');
          var $overlay = $('<div>').addClass('message-overlay');
          $el.find('.activitymessage').after($overlay);
          $el.on('click', this._onClickCollapsedComment);
        }
      }
    },

    /*
     * Copy of CommentsTabView._onClickComment()
     */
    _onClickCollapsedComment: function _onClickCollapsedComment(ev) {
      var $row = $(ev.target);

      if (!$row.is('.comment')) {
        $row = $row.closest('.comment');
      }

      $row.removeClass('collapsed');
    },

    /*
     * Copy of CommentsTabView._isLong()
     */
    _isLong: function _isLong(message) {
      return message.length > 250 || (message.match(/\n/g) || []).length > 1;
    }
  };
})();

OC.Plugins.register('OCA.Activity.RenderingPlugins', OCA.Comments.ActivityTabViewPlugin);

/***/ }),

/***/ "./apps/comments/src/app.js":
/*!**********************************!*\
  !*** ./apps/comments/src/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2016 Vincent Petry <pvince81@owncloud.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author Vincent Petry <vincent@nextcloud.com>
 *
 * @license GNU AGPL version 3 or any later version
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
(function () {
  if (!OCA.Comments) {
    /**
     * @namespace
     */
    OCA.Comments = {};
  }
})();

/***/ }),

/***/ "./apps/comments/src/comments.js":
/*!***************************************!*\
  !*** ./apps/comments/src/comments.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./apps/comments/src/app.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates */ "./apps/comments/src/templates.js");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_templates__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _filesplugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filesplugin */ "./apps/comments/src/filesplugin.js");
/* harmony import */ var _filesplugin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_filesplugin__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _activitytabviewplugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activitytabviewplugin */ "./apps/comments/src/activitytabviewplugin.js");
/* harmony import */ var _activitytabviewplugin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_activitytabviewplugin__WEBPACK_IMPORTED_MODULE_3__);
/**
 * @copyright Copyright (c) 2016 Roeland Jago Douma <roeland@famdouma.nl>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author Roeland Jago Douma <roeland@famdouma.nl>
 *
 * @license GNU AGPL version 3 or any later version
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




window.OCA.Comments = OCA.Comments;

/***/ }),

/***/ "./apps/comments/src/filesplugin.js":
/*!******************************************!*\
  !*** ./apps/comments/src/filesplugin.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2016 Vincent Petry <pvince81@owncloud.com>
 *
 * @author Joas Schilling <coding@schilljs.com>
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author Michael Jobst <mjobst+github@tecratech.de>
 * @author Roeland Jago Douma <roeland@famdouma.nl>
 * @author Vincent Petry <vincent@nextcloud.com>
 *
 * @license GNU AGPL version 3 or any later version
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
(function () {
  _.extend(OC.Files.Client, {
    PROPERTY_COMMENTS_UNREAD: '{' + OC.Files.Client.NS_OWNCLOUD + '}comments-unread'
  });

  OCA.Comments = _.extend({}, OCA.Comments);

  if (!OCA.Comments) {
    /**
     * @namespace
     */
    OCA.Comments = {};
  }
  /**
   * @namespace
   */


  OCA.Comments.FilesPlugin = {
    ignoreLists: ['trashbin', 'files.public'],
    _formatCommentCount: function _formatCommentCount(count) {
      return OCA.Comments.Templates.filesplugin({
        count: count,
        countMessage: n('comments', '%n unread comment', '%n unread comments', count),
        iconUrl: OC.imagePath('core', 'actions/comment')
      });
    },
    attach: function attach(fileList) {
      var self = this;

      if (this.ignoreLists.indexOf(fileList.id) >= 0) {
        return;
      }

      var oldGetWebdavProperties = fileList._getWebdavProperties;

      fileList._getWebdavProperties = function () {
        var props = oldGetWebdavProperties.apply(this, arguments);
        props.push(OC.Files.Client.PROPERTY_COMMENTS_UNREAD);
        return props;
      };

      fileList.filesClient.addFileInfoParser(function (response) {
        var data = {};
        var props = response.propStat[0].properties;
        var commentsUnread = props[OC.Files.Client.PROPERTY_COMMENTS_UNREAD];

        if (!_.isUndefined(commentsUnread) && commentsUnread !== '') {
          data.commentsUnread = parseInt(commentsUnread, 10);
        }

        return data;
      });
      fileList.$el.addClass('has-comments');
      var oldCreateRow = fileList._createRow;

      fileList._createRow = function (fileData) {
        var $tr = oldCreateRow.apply(this, arguments);

        if (fileData.commentsUnread) {
          $tr.attr('data-comments-unread', fileData.commentsUnread);
        }

        return $tr;
      }; // register "comment" action for reading comments


      fileList.fileActions.registerAction({
        name: 'Comment',
        displayName: function displayName(context) {
          if (context && context.$file) {
            var unread = parseInt(context.$file.data('comments-unread'), 10);

            if (unread >= 0) {
              return n('comments', '1 new comment', '{unread} new comments', unread, {
                unread: unread
              });
            }
          }

          return t('comments', 'Comment');
        },
        mime: 'all',
        order: -140,
        iconClass: 'icon-comment',
        permissions: OC.PERMISSION_READ,
        type: OCA.Files.FileActions.TYPE_INLINE,
        render: function render(actionSpec, isDefault, context) {
          var $file = context.$file;
          var unreadComments = $file.data('comments-unread');

          if (unreadComments) {
            var $actionLink = $(self._formatCommentCount(unreadComments));
            context.$file.find('a.name>span.fileactions').append($actionLink);
            return $actionLink;
          }

          return '';
        },
        actionHandler: function actionHandler(fileName, context) {
          context.$file.find('.action-comment').tooltip('hide'); // open sidebar in comments section

          OCA.Files.Sidebar.setActiveTab('comments');
          OCA.Files.Sidebar.open(context.dir + '/' + fileName);
        }
      }); // add attribute to "elementToFile"

      var oldElementToFile = fileList.elementToFile;

      fileList.elementToFile = function ($el) {
        var fileInfo = oldElementToFile.apply(this, arguments);
        var commentsUnread = $el.data('comments-unread');

        if (commentsUnread) {
          fileInfo.commentsUnread = commentsUnread;
        }

        return fileInfo;
      };
    }
  };
})();

OC.Plugins.register('OCA.Files.FileList', OCA.Comments.FilesPlugin);

/***/ }),

/***/ "./apps/comments/src/templates.js":
/*!****************************************!*\
  !*** ./apps/comments/src/templates.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function () {
  var template = Handlebars.template,
      templates = OCA.Comments.Templates = OCA.Comments.Templates || {};
  templates['filesplugin'] = template({
    "compiler": [8, ">= 4.3.0"],
    "main": function main(container, depth0, helpers, partials, data) {
      var helper,
          alias1 = depth0 != null ? depth0 : container.nullContext || {},
          alias2 = container.hooks.helperMissing,
          alias3 = "function",
          alias4 = container.escapeExpression,
          lookupProperty = container.lookupProperty || function (parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }

        return undefined;
      };

      return "<a class=\"action action-comment permanent\" title=\"" + alias4((helper = (helper = lookupProperty(helpers, "countMessage") || (depth0 != null ? lookupProperty(depth0, "countMessage") : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
        "name": "countMessage",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 1,
            "column": 50
          },
          "end": {
            "line": 1,
            "column": 66
          }
        }
      }) : helper)) + "\" href=\"#\">\n	<img class=\"svg\" src=\"" + alias4((helper = (helper = lookupProperty(helpers, "iconUrl") || (depth0 != null ? lookupProperty(depth0, "iconUrl") : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
        "name": "iconUrl",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 2,
            "column": 23
          },
          "end": {
            "line": 2,
            "column": 34
          }
        }
      }) : helper)) + "\"/>\n</a>\n";
    },
    "useData": true
  });
})();

/***/ })

/******/ });
//# sourceMappingURL=comments.js.map