/**
 * refresh 下拉刷新，默认不执行相关操作
 * loading 上拉刷新，默认不执行相关操作
 * tipsText　刷新时提示文件，数组
 * className　样式名，备用
 * */
var Iscroll = require("../../components/Iscroll");
var Ajax = require("../../components/Ajax");
var Test = React.createClass({
    render: function () {
        return (
            <div>
                {this.props.data && this.props.data.map(function (child) {
                    return <li>{child.title}--{child.href}</li>
                })}
            </div>
        )
    }
});
var Root = React.createClass({
    getInitialState: function () {
        return {data: ''}
    },
    componentDidMount: function () {
        this._ajax('package.json');
    },
    _ajax: function (url) {
        var th = this;
        Ajax.ajax({
            method: 'get',
            url: url,
            success: function (res) {
                th.setState({data: eval(res)});
            },
            failure: function () {
                //console.log('failure');
            }
        })
    },
    _refresh: function () {
        //刷新回调，执行完刷新操作后返回true给后台隐藏刷新提示等
        //console.log('刷新回调');
        this._ajax('package.json');//例如重新去加载数据
        return true;　//不返回时会一直显示刷新状态
    },
    _loading: function () {
        this._ajax('package.json?page=1');//例如重新去加载数据
       // return true;
    },
    //一个页面只允许出现一个Iscroll
    render: function () {
        return (
            <Iscroll refresh={this._refresh} loading={this._loading}>
                <p>21112</p>
                <Test data={this.state.data}/>
                <div style={{height:'900px'}}>&nbsp;</div>
                <p>21112</p><p>&nbsp;</p>
            </Iscroll>
        )
    }
});

ReactDOM.render(
    <Root/>
    , document.getElementById('main'));