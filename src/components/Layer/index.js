var Button = require('../Button');
var classnames = require("classnames");
/**
 * 参数
 * showClose　//布尔　显示关闭，默认为true
 * closeBack //关闭回调
 * animation
 * type
 * confirm
 * confirmBack
 * cancel
 * cancelBack
 * className
 * title
 * opacity 背景透明度
 * */
var Layer = React.createClass({
    getInitialState: function () {
        return {
            display: false,
            animation: 'layer-anim-' + this.props.animation
        }
    },
    getDefaultProps: function () {
        return {
            showClose: true,//显示关闭
            closeBack: '',//关闭回调
            autoClose: '',//自动关闭
            animation: '1',//动画，对应样式对的layer-anim-
            type: '',//三种特殊情况text,success,failure
            confirm: '',//确定按钮
            confirmBack: '',//回调
            cancel: '',//取消按钮
            cancelBack: '',//回调
            className: '',
            title: '',
            opacity: '0.5'//背景透明度
        }
    },
    _close: function () {
        //关闭
        this.props.closeBack ? this.props.closeBack() : this.layerClose();
    },
    _confirm: function () {
        this.props.confirmBack ? this.props.confirmBack() : this.layerClose();
    },
    _cancel: function () {
        this.props.cancelBack ? this.props.cancelBack() : this.layerClose();
    },
    layerClose: function () {
        this.setState({display: false, animation: ""});
        clearInterval(this.timer);
    },
    layerOpen: function () {
        this.setState({display: "block", animation: this.state.animation});
        //计算倒计时
        this.props.autoClose > 0 ?
            this._handleCountdown() : "";
    },
    _handleCountdown: function () {
        //倒计时
        this.setState({autoClose: this.props.autoClose});
        clearInterval(this.timer);
        var i = this.props.autoClose;
        this.timer = setInterval(function () {
            i--;
            this.setState({autoClose: i});
            if (i == 0) {
                this.layerClose();
            }
        }.bind(this), 1000);
    },
    render: function () {
        var props = this.props;
        var close = (
            props.showClose ?
                <a href="javascript:;" className="ucs-layer-close" onClick={this._close}/> : "");
        var autoClose = (
            this.props.autoClose > 0 ?
                <div className="ucs-auto-close"><span>{this.state.autoClose}</span>秒后自动关闭!</div> : "");
        var bodyContent = "";
        if (props.type) {
            bodyContent = (
                <div className={'ucs-layer-'+props.type}>{props.children}</div>
            )
        } else {
            bodyContent = props.children;
        }
        var button = "";
        if (props.confirm || props.cancel) {
            button = (
                <div className="ucs-layer-footer">
                    {props.confirm ?
                        <Button onClick={this._confirm} className="btn-confirm" value={props.confirm}/> : ""}
                    {props.cancel ?
                        <Button onClick={this._cancel} className="btn-cancel" value={props.cancel}/> : ""}
                </div>
            );
        }
        return (
            <div className={classnames("ucs-layer",props.className)} ref="ucslayer"
                 style={{display: this.state.display ? "block" : "none",background:'rgba(0,0,0,' + this.props.opacity +')'}}>
                <div className="ucs-box">
                    <div className={classnames('ucs-layer-body',this.state.animation)}>
                        {close}{autoClose}
                        {props.title ?
                            <div className="ucs-layer-header">{props.title}</div> : ""}
                        <div className="ucs-layer-content">
                            {bodyContent}
                        </div>
                        {button}
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Layer;