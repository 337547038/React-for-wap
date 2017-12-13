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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var Textarea = __webpack_require__(17);
	var Root = React.createClass({displayName: "Root",
	    getInitialState: function () {
	        return {}
	    },
	    componentDidMount: function () {

	    },
	    _onChange: function (e) {
	        console.log(e.target.value);
	    },
	    render: function () {
	        return (
	            React.createElement("div", null, 
	                React.createElement(Textarea, {disabled: "disabled"}, "禁用"), 
	                React.createElement(Textarea, {onChange: this._onChange, placeholder: "请输入"})
	            )
	        )
	    }
	});

	ReactDOM.render(
	    React.createElement(Root, null)
	    , document.getElementById('main'));

/***/ },

/***/ 2:
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


/***/ },

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

	var classnames = __webpack_require__(2);
	/**
	 * Textarea
	 * 参数
	 * className
	 * onChange
	 * */
	var Textarea = React.createClass({displayName: "Textarea",
	    getInitialState: function () {
	        return {}
	    },
	    _onChange: function (e) {
	        this.props.onChange ? this.props.onChange(e) : "";
	    },
	    /*componentWillReceiveProps: function (newProps) {
	     if (this.props.value != newProps.value) {
	     this.setState({value: newProps.value});
	     }
	     },*/
	    /*getValue: function () {
	     return this.state.value;
	     },*/
	    render: function () {
	        return (
	            React.createElement("textarea", {
	                className: classnames('textarea-control','input-control',this.props.className), 
	                name: this.props.name, 
	                disabled: this.props.disabled?"disabled":"", 
	                placeholder: this.props.placeholder, 
	                onChange: this._onChange}, this.props.children)
	        )
	    }
	});
	module.exports = Textarea;

/***/ }

/******/ });