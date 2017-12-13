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

	var Form = __webpack_require__(9);
	/*Demo10需要单独引入FormItem和Input，其它示例只需引入Form即可*/
	var FormItem = Form.FormItem;
	var Input = __webpack_require__(12);
	/**data数据
	 * item： label、labelIco、className(对item)、labelClass只有四个参数可传
	 * control：control控件类型（input）,剩下的为当前组件参数，其中表单控件name为必填项
	 *        control支持的类型 input、text、radio、radioGroup、select、code、imgCode、textarea、other。各类型使用可查看示例
	 * validate:数据验证规则
	 * other：预留的一个位置，可以是当前输入的一些提示之类或者写个单位什么，text为要显示的文本
	 * */
	var Demo1 = React.createClass({displayName: "Demo1",
	    getInitialState: function () {
	        return {getCode: true, showHidePassword: false}
	    },
	    _formButton: function () {
	        //这里会返回三个参数 表单值 是否通过验证 所有错误提示信息
	        var a = this.refs.form1.serialize();
	        console.log(a);
	    },
	    _getCode: function () {
	        //验证码倒计时
	        if (this.state.getCode) {
	            this.setState({getCode: false});
	            var refCode = document.getElementById('input-code');
	            refCode.className += ' disable';
	            var th = this;
	            var s = 60;
	            var timer = setInterval(function () {
	                refCode.innerHTML = s + "秒后重新获取";
	                if (s == 0) {
	                    th.setState({getCode: false});
	                    refCode.innerHTML = '重新发送验证码';
	                    clearInterval(timer);
	                    refCode.className = refCode.className.replace(' disable', '');
	                }
	                s--;
	            }, 1000);
	        }
	    },
	    _getImgCode: function () {
	        //图形验证码
	        console.log('get img code');
	    },
	    _showHidePassword: function () {
	        //显示隐藏密码
	        this.setState({showHidePassword: !this.state.showHidePassword});
	        //console.log(this.state.showHidePassword);
	    },
	    getFormData: function () {
	        return [
	            {
	                item: {label: '1用户名：', labelIcon: "*"},
	                control: {control: 'input', value: 'user', placeholder: "请输入用户名", name: 'userName1'}
	            },
	            {
	                item: {label: '2用户名：', labelIcon: "*"},
	                control: {control: 'input', value: '', placeholder: "请输入用户名", name: 'userName', className: 'user'},
	                validate: [
	                    {type: "required", msg: "用户名不能为空"},
	                    {type: "maxLength", msg: "用户名不能超过10位", maxLength: 10},
	                    {type: "minLength", msg: "用户名不能小于3个字符", minLength: 3}
	                ]
	            },
	            {
	                item: {label: '3用户名3：', labelIcon: "*"},
	                control: {control: 'input', value: '', placeholder: "获取焦点时显示提示", name: 'userName3'},
	                validate: [
	                    {type: 'tips', msg: '获取焦点时的输入提示，仅对input'},
	                    {type: "required", msg: "用户名不能为空"},
	                    {type: "maxLength", msg: "用户名不能超过10位", maxLength: 10},
	                    {type: "minLength", msg: "用户名不能小于3个字符", minLength: 3}
	                ]
	            },
	            {
	                item: {label: '4密码：', labelIcon: "*"},
	                control: {
	                    control: 'input',
	                    value: '',
	                    placeholder: "单击右边按钮可显示或隐藏密码",
	                    name: 'password',
	                    type: this.state.showHidePassword ? "" : "password",
	                    id: 'password1'
	                },
	                validate: [
	                    {type: "required", msg: "密码不能为空"}
	                ],
	                other: {text: '显示隐藏密码', onClick: this._showHidePassword}
	            },
	            {
	                item: {label: '5确认密码：', labelIcon: "*"},
	                control: {
	                    control: 'input',
	                    value: '',
	                    placeholder: "请输入确认密码",
	                    name: 'password',
	                    type: "password"
	                },
	                validate: [
	                    {type: "required", msg: "密码不能为空"},
	                    {
	                        type: "fn", msg: "两次输入密码不一致", validator: function (v) {
	                        var pv = document.getElementById('password1');
	                        if (v == pv.value) {
	                            return true
	                        } else {
	                            return false
	                        }
	                    }
	                    }
	                ]
	            },
	            {
	                item: {label: '6邮箱地址：', labelIcon: "*"},
	                control: {control: 'input', value: '', placeholder: "请输入邮箱", name: 'mail'},
	                validate: [
	                    {type: "required", msg: "邮箱不能为空"},
	                    {type: "mail", msg: "请输入正确的邮箱地址"}
	                ]
	            },
	            {
	                item: {label: '7正整数：', labelIcon: "*"},
	                control: {control: 'input', value: '', placeholder: "请输入正整数", name: 'init'},
	                validate: [
	                    {type: "digits", msg: "只能输入正整数"}
	                ]
	            },
	            {
	                item: {label: '8小数：', labelIcon: "*"},
	                control: {control: 'input', value: '', placeholder: "请输入小数", name: 'number'},
	                validate: [
	                    {type: "number", msg: "只能输入小数"}
	                ]
	            },
	            {
	                item: {label: '9手机号：', labelIcon: "*"},
	                control: {control: 'input', value: '', placeholder: "请输入手机号", name: 'phone'},
	                validate: [
	                    {type: "mobile", msg: "请输入正确的手机号"}
	                ]
	            },
	            {
	                item: {label: '10传真号：', labelIcon: "*"},
	                control: {control: 'input', value: '', placeholder: "请输入传真号", name: 'fax'},
	                validate: [
	                    {type: "fax", msg: "请输入正确的传真号"}
	                ]
	            },
	            {
	                item: {label: '11年龄自定验证：'},
	                control: {control: 'input', value: '', placeholder: "自定正则验证", name: 'age'},
	                validate: [
	                    {type: "required", msg: "自定验证不能为空"},
	                    {type: 'rule', msg: "年龄必须大于1岁，且不能超过120岁", rule: "/^(?:[1-9][0-9]?|1[01][0-9]|120)$/"}
	                ]
	            },
	            {
	                item: {label: '12回调验证：', labelIcon: "*"},
	                control: {control: 'input', value: '', placeholder: "请输入传，输入123通过", name: 'rule'},
	                validate: [
	                    {
	                        type: "fn", msg: "其它验证", validator: function (v) {
	                        if (v == '123') {
	                            return true
	                        } else {
	                            return false
	                        }
	                    }
	                    }
	                ]
	            },
	            {
	                item: {label: '13体重：', labelIcon: "*"},
	                control: {control: 'input', value: '', placeholder: "请输入体重", name: 'kg'},
	                other: {text: '单位kg'}
	            },
	            {
	                item: {label: '文本：'},
	                control: {control: 'text', text: "返显文本", title: '000', className: 'ucs-input'}
	            },
	            {
	                item: {label: '文本2：'},
	                control: {control: 'text', text: "返显文本"}
	            },
	            {
	                item: {label: '14单选：', labelIcon: "*"},
	                control: {
	                    control: "radio", text: '选项', value: '1', name: 'radiosingle'
	                },
	                validate: [
	                    {type: "required", msg: "单选不能为空"}
	                ],
	                other: {text: '只有一个选项时返回的结果为true或false'}
	            },
	            {
	                item: {label: "15单选组："},
	                control: {
	                    control: "radioGroup", value: '', name: 'radiog', options: [
	                        {text: "选项1", value: "1"},
	                        {text: "选项2", value: "2"},
	                        {text: "选项3", value: "3"}
	                    ]
	                },
	                validate: [
	                    {type: "required", msg: "单选组不能为空"}
	                ]
	            },
	            {
	                item: {label: '16多选：', labelIcon: "*"},
	                control: {
	                    control: "checkbox", text: '选项', value: '1', name: 'checkbox'
	                },
	                validate: [
	                    {type: "required", msg: "多选不能为空"}
	                ]
	            },
	            {
	                item: {label: '17多选组：'},
	                control: {
	                    control: "checkboxGroup", name: 'checkbox1', options: [
	                        {text: '选项1', value: 1},
	                        {text: '选项2', value: 2, checked: true},
	                        {text: '选项3', value: 3, checked: true},
	                        {text: '选项4', value: 4},
	                        {text: '选项5', value: 5},
	                        {text: '选项6', value: 6},
	                        {text: '选项7', value: 7}
	                    ]
	                },
	                validate: [
	                    {type: "required", msg: "多选不能为空"}
	                ]
	            },
	            // {
	            //     item: {label: "18下拉："},
	            //     control: {
	            //         control: "select", defaultText: '请选择', value: '2', name: 'select', options: [
	            //             {text: "选项1", value: "1",disabled:true},
	            //             {text: "选项2", value: "2"},
	            //             {text: "选项3", value: "3"}
	            //         ]
	            //     },
	            //     validate: [
	            //         {type: "required", msg: "下拉不能为空"}
	            //     ]
	            // },
	            {
	                item: {label: "19验证码：", className: 'code'},
	                control: {
	                    control: "code",
	                    name: 'code',
	                    //className: 'input-code',
	                    placeholder: '获取验证码显示倒计时',
	                    code: {text: '获取验证码', onClick: this._getCode, id: 'input-code'}
	                },
	                validate: [
	                    {type: "required", msg: "验证码不能为空"}
	                ]
	            },
	            {
	                item: {label: "20图形验证码：", className: 'img-code'},
	                control: {
	                    control: "imgCode",
	                    name: 'imgCode',
	                    // className: 'img-code',
	                    placeholder: '图片验证码',
	                    code: {url: '../images/code.jpg', onClick: this._getImgCode}
	                },
	                validate: [
	                    {type: "required", msg: "图形验证码不能为空"}
	                ]
	            },
	            {
	                item: {label: "21文本域：", className: 'auto-height'},
	                control: {
	                    control: "textarea", name: "textarea"
	                },
	                validate: [
	                    {type: "required", msg: "文本域不能为空"}
	                ]
	            }
	        ];
	    },
	    render: function () {
	        return (
	            React.createElement("div", null, 
	                React.createElement("h2", null, "通用表单示例"), 
	                React.createElement("p", null, "引用方法：var Form=UcsmyUi.Form;"
	                ), 
	                React.createElement("p", null, "注：同一个form不能存在相同的name。表单元素的name值用于取值，为必填值"), 
	                React.createElement(Form, {data: this.getFormData(), ref: "form1"}), 
	                React.createElement("a", {href: "javascript:;", onClick: this._formButton}, "提交表单")
	            )
	        )
	    }
	});
	var Demo2 = React.createClass({displayName: "Demo2",
	    _formButton: function () {
	        //这里会返回三个参数 表单值 是否通过验证 所有错误提示信息
	        var filed = ['userName', 'password', 'checkbox', 'radiosingle'];
	        var a = this.refs.form2.serialize(filed);
	        console.log(a);
	    },
	    getFormData: function () {
	        return [
	            {
	                item: {label: '用户名：', labelIcon: "*"},
	                control: {control: 'input', value: '', placeholder: "请输入用户名", name: 'userName', id: 'user'},
	                validate: [
	                    {type: "required", msg: "用户名不能为空0"},
	                    {type: "maxLength", msg: "用户名不能超过10位", maxLength: 10},
	                    {type: "minLength", msg: "用户名不能小于3个字符", minLength: 3}
	                ]
	            },
	            {
	                item: {label: '密码：', labelIcon: "*"},
	                control: {
	                    control: 'input',
	                    value: '',
	                    placeholder: "请输入密码",
	                    name: 'password',
	                    type: 'password',
	                    id: 'pas'
	                },
	                validate: [
	                    {type: "required", msg: "密码不能为空0"}
	                ]
	            },
	            {
	                item: {label: '邮箱地址：', labelIcon: "*"},
	                control: {control: 'input', value: '', placeholder: "请输入邮箱", name: 'mail'},
	                validate: [
	                    {type: "required", msg: "邮箱不能为空0"},
	                    {type: "mail", msg: "请输入正确的邮箱地址"}
	                ]
	            }
	        ]
	    },
	    render: function () {
	        return (
	            React.createElement("div", null, 
	                React.createElement("hr", null), 
	                React.createElement("h2", null, "Demo2：对指定输入框进行验证"), 
	                React.createElement(Form, {data: this.getFormData(), ref: "form2"}), 
	                React.createElement("a", {href: "javascript:;", onClick: this._formButton}, "提交表单,并对用户名和密码进行验证")
	            )
	        )
	    }
	});
	var Demo3 = React.createClass({displayName: "Demo3",
	    getFormData: function () {
	        return [
	            {
	                item: {labelClass: 'iconfont icon-1'},
	                control: {control: 'input', value: '', placeholder: "请输入用户名", name: 'userName', id: 'user'},
	                validate: [
	                    {type: "required", msg: "用户名不能为空0"},
	                    {type: "maxLength", msg: "用户名不能超过10位", maxLength: 10},
	                    {type: "minLength", msg: "用户名不能小于3个字符", minLength: 3}
	                ]
	            },
	            {
	                item: {labelClass: 'iconfont icon-2'},
	                control: {
	                    control: 'input',
	                    value: '',
	                    placeholder: "请输入密码",
	                    name: 'password',
	                    type: 'password',
	                    id: 'pas'
	                },
	                validate: [
	                    {type: "required", msg: "密码不能为空0"}
	                ]
	            }
	        ]
	    },
	    render: function () {
	        return (
	            React.createElement("div", null, 
	                React.createElement("hr", null), 
	                React.createElement("h2", null, "Demo3：label为字体图标时"), 
	                React.createElement("p", null, "没引用字体图标，也没写样式，请F12看"), 
	                React.createElement(Form, {data: this.getFormData()})
	            )
	        )
	    }
	});
	var Demo4 = React.createClass({displayName: "Demo4",
	    getFormData: function () {
	        return [
	            {
	                control: {control: 'input', value: '', placeholder: "请输入用户名", name: 'userName', id: 'user'},
	                validate: [
	                    {type: "required", msg: "用户名不能为空0"},
	                    {type: "maxLength", msg: "用户名不能超过10位", maxLength: 10},
	                    {type: "minLength", msg: "用户名不能小于3个字符", minLength: 3}
	                ]
	            },
	            {
	                control: {
	                    control: 'input',
	                    value: '',
	                    placeholder: "请输入密码",
	                    name: 'password',
	                    type: 'password',
	                    id: 'pas'
	                },
	                validate: [
	                    {type: "required", msg: "密码不能为空0"}
	                ]
	            }
	        ]
	    },
	    render: function () {
	        return (
	            React.createElement("div", null, 
	                React.createElement("hr", null), 
	                React.createElement("h2", null, "Demo4：label内容为空时"), 
	                React.createElement(Form, {data: this.getFormData()})
	            )
	        )
	    }
	});
	var Demo5 = React.createClass({displayName: "Demo5",
	    _confirmClick: function () {
	        var a = this.refs.form5.serialize();
	        console.log(a);
	    },
	    _cancelClick: function () {
	        console.log('cancel');
	    },
	    getFormData: function () {
	        return [
	            {
	                item: {label: '用户名0：'},
	                control: {control: 'input', value: '', placeholder: "请输入用户名", name: 'userName', id: 'user'},
	                validate: [
	                    {type: "required", msg: "用户名不能为空0"},
	                    {type: "maxLength", msg: "用户名不能超过10位", maxLength: 10},
	                    {type: "minLength", msg: "用户名不能小于3个字符", minLength: 3}
	                ]
	            },
	            {
	                item: {label: '密码：'},
	                control: {
	                    control: 'input',
	                    value: '',
	                    placeholder: "请输入密码",
	                    name: 'password',
	                    type: 'password',
	                    id: 'pas'
	                },
	                validate: [
	                    {type: "required", msg: "密码不能为空0"}
	                ]
	            },
	            {
	                item: {label: "&nbsp;"},
	                control: {
	                    control: 'button',
	                    button: [
	                        {name: "confirm", className: 'ucs-btn-confirm', text: '确定', onClick: this._confirmClick},
	                        {name: "cancel", className: 'ucs-btn-cancel', text: '取消', onClick: this._cancelClick}
	                    ]
	                },
	                validate: [
	                    {type: "required", msg: "密码不能为空0"}
	                ]
	            }
	        ]
	    },
	    render: function () {
	        return (
	            React.createElement("div", null, 
	                React.createElement("hr", null), 
	                React.createElement("h2", null, "Demo5： 使用Form里的Button"), 
	                React.createElement("p", null, "如果能满足使用，可以用Form里的Button"), 
	                React.createElement(Form, {data: this.getFormData(), ref: "form5"})
	            )
	        )
	    }
	});
	var Demo6 = React.createClass({displayName: "Demo6",
	    getFormData: function () {
	        return [
	            [
	                {
	                    item: {label: '用户名：'},
	                    control: {control: 'input', value: '', placeholder: "请输入用户名", name: 'userName', id: 'user'},
	                    validate: [
	                        {type: "required", msg: "用户名不能为空"},
	                        {type: "maxLength", msg: "用户名不能超过10位", maxLength: 10},
	                        {type: "minLength", msg: "用户名不能小于3个字符", minLength: 3}
	                    ]
	                },
	                {
	                    item: {label: '密码：'},
	                    control: {
	                        control: 'input',
	                        value: '',
	                        placeholder: "请输入密码",
	                        name: 'password',
	                        type: 'password',
	                        id: 'pas',
	                        ref: "password"
	                    },
	                    validate: [
	                        {type: "required", msg: "密码不能为空"}
	                    ]
	                }
	            ],
	            [
	                {
	                    item: {label: '电话：'},
	                    control: {
	                        control: 'input',
	                        value: '',
	                        placeholder: "请输入电话",
	                        name: 'tel'
	                    },
	                    validate: [
	                        {type: "required", msg: "电话不能为空"}
	                    ]
	                }
	            ]
	        ]
	    },
	    click: function () {
	        var a = this.refs.form7.serialize();
	        console.log(a);
	    },
	    render: function () {
	        return (
	            React.createElement("div", null, 
	                React.createElement("hr", null), 
	                React.createElement("h2", null, "Demo6：一个表单被划分几个部分时"), 
	                React.createElement("p", null, "将传入数据分组即可，输出时每组将会使用一个div包起来"), 
	                React.createElement(Form, {ref: "form7", data: this.getFormData()}), 
	                React.createElement("a", {href: "javascript:;", onClick: this.click}, "提交表单")
	            )
	        )
	    }
	});
	var Demo7 = React.createClass({displayName: "Demo7",
	    getInitialState: function () {
	        return {value: ''}
	    },
	    _onChange: function (e) {
	        //console.log('input change. value:' + e.target.value);
	        this.setState({value: e.target.value})
	    },
	    getFormData: function () {
	        return [
	            {
	                item: {label: '用户名：'},
	                control: {
	                    control: 'input',
	                    value: '',
	                    placeholder: "输入试试",
	                    name: 'userName',
	                    onChange: this._onChange
	                },
	                validate: [
	                    {type: "required", msg: "用户名不能为空0"},
	                    {type: "maxLength", msg: "用户名不能超过10位", maxLength: 10},
	                    {type: "minLength", msg: "用户名不能小于3个字符", minLength: 3}
	                ]
	            },
	            {
	                item: {label: '密码：'},
	                control: {
	                    control: 'input',
	                    value: '',
	                    placeholder: "请输入密码",
	                    name: 'password',
	                    type: 'password',
	                    id: 'pas'
	                },
	                validate: [
	                    {type: "required", msg: "密码不能为空0"}
	                ]
	            }
	        ]
	    },
	    render: function () {
	        return (
	            React.createElement("div", null, 
	                React.createElement("hr", null), 
	                React.createElement("h2", null, "Demo7： 输入框事件"), 
	                this.state.value, 
	                React.createElement(Form, {data: this.getFormData()})
	            )
	        )
	    }
	});
	var Demo8 = React.createClass({displayName: "Demo8",
	    getFormData: function () {
	        return [
	            {
	                item: {label: '用户名：'},
	                control: {
	                    control: 'input',
	                    value: '',
	                    placeholder: "输入试试",
	                    name: 'userName2'
	                }
	            },
	            {
	                control: {
	                    control: 'input',
	                    value: '',
	                    placeholder: "输入试试",
	                    name: 'userName'
	                },
	                validate: [
	                    {type: "required", msg: "用户名不能为空0"},
	                    {type: "maxLength", msg: "用户名不能超过10位", maxLength: 10},
	                    {type: "minLength", msg: "用户名不能小于3个字符", minLength: 3}
	                ]
	            },
	            {
	                item: {label: '密码：'},
	                control: {
	                    control: 'input',
	                    value: '',
	                    placeholder: "请输入密码",
	                    name: 'password',
	                    type: 'password'
	                },
	                validate: [
	                    {type: "required", msg: "密码不能为空0"}
	                ]
	            }
	        ]
	    },
	    render: function () {
	        return (
	            React.createElement("div", null, 
	                React.createElement("hr", null), 
	                React.createElement("h2", null, "Demo8： 一行有两个输入时"), 
	                React.createElement("p", null, "通过添加样式将用户名排在一行"), 
	                React.createElement("p", null, "也可以使用上面数据分组的方式"), 
	                React.createElement(Form, {data: this.getFormData(), className: "form-width"})
	            )
	        )
	    }
	});
	var Demo9 = React.createClass({displayName: "Demo9",
	    getFormData: function () {
	        return [
	            {
	                item: {label: '用户名：'},
	                control: {
	                    control: 'input',
	                    value: '',
	                    placeholder: "请输入用户名",
	                    name: 'userName'
	                },
	                validate: [
	                    {type: "required", msg: "用户名不能为空"},
	                    {type: "maxLength", msg: "用户名不能超过10位", maxLength: 10},
	                    {type: "minLength", msg: "用户名不能小于3个字符", minLength: 3}
	                ]
	            },
	            {
	                control: {control: 'other', content: this._getOtherContent()}
	            },
	            {
	                item: {label: '密码：'},
	                control: {
	                    control: 'input',
	                    value: '',
	                    placeholder: "请输入密码",
	                    name: 'password',
	                    type: 'password'
	                },
	                validate: [
	                    {type: "required", msg: "密码不能为空0"}
	                ]
	            }
	        ]
	    },
	    _getOtherContent: function () {
	        return (React.createElement("div", {className: "other"}, 
	            React.createElement("p", null, "这里可以是自定义任意一些不规则的内容这里可以是自定义任意一些不规则的内容"), 
	            React.createElement("table", null, 
	                React.createElement("tr", null, 
	                    React.createElement("th", null, "这里是表格布局"), 
	                    React.createElement("td", null, "内容")
	                )
	            )
	        ))
	    },
	    render: function () {
	        return (
	            React.createElement("div", null, 
	                React.createElement("hr", null), 
	                React.createElement("h2", null, "Demo9：表单内存在其它数据"), 
	                React.createElement("p", null, "很多时间表单页并不是只由一个个的表单控件组件，还会出现其它各种需要在表单控件间插件其它内容的情况。为此添加control:other类型，提高灵活可用性"), 
	                React.createElement(Form, {data: this.getFormData(), className: ""})
	            )
	        )
	    }
	});
	var Demo10 = React.createClass({displayName: "Demo10",
	    getFormData: function () {
	        return [
	            {
	                item: {label: '用户名：', labelIcon: "*"},
	                control: {control: 'input', value: '', placeholder: "请输入用户名", name: 'userName', id: 'user'},
	                validate: [
	                    {type: "required", msg: "用户名不能为空"},
	                    {type: "maxLength", msg: "用户名不能超过10位", maxLength: 10},
	                    {type: "minLength", msg: "用户名不能小于3个字符", minLength: 3}
	                ]
	            },
	            {
	                item: {label: '密码：', labelIcon: "*"},
	                control: {
	                    control: 'input',
	                    value: '',
	                    placeholder: "请输入密码",
	                    name: 'password',
	                    type: 'password',
	                    id: 'pas'
	                },
	                validate: [
	                    {type: "required", msg: "密码不能为空"}
	                ]
	            },
	            {
	                item: {label: '邮箱地址：', labelIcon: "*"},
	                control: {control: 'input', value: '', placeholder: "请输入邮箱", name: 'mail'},
	                validate: [
	                    {type: "required", msg: "邮箱不能为空"},
	                    {type: "mail", msg: "请输入正确的邮箱地址"}
	                ]
	            }
	        ]
	    },
	    render: function () {
	        return (
	            React.createElement("div", null, 
	                React.createElement("hr", null), 
	                React.createElement("h2", null, "Demo10：验证触发类型"), 
	                React.createElement("p", null, "triggerType:触发类型，1改变和失去焦点验证，2改变验证，3失去焦点验证，默认为1"), 
	                React.createElement("p", null, "示例只有失去焦点时验证"), 
	                React.createElement(Form, {data: this.getFormData(), triggerType: "3"})
	            )
	        )
	    }
	});
	var Demo11 = React.createClass({displayName: "Demo11",
	    _handleClick: function () {
	        //取值验证，通过FormItem的setTips方法显示提示
	        //是否显示验证提示 提示类型true正确false错误
	        var value = this.refs.input.getValue();
	        if (value == undefined || value == null) {
	            this.refs.item1.setTips(true, false, '不能为空');
	        } else {
	            this.refs.item1.setTips(true, true, '');
	        }
	    },
	    render: function () {
	        return (
	            React.createElement("div", null, 
	                React.createElement("hr", null), 
	                React.createElement("h2", null, "Demo11：零散或是上面几种没能满足时"), 
	                React.createElement("p", null, "引入formItem跟其它样式保持一致"), 
	                React.createElement("p", null, "这种方式要单独编写验证方法，如果需要验证"), 
	                React.createElement("p", null, "为了取值方便，建议将零散的FormItem放入到Form里面，同样可以序列化取值，相比前面的方法，只是少了验证"), 
	                React.createElement(FormItem, {ref: "item1"}, 
	                    React.createElement("div", {className: "label"}, React.createElement("span", null, "*"), "自定1："), 
	                    React.createElement(Input, {placeholder: "请输入", ref: "input"})
	                ), 
	                React.createElement(FormItem, {label: "自定2："}, 
	                    React.createElement(Input, {placeholder: "自定"})
	                ), 
	                React.createElement("a", {href: "javascript:;", onClick: this._handleClick}, "提交表单")
	            )
	        )
	    }
	});
	var Demo12 = React.createClass({displayName: "Demo12",
	    getInitialState: function () {
	        return {value1: '123', value2: ''}
	    },
	    _handleClick: function () {
	        this.setState({
	            value1: 'userName',
	            value2: 'userName2'
	        })
	    },
	    getFormData: function () {
	        return [
	            {
	                item: {label: '用户名：'},
	                control: {
	                    control: 'input',
	                    value: this.state.value1,
	                    placeholder: "请输入用户名",
	                    name: 'userName'
	                },
	                validate: [
	                    {type: "required", msg: "用户名不能为空"}
	                ]
	            },
	            {
	                item: {label: '用户名2：'},
	                control: {
	                    control: 'input',
	                    value: this.state.value2,
	                    placeholder: "请输入用户名",
	                    name: 'userName2'
	                },
	                validate: [
	                    {type: "required", msg: "用户名不能为空"},
	                    {type: "maxLength", msg: "用户名不能超过10位", maxLength: 10}
	                ]
	            }
	        ]
	    },
	    render: function () {
	        return (
	            React.createElement("div", null, 
	                React.createElement("hr", null), 
	                React.createElement("h2", null, "Demo12：动态填充/修改数据"), 
	                React.createElement("p", null, "通过setState赋值"), 
	                React.createElement(Form, {data: this.getFormData(), className: ""}), 
	                React.createElement("a", {href: "javascript:;", onClick: this._handleClick}, "赋值")
	            )
	        )
	    }
	});
	var Demo13 = React.createClass({displayName: "Demo13",
	    getInitialState: function () {
	        return {}
	    },
	    _handleClick: function () {
	        console.log(this.refs.form.serialize());
	    },
	    _keyDown: function (e) {
	        /*console.log(e.target.readOnly);
	        if (e.target.value.length > 5) {
	            return false
	        }*/
	    },
	    getFormData: function () {
	        return [
	            /*{
	             item: {label: '14单选：', labelIcon: "*"},
	             control: {
	             control: "radio", text: '选项', value: '1', name: 'radio'
	             },
	             validate: [
	             {type: "required", msg: "单选不能为空"}
	             ]
	             },*/
	            /* {
	             item: {label: '17多选组：'},
	             control: {
	             control: "checkboxGroup",name:'checkbox1',options:[
	             {text: '选项1', value: 1},
	             {text: '选项2', value: 2},
	             {text: '选项3', value: 3},
	             {text: '选项4', value: 4},
	             {text: '选项5', value: 5},
	             {text: '选项6', value: 6},
	             {text: '选项7', value: 7}
	             ]
	             },
	             validate: [
	             {type: "required", msg: "多选不能为空"}
	             ]
	             }*/
	        ]
	    },
	    render: function () {
	        return (
	            React.createElement("div", null, 
	                React.createElement("hr", null), 
	                React.createElement(Form, {data: this.getFormData(), className: "", ref: "form"}), 
	                React.createElement("a", {href: "javascript:;", onClick: this._handleClick}, "提交"), 
	                React.createElement(Input, {onKeyUp: this._keyDown, value: "1"})
	            )
	        )
	    }
	});
	var Root = React.createClass({displayName: "Root",
	    render: function () {
	        return (
	            React.createElement("div", null, 
	                React.createElement(Demo1, null), 
	                React.createElement(Demo2, null), 
	                React.createElement(Demo3, null), 
	                React.createElement(Demo4, null), 
	                React.createElement(Demo5, null), 
	                React.createElement(Demo6, null), 
	                React.createElement(Demo7, null), 
	                React.createElement(Demo8, null), 
	                React.createElement(Demo9, null), 
	                React.createElement(Demo10, null), 
	                React.createElement(Demo11, null), 
	                React.createElement(Demo12, null), 
	                React.createElement(Demo13, null)
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

/***/ },
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var Form = __webpack_require__(10);
	Form.FormItem = __webpack_require__(11);
	module.exports = Form;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * 表单组件
	 *
	 * @param [className] 样式
	 * @param [data] 表单数据
	 * @param [triggerType] 触发类型，1改变和失去焦点验证，2改变验证，3失去焦点验证，默认为1
	 * @param [validate] true是否对数据进行验证，提交表单和表单控件事件
	 * @param [validateShow] true是否在item项目里显示错误提示，validate为true时有效，即输入改变时不验证，仅在提交表单时返回验证结果
	 *
	 * 示例:
	 *
	 *     @example
	 *     <Form data=[]/>
	 */
	var FormItem = __webpack_require__(11);
	var Input = __webpack_require__(12);
	var Button = __webpack_require__(1);
	var Select = __webpack_require__(13);
	var Radio = __webpack_require__(14);
	var RadioGroup = Radio.RadioGroup;
	var Textarea = __webpack_require__(17);
	var Checkbox = __webpack_require__(3);
	var CheckboxGroup = Checkbox.Group;
	var Serialize = __webpack_require__(18);
	var ValidateRules = __webpack_require__(19);
	var classnames = __webpack_require__(2);
	var FormGroup = React.createClass({displayName: "FormGroup",
	    getInitialState: function () {
	        return {
	            formId: this.props.id ? this.props.id : 'form' + Math.random().toString(36).substr(2, 5)//随机给取个表单名
	        }
	    },
	    getDefaultProps: function () {
	        return {
	            formType: true,
	            validate: true,//验证数据
	            validateShow: true,
	            triggerType: 1
	        }
	    },
	    componentDidMount: function () {
	    },
	    _onChange: function (data, type, e) {
	        //表单项改变时
	        //SelectDropDown是返回的e为当前选中的值
	        var bool = false;
	        switch (this.props.triggerType.toString()) {
	            case "1":
	                bool = true;
	                break;
	            case "2":
	                if (type == 'change') {
	                    bool = true;
	                }
	                break;
	            case "3":
	                if (type == 'blur') {
	                    bool = true;
	                }
	                break;
	        }
	        if (bool) {
	            if (this.props.validateShow && this.props.validate) {
	                var value = '';
	                var name = '';
	                if (typeof e === 'string') {
	                    value = e;
	                    name = data.control.name;
	                } else {
	                    value = e.target.value;
	                    name = e.target.name;
	                }
	                this._validate(name, value);
	            }
	        }
	        data.control.onChange ? data.control.onChange(e) : "";
	        data.control.onBlur ? data.control.onBlur(e) : "";
	    },
	    _onFocus: function (data, e) {
	        //获取焦点时，输入框的提示信息
	        if (this.props.validateShow && this.props.validate && data.validate) {
	            for (var i in data.validate) {
	                if (data.validate[i].type === 'tips') {
	                    //取当前的名字name
	                    var item = this.refs['item' + data.control.name];
	                    item.setTips(this.props.validateShow, 1, data.validate[i].msg);
	                    break;
	                }
	            }
	        }
	        data.control.onFocus ? data.control.onFocus(e) : "";
	    },
	    /**
	     * 表单序列化取值
	     * @return [formValue,bool,errorTips]
	     * */
	    serialize: function (field) {
	        //序列化取值，返回[序列化值,验证是否通过,错误提示]
	        var form = ReactDOM.findDOMNode(this);
	        var bool = true;
	        var errorTip = [];
	        var formValue = Serialize.serializeArray(form);
	        if (field) {
	            var getValue = function (input) {
	                var value = '';
	                if (input.length > 1) {
	                    for (var i in input) {
	                        if ((input[i].type === 'radio' || input[i].type === 'checkbox') && input[i].checked) {
	                            value = input[i].value;
	                        }
	                    }
	                } else {

	                    //单选多选只有一个具没值时返回true false
	                    if ((input[0].type === 'radio' || input[0].type === 'checkbox') && input[0].value == 'on') {
	                        value = input[0].checked;
	                    } else {
	                        value = input[0].value;
	                    }
	                }
	                return value;
	            };
	            //对指定字段验证
	            for (var i = 0; i < field.length; i++) {
	                var input = form.querySelectorAll('[name="' + field[i] + '"]');
	                if (input.length > 0) {
	                    //这里排除下有可能验证的字段不在表单中，输入错误或删除忘记去掉时
	                    var value = getValue(input);
	                    var b = this._validate(field[i], value);
	                    if (b && b != -1) {
	                        bool = false;
	                        errorTip.push(b);//不通过
	                    }
	                }
	            }
	        } else {
	            if (this.props.validate) {
	                bool = true;
	                for (var i = 0; i < formValue.length; i++) {
	                    var b = this._validate(formValue[i].name, formValue[i].value);
	                    if (b && b != -1) {
	                        bool = false;
	                        errorTip.push(b);//不通过
	                    }
	                }
	            }
	        }
	        return [formValue, bool, errorTip];
	    },
	    _validate: function (name, value) {
	        //验证数据
	        //根据name取验证规则，返回空(通过) 不通过返回提示 -1时为异常
	        var rules = '';
	        if (this.refs[name] != undefined) {
	            rules = this.refs[name].props.validate;
	            if (rules) {
	                var result = ValidateRules(value, rules);
	                var item = this.refs['item' + name];
	                if (result) {
	                    //不通过
	                    item.setTips(this.props.validateShow, 3, result);
	                    return result;
	                } else {
	                    item.setTips(this.props.validateShow, 2, '');
	                    return ''
	                }
	            }
	        }
	        return -1
	    },
	    _createItem: function () {
	        var _array = [];
	        var data = this.props.data;
	        for (var i in data) {
	            if (isArray(data[i])) {
	                //如果是数组则继续for，并将每组用一个div包起来
	                _array.push(this._getItemFor(data[i]));
	            } else {
	                //这里ref要取得当前控件的name值，
	                //增加other，提高可用性
	                if (data[i].control.control == 'other') {
	                    _array.push(data[i].control.content);
	                } else {
	                    _array.push(React.createElement(FormItem, React.__spread({},  data[i].item, {ref: "item"+data[i].control.name}), 
	                        this._controlType(data[i])
	                    ));
	                }
	            }
	        }
	        function isArray(obj) {
	            return Object.prototype.toString.call(obj) === '[object Array]';
	        }

	        return _array;
	    },
	    _getItemFor: function (data) {
	        var _array = [];
	        for (var i in data) {
	            if (data[i].control.control == 'other') {
	                _array.push(data[i].control.content);
	            } else {
	                _array.push(React.createElement(FormItem, React.__spread({},  data[i].item, {ref: "item"+data[i].control.name}), 
	                    this._controlType(data[i])
	                ));
	            }
	        }
	        return (
	            React.createElement("div", {className: "ucs-group-box"}, _array)
	        )
	    },
	    _controlType: function (data) {
	        var props = {
	            onChange: this._onChange.bind(this, data, 'change'),
	            onBlur: data.control.control == 'input' ? this._onChange.bind(this, data, 'blur') : "",//失去焦点时仅对输入框有效
	            onFocus: data.control.control == 'input' ? this._onFocus.bind(this, data) : "",//获取焦点时仅对输入框有效
	            validate: data.validate ? data.validate : "",//将验证数据绑定到控件上
	            ref: data.control.name
	        };
	        var _control = [];
	        switch (data.control.control) {
	            case "input":
	                _control.push(React.createElement(Input, React.__spread({},  data.control,  props)));
	                break;
	            case "text":
	                _control.push(React.createElement("div", React.__spread({},  data.control, 
	                    {className: classnames('input-text',data.control.className)}), data.control.text));
	                break;
	            case "select":
	                _control.push(React.createElement(Select, React.__spread({},  data.control,  props)));
	                break;
	            case "textarea":
	                _control.push(React.createElement(Textarea, React.__spread({},  data.control,  props), data.control.value));
	                break;
	            case "radio":
	                _control.push(React.createElement(Radio, React.__spread({},  data.control,  props)));
	                break;
	            case "radioGroup":
	                _control.push(React.createElement(RadioGroup, React.__spread({},  data.control,  props)));
	                break;
	            case "checkbox":
	                _control.push(React.createElement(Checkbox, React.__spread({},  data.control,  props)));
	                break;
	            case "checkboxGroup":
	                _control.push(React.createElement(CheckboxGroup, React.__spread({},  data.control,  props)));
	                break;
	            case "code":
	                _control.push(React.createElement(Input, React.__spread({className: "ucs-input-code"},  data.control,  props)));
	                _control.push(React.createElement("a", React.__spread({href: "javascript:;"},  data.control.code), data.control.code.text));
	                break;
	            case "imgCode":
	                _control.push(React.createElement(Input, React.__spread({className: "ucs-input-code"},  data.control,  props)));
	                _control.push(React.createElement("img", React.__spread({src: data.control.code.url},  data.control.code)));
	                break;
	            case "button":
	                _control.push(this._getButton(data));
	                break;
	            default:
	                break;
	        }
	        if (data.other) {
	            _control.push(React.createElement("div", React.__spread({},  data.other, 
	                {className: classnames('other',data.other.className)}), data.other.text));
	        }
	        return _control;
	    },
	    _getButton: function (data) {
	        var button = [];
	        var btn = data.control.button;
	        if (btn) {
	            for (var i = 0; i < btn.length; i++) {
	                button.push(React.createElement(Button, React.__spread({},  btn[i]), btn[i].text));
	            }
	            return React.createElement("div", {className: "form-button"}, button);
	        } else {
	            return button;
	        }
	    },
	    render: function () {
	        return (
	            React.createElement("form", {id: this.state.formId, className: this.props.className}, 
	                this._createItem(), 
	                this.props.children
	            )
	        )
	    }
	});
	module.exports = FormGroup;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var classnames = __webpack_require__(2);
	/**
	 * FormItem
	 * 参数
	 *　label
	 * labelIcon 字段里出现的小红点
	 * className
	 *
	 * 示例
	 * <FormItem label="用户名" labelIcon="*"></FormItem>
	 * */
	var FormItem = React.createClass({displayName: "FormItem",
	    getInitialState: function () {
	        return {
	            tipsType: true,//提示类型1输入提示 2正确，3错误
	            tipsText: '',//提示语
	            tipsShow: false//是否显示验证提示
	        }
	    },
	    getDefaultProps: function () {
	        return {
	            label: "",
	            labelIcon: "",
	            className: "",
	            labelClass: ''
	        }
	    },
	    //设置验证提示
	    setTips: function (show, type, text) {
	        this.setState({
	            tipsType: type,
	            tipsText: text,
	            tipsShow: show
	        });
	        //对子节点输入框添加样式
	        if (show && type == 3) {
	            this._addErrorClass(type);
	        }
	    },
	    _addErrorClass: function (type) {
	        var el = ReactDOM.findDOMNode(this);
	        var input = el.querySelector('.ucs-input');
	        if (input) {
	            if (!type) {
	                //添加样式 如果没有则添加
	                if (input.className.indexOf('error') == -1) {
	                    input.className += ' error';
	                }
	            } else {
	                //移除样式
	                input.className = input.className.replace(' error', '');
	            }
	        }
	    },
	    render: function () {
	        var lable = "";
	        if (this.props.label || this.props.labelClass) {
	            lable = (React.createElement("label", {className: classnames('label',this.props.labelClass)}, 
	                this.props.labelIcon ? React.createElement("span", null, this.props.labelIcon) : "", 
	                this.props.label
	            ));
	        }
	        var tips = "";
	        if (this.state.tipsShow) {
	            var clType = '';
	            switch (this.state.tipsType) {
	                case 1:
	                    clType = 'tips';
	                    break;
	                case 2:
	                    clType = 'success';
	                    break;
	                case 3:
	                    clType = 'failure';
	                    break;
	            }
	            var exClass = classnames("ucs-form-explain", clType);
	            tips = (
	                React.createElement("div", {className: exClass}, 
	                    React.createElement("i", {className: 'iconfont icon-'+clType}), 
	                    this.state.tipsText
	                )
	            );
	        }
	        return (
	            React.createElement("div", {className: classnames('ucs-form-group',this.props.className)}, 
	                lable, 
	                React.createElement("div", {className: "ucs-form-box"}, 
	                    this.props.children
	                ), 
	                tips
	            )
	        )
	    }
	});
	module.exports = FormItem;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var classnames = __webpack_require__(2);
	/**
	 * Input
	 * 参数
	 * type
	 * className
	 * value
	 * onChange
	 * */
	var Input = React.createClass({displayName: "Input",
	    getInitialState: function () {
	        return {value: this.props.value}
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
	    getValue: function () {
	        return this.state.value;
	    },
	    render: function () {
	        return (
	            React.createElement("input", React.__spread({
	                type: this.props.type?this.props.type:"text"}, 
	                this.props, {onChange: this._onChange, 
	                className: classnames('input-control',this.props.className), 
	                value: this.state.value}))
	        )
	    }
	});
	module.exports = Input;

/***/ },
/* 13 */
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

/***/ },
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

/***/ },
/* 17 */
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

/***/ },
/* 18 */
/***/ function(module, exports) {

	/**
	 * formSerialize 表单序列化
	 * serialize(form)
	 * serializeArray(form)
	 * */
	var formSerialize = {
	    getValue: function (elements, type) {
	        var arr = [], value = '';
	        if (elements.length > 0) {
	            for (var i = 0; i < elements.length; i++) {
	                if (elements[i].checked) {
	                    if (type == 'checkbox') {
	                        arr.push(elements[i].value);
	                    } else {
	                        value = elements[i].value;
	                        break;
	                    }
	                }
	            }
	            if (type == 'checkbox') {
	                return arr.join(',');
	            }
	            else {
	                return value;
	            }
	        }
	        else {
	            //只有一个时
	            return elements.checked;
	        }
	    },
	    getCommCheckRadio: function (fieldName, form, type, temp_arr, arr, cr) {
	        if (temp_arr.indexOf(fieldName) == -1) {
	            temp_arr.push(fieldName);
	            var v = this.getValue(form.elements[fieldName], cr);
	            type == 'array' ?
	                arr.push({
	                    name: encodeURIComponent(fieldName),
	                    value: v
	                })
	                :
	                arr.push(encodeURIComponent(fieldName) + "=" + encodeURIComponent(this.getValue(form.elements[fieldName], cr)));
	        }
	    },
	    comm: function (form, type) {
	        var arr = new Array();
	        var temp_arr = [];
	        var elements = form.elements;
	        for (var i = 0, len = elements.length; i < len; i++) {
	            var field = elements[i];
	            // 不发送禁用的表单字段
	            if (field.disabled) {
	                continue;
	            }
	            switch (field.type) {
	                case undefined :
	                case "button" :
	                case "submit" :
	                case "reset" :
	                case "file" :
	                    break;
	                case "checkbox":
	                    this.getCommCheckRadio(field.name, form, type, temp_arr, arr, 'checkbox');
	                    break;
	                case "radio" :
	                    this.getCommCheckRadio(field.name, form, type, temp_arr, arr, 'radio');
	                    break;
	                /*var fieldName = field.name;
	                 //判断arr里有没存在当前名字了，如果存在则跳过
	                 if (temp_arr.indexOf(fieldName) == -1) {
	                 temp_arr.push(fieldName);
	                 type == 'array' ?
	                 arr.push({[encodeURIComponent(fieldName)]: encodeURIComponent(this.getValue(form.elements[fieldName], 'radio'))})
	                 :
	                 arr.push(encodeURIComponent(fieldName) + "=" + encodeURIComponent(this.getValue(form.elements[fieldName], 'radio')));
	                 }
	                 break;*/
	                default:
	                    type == 'array' ?
	                        arr.push({
	                            name: encodeURIComponent(field.name),
	                            value: encodeURIComponent(field.value)
	                        })
	                        :
	                        arr.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
	            }
	        }
	        if (type == 'array') {
	            return arr
	        }
	        else {
	            return arr.join('&')
	        }
	    },
	    serialize: function (form) {
	        return this.comm(form, 'string');
	    },
	    serializeArray: function (form) {
	        return this.comm(form, 'array');
	    }
	};
	module.exports = formSerialize;

/***/ },
/* 19 */
/***/ function(module, exports) {

	/**验证规则,通过返回空，不通过返回错误提示
	 * 示例
	 * var rulesTest = [
	 * {type: "required", msg: "required0"},
	 * {type: "digits", msg: "digits0"},
	 * {type: "mail", msg: "mail0"},
	 * {type: "rule", rule: "/^(?:[1-9][0-9]?|1[01][0-9]|120)$/", msg: "rule"},
	 *  {type: "fn", msg: "fn", validator: function (v) {
	 return false
	 }}
	 * ];*/
	var Rules = {
	    digits: /^[0-9]*[1-9][0-9]*$/,//正整数
	    number: /^\d+(\.\d+)?$/,//带小数
	    mobile: /^1[3|4|5|7|8]\d{9}$/,//手机
	    mail: /^[a-z0-9._%-]+@([a-z0-9-]+\.)+[a-z]{2,4}$/,
	    tel: /^0\d{2,3}-\d{7,8}$/,//电话020-00000
	    //mm: '/^[a-z0-9._%-]+@([a-z0-9-]+\.)+[a-z]{2,4}$|^1[3|4|5|7|8]\d{9}$/',//邮箱或手机
	    fax: /^(\d{3,4})?[-]?\d{7,8}$/
	};
	var isEmpty = function (v) {
	    return /^\s*$/g.test(v);
	};
	var isRules = function (v, r, type) {
	    if (type === 'rule') {
	        return eval(r).test(v);
	    }
	    else {
	        if (Rules[r] == undefined) {
	            return 'undefined';//按通过处理
	        }
	        return eval(Rules[r]).test(v);
	    }
	};
	var ValidateRules = function (v, rules) {
	    //单选及多选只有一个时，显示的值true或false
	    if (v === false) {
	        v = '';
	    }
	    for (var i = 0; i < rules.length; i++) {
	        var r = rules[i];
	        switch (r.type) {
	            case 'required':
	                if (isEmpty(v)) {
	                    return r.msg;
	                }
	                break;
	            case 'digits':
	            case 'number':
	            case 'mobile':
	            case 'mail':
	            case 'tel':
	            //case 'mm':
	            case 'fax':
	                if (!isEmpty(v) && !isRules(v, r.type)) {
	                    return r.msg;
	                }
	                break;
	            case 'maxLength':
	                if (!isEmpty(v) && (parseInt(v.length) > parseInt(r.maxLength))) {
	                    return r.msg;
	                }
	                break;
	            case 'minLength':
	                if (!isEmpty(v) && (parseInt(v.length) < parseInt(r.minLength))) {
	                    return r.msg;
	                }
	                break;
	            case 'rule':
	                if (!isEmpty(v) && !isRules(v, r.rule, 'rule')) {
	                    return r.msg;
	                }
	                break;
	            case 'fn':
	                if (!r.validator(v)) {
	                    return r.msg;
	                }
	                break;
	            default:
	                break;
	        }
	    }
	    return '';
	};
	module.exports = ValidateRules;

/***/ }
/******/ ]);