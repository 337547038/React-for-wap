var classnames = require("classnames");
var Radio = require("./Radio");
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
var RadioGroup = React.createClass({
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
            <div className={classnames('radio-group','clearfix',this.props.className)}>
                {this.props.options && this.props.options.map(function (r) {
                    var value = r.value == undefined ? r.text : r.value;
                    return <Radio
                        {...r}
                        value={value}
                        checked={value==this.state.value?true:false}
                        onChange={this._onChange}
                        name={this.props.name?this.props.name:'radio'}
                        />
                }.bind(this))}
            </div>
        )
    }
});
module.exports = RadioGroup;