var classnames = require('classnames');
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
var Button = React.createClass({
    render: function () {
        return (
            <button
                type={this.props.type?this.props.type:"button"}
                {...this.props}
                className={classnames('btn',this.props.className)}>
                {this.props.text}
            </button>
        )
    }
});

module.exports = Button;