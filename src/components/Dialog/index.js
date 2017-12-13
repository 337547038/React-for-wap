var Layer = require("../Layer");
var ExtendLayer = React.createClass({
    componentDidMount: function () {
        this.layer = ReactDOM.findDOMNode(this);
        this.refs.layer.layerOpen();
    },
    close: function () {
        this.refs.layer.layerClose();
        this.layer.parentNode.removeChild(this.layer);
    },
    _close: function () {
        this.props.closeBack ? this.props.closeBack(this.layer) : this.close();
    },
    _confirm: function () {
        this.props.confirmBack ? this.props.confirmBack(this.layer) : this.close();
    },
    _cancel: function () {
        this.props.cancelBack ? this.props.cancelBack(this.layer) : this.close();
    },
    render: function () {
        return (
            <Layer ref="layer"
                   type="text" {...this.props}
                   confirmBack={this._confirm}
                   cancelBack={this._cancel}
                   closeBack={this._close}>
                {this.props.content}
            </Layer>
        )
    }
});
var Dialog = (function () {
    var msgArea = document.createElement('div');
    document.body.appendChild(msgArea);
    return {
        alert: function (param) {
            ReactDOM.render(<ExtendLayer title={param.title} content={param.content} confirm="确定"/>, msgArea);
        },
        confirm: function (param) {
            ReactDOM.render(<ExtendLayer {...param}/>, msgArea);
        }
    }
})();
module.exports = Dialog;