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

	var Radio = __webpack_require__(14);
	var RadioGroup = Radio.RadioGroup;
	var Single = React.createClass({displayName: "Single",
	    _getValue: function () {
	        console.log(this.refs.radio.getValue());
	    },
	    _onChange: function (e) {
	        console.log(e.target.checked);
	    },
	    render: function () {
	        return (
	            React.createElement("div", null, 
	                React.createElement("h2", null, "单个应用"), 
	                React.createElement("p", null, React.createElement(Radio, {text: "选项1"})), 
	                React.createElement("p", null, React.createElement(Radio, {checked: "checked", text: "checked状态"})), 
	                React.createElement("p", null, React.createElement(Radio, {disabled: "disabled", text: "disabled状态"})), 
	                React.createElement("p", null, React.createElement(Radio, {checked: "checked", disabled: "disabled", text: "checked disabled状态"})), 
	                React.createElement("p", null, React.createElement(Radio, {onChange: this._onChange, text: "onChange测试"})), 
	                React.createElement("p", null, React.createElement(Radio, {ref: "radio", text: "取值测试"})), 
	                React.createElement("p", {onClick: this._getValue}, "取值")
	            )
	        )
	    }
	});
	var Radiolist = React.createClass({displayName: "Radiolist",
	    render: function () {
	        return (
	            React.createElement("div", null, 
	                React.createElement("h2", null, "单个在列表中应用"), 
	                React.createElement("p", null, React.createElement(Radio, {name: "radio1", text: "选项1"})), 
	                React.createElement("p", null, React.createElement(Radio, {name: "radio1", text: "选项2"})), 
	                React.createElement("p", null, React.createElement(Radio, {name: "radio1", text: "选项3"})), 
	                React.createElement("p", null, React.createElement(Radio, {name: "radio1", text: "选项4"})), 
	                React.createElement("p", null, React.createElement(Radio, {name: "radio1", text: "选项5"})), 
	                React.createElement("p", null, "设置同样的name,给每个添加onChange事件，点击时可取对应的值")
	            )
	        )
	    }
	});
	var Group = React.createClass({displayName: "Group",
	    _onClick: function () {
	        console.log(this.refs.getValue.getValue());
	    },
	    _onChange: function (e) {
	        console.log(e.target.value);
	    },
	    render: function () {
	        return (
	            React.createElement("div", null, 
	                React.createElement("h2", null, "组应用"), 
	                React.createElement("p", null, React.createElement(RadioGroup, {name: "te", options: [
	                {text:"选项1",value:"1"},
	                {text:"选项2",value:"2"},
	                {text:"选项3",value:"3",disabled:true}
	                ]})), 
	                React.createElement("p", null, 
	                    React.createElement(RadioGroup, {ref: "getValue", name: "sex", onChange: this._onChange, value: "男", options: [
	                {text:"男"},
	                {text:"女"}
	                ]})
	                ), 
	                React.createElement("p", {onClick: this._onClick}, "取值")
	            )
	        )
	    }
	});
	var Root = React.createClass({displayName: "Root",
	    getInitialState: function () {
	        return {}
	    },
	    componentDidMount: function () {

	    },
	    render: function () {
	        return (
	            React.createElement("div", null, 
	                React.createElement(Single, null), 
	                React.createElement("hr", null), 
	                React.createElement(Radiolist, null), 
	                React.createElement("hr", null), 
	                React.createElement(Group, null)
	            )
	        )
	    }
	});


	ReactDOM.render(
	    React.createElement(Root, null)
	    , document.getElementById('main'));

/***/ },
/* 1 */,
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
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var Radio = __webpack_require__(15);
	Radio.RadioGroup = __webpack_require__(16);
	module.exports = Radio;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var classnames = __webpack_require__(2);
	/**
	 * Radio
	 * 参数
	 * className
	 * text 显示的文本
	 * input radio所有属性
	 *
	 * 示例
	 * <Radio text="选项1" value="" name="" onChange=""/>
	 * */
	var Radio = React.createClass({displayName: "Radio",
	    getInitialState: function () {
	        return {
	            randomId: this.props.id ? this.props.id : "radio-" + Math.random().toString(36).substr(2, 10)
	        }
	    },
	    getDefaultProps: function () {

	    },
	    /**
	     * 获取Radio的value
	     * @return {bool}
	     *
	     * */
	    getValue: function () {
	        return this.refs.radio.checked
	    },
	    componentDidMount: function () {
	    },
	    render: function () {
	        return (
	            React.createElement("label", {for: this.state.randomId, className: classnames("ucs-radio",this.props.className)}, 
	                React.createElement("input", React.__spread({type: "radio", ref: "radio"},  this.props, {id: this.state.randomId, className: "radio-input"})), 
	                React.createElement("span", {className: "radio-inner"}), 
	                React.createElement("span", {className: "radio-text"}, this.props.text)
	            )
	        )
	    }
	});
	module.exports = Radio;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var classnames = __webpack_require__(2);
	var Radio = __webpack_require__(15);
	/**
	 * RadioGroup
	 * 参数
	 * className
	 * name
	 * value
	 *
	 * 示例
	 * <RadioGroup name="" value="" options={[
	                {text:"男"},
	                {text:"女"}
	                ]}/>
	 * */
	var RadioGroup = React.createClass({displayName: "RadioGroup",
	    getInitialState: function () {
	        return {value: this.props.value}
	    },
	    getDefaultProps: function () {
	        return {value: ''}
	    },
	    _onChange: function (e) {
	        this.setState({value: e.target.value});
	        this.props.onChange ? this.props.onChange(e) : "";
	    },
	    componentWillReceiveProps: function (newProps) {
	        if (this.props.value != newProps.value) {
	            this.setState({value: newProps.value});
	        }
	    },
	    /**
	     * 获取RadioGroup的value
	     * @return {string}
	     *
	     * */
	    getValue: function () {
	        return this.state.value;
	    },
	    /**
	     * 设置RadioGroup的value
	     * @param {string}
	     *
	     * */
	    setValue: function (v) {
	        this.setState({value: v});
	    },
	    render: function () {
	        return (
	            React.createElement("div", {className: classnames('radio-group','clearfix',this.props.className)}, 
	                this.props.options && this.props.options.map(function (r) {
	                    var value = r.value == undefined ? r.text : r.value;
	                    return React.createElement(Radio, React.__spread({}, 
	                        r, 
	                        {value: value, 
	                        checked: value==this.state.value?true:false, 
	                        onChange: this._onChange, 
	                        name: this.props.name?this.props.name:'radio'})
	                        )
	                }.bind(this))
	            )
	        )
	    }
	});
	module.exports = RadioGroup;

/***/ }
/******/ ]);