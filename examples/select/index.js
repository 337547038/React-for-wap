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

	var Select = __webpack_require__(13);

	var Root = React.createClass({displayName: "Root",
	    getInitialState: function () {
	        return {value: 5}
	    },
	    componentDidMount: function () {
	    },
	    getValue: function () {
	        console.log(this.refs.select.getValue());
	    },
	    setValue: function () {
	        this.setState({value: 4});
	        //this.refs.select.setValue(4);
	    },
	    render: function () {
	        return (
	            React.createElement("div", null, 
	                React.createElement(Select, {disabled: "disabled", options: [{text:'请选择'}]}), 
	                React.createElement(Select, {ref: "select", value: this.state.value, options: [
	                {text:'选项1',value:'1',disabled:true},
	                {text:'选项2',value:''},
	                {text:'选项3'},
	                {text:'选项4',value:4},
	                {text:'选项5',value:5}
	                ]}), 
	                React.createElement("div", {onClick: this.getValue}, "取值"), 
	                React.createElement("div", {onClick: this.setValue}, "设值")
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

/***/ 13:
/***/ function(module, exports, __webpack_require__) {

	var classnames = __webpack_require__(2);
	/**
	 * Select
	 * 参数
	 * className
	 * id
	 * name
	 * value
	 * options
	 * disabled
	 * onChange
	 *
	 * 示例
	 * <Select ref="select" value="1" options={[
	                {text:'选项1',value:'1',disabled:true},
	                {text:'选项2',value:''},
	                {text:'选项3'},
	                {text:'选项4',value:4},
	                {text:'选项5',value:5}
	                ]}/>
	 * */
	var Select = React.createClass({displayName: "Select",
	    getInitialState: function () {
	        return {value: this.props.value}
	    },
	    componentDidMount: function () {
	        //如果传入的value为空，设置value的值
	        var option = this.props.options;
	         if (option && !this.props.value && option.length > 0) {
	         var v = option[0].value == undefined ? option[0].text : option[0].value;
	          this.setState({value: v});
	         }
	        //console.log(this.props);
	    },
	    componentWillReceiveProps:function (newProps) {
	        if (this.props.value != newProps.value) {
	            this.setState({value: newProps.value});
	        }
	    },
	    _createOptions: function () {
	        var op_array = [];
	        var options = this.props.options;
	        for (var i in options) {
	            op_array.push(React.createElement("option", {
	                value: options[i].value==undefined?options[i].text : options[i].value, 
	                disabled: options[i].disabled?true:false}, 
	                options[i].text
	            ))
	        }
	        return op_array;
	    },
	    _handleChange: function (e) {
	        this.setState({value: e.target.value});
	        this.props.onChange ? this.props.onChange(e) : "";
	    },
	    getValue: function () {
	        return this.state.value;
	    },
	    setValue:function (v) {
	        this.setState({value: v});
	    },
	    render: function () {
	        return (
	            React.createElement("select", {
	                className: classnames("select-control",'input-control',this.props.className), 
	                name: this.props.name, 
	                id: this.props.id, 
	                value: this.state.value, 
	                onChange: this._handleChange, 
	                disabled: this.props.disabled}, 
	                this._createOptions()
	            )
	        )
	    }
	});
	module.exports = Select;

/***/ }

/******/ });