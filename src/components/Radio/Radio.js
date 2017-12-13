var classnames = require("classnames");
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
var Radio = React.createClass({
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
            <label for={this.state.randomId} className={classnames("ucs-radio",this.props.className)}>
                <input type="radio" ref="radio" {...this.props} id={this.state.randomId} className="radio-input"/>
                <span className="radio-inner"/>
                <span className="radio-text">{this.props.text}</span>
            </label>
        )
    }
});
module.exports = Radio;