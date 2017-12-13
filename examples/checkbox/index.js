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

	var classnames = __webpack_require__(2);
	var Checkbox = __webpack_require__(3);
	var CheckboxGroup = Checkbox.Group;
	var Demo1 = React.createClass({displayName: "Demo1",
	    render: function () {
	        return (
	            React.createElement("div", null, 
	                React.createElement("h2", null, "基本用法"), 
	                React.createElement(Checkbox, {text: "选项1"}), 
	                React.createElement(Checkbox, {text: "选项2"}), 
	                React.createElement(Checkbox, {text: "选项3"}), 
	                React.createElement(Checkbox, {text: "选中", checked: "checked"}), 
	                React.createElement(Checkbox, {text: "禁用", disabled: "disabled"})
	            )
	        )
	    }
	});
	var Demo2 = React.createClass({displayName: "Demo2",
	    getInitialState: function () {
	        return {value: ''}
	    },
	    _onChange: function (e) {
	        console.log(e.target.value + "," + e.target.checked);
	        this.setState({value: '单选值：' + e.target.value + ",选中状态：" + e.target.checked})
	    },
	    render: function () {
	        return (
	            React.createElement("div", null, 
	                React.createElement("hr", null), 
	                React.createElement("h2", null, "Demo2：取值"), 
	                React.createElement("p", null, "当前控件点击时，通过e.target取值"), 
	                React.createElement("p", null, "没有传value时，返回的值始终为on，带value时始终为value，因此这value没意义"), 
	                React.createElement(Checkbox, {text: "单击取值", onChange: this._onChange}), 
	                React.createElement("br", null), 
	                React.createElement(Checkbox, {text: "单击取值2，value=1", onChange: this._onChange, value: "1"}), 
	                React.createElement("br", null), 
	                React.createElement("p", null, this.state.value)
	            )
	        )
	    }
	});
	var Demo3 = React.createClass({displayName: "Demo3",
	    getInitialState: function () {
	        return {value: ""}
	    },
	    _onClick: function () {
	        var value = this.refs.Checkbox.getValue();
	        console.log(value);
	    },
	    _onClick2: function () {
	        var value = this.refs.Checkbox2.getValue();
	        console.log(value);
	    },
	    render: function () {
	        return (
	            React.createElement("div", null, 
	                React.createElement("hr", null), 
	                React.createElement("h2", null, "Demo3：取值2"), 
	                React.createElement("p", null, this.state.value), 
	                React.createElement("p", null, "没有value时，选中与不选返回true或false", React.createElement("br", null), 
	                    "有value时选中返回value值，不选返回false"), 
	                React.createElement("p", null, "对于单个使用时，一般情况下不需要设置value，只有选与不选状态"), 

	                React.createElement(Checkbox, {text: "选项1没value", ref: "Checkbox"}), 
	                React.createElement("a", {href: "javascript:;", onClick: this._onClick}, "取值"), 
	                React.createElement("br", null), 
	                React.createElement(Checkbox, {text: "选项2有value", ref: "Checkbox2", value: "1"}), 
	                React.createElement("a", {href: "javascript:;", onClick: this._onClick2}, "取值")
	            )
	        )
	    }
	});
	var Demo4 = React.createClass({displayName: "Demo4",
	    getInitialState: function () {
	        return {checked: false}
	    },
	    _onClick: function () {
	        this.refs.Checkbox.setValue(true)
	    },
	    _onClickGet: function () {
	        var value = this.refs.Checkbox.getValue();
	        console.log(value);
	    },
	    _onClick2: function () {
	        this.setState({checked: true})
	    },
	    _onClickGet2: function () {
	        var value = this.refs.Checkbox2.getValue();
	        console.log(value);
	    },
	    render: function () {
	        return (
	            React.createElement("div", null, 
	                React.createElement("hr", null), 
	                React.createElement("h2", null, "Demo4：动态设置状态"), 
	                React.createElement("p", null, "两种设置状态方式"), 
	                React.createElement(Checkbox, {text: "选项", ref: "Checkbox"}), 
	                React.createElement("a", {href: "javascript:;", onClick: this._onClick}, "设值"), 
	                React.createElement("a", {href: "javascript:;", onClick: this._onClickGet, style: {marginLeft:'20px'}}, "取值"), 
	                React.createElement("br", null), 
	                React.createElement(Checkbox, {text: "选项2", checked: this.state.checked, ref: "Checkbox2"}), 
	                React.createElement("a", {href: "javascript:;", onClick: this._onClick2}, "state设值"), 
	                React.createElement("a", {href: "javascript:;", onClick: this._onClickGet2, style: {marginLeft:'20px'}}, "取值")
	            )
	        )
	    }
	});
	var Demo5 = React.createClass({displayName: "Demo5",
	    render: function () {
	        return (
	            React.createElement("div", null, 
	                React.createElement("hr", null), 
	                React.createElement("h2", null, "Demo5：在表格或列表中"), 
	                React.createElement("table", null, 
	                    React.createElement("tr", null, 
	                        React.createElement("td", null, React.createElement(Checkbox, {value: "1"})), 
	                        React.createElement("td", null, "1")
	                    ), 
	                    React.createElement("tr", null, 
	                        React.createElement("td", null, React.createElement(Checkbox, {value: "2"})), 
	                        React.createElement("td", null, "2")
	                    ), 
	                    React.createElement("tr", null, 
	                        React.createElement("td", null, React.createElement(Checkbox, {value: "3"})), 
	                        React.createElement("td", null, "3")
	                    )
	                )
	            )
	        )
	    }
	});
	var Demo6 = React.createClass({displayName: "Demo6",
	    getInitialState: function () {
	        return {value: ''}
	    },
	    getValue: function () {
	        var a = this.refs.checkbox.getValue();
	        console.log(a);
	        this.setState({value: a.toString()})
	    },
	    selectAll: function () {
	        this.refs.checkbox.selectAll(true);
	    },
	    selectNo: function () {
	        this.refs.checkbox.selectAll(false);
	    },
	    render: function () {
	        var data = [
	            {text: '禁用', value: 1, disabled: true},
	            {text: '选项2', value: 2},
	            {text: '选项3', value: 3, checked: true},
	            {text: '选项4', value: 4, checked: true},
	            {text: '选项5', value: 5},
	            {text: '选项6', value: 6},
	            {text: '选项7', value: 7},
	            {text: '选项8', value: '8y'}
	        ];
	        return (
	            React.createElement("div", null, 
	                React.createElement("hr", null), 
	                React.createElement("h2", null, "Demo6：组应用"), 
	                React.createElement(CheckboxGroup, {options: data, className: "a", ref: "checkbox"}), 
	                React.createElement("br", null), 
	                this.state.value, React.createElement("br", null), 
	                React.createElement("a", {href: "javascript:;", onClick: this.getValue}, "取值"), React.createElement("br", null), 
	                React.createElement("a", {href: "javascript:;", onClick: this.selectAll}, "全选"), React.createElement("br", null), 
	                React.createElement("a", {href: "javascript:;", onClick: this.selectNo}, "全不选"), React.createElement("br", null)
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
	                React.createElement(Demo1, null), 
	                React.createElement(Demo2, null), 
	                React.createElement(Demo3, null), 
	                React.createElement(Demo4, null), 
	                React.createElement(Demo5, null), 
	                React.createElement(Demo6, null)
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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var Checkbox = __webpack_require__(4);
	Checkbox.Group = __webpack_require__(5);
	module.exports = Checkbox;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var classnames = __webpack_require__(2);
	/**
	 * Checkbox组件
	 *
	 * @param [checked] 是否选中
	 * @param value value值
	 * @param [text] 显示的文案
	 * @param [disabled] 是否禁用
	 *
	 * 示例:
	 *
	 *     @example
	 *     <Checkbox ref="checkref" id="11" value="复选框1"  text="自定义内容" eventId="first"/>
	 */
	var Checkbox = React.createClass({displayName: "Checkbox",
	    getInitialState: function () {
	        return {
	            randomId: this.props.id ? this.props.id : "checkbox-" + Math.random().toString(36).substr(2, 10),
	            checked: this.props.checked
	        }
	    },
	    getDefaultProps: function () {
	        return {checked: false}
	    },
	    componentWillReceiveProps: function (newProps) {
	        if (this.props.checked != newProps.checked) {
	            this.setState({checked: newProps.checked});
	        }
	    },
	    _onChange: function (e) {
	        this.setState({checked: !this.state.checked});
	        this.props.onChange ? this.props.onChange(e) : ""
	    },
	    getValue: function () {
	        //设置有值时，选中返回当值，不选返回false
	        //对于没有设置value时，选中与不选返回true或false
	        if (this.props.value) {
	            if (this.state.checked) {
	                return this.props.value
	            } else {
	                return false
	            }
	        } else {
	            return this.state.checked;
	        }
	    },
	    setValue: function (b) {
	        this.setState({checked: b});
	    },
	    render: function () {
	        var props = {
	            id: this.state.randomId,
	            checked: this.state.checked,
	            onChange: this._onChange,
	            className: "ucs-checkbox-input"
	        };
	        return (
	            React.createElement("label", {for: this.state.randomId, className: classnames("ucs-checkbox",this.props.className)}, 
	                React.createElement("input", React.__spread({type: "checkbox"},  this.props,  props)), 
	                React.createElement("span", {className: "ucs-checkbox-inner"}), 
	                React.createElement("span", {className: "ucs-checkbox-text"}, this.props.text)
	            )
	        )
	    }
	});

	module.exports = Checkbox;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var classnames = __webpack_require__(2);
	var Checkbox = __webpack_require__(4);
	var Group = React.createClass({displayName: "Group",
	    getInitialState: function () {
	        return {}
	    },
	    componentWillMount: function () {
	        this.value = [];
	    },
	    getValue: function () {
	        return this.value;
	    },
	    _handleChange: function (e) {
	        var value = e.target.value;
	        var array = this.value;
	        if (e.target.checked) {
	            if (array.indexOf(value) == -1) {
	                array.push(value);
	            }
	        } else {
	            for (var i in array) {
	                if (array[i] == value) {
	                    array.splice(i, 1);
	                }
	            }
	        }
	    },
	    selectAll: function (b) {
	        this.value = [];
	        for (var i in this.refs) {
	            this.refs[i].setValue(b);
	        }
	        if (b) {
	            this.props.options.map(function (child) {
	                this.value.push(child.value.toString());
	            }.bind(this))
	        }
	    },
	    render: function () {
	        return (
	            React.createElement("div", {className: classnames('ucs-checkbox-group',this.props.className)}, 
	                this.props.options && this.props.options.map(function (child, index) {
	                    {
	                        child.checked && this.value.indexOf(child.value.toString()) == -1 ? this.value.push(child.value.toString()) : ""
	                    }
	                    return React.createElement(Checkbox, React.__spread({},  child, 
	                        //checked={this.state.value.indexOf(child.value)!=-1}
	                        {name: this.props.name?this.props.name:'checkbox1', 
	                        onChange: this._handleChange, 
	                        ref: "checkbox"+index})
	                    )
	                }.bind(this))
	            )
	        )
	    }
	});
	module.exports = Group;

/***/ }
/******/ ]);