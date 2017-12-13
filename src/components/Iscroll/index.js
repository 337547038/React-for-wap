var IScroll = require("./iscroll-probe");
var Loading = require("../Loading");
/**
 * refresh 下拉刷新，默认不执行相关操作
 * loading 上拉刷新，默认不执行相关操作
 * tipsText　刷新时提示文件，数组
 * className　样式名，备用
 * */
var Scroll = React.createClass({
    getInitialState: function () {
        var t = this.props.tipsText;
        return {
            refreshText: t ? t[0] : '刷新页面',
            refreshTextIng: t ? t[1] : '正在刷新',
            loadingText: t ? t[2] : '加载更多',
            loadingTextIng: t ? t[3] : '加载中',
            rDownDisplay: false,//开始时隐藏下拉刷新
            lDownDisplay: false,//开始时隐藏上拉
            rClassName: '',
            lClassName: ''
        }
    },
    getDefaultProps: function () {
        return {
            refresh: '',
            loading: '',
            className: ''
        }
    },
    componentDidMount: function () {
        var th = this;
        function loaded() {
            th._loadingIScroll(th);
        }

        window.addEventListener("DOMContentLoaded", loaded, false);
        /*document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);*/
    },
    componentDidUpdate: function () {
    },
    componentWillReceiveProps:function (newProps) {
      console.log(newProps);
    },
    _loadingIScroll: function (th) {
        var myScroll;
        var pullDownFlag, pullUpFlag, loading = false;
        myScroll = new IScroll("#wrapper", {
            probeType: 2,//probeType：1对性能没有影响。在滚动事件被触发时，滚动轴是不是忙着做它的东西。probeType：2总执行滚动，除了势头，反弹过程中的事件。这类似于原生的onscroll事件。probeType：3发出的滚动事件与到的像素精度。注意，滚动被迫requestAnimationFrame（即：useTransition：假）。
            //scrollbars: true,//有滚动条
            //mouseWheel: true,//允许滑轮滚动
            fadeScrollbars: true,//滚动时显示滚动条，默认影藏，并且是淡出淡入效果
            bounce: true,//边界反弹
            // interactiveScrollbars:true,//滚动条可以拖动
            //shrinkScrollbars:'scale',// 当滚动边界之外的滚动条是由少量的收缩。'clip' or 'scale'.
            click: true,// 允许点击事件
            //keyBindings:true,//允许使用按键控制
            momentum: true// 允许有惯性滑动
        });
        myScroll.on("scroll", function () {
            if (!loading) {
                if (this.y > 40) {    //判断下拉
                    if (th.props.refresh) {
                        //myScroll.refresh();
                        th.setState({
                            rDownText: th.state.refreshText,
                            rDownDisplay: true,
                            rClassName: 'down'
                        });
                        pullDownFlag = 1;
                        loading = true
                    }
                } else if (this.y < (this.maxScrollY - 40)) {   //判断上拉
                    if (th.props.loading) {
                        //myScroll.refresh();
                        th.setState({
                            lDownText: th.state.loadingText,
                            lDownDisplay: true,
                            lClassName: 'up'
                        });
                        pullUpFlag = 1;
                        loading = true
                    }
                }
            }
        });
        myScroll.on('scrollEnd', function () {
            myScroll.refresh();
            if (pullDownFlag == 1) {
                //下拉刷新
                if (th.props.refresh) {
                    th.setState({rDownText: th.state.refreshTextIng, rClassName: ''});
                    if (th.props.refresh()) {
                        //返回的结果
                        myScroll.refresh();
                        th.setState({rDownDisplay: false});
                        pullDownFlag = 0;
                        loading = false;
                    }
                }
            } else if (pullUpFlag == 1) {
                if (th.props.loading) {
                    th.setState({lDownText: th.state.loadingTextIng, lClassName: ''});
                    if (th.props.loading()) {
                        myScroll.refresh();
                        th.setState({lDownDisplay: false});
                        pullUpFlag = 0;
                        loading = false;
                    }
                }
            }
        });
        this.scroll = myScroll;
    },
    render: function () {
        return (
            <div id="wrapper" className={this.props.className}>
                <div>
                    {this.props.refresh ?
                        <Loading complete={false}
                                 showMask={false}
                                 display={this.state.rDownDisplay}
                                 text={this.state.rDownText}
                                 className={this.state.rClassName}/>
                        : ""}
                    {this.props.children}
                    {this.props.loading ?
                        <Loading complete={false}
                                 showMask={false}
                                 display={this.state.lDownDisplay}
                                 text={this.state.lDownText}
                                 className={this.state.lClassName}/>
                        : ""}
                </div>
            </div>
        )
    }
});
module.exports = Scroll;