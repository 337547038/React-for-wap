/**
 * 参数
 * display　显示状态　默认为true
 * showMask　显示遮罩层（显示不同的样式）　默认为true
 * complete　页面加载完成隐藏提示，否则需要手动
 * text 显示的文本
 * className 样式名，备用
 * */
var Loading = require("../../components/Loading");
var Root = React.createClass({
    getInitialState: function () {
        return {}
    },
    componentDidMount: function () {
        //this.refs.loading.setDisplay(false);
    },
    render: function () {
        return (
            <div>
                <h2>适用于放在模块中，手动关闭</h2>
                <Loading complete={false} showMask={false} ref="loading"/>
                <hr/>
                <img id="img1" src="http://pic1.win4000.com/wallpaper/f/51c3bb99a21ea.jpg" alt=""/>
                <Loading text="loading"/>
            </div>
        )
    }
});


ReactDOM.render(
    <Root/>
    , document.getElementById('main'));