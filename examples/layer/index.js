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

	var Loading = __webpack_require__(8);
	var Layer = __webpack_require__(7);
	var Root = React.createClass({displayName: "Root",
	    getInitialState: function () {
	        return {}
	    },
	    componentDidMount: function () {
	        //Alert.alert({title:'title',content:'content'});
	        //Alert.confirm({title:'title',content:'content'})
	        this.refs.layer.layerOpen();
	    },
	    render: function () {
	        return (
	            React.createElement("div", null, 
	                React.createElement(Layer, {autoClose: "30", ref: "layer", confirm: "ok", title: "t"}, "0000"), 
	                React.createElement(Loading, null)
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


/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var Button = __webpack_require__(1);
	var classnames = __webpack_require__(2);
	/**
	 * 参数
	 * showClose　//布尔　显示关闭，默认为true
	 * closeBack //关闭回调
	 * animation
	 * type
	 * confirm
	 * confirmBack
	 * cancel
	 * cancelBack
	 * className
	 * title
	 * opacity 背景透明度
	 * */
	var Layer = React.createClass({displayName: "Layer",
	    getInitialState: function () {
	        return {
	            display: false,
	            animation: 'layer-anim-' + this.props.animation
	        }
	    },
	    getDefaultProps: function () {
	        return {
	            showClose: true,//显示关闭
	            closeBack: '',//关闭回调
	            autoClose: '',//自动关闭
	            animation: '1',//动画，对应样式对的layer-anim-
	            type: '',//三种特殊情况text,success,failure
	            confirm: '',//确定按钮
	            confirmBack: '',//回调
	            cancel: '',//取消按钮
	            cancelBack: '',//回调
	            className: '',
	            title: '',
	            opacity: '0.5'//背景透明度
	        }
	    },
	    _close: function () {
	        //关闭
	        this.props.closeBack ? this.props.closeBack() : this.layerClose();
	    },
	    _confirm: function () {
	        this.props.confirmBack ? this.props.confirmBack() : this.layerClose();
	    },
	    _cancel: function () {
	        this.props.cancelBack ? this.props.cancelBack() : this.layerClose();
	    },
	    layerClose: function () {
	        this.setState({display: false, animation: ""});
	        clearInterval(this.timer);
	    },
	    layerOpen: function () {
	        this.setState({display: "block", animation: this.state.animation});
	        //计算倒计时
	        this.props.autoClose > 0 ?
	            this._handleCountdown() : "";
	    },
	    _handleCountdown: function () {
	        //倒计时
	        this.setState({autoClose: this.props.autoClose});
	        clearInterval(this.timer);
	        var i = this.props.autoClose;
	        this.timer = setInterval(function () {
	            i--;
	            this.setState({autoClose: i});
	            if (i == 0) {
	                this.layerClose();
	            }
	        }.bind(this), 1000);
	    },
	    render: function () {
	        var props = this.props;
	        var close = (
	            props.showClose ?
	                React.createElement("a", {href: "javascript:;", className: "ucs-layer-close", onClick: this._close}) : "");
	        var autoClose = (
	            this.props.autoClose > 0 ?
	                React.createElement("div", {className: "ucs-auto-close"}, React.createElement("span", null, this.state.autoClose), "秒后自动关闭!") : "");
	        var bodyContent = "";
	        if (props.type) {
	            bodyContent = (
	                React.createElement("div", {className: 'ucs-layer-'+props.type}, props.children)
	            )
	        } else {
	            bodyContent = props.children;
	        }
	        var button = "";
	        if (props.confirm || props.cancel) {
	            button = (
	                React.createElement("div", {className: "ucs-layer-footer"}, 
	                    props.confirm ?
	                        React.createElement(Button, {onClick: this._confirm, className: "btn-confirm", value: props.confirm}) : "", 
	                    props.cancel ?
	                        React.createElement(Button, {onClick: this._cancel, className: "btn-cancel", value: props.cancel}) : ""
	                )
	            );
	        }
	        return (
	            React.createElement("div", {className: classnames("ucs-layer",props.className), ref: "ucslayer", 
	                 style: {display: this.state.display ? "block" : "none",background:'rgba(0,0,0,' + this.props.opacity +')'}}, 
	                React.createElement("div", {className: "ucs-box"}, 
	                    React.createElement("div", {className: classnames('ucs-layer-body',this.state.animation)}, 
	                        close, autoClose, 
	                        props.title ?
	                            React.createElement("div", {className: "ucs-layer-header"}, props.title) : "", 
	                        React.createElement("div", {className: "ucs-layer-content"}, 
	                            bodyContent
	                        ), 
	                        button
	                    )
	                )
	            )
	        )
	    }
	});
	module.exports = Layer;

/***/ },
/* 8 */
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
/******/ ]);