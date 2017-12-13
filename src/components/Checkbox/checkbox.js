var classnames = require('classnames');
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
var Checkbox = React.createClass({
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
            <label for={this.state.randomId} className={classnames("ucs-checkbox",this.props.className)}>
                <input type="checkbox" {...this.props} {...props}/>
                <span className="ucs-checkbox-inner"/>
                <span className="ucs-checkbox-text">{this.props.text}</span>
            </label>
        )
    }
});

module.exports = Checkbox;
