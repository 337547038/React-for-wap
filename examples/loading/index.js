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

	/**
	 * 参数
	 * display　显示状态　默认为true
	 * showMask　显示遮罩层（显示不同的样式）　默认为true
	 * complete　页面加载完成隐藏提示，否则需要手动
	 * text 显示的文本
	 * className 样式名，备用
	 * */
	var Loading = __webpack_require__(8);
	var Root = React.createClass({displayName: "Root",
	    getInitialState: function () {
	        return {}
	    },
	    componentDidMount: function () {
	        //this.refs.loading.setDisplay(false);
	    },
	    render: function () {
	        return (
	            React.createElement("div", null, 
	                React.createElement("h2", null, "适用于放在模块中，手动关闭"), 
	                React.createElement(Loading, {complete: false, showMask: false, ref: "loading"}), 
	                React.createElement("hr", null), 
	                React.createElement("img", {id: "img1", src: "http://pic1.win4000.com/wallpaper/f/51c3bb99a21ea.jpg", alt: ""}), 
	                React.createElement(Loading, {text: "loading"})
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

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

	var classnames = __webpack_require__(2);
	/**
	 * 参数
	 * display　显示状态　默认为true
	 * showMask　显示遮罩层（显示不同的样式）　默认为true
	 * complete　页面加载完成隐藏提示，否则需要手动
	 * text 显示的文本
	 * className 样式名，备用
	 *
	 * 示例
	 *
	 * <Loading/>
	 *
	 * */
	var Loading = React.createClass({displayName: "Loading",
	    getInitialState: function () {
	        return {display: this.props.display}
	    },
	    getDefaultProps: function () {
	        return {
	            display: true,
	            showMask: true,//显示遮罩层,通过样式提供两种显示方式
	            complete: true//页面加载完成隐藏提示，否则需要手动
	        }
	    },
	    componentDidMount: function () {
	        if (this.props.complete) {
	            var th = this;
	            //当页面加载状态改变的时候执行这个方法.
	            document.onreadystatechange = function () {
	                if (document.readyState == "complete") {
	                    th.setState({display: false});
	                } //当页面加载状态
	            }
	        }
	    },
	    //提供一个方法
	    setDisplay: function (bool) {
	        this.setState({display: bool});
	    },
	    componentWillReceiveProps: function (newProps) {
	        if (this.props.display != newProps.display) {
	            this.setState({display: newProps.display});
	        }
	    },
	    render: function () {
	        return (
	            React.createElement("div", {className: classnames('ucs-loading',{'display':!this.state.display},{'mask':this.props.showMask},this.props.className)}, 
	               React.createElement("span", {className: "ucs-loading-inner"}, 
	                  this.props.text
	               )
	            )
	        )
	    }
	});
	module.exports = Loading;

/***/ }

/******/ });