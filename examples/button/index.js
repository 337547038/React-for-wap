/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Button=__webpack_require__(1);
	var Root = React.createClass({displayName: "Root",
	    getInitialState: function () {
	        return {}
	    },
	    componentDidMount: function () {

	    },
	    render: function () {
	        return (
	            React.createElement("div", null, 
	                React.createElement("h2", null, "按钮类"), 
	                React.createElement("h3", null, "支持所有input=button属性"), 
	                React.createElement(Button, {className: "btn-confirm", text: "确定"}), 
	                React.createElement(Button, {className: "btn-cancel", text: "取消"}), 
	                React.createElement(Button, {className: "btn-disabled", text: "不可点"}), 
	                React.createElement(Button, {className: "btn-block", text: "块状"})
	            )
	        )
	    }
	});


	ReactDOM.render(
	    React.createElement(Root, null)
	    , document.getElementById('main'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var classnames = __webpack_require__(2);
	/**
	 * Button
	 * 参数
	 * type
	 * className
	 * onClick
	 *
	 * 示例
	 * <Button className="btn-confirm" value="确定"/>
	 * */
	var Button = React.createClass({displayName: "Button",
	    render: function () {
	        return (
	            React.createElement("button", React.__spread({
	                type: this.props.type?this.props.type:"button"}, 
	                this.props, 
	                {className: classnames('btn',this.props.className)}), 
	                this.props.text
	            )
	        )
	    }
	});
	module.exports = Button;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }
/******/ ]);