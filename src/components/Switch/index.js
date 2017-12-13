var classnames = require('classnames');
var Switch = React.createClass({
    getInitialState: function () {
        return {}
    },
    getDefaultProps: function () {
        return {
            checked: false,
            showText: false
        }
    },
    componentWillReceiveProps: function (newProps) {
        if (this.props.checked != newProps.checked) {
            this.setState({checked: newProps.checked});
        }
    },
    _onClick: function () {
        this.setState({checked: !this.state.checked});
    },
    render: function () {
        var text = "";
        if (this.props.showText) {
            text = this.state.checked ? '开' : '关';
        }
        return (
            <span className={classnames('ucs-switch',this.props.className,{'switch-checked':this.state.checked})}
                  onClick={this._onClick}
            >
                <b className="switch-inner">{text}</b>
            </span>
        )
    }
});
module.exports = Switch;