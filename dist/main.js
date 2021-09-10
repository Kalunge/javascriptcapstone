/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nheader {\\n  width: 100%;\\n  justify-content: space-between;\\n  align-items: center;\\n  height: 80px;\\n  display: flex;\\n  background-color: aquamarine;\\n  padding: 0 6rem;\\n  margin: auto;\\n}\\n\\nul {\\n  display: flex;\\n  margin-top: 1.5%;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\nli {\\n  list-style: none;\\n}\\n\\n.logo {\\n  width: 5rem;\\n  height: 100%;\\n}\\n\\n.logo-img {\\n  width: 100%;\\n  height: 100%;\\n}\\n\\nmain {\\n  width: 95%;\\n  margin: auto;\\n  flex-wrap: wrap;\\n}\\n\\n.list-item {\\n  width: 30vw;\\n  min-height: 20rem;\\n  margin: auto;\\n  margin-bottom: 20px;\\n}\\n\\n.item-image {\\n  margin: auto;\\n  width: 70%;\\n}\\n\\n.item-text {\\n  text-align: center;\\n  margin-top: 10px;\\n}\\n\\n.item-text p {\\n  margin: 0;\\n}\\n\\n.list-item img {\\n  width: 100%;\\n}\\n\\n.comment-btn {\\n  margin-top: 1.5rem;\\n}\\n\\nfooter {\\n  border: 1px solid black;\\n  height: 12%;\\n  padding-top: 17px;\\n  padding-left: 4rem;\\n  margin-top: 50px;\\n  background-color: darkcyan;\\n  color: #fff;\\n}\\n\\n.modal-body img {\\n  height: 300px;\\n  margin-left: 10%;\\n  max-width: 100%;\\n  border: 2px solid black;\\n}\\n\\n.items {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.modal-body {\\n  border: solid 3px black;\\n}\\n\\n.btn-close {\\n  font-size: 20px;\\n}\\n\\ninput {\\n  width: 60%;\\n}\\n\\ntextarea {\\n  width: 100%;\\n}\\n\\n.form {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  margin-top: 3%;\\n}\\n\\n.form button {\\n  margin-left: 1%;\\n}\\n\\n.form h3 {\\n  margin-left: 17%;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/addComment.js":
/*!***************************!*\
  !*** ./src/addComment.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (formData) => {\n  try {\n    const res = await fetch(\n      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8WhiXHgGMaGrsfo6vYsR/comments/',\n      {\n        method: 'post',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify(formData),\n      },\n    );\n    await res.json();\n\n    return true;\n  } catch (error) {\n    return error;\n  }\n});\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/addComment.js?");

/***/ }),

/***/ "./src/alert.js":
/*!**********************!*\
  !*** ./src/alert.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addAlert = (field, message) => {\n  const body = document.querySelector('form');\n  const section = document.createElement('div');\n  section.innerHTML = `<div class=\"alert alert-${message}\" role=\"alert\">\n  ${field} is required\n</div>`;\n  body.appendChild(section);\n  setTimeout(() => body.removeChild(section), 1500);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addAlert);\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/alert.js?");

/***/ }),

/***/ "./src/comments.js":
/*!*************************!*\
  !*** ./src/comments.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getMealById_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getMealById.js */ \"./src/getMealById.js\");\n/* harmony import */ var _addComment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addComment.js */ \"./src/addComment.js\");\n/* harmony import */ var _alert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.js */ \"./src/alert.js\");\n/* harmony import */ var _displayComments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayComments.js */ \"./src/displayComments.js\");\n/* harmony import */ var _commentsCounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./commentsCounter.js */ \"./src/commentsCounter.js\");\n/* eslint-disable consistent-return */\n\n\n\n\n\n\nconst modalBody = document.querySelector('.modal-body');\n\nconst addModal = async (id) => {\n  const meal = await (0,_getMealById_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id);\n  const itemId = meal.idMeal;\n  const image = meal.strMealThumb;\n  const mealName = meal.strMeal;\n  const img = document.createElement('img');\n  img.src = image;\n  const p = document.createElement('h2');\n  p.classList.add('name');\n  p.innerHTML = mealName;\n  const category = document.createElement('p');\n  category.innerHTML = `This meal belongs to <strong>${meal.strCategory}</strong> Category`;\n  const recipe = document.createElement('p');\n  const Instructions = meal.strInstructions.substring(0, 130);\n  recipe.innerHTML = `<strong>Instructions for making</strong> ${Instructions}  =>FIND MORE AT  <a target=\"_blank\" href=${meal.strYoutube}>Youtube</a>`;\n  modalBody.appendChild(img);\n  const div = document.createElement('div');\n  div.classList.add('items');\n  div.appendChild(p);\n  div.appendChild(category);\n  div.appendChild(recipe);\n  const headingFour = document.createElement('h4');\n  const comments = await (0,_displayComments_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(id);\n  headingFour.innerHTML = `comments (${(0,_commentsCounter_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(comments)})`;\n  div.appendChild(headingFour);\n  comments.forEach((comment) => {\n    const p = document.createElement('p');\n    p.classList.add('comment-p');\n    p.innerHTML = `${comment.creation_date} ${comment.username}: ${comment.comment}`;\n    return div.appendChild(p);\n  });\n  modalBody.appendChild(div);\n  const form = document.createElement('form');\n  form.setAttribute('id', `${itemId}`);\n  form.setAttribute('class', 'form');\n  form.innerHTML = `<div class=\"mb-3\">\n               <h3>Add a comment</h3>\n               <input type=\"text\" class=\"form-control  mt-3 py-2\" id=\"name\" placeholder=\"Your Name\">\n             </div>\n             <div class=\"mb-3\">\n               <textarea type=\"text\" placeholder=\"Your Insights\" class=\"form-control py-2\" id=\"comment\"></textarea>\n             </div>\n             <button type=\"submit\" id=\"button\" class=\"btn btn-dark right button\">Comment</button>`;\n  modalBody.appendChild(form);\n  form.addEventListener('submit', async (e) => {\n    e.preventDefault();\n    const username = document.querySelector('#name');\n    const comment = document.querySelector('#comment');\n    const formData = {\n      item_id: e.target.id,\n      username: username.value,\n      comment: comment.value,\n    };\n    if (username.value === '') return (0,_alert_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('name', 'danger');\n    if (comment.value === '') return (0,_alert_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('comment', 'danger');\n    if (await (0,_addComment_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(formData)) {\n      comment.value = '';\n      username.value = '';\n      (0,_alert_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('Comment added succesfully', 'success');\n      const comments = await (0,_displayComments_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(id);\n      headingFour.innerHTML = `comments (${(0,_commentsCounter_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(comments)})`;\n      div.replaceChild(headingFour, headingFour);\n      [...div.children].forEach((child) => {\n        if (child.className === 'comment-p') {\n          div.removeChild(child);\n        }\n      });\n      comments.forEach((comment) => {\n        const newp = document.createElement('p');\n        newp.innerHTML = `${comment.creation_date} ${comment.username}: ${comment.comment}`;\n        return div.appendChild(newp);\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addModal);\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/comments.js?");

/***/ }),

/***/ "./src/commentsCounter.js":
/*!********************************!*\
  !*** ./src/commentsCounter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentsCounter = (comments) => comments.length;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsCounter);\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/commentsCounter.js?");

/***/ }),

/***/ "./src/displayComments.js":
/*!********************************!*\
  !*** ./src/displayComments.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayComment = async (id) => {\n  try {\n    const response = await fetch(\n      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8WhiXHgGMaGrsfo6vYsR/comments?item_id=${id}`,\n    );\n    const result = await response.json();\n    return result;\n  } catch (error) {\n    return false;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayComment);\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/displayComments.js?");

/***/ }),

/***/ "./src/getMealById.js":
/*!****************************!*\
  !*** ./src/getMealById.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getMeal = async (id) => {\n  const res = await fetch(\n    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,\n  );\n  const result = await res.json();\n  return result.meals[0];\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMeal);\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/getMealById.js?");

/***/ }),

/***/ "./src/getlikes.js":
/*!*************************!*\
  !*** ./src/getlikes.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getLikes = async () => {\n  const response = await fetch(\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8WhiXHgGMaGrsfo6vYsR/likes',\n  );\n  return response.json();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikes);\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/getlikes.js?");

/***/ }),

/***/ "./src/getmeals.js":
/*!*************************!*\
  !*** ./src/getmeals.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getMeals = async () => {\n  const response = await fetch(\n    'https://www.themealdb.com/api/json/v1/1/filter.php?a=Chinese',\n  );\n  const result = await response.json();\n  return result.meals;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMeals);\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/getmeals.js?");

/***/ }),

/***/ "./src/homecount.js":
/*!**************************!*\
  !*** ./src/homecount.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst homeCounter = (data) => data.length;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeCounter);\n\n//# sourceURL=webpack://javascriptcapstone/./src/homecount.js?");

/***/ }),

/***/ "./src/homelist.js":
/*!*************************!*\
  !*** ./src/homelist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _postlikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postlikes.js */ \"./src/postlikes.js\");\n/* harmony import */ var _getlikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getlikes.js */ \"./src/getlikes.js\");\n/* harmony import */ var _homecount_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homecount.js */ \"./src/homecount.js\");\n/* eslint-disable no-await-in-loop */\n\n\n\n\nconst mainDiv = document.querySelector('.main-div');\n\nconst likesCount = (target, likesArray, numOfLikes) => {\n  likesArray.forEach((obj) => {\n    if (obj.item_id === target.id) {\n      numOfLikes.innerHTML = `${obj.likes} likes `;\n    }\n  });\n};\n\nconst homeList = async (data) => {\n  const homeCount = document.querySelector('#home-count');\n  homeCount.innerHTML = (0,_homecount_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data);\n\n  for (let i = 0; i <= data.length - 1; i += 1) {\n    const listItem = document.createElement('div');\n    listItem.id = data[i].idMeal;\n    listItem.classList.add('list-item');\n\n    const itemImage = document.createElement('div');\n    itemImage.classList.add('item-image');\n\n    const image = document.createElement('img');\n    image.src = data[i].strMealThumb;\n\n    itemImage.appendChild(image);\n\n    const itemText = document.createElement('div');\n    itemText.classList.add('item-text');\n\n    const mealName = document.createElement('p');\n    mealName.innerHTML = data[i].strMeal;\n\n    const mealLikes = document.createElement('p');\n    const numOfLikes = document.createElement('span');\n    numOfLikes.innerHTML = '0 likes';\n    itemText.appendChild(mealName);\n    itemText.appendChild(mealLikes);\n\n    const likeBtn = document.createElement('i');\n    likeBtn.classList.add('bi', 'bi-heart', 'like-btn');\n    likeBtn.id = data[i].idMeal;\n\n    const button = document.createElement('button');\n    button.setAttribute('class', 'comment-btn');\n    button.setAttribute('id', `${data[i].idMeal}`);\n    button.setAttribute('type', 'button');\n    button.setAttribute('data-bs-toggle', 'modal');\n    button.setAttribute('data-bs-target', '#staticBackdrop');\n    button.innerHTML = 'comments';\n\n    mealLikes.appendChild(numOfLikes);\n    mealLikes.appendChild(likeBtn);\n\n    listItem.appendChild(itemImage);\n    listItem.appendChild(itemText);\n    itemText.appendChild(button);\n\n    mainDiv.appendChild(listItem);\n\n    const likesArray = await (0,_getlikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    likesCount(likeBtn, likesArray, numOfLikes);\n\n    likeBtn.addEventListener('click', async (e) => {\n      await (0,_postlikes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(likeBtn.id);\n\n      const newLikes = await (0,_getlikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n      likesCount(e.target, newLikes, numOfLikes);\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeList);\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/homelist.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _getmeals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getmeals.js */ \"./src/getmeals.js\");\n/* harmony import */ var _homelist_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homelist.js */ \"./src/homelist.js\");\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comments.js */ \"./src/comments.js\");\n/* harmony import */ var _assets_ramen_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/ramen.png */ \"./src/assets/ramen.png\");\n\n\n\n\n\n\nconst logoDiv = document.querySelector('.logo');\nconst logoImage = document.createElement('img');\nlogoImage.src = _assets_ramen_png__WEBPACK_IMPORTED_MODULE_4__;\nlogoImage.classList.add('logo-img');\n\nlogoDiv.appendChild(logoImage);\n\nwindow.addEventListener('load', async () => {\n  (0,_homelist_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(await (0,_getmeals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n});\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const buttonn = document.querySelector('.main-div');\n  const closeButton = document.querySelector('.btn-close');\n  closeButton.addEventListener('click', () => {\n    window.location.href = './index.html';\n  });\n  buttonn.addEventListener('click', async (e) => {\n    e.preventDefault();\n    if (e.target.textContent === 'comments') {\n      await (0,_comments_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(e.target.id);\n    }\n  });\n});\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/index.js?");

/***/ }),

/***/ "./src/postlikes.js":
/*!**************************!*\
  !*** ./src/postlikes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postLike = async (mealId) => {\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8WhiXHgGMaGrsfo6vYsR/likes', {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: mealId,\n    }),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  });\n  return response.text();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postLike);\n\n//# sourceURL=webpack://javascriptcapstone/./src/postlikes.js?");

/***/ }),

/***/ "./src/assets/ramen.png":
/*!******************************!*\
  !*** ./src/assets/ramen.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8dd1730214ca80dca928.png\";\n\n//# sourceURL=webpack://javascriptcapstone/./src/assets/ramen.png?");

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
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
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;