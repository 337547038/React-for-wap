var classnames = require('classnames');
/**
 * 参数
 * display　显示状态　默认为true
 * showMask　显示遮罩层（显示不同的样式）　默认为true
 * complete　页面加载完成隐藏提示，否则需要手动
 * text 显示的文本
 * className 样式名，备用
 *
 * 示例
 *
 * <Loading/>
 *
 * */
var Loading = React.createClass({
    getInitialState: function () {
        return {display: this.props.display}
    },
    getDefaultProps: function () {
        return {
            display: true,
            showMask: true,//显示遮罩层,通过样式提供两种显示方式
            complete: true//页面加载完成隐藏提示，否则需要手动
        }
    },
    componentDidMount: function () {
        if (this.props.complete) {
            var th = this;
            //当页面加载状态改变的时候执行这个方法.
            document.onreadystatechange = function () {
                if (document.readyState == "complete") {
                    th.setState({display: false});
                } //当页面加载状态
            }
        }
    },
    //提供一个方法
    setDisplay: function (bool) {
        this.setState({display: bool});
    },
    componentWillReceiveProps: function (newProps) {
        if (this.props.display != newProps.display) {
            this.setState({display: newProps.display});
        }
    },
    render: function () {
        return (
            <div className={classnames('ucs-loading',{'display':!this.state.display},{'mask':this.props.showMask},this.props.className)}>
               <span className="ucs-loading-inner">
                  {this.props.text}
               </span>
            </div>
        )
    }
});
module.exports = Loading;