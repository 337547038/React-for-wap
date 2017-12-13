var classnames = require('classnames');
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
var Select = React.createClass({
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
            op_array.push(<option
                value={options[i].value==undefined?options[i].text : options[i].value}
                disabled={options[i].disabled?true:false}>
                {options[i].text}
            </option>)
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
            <select
                className={classnames("select-control",'input-control',this.props.className)}
                name={this.props.name}
                id={this.props.id}
                value={this.state.value}
                onChange={this._handleChange}
                disabled={this.props.disabled}>
                {this._createOptions()}
            </select>
        )
    }
});
module.exports = Select;